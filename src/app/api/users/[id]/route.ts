import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getAuthUser, getClientIp } from "@/lib/auth";
import {
  createAuditLog,
  ACTIONS,
  ENTITIES,
  type AuditAction,
} from "@/lib/audit";

// PATCH /api/users/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser || !["SUPERADMIN", "ADMIN"].includes(authUser.role)) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 },
      );
    }

    const { id } = params;
    const body = await req.json();
    const ip = getClientIp(req);

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    // Only SUPERADMIN can change roles or manage other ADMINs
    if (body.role && authUser.role !== "SUPERADMIN") {
      return NextResponse.json(
        { success: false, error: "Only SUPERADMIN can change roles" },
        { status: 403 },
      );
    }

    const updateData: Record<string, unknown> = {};
    let action: AuditAction = ACTIONS.USER_UPDATED;

    if (body.name) updateData.name = body.name;
    if (body.email) updateData.email = body.email;
    if (body.role) updateData.role = body.role;

    if (body.password) {
      updateData.passwordHash = await bcrypt.hash(body.password, 12);
      action = ACTIONS.USER_PASSWORD_CHANGED;
    }

    if (body.isActive === false) {
      updateData.isActive = false;
      action = ACTIONS.USER_DEACTIVATED;
      // Invalidate their session
      await prisma.activeSession.deleteMany({ where: { userId: id } });
    } else if (body.isActive === true) {
      updateData.isActive = true;
      action = ACTIONS.USER_REACTIVATED;
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });

    await createAuditLog({
      user: authUser,
      action,
      entity: ENTITIES.USER,
      entityId: id,
      meta: {
        changes: Object.keys(updateData),
        targetUser: existing.email,
        ip,
      },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, data: { user } });
  } catch (error) {
    console.error("[USERS/PATCH/:id]", error);
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 },
    );
  }
}

// DELETE /api/users/[id] — SUPERADMIN only (soft delete = deactivate)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser || authUser.role !== "SUPERADMIN") {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 },
      );
    }

    const { id } = params;
    if (id === authUser.id) {
      return NextResponse.json(
        { success: false, error: "Cannot delete yourself" },
        { status: 400 },
      );
    }

    const ip = getClientIp(req);
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    // Soft delete — deactivate and kill session
    await prisma.user.update({ where: { id }, data: { isActive: false } });
    await prisma.activeSession.deleteMany({ where: { userId: id } });

    await createAuditLog({
      user: authUser,
      action: ACTIONS.USER_DEACTIVATED,
      entity: ENTITIES.USER,
      entityId: id,
      meta: { targetUser: user.email, ip },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, message: "User deactivated" });
  } catch (error) {
    console.error("[USERS/DELETE/:id]", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete user" },
      { status: 500 },
    );
  }
}
