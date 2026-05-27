// src/app/api/events/order/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { EventType, ServiceType, VenueType } from "@/generated/prisma";

function generateOrderRef(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `EVT-${year}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      clientName,
      clientPhone,
      clientEmail,
      clientWhatsApp,
      eventType,
      eventDate,
      eventTime,
      guestCount,
      venueType,
      venueLGA,
      venueAddress,
      serviceType,
      specialRequests,
      menuSelections,
    } = body;

    // Validate
    if (
      !clientName ||
      !clientPhone ||
      !eventType ||
      !guestCount ||
      !eventDate ||
      !serviceType
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Calculate menu total
    const menuTotal = menuSelections.reduce(
      (sum: number, item: any) => sum + item.quantity * item.unitPrice,
      0,
    );

    // Create order - ONLY use fields that exist in schema
    const order = await prisma.eventOrder.create({
      data: {
        orderRef: generateOrderRef(),
        clientName,
        clientPhone,
        clientEmail,
        clientWhatsApp,
        eventType: eventType as EventType,
        eventDate: new Date(eventDate),
        eventTime,
        guestCount,
        venueType: (venueType as VenueType) || "NOT_SPECIFIED",
        venueLGA,
        venueAddress,
        serviceType: serviceType as ServiceType,
        subtotalNGN: menuTotal,
        totalNGN: menuTotal,
        specialRequests,
        status: "PENDING_REVIEW",
        paymentStatus: "UNPAID",
        menuSelections: {
          create: menuSelections.map((selection: any) => ({
            menuItemId: selection.menuItemId || selection.optionId,
            quantity: selection.quantity,
            unitPrice: selection.unitPrice,
            totalPrice: selection.quantity * selection.unitPrice,
          })),
        },
      },
    });

    return NextResponse.json({
      success: true,
      orderRef: order.orderRef,
      id: order.id,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to submit order",
      },
      { status: 500 },
    );
  }
}
