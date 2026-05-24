"use client";

import React from "react";
import Link from "next/link";

// ── TYPES ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  dark: boolean;
  rating: number;
}

interface Dish {
  id: number;
  name: string;
  category: string;
  description: string;
  priceNGN: number;
  unit: string;
  emoji: string;
}

// ── DATA ────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    icon: "🍛",
    title: "Authentic Nigerian Cuisine",
    desc: "Rich, bold flavours rooted in tradition. Every dish tells a story of culture and care.",
    cta: "Explore Menu",
    href: "/menu",
    dark: false,
    rating: 5,
  },
  {
    icon: "🎉",
    title: "Bulk & Event Orders",
    desc: "From intimate dinners to 500-person weddings — we scale perfectly to your celebration.",
    cta: "Plan an Event",
    href: "/events",
    dark: true,
    rating: 5,
  },
  {
    icon: "🚴",
    title: "Fast, Fresh Delivery",
    desc: "Hot meals to your door across Lagos. Order by noon for same-day delivery.",
    cta: "Order Now",
    href: "/order",
    dark: false,
    rating: 4,
  },
];

// Replace with your real featured items or pass as a prop
const FEATURED_DISHES: Dish[] = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    category: "RICE",
    description:
      "Smoky party jollof with perfectly grilled chicken and fried plantain on the side.",
    priceNGN: 4500,
    unit: "serving",
    emoji: "🍚",
  },
  {
    id: 2,
    name: "Egusi Soup & Pounded Yam",
    category: "SOUP",
    description:
      "Thick, hearty egusi soup with assorted meat and fresh stockfish. Comfort in a bowl.",
    priceNGN: 5800,
    unit: "serving",
    emoji: "🍲",
  },
  {
    id: 3,
    name: "Suya Platter",
    category: "GRILL",
    description:
      "Spiced, smoky skewers of prime beef with sliced onions and fresh tomatoes.",
    priceNGN: 3200,
    unit: "platter",
    emoji: "🍗",
  },
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function StarRating({
  count = 5,
  filled = 5,
}: {
  count?: number;
  filled?: number;
}) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`text-[11px] ${
            i < filled ? "text-[#E8B96A]" : "text-[#E0D5C5]"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold text-[#C8963E] tracking-[3px] uppercase mb-4">
      <span className="w-7 h-px bg-[#C8963E] block" />
      {children}
    </div>
  );
}

// ── FEATURE CARD ─────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, desc, cta, href, dark, rating }: Feature) {
  return (
    <div
      className={`
        relative rounded-[22px] p-7 overflow-hidden cursor-pointer
        transition-all duration-300 group
        hover:-translate-y-[5px]
        ${
          dark
            ? "bg-[#1A0F05] border-[1.5px] border-[#1A0F05]"
            : "bg-white border-[1.5px] border-[#C8963E]/12"
        }
        hover:shadow-[0_24px_60px_rgba(26,15,5,0.11)]
      `}
    >
      {/* Radial shine on hover */}
      <span
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
          ${
            dark
              ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,185,106,0.08)_0%,transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,150,62,0.07)_0%,transparent_70%)]"
          }
        `}
      />

      {/* Top-right decorative glow */}
      <span
        className={`
          absolute -top-14 -right-14 w-36 h-36 rounded-full pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${
            dark
              ? "bg-[radial-gradient(circle,rgba(232,185,106,0.08)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle,rgba(200,150,62,0.06)_0%,transparent_70%)]"
          }
        `}
      />

      {/* Icon container */}
      <div
        className={`
          w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl mb-5
          ${
            dark
              ? "bg-[rgba(200,150,62,0.15)]"
              : "bg-gradient-to-br from-[#FDF3E3] to-[#F5E0B8] shadow-[0_4px_12px_rgba(200,150,62,0.15)]"
          }
        `}
      >
        {icon}
      </div>

      <StarRating filled={rating} />

      <h3
        className={`font-playfair text-[17px] font-bold mb-2.5 relative z-10 ${
          dark ? "text-[#E8B96A]" : "text-[#1A0F05]"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-[12.5px] leading-[1.75] mb-5 relative z-10 ${
          dark ? "text-white/50" : "text-[#7B6252]"
        }`}
      >
        {desc}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[#C8963E] text-[12px] font-semibold
                   relative z-10 transition-all duration-200 group-hover:gap-3"
      >
        {cta} →
      </Link>
    </div>
  );
}

// ── DISH CARD ────────────────────────────────────────────────────────────────

function DishCard({
  name,
  category,
  description,
  priceNGN,
  unit,
  emoji,
}: Omit<Dish, "id">) {
  return (
    <div
      className="bg-white rounded-[20px] overflow-hidden border-[1.5px] border-[#C8963E]/10
                 transition-all duration-300 hover:-translate-y-1 cursor-pointer group
                 hover:shadow-[0_20px_50px_rgba(26,15,5,0.10)]"
    >
      {/* Image area */}
      <div className="h-[130px] relative overflow-hidden bg-gradient-to-br from-[#F8EDDA] via-[#EDD49A] to-[#E2C07A]">
        {/* Badge */}
        <span
          className="absolute top-2.5 left-2.5 z-10 text-[9px] font-bold tracking-[1.5px]
                     uppercase text-[#C8963E] bg-white/88 backdrop-blur-sm
                     px-2.5 py-1 rounded-full shadow-[0_2px_8px_rgba(26,15,5,0.08)]"
        >
          {category}
        </span>

        {/* Emoji */}
        <div className="absolute inset-0 flex items-center justify-center text-[48px] drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {emoji}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-playfair font-bold text-[15px] text-[#1A0F05] mb-1.5">
          {name}
        </h3>
        <p className="text-[11.5px] text-[#7B6252] leading-[1.65] mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-[15px] text-[#1A0F05]">
              ₦{priceNGN.toLocaleString()}
            </span>
            <span className="text-[11px] text-[#9B8272] ml-1 font-normal">
              / {unit}
            </span>
          </div>
          <Link
            href="/order"
            className="text-[11px] font-semibold bg-[#1A0F05] text-white
                       px-3.5 py-2 rounded-full transition-all duration-200
                       hover:bg-[#C8963E] hover:scale-105 active:scale-95"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function VickysCuisineSections({
  featured = FEATURED_DISHES,
}: {
  featured?: Dish[];
}) {
  return (
    <div className="bg-[#FDF8F2]">
      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <SectionLabel>What We Offer</SectionLabel>

        <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,3rem)] font-black text-[#1A0F05] leading-tight mb-10">
          Everything You Need,
          <br />
          Served with Heart
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* ── FEATURED DISHES ──────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="px-6 md:px-16 pb-16 md:pb-24">
          <div className="flex items-end justify-between mb-6">
            <div>
              <SectionLabel>Featured Dishes</SectionLabel>
              <h2 className="font-playfair text-[clamp(1.8rem,3vw,2.5rem)] font-black text-[#1A0F05]">
                Fresh Today
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-[12.5px] font-semibold text-[#C8963E] hover:text-[#8B3A1A] transition-colors"
            >
              Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((item) => (
              <DishCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="mx-4 md:mx-16 mb-16 md:mb-24">
        <div
          className="bg-[#1A0F05] rounded-[28px] px-8 md:px-16 py-14 md:py-16
                     text-center relative overflow-hidden"
        >
          {/* Top radial glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%]
                          bg-[radial-gradient(ellipse,rgba(200,150,62,0.18)_0%,transparent_65%)]
                          pointer-events-none"
          />

          {/* Bottom-right glow */}
          <div
            className="absolute -bottom-20 -right-10 w-[300px] h-[300px] rounded-full
                          bg-[radial-gradient(circle,rgba(232,185,106,0.07)_0%,transparent_70%)]
                          pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-black text-white leading-tight mb-4">
              Ready to <em className="not-italic text-[#E8B96A]">Celebrate</em>
              <br />
              with Good Food?
            </h2>

            <p className="text-white/50 text-[14px] leading-[1.75] mb-8 max-w-sm mx-auto">
              Whether it&apos;s a weekday lunch or a 500-person wedding,
              Vicky&apos;s Cuisine has you covered.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/events"
                className="bg-[#C8963E] text-white font-semibold text-[13px]
                           px-7 py-3.5 rounded-full transition-all duration-200
                           hover:bg-[#E8B96A] hover:-translate-y-0.5
                           shadow-[0_6px_24px_rgba(200,150,62,0.35)]
                           hover:shadow-[0_10px_32px_rgba(200,150,62,0.45)]"
              >
                Plan a Bulk Order
              </Link>

              <Link
                href="/menu"
                className="bg-transparent text-white/75 font-medium text-[13px]
                           px-6 py-3.5 rounded-full border-[1.5px] border-white/14
                           transition-all duration-200
                           hover:border-[#C8963E] hover:text-[#E8B96A]"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="text-center px-6 py-6 border-t border-[#1A0F05]/08 text-[12.5px] text-[#9B8272]">
        © {new Date().getFullYear()}{" "}
        <strong className="text-[#C8963E]">Vicky&apos;s Cuisine</strong>. Lagos,
        Nigeria.
      </footer>
    </div>
  );
}
