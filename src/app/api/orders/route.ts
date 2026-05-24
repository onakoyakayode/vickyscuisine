import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser, getClientIp } from "@/lib/auth";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";
import { generateOrderRef } from "@/lib/utils";

// POST /api/orders — Public endpoint for customer order creation
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, items, source = "CUSTOMER" } = body;
    const ip = getClientIp(req);

    if (!customerName || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Customer name and items are required" },
        { status: 400 }
      );
    }

    const total = items.reduce(
      (sum: number, item: { subtotal: number }) => sum + item.subtotal,
      0
    );

    let authUser = null;
    let createdById = null;

    // Admin-created orders require auth
    if (source === "ADMIN") {
      authUser = await getAuthUser(req);
      if (!authUser) {
        return NextResponse.json(
          { success: false, error: "Unauthorized" },
          { status: 401 }
        );
      }
      createdById = authUser.id;
    }

    const ref = generateOrderRef();

    const order = await prisma.order.create({
      data: {
        ref,
        customerName: customerName.trim(),
        customerPhone: customerPhone?.trim() || null,
        items,
        subtotal: total,
        total,
        source,
        createdById,
      },
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
      },
    });

    await createAuditLog({
      user: authUser,
      action: ACTIONS.ORDER_CREATED,
      entity: ENTITIES.ORDER,
      entityId: order.id,
      meta: {
        ref: order.ref,
        source,
        total,
        itemCount: items.length,
        customerName,
        ip,
      },
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true, data: { order } }, { status: 201 });
  } catch (error) {
    console.error("[ORDERS/POST]", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}

// GET /api/orders — Admin: list orders with filters
export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status") || undefined;
    const paymentStatus = searchParams.get("paymentStatus") || undefined;
    const source = searchParams.get("source") || undefined;
    const search = searchParams.get("search") || "";
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");

    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (status) where.status = status;
    if (paymentStatus) where.paymentStatus = paymentStatus;
    if (source) where.source = source;
    if (search) {
      where.OR = [
        { ref: { contains: search, mode: "insensitive" } },
        { customerName: { contains: search, mode: "insensitive" } },
        { customerPhone: { contains: search } },
      ];
    }
    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) (where.createdAt as Record<string, unknown>).gte = new Date(dateFrom);
      if (dateTo) {
        const end = new Date(dateTo);
        end.setHours(23, 59, 59, 999);
        (where.createdAt as Record<string, unknown>).lte = end;
      }
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          createdBy: { select: { id: true, name: true, email: true } },
          confirmedBy: { select: { id: true, name: true, email: true } },
        },
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        orders,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("[ORDERS/GET]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
