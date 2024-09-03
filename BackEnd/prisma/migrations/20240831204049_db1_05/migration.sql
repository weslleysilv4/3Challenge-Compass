/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `anonymous` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `continent` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Rating";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "anonymous" BOOLEAN NOT NULL,
    "averageRating" REAL NOT NULL DEFAULT 0,
    "services" REAL NOT NULL DEFAULT 0,
    "prices" REAL NOT NULL DEFAULT 0,
    "locations" REAL NOT NULL DEFAULT 0,
    "food" REAL NOT NULL DEFAULT 0,
    "amenities" REAL NOT NULL DEFAULT 0,
    "roomComfortAndQuality" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("_id", "comment", "createdAt", "email", "name", "tourId") SELECT "_id", "comment", "createdAt", "email", "name", "tourId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE INDEX "Review_tourId_idx" ON "Review"("tourId");
CREATE TABLE "new_Tour" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "price" REAL NOT NULL,
    "maxGroupSize" INTEGER NOT NULL,
    "minAge" INTEGER NOT NULL,
    "initialDate" DATETIME NOT NULL,
    "finalDate" DATETIME NOT NULL,
    "initialRatingAverage" REAL NOT NULL DEFAULT 0,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("_id", "city", "country", "createdAt", "duration", "finalDate", "image", "initialDate", "initialRatingAverage", "latitude", "longitude", "maxGroupSize", "minAge", "name", "price", "updatedAt") SELECT "_id", "city", "country", "createdAt", "duration", "finalDate", "image", "initialDate", "initialRatingAverage", "latitude", "longitude", "maxGroupSize", "minAge", "name", "price", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
CREATE INDEX "Tour_country_city_idx" ON "Tour"("country", "city");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
