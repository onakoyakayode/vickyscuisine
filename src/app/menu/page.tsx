// src/app/menu/page.tsx
import Link from "next/link";

import type { Metadata } from "next";
import { getMenuItems } from "@/lib/action";
import Image from "next/image";
import Footer from "@/components/Footer";

type MenuCategoryKey =
  | "Protein"
  | "Main Dish"
  | "Swallow"
  | "Soups"
  | "Accompaniment"
  | "Snacks"
  | "Sauce";

export const metadata: Metadata = {
  title: "Menu – Vicky's Cuisine",
  description:
    "Browse our full menu of authentic Nigerian dishes — rice, soups, swallows, proteins, small chops and drinks.",
};

const CATEGORY_META: Record<
  MenuCategoryKey,
  { label: string; icon: string; desc: string; imageUrl?: string }
> = {
  Protein: {
    label: "Protein",
    icon: "🍗",
    desc: "Chicken, fish, beef, turkey & more",
  },

  "Main Dish": {
    label: "Main Dish",
    icon: "🍚",
    desc: "Rice, pasta, yam and other dishes",
  },

  Swallow: {
    label: "Swallow",
    icon: "🫕",
    desc: "Poundo, amala, eba, semo and more",
  },

  Soups: {
    label: "Soups",
    icon: "🍲",
    desc: "Egusi, ogbono, efo riro and more",
  },

  Accompaniment: {
    label: "Accompaniment",
    icon: "🥗",
    desc: "Plantain, moi moi, salad and sides",
  },

  Snacks: {
    label: "Snacks",
    icon: "🥟",
    desc: "Small chops and pastries",
  },

  Sauce: {
    label: "Sauce",
    icon: "🌶️",
    desc: "Special sauces and stews",
  },
};

const CATEGORY_ORDER: MenuCategoryKey[] = [
  "Protein",
  "Main Dish",
  "Swallow",
  "Soups",
  "Accompaniment",
  "Snacks",
  "Sauce",
];

export default async function MenuPage() {
  const items = await getMenuItems().catch(() => []);

  // Group by category
  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof items>>(
    (acc, cat) => {
      const filtered = items.filter((i) => i.category.name === cat);
      if (filtered.length > 0) acc[cat] = filtered;
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen bg-[#fff] overflow-x-hidden font-sans">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between
                      px-6 md:px-16 py-4 bg-[#FDF9F4]/92 backdrop-blur-md
                      border-b border-[#C8963E]/10"
      >
        <Link
          href="/"
          className="font-sans text-2xl font-black text-[#1A0F05] tracking-tight"
        >
          <Image
            src="/logo.jpg"
            alt="Vicky's Cuisine Logo"
            width={55}
            height={32}
            className="inline-block mr-2 drop-shadow-lg rounded-full"
          />
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Events & Bulk", href: "/events" },
            { label: "Food Packs", href: "/order" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold transition-colors
                  ${
                    l.href === "/menu"
                      ? "text-[#C8963E] border-b-2 border-[#C8963E] pb-0.5"
                      : "text-[#fff] hover:text-[#C8963E]"
                  }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/order"
          className="bg-white text-[#21c55e] text-sm font-sans font-semibold px-5 py-2.5
                     rounded-lg hover:bg-transparent hover:border hover:border-white hover:text-white transition-colors shadow"
        >
          Order Now
        </Link>
      </nav>

      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-black to-[#21c55e] pt-28 pb-16 px-6 text-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,150,62,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 bg-[#C8963E]/15 border border-[#C8963E]/35
                          px-4 py-1.5 rounded-full text-xs font-semibold text-[#C8963E]
                          tracking-widest uppercase mb-5"
          >
            ✦ Full Menu
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.08] mb-4 font-sans">
            Made Fresh,{" "}
            <em className="not-italic text-[#C8963E]">Served with Soul.</em>
          </h1>
          <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed">
            Every dish is prepared fresh daily using traditional recipes and
            quality ingredients. No shortcuts, no compromises.
          </p>

          {/* Category quick links */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {Object.entries(grouped).map(([cat]) => {
              const meta = CATEGORY_META[cat as MenuCategoryKey];
              return (
                <a
                  key={cat}
                  href={`#cat-${cat}`}
                  className="bg-white/7 border border-white/10 text-white/80 text-xs
             px-4 py-1.5 rounded-full hover:bg-[#C8963E]/20
             hover:border-[#C8963E]/40 hover:text-[#C8963E] transition-all
             flex items-center gap-2"
                >
                  {CATEGORY_META[cat as MenuCategoryKey]?.imageUrl && (
                    <img
                      src={CATEGORY_META[cat as MenuCategoryKey].imageUrl}
                      className="w-5 h-5 rounded-full object-cover"
                      alt={cat}
                    />
                  )}
                  {meta.icon} {meta.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NOTICE BANNER ───────────────────────────────────── */}
      <div className="bg-[#ddd]/50 border-y border-[#C8963E]/20 px-6 py-3 text-center">
        <p className="text-sm text-[#21c55e]">
          🕐 <strong className="text-[#000]">Order by 12pm</strong> for same-day
          delivery · 📦 Food packs available daily · 🎉{" "}
          <Link
            href="/events"
            className="text-[#C8963E] font-semibold hover:underline"
          >
            Planning an event?
          </Link>
        </p>
      </div>

      {/* ── MENU SECTIONS ───────────────────────────────────── */}
      <main className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        {Object.entries(grouped).map(([cat, catItems]) => {
          const meta = CATEGORY_META[cat as MenuCategoryKey];
          return (
            <section key={cat} id={`cat-${cat}`} className="mb-16 scroll-mt-24">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#C8963E]/15">
                <span className="text-3xl">{meta.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#065109] font-sans">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-[#6B5540] mt-0.5">{meta.desc}</p>
                </div>
                <span
                  className="ml-auto text-xs font-semibold text-[#C8963E] bg-[#C8963E]/10
                                  px-3 py-1 rounded-full"
                >
                  {catItems.length} item{catItems.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Dish grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 lg:gap-6">
                {catItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#C8963E]/10 shadow-lg
                               hover:shadow-[0_12px_40px_rgba(26,15,5,0.08)] transition-all
                               hover:-translate-y-0.5 group flex flex-col"
                    >
                      {/* Image placeholder */}
                      <div className="h-32 w-full relative overflow-hidden bg-[#f5e6cf]">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xl">
                            <span>{meta.icon}</span>
                          </div>
                        )}

                        {item.isFeatured && (
                          <span className="absolute top-2 right-2 bg-[#C8963E] text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide">
                            ★ POPULAR
                          </span>
                        )}

                        {item.isSpicy && (
                          <span className="absolute top-2 left-2 text-sm">
                            🌶️
                          </span>
                        )}
                      </div>

                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-[#1A0F05] text-base mb-1 leading-tight">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-xs text-[#6B5540] leading-relaxed mb-3 line-clamp-2 flex-1">
                            {item.description}
                          </p>
                        )}

                        {/* Tags */}
                        {item.tags.length > 0 && (
                          <div className="flex gap-1 flex-wrap mb-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-semibold uppercase tracking-wide
                                         bg-[#C8963E]/08 text-[#C8963E] px-2 py-0.5 rounded-full border border-[#C8963E]/15"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div
                          className="flex items-center justify-between mt-auto pt-3 font-sans
                                      border-t border-[#1A0F05]/06"
                        >
                          <span className="font-bold text-[#1A0F05] text-base">
                            ₦{item.priceNGN.toLocaleString()}
                          </span>
                          <Link
                            href="/order"
                            className="text-xs bg-[#0a5109] text-white px-3.5 py-1.5 rounded-md opacity-90
                                     hover:opacity-100 transition-colors font-medium"
                          >
                            Add to Order
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Empty state */}
        {Object.keys(grouped).length === 0 && (
          <div className="text-center py-24">
            <span className="text-6xl block mb-4">🍽️</span>
            <h3 className="text-2xl font-bold text-[#085208] mb-2">
              Menu Coming Soon
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Our menu is being updated. Check back shortly or contact us
              directly.
            </p>
            <Link
              href="/events"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold
                         text-sm hover:bg-green-400 transition-colors"
            >
              Place a Custom Order
            </Link>
          </div>
        )}
      </main>

      {/* ── CTA STRIP ───────────────────────────────────────── */}
      <section
        className="mx-4 md:mx-16 mb-16 bg-[#085208] rounded-[24px] px-8 md:px-14
                          py-12 flex flex-col md:flex-row items-center justify-between gap-6
                          relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,150,62,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Feeding a large group?
          </h3>
          <p className="text-white/55 text-sm">
            Get a custom quote for weddings, events and bulk orders.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 relative z-10">
          <Link
            href="/events"
            className="bg-green-400 text-white font-semibold px-6 py-3 rounded-full
                       hover:bg-white hover:text-green-400 transition-all text-sm whitespace-nowrap"
          >
            Plan an Event →
          </Link>
          <Link
            href="/order"
            className="bg-white/08 border border-white text-white font-medium
                       px-6 py-3 rounded-full hover:border-green-400 hover:text-green-400
                       transition-all text-sm whitespace-nowrap"
          >
            Order Food Pack
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
