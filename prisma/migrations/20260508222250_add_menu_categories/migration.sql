/*
  Warnings:

  - You are about to drop the column `category` on the `menu_items` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug,categoryId]` on the table `menu_items` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `menu_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "MenuCategory";

-- CreateTable
CREATE TABLE "menu_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "menu_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "menu_categories_slug_key" ON "menu_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_slug_categoryId_key" ON "menu_items"("slug", "categoryId");

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "menu_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
