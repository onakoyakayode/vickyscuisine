// src/app/api/events/menu-categories/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Public endpoint — no auth required.
 * Returns all menu categories with their available items.
 * The `required` and `minProtein` rules are derived from the category slug
 * so the admin doesn't need a separate config table.
 */

// Slugs that map to required categories
const REQUIRED_SLUGS = [
  "rice",
  "main-rice",
  "swallows",
  "swallow",
  "soups",
  "soup",
  "protein",
  "main-protein",
];

// Slugs that are protein categories (enforce minProtein rule)
const PROTEIN_SLUGS = [
  "protein",
  "main-protein",
  "swallows",
  "swallow",
  "soups",
  "soup",
];

function isRequired(slug: string) {
  return REQUIRED_SLUGS.some((s) => slug.toLowerCase().includes(s));
}

function isProtein(slug: string, name: string) {
  return (
    PROTEIN_SLUGS.some((s) => slug.toLowerCase().includes(s)) ||
    name.toLowerCase().includes("protein") ||
    name.toLowerCase().includes("swallow") ||
    name.toLowerCase().includes("soup")
  );
}

export async function GET() {
  try {
    const categories = await prisma.menuCategory.findMany({
      where: {
        items: {
          some: { isAvailable: true },
        },
      },
      include: {
        items: {
          where: { isAvailable: true },
          orderBy: { sortOrder: "asc" },
          select: {
            id: true,
            name: true,
            description: true,
            priceNGN: true,
            isAvailable: true,
          },
        },
      },
      orderBy: { sortOrder: "asc" },
    });

    const enriched = categories.map((cat) => ({
      ...cat,
      required: isRequired(cat.slug),
      minProtein: isProtein(cat.slug, cat.name) ? 2 : undefined,
    }));

    return NextResponse.json({ success: true, data: enriched });
  } catch (error) {
    console.error("[API/EVENTS/MENU-CATEGORIES]", error);
    return NextResponse.json(
      { success: false, error: "Failed to load menu" },
      { status: 500 },
    );
  }
}
