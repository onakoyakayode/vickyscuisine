// src/lib/menu.server.ts
// Use this in Server Components, generateStaticParams, or getServerSideProps

import { db } from "@/lib/db";
import type { MenuApiResponse, MenuCategory } from "@/types/menu";
import { toMenuConstant } from "@/types/menu";

/**
 * Fetch full menu from DB — use in Server Components.
 *
 * @example
 * // app/menu/page.tsx  (Server Component)
 * import { getMenuFromDB } from "@/lib/menu.server";
 * const { menu, categories } = await getMenuFromDB();
 */
export async function getMenuFromDB(options?: {
  categorySlug?: string;
  featuredOnly?: boolean;
  includeUnavailable?: boolean;
}): Promise<{
  data: MenuApiResponse;
  menu: MenuCategory;
  categories: string[];
}> {
  const categories = await db.menuCategory.findMany({
    where: {
      ...(options?.categorySlug ? { slug: options.categorySlug } : {}),
    },
    orderBy: { sortOrder: "asc" },
    include: {
      items: {
        where: {
          ...(options?.includeUnavailable ? {} : { isAvailable: true }),
          ...(options?.featuredOnly ? { isFeatured: true } : {}),
        },
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  const latestItem = await db.menuItem.findFirst({
    orderBy: { updatedAt: "desc" },
    select: { updatedAt: true },
  });

  const data: MenuApiResponse = {
    success: true,
    updatedAt: latestItem?.updatedAt.toISOString() ?? new Date().toISOString(),
    categories: categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      items: cat.items.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        priceNGN: item.priceNGN,
        description: item.description,
        isAvailable: item.isAvailable,
        isFeatured: item.isFeatured,
      })),
    })),
  };

  return {
    data,
    menu: toMenuConstant(data),
    categories: categories.map((c) => c.name),
  };
}

/**
 * Fetch a single item by ID — useful for admin pages.
 */
export async function getMenuItemById(id: string) {
  return db.menuItem.findUnique({
    where: { id },
    include: { category: { select: { name: true, slug: true } } },
  });
}

/**
 * Update item price directly from server code (e.g. admin server action).
 */
export async function updateMenuItemPrice(id: string, priceNGN: number) {
  return db.menuItem.update({
    where: { id },
    data: { priceNGN },
    select: { id: true, name: true, priceNGN: true },
  });
}
