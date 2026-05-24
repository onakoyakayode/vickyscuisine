// src/types/menu.ts

export interface MenuItemResponse {
  id: string;
  name: string;
  slug: string;
  priceNGN: number;
  description: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
}

export interface MenuCategoryResponse {
  id: string;
  name: string;
  slug: string;
  items: MenuItemResponse[];
}

/** Shape returned by GET /api/menu */
export interface MenuApiResponse {
  success: true;
  updatedAt: string; // ISO timestamp of the most recently changed item
  categories: MenuCategoryResponse[];
}

/** Shape returned on error */
export interface MenuApiError {
  success: false;
  error: string;
}

// -----------------------------------------------------------------
// Legacy-compatible shape — matches your existing MENU constant so
// you can drop this in without changing frontend code that already
// uses MenuCategory / MenuItem interfaces.
// -----------------------------------------------------------------

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  price: number; // alias for priceNGN
  description: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
}

export interface MenuCategory {
  [category: string]: MenuItem[];
}

/** Converts the API response into the legacy MENU constant shape */
export function toMenuConstant(response: MenuApiResponse): MenuCategory {
  return response.categories.reduce<MenuCategory>((acc, cat) => {
    acc[cat.name] = cat.items.map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.priceNGN,
      description: item.description,
      isAvailable: item.isAvailable,
      isFeatured: item.isFeatured,
    }));
    return acc;
  }, {});
}

export const MENU_CATEGORIES_ORDER = [
  "Protein",
  "Main Dish",
  "Swallow",
  "Soups",
  "Accompaniment",
  "Snacks",
  "Sauce",
] as const;
