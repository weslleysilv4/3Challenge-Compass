/*
  Warnings:

  - You are about to drop the column `amenities` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `averageRating` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `food` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `locations` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `prices` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `roomComfortAndQuality` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `Review` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Rating" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reviewId" INTEGER NOT NULL,
    "tourId" TEXT NOT NULL,
    "services" REAL NOT NULL DEFAULT 0,
    "prices" REAL NOT NULL DEFAULT 0,
    "locations" REAL NOT NULL DEFAULT 0,
    "food" REAL NOT NULL DEFAULT 0,
    "amenities" REAL NOT NULL DEFAULT 0,
    "roomComfortAndQuality" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rating_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review" ("_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Rating_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "anonymous" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("_id", "anonymous", "comment", "createdAt", "email", "name", "tourId") SELECT "_id", "anonymous", "comment", "createdAt", "email", "name", "tourId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE INDEX "Review_tourId_idx" ON "Review"("tourId");
CREATE INDEX "Review_userId_idx" ON "Review"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
