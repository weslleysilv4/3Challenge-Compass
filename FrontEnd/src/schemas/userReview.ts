import { z } from "zod";

export const reviewSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment should have at least 10 characters"),
  average: z.number().min(1).max(5, "Average must be between 1 and 5"),
  services: z.number().min(1).max(5, "Services rating must be between 1 and 5"),
  prices: z.number().min(1).max(5, "Prices rating must be between 1 and 5"),
  locations: z
    .number()
    .min(1)
    .max(5, "Locations rating must be between 1 and 5"),
  food: z.number().min(1).max(5, "Food rating must be between 1 and 5"),
  amenities: z
    .number()
    .min(1)
    .max(5, "Amenities rating must be between 1 and 5"),
  roomComfortAndQuality: z
    .number()
    .min(1)
    .max(5, "Room comfort and quality rating must be between 1 and 5"),
  createdAt: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : new Date()),
    z.date()
  ),
  anonymous: z.boolean(),
});

export type ReviewProps = z.infer<typeof reviewSchema>;
