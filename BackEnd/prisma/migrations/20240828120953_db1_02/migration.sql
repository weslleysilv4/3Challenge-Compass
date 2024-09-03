/*
  Warnings:

  - The primary key for the `CategoriesOnTour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `CategoriesOnTour` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CategoriesOnTour" (
    "tourId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("tourId", "categoryId"),
    CONSTRAINT "CategoriesOnTour_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnTour_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CategoriesOnTour" ("categoryId", "tourId") SELECT "categoryId", "tourId" FROM "CategoriesOnTour";
DROP TABLE "CategoriesOnTour";
ALTER TABLE "new_CategoriesOnTour" RENAME TO "CategoriesOnTour";
CREATE TABLE "new_Rating" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reviewId" INTEGER NOT NULL,
    "services" REAL NOT NULL DEFAULT 0,
    "prices" REAL NOT NULL DEFAULT 0,
    "locations" REAL NOT NULL DEFAULT 0,
    "food" REAL NOT NULL DEFAULT 0,
    "amenities" REAL NOT NULL DEFAULT 0,
    "roomComfortAndQuality" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Rating_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Rating" ("_id", "amenities", "food", "locations", "prices", "reviewId", "roomComfortAndQuality", "services") SELECT "_id", "amenities", "food", "locations", "prices", "reviewId", "roomComfortAndQuality", "services" FROM "Rating";
DROP TABLE "Rating";
ALTER TABLE "new_Rating" RENAME TO "Rating";
CREATE TABLE "new_Review" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("_id", "comment", "createdAt", "email", "name", "tourId") SELECT "_id", "comment", "createdAt", "email", "name", "tourId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE INDEX "Review_tourId_idx" ON "Review"("tourId");
CREATE TABLE "new_User" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("_id", "email", "image", "password") SELECT "_id", "email", "image", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Tour_country_city_idx" ON "Tour"("country", "city");
