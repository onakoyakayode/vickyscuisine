// src/app/events/page.tsx
"use client";

import { EventType, ServiceType, VenueType } from "@/generated/prisma";
import { submitEventOrder } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

// ─── Types ───────────────────────────────────────────────────
type FormState = {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientWhatsApp: string;
  eventType: EventType | "";
  eventDate: string;
  eventTime: string;
  guestCount: string;
  venueType: VenueType | "";
  venueLGA: string;
  venueAddress: string;
  serviceType: ServiceType | "";
  menuItemIds: string[];
  dietaryNotes: string;
  specialRequests: string;
};

const EVENT_TYPES: {
  value: EventType;
  label: string;
  icon: string;
  minGuests: string;
}[] = [
  {
    value: "WEDDING",
    label: "Wedding",
    icon: "💍",
    minGuests: "Min. 100 guests",
  },
  {
    value: "BIRTHDAY",
    label: "Birthday Party",
    icon: "🎂",
    minGuests: "Min. 50 guests",
  },
  {
    value: "CORPORATE",
    label: "Corporate Event",
    icon: "🏢",
    minGuests: "Min. 30 persons",
  },
  {
    value: "CHURCH_COMMUNITY",
    label: "Church / Community",
    icon: "⛪",
    minGuests: "Min. 100 persons",
  },
  {
    value: "GRADUATION",
    label: "Graduation Party",
    icon: "🎓",
    minGuests: "Min. 40 guests",
  },
  { value: "OWAMBE", label: "Owambe", icon: "🥁", minGuests: "Min. 80 guests" },
  {
    value: "NAMING_CEREMONY",
    label: "Naming Ceremony",
    icon: "👶🏾",
    minGuests: "Min. 40 guests",
  },
  {
    value: "BULK_ORDER",
    label: "Bulk Food Order",
    icon: "📦",
    minGuests: "Min. ₦150,000",
  },
];

const SERVICE_TYPES: {
  value: ServiceType;
  label: string;
  fromPrice: string;
}[] = [
  {
    value: "FULL_CATERING",
    label: "Full Catering (Cook, Serve & Setup)",
    fromPrice: "From ₦9,000/head",
  },
  {
    value: "BUFFET_SETUP",
    label: "Buffet Setup",
    fromPrice: "From ₦6,000/head",
  },
  {
    value: "PACKED_MEALS",
    label: "Packed Meals / Party Packs",
    fromPrice: "From ₦3,500/head",
  },
  {
    value: "DELIVERY_ONLY",
    label: "Food Delivery Only",
    fromPrice: "From ₦3,000/head",
  },
  {
    value: "SMALL_CHOPS_ONLY",
    label: "Small Chops & Appetizers",
    fromPrice: "Quote on request",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Submit Request",
    desc: "Fill out the event form with your details and preferences.",
  },
  {
    n: "2",
    title: "Get a Quote",
    desc: "We review and send a personalised quote within 24 hours.",
  },
  {
    n: "3",
    title: "Confirm & Pay",
    desc: "Approve the quote and pay 50% deposit to lock your date.",
  },
  {
    n: "4",
    title: "We Deliver!",
    desc: "Sit back while we cook, set up and make your event legendary.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vicky's handled our daughter's wedding reception for 400 guests flawlessly. The jollof rice was the talk of the entire event!",
    author: "Mrs. Funmilayo Adeyemi",
    event: "Wedding Reception · Ikoyi",
    stars: 5,
  },
  {
    quote:
      "Our company retreat was a hit largely because of the food. Vicky's team was professional, punctual and the variety was amazing.",
    author: "Mr. Chukwuemeka Eze",
    event: "Corporate Retreat · Victoria Island",
    stars: 5,
  },
  {
    quote:
      "From booking to the last plate — everything was seamless. The egusi soup had everyone going back for more. Absolute 10/10!",
    author: "Aisha Bello",
    event: "Birthday Party · Surulere",
    stars: 5,
  },
];

const INITIAL_FORM: FormState = {
  clientName: "",
  clientPhone: "",
  clientEmail: "",
  clientWhatsApp: "",
  eventType: "",
  eventDate: "",
  eventTime: "",
  guestCount: "",
  venueType: "",
  venueLGA: "",
  venueAddress: "",
  serviceType: "",
  menuItemIds: [],
  dietaryNotes: "",
  specialRequests: "",
};

export default function EventsPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [result, setResult] = useState<{
    success: boolean;
    orderRef?: string;
    error?: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [activeEventType, setActiveEventType] = useState<EventType | null>(
    null,
  );

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  function handleEventTypeClick(val: EventType) {
    setActiveEventType(val);
    set("eventType", val);
  }

  function handleSubmit() {
    if (
      !form.clientName ||
      !form.clientPhone ||
      !form.eventType ||
      !form.guestCount ||
      !form.eventDate ||
      !form.serviceType
    ) {
      alert("Please fill in all required fields (*).");
      return;
    }
    startTransition(async () => {
      const res = await submitEventOrder({
        clientName: form.clientName,
        clientPhone: form.clientPhone,
        clientEmail: form.clientEmail || undefined,
        clientWhatsApp: form.clientWhatsApp || undefined,
        eventType: form.eventType as EventType,
        eventDate: form.eventDate,
        eventTime: form.eventTime || undefined,
        guestCount: parseInt(form.guestCount),
        venueType: (form.venueType as VenueType) || undefined,
        venueLGA: form.venueLGA || undefined,
        venueAddress: form.venueAddress || undefined,
        serviceType: form.serviceType as ServiceType,
        dietaryNotes: form.dietaryNotes || undefined,
        specialRequests: form.specialRequests || undefined,
      });
      setResult(res);
      if (res.success) setForm(INITIAL_FORM);
      // scroll to result
      document
        .getElementById("form-result")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <div className="min-h-screen bg-[#fff] font-sans overflow-x-hidden">
      {/* NAV */}

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
                            l.href === "/events"
                              ? "text-[#C8963E] border-b-2 border-[#C8963E] pb-0.5"
                              : "text-[#085208] hover:text-[#C8963E]"
                          }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            document
              .getElementById("booking-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-[#21c55e] text-sm font-sans font-semibold px-5 py-2.5
                             rounded-lg hover:bg-transparent hover:border hover:border-white hover:text-white transition-colors shadow"
        >
          Get a Quote
        </button>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-black to-[#21c55e] pt-28 pb-20 px-6 text-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,150,62,0.22)_0%,transparent_65%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 bg-[#C8963E]/15 border border-[#C8963E]/35
                          px-4 py-1.5 rounded-full text-xs font-semibold text-[#E8B96A]
                          tracking-widest uppercase mb-6"
          >
            ✦ Events & Bulk Orders
          </div>
          <h1
            className="font-sans text-[clamp(2.5rem,5.5vw,4.5rem)] font-black
                         text-white leading-[1.08] mb-4"
          >
            Feed a Crowd with{" "}
            <em className="not-italic text-[#E8B96A] block">
              Flavour & Pride.
            </em>
          </h1>
          <p className="text-white/65 font-sans text-base leading-relaxed mb-8 max-w-xl mx-auto">
            From intimate family gatherings to grand weddings and corporate
            events — Vicky&apos;s Cuisine handles it all with warmth, precision
            and unforgettable taste.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "💍 Weddings",
              "🎂 Birthdays",
              "🏢 Corporate",
              "⛪ Church",
              "🎓 Graduations",
              "🥁 Owambes",
            ].map((c) => (
              <span
                key={c}
                className="bg-white/07 border border-white/10 text-white/70 text-xs bg-white/20
                           px-4 py-1.5 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT TYPE CARDS ──────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20">
        <div
          className="flex items-center gap-3 text-xs font-semibold text-[#C8963E]
                        tracking-[2px] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#C8963E]" /> Event Types
        </div>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.8rem)] font-black text-[#1A0F05] mb-10">
          Every Occasion, Done Right
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {EVENT_TYPES.map((et) => (
            <button
              key={et.value}
              onClick={() => handleEventTypeClick(et.value)}
              className={`text-left rounded-[20px] p-6 border transition-all duration-200
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,15,5,0.1)]
                         relative overflow-hidden group
                         ${
                           activeEventType === et.value
                             ? "bg-[#fff] border-[#21c55e] shadow-[0_16px_40px_rgba(26,15,5,0.15)]"
                             : "bg-white border-[#C8963E]/12"
                         }`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#21c55e]
                               transform scale-x-0 group-hover:scale-x-100 transition-transform
                               ${activeEventType === et.value ? "scale-x-100" : ""}`}
              />
              <span className="text-3xl block mb-3">{et.icon}</span>
              <div
                className={`font-mono font-bold text-base mb-1
                               ${activeEventType === et.value ? "text-gray-800" : "text-[#1A0F05]"}`}
              >
                {et.label}
              </div>
              <div
                className={`text-xs font-semibold
                               ${activeEventType === et.value ? "text-gray-600" : "text-gray-400"}`}
              >
                {et.minGuests}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br to-[#000000] from-[#21c55e] px-6 md:px-16 py-20">
        <div
          className="flex items-center gap-3 text-xs font-semibold text-[#fff]
                        tracking-[2px] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#fff]" /> How It Works
        </div>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#fff] mb-12">
          Simple, Stress-Free Booking
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {/* connector line */}
          <div
            className="hidden md:block absolute top-[24px] left-[12%] right-[12%] h-px
                          bg-[repeating-linear-gradient(to_right,#fff_0,#fff_6px,transparent_6px,transparent_14px)]"
          />
          {STEPS.map((s) => (
            <div key={s.n} className="text-center relative z-10">
              <div
                className="w-12 h-12 rounded-full bg-[#1A0F05] border-[3px] border-[#fff]
                              flex items-center justify-center mx-auto mb-4
                              font-mono text-lg font-black text-[#fff]"
              >
                {s.n}
              </div>
              <div className="font-semibold text-[#fff] mb-2">{s.title}</div>
              <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOKING FORM ─────────────────────────────────────── */}
      <section id="booking-form" className="px-6 md:px-16 py-20">
        <div
          className="flex items-center gap-3 text-xs font-semibold text-[#C8963E]
                        tracking-[2px] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#C8963E]" /> Book Now
        </div>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-gray-800 mb-10">
          Request an Event Quote
        </h2>

        {/* Success / Error banner */}
        <div id="form-result">
          {result?.success && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="font-semibold text-green-800 text-lg mb-1">
                ✅ Request Submitted!
              </div>
              <p className="text-green-700 text-sm">
                Your reference: <strong>{result.orderRef}</strong>. We&apos;ll
                contact you within 24 hours with a personalised quote.
              </p>
            </div>
          )}
          {result?.error && (
            <div className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="text-red-700 text-sm">{result.error}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-8 items-start">
          {/* FORM */}
          <div
            className="bg-white rounded-3xl p-8 border border-[#C8963E]/12
                          shadow-[0_8px_40px_rgba(26,15,5,0.05)]"
          >
            <h3 className="font-sans text-xl font-bold text-gray-700 mb-1">
              Event Details
            </h3>
            <p className="text-sm text-[#6B5540] mb-7">
              Fields marked <span className="text-[#C8963E]">*</span> are
              required.
            </p>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="Full Name" req>
                <input
                  value={form.clientName}
                  onChange={(e) => set("clientName", e.target.value)}
                  placeholder="e.g. Adaeze Okafor"
                  className={inputCls}
                />
              </Field>
              <Field label="Phone Number" req>
                <input
                  value={form.clientPhone}
                  onChange={(e) => set("clientPhone", e.target.value)}
                  placeholder="+234 800 000 0000"
                  type="tel"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="Email Address">
                <input
                  value={form.clientEmail}
                  onChange={(e) => set("clientEmail", e.target.value)}
                  placeholder="adaeze@email.com"
                  type="email"
                  className={inputCls}
                />
              </Field>
              <Field label="WhatsApp Number">
                <input
                  value={form.clientWhatsApp}
                  onChange={(e) => set("clientWhatsApp", e.target.value)}
                  placeholder="+234 800 000 0000"
                  type="tel"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="Event Type" req>
                <select
                  value={form.eventType}
                  onChange={(e) =>
                    set("eventType", e.target.value as EventType)
                  }
                  className={inputCls}
                >
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((et) => (
                    <option key={et.value} value={et.value}>
                      {et.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Guest Count" req>
                <input
                  value={form.guestCount}
                  onChange={(e) => set("guestCount", e.target.value)}
                  placeholder="e.g. 250"
                  type="number"
                  min="1"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="Event Date" req>
                <input
                  value={form.eventDate}
                  onChange={(e) => set("eventDate", e.target.value)}
                  type="date"
                  className={inputCls}
                  min={new Date().toISOString().split("T")[0]}
                />
              </Field>
              <Field label="Preferred Time">
                <input
                  value={form.eventTime}
                  onChange={(e) => set("eventTime", e.target.value)}
                  type="time"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Row 5 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="LGA / Area">
                <input
                  value={form.venueLGA}
                  onChange={(e) => set("venueLGA", e.target.value)}
                  placeholder="e.g. Lekki, Surulere"
                  className={inputCls}
                />
              </Field>
              <Field label="Venue Address">
                <input
                  value={form.venueAddress}
                  onChange={(e) => set("venueAddress", e.target.value)}
                  placeholder="Full address (optional)"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Service type */}
            <Field label="Service Type" req>
              <select
                value={form.serviceType}
                onChange={(e) =>
                  set("serviceType", e.target.value as ServiceType)
                }
                className={inputCls}
              >
                <option value="">Select service type</option>
                {SERVICE_TYPES.map((st) => (
                  <option key={st.value} value={st.value}>
                    {st.label} — {st.fromPrice}
                  </option>
                ))}
              </select>
            </Field>

            <div className="mt-4">
              <Field label="Preferred Menu Items">
                <textarea
                  value={form.dietaryNotes}
                  onChange={(e) => set("dietaryNotes", e.target.value)}
                  placeholder="e.g. Jollof Rice, Egusi Soup, Grilled Chicken, Moi Moi, Pounded Yam..."
                  className={`${inputCls} min-h-[90px] resize-y`}
                />
              </Field>
            </div>

            <div className="mt-4 mb-7">
              <Field label="Special Requests / Dietary Notes">
                <textarea
                  value={form.specialRequests}
                  onChange={(e) => set("specialRequests", e.target.value)}
                  placeholder="Dietary restrictions, halal requirements, budget range, special setup needs..."
                  className={`${inputCls} min-h-[80px] resize-y`}
                />
              </Field>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isPending}
              className="w-full bg-green-500 hover:bg-green-600 active:scale-[0.99]
              disabled:bg-cream-200 disabled:text-cream-400 disabled:cursor-not-allowed
              text-white font-bold py-4 rounded-2xl transition-all duration-200
              flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
            >
              {isPending ? "Submitting…" : "Send Quote Request →"}
            </button>
          </div>

          {/* SIDEBAR INFO */}
          <div className="space-y-4">
            <InfoCard title="📋 What's Included">
              {[
                "Freshly prepared dishes on event day",
                "Experienced serving staff (full catering)",
                "Chafing dishes & buffet setup equipment",
                "Branded serving wear & napkins",
                "Free delivery within Lagos Island*",
                "Post-event cleanup (full catering only)",
              ].map((t) => (
                <div
                  key={t}
                  className="flex gap-2.5 items-start py-2 border-b border-gray-200 last:border-0"
                >
                  <span className="text-[#C8963E] text-lg leading-none mt-[-1px]">
                    ✦
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {t}
                  </span>
                </div>
              ))}
            </InfoCard>

            <InfoCard title="💰 Pricing Guide">
              {[
                ["Packed meals", "From ₦3,500/head"],
                ["Buffet service", "From ₦6,000/head"],
                ["Full catering", "From ₦9,000/head"],
                ["Deposit required", "50% to confirm booking"],
                ["Balance due", "3 days before event"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between items-center py-2 border-b border-[#1A0F05]/05 last:border-0 font-sans"
                >
                  <span className="text-sm text-gray-500">{k}</span>
                  <span className="text-sm font-semibold text-gray-600">
                    {v}
                  </span>
                </div>
              ))}
            </InfoCard>

            <InfoCard title="📅 Booking Policy">
              {[
                "Book at least 2 weeks in advance",
                "Saturday dates fill up quickly",
                "Menu changes allowed up to 7 days before",
                "Cancellations within 72hrs forfeit deposit",
              ].map((t) => (
                <div
                  key={t}
                  className="flex gap-2.5 items-start py-2 border-b border-gray-200 last:border-0 font-sans"
                >
                  <span className="text-gray-400 text-lg leading-none">•</span>
                  <span className="text-sm text-gray-600">{t}</span>
                </div>
              ))}
            </InfoCard>

            <div className="bg-[#1A0F05] rounded-2xl p-6 text-white">
              <h4 className="font-sans font-bold text-[#E8B96A] mb-4">
                📞 Prefer to Call?
              </h4>
              {[
                ["📱", "Phone", "+234 800 VCK FOOD"],
                ["💬", "WhatsApp", "+234 800 VCK FOOD"],
                ["📧", "Email", "events@vickyscuisine.ng"],
                ["📍", "Location", "Lagos, Nigeria"],
              ].map(([icon, label, val]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 mb-3 last:mb-0 font-sans"
                >
                  <span className="text-lg">{icon}</span>
                  <div>
                    <div className="text-[10px] text-white/80 uppercase tracking-widest">
                      {label}
                    </div>
                    <div className="text-sm text-white/80">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-[#FBF5EC] px-6 md:px-16 py-20">
        <div
          className="flex items-center gap-3 text-xs font-semibold text-[#C8963E]
                        tracking-[2px] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#C8963E]" /> Client Love
        </div>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#1A0F05] mb-10">
          What Our Event Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white shadow-xl shadow-gray-700/20 rounded-2xl p-7 border border-[#C8963E]/10"
            >
              <div className="text-[#C8963E] tracking-[3px] mb-4">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-sm text-[#6B5540] leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-semibold text-sm text-[#1A0F05]">
                {t.author}
              </div>
              <div className="text-xs text-[#C8963E] mt-0.5">{t.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center px-6 py-6 border-t border-[#1A0F05]/08 text-sm text-[#6B5540]">
        © {new Date().getFullYear()}{" "}
        <strong className="text-[#C8963E]">Vicky&apos;s Cuisine</strong>. Lagos,
        Nigeria.
      </footer>

      <style>{`
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
      `}</style>
    </div>
  );
}

// ─── Small helpers ────────────────────────────────────────────
const inputCls = `w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl
 text-sm text-green-900 placeholder-cream-500
  focus:outline-none  focus:border-green-400 focus:ring-2 focus:ring-green-100  focus:outline-none focus:bg-white
  transition-all font-sans`;

function Field({
  label,
  req,
  children,
}: {
  label: string;
  req?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#1A0F05] mb-1.5 tracking-wide">
        {label} {req && <span className="text-[#C8963E]">*</span>}
      </label>
      {children}
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200">
      <h4 className="font-sans font-bold text-gray-600 mb-4 text-sm">
        {title}
      </h4>
      {children}
    </div>
  );
}
