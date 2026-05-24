"use client";

import { useQuery } from "@tanstack/react-query";
import {
  formatCurrency,
  formatDateTime,
  getStatusColor,
  getPaymentMethodIcon,
} from "@/lib/utils";
import {
  TrendingUp,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  UtensilsCrossed,
  Tag,
  ToggleLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard");
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data;
    },
    refetchInterval: 30 * 1000,
  });

  // ── Menu data ──────────────────────────────────────────────
  const { data: menuData, isLoading: menuLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("/api/menu?available=false"); // include unavailable too
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json;
    },
    refetchInterval: 60 * 1000,
  });

  const stats = data;

  // Compute menu stats from API response
  const allItems =
    menuData?.categories?.flatMap(
      (c: { items: { isAvailable: boolean; priceNGN: number }[] }) => c.items,
    ) ?? [];
  const totalMenuItems = allItems.length;
  const availableItems = allItems.filter(
    (i: { isAvailable: boolean }) => i.isAvailable,
  ).length;
  const unavailableItems = totalMenuItems - availableItems;
  const totalCategories = menuData?.categories?.length ?? 0;
  const avgPrice =
    totalMenuItems > 0
      ? allItems.reduce(
          (s: number, i: { priceNGN: number }) => s + i.priceNGN,
          0,
        ) / totalMenuItems
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 text-2xl font-bold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Real-time performance metrics for your restaurant.
          </p>
        </div>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#c9a84c]
            text-gray-600 hover:text-[#c9a84c] text-xs font-medium px-3 py-2 rounded-lg
            shadow-sm transition-all"
        >
          <RefreshCw size={13} className={isFetching ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 h-24 animate-pulse shadow-sm"
            />
          ))}
        </div>
      ) : (
        <>
          {/* ── KPI Cards ──────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <KpiCard
              label="Total Revenue"
              value={formatCurrency(stats.totalRevenue)}
              icon={<DollarSign size={18} />}
              color="violet"
              trend="+12%"
              up
            />
            <KpiCard
              label="Today's Revenue"
              value={formatCurrency(stats.todayRevenue)}
              icon={<TrendingUp size={18} />}
              color="amber"
              trend="+5.2%"
              up
            />
            <KpiCard
              label="Today's Orders"
              value={stats.todayOrders}
              icon={<ShoppingBag size={18} />}
              color="blue"
              trend="-2.1%"
              up={false}
            />
            <KpiCard
              label="Pending"
              value={stats.pendingOrders}
              icon={<Clock size={18} />}
              color="orange"
              trend="-0.4%"
              up={false}
            />
            <KpiCard
              label="Confirmed"
              value={stats.confirmedOrders}
              icon={<CheckCircle size={18} />}
              color="green"
              trend="+8%"
              up
            />
            <KpiCard
              label="Cancelled"
              value={stats.cancelledOrders}
              icon={<XCircle size={18} />}
              color="red"
              trend="-1%"
              up
            />
            <KpiCard
              label="Total Orders"
              value={stats.totalOrders}
              icon={<ShoppingBag size={18} />}
              color="violet"
              trend="+3%"
              up
            />

            {/* Payment Breakdown Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Payment Methods
              </p>
              <div className="space-y-2.5">
                {Object.entries(stats.paymentBreakdown || {}).map(
                  ([method, amt]) => {
                    const total = Object.values(
                      stats.paymentBreakdown || {},
                    ).reduce((s: number, v) => s + (v as number), 0);
                    const pct =
                      total > 0
                        ? Math.round(((amt as number) / total) * 100)
                        : 0;
                    const colors: Record<string, string> = {
                      CASH: "bg-green-500",
                      TRANSFER: "bg-blue-500",
                      POS: "bg-violet-500",
                    };
                    return (
                      <div key={method}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500 flex items-center gap-1">
                            {getPaymentMethodIcon(method)} {method}
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {pct}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${colors[method] || "bg-gray-400"}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>

          {/* ── Charts Row ─────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Revenue Bar Chart */}
            {stats.last7Days && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h2 className="text-gray-800 font-semibold text-sm">
                      Revenue Growth
                    </h2>
                    <p className="text-gray-400 text-xs">Last 7 days</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-violet-600 bg-violet-50 px-2 py-1 rounded-full font-medium">
                    <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
                    Gross Revenue
                  </span>
                </div>
                <div
                  className="flex items-end gap-2 mt-5"
                  style={{ height: "120px" }}
                >
                  {stats.last7Days.map(
                    (
                      day: { date: string; revenue: number; orders: number },
                      i: number,
                    ) => {
                      const max = Math.max(
                        ...stats.last7Days.map(
                          (d: { revenue: number }) => d.revenue,
                        ),
                        1,
                      );
                      const h = Math.max(6, (day.revenue / max) * 100);
                      const isLast = i === stats.last7Days.length - 1;
                      return (
                        <div
                          key={i}
                          className="flex-1 flex flex-col items-center gap-1.5"
                        >
                          <div
                            className="w-full flex flex-col justify-end"
                            style={{ height: "100px" }}
                          >
                            <div
                              className={`w-full rounded-t-md transition-all cursor-pointer
                                ${isLast ? "bg-violet-600" : "bg-violet-200 hover:bg-violet-400"}`}
                              style={{ height: `${h}%` }}
                              title={`${day.date}: ${formatCurrency(day.revenue)} (${day.orders} orders)`}
                            />
                          </div>
                          <span className="text-[9px] text-gray-400 font-medium">
                            {day.date}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            )}

            {/* Order Source */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="mb-4">
                <h2 className="text-gray-800 font-semibold text-sm">
                  Order Acquisition
                </h2>
                <p className="text-gray-400 text-xs">
                  Where orders are coming from
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Customer (Self-Order)",
                    icon: "🧑‍💻",
                    color: "bg-blue-500",
                    value:
                      stats.recentOrders?.filter(
                        (o: Record<string, unknown>) => o.source === "CUSTOMER",
                      ).length || 0,
                    total: stats.totalOrders,
                  },
                  {
                    label: "Admin Created",
                    icon: "🖥️",
                    color: "bg-violet-500",
                    value:
                      stats.recentOrders?.filter(
                        (o: Record<string, unknown>) => o.source === "ADMIN",
                      ).length || 0,
                    total: stats.totalOrders,
                  },
                  {
                    label: "Confirmed",
                    icon: "✅",
                    color: "bg-green-500",
                    value: stats.confirmedOrders,
                    total: stats.totalOrders,
                  },
                  {
                    label: "Pending Payment",
                    icon: "⏳",
                    color: "bg-amber-400",
                    value: stats.pendingOrders,
                    total: stats.totalOrders,
                  },
                ].map((row) => {
                  const pct =
                    row.total > 0
                      ? Math.round((row.value / row.total) * 100)
                      : 0;
                  return (
                    <div key={row.label}>
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-gray-600 flex items-center gap-1.5">
                          {row.icon} {row.label}
                        </span>
                        <span className="text-gray-800 font-bold">{pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${row.color} transition-all`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Recent Orders ───────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-gray-800 font-semibold text-sm">
                  Recent Transactions
                </h2>
                <p className="text-gray-400 text-xs">Latest order activity</p>
              </div>
              <Link
                href="/admin/orders"
                className="text-xs text-violet-600 hover:text-violet-700 font-semibold
                  bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-all"
              >
                View All
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {stats.recentOrders?.map((order: Record<string, unknown>) => {
                const { time } = formatDateTime(order.createdAt as string);
                const isPaid = order.paymentStatus === "PAID";
                return (
                  <Link
                    key={order.id as string}
                    href={`/admin/orders/${order.id}`}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-violet-600 text-xs font-bold">
                          {(order.customerName as string)
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm font-semibold leading-tight">
                          {order.customerName as string}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {(order.ref as string).slice(-12)} · {time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getStatusColor(order.status as string)}`}
                      >
                        {order.status as string}
                      </span>
                      <div className="text-right">
                        <p className="text-gray-800 font-bold text-sm">
                          {formatCurrency(order.total as number)}
                        </p>
                        <p
                          className={`text-xs font-semibold ${isPaid ? "text-green-500" : "text-amber-500"}`}
                        >
                          {isPaid ? "PAID" : "UNPAID"}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── MENU SNAPSHOT ───────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-gray-800 font-semibold text-sm">
                  Menu Snapshot
                </h2>
                <p className="text-gray-400 text-xs">
                  Live item availability & pricing
                </p>
              </div>
              <Link
                href="/admin/menu"
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold
                  bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
              >
                Manage Menu <ChevronRight size={12} />
              </Link>
            </div>

            {menuLoading ? (
              <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-16 bg-gray-100 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <>
                {/* Menu KPI mini row */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
                  {[
                    {
                      label: "Total Items",
                      value: totalMenuItems,
                      icon: <UtensilsCrossed size={15} />,
                      color: "text-violet-600",
                      bg: "bg-violet-50",
                    },
                    {
                      label: "Categories",
                      value: totalCategories,
                      icon: <Tag size={15} />,
                      color: "text-amber-600",
                      bg: "bg-amber-50",
                    },
                    {
                      label: "Available",
                      value: availableItems,
                      icon: <CheckCircle size={15} />,
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      label: "Unavailable",
                      value: unavailableItems,
                      icon: <ToggleLeft size={15} />,
                      color: "text-red-500",
                      bg: "bg-red-50",
                    },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 px-5 py-4"
                    >
                      <div
                        className={`w-8 h-8 rounded-xl ${m.bg} ${m.color} flex items-center justify-center flex-shrink-0`}
                      >
                        {m.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                          {m.label}
                        </p>
                        <p className="text-gray-900 text-lg font-bold leading-tight">
                          {m.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category breakdown */}
                <div className="px-5 py-4 border-t border-gray-100">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    Items by Category
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {menuData?.categories?.map(
                      (cat: {
                        name: string;
                        slug: string;
                        items: { isAvailable: boolean }[];
                      }) => {
                        const total = cat.items.length;
                        const available = cat.items.filter(
                          (i) => i.isAvailable,
                        ).length;
                        const pct =
                          total > 0 ? Math.round((available / total) * 100) : 0;
                        return (
                          <Link
                            key={cat.slug}
                            href={`/admin/menu?category=${cat.slug}`}
                            className="group flex flex-col gap-1.5 bg-gray-50 hover:bg-amber-50
                                       border border-gray-100 hover:border-amber-200 rounded-xl p-3 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 text-xs font-semibold truncate group-hover:text-amber-700">
                                {cat.name}
                              </span>
                              <span className="text-[10px] text-gray-400 font-medium flex-shrink-0 ml-1">
                                {available}/{total}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full transition-all ${pct === 100 ? "bg-green-500" : pct > 60 ? "bg-amber-400" : "bg-red-400"}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400">
                              {pct}% available
                            </span>
                          </Link>
                        );
                      },
                    )}
                  </div>
                </div>

                {/* Avg price footer */}
                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">
                    Average item price across all categories
                  </span>
                  <span className="text-gray-800 text-sm font-bold">
                    {formatCurrency(avgPrice)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ── KPI Card ────────────────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { bg: string; icon: string; bar: string }> = {
  violet: { bg: "bg-violet-50", icon: "text-violet-600", bar: "bg-violet-500" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", bar: "bg-amber-400" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", bar: "bg-blue-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", bar: "bg-orange-400" },
  green: { bg: "bg-green-50", icon: "text-green-600", bar: "bg-green-500" },
  red: { bg: "bg-red-50", icon: "text-red-500", bar: "bg-red-400" },
};

function KpiCard({
  label,
  value,
  icon,
  color,
  trend,
  up,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  trend: string;
  up: boolean;
}) {
  const c = COLOR_MAP[color] || COLOR_MAP.violet;
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center ${c.icon}`}
        >
          {icon}
        </div>
        <span
          className={`flex items-center gap-0.5 text-xs font-semibold ${up ? "text-green-500" : "text-red-400"}`}
        >
          {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {trend}
        </span>
      </div>
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-gray-900 text-xl font-bold">{value}</p>
      <div className={`mt-3 h-0.5 w-10 rounded-full ${c.bar}`} />
    </div>
  );
}
