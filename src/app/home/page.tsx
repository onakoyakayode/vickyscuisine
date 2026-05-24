// src/app/page.tsx
import Link from "next/link";

import type { Metadata } from "next";
import { getFeaturedMenuItems } from "@/lib/action";
import Image from "next/image";
import VickysCuisineSections from "@/components/VickyscuisineFeature";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vicky's Cuisine – Authentic Nigerian Food",
  description:
    "Authentic Nigerian cuisine crafted with love. Daily food packs, event catering and bulk orders for weddings, birthdays and more.",
};

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

  console.log(featured, "featured");

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#21c55e] font-sans overflow-x-hidden">
      {/* ── NAV ────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between
                      px-6 md:px-16 py-4 bg-transparent backdrop-blur-md
                      border-b border-[#C8963E]/20"
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
            { label: "About", href: "/about" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium font-sans text-[#fff] hover:text-[#C8963E] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/order"
          className="bg-white text-[#085208] text-sm font-sans font-semibold px-5 py-2.5
                     rounded-lg hover:bg-transparent hover:border hover:border-white hover:text-white transition-colors shadow"
        >
          Order Now
        </Link>
      </nav>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="min-h-screen grid md:grid-cols-2 pt-20 relative overflow-hidden font-sans">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(200,150,62,0.08)_0%,transparent_65%)] pointer-events-none" />

        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-16 relative z-10 col-span-1">
          <div
            className="inline-flex items-center gap-2 bg-[#c7bfb0]/20 border border-[#c7bfb0]/25
                          px-4 py-1.5 rounded-full text-xs font-semibold text-[#c7bfb0]
                          tracking-widest uppercase mb-8 w-fit shadow-lg"
          >
            ✦ Lagos · Nigeria · Est. 2025
          </div>
          <h1
            className="font-sans text-[clamp(3rem,5.5vw,6.5rem)] font-bold
               leading-[1.05] text-[#fff] mb-6"
          >
            Experience the{" "}
            <em className="text-[#e9bd6b] not-italic block">Taste</em> of
            Excellence.
          </h1>

          <p className="text-base font-light text-[#fff] leading-relaxed lg:max-w-lg mb-10">
            From authentic Nigerian delicacies to refined continental dishes,
            Vicky&apos;s Cuisine delivers unforgettable meals for homes,
            offices, events, and every special occasion.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/menu"
              className="bg-[#e9bd6b] text-white font-semibold px-8 py-4 rounded-full
                         hover:bg-[#8B3A1A] transition-all hover:-translate-y-0.5
                         hover:shadow-[0_8px_24px_rgba(200,150,62,0.4)]"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/events"
              className="bg-transparent text-[#fff] font-medium px-7 py-4 rounded-full
                         border-2 border-[#fff]/20 hover:border-[#e9bd6b]
                         hover:text-[#e9bd6b] transition-all"
            >
              Plan an Event
            </Link>
          </div>

          <div className="flex gap-10 pt-6 border-t border-[#1A0F05]/08">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-3xl font-bold text-[#fff]">
                  {s.num}
                </div>
                <div className="text-xs text-[#e9bd6b] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – hero visual */}
        <div className="hidden md:flex items-center justify-center px-8 py-16 relative col-span-1 font-sans">
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
      <div className="bg-[#fff] overflow-hidden py-4">
        <div className="flex gap-12 w-max animate-[marquee_28s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-playfair italic text-[#085208] text-base whitespace-nowrap
                         after:content-['✦'] after:ml-8 after:text-[#C8963E]/40 after:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <h1 className="font-sans mb-12 text-white font-bold text-3xl px-6 md:px-16 pt-16">
        Featured
      </h1>
      {Object.entries(grouped).map(([category, items]: any) => (
        <section key={category} className="px-6 md:px-16 pb-16">
          <h2 className="font-sans text-2xl font-semibold underline text-[#fff] mb-6">
            {category}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#C8963E]/10"
              >
                <div className="h-36 bg-gradient-to-br from-[#f5e6cf] to-[#e8c88a] relative overflow-hidden flex items-center justify-center">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <span className="text-5xl">🍽️</span>
                  )}
                </div>

                <div className="p-4">
                  <div className="text-[10px] font-semibold text-[#C8963E] uppercase mb-1">
                    {typeof item.category === "object"
                      ? item.category?.name
                      : item.category}
                  </div>

                  <h3 className="font-bold text-[#1A0F05] text-base mb-1">
                    {item.name}
                  </h3>

                  <span className="font-bold text-[#1A0F05]">
                    ₦{item.priceNGN.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="mx-4 md:mx-16 mb-24 bg-[#fff] rounded-[32px] px-8 md:px-16
                          py-16 text-center relative overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,150,62,0.22)_0%,transparent_60%)] pointer-events-none" /> */}
        <div className="relative z-10">
          <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-black text-[#085208] mb-4">
            Ready to <em className="not-italic text-[#e9bd6b]">Celebrate</em>{" "}
            with Good Food?
          </h2>
          <p className="text-[#085208] text-base mb-10 max-w-lg mx-auto">
            Whether it&apos;s a weekday lunch or a 500-person wedding,
            Vicky&apos;s Cuisine has you covered.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/events"
              className="bg-[#e9bd6b] text-white font-semibold px-8 py-4 rounded-full
                         hover:bg-[#E8B96A] transition-all hover:-translate-y-0.5"
            >
              Plan a Bulk Order
            </Link>
            <Link
              href="/menu"
              className="bg-transparent text-[#085208]/80 font-medium px-7 py-4 rounded-full
                         border-2 border-[#085208]/55 hover:border-[#085208] hover:text-white
                         hover:bg-[#085208] transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}

      <Footer />
    </div>
  );
}
