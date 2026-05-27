import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { EventStatus } from "@/generated/prisma";

export async function GET(req: NextRequest) {
  try {
    const user = await getAuthUser(req);

    if (!user || !["ADMIN", "SUPERADMIN"].includes(user.role)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(req.url);
    const statusParam = searchParams.get("status");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 20;

    const where: any = {};
    if (statusParam) where.status = statusParam as EventStatus;
    Object.values(EventStatus).includes(statusParam as EventStatus);

    const [events, total] = await Promise.all([
      prisma.eventOrder.findMany({
        where,
        include: {
          menuSelections: {
            include: {
              menuItem: {
                select: {
                  id: true,
                  name: true,
                  priceNGN: true,
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
          payments: {
            orderBy: { paidAt: "desc" },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),

      prisma.eventOrder.count({ where }),
    ]);

    // 🧠 COMPUTED PRICING (SOURCE OF TRUTH VALIDATION)
    const enrichedEvents = events.map((event) => {
      const menuTotal = event.menuSelections.reduce((sum, item) => {
        return sum + item.quantity * item.unitPrice;
      }, 0);

      const serviceBase = (event.perHeadRateNGN || 0) * event.guestCount;

      const deliveryFee = event.transportFeeNGN || 0;
      const setupFee = event.setupFeeNGN || 0;
      const discount = event.discountNGN || 0;

      const computedTotal =
        menuTotal + serviceBase + deliveryFee + setupFee - discount;

      return {
        ...event,
        computed: {
          menuTotal,
          serviceBase,
          deliveryFee,
          setupFee,
          discount,
          grandTotal: computedTotal,
        },
        // optional safety flag
        priceMismatch:
          event.totalNGN !== null &&
          event.totalNGN !== undefined &&
          Math.abs((event.totalNGN || 0) - computedTotal) > 1,
      };
    });

    return NextResponse.json({
      success: true,
      data: enrichedEvents,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("[ADMIN/EVENTS GET]", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}
