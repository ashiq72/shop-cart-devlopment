import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .refine((val) => val.trim().length > 0, {
      message: "Email is required",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine((val) => val.trim().length > 0, {
      message: "Password is required",
    }),
});
