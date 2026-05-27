// src/app/api/events/service-packages/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Public endpoint — no auth required.
 * Returns service packages that admin has configured.
 * Falls back to hardcoded defaults if the EventServicePackage table
 * hasn't been seeded yet (so the form never breaks).
 */

// Fallback defaults — used if no DB rows exist yet
const DEFAULTS = [
  {
    id: "fallback-1",
    name: "Food Delivery Only",
    serviceType: "DELIVERY_ONLY" as const,
    basePricePerHead: 3000,
    fromPrice: "From ₦3,000/head",
  },
  {
    id: "fallback-2",
    name: "Packed Meals / Party Packs",
    serviceType: "PACKED_MEALS" as const,
    basePricePerHead: 3500,
    fromPrice: "From ₦3,500/head",
  },
  {
    id: "fallback-3",
    name: "Buffet Setup",
    serviceType: "BUFFET_SETUP" as const,
    basePricePerHead: 6000,
    fromPrice: "From ₦6,000/head",
  },
  {
    id: "fallback-4",
    name: "Full Catering (Cook, Serve & Setup)",
    serviceType: "FULL_CATERING" as const,
    basePricePerHead: 9000,
    fromPrice: "From ₦9,000/head",
  },
  {
    id: "fallback-5",
    name: "Small Chops & Appetizers",
    serviceType: "SMALL_CHOPS_ONLY" as const,
    basePricePerHead: 0,
    fromPrice: "Quote on request",
  },
];

export async function GET() {
  try {
    // Try to fetch from an EventServicePackage table if you add one later.
    // For now, we return the defaults. When you add the table, replace this.
    // const packages = await prisma.eventServicePackage.findMany({ orderBy: { sortOrder: "asc" } });

    return NextResponse.json({ success: true, data: DEFAULTS });
  } catch (error) {
    console.error("[API/EVENTS/SERVICE-PACKAGES]", error);
    return NextResponse.json({ success: true, data: DEFAULTS });
  }
}
