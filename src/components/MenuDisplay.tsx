// ─────────────────────────────────────────────────────────────────────────────
// USAGE EXAMPLES — How to fetch and display the menu on the frontend
// Copy the relevant snippet into your page/component
// ─────────────────────────────────────────────────────────────────────────────

// ─── 1. BASIC — Full menu, works like your original MENU constant ─────────────
//
// src/components/MenuDisplay.tsx
"use client";
import { useMenu } from "@/lib/useMenu";

export function MenuDisplay() {
  const { menu, categories, loading, error } = useMenu();

  if (loading) return <p>Loading menu…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {categories.map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          {menu[cat].map((item) => (
            <div key={item.id} style={{ opacity: item.isAvailable ? 1 : 0.4 }}>
              <span>{item.name}</span>
              {/* item.price is the same as your original MenuItem.price */}
              <span>₦{item.price.toLocaleString()}</span>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

// ─── 2. FILTER — Only one category (e.g. the menu page filter bar) ───────────
//
export function ProteinMenu() {
  const { menu, loading } = useMenu({ category: "protein" });
  if (loading) return null;
  return (
    <ul>
      {(menu["Protein"] ?? []).map((item) => (
        <li key={item.id}>
          {item.name} — ₦{item.price.toLocaleString()}
        </li>
      ))}
    </ul>
  );
}

// ─── 3. FEATURED — Landing page "Today's specials" ───────────────────────────
//
export function FeaturedDishes() {
  const { menu, categories, loading } = useMenu({ featured: true });
  if (loading) return null;
  return (
    <div className="grid grid-cols-3 gap-4">
      {categories
        .flatMap((cat) => menu[cat])
        .map((item) => (
          <div key={item.id} className="border rounded-xl p-4">
            <h3 className="font-bold">{item.name}</h3>
            <p>₦{item.price.toLocaleString()}</p>
          </div>
        ))}
    </div>
  );
}

// ─── 4. ORDER FORM — Pick items and build cart ────────────────────────────────
//
import { useState } from "react";

export function OrderForm() {
  const { menu, categories, loading } = useMenu();
  const [cart, setCart] = useState<Record<string, number>>({}); // { itemId: qty }

  const addToCart = (id: string) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  const total = categories
    .flatMap((cat) => menu[cat])
    .reduce((sum, item) => {
      return sum + item.price * (cart[item.id] ?? 0);
    }, 0);

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      {categories.map((cat) => (
        <section key={cat} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{cat}</h2>
          {menu[cat]
            .filter((i) => i.isAvailable)
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    ₦{item.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {cart[item.id] ? `+${cart[item.id]}` : "Add"}
                  </button>
                </div>
              </div>
            ))}
        </section>
      ))}
      {total > 0 && (
        <div className="sticky bottom-0 bg-white border-t p-4 mt-4">
          <strong>Total: ₦{total.toLocaleString()}</strong>
        </div>
      )}
    </div>
  );
}

// ─── 5. SERVER COMPONENT (no hook needed) ────────────────────────────────────
//
// src/app/menu/page.tsx  — no "use client" needed
import { getMenuFromDB } from "@/lib/menu.server";

export default async function MenuPage() {
  // Fetches directly from DB, no HTTP round-trip
  const { menu, categories } = await getMenuFromDB();
  return (
    <>
      {categories.map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          {menu[cat].map((item) => (
            <div key={item.id}>
              {item.name} — ₦{item.price.toLocaleString()}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

// ─── 6. DIRECT PRICE UPDATE from any component ────────────────────────────────
//
import { useMenuAdmin } from "@/lib/useMenu";

export function PriceEditor({ itemId }: { itemId: string }) {
  const { updatePrice } = useMenuAdmin();
  const [price, setPrice] = useState("");

  return (
    <div>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={() =>
          updatePrice.mutate({ id: itemId, priceNGN: Number(price) })
        }
        disabled={updatePrice.isPending}
      >
        {updatePrice.isPending ? "Saving…" : "Save Price"}
      </button>
    </div>
  );
}
