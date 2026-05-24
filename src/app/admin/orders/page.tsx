"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  formatCurrency,
  formatDateTime,
  getStatusColor,
  getPaymentStatusColor,
  getPaymentMethodIcon,
} from "@/lib/utils";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface OrderItem {
  qty: number;
  name?: string;
  price?: number;
}

interface Order {
  id: string;
  ref: string;
  customerName: string;
  customerPhone?: string;
  items: OrderItem[];
  total: number;
  status: string;
  paymentStatus: string;
  paymentMethod?: string;
  source: string;
  createdAt: string;
}

function OrderDetailSheet({
  orderId,
  open,
  onClose,
}: {
  orderId: string | null;
  open: boolean;
  onClose: () => void;
}) {
  const { data: order, isLoading } = useQuery<Order>({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const res = await fetch(`/api/orders/${orderId}`);
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.order;
    },
    enabled: !!orderId,
  });

  return (
    <Sheet open={open} onOpenChange={(v: any) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto bg-white p-5">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-gray-700 font-bold text-lg">
            Order Details
          </SheetTitle>
        </SheetHeader>

        {isLoading || !order ? (
          <div className="flex items-center justify-center h-40 text-[#5a4020] text-sm">
            Loading…
          </div>
        ) : (
          <div className="space-y-5 text-sm">
            {/* Ref + badges */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                #{order?.ref?.slice(-8)}
              </span>
              <div className="flex gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getStatusColor(order.status)}`}
                >
                  {order.status}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getPaymentStatusColor(order.paymentStatus)}`}
                >
                  {order.paymentStatus}
                </span>
              </div>
            </div>

            {/* Customer */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">
                Customer
              </p>
              <p className="text-gray-700 font-medium">{order.customerName}</p>
              {order.customerPhone && (
                <p className="text-gray-400 text-xs">{order.customerPhone}</p>
              )}
            </div>

            {/* Items */}
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-2">
                Items
              </p>
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
                {order?.items?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2.5 bg-white"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-[#c9a84c]/10 text-[#8a6e3a] font-semibold px-1.5 py-0.5 rounded">
                        x{item.qty}
                      </span>
                      <span className="text-gray-600">
                        {item.name ?? `Item ${i + 1}`}
                      </span>
                    </div>
                    {item.price != null && (
                      <span className="text-gray-500 text-xs">
                        {formatCurrency(item.price * item.qty)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Total + payment */}
            <div className="bg-[#fdf8ef] border border-[#e8d9b5] rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Payment method</span>
                <span className="font-medium flex items-center gap-1">
                  {order.paymentMethod
                    ? `${getPaymentMethodIcon(order.paymentMethod)} ${order.paymentMethod}`
                    : "—"}
                </span>
              </div>
              <div className="flex justify-between text-gray-800 font-bold text-base border-t border-[#e8d9b5] pt-2">
                <span>Total</span>
                <span className="text-[#c9a84c]">
                  {formatCurrency(order.total)}
                </span>
              </div>
            </div>

            {/* Meta */}
            <div className="flex justify-between text-xs text-gray-400">
              <span>
                Source:{" "}
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${order.source === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}
                >
                  {order.source}
                </span>
              </span>
              <span>{formatDateTime(order.createdAt).time}</span>
            </div>

            {/* Full page link */}
            <Link
              href={`/admin/orders/${order.id}`}
              className="block text-center text-xs text-[#8a6e3a] hover:text-[#c9a84c] underline underline-offset-2 pt-1"
            >
              Open full order page →
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const { data, isLoading } = useQuery<{
    orders: Order[];
    total: number;
    totalPages: number;
  }>({
    queryKey: ["orders", page, search, status, paymentStatus],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: "20",
        ...(search && { search }),
        ...(status && { status }),
        ...(paymentStatus && { paymentStatus }),
      });
      const res = await fetch(`/api/orders?${params}`);
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data;
    },
  });

  const orders = data?.orders || [];

  const total = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-gray-700 font-sans text-xl font-bold">Orders</h1>
          <p className="text-[#5a4020] text-xs mt-0.5">{total} total orders</p>
        </div>
        <Link
          href="/admin/orders/new"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all"
        >
          + New Order
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name, phone, or ref…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full bg-white border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-gray-600 text-sm placeholder-gray-400 focus:border-[#c9a84c] focus:outline-none"
          />
        </div>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-500 font-semibold text-sm focus:border-[#c9a84c] focus:outline-none"
        >
          <option value="">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
        <select
          value={paymentStatus}
          onChange={(e) => {
            setPaymentStatus(e.target.value);
            setPage(1);
          }}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-500 font-semibold text-sm focus:border-[#c9a84c] focus:outline-none"
        >
          <option value="">All Payments</option>
          <option value="UNPAID">Unpaid</option>
          <option value="PAID">Paid</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-[#5a4020]">Loading orders…</div>
        ) : orders.length === 0 ? (
          <div className="p-10 text-center text-[#5a4020]">No orders found</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    {[
                      "Ref",
                      "Customer",
                      "Items",
                      "Total",
                      "Status",
                      "Payment",
                      "Source",
                      "Time",
                      "",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-gray-500 text-xs uppercase font-sans tracking-wider font-bold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orders?.map((order) => {
                    const totalQty = order.items.reduce((s, i) => s + i.qty, 0);
                    const { time } = formatDateTime(order.createdAt);
                    return (
                      <tr
                        key={order.id}
                        onClick={() => setSelectedOrderId(order.id)}
                        className="hover:bg-gray-50 hover:cursor-pointer transition-colors group"
                      >
                        <td className="px-4 py-3 font-mono text-gray-500 text-xs whitespace-nowrap">
                          {order.ref.slice(-8)}
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-gray-500 font-medium">
                            {order.customerName}
                          </p>
                          {order.customerPhone && (
                            <p className="text-gray-400 text-xs">
                              {order.customerPhone}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs">
                          {totalQty} item{totalQty !== 1 ? "s" : ""}
                        </td>
                        <td className="px-4 py-3 text-gray-600 font-semibold">
                          {formatCurrency(order.total)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getPaymentStatusColor(order.paymentStatus)}`}
                            >
                              {order.paymentStatus}
                            </span>
                            {order.paymentMethod && (
                              <span className="text-xs text-[#5a4020]">
                                {getPaymentMethodIcon(order.paymentMethod)}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded font-semibold !shadow-lg ${order.source === "ADMIN" ? "bg-purple-900 text-purple-300" : "bg-blue-900 text-blue-300"}`}
                          >
                            {order.source}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap font-sans font-medium">
                          {time}
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            View →
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="px-4 py-3 border-t border-[#3d2b10] flex items-center justify-between">
                <p className="text-[#5a4020] text-xs">
                  Page {page} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 text-[#8a6e3a] hover:text-[#c9a84c] disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-1.5 text-[#8a6e3a] hover:text-[#c9a84c] disabled:opacity-30 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Slide-in sheet */}
      <OrderDetailSheet
        orderId={selectedOrderId}
        open={!!selectedOrderId}
        onClose={() => setSelectedOrderId(null)}
      />
    </div>
  );
}
