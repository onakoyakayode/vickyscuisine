import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getAuthUser, getClientIp } from "@/lib/auth";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";

// GET /api/users — ADMIN+
export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser || !["SUPERADMIN", "ADMIN"].includes(authUser.role)) {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
    }

    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        activeSession: { select: { createdAt: true, ip: true } },
      },
    });

    return NextResponse.json({ success: true, data: { users } });
  } catch (error) {
    console.error("[USERS/GET]", error);
    return NextResponse.json({ success: false, error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST /api/users — SUPERADMIN only
export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser || authUser.role !== "SUPERADMIN") {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
    }

    const { name, email, password, role } = await req.json();
    const ip = getClientIp(req);

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Email already in use" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, passwordHash, role: role || "CASHIER" },
      select: { id: true, name: true, email: true, role: true, isActive: true, createdAt: true },
    });

    await createAuditLog({
      user: authUser,
      action: ACTIONS.USER_CREATED,
      entity: ENTITIES.USER,
      entityId: user.id,
      meta: { name, email, role: user.role, ip },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, data: { user } }, { status: 201 });
  } catch (error) {
    console.error("[USERS/POST]", error);
    return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
  }
}
