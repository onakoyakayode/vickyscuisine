"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  formatCurrency,
  formatDateTime,
  getStatusColor,
  getPaymentStatusColor,
} from "@/lib/utils";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  CreditCard,
  Banknote,
  Building2,
  Loader2,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();
  const { user } = useAuthStore();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const res = await fetch(`/api/orders/${id}`);
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.order;
    },
  });

  const confirmMutation = useMutation({
    mutationFn: async () => {
      if (!paymentMethod) throw new Error("Select a payment method");
      const res = await fetch(`/api/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethod, paymentStatus: "PAID" }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.order;
    },
    onSuccess: () => {
      toast.success("Payment confirmed!");
      qc.invalidateQueries({ queryKey: ["order", id] });
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const cancelMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "CANCELLED" }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
    },
    onSuccess: () => {
      toast.success("Order cancelled");
      qc.invalidateQueries({ queryKey: ["order", id] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
    },
    onSuccess: () => {
      toast.success("Order deleted");
      router.push("/admin/orders");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  if (isLoading)
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="animate-spin text-[#085208]" />
      </div>
    );

  if (!data) return <div className="p-6 text-[#085208]">Order not found</div>;

  const items = data.items as {
    name: string;
    qty: number;
    price: number;
    subtotal: number;
  }[];
  const { date, time } = formatDateTime(data.createdAt);
  const isPaid = data.paymentStatus === "PAID";
  const isCancelled = data.status === "CANCELLED";

  return (
    <div className="p-4 md:p-6 space-y-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="text-[#085208] hover:text-[#c9a84c]"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-gray-600 font-sans font-bold text-lg">
            Order {data.ref}
          </h1>
          <p className="text-gray-400 text-xs">
            {date} at {time}
          </p>
        </div>
      </div>

      {/* Status badges */}
      <div className="flex gap-2 flex-wrap">
        <span
          className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${getStatusColor(data.status)}`}
        >
          {data.status}
        </span>
        <span
          className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${getPaymentStatusColor(data.paymentStatus)}`}
        >
          {data.paymentStatus}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-[#2a1e0a] text-[#8a6e3a] border border-[#3d2b10] font-medium">
          {data.source}
        </span>
      </div>

      {/* Customer Info */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
            Customer
          </p>
          <p className="text-gray-500 font-medium">{data.customerName}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
            Phone
          </p>
          <p className="text-[#085208]">{data.customerPhone || "—"}</p>
        </div>
        {data.createdBy && (
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
              Created by
            </p>
            <p className="text-[#085208]">{data.createdBy.name}</p>
          </div>
        )}
        {data.confirmedBy && (
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
              Confirmed by
            </p>
            <p className="text-[#085208]">{data.confirmedBy.name}</p>
          </div>
        )}
      </div>

      {/* Items */}
      <div className="bg-[#fff] border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-[#085208] font-sans font-semibold text-sm">
            Order Items
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">
                {item.qty}× {item.name}
              </span>
              <span className="text-[#085208] font-medium">
                {formatCurrency(item.subtotal)}
              </span>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t-2 border-gray-200 flex justify-between">
          <span className="text-gray-500 font-sans font-semibold">Total</span>
          <span className="text-[#085208] font-sans font-bold text-lg">
            {formatCurrency(data.total)}
          </span>
        </div>
      </div>

      {/* Payment Confirmation */}
      {!isPaid && !isCancelled && (
        <div className="bg-[#fff] border border-gray-200 rounded-xl p-4 space-y-4">
          <h2 className="text-[#085208] font-sans font-semibold text-sm">
            Confirm Payment
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "CASH", label: "Cash", icon: <Banknote size={18} /> },
              {
                value: "TRANSFER",
                label: "Transfer",
                icon: <Building2 size={18} />,
              },
              { value: "POS", label: "POS", icon: <CreditCard size={18} /> },
            ].map((m) => (
              <button
                key={m.value}
                onClick={() => setPaymentMethod(m.value)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-sm font-medium transition-all
                  ${
                    paymentMethod === m.value
                      ? "bg-[#085208]/10 border-[#085208] text-[#085208]"
                      : "border-gray-200 text-gray-500 hover:border-[#085208]"
                  }`}
              >
                {m.icon}
                {m.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => confirmMutation.mutate()}
            disabled={!paymentMethod || confirmMutation.isPending}
            className="w-full bg-[#085208] hover:bg-[#085208]/80 text-[#fff] font-bold py-3 
              rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {confirmMutation.isPending ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <CheckCircle size={18} />
                Confirm Payment
              </>
            )}
          </button>
        </div>
      )}

      {isPaid && (
        <div className="bg-[#085208]/10 border border-green-600/30 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
          <div>
            <p className="text-green-400 font-semibold text-sm">
              Payment confirmed
            </p>
            <p className="text-green-600 text-xs">
              via {data.paymentMethod}
              {data.confirmedBy ? ` · by ${data.confirmedBy.name}` : ""}
            </p>
          </div>
        </div>
      )}

      {/* Danger actions */}
      <div className="flex gap-2 pt-2">
        {!isCancelled && !isPaid && (
          <button
            onClick={() => {
              if (confirm("Cancel this order?")) cancelMutation.mutate();
            }}
            disabled={cancelMutation.isPending}
            className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 border border-amber-600/30 
              hover:border-amber-500/50 px-3 py-2 rounded-lg text-sm transition-all"
          >
            <XCircle size={15} />
            Cancel Order
          </button>
        )}
        {user?.role === "SUPERADMIN" && (
          <button
            onClick={() => {
              if (
                confirm("Permanently delete this order? This cannot be undone.")
              )
                deleteMutation.mutate();
            }}
            disabled={deleteMutation.isPending}
            className="flex items-center gap-1.5 text-red-500 hover:text-red-400 border border-red-600/30 
              hover:border-red-500/50 px-3 py-2 rounded-lg text-sm transition-all"
          >
            <Trash2 size={15} />
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
