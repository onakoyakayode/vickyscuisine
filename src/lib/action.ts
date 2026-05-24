// src/lib/actions.ts
"use server";

import { EventType, VenueType, ServiceType } from "@/generated/prisma";

import { revalidatePath } from "next/cache";
import { db } from "./db";

// ─── Generate human-readable order ref ───────────────────────
function generateOrderRef(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `EVT-${year}-${rand}`;
}

// ─── Submit Event / Bulk Order ────────────────────────────────
export type EventOrderInput = {
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  clientWhatsApp?: string;
  eventType: EventType;
  eventDate: string; // ISO string from date input
  eventTime?: string;
  guestCount: number;
  venueType?: VenueType;
  venueAddress?: string;
  venueLGA?: string;
  serviceType: ServiceType;
  menuItemIds?: string[]; // selected menu item IDs
  dietaryNotes?: string;
  specialRequests?: string;
};

export async function submitEventOrder(input: EventOrderInput) {
  try {
    const order = await db.eventOrder.create({
      data: {
        orderRef: generateOrderRef(),
        clientName: input.clientName,
        clientPhone: input.clientPhone,
        clientEmail: input.clientEmail,
        clientWhatsApp: input.clientWhatsApp,
        eventType: input.eventType,
        eventDate: new Date(input.eventDate),
        eventTime: input.eventTime,
        guestCount: input.guestCount,
        venueType: input.venueType ?? "NOT_SPECIFIED",
        venueAddress: input.venueAddress,
        venueLGA: input.venueLGA,
        serviceType: input.serviceType,
        dietaryNotes: input.dietaryNotes,
        specialRequests: input.specialRequests,
        // Menu selections created separately after quote confirmation
      },
    });

    revalidatePath("/events");
    return { success: true, orderRef: order.orderRef, id: order.id };
  } catch (err) {
    console.error("submitEventOrder error:", err);
    return {
      success: false,
      error: "Failed to submit order. Please try again.",
    };
  }
}

// ─── Fetch all available menu items ──────────────────────────
export async function getMenuItems() {
  return db.menuItem.findMany({
    where: { isAvailable: true },

    include: {
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },

    orderBy: [{ category: { name: "asc" } }, { name: "asc" }],
  });
}

console.log(getMenuItems(), "get Menu");

// ─── Fetch featured menu items (for landing page) ────────────
export async function getFeaturedMenuItems() {
  const featured = await db.menuItem.findMany({
    where: { isAvailable: true },
    take: 12,
    orderBy: { name: "asc" },
    include: {
      category: { select: { name: true, slug: true } },
    },
  });

  if (featured.length > 0) return featured;

  return db.menuItem.findMany({
    where: { isAvailable: true },
    take: 6,
    orderBy: { createdAt: "desc" },
    include: {
      category: { select: { name: true, slug: true } },
    },
  });
}

console.log(getFeaturedMenuItems());

// ─── Seed helper (run once in dev) ───────────────────────────
export async function seedMenuItems() {
  const items = [
    // RICE
    {
      name: "Jollof Rice",
      category: "RICE",
      priceNGN: 2500,
      isFeatured: true,
      description: "Smoky party-style jollof with tomato base",
    },
    {
      name: "Ofada Rice & Sauce",
      category: "RICE",
      priceNGN: 2800,
      isFeatured: true,
      description: "Unpolished local rice with designer ofada sauce",
    },
    {
      name: "Fried Rice",
      category: "RICE",
      priceNGN: 2500,
      description: "Colourful fried rice with mixed vegetables",
    },
    {
      name: "White Rice",
      category: "RICE",
      priceNGN: 2000,
      description: "Plain parboiled rice",
    },
    // SOUP
    {
      name: "Egusi Soup",
      category: "SOUP",
      priceNGN: 2200,
      isFeatured: true,
      description: "Ground melon soup with assorted meat and fish",
    },
    {
      name: "Banga Soup",
      category: "SOUP",
      priceNGN: 2500,
      description: "Palm nut soup with traditional spices",
    },
    {
      name: "Efo Riro",
      category: "SOUP",
      priceNGN: 2000,
      description: "Yoruba spinach stew with assorted proteins",
    },
    {
      name: "Ofe Onugbu (Bitter Leaf)",
      category: "SOUP",
      priceNGN: 2200,
      description: "Igbo bitter leaf soup",
    },
    {
      name: "Pepper Soup",
      category: "SOUP",
      priceNGN: 2000,
      isFeatured: true,
      description: "Spicy catfish or goat meat pepper soup",
    },
    // SWALLOW
    {
      name: "Pounded Yam",
      category: "SWALLOW",
      priceNGN: 800,
      description: "Smooth pounded yam",
    },
    {
      name: "Eba (Garri)",
      category: "SWALLOW",
      priceNGN: 500,
      description: "Cassava flake swallow",
    },
    {
      name: "Amala",
      category: "SWALLOW",
      priceNGN: 600,
      description: "Yam flour swallow",
    },
    {
      name: "Fufu",
      category: "SWALLOW",
      priceNGN: 700,
      description: "Fermented cassava swallow",
    },
    // PROTEIN
    {
      name: "Grilled Chicken",
      category: "PROTEIN",
      priceNGN: 2500,
      isFeatured: true,
      description: "Spice-marinated whole chicken, grilled to perfection",
    },
    {
      name: "Peppered Gizzard",
      category: "PROTEIN",
      priceNGN: 1800,
      description: "Tender gizzard in Vicky's special pepper sauce",
    },
    {
      name: "Assorted Meat",
      category: "PROTEIN",
      priceNGN: 2000,
      description: "Mixed beef, shaki and ponmo",
    },
    {
      name: "Fried Fish",
      category: "PROTEIN",
      priceNGN: 2200,
      description: "Crispy fried tilapia",
    },
    {
      name: "Suya",
      category: "PROTEIN",
      priceNGN: 1500,
      isFeatured: true,
      description: "Hausa spiced skewered beef",
    },
    // SIDES
    {
      name: "Moi Moi",
      category: "SIDE",
      priceNGN: 800,
      description: "Steamed bean pudding with egg and fish",
    },
    {
      name: "Fried Plantain (Dodo)",
      category: "SIDE",
      priceNGN: 600,
      isFeatured: true,
      description: "Sweet ripe plantain, golden fried",
    },
    {
      name: "Coleslaw",
      category: "SIDE",
      priceNGN: 500,
      description: "Creamy Nigerian coleslaw",
    },
    {
      name: "Nigerian Salad",
      category: "SIDE",
      priceNGN: 700,
      description: "Mixed vegetable salad with cream",
    },
    // SMALL CHOPS
    {
      name: "Spring Rolls",
      category: "SMALL_CHOPS",
      priceNGN: 1200,
      description: "Crispy vegetable spring rolls",
    },
    {
      name: "Samosa",
      category: "SMALL_CHOPS",
      priceNGN: 1000,
      description: "Spiced meat samosas",
    },
    {
      name: "Puff Puff",
      category: "SMALL_CHOPS",
      priceNGN: 800,
      description: "Soft Nigerian fried dough balls",
    },
    {
      name: "Chin Chin",
      category: "SMALL_CHOPS",
      priceNGN: 700,
      description: "Crunchy fried pastry snack",
    },
    // DRINKS
    {
      name: "Chapman",
      category: "DRINKS",
      priceNGN: 1000,
      description: "Nigerian party cocktail",
    },
    {
      name: "Zobo",
      category: "DRINKS",
      priceNGN: 500,
      description: "Hibiscus flower drink",
    },
    {
      name: "Kunu",
      category: "DRINKS",
      priceNGN: 500,
      description: "Millet and spice drink",
    },
    {
      name: "Soft Drinks",
      category: "DRINKS",
      priceNGN: 400,
      description: "Coke, Fanta, Sprite",
    },
  ];

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  for (const item of items) {
    const categorySlug = item.category.toLowerCase();
    const category = await db.menuCategory.upsert({
      where: { slug: categorySlug },
      update: { name: item.category },
      create: { name: item.category, slug: categorySlug },
    });

    const slug = slugify(item.name);

    await db.menuItem.upsert({
      where: {
        slug_categoryId: {
          slug,
          categoryId: category.id,
        },
      },
      update: {
        priceNGN: item.priceNGN,
        description: item.description,
        isFeatured: item.isFeatured ?? false,
        isAvailable: true,
      },
      create: {
        name: item.name,
        slug,
        category: { connect: { id: category.id } },
        priceNGN: item.priceNGN,
        description: item.description,
        isFeatured: item.isFeatured ?? false,
        isAvailable: true,
      },
    });
  }

  // await db.menuItem.createMany({ data: items as any, skipDuplicates: true });
  return { seeded: items.length };
}
