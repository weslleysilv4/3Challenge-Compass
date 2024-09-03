import { z } from "zod";

const searchSchema = z.object({
  destination: z.string().optional(),
  categories: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  guests: z.string().optional(),
});
export type SearchSchema = z.infer<typeof searchSchema>;
export { searchSchema };
