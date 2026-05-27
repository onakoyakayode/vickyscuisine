// src/app/api/admin/events/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { format } from "date-fns";

// ─── Auth guard ───────────────────────────────────────────────────────────────
async function requireAdmin(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user || !["ADMIN", "SUPERADMIN"].includes(user.role)) return null;
  return user;
}

// ─── PDF styles ───────────────────────────────────────────────────────────────
const GREEN = "#16a34a";
const GRAY = "#6b7280";
const AMBER = "#92400e";
const RED = "#b91c1c";
const DARK = "#111827";

const ps = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: DARK,
    padding: 48,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: GREEN,
  },
  brandName: { fontSize: 22, fontFamily: "Helvetica-Bold", color: GREEN },
  brandSub: { fontSize: 9, color: GRAY, marginTop: 3 },
  invoiceLabel: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    textAlign: "right",
  },
  invoiceRef: { fontSize: 9, color: GRAY, textAlign: "right", marginTop: 3 },
  invoiceDate: { fontSize: 9, color: GRAY, textAlign: "right", marginTop: 2 },
  sectionLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  twoCol: { flexDirection: "row", gap: 32, marginBottom: 24 },
  col: { flex: 1 },
  clientName: { fontSize: 13, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  clientLine: { fontSize: 10, color: "#374151", marginBottom: 2 },
  detailRow: { flexDirection: "row", marginBottom: 3 },
  detailLabel: { fontSize: 10, color: GRAY, width: 70 },
  detailValue: { fontSize: 10, color: DARK, flex: 1 },
  table: { marginBottom: 20 },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0fdf4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#bbf7d0",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableRowAlt: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#fafafa",
  },
  thItem: { flex: 2.5, fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY },
  thCat: { flex: 1.5, fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY },
  thNum: {
    flex: 0.9,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textAlign: "right",
  },
  tdItem: { flex: 2.5, fontSize: 10, fontFamily: "Helvetica-Bold" },
  tdCat: { flex: 1.5, fontSize: 9, color: GRAY },
  tdNum: { flex: 0.9, fontSize: 10, textAlign: "right" },
  tdNumBold: {
    flex: 0.9,
    fontSize: 10,
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
  totalsBlock: { alignSelf: "flex-end", width: 260, marginBottom: 20 },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  totalLabel: { fontSize: 10, color: GRAY },
  totalValue: { fontSize: 10 },
  grandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    marginTop: 6,
    borderTopWidth: 2,
    borderTopColor: GREEN,
  },
  grandLabel: { fontSize: 13, fontFamily: "Helvetica-Bold", color: GREEN },
  grandValue: { fontSize: 13, fontFamily: "Helvetica-Bold", color: GREEN },
  depositRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  depositLabel: { fontSize: 10, color: AMBER },
  depositValue: { fontSize: 10, color: AMBER },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  balanceLabel: { fontSize: 10, color: RED, fontFamily: "Helvetica-Bold" },
  balanceValue: { fontSize: 10, color: RED, fontFamily: "Helvetica-Bold" },
  payHeader: {
    flexDirection: "row",
    backgroundColor: "#f0fdf4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#bbf7d0",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  payRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  phDate: { flex: 1.2, fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY },
  phMethod: { flex: 1, fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY },
  phRef: { flex: 1.5, fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY },
  phAmt: {
    flex: 1,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textAlign: "right",
  },
  pdDate: { flex: 1.2, fontSize: 9 },
  pdMethod: { flex: 1, fontSize: 9 },
  pdRef: { flex: 1.5, fontSize: 9, color: GRAY },
  pdAmt: {
    flex: 1,
    fontSize: 9,
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
  termsBox: {
    backgroundColor: "#fefce8",
    borderWidth: 1,
    borderColor: "#fde68a",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  termsText: { fontSize: 9, color: "#78350f", lineHeight: 1.5 },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: { fontSize: 8, color: GRAY },
});

// ─── PDF Component ────────────────────────────────────────────────────────────
function fmtN(n?: number | null) {
  return `N${(n ?? 0).toLocaleString("en-NG")}`;
}

function InvoicePDF({ order }: { order: any }) {
  const confirmedPayments = (order.payments ?? []).filter(
    (p: any) => p.status === "CONFIRMED",
  );
  const totalPaid = confirmedPayments.reduce(
    (s: number, p: any) => s + p.amountNGN,
    0,
  );
  const menuTotal = (order.menuSelections ?? []).reduce(
    (s: number, x: any) => s + x.quantity * x.unitPrice,
    0,
  );

  const feeRows = [
    order.perHeadRateNGN
      ? {
          label: `Service (${order.guestCount} guests x ${fmtN(order.perHeadRateNGN)}/head)`,
          value: order.perHeadRateNGN * order.guestCount,
        }
      : null,
    order.deliveryFeeNGN > 0
      ? { label: "Delivery Fee", value: order.deliveryFeeNGN }
      : null,
    order.setupFeeNGN > 0
      ? { label: "Setup Fee", value: order.setupFeeNGN }
      : null,
    order.serviceFeeNGN > 0
      ? { label: "Service Fee", value: order.serviceFeeNGN }
      : null,
    order.transportFeeNGN > 0
      ? { label: "Transport", value: order.transportFeeNGN }
      : null,
    order.discountNGN > 0
      ? { label: "Discount", value: -order.discountNGN, isDiscount: true }
      : null,
  ].filter(Boolean) as { label: string; value: number; isDiscount?: boolean }[];

  return (
    <Document title={`Invoice ${order.orderRef}`} author="Vicky's Cuisine">
      <Page size="A4" style={ps.page}>
        {/* Header */}
        <View style={ps.header}>
          <View>
            <Text style={ps.brandName}>{"Vicky's Cuisine"}</Text>
            <Text style={ps.brandSub}>
              Professional Event Catering · Lagos, Nigeria
            </Text>
          </View>
          <View>
            <Text style={ps.invoiceLabel}>INVOICE</Text>
            <Text style={ps.invoiceRef}>Ref: {order.orderRef}</Text>
            <Text style={ps.invoiceDate}>
              Issued: {format(new Date(order.createdAt), "dd MMM yyyy")}
            </Text>
          </View>
        </View>

        {/* Bill To + Event Details */}
        <View style={ps.twoCol}>
          <View style={ps.col}>
            <Text style={ps.sectionLabel}>Bill To</Text>
            <Text style={ps.clientName}>{order.clientName}</Text>
            <Text style={ps.clientLine}>{order.clientPhone}</Text>
            {order.clientEmail && (
              <Text style={ps.clientLine}>{order.clientEmail}</Text>
            )}
            {order.clientWhatsApp && (
              <Text style={ps.clientLine}>
                WhatsApp: {order.clientWhatsApp}
              </Text>
            )}
          </View>
          <View style={ps.col}>
            <Text style={ps.sectionLabel}>Event Details</Text>
            {(
              [
                ["Type", order.eventType.replace(/_/g, " ")],
                [
                  "Date",
                  format(new Date(order.eventDate), "EEEE, dd MMMM yyyy"),
                ],
                order.eventTime ? ["Time", order.eventTime] : null,
                ["Guests", String(order.guestCount)],
                ["Service", order.serviceType.replace(/_/g, " ")],
                ["Venue", order.venueType.replace(/_/g, " ")],
                order.venueLGA ? ["LGA", order.venueLGA] : null,
                order.venueAddress ? ["Address", order.venueAddress] : null,
              ] as ([string, string] | null)[]
            )
              .filter((item): item is [string, string] => item !== null)
              .map(([label, value]) => (
                <View key={label} style={ps.detailRow}>
                  <Text style={ps.detailLabel}>{label}:</Text>
                  <Text style={ps.detailValue}>{value}</Text>
                </View>
              ))}
          </View>
        </View>

        {/* Menu Table */}
        <Text style={ps.sectionLabel}>Menu Selections</Text>
        <View style={ps.table}>
          <View style={ps.tableHeader}>
            <Text style={ps.thItem}>Item</Text>
            <Text style={ps.thCat}>Category</Text>
            <Text style={ps.thNum}>Plates</Text>
            <Text style={ps.thNum}>Unit (N)</Text>
            <Text style={ps.thNum}>Total (N)</Text>
          </View>
          {(order.menuSelections ?? []).map((sel: any, i: number) => (
            <View
              key={sel.id}
              style={i % 2 === 0 ? ps.tableRow : ps.tableRowAlt}
            >
              <Text style={ps.tdItem}>{sel.menuItem.name}</Text>
              <Text style={ps.tdCat}>{sel.menuItem.category?.name ?? "—"}</Text>
              <Text style={ps.tdNum}>{sel.quantity}</Text>
              <Text style={ps.tdNum}>
                {sel.unitPrice.toLocaleString("en-NG")}
              </Text>
              <Text style={ps.tdNumBold}>
                {(sel.quantity * sel.unitPrice).toLocaleString("en-NG")}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals */}
        <View style={ps.totalsBlock}>
          <View style={ps.totalRow}>
            <Text style={ps.totalLabel}>Menu Total</Text>
            <Text style={ps.totalValue}>{fmtN(menuTotal)}</Text>
          </View>
          {feeRows.map((row) => (
            <View key={row.label} style={ps.totalRow}>
              <Text
                style={[ps.totalLabel, row.isDiscount ? { color: GREEN } : {}]}
              >
                {row.label}
              </Text>
              <Text
                style={[ps.totalValue, row.isDiscount ? { color: GREEN } : {}]}
              >
                {row.isDiscount
                  ? `−${fmtN(Math.abs(row.value))}`
                  : fmtN(row.value)}
              </Text>
            </View>
          ))}
          <View style={ps.grandRow}>
            <Text style={ps.grandLabel}>TOTAL</Text>
            <Text style={ps.grandValue}>{fmtN(order.totalNGN)}</Text>
          </View>
          <View style={ps.depositRow}>
            <Text style={ps.depositLabel}>50% Deposit</Text>
            <Text style={ps.depositValue}>{fmtN(order.depositAmtNGN)}</Text>
          </View>
          <View style={ps.balanceRow}>
            <Text style={ps.balanceLabel}>Balance Due</Text>
            <Text style={ps.balanceValue}>{fmtN(order.balanceDueNGN)}</Text>
          </View>
        </View>

        {/* Confirmed Payment History */}
        {confirmedPayments.length > 0 && (
          <View style={{ marginBottom: 20 }}>
            <Text style={ps.sectionLabel}>Payments Received</Text>
            <View style={ps.payHeader}>
              <Text style={ps.phDate}>Date</Text>
              <Text style={ps.phMethod}>Method</Text>
              <Text style={ps.phRef}>Reference</Text>
              <Text style={ps.phAmt}>Amount (N)</Text>
            </View>
            {confirmedPayments.map((p: any) => (
              <View key={p.id} style={ps.payRow}>
                <Text style={ps.pdDate}>
                  {format(new Date(p.paidAt), "dd MMM yyyy")}
                </Text>
                <Text style={ps.pdMethod}>{p.paymentMethod}</Text>
                <Text style={ps.pdRef}>{p.reference ?? "—"}</Text>
                <Text style={ps.pdAmt}>
                  {p.amountNGN.toLocaleString("en-NG")}
                </Text>
              </View>
            ))}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#f0fdf4",
                paddingVertical: 6,
                paddingHorizontal: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Helvetica-Bold",
                  color: GRAY,
                }}
              >
                Total Confirmed
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Helvetica-Bold",
                  color: GREEN,
                }}
              >
                {fmtN(totalPaid)}
              </Text>
            </View>
          </View>
        )}

        {/* Payment Terms */}
        <View style={ps.termsBox}>
          <Text style={ps.termsText}>
            {
              "Payment Terms: A 50% deposit is required to confirm your booking. The remaining balance is due 2 weeks before the event date. Accepted methods: Bank Transfer, Cash, POS."
            }
          </Text>
        </View>

        {/* Footer */}
        <View style={ps.footer}>
          <Text style={ps.footerText}>
            {"Vicky's Cuisine · Lagos, Nigeria"}
          </Text>
          <Text style={ps.footerText}>Thank you for your booking!</Text>
          <Text style={ps.footerText}>{order.orderRef}</Text>
        </View>
      </Page>
    </Document>
  );
}

// ─── Helper: build full order with all relations ──────────────────────────────
async function fetchFullOrder(id: string) {
  return prisma.eventOrder.findUnique({
    where: { id },
    include: {
      menuSelections: {
        include: {
          menuItem: {
            select: {
              id: true,
              name: true,
              priceNGN: true,
              category: { select: { name: true } },
            },
          },
        },
      },
      payments: { orderBy: { paidAt: "desc" } },
    },
  });
}

// ─── Helper: recalculate payment status from confirmed payments only ──────────
async function recalcPaymentStatus(orderId: string) {
  const order = await prisma.eventOrder.findUnique({
    where: { id: orderId },
    include: { payments: { where: { status: "PAID" } } },
  });
  if (!order) return;

  const totalConfirmed = order.payments.reduce((s, p) => s + p.amountNGN, 0);
  const deposit =
    order.depositAmtNGN ??
    (order.totalNGN ? Math.ceil(order.totalNGN * 0.5) : 0);

  let paymentStatus = "UNPAID";
  if (order.totalNGN && totalConfirmed >= order.totalNGN)
    paymentStatus = "FULLY_PAID";
  else if (totalConfirmed >= deposit && deposit > 0)
    paymentStatus = "DEPOSIT_PAID";

  await prisma.eventOrder.update({
    where: { id: orderId },
    data: {
      paymentStatus: paymentStatus as "UNPAID" | "DEPOSIT_PAID" | "FULLY_PAID",
      balanceDueNGN: order.totalNGN
        ? Math.max(0, order.totalNGN - totalConfirmed)
        : undefined,
    },
  });
}

// ─── GET single event ─────────────────────────────────────────────────────────
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const user = await requireAdmin(req);
  if (!user)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const order = await fetchFullOrder(params.id);
  if (!order)
    return NextResponse.json(
      { success: false, error: "Not found" },
      { status: 404 },
    );

  return NextResponse.json({ success: true, data: order });
}

// ─── PATCH — actions ──────────────────────────────────────────────────────────
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await requireAdmin(req);
    if (!user)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );

    const body = await req.json();
    const { action } = body;

    // ── Generate Invoice + send email ────────────────────────────────────
    if (action === "generate_invoice") {
      const {
        perHeadRate,
        deliveryFee,
        setupFee,
        serviceFee,
        transportFee,
        discount,
        internalNotes,
      } = body;

      const order = await prisma.eventOrder.findUnique({
        where: { id: params.id },
        include: {
          menuSelections: {
            include: {
              menuItem: {
                select: {
                  id: true,
                  name: true,
                  priceNGN: true,
                  category: { select: { name: true } },
                },
              },
            },
          },
          payments: { orderBy: { paidAt: "desc" } },
        },
      });
      if (!order)
        return NextResponse.json(
          { success: false, error: "Not found" },
          { status: 404 },
        );

      const menuSub = order.menuSelections.reduce(
        (s, x) => s + x.quantity * x.unitPrice,
        0,
      );
      const serviceBase = Number(perHeadRate) * order.guestCount;
      const subtotal = menuSub + serviceBase;
      const total =
        subtotal +
        Number(deliveryFee || 0) +
        Number(setupFee || 0) +
        Number(serviceFee || 0) +
        Number(transportFee || 0) -
        Number(discount || 0);
      const deposit = Math.ceil(total * 0.5);

      const updated = await prisma.eventOrder.update({
        where: { id: params.id },
        data: {
          perHeadRateNGN: Number(perHeadRate),
          subtotalNGN: subtotal,
          deliveryFeeNGN: Number(deliveryFee || 0),
          setupFeeNGN: Number(setupFee || 0),
          serviceFeeNGN: Number(serviceFee || 0),
          transportFeeNGN: Number(transportFee || 0),
          discountNGN: Number(discount || 0),
          totalNGN: total,
          depositAmtNGN: deposit,
          balanceDueNGN: total - deposit,
          internalNotes: internalNotes || undefined,
          status: "QUOTE_SENT",
          quoteSentAt: new Date(),
        },
      });

      // Build PDF from the just-updated order data
      const orderForPdf = {
        ...order,
        ...updated,
        perHeadRateNGN: Number(perHeadRate),
        subtotalNGN: subtotal,
        deliveryFeeNGN: Number(deliveryFee || 0),
        setupFeeNGN: Number(setupFee || 0),
        serviceFeeNGN: Number(serviceFee || 0),
        transportFeeNGN: Number(transportFee || 0),
        discountNGN: Number(discount || 0),
        totalNGN: total,
        depositAmtNGN: deposit,
        balanceDueNGN: total - deposit,
      };

      const pdfBuffer = await renderToBuffer(
        <InvoicePDF order={orderForPdf} />,
      );

      // Send email if client has an email address
      let emailSent = false;
      if (order.clientEmail) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        try {
          const menuListHtml = order.menuSelections
            .map(
              (s) =>
                `<tr>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${s.menuItem.name}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">${s.menuItem.category?.name ?? "—"}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">${s.quantity}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">₦${s.unitPrice.toLocaleString()}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:700;">₦${(s.quantity * s.unitPrice).toLocaleString()}</td>
            </tr>`,
            )
            .join("");

          await resend.emails.send({
            from:
              process.env.EMAIL_FROM ??
              "Vicky's Cuisine <invoices@yourdomain.com>",
            to: order.clientEmail,
            subject: `Your Invoice from Vicky's Cuisine — ${order.orderRef}`,
            attachments: [
              {
                filename: `invoice-${order.orderRef}.pdf`,
                content: pdfBuffer,
              },
            ],
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <div style="max-width:620px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">

    <!-- Header -->
    <div style="background:#16a34a;padding:28px 36px;">
      <div style="font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;">Vicky's Cuisine</div>
      <div style="font-size:12px;color:#bbf7d0;margin-top:4px;">Professional Event Catering · Lagos, Nigeria</div>
    </div>

    <!-- Body -->
    <div style="padding:32px 36px;">
      <p style="font-size:16px;font-weight:700;color:#111827;margin:0 0 6px;">Dear ${order.clientName},</p>
      <p style="font-size:14px;color:#374151;margin:0 0 24px;line-height:1.6;">
        Thank you for choosing Vicky's Cuisine for your upcoming event. Please find your invoice attached as a PDF.
        Here's a summary of what you ordered:
      </p>

      <!-- Event Info -->
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-bottom:24px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:10px;">Event Details</div>
        <table style="width:100%;font-size:13px;">
          <tr><td style="color:#6b7280;padding:3px 0;width:90px;">Ref:</td><td style="font-weight:700;">${order.orderRef}</td></tr>
          <tr><td style="color:#6b7280;padding:3px 0;">Event:</td><td>${order.eventType.replace(/_/g, " ")}</td></tr>
          <tr><td style="color:#6b7280;padding:3px 0;">Date:</td><td>${format(new Date(order.eventDate), "EEEE, dd MMMM yyyy")}</td></tr>
          <tr><td style="color:#6b7280;padding:3px 0;">Guests:</td><td>${order.guestCount}</td></tr>
          ${order.venueLGA ? `<tr><td style="color:#6b7280;padding:3px 0;">LGA:</td><td>${order.venueLGA}</td></tr>` : ""}
          ${order.venueAddress ? `<tr><td style="color:#6b7280;padding:3px 0;">Venue:</td><td>${order.venueAddress}</td></tr>` : ""}
        </table>
      </div>

      <!-- Menu Table -->
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:8px;">Your Menu</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
        <thead>
          <tr style="background:#f0fdf4;border-top:1px solid #bbf7d0;border-bottom:1px solid #bbf7d0;">
            <th style="padding:8px 12px;text-align:left;font-size:11px;color:#6b7280;">Item</th>
            <th style="padding:8px 12px;text-align:left;font-size:11px;color:#6b7280;">Category</th>
            <th style="padding:8px 12px;text-align:right;font-size:11px;color:#6b7280;">Plates</th>
            <th style="padding:8px 12px;text-align:right;font-size:11px;color:#6b7280;">Unit</th>
            <th style="padding:8px 12px;text-align:right;font-size:11px;color:#6b7280;">Total</th>
          </tr>
        </thead>
        <tbody>${menuListHtml}</tbody>
      </table>

      <!-- Totals -->
      <div style="background:#f9fafb;border-radius:8px;padding:16px;margin-bottom:24px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;">
          <span>Menu Total</span><span>₦${menuSub.toLocaleString()}</span>
        </div>
        ${Number(perHeadRate) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;"><span>Service (${order.guestCount} guests)</span><span>₦${serviceBase.toLocaleString()}</span></div>` : ""}
        ${Number(deliveryFee) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;"><span>Delivery Fee</span><span>₦${Number(deliveryFee).toLocaleString()}</span></div>` : ""}
        ${Number(setupFee) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;"><span>Setup Fee</span><span>₦${Number(setupFee).toLocaleString()}</span></div>` : ""}
        ${Number(serviceFee) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;"><span>Service Fee</span><span>₦${Number(serviceFee).toLocaleString()}</span></div>` : ""}
        ${Number(transportFee) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-bottom:6px;"><span>Transport</span><span>₦${Number(transportFee).toLocaleString()}</span></div>` : ""}
        ${Number(discount) > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#16a34a;margin-bottom:6px;"><span>Discount</span><span>−₦${Number(discount).toLocaleString()}</span></div>` : ""}
        <div style="border-top:2px solid #16a34a;margin-top:10px;padding-top:10px;display:flex;justify-content:space-between;font-size:18px;font-weight:800;color:#16a34a;">
          <span>TOTAL</span><span>₦${total.toLocaleString()}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#92400e;margin-top:8px;">
          <span>50% Deposit to confirm</span><span>₦${deposit.toLocaleString()}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#b91c1c;font-weight:700;margin-top:4px;">
          <span>Balance Due</span><span>₦${(total - deposit).toLocaleString()}</span>
        </div>
      </div>

      <!-- CTA -->
      <div style="background:#fefce8;border:1px solid #fde68a;border-radius:8px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#78350f;line-height:1.6;">
        <strong>Next steps:</strong> Please pay the 50% deposit (₦${deposit.toLocaleString()}) to confirm your booking.
        The balance of ₦${(total - deposit).toLocaleString()} is due 2 weeks before your event.
        We accept Bank Transfer, Cash, and POS. Contact us once payment is made so we can confirm your booking.
      </div>

      <p style="font-size:13px;color:#374151;line-height:1.6;margin:0 0 8px;">
        The full invoice PDF is attached to this email for your records.
      </p>
      <p style="font-size:13px;color:#374151;line-height:1.6;margin:0;">
        If you have any questions, please don't hesitate to reach out.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 36px;text-align:center;">
      <p style="font-size:12px;color:#9ca3af;margin:0;">Vicky's Cuisine · Lagos, Nigeria</p>
      <p style="font-size:11px;color:#d1d5db;margin:4px 0 0;">Ref: ${order.orderRef}</p>
    </div>

  </div>
</body>
</html>`,
          });
          emailSent = true;
        } catch (emailErr) {
          console.error("[EMAIL SEND ERROR]", emailErr);
          // Don't fail the whole request if email fails
        }
      }

      return NextResponse.json({ success: true, data: updated, emailSent });
    }

    // ── Record Payment (always starts PENDING) ─────────────────────────────
    if (action === "record_payment") {
      const { amount, paymentMethod, reference, note } = body;

      await prisma.eventPayment.create({
        data: {
          eventOrderId: params.id,
          amountNGN: Number(amount),
          paymentMethod,
          reference: reference || undefined,
          note: note || undefined,
          // status:        "PENDING",
          paidAt: new Date(),
        },
      });

      // Status recalcs from confirmed only, so this stays UNPAID/whatever until confirmed
      return NextResponse.json({ success: true });
    }

    // ── Confirm Payment ────────────────────────────────────────────────────
    if (action === "confirm_payment") {
      const { paymentId } = body;

      await prisma.eventPayment.update({
        where: { id: paymentId },
        data: { status: "PAID" },
      });

      await recalcPaymentStatus(params.id);
      return NextResponse.json({ success: true });
    }

    // ── Update Order Status ────────────────────────────────────────────────
    if (action === "update_status") {
      const { status } = body;
      await prisma.eventOrder.update({
        where: { id: params.id },
        data: { status },
      });
      return NextResponse.json({ success: true });
    }

    // ── Approve for Event ──────────────────────────────────────────────────
    if (action === "approve") {
      await prisma.eventOrder.update({
        where: { id: params.id },
        data: { status: "IN_PROGRESS", confirmedAt: new Date() },
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Unknown action" },
      { status: 400 },
    );
  } catch (error) {
    console.error("[ADMIN/EVENTS/ID PATCH]", error);
    return NextResponse.json(
      { success: false, error: "Action failed" },
      { status: 500 },
    );
  }
}
