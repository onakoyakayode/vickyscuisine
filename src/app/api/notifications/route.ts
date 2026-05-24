import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getClientIp } from "@/lib/auth";
import { sendReceiptNotification, buildWhatsAppDeepLink, buildReceiptMessage } from "@/lib/notifications";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";
import { formatDateTime } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { orderId, forceDeepLink } = await req.json();
    const ip = getClientIp(req);

    if (!orderId) {
      return NextResponse.json({ success: false, error: "Order ID required" }, { status: 400 });
    }

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    if (!order.customerPhone) {
      return NextResponse.json(
        { success: false, error: "No phone number on order" },
        { status: 400 }
      );
    }

    const items = order.items as { name: string; qty: number; subtotal: number }[];
    const { date, time } = formatDateTime(order.createdAt.toISOString());

    // If customer wants deep link (client-side WA)
    if (forceDeepLink) {
      const message = buildReceiptMessage({
        phone: order.customerPhone,
        customerName: order.customerName,
        orderRef: order.ref,
        items,
        total: order.total,
        date,
        time,
      });
      const deepLink = buildWhatsAppDeepLink(order.customerPhone, message);
      return NextResponse.json({ success: true, data: { deepLink, method: "deeplink" } });
    }

    const result = await sendReceiptNotification({
      phone: order.customerPhone,
      customerName: order.customerName,
      orderRef: order.ref,
      items,
      total: order.total,
      date,
      time,
    });

    await createAuditLog({
      action: result.success ? ACTIONS.WHATSAPP_SENT : ACTIONS.NOTIFICATION_FAILED,
      entity: ENTITIES.NOTIFICATION,
      entityId: orderId,
      meta: {
        method: result.method,
        success: result.success,
        messageId: result.messageId,
        error: result.error,
        phone: order.customerPhone,
        ip,
      },
      ip,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("[NOTIFICATIONS/POST]", error);
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
