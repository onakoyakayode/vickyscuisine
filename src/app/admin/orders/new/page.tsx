"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MENU, MENU_CATEGORIES } from "@/lib/menu";
import { formatCurrency } from "@/lib/utils";
import {
  ArrowLeft,
  Plus,
  Minus,
  Loader2,
  CheckCircle,
  Banknote,
  Building2,
  CreditCard,
} from "lucide-react";
import toast from "react-hot-toast";

export default function NewOrderPage() {
  const router = useRouter();
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [confirmPayNow, setConfirmPayNow] = useState(false);

  const getItems = () => {
    const out: {
      name: string;
      category: string;
      price: number;
      qty: number;
      subtotal: number;
    }[] = [];
    MENU_CATEGORIES.forEach((cat) => {
      MENU[cat].forEach((item) => {
        const key = `${cat}__${item.name}`;
        const qty = quantities[key] || 0;
        if (qty > 0)
          out.push({
            name: item.name,
            category: cat,
            price: item.price,
            qty,
            subtotal: item.price * qty,
          });
      });
    });
    return out;
  };

  const items = getItems();
  const total = items.reduce((s, i) => s + i.subtotal, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  const setQty = (key: string, delta: number) =>
    setQuantities((q) => ({ ...q, [key]: Math.max(0, (q[key] || 0) + delta) }));

  const createMutation = useMutation({
    mutationFn: async () => {
      if (!customerName.trim()) throw new Error("Customer name is required");
      if (items.length === 0) throw new Error("Add at least one item");
      if (confirmPayNow && !paymentMethod)
        throw new Error("Select a payment method");

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim() || null,
          items,
          notes: notes.trim() || null,
          source: "ADMIN",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      const order = json.data.order;

      // Immediately confirm payment if requested
      if (confirmPayNow && paymentMethod) {
        const res2 = await fetch(`/api/orders/${order.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentMethod, paymentStatus: "PAID" }),
        });
        const json2 = await res2.json();
        if (!json2.success) throw new Error(json2.error);
        return json2.data.order;
      }
      return order;
    },
    onSuccess: (order) => {
      toast.success(`Order ${order.ref} created!`);
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      router.push(`/admin/orders/${order.id}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div className="p-4 md:p-6 space-y-4 max-w-full flex-col items-start">
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={() => router.back()}
          className="text-[#8a6e3a] hover:text-[#c9a84c]"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-gray-700 font-sans font-bold text-xl">New Order</h1>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-4">
        {/* Customer */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 mx-auto">
          <h2 className="text-[#085208] font-sans font-semibold text-sm">
            Customer Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">
                Name *
              </label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Customer name"
                className="w-full bg-cream-50 border border-cream-200 rounded-xl
                    px-4 py-3 text-green-900 text-sm placeholder-cream-400
                    focus:border-green-400 focus:ring-2 focus:ring-green-100 
                    focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">
                Phone
              </label>
              <input
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="08012345678"
                type="tel"
                className="w-full bg-cream-50 border border-cream-200 rounded-xl
                    px-4 py-3 text-green-900 text-sm placeholder-cream-400
                    focus:border-green-400 focus:ring-2 focus:ring-green-100 
                    focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">
              Notes
            </label>
            <input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Special requests…"
              className="w-full bg-cream-50 border border-cream-200 rounded-xl
                    px-4 py-3 text-green-900 text-sm placeholder-cream-400
                    focus:border-green-400 focus:ring-2 focus:ring-green-100 
                    focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-[#085208] font-sans font-semibold text-sm">
              Menu
            </h2>
            {totalQty > 0 && (
              <span className="bg-green-500 text-[#fff] text-xs font-bold px-2.5 py-0.5 rounded-full">
                {totalQty} items
              </span>
            )}
          </div>
          <div className="flex overflow-x-auto border-b border-gray-200">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all
                ${activeTab === cat ? "text-[#085208] border-b-2 border-[#085208] -mb-px" : "text-gray-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="divide-y divide-gray-200 max-h-auto overflow-y-auto">
            {MENU[activeTab]?.map((item) => {
              const key = `${activeTab}__${item.name}`;
              const qty = quantities[key] || 0;
              return (
                <div
                  key={key}
                  className={`flex items-center justify-between px-4 py-2.5 ${qty > 0 ? "bg-green-500/20" : "hover:bg-gray-50 cursor-pointer"} transition-all rounded-lg`}
                >
                  <div>
                    <p className="text-[#085208] text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-xs font-semibold">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {qty > 0 ? (
                      <>
                        <button
                          onClick={() => setQty(key, -1)}
                          className="w-7 h-7 rounded-md bg-[#085208] text-[#fff] flex items-center justify-center hover:bg-[#085208]/60 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-[#085208] text-sm font-bold">
                          {qty}
                        </span>
                      </>
                    ) : null}
                    <button
                      onClick={() => setQty(key, 1)}
                      className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${qty > 0 ? "bg-[#085208] text-[#fff] hover:bg-[#085208]/60" : "bg-[#085208] border border-[#085208] text-[#fff] hover:bg-[#085208]/80 hover:text-[#fff]"}`}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary + Payment */}
        {items.length > 0 && (
          <div className="bg-[#085208] border border-[#085208] rounded-xl p-4 space-y-4">
            <h2 className="text-[#fff] font-sans font-semibold text-sm">
              Summary
            </h2>
            <div className="space-y-1.5">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-[#fff]">
                    {item.qty}× {item.name}
                  </span>
                  <span className="text-[#fff]">
                    {formatCurrency(item.subtotal)}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#c9a84c]/30 pt-2 flex justify-between font-semibold">
                <span className="text-[#fff]">Total</span>
                <span className="text-[#fff] font-sans text-lg">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>

            {/* Collect payment now? */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmPayNow}
                  onChange={(e) => setConfirmPayNow(e.target.checked)}
                  className="accent-[#fff] rounded focus:ring-0 focus:outline-none"
                />
                <span className="text-[#fff] text-sm">Collect payment now</span>
              </label>
            </div>

            {confirmPayNow && (
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    value: "CASH",
                    label: "Cash",
                    icon: <Banknote size={16} />,
                  },
                  {
                    value: "TRANSFER",
                    label: "Transfer",
                    icon: <Building2 size={16} />,
                  },
                  {
                    value: "POS",
                    label: "POS",
                    icon: <CreditCard size={16} />,
                  },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setPaymentMethod(m.value)}
                    className={`flex flex-col items-center gap-1 p-4 rounded-xl border text-xs font-medium transition-all
                    ${paymentMethod === m.value ? "bg-[#fff] border-green-600 text-[#085208] font-bold" : "border-0 bg-white/70 text-gray-500"}`}
                  >
                    {m.icon}
                    {m.label}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => createMutation.mutate()}
              disabled={createMutation.isPending}
              className="w-full bg-[#fff] hover:bg-[#e4c87a] text-[#085208] font-bold py-3 
              rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {createMutation.isPending ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <CheckCircle size={18} />
              )}
              {confirmPayNow ? "Create & Confirm Payment" : "Create Order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
