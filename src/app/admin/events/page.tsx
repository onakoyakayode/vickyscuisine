// src/app/admin/events/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { format, addWeeks, isBefore } from "date-fns";
import {
  Eye,
  Users,
  X,
  CheckCircle,
  Banknote,
  Download,
  Clock,
  AlertCircle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Payment = {
  id: string;
  amountNGN: number;
  paymentMethod: string;
  reference?: string;
  note?: string;
  paidAt: string;
  status: "PENDING" | "CONFIRMED";
};

type MenuSelection = {
  id: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  menuItem: {
    id: string;
    name: string;
    priceNGN: number;
    category?: { name: string };
  };
};

type EventOrder = {
  id: string;
  orderRef: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  clientWhatsApp?: string;
  eventType: string;
  eventDate: string;
  eventTime?: string;
  guestCount: number;
  serviceType: string;
  venueType: string;
  venueLGA?: string;
  venueAddress?: string;
  specialRequests?: string;
  perHeadRateNGN?: number;
  subtotalNGN?: number;
  deliveryFeeNGN: number;
  setupFeeNGN: number;
  serviceFeeNGN: number;
  transportFeeNGN: number;
  discountNGN: number;
  totalNGN?: number;
  depositAmtNGN?: number;
  balanceDueNGN?: number;
  paymentStatus: string;
  status: string;
  createdAt: string;
  internalNotes?: string;
  menuSelections: MenuSelection[];
  payments: Payment[];
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STATUS: Record<string, { label: string; color: string }> = {
  PENDING_REVIEW: {
    label: "Pending Review",
    color: "bg-yellow-100 text-yellow-800",
  },
  QUOTE_SENT: { label: "Quote Sent", color: "bg-blue-100 text-blue-800" },
  CONFIRMED: { label: "Confirmed", color: "bg-green-100 text-green-800" },
  DEPOSIT_PAID: {
    label: "Deposit Paid",
    color: "bg-emerald-100 text-emerald-800",
  },
  FULLY_PAID: { label: "Fully Paid", color: "bg-teal-100 text-teal-800" },
  IN_PROGRESS: { label: "In Progress", color: "bg-purple-100 text-purple-800" },
  COMPLETED: { label: "Completed", color: "bg-gray-100 text-gray-700" },
  CANCELLED: { label: "Cancelled", color: "bg-red-100 text-red-800" },
};

const PAY: Record<string, { label: string; color: string }> = {
  UNPAID: { label: "Unpaid", color: "bg-red-100 text-red-700" },
  DEPOSIT_PAID: {
    label: "Deposit Paid",
    color: "bg-yellow-100 text-yellow-700",
  },
  FULLY_PAID: { label: "Fully Paid", color: "bg-green-100 text-green-700" },
};

const fmt = (n?: number | null) => `₦${(n ?? 0).toLocaleString()}`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminEventsPage() {
  const [events, setEvents] = useState<EventOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<EventOrder | null>(null);
  const [modal, setModal] = useState<"detail" | "invoice" | "payment" | null>(
    null,
  );
  const [saving, setSaving] = useState(false);
  const [confirming, setConfirming] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent" | "no-email">(
    "idle",
  );

  const [invoiceForm, setInvoiceForm] = useState({
    perHeadRate: "",
    deliveryFee: "0",
    setupFee: "0",
    serviceFee: "0",
    transportFee: "0",
    discount: "0",
    internalNotes: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    amount: "",
    paymentMethod: "TRANSFER",
    reference: "",
    note: "",
  });

  // ── Fetch ──────────────────────────────────────────────────────────────
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const url =
        filter && filter.length > 0
          ? `/api/admin/events?status=${filter}`
          : "/api/admin/events";
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) setEvents(json.data);
      else console.error("Fetch error:", json.error);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [filter]);

  // ── Open detail ────────────────────────────────────────────────────────
  // const openDetail = async (order: EventOrder) => {
  //   const res = await fetch(`/api/admin/events/${order.id}`);
  //   const json = await res.json();
  //   if (json.success) {
  //     const d = json.data;
  //     setSelected(d);
  //     setInvoiceForm({
  //       perHeadRate: String(d.perHeadRateNGN ?? ""),
  //       deliveryFee: String(d.deliveryFeeNGN ?? 0),
  //       setupFee: String(d.setupFeeNGN ?? 0),
  //       serviceFee: String(d.serviceFeeNGN ?? 0),
  //       transportFee: String(d.transportFeeNGN ?? 0),
  //       discount: String(d.discountNGN ?? 0),
  //       internalNotes: d.internalNotes ?? "",
  //     });
  //   }
  //   setModal("detail");
  // };

  const openDetail = async (order: EventOrder) => {
    const res = await fetch(`/api/admin/events/${order.id}`);
    const json = await res.json();
    if (!json.success) return null;

    setSelected(json.data);
    return json.data;
  };

  // ── PATCH helper ───────────────────────────────────────────────────────
  const patch = async (id: string, body: object) => {
    const res = await fetch(`/api/admin/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.json();
  };

  // ── Generate invoice + send email ──────────────────────────────────────
  const generateInvoice = async () => {
    if (!selected) return;
    setSaving(true);
    setEmailStatus("idle");
    try {
      const json = await patch(selected.id, {
        action: "generate_invoice",
        ...invoiceForm,
      });
      if (json.success) {
        setEmailStatus(json.emailSent ? "sent" : "no-email");
        await openDetail(selected);
        fetchEvents();
      }
    } finally {
      setSaving(false);
    }
  };

  // ── Record payment ─────────────────────────────────────────────────────
  const recordPayment = async () => {
    if (!selected || !paymentForm.amount) return;
    setSaving(true);
    try {
      const json = await patch(selected.id, {
        action: "record_payment",
        ...paymentForm,
      });
      if (json.success) {
        await openDetail(selected);
        setModal("detail");
        setPaymentForm({
          amount: "",
          paymentMethod: "TRANSFER",
          reference: "",
          note: "",
        });
        fetchEvents();
      }
    } finally {
      setSaving(false);
    }
  };

  // ── Confirm payment ────────────────────────────────────────────────────
  const confirmPayment = async (paymentId: string) => {
    if (!selected) return;
    setConfirming(paymentId);
    try {
      const json = await patch(selected.id, {
        action: "confirm_payment",
        paymentId,
      });
      if (json.success) {
        await openDetail(selected);
        fetchEvents();
      }
    } finally {
      setConfirming(null);
    }
  };

  // ── Approve for event ──────────────────────────────────────────────────
  const approveForEvent = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      await patch(selected.id, { action: "approve" });
      await openDetail(selected);
      fetchEvents();
    } finally {
      setSaving(false);
    }
  };

  // ── Download PDF ───────────────────────────────────────────────────────
  const downloadPDF = async (id: string, ref: string) => {
    setPdfLoading(true);
    try {
      const res = await fetch(`/api/admin/events/${id}/pdf`);
      if (!res.ok) {
        const e = await res.json();
        alert(e.error ?? "PDF failed");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${ref}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setPdfLoading(false);
    }
  };

  // ── Invoice preview ────────────────────────────────────────────────────
  const preview = useMemo(() => {
    if (!selected) return null;
    const menuSub = selected.menuSelections.reduce(
      (s, x) => s + x.quantity * x.unitPrice,
      0,
    );
    const serviceBase = Number(invoiceForm.perHeadRate) * selected.guestCount;
    const total =
      menuSub +
      serviceBase +
      Number(invoiceForm.deliveryFee) +
      Number(invoiceForm.setupFee) +
      Number(invoiceForm.serviceFee) +
      Number(invoiceForm.transportFee) -
      Number(invoiceForm.discount);
    return { menuSub, serviceBase, total, deposit: Math.ceil(total * 0.5) };
  }, [selected]);

  // ──────────────────────────────────────────────────────────────────────
  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Event Orders</h1>
          <p className="text-gray-500 mt-1">
            Review requests, generate invoices, track payments
          </p>
        </div>
        <button
          onClick={fetchEvents}
          className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 text-sm"
        >
          Refresh
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {[
          "",
          "PENDING_REVIEW",
          "QUOTE_SENT",
          "CONFIRMED",
          "DEPOSIT_PAID",
          "FULLY_PAID",
          "IN_PROGRESS",
          "COMPLETED",
          "CANCELLED",
        ].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${filter === f ? "bg-green-500 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
          >
            {f ? (STATUS[f]?.label ?? f) : "All Events"}
          </button>
        ))}
      </div>

      {/* List */}
      {loading ? (
        <div className="text-center py-20 text-gray-400">Loading events…</div>
      ) : events.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          No event orders found.
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((order) => {
            const sl = STATUS[order.status] ?? {
              label: order.status,
              color: "bg-gray-100 text-gray-700",
            };
            const pl = PAY[order.paymentStatus] ?? {
              label: order.paymentStatus,
              color: "bg-gray-100 text-gray-500",
            };
            const twoBefore = order.eventDate
              ? addWeeks(new Date(order.eventDate), -2)
              : null;
            const balAlert =
              twoBefore &&
              !isBefore(new Date(), twoBefore) &&
              order.paymentStatus === "DEPOSIT_PAID";
            const pendingN =
              order.payments?.filter((p) => p.status === "PENDING").length ?? 0;

            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl border p-5 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                        {order.orderRef}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${sl.color}`}
                      >
                        {sl.label}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${pl.color}`}
                      >
                        {pl.label}
                      </span>
                      {balAlert && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                          ⚠️ Balance Due
                        </span>
                      )}
                      {pendingN > 0 && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                          🕐 {pendingN} pending
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg">{order.clientName}</h3>
                    <p className="text-sm text-gray-500">
                      {order.clientPhone}
                      {order.clientEmail ? ` · ${order.clientEmail}` : ""}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {order.totalNGN ? (
                      <>
                        <div className="text-xl font-black text-green-600">
                          {fmt(order.totalNGN)}
                        </div>
                        <div className="text-xs text-gray-400">Total</div>
                      </>
                    ) : (
                      <div className="text-sm text-gray-400 italic">
                        Pending invoice
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t text-sm">
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Event</div>
                    <div className="font-medium capitalize">
                      {order.eventType.replace(/_/g, " ")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Date</div>
                    <div className="font-medium">
                      {format(new Date(order.eventDate), "dd MMM yyyy")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Guests</div>
                    <div className="font-medium flex items-center gap-1">
                      <Users size={13} />
                      {order.guestCount}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">LGA</div>
                    <div className="font-medium">{order.venueLGA || "—"}</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <button
                    onClick={() => openDetail(order)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium transition"
                  >
                    <Eye size={15} /> View Details
                  </button>
                  {!order.totalNGN && (
                    <button
                      onClick={() => {
                        openDetail(order);
                        setTimeout(() => setModal("invoice"), 200);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium transition"
                    >
                      📄 Generate Invoice
                    </button>
                  )}
                  {order.totalNGN && order.paymentStatus !== "FULLY_PAID" && (
                    <button
                      onClick={() => {
                        openDetail(order);
                        setTimeout(() => setModal("payment"), 200);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-medium transition"
                    >
                      <Banknote size={15} /> Record Payment
                    </button>
                  )}
                  {order.totalNGN && (
                    <button
                      onClick={() => downloadPDF(order.id, order.orderRef)}
                      disabled={pdfLoading}
                      className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium transition disabled:opacity-60"
                    >
                      <Download size={15} />{" "}
                      {pdfLoading ? "Generating…" : "PDF"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ════════════ DETAIL MODAL ════════════ */}
      {selected && modal === "detail" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center z-10">
              <div>
                <h2 className="text-xl font-bold">Event Order</h2>
                <span className="font-mono text-sm text-gray-400">
                  {selected.orderRef}
                </span>
              </div>
              <button
                onClick={() => {
                  setModal(null);
                  setSelected(null);
                }}
                className="p-1.5 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Client */}
              <section>
                <h3 className="font-semibold text-gray-700 mb-2">Client</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Name:</span>{" "}
                    {selected.clientName}
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>{" "}
                    {selected.clientPhone}
                  </div>
                  {selected.clientEmail && (
                    <div>
                      <span className="text-gray-400">Email:</span>{" "}
                      {selected.clientEmail}
                    </div>
                  )}
                  {selected.clientWhatsApp && (
                    <div>
                      <span className="text-gray-400">WhatsApp:</span>{" "}
                      {selected.clientWhatsApp}
                    </div>
                  )}
                </div>
              </section>

              {/* Event */}
              <section>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Event Details
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Type:</span>{" "}
                    {selected.eventType.replace(/_/g, " ")}
                  </div>
                  <div>
                    <span className="text-gray-400">Date:</span>{" "}
                    {format(new Date(selected.eventDate), "PPP")}
                  </div>
                  {selected.eventTime && (
                    <div>
                      <span className="text-gray-400">Time:</span>{" "}
                      {selected.eventTime}
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400">Guests:</span>{" "}
                    {selected.guestCount}
                  </div>
                  <div>
                    <span className="text-gray-400">Service:</span>{" "}
                    {selected.serviceType.replace(/_/g, " ")}
                  </div>
                  <div>
                    <span className="text-gray-400">Venue:</span>{" "}
                    {selected.venueType.replace(/_/g, " ")}
                  </div>
                  {selected.venueLGA && (
                    <div>
                      <span className="text-gray-400">LGA:</span>{" "}
                      {selected.venueLGA}
                    </div>
                  )}
                  {selected.venueAddress && (
                    <div className="col-span-2">
                      <span className="text-gray-400">Address:</span>{" "}
                      {selected.venueAddress}
                    </div>
                  )}
                  {selected.specialRequests && (
                    <div className="col-span-3 bg-amber-50 border border-amber-100 rounded-lg p-2 mt-1">
                      <span className="text-gray-400 text-xs block mb-1">
                        Special Requests
                      </span>
                      {selected.specialRequests}
                    </div>
                  )}
                </div>
              </section>

              {/* Menu */}
              <section>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Menu Selections ({selected.menuSelections.length} items)
                </h3>
                <div className="border rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs text-gray-500">
                          Item
                        </th>
                        <th className="px-4 py-2 text-left text-xs text-gray-500">
                          Category
                        </th>
                        <th className="px-4 py-2 text-right text-xs text-gray-500">
                          Plates
                        </th>
                        <th className="px-4 py-2 text-right text-xs text-gray-500">
                          Unit ₦
                        </th>
                        <th className="px-4 py-2 text-right text-xs text-gray-500">
                          Total ₦
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {selected.menuSelections.map((ms) => (
                        <tr key={ms.id}>
                          <td className="px-4 py-2 font-medium">
                            {ms.menuItem.name}
                          </td>
                          <td className="px-4 py-2 text-gray-400 text-xs">
                            {ms.menuItem.category?.name ?? "—"}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {ms.quantity}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {fmt(ms.unitPrice)}
                          </td>
                          <td className="px-4 py-2 text-right font-semibold">
                            {fmt(ms.quantity * ms.unitPrice)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50 border-t">
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 py-2 text-right text-sm font-semibold text-gray-600"
                        >
                          Menu Total
                        </td>
                        <td className="px-4 py-2 text-right font-bold text-green-700">
                          {fmt(
                            selected.menuSelections.reduce(
                              (s, x) => s + x.quantity * x.unitPrice,
                              0,
                            ),
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>

              {/* Invoice Summary */}
              {selected.totalNGN && (
                <section>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Invoice Summary
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-1.5 text-sm">
                    {selected.perHeadRateNGN && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Service ({selected.guestCount} ×{" "}
                          {fmt(selected.perHeadRateNGN)})
                        </span>
                        <span>
                          {fmt(selected.perHeadRateNGN * selected.guestCount)}
                        </span>
                      </div>
                    )}
                    {selected.deliveryFeeNGN > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Delivery Fee</span>
                        <span>{fmt(selected.deliveryFeeNGN)}</span>
                      </div>
                    )}
                    {selected.setupFeeNGN > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Setup Fee</span>
                        <span>{fmt(selected.setupFeeNGN)}</span>
                      </div>
                    )}
                    {selected.serviceFeeNGN > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Service Fee</span>
                        <span>{fmt(selected.serviceFeeNGN)}</span>
                      </div>
                    )}
                    {selected.transportFeeNGN > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Transport</span>
                        <span>{fmt(selected.transportFeeNGN)}</span>
                      </div>
                    )}
                    {selected.discountNGN > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>−{fmt(selected.discountNGN)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold border-t pt-2 mt-2 text-base">
                      <span>Total</span>
                      <span className="text-green-700">
                        {fmt(selected.totalNGN)}
                      </span>
                    </div>
                    <div className="flex justify-between text-amber-700">
                      <span>50% Deposit</span>
                      <span>{fmt(selected.depositAmtNGN)}</span>
                    </div>
                    <div className="flex justify-between text-red-700 font-medium">
                      <span>Balance Due</span>
                      <span>{fmt(selected.balanceDueNGN)}</span>
                    </div>
                  </div>
                </section>
              )}

              {/* Payment History with Confirm button */}
              {selected.payments.length > 0 && (
                <section>
                  <h3 className="font-semibold text-gray-700 mb-3">
                    Payment History
                  </h3>
                  <div className="space-y-2">
                    {selected.payments.map((p) => (
                      <div
                        key={p.id}
                        className={`rounded-xl border px-4 py-3 flex items-start justify-between gap-3
                          ${p.status === "CONFIRMED" ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {p.status === "CONFIRMED" ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700">
                                <CheckCircle size={12} /> Confirmed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-700">
                                <Clock size={12} /> Pending Review
                              </span>
                            )}
                            <span className="text-xs text-gray-400">
                              {format(new Date(p.paidAt), "dd MMM yyyy")}
                            </span>
                          </div>
                          <div className="font-bold text-base">
                            {fmt(p.amountNGN)}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {p.paymentMethod}
                            {p.reference && ` · Ref: ${p.reference}`}
                          </div>
                          {p.note && (
                            <div className="text-xs text-gray-400 mt-0.5 italic">
                              {p.note}
                            </div>
                          )}
                        </div>
                        {p.status === "PENDING" && (
                          <button
                            onClick={() => confirmPayment(p.id)}
                            disabled={confirming === p.id}
                            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-semibold transition disabled:opacity-50"
                          >
                            <CheckCircle size={13} />
                            {confirming === p.id ? "Confirming…" : "Confirm"}
                          </button>
                        )}
                      </div>
                    ))}

                    {selected.payments.some(
                      (p) => p.status === "CONFIRMED",
                    ) && (
                      <div className="flex justify-between items-center bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                        <span className="text-green-800">Total Confirmed</span>
                        <span className="text-green-700 text-base">
                          {fmt(
                            selected.payments
                              .filter((p) => p.status === "CONFIRMED")
                              .reduce((s, p) => s + p.amountNGN, 0),
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Action row */}
              <div className="flex gap-3 flex-wrap pt-2 border-t">
                {!selected.totalNGN && (
                  <button
                    onClick={() => setModal("invoice")}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition"
                  >
                    📄 Generate Invoice
                  </button>
                )}
                {selected.totalNGN &&
                  selected.paymentStatus !== "FULLY_PAID" && (
                    <button
                      onClick={() => setModal("payment")}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl text-sm transition"
                    >
                      💳 Record Payment
                    </button>
                  )}
                {selected.totalNGN && (
                  <button
                    onClick={() => downloadPDF(selected.id, selected.orderRef)}
                    disabled={pdfLoading}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <Download size={16} />
                    {pdfLoading ? "Generating…" : "Download PDF"}
                  </button>
                )}
                {(selected.paymentStatus === "DEPOSIT_PAID" ||
                  selected.paymentStatus === "FULLY_PAID") &&
                  selected.status !== "IN_PROGRESS" &&
                  selected.status !== "COMPLETED" && (
                    <button
                      onClick={approveForEvent}
                      disabled={saving}
                      className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 rounded-xl text-sm transition disabled:opacity-60"
                    >
                      ✅ Approve for Event
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════ INVOICE MODAL ════════════ */}
      {selected && modal === "invoice" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Generate Invoice</h2>
              <button onClick={() => setModal("detail")}>
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {/* Menu preview inside invoice modal */}
              <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-600 border">
                <div className="font-semibold text-gray-700 mb-2 text-sm">
                  Ordered Items ({selected.menuSelections.length})
                </div>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {selected.menuSelections.map((ms) => (
                    <div key={ms.id} className="flex justify-between">
                      <span>
                        {ms.menuItem.name}{" "}
                        <span className="text-gray-400">×{ms.quantity}</span>
                      </span>
                      <span className="font-medium">
                        {fmt(ms.quantity * ms.unitPrice)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2 text-sm text-green-700">
                  <span>Menu Total</span>
                  <span>
                    {fmt(
                      selected.menuSelections.reduce(
                        (s, x) => s + x.quantity * x.unitPrice,
                        0,
                      ),
                    )}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Now add the service rate and any extra fees to complete the
                invoice for <strong>{selected.clientName}</strong> (
                {selected.guestCount} guests).
              </p>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Per-Head Service Rate (₦) *
                </label>
                <input
                  type="number"
                  value={invoiceForm.perHeadRate}
                  placeholder="e.g. 9000"
                  onChange={(e) =>
                    setInvoiceForm((f) => ({
                      ...f,
                      perHeadRate: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    "deliveryFee",
                    "setupFee",
                    "serviceFee",
                    "transportFee",
                  ] as const
                ).map((field) => (
                  <div key={field}>
                    <label className="text-xs font-semibold text-gray-500 block mb-1 capitalize">
                      {field
                        .replace(/([A-Z])/g, " $1")
                        .replace("Fee", " Fee (₦)")}
                    </label>
                    <input
                      type="number"
                      value={invoiceForm[field]}
                      onChange={(e) =>
                        setInvoiceForm((f) => ({
                          ...f,
                          [field]: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Discount (₦)
                </label>
                <input
                  type="number"
                  value={invoiceForm.discount}
                  onChange={(e) =>
                    setInvoiceForm((f) => ({ ...f, discount: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Internal Notes
                </label>
                <textarea
                  rows={2}
                  value={invoiceForm.internalNotes}
                  onChange={(e) =>
                    setInvoiceForm((f) => ({
                      ...f,
                      internalNotes: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:border-green-400"
                />
              </div>

              {/* Live total preview */}
              {preview && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm space-y-1.5">
                  <div className="font-semibold text-green-800 mb-2">
                    Invoice Preview
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Menu Items</span>
                    <span>{fmt(preview.menuSub)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Service ({selected.guestCount} ×{" "}
                      {fmt(Number(invoiceForm.perHeadRate))})
                    </span>
                    <span>{fmt(preview.serviceBase)}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2 text-base">
                    <span>Total</span>
                    <span className="text-green-700">{fmt(preview.total)}</span>
                  </div>
                  <div className="flex justify-between text-amber-700">
                    <span>Deposit (50%)</span>
                    <span>{fmt(preview.deposit)}</span>
                  </div>
                  <div className="flex justify-between text-red-700">
                    <span>Balance Due</span>
                    <span>{fmt(preview.total - preview.deposit)}</span>
                  </div>
                </div>
              )}

              {/* Email note */}
              <div className="flex gap-2 items-start bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>
                  {selected.clientEmail ? (
                    <>
                      The invoice PDF will be{" "}
                      <strong>automatically emailed</strong> to{" "}
                      <strong>{selected.clientEmail}</strong> when you generate
                      it.
                    </>
                  ) : (
                    <>
                      This client has <strong>no email address</strong> on file.
                      The invoice will be generated but not emailed.
                    </>
                  )}
                </span>
              </div>

              {emailStatus === "sent" && (
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-700 font-medium">
                  ✅ Invoice generated and emailed to {selected.clientEmail}
                </div>
              )}
              {emailStatus === "no-email" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-sm text-yellow-700">
                  ⚠️ Invoice generated. No email address — download the PDF to
                  share manually.
                </div>
              )}

              <button
                onClick={generateInvoice}
                disabled={saving || !invoiceForm.perHeadRate}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition disabled:opacity-50"
              >
                {saving
                  ? "Generating…"
                  : selected.clientEmail
                    ? "Generate & Email Invoice"
                    : "Generate Invoice"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════ PAYMENT MODAL ════════════ */}
      {selected && modal === "payment" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Record Payment</h2>
              <button onClick={() => setModal("detail")}>
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {selected.totalNGN && (
                <div className="bg-gray-50 rounded-xl p-3 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total</span>
                    <span className="font-bold">{fmt(selected.totalNGN)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deposit (50%)</span>
                    <span>{fmt(selected.depositAmtNGN)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Balance Due</span>
                    <span className="font-bold text-red-600">
                      {fmt(selected.balanceDueNGN)}
                    </span>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Amount Received (₦) *
                </label>
                <input
                  type="number"
                  value={paymentForm.amount}
                  placeholder="Enter amount"
                  onChange={(e) =>
                    setPaymentForm((f) => ({ ...f, amount: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                />
                {selected.depositAmtNGN && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <button
                      onClick={() =>
                        setPaymentForm((f) => ({
                          ...f,
                          amount: String(selected.depositAmtNGN),
                        }))
                      }
                      className="text-xs px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg hover:bg-amber-100"
                    >
                      Deposit: {fmt(selected.depositAmtNGN)}
                    </button>
                    {(selected.balanceDueNGN ?? 0) > 0 && (
                      <button
                        onClick={() =>
                          setPaymentForm((f) => ({
                            ...f,
                            amount: String(selected.balanceDueNGN),
                          }))
                        }
                        className="text-xs px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100"
                      >
                        Balance: {fmt(selected.balanceDueNGN)}
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setPaymentForm((f) => ({
                          ...f,
                          amount: String(selected.totalNGN),
                        }))
                      }
                      className="text-xs px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100"
                    >
                      Full: {fmt(selected.totalNGN)}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Payment Method *
                </label>
                <select
                  value={paymentForm.paymentMethod}
                  onChange={(e) =>
                    setPaymentForm((f) => ({
                      ...f,
                      paymentMethod: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                >
                  <option value="TRANSFER">Bank Transfer</option>
                  <option value="CASH">Cash</option>
                  <option value="POS">POS</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Reference (optional)
                </label>
                <input
                  type="text"
                  value={paymentForm.reference}
                  placeholder="Transaction ref / receipt number"
                  onChange={(e) =>
                    setPaymentForm((f) => ({ ...f, reference: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  Note (optional)
                </label>
                <input
                  type="text"
                  value={paymentForm.note}
                  placeholder="e.g. First instalment"
                  onChange={(e) =>
                    setPaymentForm((f) => ({ ...f, note: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                />
              </div>

              <div className="flex gap-2 items-start bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>
                  Payment is saved as <strong>Pending Review</strong>. Go back
                  to the order detail and click <strong>Confirm</strong> after
                  verifying. Only confirmed payments count toward the balance.
                </span>
              </div>

              <button
                onClick={recordPayment}
                disabled={saving || !paymentForm.amount}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition disabled:opacity-50"
              >
                {saving ? "Saving…" : "Save Payment (Pending Review)"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
