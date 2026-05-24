// src/app/api/menu/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

type Params = { params: { id: string } };

// ── PATCH — update price, name, availability, isFeatured ──────
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const body = await req.json();

    const allowed = [
      "name",
      "slug",
      "priceNGN",
      "description",
      "isAvailable",
      "isFeatured",
      "categoryId",
      "imageUrl",
      "publicId",
    ];
    const data: Record<string, unknown> = {};
    for (const key of allowed) {
      if (key in body) data[key] = body[key];
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid fields to update." },
        { status: 400 },
      );
    }

    const updated = await db.menuItem.update({
      where: { id: params.id },
      data,
      select: {
        id: true,
        name: true,
        slug: true,
        priceNGN: true,
        description: true,
        isAvailable: true,
        isFeatured: true,
        imageUrl: true, // ✅ fixed — was spreading URL string as a field
        publicId: true, // ✅ fixed
        categoryId: true,
        category: { select: { name: true, slug: true } },
      },
    });

    revalidatePath("/api/menu");
    revalidatePath("/menu");

    return NextResponse.json({ success: true, item: updated });
  } catch (err: unknown) {
    console.error("[PATCH /api/menu/:id] error:", err);
    const isNotFound = (err as any)?.code === "P2025";
    return NextResponse.json(
      {
        success: false,
        error: isNotFound ? "Item not found." : "Update failed.",
      },
      { status: isNotFound ? 404 : 500 },
    );
  }
}

// ── DELETE ────────────────────────────────────────────────────
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    await db.menuItem.delete({ where: { id: params.id } });
    revalidatePath("/api/menu");
    revalidatePath("/menu");
    return NextResponse.json({ success: true, deleted: params.id });
  } catch (err: unknown) {
    const isNotFound = (err as any)?.code === "P2025";
    return NextResponse.json(
      {
        success: false,
        error: isNotFound ? "Item not found." : "Delete failed.",
      },
      { status: isNotFound ? 404 : 500 },
    );
  }
}
