// // src/lib/useMenu.ts
// // Drop-in React hook — works in any Client Component
// // Usage:  const { menu, categories, loading, error, refetch } = useMenu();

// "use client";

// import { useState, useEffect, useCallback } from "react";
// import type { MenuApiResponse, MenuCategory, MenuItem } from "@/types/menu";
// import { toMenuConstant } from "@/types/menu";

// type UseMenuReturn = {
//   /** Full API response */
//   data: MenuApiResponse | null;
//   /** Legacy MENU constant shape — drop-in replacement for your existing MENU object */
//   menu: MenuCategory;
//   /** Just the category names, ordered */
//   categories: string[];
//   loading: boolean;
//   error: string | null;
//   /** Call to re-fetch after a price update */
//   refetch: () => void;
// };

// export function useMenu(options?: {
//   category?: string; // filter by slug e.g. "protein"
//   featured?: boolean; // only featured items
// }): UseMenuReturn {
//   const [data, setData] = useState<MenuApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [tick, setTick] = useState(0);

//   const refetch = useCallback(() => setTick((t) => t + 1), []);

//   useEffect(() => {
//     let cancelled = false;
//     setLoading(true);
//     setError(null);

//     const params = new URLSearchParams();
//     if (options?.category) params.set("category", options.category);
//     if (options?.featured) params.set("featured", "true");

//     const url = `/api/menu${params.toString() ? `?${params}` : ""}`;

//     fetch(url, { next: { revalidate: 60 } } as RequestInit)
//       .then((r) => r.json())
//       .then((json) => {
//         if (cancelled) return;
//         if (json.success) {
//           setData(json as MenuApiResponse);
//         } else {
//           setError(json.error ?? "Unknown error");
//         }
//       })
//       .catch((e) => {
//         if (!cancelled) setError(e.message ?? "Network error");
//       })
//       .finally(() => {
//         if (!cancelled) setLoading(false);
//       });

//     return () => {
//       cancelled = true;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tick, options?.category, options?.featured]);

//   const menu = data ? toMenuConstant(data) : {};
//   const categories = data ? data.categories.map((c) => c.name) : [];

//   return { data, menu, categories, loading, error, refetch };
// }

// // ─── Helper: update a single item price (admin use) ──────────
// export async function updateItemPrice(
//   id: string,
//   priceNGN: number,
// ): Promise<{ success: boolean; error?: string }> {
//   try {
//     const res = await fetch(`/api/menu/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ priceNGN }),
//     });
//     return res.json();
//   } catch (e: any) {
//     return { success: false, error: e.message };
//   }
// }

// // ─── Helper: toggle item availability ────────────────────────
// export async function toggleItemAvailability(
//   id: string,
//   isAvailable: boolean,
// ): Promise<{ success: boolean; error?: string }> {
//   try {
//     const res = await fetch(`/api/menu/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ isAvailable }),
//     });
//     return res.json();
//   } catch (e: any) {
//     return { success: false, error: e.message };
//   }
// }

// src/lib/useMenu.ts
// ─────────────────────────────────────────────────────────────
// Drop-in hook for any Client Component.
// Returns the same shape as your original MENU constant so
// existing code keeps working with zero changes.
// ─────────────────────────────────────────────────────────────

"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// ── Types (matches your existing interfaces) ──────────────────
export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  price: number; // alias for priceNGN — same as your original shape
  priceNGN: number;
  description: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
}

export interface MenuCategory {
  [category: string]: MenuItem[];
}

type ApiItem = {
  id: string;
  name: string;
  slug: string;
  priceNGN: number;
  description: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
};
type ApiCategory = { id: string; name: string; slug: string; items: ApiItem[] };
type ApiResponse = {
  success: true;
  categories: ApiCategory[];
  updatedAt: string;
};

// ── Fetch fn (reusable outside hook too) ─────────────────────
export async function fetchMenu(opts?: {
  category?: string;
  featured?: boolean;
}): Promise<ApiResponse> {
  const params = new URLSearchParams();
  if (opts?.category) params.set("category", opts.category);
  if (opts?.featured) params.set("featured", "true");
  const res = await fetch(`/api/menu${params.size ? `?${params}` : ""}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.error ?? "Failed to load menu");
  return json;
}

// ── Convert API response → legacy MENU constant shape ─────────
function toMenuConstant(data: ApiResponse): MenuCategory {
  return data.categories.reduce<MenuCategory>((acc, cat) => {
    acc[cat.name] = cat.items.map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.priceNGN, // ← matches your original MenuItem.price
      priceNGN: item.priceNGN,
      description: item.description,
      isAvailable: item.isAvailable,
      isFeatured: item.isFeatured,
    }));
    return acc;
  }, {});
}

// ── Main hook ─────────────────────────────────────────────────
export function useMenu(opts?: { category?: string; featured?: boolean }) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["menu", opts?.category, opts?.featured],
    queryFn: () => fetchMenu(opts),
    staleTime: 60_000, // treat data as fresh for 60s
    refetchInterval: 5 * 60_000, // background refresh every 5 min
  });

  const menu: MenuCategory = data ? toMenuConstant(data) : {};
  const categories: string[] = data?.categories.map((c) => c.name) ?? [];
  const updatedAt: string | null = data?.updatedAt ?? null;

  return {
    /** Legacy MENU shape — use exactly like your old MENU constant */
    menu,
    /** Ordered list of category names */
    categories,
    /** ISO string of the last price/availability change */
    updatedAt,
    /** Raw API response if you need IDs or slugs */
    raw: data ?? null,
    loading: isLoading,
    error: isError ? (error as Error).message : null,
    refetch,
  };
}

// ── Admin helpers (price / availability updates) ──────────────
export function useMenuAdmin() {
  const qc = useQueryClient();

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["menu"] });
    qc.invalidateQueries({ queryKey: ["menu-admin"] });
  };

  const updatePrice = useMutation({
    mutationFn: async ({ id, priceNGN }: { id: string; priceNGN: number }) => {
      const res = await fetch(`/api/menu/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceNGN }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json;
    },
    onSuccess: invalidate,
  });

  const toggleAvailability = useMutation({
    mutationFn: async ({
      id,
      isAvailable,
    }: {
      id: string;
      isAvailable: boolean;
    }) => {
      const res = await fetch(`/api/menu/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isAvailable }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json;
    },
    onSuccess: invalidate,
  });

  return { updatePrice, toggleAvailability };
}
