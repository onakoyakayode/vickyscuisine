import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     console.log(
//       "[POST /api/menu/menu-item] body:",
//       JSON.stringify(body, null, 2),
//     );

//     const item = await db.menuItem.create({
//       data: {
//         name: body.name,
//         slug: body.slug,
//         priceNGN: body.priceNGN,
//         description: body.description,
//         imageUrl: body.imageUrl, // 👈 FROM CLOUDINARY
//         publicId: body.publicId,
//         categoryId: body.categoryId,
//         isAvailable: true,
//         isFeatured: body.isFeatured ?? false,
//       },
//     });

//     return NextResponse.json(item);
//   } catch (err: any) {
//     return NextResponse.json(
//       { error: err.message || "Failed to create item" },
//       { status: 500 },
//     );
//   }
// }
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 👇 ADD THIS — check what's actually received
    console.log(
      "[POST /api/menu/menu-item] body:",
      JSON.stringify(body, null, 2),
    );

    const item = await db.menuItem.create({
      data: {
        name: body.name,
        slug: body.slug,
        priceNGN: body.priceNGN,
        description: body.description ?? null,
        imageUrl: body.imageUrl, // 👈 is this defined?
        publicId: body.publicId, // 👈 is this defined?
        categoryId: body.categoryId,
        isAvailable: true,
        isFeatured: body.isFeatured ?? false,
      },
    });

    console.log(
      "[POST /api/menu/menu-item] saved item:",
      JSON.stringify(item, null, 2),
    );

    return NextResponse.json({ success: true, item });
  } catch (err: any) {
    console.error("[POST /api/menu/menu-item] error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create item" },
      { status: 500 },
    );
  }
}
