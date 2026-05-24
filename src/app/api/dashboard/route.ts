import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { startOfDay, endOfDay, subDays, format } from "date-fns";

export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);

    const [
      totalOrders,
      pendingOrders,
      confirmedOrders,
      cancelledOrders,
      todayOrders,
      revenueData,
      todayRevenueData,
      paymentBreakdown,
      recentOrders,
    ] = await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { status: "PENDING" } }),
      prisma.order.count({ where: { status: "CONFIRMED" } }),
      prisma.order.count({ where: { status: "CANCELLED" } }),
      prisma.order.count({ where: { createdAt: { gte: todayStart, lte: todayEnd } } }),

      // Total revenue (paid orders)
      prisma.order.aggregate({
        where: { paymentStatus: "PAID" },
        _sum: { total: true },
      }),

      // Today's revenue
      prisma.order.aggregate({
        where: {
          paymentStatus: "PAID",
          confirmedAt: { gte: todayStart, lte: todayEnd },
        },
        _sum: { total: true },
      }),

      // Payment method breakdown
      prisma.order.groupBy({
        by: ["paymentMethod"],
        where: { paymentStatus: "PAID", paymentMethod: { not: null } },
        _sum: { total: true },
        _count: true,
      }),

      // Recent orders
      prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        include: {
          createdBy: { select: { id: true, name: true, email: true } },
          confirmedBy: { select: { id: true, name: true, email: true } },
        },
      }),
    ]);

    // Build hourly data for today
    const hourlyOrders = await prisma.order.findMany({
      where: { createdAt: { gte: todayStart, lte: todayEnd } },
      select: { createdAt: true, total: true, paymentStatus: true },
    });

    const hourlyMap: Record<string, { orders: number; revenue: number }> = {};
    for (let h = 0; h < 24; h++) {
      const key = `${String(h).padStart(2, "0")}:00`;
      hourlyMap[key] = { orders: 0, revenue: 0 };
    }
    hourlyOrders.forEach((o) => {
      const h = new Date(o.createdAt).getHours();
      const key = `${String(h).padStart(2, "0")}:00`;
      hourlyMap[key].orders += 1;
      if (o.paymentStatus === "PAID") hourlyMap[key].revenue += o.total;
    });

    const hourlyData = Object.entries(hourlyMap).map(([hour, data]) => ({
      hour,
      ...data,
    }));

    // Last 7 days revenue
    const last7Days = await Promise.all(
      Array.from({ length: 7 }, (_, i) => {
        const day = subDays(now, 6 - i);
        return prisma.order.aggregate({
          where: {
            paymentStatus: "PAID",
            confirmedAt: { gte: startOfDay(day), lte: endOfDay(day) },
          },
          _sum: { total: true },
          _count: true,
        }).then((r) => ({
          date: format(day, "EEE"),
          revenue: r._sum.total || 0,
          orders: r._count,
        }));
      })
    );

    const paymentBreakdownObj = { CASH: 0, TRANSFER: 0, POS: 0 } as Record<string, number>;
    paymentBreakdown.forEach((p) => {
      if (p.paymentMethod) {
        paymentBreakdownObj[p.paymentMethod] = p._sum.total || 0;
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        totalOrders,
        pendingOrders,
        confirmedOrders,
        cancelledOrders,
        totalRevenue: revenueData._sum.total || 0,
        todayRevenue: todayRevenueData._sum.total || 0,
        todayOrders,
        paymentBreakdown: paymentBreakdownObj,
        recentOrders,
        hourlyData,
        last7Days,
      },
    });
  } catch (error) {
    console.error("[DASHBOARD/GET]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
