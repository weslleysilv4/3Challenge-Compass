/*
  Warnings:

  - You are about to drop the column `ratingAverage` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `image` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialRatingAverage` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "price" REAL NOT NULL,
    "maxGroupSize" INTEGER NOT NULL,
    "minAge" INTEGER NOT NULL,
    "initialDate" DATETIME NOT NULL,
    "finalDate" DATETIME NOT NULL,
    "initialRatingAverage" REAL NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("_id", "city", "country", "createdAt", "duration", "finalDate", "initialDate", "latitude", "longitude", "maxGroupSize", "minAge", "name", "price", "updatedAt") SELECT "_id", "city", "country", "createdAt", "duration", "finalDate", "initialDate", "latitude", "longitude", "maxGroupSize", "minAge", "name", "price", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
