import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be between 2 and 50 characters" })
    .max(50, { message: "Name must be between 2 and 50 characters" })
    .refine((val) => val.trim().length > 0, {
      message: "Name is required",
    }),
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
  passwordConfirm: z
    .string()
    .min(1, { message: "Password confirmation is required" }),
});
