// src/app/api/admin/events/[id]/pdf/route.ts
//
// Generates and streams an invoice PDF for an event order.
// Uses @react-pdf/renderer — install with:
//   npm install @react-pdf/renderer
//
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { format } from "date-fns";

// ─── Styles ───────────────────────────────────────────────────────────────────

const GREEN = "#16a34a";
const DARK = "#111827";
const GRAY = "#6b7280";
const LIGHT_GRAY = "#f3f4f6";
const AMBER = "#92400e";
const RED = "#b91c1c";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: DARK,
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 48,
    backgroundColor: "#ffffff",
  },
  // Header
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
  // Section label
  sectionLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  // Two column row
  twoCol: { flexDirection: "row", gap: 32, marginBottom: 24 },
  col: { flex: 1 },
  // Client info
  clientName: { fontSize: 13, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  clientLine: { fontSize: 10, color: "#374151", marginBottom: 2 },
  // Event detail rows
  detailRow: { flexDirection: "row", marginBottom: 3 },
  detailLabel: { fontSize: 10, color: GRAY, width: 70 },
  detailValue: { fontSize: 10, color: DARK, flex: 1 },
  // Table
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
    flex: 0.8,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textAlign: "right",
  },
  tdItem: { flex: 2.5, fontSize: 10, fontFamily: "Helvetica-Bold" },
  tdCat: { flex: 1.5, fontSize: 9, color: GRAY },
  tdNum: { flex: 0.8, fontSize: 10, textAlign: "right" },
  tdNumBold: {
    flex: 0.8,
    fontSize: 10,
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
  // Totals
  totalsBlock: { alignSelf: "flex-end", width: 240, marginBottom: 20 },
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
  // Payment history
  paymentHeader: {
    flexDirection: "row",
    backgroundColor: "#f0fdf4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#bbf7d0",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  paymentRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  paymentTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0fdf4",
    paddingVertical: 6,
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
  // Terms box
  termsBox: {
    backgroundColor: "#fefce8",
    borderWidth: 1,
    borderColor: "#fde68a",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  termsText: { fontSize: 9, color: "#78350f", lineHeight: 1.5 },
  termsBold: { fontFamily: "Helvetica-Bold" },
  // Footer
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: { fontSize: 8, color: GRAY },
});

// ─── PDF Document ─────────────────────────────────────────────────────────────

function fmt(n?: number | null) {
  return `₦${(n ?? 0).toLocaleString("en-NG")}`;
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
          label: `Service (${order.guestCount} guests × ${fmt(order.perHeadRateNGN)})`,
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
      <Page size="A4" style={s.page}>
        {/* ── Header ── */}
        <View style={s.header}>
          <View>
            <Text style={s.brandName}>Vicky's Cuisine</Text>
            <Text style={s.brandSub}>
              Professional Event Catering · Lagos, Nigeria
            </Text>
          </View>
          <View>
            <Text style={s.invoiceLabel}>INVOICE</Text>
            <Text style={s.invoiceRef}>Ref: {order.orderRef}</Text>
            <Text style={s.invoiceDate}>
              Issued: {format(new Date(order.createdAt), "dd MMM yyyy")}
            </Text>
          </View>
        </View>

        {/* ── Bill To + Event Details ── */}
        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.sectionLabel}>Bill To</Text>
            <Text style={s.clientName}>{order.clientName}</Text>
            <Text style={s.clientLine}>{order.clientPhone}</Text>
            {order.clientEmail && (
              <Text style={s.clientLine}>{order.clientEmail}</Text>
            )}
            {order.clientWhatsApp && (
              <Text style={s.clientLine}>WhatsApp: {order.clientWhatsApp}</Text>
            )}
          </View>
          <View style={s.col}>
            <Text style={s.sectionLabel}>Event Details</Text>
            {[
              ["Type", order.eventType.replace(/_/g, " ")],
              ["Date", format(new Date(order.eventDate), "EEEE, dd MMMM yyyy")],
              order.eventTime ? ["Time", order.eventTime] : undefined,
              ["Guests", String(order.guestCount)],
              ["Service", order.serviceType.replace(/_/g, " ")],
              ["Venue", order.venueType.replace(/_/g, " ")],
              order.venueLGA ? ["LGA", order.venueLGA] : undefined,
              order.venueAddress ? ["Address", order.venueAddress] : undefined,
            ]
              .filter((item): item is [string, string] => !!item)
              .map(([label, value]) => (
                <View key={label} style={s.detailRow}>
                  <Text style={s.detailLabel}>{label}:</Text>
                  <Text style={s.detailValue}>{value}</Text>
                </View>
              ))}
          </View>
        </View>

        {/* ── Menu Table ── */}
        <Text style={s.sectionLabel}>Menu Selections</Text>
        <View style={s.table}>
          <View style={s.tableHeader}>
            <Text style={s.thItem}>Item</Text>
            <Text style={s.thCat}>Category</Text>
            <Text style={s.thNum}>Plates</Text>
            <Text style={s.thNum}>Unit (₦)</Text>
            <Text style={s.thNum}>Total (₦)</Text>
          </View>
          {(order.menuSelections ?? []).map((sel: any, i: number) => (
            <View key={sel.id} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
              <Text style={s.tdItem}>{sel.menuItem.name}</Text>
              <Text style={s.tdCat}>{sel.menuItem.category?.name ?? "—"}</Text>
              <Text style={s.tdNum}>{sel.quantity}</Text>
              <Text style={s.tdNum}>
                {sel.unitPrice.toLocaleString("en-NG")}
              </Text>
              <Text style={s.tdNumBold}>
                {(sel.quantity * sel.unitPrice).toLocaleString("en-NG")}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Totals ── */}
        <View style={s.totalsBlock}>
          <View style={s.totalRow}>
            <Text style={s.totalLabel}>Menu Total</Text>
            <Text style={s.totalValue}>{fmt(menuTotal)}</Text>
          </View>
          {feeRows.map((row) => (
            <View key={row.label} style={s.totalRow}>
              <Text
                style={[s.totalLabel, row.isDiscount ? { color: GREEN } : {}]}
              >
                {row.label}
              </Text>
              <Text
                style={[s.totalValue, row.isDiscount ? { color: GREEN } : {}]}
              >
                {row.isDiscount
                  ? `−${fmt(Math.abs(row.value))}`
                  : fmt(row.value)}
              </Text>
            </View>
          ))}
          <View style={s.grandRow}>
            <Text style={s.grandLabel}>TOTAL</Text>
            <Text style={s.grandValue}>{fmt(order.totalNGN)}</Text>
          </View>
          <View style={s.depositRow}>
            <Text style={s.depositLabel}>50% Deposit</Text>
            <Text style={s.depositValue}>{fmt(order.depositAmtNGN)}</Text>
          </View>
          <View style={s.balanceRow}>
            <Text style={s.balanceLabel}>Balance Due</Text>
            <Text style={s.balanceValue}>{fmt(order.balanceDueNGN)}</Text>
          </View>
        </View>

        {/* ── Confirmed Payment History ── */}
        {confirmedPayments.length > 0 && (
          <View style={{ marginBottom: 20 }}>
            <Text style={s.sectionLabel}>Payments Received</Text>
            <View style={s.paymentHeader}>
              <Text style={s.phDate}>Date</Text>
              <Text style={s.phMethod}>Method</Text>
              <Text style={s.phRef}>Reference</Text>
              <Text style={s.phAmt}>Amount (₦)</Text>
            </View>
            {confirmedPayments.map((p: any) => (
              <View key={p.id} style={s.paymentRow}>
                <Text style={s.pdDate}>
                  {format(new Date(p.paidAt), "dd MMM yyyy")}
                </Text>
                <Text style={s.pdMethod}>{p.paymentMethod}</Text>
                <Text style={s.pdRef}>{p.reference ?? "—"}</Text>
                <Text style={s.pdAmt}>
                  {p.amountNGN.toLocaleString("en-NG")}
                </Text>
              </View>
            ))}
            <View style={s.paymentTotalRow}>
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
                {fmt(totalPaid)}
              </Text>
            </View>
          </View>
        )}

        {/* ── Payment Terms ── */}
        <View style={s.termsBox}>
          <Text style={s.termsText}>
            <Text style={s.termsBold}>Payment Terms: </Text>A 50% deposit is
            required to confirm your booking. The remaining balance is due 2
            weeks before the event date. Accepted methods: Bank Transfer, Cash,
            POS.
          </Text>
        </View>

        {/* ── Footer ── */}
        <View style={s.footer}>
          <Text style={s.footerText}>Vicky's Cuisine · Lagos, Nigeria</Text>
          <Text style={s.footerText}>
            Thank you for choosing us for your special event!
          </Text>
          <Text style={s.footerText}>{order.orderRef}</Text>
        </View>
      </Page>
    </Document>
  );
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await getAuthUser(req);
    if (!user || !["ADMIN", "SUPERADMIN"].includes(user.role)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

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
        payments: {
          where: {
            eventOrder: {
              status: "CONFIRMED",
            },
          },
          orderBy: { paidAt: "desc" },
        },
      },
    });

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 },
      );
    }

    if (!order.totalNGN) {
      return NextResponse.json(
        { success: false, error: "Invoice not yet generated for this order" },
        { status: 400 },
      );
    }

    const buffer = await renderToBuffer(<InvoicePDF order={order} />);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invoice-${order.orderRef}.pdf"`,
        "Content-Length": String(buffer.length),
      },
    });
  } catch (error) {
    console.error("[ADMIN/EVENTS/ID/PDF GET]", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
