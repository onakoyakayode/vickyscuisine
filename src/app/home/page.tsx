// src/app/page.tsx
import Link from "next/link";

import type { Metadata } from "next";
import { getFeaturedMenuItems } from "@/lib/action";
import Image from "next/image";
import VickysCuisineSections from "@/components/VickyscuisineFeature";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vicky's Cuisine – Authentic Nigerian Food",
  description:
    "Authentic Nigerian cuisine crafted with love. Daily food packs, event catering and bulk orders for weddings, birthdays and more.",
};

const REVIEWS = [
  {
    initials: "AB",
    name: "Adaeze B.",
    location: "Lekki, Lagos",
    rating: 5,
    text: "The jollof rice is absolutely fire! Better than my mama's — don't tell her I said that 😂. Will order every week.",
    bg: "bg-[#085208]",
    textColor: "text-white",
  },
  {
    initials: "TF",
    name: "Tunde F.",
    location: "Ikeja, Lagos",
    rating: 5,
    text: "Catered my daughter's naming ceremony for 200 guests. Everyone kept asking who did the food. Vicky's Cuisine is the real deal!",
    bg: "bg-[#8B3A1A]",
    textColor: "text-white",
  },
  {
    initials: "KO",
    name: "Kemi O.",
    location: "VI, Lagos",
    rating: 4,
    text: "The egusi soup and pounded yam combo is my weakness. Delivery was on time and packaging was clean and professional.",
    bg: "bg-[#e9bd6b]",
    textColor: "text-[#1a1a1a]",
  },
];

const MARQUEE_ITEMS = [
  "Jollof Rice",
  "Egusi Soup",
  "Pounded Yam",
  "Pepper Soup",
  "Suya",
  "Moi Moi",
  "Dodo",
  "Banga Soup",
  "Ofada Rice",
  "Grilled Chicken",
  "Amala & Ewedu",
  "Ofe Onugbu",
];

const STATS = [
  { num: "500+", label: "Happy Customers" },
  { num: "50+", label: "Dishes on Menu" },
  { num: "100%", label: "Fresh & Authentic" },
];

export default async function HomePage() {
  const featured = (await getFeaturedMenuItems().catch(() => [])) as any;

  const grouped = featured.reduce((acc: any, item: any) => {
    const category =
      typeof item.category === "object"
        ? item.category?.name
        : (item.category ?? "Uncategorized");

    if (!acc[category]) acc[category] = [];
    acc[category].push(item);

    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#21c55e] font-sans overflow-x-hidden">
      <Navbar
        transparent
        active="/"
        buttonText="Order Now"
        buttonHref="/order"
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="min-h-screen grid md:grid-cols-2 pt-16 sm:pt-20 relative overflow-hidden font-sans">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(200,150,62,0.08)_0%,transparent_65%)] pointer-events-none" />

        {/* Left */}
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-16 py-12 sm:py-16 relative z-10 col-span-1">
          <div
            className="inline-flex items-center gap-2 bg-[#c7bfb0]/20 border border-[#c7bfb0]/25
                          px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-[#c7bfb0]
                          tracking-widest uppercase mb-6 sm:mb-8 w-fit shadow-lg"
          >
            ✦ Lagos · Nigeria · Est. 2025
          </div>

          <h1
            className="font-sans text-[clamp(2.5rem,8vw,6.5rem)] font-bold
               leading-[1.05] text-white mb-4 sm:mb-6"
          >
            Experience the{" "}
            <em className="text-[#e9bd6b] not-italic block">Taste</em> of
            Excellence.
          </h1>

          <p className="text-sm sm:text-base font-light text-white/90 leading-relaxed max-w-lg mb-8 sm:mb-10">
            From authentic Nigerian delicacies to refined continental dishes,
            Vicky&apos;s Cuisine delivers unforgettable meals for homes,
            offices, events, and every special occasion.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
            <Link
              href="/menu"
              className="bg-[#fff] text-[#085208] font-semibold px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base
                         hover:bg-transparent hover:border-white hover:border hover:text-white transition-all hover:-translate-y-0.5 text-center
                         "
            >
              Explore Our Menu
            </Link>
            <Link
              href="/events"
              className="bg-transparent text-white font-semibold px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base
                         border-2 border-white/20 hover:border-[[#085208] hover:text-[#085208] hover:bg-white transition-all
                         text-center"
            >
              Plan an Event
            </Link>
          </div>

          <div className="flex gap-6 sm:gap-10 pt-6 border-t border-white/10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-white">
                  {s.num}
                </div>
                <div className="text-[10px] sm:text-xs text-[#e9bd6b] mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – hero visual (hidden on mobile, shown on md+) */}
        <div className="hidden md:flex items-center justify-center px-8 py-16 relative col-span-1">
          <div className="relative w-full max-w-80 md:max-w-full flex items-center justify-center">
            <Image
              src="/img2.png"
              alt="Delicious Nigerian Food"
              width={600}
              height={600}
              className="animate-pulse relative z-10"
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <div className="bg-gray-200 overflow-hidden py-3 sm:py-4">
        <div className="flex gap-8 sm:gap-12 w-max animate-[marquee_28s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-sans italic text-[#085208] text-sm sm:text-base whitespace-nowrap
                         after:content-['✦'] after:ml-6 sm:after:ml-8 after:text-[#C8963E]/40 after:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED ─────────────────────────────────────────── */}
      <section className="bg-white">
        <h1 className="font-sans mb-8 sm:mb-12 text-[#085208] font-bold text-2xl sm:text-3xl px-5 sm:px-8 md:px-16 pt-10 sm:pt-16">
          Featured
        </h1>

        {Object.entries(grouped).map(([category, items]: any) => (
          <section
            key={category}
            className="px-5 sm:px-8 md:px-16 pb-10 sm:pb-16"
          >
            <h2 className="font-sans text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {items.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-28 sm:h-36 bg-gradient-to-br from-white to-sky-500/10 relative overflow-hidden flex items-center justify-center">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <span className="text-4xl sm:text-5xl">🍽️</span>
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="text-[9px] sm:text-[10px] font-semibold text-[#C8963E] uppercase mb-1 truncate">
                      {typeof item.category === "object"
                        ? item.category?.name
                        : item.category}
                    </div>
                    <h3 className="font-bold text-[#1A0F05] text-sm sm:text-base mb-1 line-clamp-2 leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-bold text-[#1A0F05] text-sm sm:text-base">
                      ₦{item.priceNGN.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="bg-white pb-10">
        <section
          className="mx-4 sm:mx-8 md:mx-16 py-14 sm:py-24 bg-gradient-to-br from-green-500 to-black rounded-[24px] sm:rounded-[32px]
                          px-6 sm:px-10 md:px-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-sans text-[clamp(1.75rem,5vw,3.5rem)] font-black text-white mb-4">
              Ready to <em className="not-italic text-[#e9bd6b]">Celebrate</em>{" "}
              with Good Food?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto">
              Whether it&apos;s a weekday lunch or a 500-person wedding,
              Vicky&apos;s Cuisine has you covered.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                href="/events"
                className="bg-[#e9bd6b] text-white font-semibold px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base
                           hover:bg-[#E8B96A] transition-all hover:-translate-y-0.5"
              >
                Plan a Bulk Order
              </Link>
              <Link
                href="/menu"
                className="bg-transparent text-white font-medium px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base
                           border-2 border-white/55 hover:border-white hover:text-[#085208]
                           hover:bg-white transition-all"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── SOCIAL LINKS ─────────────────────────────────── */}
      <div className="bg-white py-6 px-5 sm:px-8 md:px-16 border-b border-white/5">
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#085208] mb-4">
          Find us on
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            {
              href: "https://instagram.com/vickyzcuisine",
              label: "Instagram",
              sub: "@vickyzcuisine",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig" x1="0" y1="24" x2="24" y2="0">
                      <stop stopColor="#f09433" />
                      <stop offset="0.5" stopColor="#dc2743" />
                      <stop offset="1" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#ig)" />
                  <rect
                    x="6"
                    y="6"
                    width="12"
                    height="12"
                    rx="3"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="15.5" cy="8.5" r="0.8" fill="white" />
                </svg>
              ),
            },
            {
              href: "https://wa.me/2348XXXXXXXXX",
              label: "WhatsApp",
              sub: "Order directly",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#25D366" />
                  <path
                    d="M17.5 14.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.3.2-.6.1s-1.2-.4-2.2-1.4c-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.3-.1-.5L9.6 8.2c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.3.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              href: "https://facebook.com/vickyzcuisine",
              label: "Facebook",
              sub: "Vicky's Cuisine",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="#1877F2" />
                  <path
                    d="M16 12h-2.5v7h-3v-7H8.5V9.5H10.5V8c0-2 1.2-3 3-3 .9 0 1.7.1 1.7.1V7h-1c-.9 0-1.2.6-1.2 1.2V9.5H16L16 12z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              href: "https://tiktok.com/@vickyzcuisine",
              label: "TikTok",
              sub: "Kitchen reels",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="#000" />
                  <path
                    d="M16 6.8c-.9-.6-1.5-1.6-1.6-2.8h-2v10.3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .6.1V10c-.2 0-.4-.1-.6-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V8.6c.7.5 1.6.8 2.5.8V7.1c-.3 0-.6-.1-.9-.3z"
                    fill="white"
                  />
                </svg>
              ),
            },
          ].map(({ href, label, sub, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 hover:bg-[#085208] border border-gray-300 rounded-xl px-4 py-2.5 transition-all"
            >
              {icon}

              <span className="text-sm font-semibold text-gray-700 group-hover:text-white">
                {label}
              </span>

              <span className="text-xs text-gray-500 hidden sm:inline group-hover:text-white/80">
                {sub}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-white px-5 sm:px-8 md:px-16 py-14 sm:py-20">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#085208] mb-2">
          How it works
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-10 sm:mb-14">
          From our kitchen to your table
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              num: "01",
              emoji: "📋",
              title: "Browse & choose",
              desc: "Pick your meal from our full menu",
            },
            {
              num: "02",
              emoji: "📞",
              title: "Place your order",
              desc: "Via WhatsApp, call or online checkout",
            },
            {
              num: "03",
              emoji: "👩‍🍳",
              title: "We cook fresh",
              desc: "Made to order with authentic ingredients",
            },
            {
              num: "04",
              emoji: "🚀",
              title: "Fast delivery",
              desc: "Hot & fresh to your door in Lagos",
              gold: true,
            },
          ].map(({ num, emoji, title, desc, gold }) => (
            <div key={num} className="text-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 ${
                  gold
                    ? "bg-[#fff8ed] border-[#e9bd6b]"
                    : "bg-[#f0f9f3] border-[#085208]"
                }`}
              >
                {emoji}
              </div>
              <div
                className={`text-xs font-bold mb-1 tracking-wider ${gold ? "text-[#e9bd6b]" : "text-[#085208]"}`}
              >
                {num}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-1">
                {title}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ── TESTIMONIALS ─────────────────────────────────── */}

      {/* In your JSX: */}
      <section className="bg-gradient-to-r from-black to-[#21c55e] px-5 sm:px-8 md:px-16 py-14 sm:py-20">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#e9bd6b] mb-2">
          What customers say
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Real reviews, real love ❤️
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map(
            ({ initials, name, location, rating, text, bg, textColor }) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < rating ? "text-[#e9bd6b]" : "text-white/20"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed flex-1">
                  {text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-xs font-bold ${textColor ?? "text-white"}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {name}
                    </div>
                    <div className="text-[11px] text-white/40">{location}</div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="mt-8 text-center">
          <span className="inline-block bg-[#e9bd6b]/15 border border-[#e9bd6b]/30 rounded-full px-5 py-2 text-xs text-[#e9bd6b] font-medium">
            500+ happy customers · 4.9 ★ average rating
          </span>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
