import { PrismaClient, Role } from "../src/generated/prisma/index.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const MENU_DATA = [
  {
    category: "Protein",
    sortOrder: 1,
    items: [
      { name: "Pepper Chicken", price: 2000 },
      { name: "Fried Hake Fish", price: 2000 },
      { name: "Goat in Stew", price: 2800 },
      { name: "Beef in Stew / Assorted Beef", price: 1200 },
      { name: "Boiled Egg", price: 500 },
      { name: "Sausage", price: 1000 },
      { name: "Fried Mackerel", price: 2000 },
      { name: "Croacker Fish", price: 2000 },
      { name: "Fried Catfish", price: 2000 },
      { name: "Ponmo", price: 800 },
      { name: "Turkey (large/medium)", price: 2500 },
      { name: "Ponmo Sauce", price: 1500 },
      { name: "Gizdodo", price: 2500 },
      { name: "Asun", price: 2500 },
      { name: "Cowtail", price: 2000 },
      { name: "Cowleg", price: 2000 },
      { name: "Pepper Soup", price: 3500 },
    ],
  },
  {
    category: "Main Dish",
    sortOrder: 2,
    items: [
      { name: "Jollof Rice (per scoop)", price: 700 },
      { name: "Stir Fry Spaghetti (per scoop)", price: 900 },
      { name: "Ewa Agoyin (per scoop)", price: 800 },
      { name: "Fried Rice (per scoop)", price: 1000 },
      { name: "Dirty Rice", price: 1500 },
      { name: "Asun Pasta", price: 1500 },
      { name: "Asun Rice", price: 1500 },
      { name: "Coconut Rice", price: 1200 },
      { name: "Concoction Rice", price: 1200 },
      { name: "White Rice", price: 500 },
      { name: "Village Rice", price: 1500 },
      { name: "Village Pasta", price: 1500 },
      { name: "Ofada Rice", price: 800 },
      { name: "Beans Pottage", price: 900 },
      { name: "Plantain Pottage", price: 1500 },
      { name: "Fried Beans", price: 1500 },
      { name: "Rice and Bean", price: 800 },
      { name: "Caribbean Rice and Peas", price: 1200 },
      { name: "Fried Sweet Potato (4 pcs)", price: 750 },
      { name: "Yamarita (per one)", price: 900 },
      { name: "Burger", price: 4000 },
      { name: "Club Sandwich", price: 4000 },
      { name: "Yam (per piece)", price: 700 },
    ],
  },
  {
    category: "Swallow",
    sortOrder: 3,
    items: [
      { name: "Poundo Yam", price: 700 },
      { name: "Eba (Garri)", price: 700 },
      { name: "Semo", price: 700 },
      { name: "Wheat", price: 700 },
      { name: "Fufu", price: 500 },
      { name: "Amala", price: 500 },
      { name: "Eko", price: 500 },
      { name: "Starch", price: 700 },
    ],
  },
  {
    category: "Soups",
    sortOrder: 4,
    items: [
      { name: "Egusi", price: 1500 },
      { name: "Eforiro", price: 1500 },
      { name: "Ila Alsepo", price: 1500 },
      { name: "Seafood Okro", price: 5500 },
      { name: "Fisherman Soup", price: 7000 },
      { name: "Edikankong", price: 1500 },
      { name: "Afang", price: 1500 },
      { name: "Banga", price: 15000 },
      { name: "White Soup", price: 2000 },
      { name: "Blacksoup", price: 1500 },
      { name: "Oha Soup", price: 2000 },
      { name: "Ogbono", price: 2000 },
      { name: "Egusi Peppersoup", price: 1500 },
      { name: "Ewedu", price: 700 },
      { name: "Gbegiri", price: 700 },
      { name: "Bitterleaf Soup", price: 1500 },
      { name: "Groundnut Soup", price: 2000 },
    ],
  },
  {
    category: "Accompaniment",
    sortOrder: 5,
    items: [
      { name: "Plantain", price: 1000 },
      { name: "Salad", price: 2500 },
      { name: "Moi Moi", price: 800 },
      { name: "Cole Slaw", price: 1000 },
    ],
  },
  {
    category: "Snacks",
    sortOrder: 6,
    items: [
      { name: "Small Chops", price: 250 },
      { name: "Meat Pie", price: 1900 },
      { name: "Sausage Roll", price: 800 },
      { name: "Scotch Egg", price: 800 },
      { name: "Donut", price: 700 },
      { name: "Frank Roll", price: 900 },
      { name: "Fish Pie", price: 900 },
      { name: "Chicken Pie", price: 1200 },
    ],
  },
  {
    category: "Sauce",
    sortOrder: 7,
    items: [
      { name: "Fish Sauce", price: 2000 },
      { name: "Ofada Sauce", price: 2500 },
      { name: "Egg Sauce", price: 1700 },
      { name: "Cornbeef Sauce", price: 2000 },
      { name: "Vicky's Pepper Sauce", price: 2500 },
    ],
  },
];

async function main() {
  console.log("🌱 Seeding database...");

  for (const group of MENU_DATA) {
    const categorySlug = toSlug(group.category);

    // Upsert category
    const category = await prisma.menuCategory.upsert({
      where: { slug: categorySlug },
      update: { name: group.category, sortOrder: group.sortOrder },
      create: {
        name: group.category,
        slug: categorySlug,
        sortOrder: group.sortOrder,
      },
    });

    console.log(`📂 ${group.category} (${group.items.length} items)`);

    // Upsert each item
    for (let i = 0; i < group.items.length; i++) {
      const item = group.items[i];
      const itemSlug = toSlug(item.name);

      await prisma.menuItem.upsert({
        where: { slug_categoryId: { slug: itemSlug, categoryId: category.id } },
        update: { priceNGN: item.price, name: item.name },
        create: {
          name: item.name,
          slug: itemSlug,
          priceNGN: item.price,
          sortOrder: i,
          categoryId: category.id,
        },
      });

      console.log(`   ✓ ${item.name} — ₦${item.price.toLocaleString()}`);
    }

    console.log("");
  }
  const totalItems = await prisma.menuItem.count();
  const totalCategories = await prisma.menuCategory.count();
  console.log(
    `\n✅ Seeded ${totalCategories} categories, ${totalItems} items.`,
  );

  const superadminHash = await bcrypt.hash("admin1234", 12);
  const cashierHash = await bcrypt.hash("cashier123", 12);

  const superadmin = await prisma.user.upsert({
    where: { email: "admin@vickyscuisine.com" },
    update: {},
    create: {
      name: "Vicky Admin",
      email: "admin@vickyscuisine.com",
      passwordHash: superadminHash,
      role: Role.SUPERADMIN,
      isActive: true,
    },
  });

  const cashier = await prisma.user.upsert({
    where: { email: "cashier@vickyscuisine.com" },
    update: {},
    create: {
      name: "Jane Cashier",
      email: "cashier@vickyscuisine.com",
      passwordHash: cashierHash,
      role: Role.CASHIER,
      isActive: true,
    },
  });

  console.log(`✅ Created superadmin: ${superadmin.email}`);
  console.log(`✅ Created cashier: ${cashier.email}`);
  console.log("\n📋 Login credentials:");
  console.log("   Superadmin → admin@vickyscuisine.com / admin1234");
  console.log("   Cashier    → cashier@vickyscuisine.com / cashier123");
  console.log("\n⚠️  Change these passwords immediately after first login!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
