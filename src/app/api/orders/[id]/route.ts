import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser, getClientIp } from "@/lib/auth";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";

// GET /api/orders/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    // Allow public lookup by ref (for customer receipt page)
    const isRef = id.startsWith("VCN-");
    const order = await prisma.order.findFirst({
      where: isRef ? { ref: id } : { id },
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
        confirmedBy: { select: { id: true, name: true, email: true } },
      },
    });

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: { order } });
  } catch (error) {
    console.error("[ORDERS/GET/:id]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch order" },
      { status: 500 },
    );
  }
}

// PATCH /api/orders/[id] — Update order (admin)
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { id } = params;
    const body = await req.json();
    const ip = getClientIp(req);

    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 },
      );
    }

    const {
      status,
      paymentMethod,
      paymentStatus,
      notes,
      customerName,
      customerPhone,
      items,
    } = body;

    const updateData: Record<string, unknown> = {};
    let action:
      | "ORDER_UPDATED"
      | "ORDER_PAYMENT_CONFIRMED"
      | "ORDER_CANCELLED" = ACTIONS.ORDER_UPDATED;

    if (status !== undefined) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;
    if (customerName !== undefined) updateData.customerName = customerName;
    if (customerPhone !== undefined) updateData.customerPhone = customerPhone;

    if (items !== undefined) {
      updateData.items = items;
      const newTotal = items.reduce(
        (sum: number, item: { subtotal: number }) => sum + item.subtotal,
        0,
      );
      updateData.subtotal = newTotal;
      updateData.total = newTotal;
    }

    // Payment confirmation
    if (paymentMethod !== undefined && paymentStatus === "PAID") {
      updateData.paymentMethod = paymentMethod;
      updateData.paymentStatus = "PAID";
      updateData.confirmedById = authUser.id;
      updateData.confirmedAt = new Date();
      updateData.status = "CONFIRMED";
      action = ACTIONS.ORDER_PAYMENT_CONFIRMED;
    } else {
      if (paymentMethod !== undefined) updateData.paymentMethod = paymentMethod;
      if (paymentStatus !== undefined) updateData.paymentStatus = paymentStatus;
    }

    if (status === "CANCELLED") {
      action = ACTIONS.ORDER_CANCELLED;
    }

    const order = await prisma.order.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
        confirmedBy: { select: { id: true, name: true, email: true } },
      },
    });

    await createAuditLog({
      user: authUser,
      action,
      entity: ENTITIES.ORDER,
      entityId: order.id,
      meta: {
        ref: order.ref,
        changes: body,
        previousStatus: existing.status,
        previousPaymentStatus: existing.paymentStatus,
        ip,
      },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, data: { order } });
  } catch (error) {
    console.error("[ORDERS/PATCH/:id]", error);
    return NextResponse.json(
      { success: false, error: "Failed to update order" },
      { status: 500 },
    );
  }
}

// DELETE /api/orders/[id] — SUPERADMIN only
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser || authUser.role !== "SUPERADMIN") {
      return NextResponse.json(
        { success: false, error: "Forbidden — SUPERADMIN only" },
        { status: 403 },
      );
    }

    const { id } = params;
    const ip = getClientIp(req);

    const order = await prisma.order.findUnique({ where: { id } });
    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 },
      );
    }

    await prisma.order.delete({ where: { id } });

    await createAuditLog({
      user: authUser,
      action: "ORDER_DELETED",
      entity: ENTITIES.ORDER,
      entityId: id,
      meta: { ref: order.ref, total: order.total, ip },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, message: "Order deleted" });
  } catch (error) {
    console.error("[ORDERS/DELETE/:id]", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete order" },
      { status: 500 },
    );
  }
}
