import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().min(1, "Required Field").email("Choose a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type UserLogin = z.infer<typeof userLoginSchema>;
