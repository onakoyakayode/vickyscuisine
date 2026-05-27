"use client";

import { useState, useEffect } from "react";
import { EventType, ServiceType, VenueType } from "@/generated/prisma";
import { submitEventOrder } from "@/lib/action";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiOrderBox from "@/components/AiOrderBox";

// ─── Types ────────────────────────────────────────────────────────────────────

type MenuOption = {
  id: string;
  name: string;
  description?: string;
  priceNGN: number; // base price per plate (set by admin)
  isAvailable: boolean;
};

type MenuCategory = {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
  items: MenuOption[];
  // rules injected by the API based on slug
  required?: boolean;
  minPlates?: number; // minimum plates customer must order
  minProtein?: number; // for protein categories: must pick ≥ N proteins
};

type ServicePackage = {
  id: string;
  name: string;
  serviceType: ServiceType;
  basePricePerHead: number;
  fromPrice: string;
};

type PlateSelection = {
  menuItemId: string;
  menuItemName: string;
  categoryId: string;
  categoryName: string;
  plates: number; // number of plates ordered
  pricePerPlate: number;
};

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
  landmark: string;
  serviceType: ServiceType | "";
  specialRequests: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

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

const LAGOS_LGAS = [
  "Agege",
  "Ajeromi-Ifelodun",
  "Alimosho",
  "Amuwo-Odofin",
  "Apapa",
  "Badagry",
  "Epe",
  "Eti-Osa",
  "Ibeju-Lekki",
  "Ifako-Ijaiye",
  "Ikeja",
  "Ikorodu",
  "Kosofe",
  "Lagos Island",
  "Lagos Mainland",
  "Mushin",
  "Ojo",
  "Oshodi-Isolo",
  "Shomolu",
  "Surulere",
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
  landmark: "",
  serviceType: "",
  specialRequests: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [servicePackages, setServicePackages] = useState<ServicePackage[]>([]);
  const [plateSelections, setPlateSelections] = useState<
    Record<string, PlateSelection>
  >({});
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(
    null,
  );
  const [loadingMenu, setLoadingMenu] = useState(true);
  const [result, setResult] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [activeEventType, setActiveEventType] = useState<EventType | null>(
    null,
  );
  const [mobileTab, setMobileTab] = useState<"menu" | "details">("menu");
  const [step, setStep] = useState<1 | 2>(1); // step 1 = menu, step 2 = details

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // ── Fetch menu from admin-configured DB ──────────────────────────────────
  useEffect(() => {
    const fetchMenu = async () => {
      setLoadingMenu(true);
      try {
        const [catRes, pkgRes] = await Promise.all([
          fetch("/api/events/menu-categories"),
          fetch("/api/events/service-packages"),
        ]);
        const catData = await catRes.json();
        const pkgData = await pkgRes.json();
        if (catData.success) setCategories(catData.data);
        if (pkgData.success) setServicePackages(pkgData.data);
      } catch (err) {
        console.error("Failed to load menu", err);
      } finally {
        setLoadingMenu(false);
      }
    };
    fetchMenu();
  }, []);

  // ── Plate quantity controls ───────────────────────────────────────────────
  const setPlates = (item: MenuOption, category: MenuCategory, qty: number) => {
    const value = Math.max(0, qty);
    setPlateSelections((prev) => {
      if (value === 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [item.id]: {
          menuItemId: item.id,
          menuItemName: item.name,
          categoryId: category.id,
          categoryName: category.name,
          plates: value,
          pricePerPlate: item.priceNGN,
        },
      };
    });
  };

  const getPlates = (itemId: string) => plateSelections[itemId]?.plates || 0;

  // ── Protein validation: categories with "protein" in slug need ≥ 2 items ─
  const proteinCats = categories.filter(
    (c) =>
      c.slug.toLowerCase().includes("protein") ||
      c.name.toLowerCase().includes("protein") ||
      c.slug.toLowerCase().includes("swallow"),
  );

  const validateProtein = () => {
    for (const cat of proteinCats) {
      const selectedItems = cat.items.filter((i) => getPlates(i.id) > 0);
      const minRequired = cat.minProtein ?? 2;
      if (cat.required && selectedItems.length < minRequired) return false;
    }
    return true;
  };

  const validateRequiredCategories = () => {
    for (const cat of categories) {
      if (!cat.required) continue;
      const hasSelection = cat.items.some((i) => getPlates(i.id) > 0);
      if (!hasSelection) return false;
    }
    return validateProtein();
  };

  // ── Pricing calculations ─────────────────────────────────────────────────
  const menuTotal = Object.values(plateSelections).reduce(
    (sum, s) => sum + s.plates * s.pricePerPlate,
    0,
  );
  const guestCountNum = parseInt(form.guestCount) || 0;
  const serviceBase = selectedService
    ? selectedService.basePricePerHead * guestCountNum
    : 0;
  const grandTotal = serviceBase + menuTotal;

  // ── Submit ────────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (
      !form.clientName ||
      !form.clientPhone ||
      !form.eventType ||
      !form.guestCount ||
      !form.eventDate ||
      !form.serviceType ||
      !form.venueAddress ||
      !form.venueLGA
    ) {
      alert("Please fill in all required fields (*).");
      return;
    }
    if (!validateRequiredCategories()) {
      alert(
        "Please complete all required menu selections (minimum 2 proteins per category).",
      );
      return;
    }
    setIsPending(true);

    const menuSelections = Object.values(plateSelections).map((s) => ({
      menuItemId: s.menuItemId,
      quantity: s.plates,
      unitPrice: s.pricePerPlate,
    }));

    try {
      // Direct API call instead of server action
      const response = await fetch("/api/events/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: form.clientName,
          clientPhone: form.clientPhone,
          clientEmail: form.clientEmail || undefined,
          clientWhatsApp: form.clientWhatsApp || undefined,
          eventType: form.eventType,
          eventDate: form.eventDate,
          eventTime: form.eventTime || undefined,
          guestCount: guestCountNum,
          venueType: form.venueType || undefined,
          venueLGA: form.venueLGA,
          venueAddress: form.venueAddress,
          serviceType: form.serviceType,
          specialRequests: form.specialRequests || undefined,
          menuSelections,
        }),
      });

      const res = await response.json();
      setResult(res);

      if (res.success) {
        setForm(INITIAL_FORM);
        setPlateSelections({});
        setSelectedService(null);
        setActiveEventType(null);
      }

      document
        .getElementById("form-result")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Submit error:", error);
      setResult({ success: false, error: "Failed to submit order" });
    } finally {
      setIsPending(false);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar
        transparent
        active="/events"
        buttonText="Get a Quote"
        onButtonClick={() =>
          document
            .getElementById("booking-form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      {/* <AiOrderBox
  onResult={(draft) => {
    // 1. Fill form
    setForm((f) => ({
      ...f,
      eventType: draft.eventType || "",
      guestCount: String(draft.guestCount || ""),
      venueLGA: draft.venueLGA || "",
    }));

    // 2. Auto-scroll to form
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
/> */}

      {/* ── Hero ── */}
      <section className="bg-gradient-to-r from-black to-green-500 pt-20 sm:pt-28 pb-12 sm:pb-20 px-5 sm:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#C8963E]/15 border border-[#C8963E]/35 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-[#E8B96A] tracking-widest uppercase mb-4 sm:mb-6">
            ✦ Events & Bulk Orders
          </div>
          <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-white leading-[1.08] mb-3 sm:mb-4">
            Feed a Crowd with{" "}
            <em className="not-italic text-[#E8B96A] block">
              Flavour & Pride.
            </em>
          </h1>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            From intimate family gatherings to grand weddings — Vicky&apos;s
            Cuisine handles it all with warmth, precision and unforgettable
            taste.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("booking-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#e9bd6b] text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#d4a455] transition-all"
          >
            Get a Free Quote →
          </button>
        </div>
      </section>

      {/* ── Event Type Cards ── */}
      <section className="px-4 sm:px-8 md:px-16 py-12 sm:py-20">
        <div className="flex items-center gap-3 text-xs font-semibold text-[#C8963E] tracking-[2px] uppercase mb-3 sm:mb-4">
          <span className="w-6 sm:w-8 h-px bg-[#C8963E]" /> Event Types
        </div>
        <h2 className="text-[clamp(1.5rem,4vw,2.8rem)] font-black text-[#1A0F05] mb-6 sm:mb-10">
          Every Occasion, Done Right
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {EVENT_TYPES.map((et) => (
            <button
              key={et.value}
              onClick={() => {
                setActiveEventType(et.value);
                set("eventType", et.value);
                document
                  .getElementById("booking-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-left rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 border transition-all duration-200 hover:-translate-y-0.5
                ${
                  activeEventType === et.value
                    ? "bg-white border-green-500 shadow-lg"
                    : "bg-white border-[#C8963E]/12 hover:border-[#C8963E]/30"
                }`}
            >
              <span className="text-2xl sm:text-3xl block mb-2 sm:mb-3">
                {et.icon}
              </span>
              <div className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1 leading-tight">
                {et.label}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400">
                {et.minGuests}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section
        id="booking-form"
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div id="form-result">
            {result?.success && (
              <div className="mb-6 sm:mb-8 bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-5">
                <div className="font-semibold text-green-800 text-base sm:text-lg mb-1">
                  ✅ Order Submitted!
                </div>
                <p className="text-green-700 text-sm">
                  Your reference: <strong>{result.orderRef}</strong>. We&apos;ll
                  review your selections and send you an invoice within 24
                  hours.
                </p>
              </div>
            )}
            {result?.error && (
              <div className="mb-6 sm:mb-8 bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5">
                <p className="text-red-700 text-sm">{result.error}</p>
              </div>
            )}
          </div>

          {/* Mobile price summary */}
          <div className="lg:hidden mb-4 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-green-100 mb-0.5">Estimated Total</p>
                <p className="text-2xl font-black">
                  ₦{grandTotal.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-100 mb-0.5">Menu Cost</p>
                <p className="text-lg font-bold">
                  ₦{menuTotal.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile tab switcher */}
          <div className="flex lg:hidden mb-4 bg-white rounded-xl border border-gray-200 p-1">
            <button
              onClick={() => setMobileTab("menu")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all
                ${mobileTab === "menu" ? "bg-green-500 text-white shadow-sm" : "text-gray-500"}`}
            >
              🍽️ Choose Menu
            </button>
            <button
              onClick={() => setMobileTab("details")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all
                ${mobileTab === "details" ? "bg-green-500 text-white shadow-sm" : "text-gray-500"}`}
            >
              📋 Your Details
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* ── Menu Panel ── */}
            <div
              className={`lg:col-span-2 space-y-4 sm:space-y-6 ${mobileTab === "details" ? "hidden lg:block" : ""}`}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                  Build Your Menu
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  Enter the number of plates for each dish. Prices are per
                  plate. Protein dishes require a minimum of 2 types.
                </p>

                {loadingMenu ? (
                  <div className="py-16 text-center text-gray-400">
                    <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    Loading menu...
                  </div>
                ) : categories.length === 0 ? (
                  <div className="py-16 text-center text-gray-400">
                    Menu is being configured. Please check back soon.
                  </div>
                ) : (
                  categories.map((category) => {
                    const isProteinCat =
                      category.slug.toLowerCase().includes("protein") ||
                      category.name.toLowerCase().includes("protein") ||
                      category.slug.toLowerCase().includes("swallow");
                    const selectedItems = category.items.filter(
                      (i) => getPlates(i.id) > 0,
                    );
                    const minRequired = isProteinCat
                      ? (category.minProtein ?? 2)
                      : 1;
                    const isComplete =
                      !category.required || selectedItems.length >= minRequired;

                    return (
                      <div
                        key={category.id}
                        className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b last:border-0"
                      >
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              {category.name}
                              {category.required && (
                                <span className="text-red-500 ml-1">*</span>
                              )}
                            </h3>
                            {isProteinCat && category.required && (
                              <p className="text-xs text-orange-600 mt-0.5">
                                Select at least {minRequired} protein types
                              </p>
                            )}
                          </div>
                          {category.required && (
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded flex-shrink-0
                              ${isComplete ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                            >
                              {isComplete
                                ? "✓ Done"
                                : `${selectedItems.length}/${minRequired} min`}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          {category.items
                            .filter((i) => i.isAvailable)
                            .map((item) => {
                              const qty = getPlates(item.id);
                              return (
                                <div
                                  key={item.id}
                                  className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all
                                    ${qty > 0 ? "border-green-400 bg-green-50" : "border-gray-100 bg-gray-50 hover:border-gray-200"}`}
                                >
                                  {/* Name + price */}
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm leading-tight">
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-green-700 font-semibold mt-0.5">
                                      ₦{item.priceNGN.toLocaleString()} / plate
                                    </div>
                                    {item.description && (
                                      <div className="text-xs text-gray-400 mt-0.5">
                                        {item.description}
                                      </div>
                                    )}
                                  </div>

                                  {/* Plate counter */}
                                  <div className="flex items-center gap-2 flex-shrink-0">
                                    <button
                                      onClick={() =>
                                        setPlates(item, category, qty - 1)
                                      }
                                      disabled={qty === 0}
                                      className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600
                                        hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                    >
                                      −
                                    </button>
                                    <input
                                      type="number"
                                      min={0}
                                      value={qty === 0 ? "" : qty}
                                      placeholder="0"
                                      onChange={(e) =>
                                        setPlates(
                                          item,
                                          category,
                                          parseInt(e.target.value) || 0,
                                        )
                                      }
                                      className="w-14 text-center border-2 border-gray-200 rounded-lg py-1.5 text-sm font-bold
                                        focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all"
                                    />
                                    <button
                                      onClick={() =>
                                        setPlates(item, category, qty + 1)
                                      }
                                      className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600
                                        hover:border-green-400 hover:text-green-600 transition-all"
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* Line total */}
                                  <div className="w-20 text-right flex-shrink-0">
                                    {qty > 0 ? (
                                      <span className="text-sm font-bold text-green-700">
                                        ₦
                                        {(qty * item.priceNGN).toLocaleString()}
                                      </span>
                                    ) : (
                                      <span className="text-xs text-gray-300">
                                        —
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })
                )}

                {/* Menu subtotal */}
                {menuTotal > 0 && (
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Menu Subtotal
                    </span>
                    <span className="text-xl font-black text-green-600">
                      ₦{menuTotal.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Mobile: continue to details */}
              <button
                onClick={() => setMobileTab("details")}
                className="w-full lg:hidden bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm"
              >
                Continue to Your Details →
              </button>
            </div>

            {/* ── Sidebar ── */}
            <div
              className={`space-y-4 sm:space-y-6 ${mobileTab === "menu" ? "hidden lg:block" : ""}`}
            >
              {/* Order Summary — desktop */}
              <div className="hidden lg:block bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 sm:p-6 text-white sticky top-24">
                <h3 className="font-bold text-base sm:text-lg mb-4">
                  Order Summary
                </h3>
                <div className="space-y-2 text-sm max-h-64 overflow-y-auto pr-1">
                  {Object.values(plateSelections).map((s) => (
                    <div
                      key={s.menuItemId}
                      className="flex justify-between gap-2"
                    >
                      <span className="text-green-100 truncate">
                        {s.menuItemName} ×{s.plates}
                      </span>
                      <span className="font-semibold flex-shrink-0">
                        ₦{(s.plates * s.pricePerPlate).toLocaleString()}
                      </span>
                    </div>
                  ))}
                  {Object.keys(plateSelections).length === 0 && (
                    <p className="text-green-200 text-xs italic">
                      No items selected yet
                    </p>
                  )}
                </div>
                <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
                  {selectedService && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-100">
                        Service base ({guestCountNum} guests):
                      </span>
                      <span>₦{serviceBase.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-green-100">Menu total:</span>
                    <span>₦{menuTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-white/20 pt-2 mt-2">
                    <span>Est. Total:</span>
                    <span>₦{grandTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-green-200 text-[10px] mt-1">
                    * Final invoice issued by admin after review
                  </p>
                </div>
              </div>

              {/* Details Form */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border">
                <h3 className="font-bold text-base sm:text-lg mb-4">
                  Your Details
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Contact */}
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.clientName}
                    onChange={(e) => set("clientName", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.clientPhone}
                    onChange={(e) => set("clientPhone", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.clientEmail}
                    onChange={(e) => set("clientEmail", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={form.clientWhatsApp}
                    onChange={(e) => set("clientWhatsApp", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                  />

                  {/* Event */}
                  <select
                    value={form.eventType}
                    onChange={(e) =>
                      set("eventType", e.target.value as EventType)
                    }
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                  >
                    <option value="">Select Event Type *</option>
                    {EVENT_TYPES.map((et) => (
                      <option key={et.value} value={et.value}>
                        {et.label}
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      placeholder="No. of Guests *"
                      value={form.guestCount}
                      onChange={(e) => set("guestCount", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                    />
                    <input
                      type="time"
                      value={form.eventTime}
                      onChange={(e) => set("eventTime", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                    />
                  </div>

                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => set("eventDate", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                  />

                  {/* Service package */}
                  <select
                    value={form.serviceType}
                    onChange={(e) => {
                      set("serviceType", e.target.value as ServiceType);
                      const pkg = servicePackages.find(
                        (s) => s.serviceType === e.target.value,
                      );
                      setSelectedService(pkg || null);
                    }}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                  >
                    <option value="">Select Service Package *</option>
                    {servicePackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.serviceType}>
                        {pkg.name} — {pkg.fromPrice}
                      </option>
                    ))}
                  </select>

                  {/* Venue */}
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Venue / Location
                    </p>
                    <div className="space-y-3">
                      <select
                        value={form.venueType}
                        onChange={(e) =>
                          set("venueType", e.target.value as VenueType)
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                      >
                        <option value="">Venue Type</option>
                        <option value="INDOOR">Indoor</option>
                        <option value="OUTDOOR">Outdoor</option>
                        <option value="OPEN_FIELD">Open Field</option>
                        <option value="HALL">Hall / Banquet</option>
                        <option value="HOME">Home / Residence</option>
                      </select>

                      <select
                        value={form.venueLGA}
                        onChange={(e) => set("venueLGA", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
                      >
                        <option value="">Local Government Area (LGA) *</option>
                        {LAGOS_LGAS.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga}
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        placeholder="Full Venue Address *"
                        value={form.venueAddress}
                        onChange={(e) => set("venueAddress", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                      />

                      <input
                        type="text"
                        placeholder="Closest Landmark (e.g., beside GTBank, opposite Shoprite)"
                        value={form.landmark}
                        onChange={(e) => set("landmark", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>
                  </div>

                  <textarea
                    placeholder="Special Requests (dietary needs, setup requirements, budget notes...)"
                    value={form.specialRequests}
                    onChange={(e) => set("specialRequests", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:border-green-400 transition-all"
                  />

                  {/* Payment note */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                    <strong>💳 Payment Options:</strong> Pay in full before the
                    event, or split into 2 instalments — 50% deposit to confirm,
                    balance due 2 weeks before event day.
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={
                      isPending ||
                      !validateRequiredCategories() ||
                      !selectedService
                    }
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all
                      disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isPending
                      ? "Submitting..."
                      : `Submit Order (₦${grandTotal.toLocaleString()}) →`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
