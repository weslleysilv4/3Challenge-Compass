-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rating" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reviewId" INTEGER NOT NULL,
    "tourId" TEXT NOT NULL,
    "averageRating" REAL NOT NULL DEFAULT 0,
    "services" REAL NOT NULL DEFAULT 0,
    "prices" REAL NOT NULL DEFAULT 0,
    "locations" REAL NOT NULL DEFAULT 0,
    "food" REAL NOT NULL DEFAULT 0,
    "amenities" REAL NOT NULL DEFAULT 0,
    "roomComfortAndQuality" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rating_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Rating_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review" ("_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Rating" ("_id", "amenities", "createdAt", "food", "locations", "prices", "reviewId", "roomComfortAndQuality", "services", "tourId") SELECT "_id", "amenities", "createdAt", "food", "locations", "prices", "reviewId", "roomComfortAndQuality", "services", "tourId" FROM "Rating";
DROP TABLE "Rating";
ALTER TABLE "new_Rating" RENAME TO "Rating";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
