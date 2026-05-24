-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERADMIN', 'ADMIN', 'CASHIER');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'TRANSFER', 'POS');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('UNPAID', 'PAID', 'DEPOSIT_PAID', 'FULLY_PAID', 'REFUNDED');

-- CreateEnum
CREATE TYPE "OrderSource" AS ENUM ('CUSTOMER', 'ADMIN');

-- CreateEnum
CREATE TYPE "MenuCategory" AS ENUM ('RICE', 'SOUP', 'SWALLOW', 'PROTEIN', 'SIDE', 'SMALL_CHOPS', 'DRINKS', 'DESSERT');

-- CreateEnum
CREATE TYPE "FoodPackStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DeliveryMethod" AS ENUM ('PICKUP', 'DELIVERY');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('WEDDING', 'BIRTHDAY', 'CORPORATE', 'CHURCH_COMMUNITY', 'GRADUATION', 'OWAMBE', 'NAMING_CEREMONY', 'BULK_ORDER', 'OTHER');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('FULL_CATERING', 'DELIVERY_ONLY', 'BUFFET_SETUP', 'PACKED_MEALS', 'SMALL_CHOPS_ONLY');

-- CreateEnum
CREATE TYPE "VenueType" AS ENUM ('INDOOR', 'OUTDOOR', 'OPEN_FIELD', 'HALL', 'HOME', 'NOT_SPECIFIED');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('PENDING_REVIEW', 'QUOTE_SENT', 'CONFIRMED', 'DEPOSIT_PAID', 'FULLY_PAID', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CASHIER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "active_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "active_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT,
    "items" JSONB NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMethod" "PaymentMethod",
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "source" "OrderSource" NOT NULL DEFAULT 'CUSTOMER',
    "notes" TEXT,
    "createdById" TEXT,
    "confirmedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "confirmedAt" TIMESTAMP(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "userName" TEXT,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "meta" JSONB,
    "ip" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "MenuCategory" NOT NULL,
    "priceNGN" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isSpicy" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "menu_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_pack_orders" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "status" "FoodPackStatus" NOT NULL DEFAULT 'PENDING',
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerEmail" TEXT,
    "deliveryMethod" "DeliveryMethod" NOT NULL DEFAULT 'DELIVERY',
    "deliveryAddress" TEXT,
    "deliveryDate" TIMESTAMP(3),
    "specialNotes" TEXT,
    "totalAmountNGN" DOUBLE PRECISION NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_pack_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_pack_order_items" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "orderId" TEXT NOT NULL,
    "menuItemId" TEXT NOT NULL,

    CONSTRAINT "food_pack_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_orders" (
    "id" TEXT NOT NULL,
    "orderRef" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientPhone" TEXT NOT NULL,
    "clientEmail" TEXT,
    "clientWhatsApp" TEXT,
    "eventType" "EventType" NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventTime" TEXT,
    "guestCount" INTEGER NOT NULL,
    "venueType" "VenueType" NOT NULL DEFAULT 'NOT_SPECIFIED',
    "venueAddress" TEXT,
    "venueLGA" TEXT,
    "serviceType" "ServiceType" NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "dietaryNotes" TEXT,
    "specialRequests" TEXT,
    "perHeadRateNGN" DOUBLE PRECISION,
    "subtotalNGN" DOUBLE PRECISION,
    "deliveryFeeNGN" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "setupFeeNGN" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discountNGN" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalNGN" DOUBLE PRECISION,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "depositAmtNGN" DOUBLE PRECISION,
    "depositPaidAt" TIMESTAMP(3),
    "balanceDueNGN" DOUBLE PRECISION,
    "balancePaidAt" TIMESTAMP(3),
    "setupTime" TEXT,
    "servingStaffCount" INTEGER NOT NULL DEFAULT 0,
    "cleanupIncluded" BOOLEAN NOT NULL DEFAULT false,
    "equipmentList" TEXT[],
    "internalNotes" TEXT,
    "quoteSentAt" TIMESTAMP(3),
    "confirmedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_menu_selections" (
    "id" TEXT NOT NULL,
    "quantityPerHead" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "totalQuantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "notes" TEXT,
    "eventOrderId" TEXT NOT NULL,
    "menuItemId" TEXT NOT NULL,

    CONSTRAINT "event_menu_selections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_payments" (
    "id" TEXT NOT NULL,
    "amountNGN" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "reference" TEXT,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,
    "eventOrderId" TEXT NOT NULL,

    CONSTRAINT "event_payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "active_sessions_userId_key" ON "active_sessions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "active_sessions_sessionId_key" ON "active_sessions"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_ref_key" ON "orders"("ref");

-- CreateIndex
CREATE INDEX "orders_ref_idx" ON "orders"("ref");

-- CreateIndex
CREATE INDEX "orders_status_idx" ON "orders"("status");

-- CreateIndex
CREATE INDEX "orders_createdAt_idx" ON "orders"("createdAt");

-- CreateIndex
CREATE INDEX "audit_logs_userId_idx" ON "audit_logs"("userId");

-- CreateIndex
CREATE INDEX "audit_logs_entity_idx" ON "audit_logs"("entity");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "food_pack_orders_orderNumber_key" ON "food_pack_orders"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "event_orders_orderRef_key" ON "event_orders"("orderRef");

-- AddForeignKey
ALTER TABLE "active_sessions" ADD CONSTRAINT "active_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_confirmedById_fkey" FOREIGN KEY ("confirmedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_pack_order_items" ADD CONSTRAINT "food_pack_order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "food_pack_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_pack_order_items" ADD CONSTRAINT "food_pack_order_items_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "menu_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_menu_selections" ADD CONSTRAINT "event_menu_selections_eventOrderId_fkey" FOREIGN KEY ("eventOrderId") REFERENCES "event_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_menu_selections" ADD CONSTRAINT "event_menu_selections_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "menu_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_payments" ADD CONSTRAINT "event_payments_eventOrderId_fkey" FOREIGN KEY ("eventOrderId") REFERENCES "event_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
