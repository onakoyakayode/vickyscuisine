"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useOrderStore } from "@/store/orderStore";
import { MENU, MENU_CATEGORIES } from "@/lib/menu";
import { formatCurrency } from "@/lib/utils";
import {
  ShoppingBag,
  Plus,
  Minus,
  ChevronRight,
  Loader2,
  Search,
  Receipt,
  User,
  Phone,
  Leaf,
  Sparkles,
} from "lucide-react";

export default function CustomerPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    customerInfo,
    quantities,
    activeTab,
    setCustomerInfo,
    incrementQuantity,
    decrementQuantity,
    setActiveTab,
    getOrderItems,
    getTotal,
    getTotalItemCount,
  } = useOrderStore();

  const items = getOrderItems();
  const total = getTotal();
  const totalCount = getTotalItemCount();

  const filteredItems = search.trim()
    ? MENU_CATEGORIES.flatMap((cat) =>
        (MENU[cat] ?? [])
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((item) => ({ ...item, category: cat })),
      )
    : (MENU[activeTab] ?? []).map((item) => ({ ...item, category: activeTab }));

  const createOrderMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerInfo.name || "Guest",
          customerPhone: customerInfo.phone || null,
          items,
          source: "CUSTOMER",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to place order");
      return data.data.order;
    },
    onSuccess: (order) => {
      router.push(`/customer/receipt?ref=${order.ref}`);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast.error("Please add items to your order");
      return;
    }
    createOrderMutation.mutate();
  };
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col font-sans">
      {/* ── Header ── */}
      <header className="bg-white border-b border-cream-200 sticky top-0 z-30 flex-shrink-0 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.back()}
          >
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Leaf size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-green-900 text-lg font-bold leading-tight">
                Vicky&apos;s Cuisine
              </h1>
              <p className="text-green-600 text-[10px] tracking-widest uppercase font-medium">
                Fresh & Delicious
              </p>
            </div>
          </div>

          {/* Mobile cart button */}
          <button
            onClick={handlePlaceOrder}
            disabled={createOrderMutation.isPending || totalCount === 0}
            className="md:hidden flex items-center gap-2 bg-green-500 hover:bg-green-600 
              disabled:bg-cream-200 disabled:text-cream-400 text-white font-semibold px-5 py-2.5
              rounded-full text-sm transition-all shadow-sm"
          >
            <ShoppingBag size={16} />
            {mounted
              ? totalCount > 0
                ? `${totalCount} · ${formatCurrency(total)}`
                : "Cart empty"
              : "Cart empty"}
          </button>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 flex flex-col md:flex-row gap-6 items-start">
        {/* ════════════════════════════
            LEFT — Menu
        ════════════════════════════ */}
        <div className="flex-1 min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200">
          {/* Menu header + search */}
          <div className="px-6 pt-6 pb-4 border-b border-cream-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-green-500" />
                <h2 className="text-green-900 font-semibold text-sm tracking-wide uppercase">
                  Our Menu
                </h2>
              </div>
              {totalCount > 0 && (
                <span
                  className="bg-green-50 text-green-700 text-xs font-semibold
                  px-3 py-1.5 rounded-full border border-green-200"
                >
                  {totalCount} item{totalCount !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-500"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes…"
                className="w-full bg-cream-50 border border-cream-200 rounded-xl
                  pl-11 pr-4 py-3 text-sm text-green-900 placeholder-cream-500
                  focus:border-green-400 focus:ring-2 focus:ring-green-100 
                  focus:outline-none focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Category tabs */}
          {!search.trim() && (
            <div className="flex overflow-x-auto border-b border-cream-100 bg-cream-50/50">
              {MENU_CATEGORIES.map((cat) => {
                const catCount = Object.entries(quantities)
                  .filter(([k, v]) => k.startsWith(cat + "__") && v > 0)
                  .reduce((s, [, v]) => s + v, 0);
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`flex-shrink-0 px-6 py-3.5 text-xs font-medium
                      whitespace-nowrap transition-all border-b-2 relative
                      ${
                        isActive
                          ? "text-green-600 border-green-500 font-semibold bg-white"
                          : "text-cream-600 border-transparent hover:text-green-700 hover:bg-white/80"
                      }`}
                  >
                    {cat}
                    {catCount > 0 && (
                      <span
                        className="ml-2 bg-green-500 text-white text-[10px]
                        font-bold px-1.5 py-0.5 rounded-full min-w-[20px] inline-flex items-center justify-center"
                      >
                        {catCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Search result label */}
          {search.trim() && (
            <div className="px-6 py-3 bg-green-50 border-b border-green-100">
              <p className="text-green-700 text-xs font-medium">
                {filteredItems.length} result
                {filteredItems.length !== 1 ? "s" : ""} for "{search}"
              </p>
            </div>
          )}

          {/* Items list */}
          <div className="divide-y divide-cream-50 max-h-[calc(100vh-250px)] overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="py-20 text-center">
                <Search size={32} className="mx-auto text-cream-300 mb-3" />
                <p className="text-cream-500 text-sm">
                  No dishes found for "{search}"
                </p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const key = `${item.category}__${item.name}`;
                const qty = quantities[key] || 0;
                const inCart = qty > 0;
                return (
                  <div
                    key={key}
                    className={`flex items-center justify-between px-6 py-4 transition-all duration-200
                      ${inCart ? "bg-green-50/50 border-l-2 border-l-green-400" : "bg-white hover:bg-cream-50"}`}
                  >
                    <div className="flex-1 min-w-0 mr-4">
                      {search.trim() && (
                        <span className="text-cream-500 text-[10px] uppercase tracking-wider font-medium block mb-1">
                          {(item as any).category}
                        </span>
                      )}
                      <p className="text-green-900 text-sm font-medium leading-snug">
                        {item.name}
                      </p>
                      <p className="text-green-600 text-sm font-semibold mt-1">
                        {formatCurrency(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {inCart ? (
                        <>
                          <button
                            onClick={() => decrementQuantity(key)}
                            className="w-8 h-8 rounded-lg bg-white border border-cream-200
                              text-green-700 hover:bg-red-50 hover:border-red-200 hover:text-red-500
                              flex items-center justify-center transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-green-900 text-sm font-bold">
                            {qty}
                          </span>
                          <button
                            onClick={() => incrementQuantity(key)}
                            className="w-8 h-8 rounded-lg bg-green-500 hover:bg-green-600
                              text-white flex items-center justify-center transition-all shadow-sm"
                          >
                            <Plus size={14} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => incrementQuantity(key)}
                          className="w-8 h-8 rounded-lg bg-cream-100 border border-cream-200
                            text-green-700 hover:bg-green-500 hover:text-white hover:border-green-500
                            flex items-center justify-center transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ════════════════════════════
            RIGHT — Cart + Details
        ════════════════════════════ */}
        <div className="w-full md:w-[320px] lg:w-[340px] flex-shrink-0 flex flex-col gap-4 md:sticky md:top-[85px]">
          {/* ── Receipt card ── */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200">
            {/* Header */}
            <div className="bg-green-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Receipt size={16} className="text-white" />
                <h2 className="text-white font-semibold text-sm">Your Order</h2>
              </div>
              {mounted && totalCount > 0 && (
                <span className="text-green-100 text-xs font-medium bg-green-600/30 px-2.5 py-1 rounded-full">
                  {totalCount} item{totalCount !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {/* Column labels */}
            <div className="flex justify-between px-5 py-2.5 bg-cream-50 border-b border-dashed border-cream-200">
              <span className="text-[10px] text-cream-600 font-semibold uppercase tracking-widest">
                Item
              </span>
              <span className="text-[10px] text-cream-600 font-semibold uppercase tracking-widest">
                Subtotal
              </span>
            </div>

            {/* Line items */}
            <div className="px-5 py-3 min-h-[120px] max-h-[280px] overflow-y-auto">
              {!mounted || items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                  <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center">
                    <ShoppingBag size={20} className="text-cream-400" />
                  </div>
                  <p className="text-cream-500 text-xs text-center leading-relaxed">
                    Your cart is empty.
                    <br />
                    Add delicious dishes from the menu.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-3 py-2 border-b border-cream-50 last:border-0"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-green-900 text-xs font-medium leading-snug truncate">
                          {item.name}
                        </p>
                        <p className="text-cream-500 text-[10px] mt-0.5">
                          {item.qty} ×{" "}
                          {formatCurrency(item.subtotal / item.qty)}
                        </p>
                      </div>
                      <span className="text-green-700 text-xs font-semibold flex-shrink-0">
                        {formatCurrency(item.subtotal)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total */}
            <div className="mx-5 border-t border-dashed border-cream-200" />
            <div className="px-5 py-4 flex items-center justify-between bg-cream-50/50">
              <span className="text-green-600 text-xs uppercase tracking-wider font-semibold">
                Total
              </span>
              <span className="text-green-700 font-bold text-xl">
                {formatCurrency(total)}
              </span>
            </div>
          </div>

          {/* ── Customer details ── */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200">
            <div className="px-5 py-3.5 bg-cream-50 border-b border-cream-100">
              <h2 className="text-green-700 font-semibold text-xs tracking-widest uppercase">
                Your Details
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label
                  className="flex items-center gap-2 text-cream-600 text-[10px]
                  uppercase tracking-wider mb-2 font-semibold"
                >
                  <User size={12} className="text-green-500" /> Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amaka Obi"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ name: e.target.value })}
                  className="w-full bg-cream-50 border border-cream-200 rounded-xl
                    px-4 py-3 text-green-900 text-sm placeholder-cream-400
                    focus:border-green-400 focus:ring-2 focus:ring-green-100 
                    focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <label
                  className="flex items-center gap-2 text-cream-600 text-[10px]
                  uppercase tracking-wider mb-2 font-semibold"
                >
                  <Phone size={12} className="text-green-500" /> Phone (WhatsApp
                  receipt)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ phone: e.target.value })}
                  className="w-full bg-cream-50 border border-cream-200 rounded-xl
                    px-4 py-3 text-green-900 text-sm placeholder-cream-400
                    focus:border-green-400 focus:ring-2 focus:ring-green-100 
                    focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* ── Place order button ── */}
          <button
            onClick={handlePlaceOrder}
            disabled={createOrderMutation.isPending || items.length === 0}
            className="w-full bg-green-500 hover:bg-green-600 active:scale-[0.99]
              disabled:bg-cream-200 disabled:text-cream-400 disabled:cursor-not-allowed
              text-white font-bold py-4 rounded-2xl transition-all duration-200
              flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
          >
            {createOrderMutation.isPending ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                Place Order & Get Receipt
                <ChevronRight size={18} />
              </>
            )}
          </button>

          {items.length === 0 && (
            <div className="flex items-center justify-center gap-2 text-cream-500 text-xs">
              <ShoppingBag size={12} />
              <span>Add items from the menu to continue</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
