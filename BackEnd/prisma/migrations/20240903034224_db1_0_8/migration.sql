/*
  Warnings:

  - You are about to drop the column `country` on the `Tour` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reviewId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryId` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Country" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "isoCode" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "area" REAL NOT NULL,
    "timeZone" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "timeToTravel" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
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
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tour_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tour" ("_id", "city", "continent", "createdAt", "duration", "finalDate", "image", "initialDate", "initialRatingAverage", "latitude", "longitude", "maxGroupSize", "minAge", "name", "overview", "price", "updatedAt") SELECT "_id", "city", "continent", "createdAt", "duration", "finalDate", "image", "initialDate", "initialRatingAverage", "latitude", "longitude", "maxGroupSize", "minAge", "name", "overview", "price", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Rating_reviewId_key" ON "Rating"("reviewId");
