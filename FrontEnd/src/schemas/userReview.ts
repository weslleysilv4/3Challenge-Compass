import { z } from "zod";

export const reviewSchema = z.object({
  tourId: z.string().min(1, "Tour ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment should have at least 10 characters"),
  services: z
    .number()
    .min(1, "Services must be between 1 and 5")
    .max(5, "Services must be between 1 and 5"),
  prices: z
    .number()
    .min(1, "Prices must be between 1 and 5")
    .max(5, "Prices must be between 1 and 5"),
  locations: z
    .number()
    .min(1, "Locations must be between 1 and 5")
    .max(5, "Locations must be between 1 and 5"),
  food: z
    .number()
    .min(1, "Food must be between 1 and 5")
    .max(5, "Food must be between 1 and 5"),
  amenities: z
    .number()
    .min(1, "Amenities must be between 1 and 5")
    .max(5, "Amenities must be between 1 and 5"),
  roomComfortAndQuality: z
    .number()
    .min(1, "Room Comfort and Quality must be between 1 and 5")
    .max(5, "Room Comfort and Quality must be between 1 and 5"),
  anonymous: z.boolean(),
  userId: z.string().min(1, "User ID is required"),
});

export type ReviewProps = z.infer<typeof reviewSchema>;
