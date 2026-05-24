// src/app/api/menu/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic"; // always fresh, no static caching issues

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get("category");
    const featured = searchParams.get("featured");
    const available = searchParams.get("available"); // "false" = include unavailable

    // ── Check DB connection first ────────────────────────────
    const count = await db.menuCategory.count();

    // If DB is empty, return helpful message instead of silent error
    if (count === 0) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Menu not seeded yet. Hit POST /api/seed to populate the database.",
          hint: "Run: curl -X POST http://localhost:3000/api/seed",
        },
        { status: 503 },
      );
    }

    // ── Fetch categories + items ─────────────────────────────
    const categories = await db.menuCategory.findMany({
      where: {
        ...(categorySlug ? { slug: categorySlug } : {}),
      },
      orderBy: { sortOrder: "asc" },
      include: {
        items: {
          where: {
            // available=false in query means "include unavailable too" (for admin)
            ...(available === "false" ? {} : { isAvailable: true }),
            ...(featured === "true" ? { isFeatured: true } : {}),
          },
          orderBy: { sortOrder: "asc" },
          select: {
            id: true,
            name: true,
            slug: true,
            priceNGN: true,
            description: true,
            isAvailable: true,
            isFeatured: true,
            imageUrl: true,
            publicId: true,
          },
        },
      },
    });

    // Timestamp of most recently updated item (for cache headers / ETag)
    const latest = await db.menuItem.findFirst({
      orderBy: { updatedAt: "desc" },
      select: { updatedAt: true },
    });

    return NextResponse.json(
      {
        success: true,
        updatedAt: latest?.updatedAt.toISOString() ?? new Date().toISOString(),
        categories: categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          items: cat.items,
        })),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch (err: unknown) {
    // ── Log the actual error so you can debug ─────────────────
    console.error("[GET /api/menu] DB error:", err);

    const message =
      err instanceof Error ? err.message : "Unknown database error";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
