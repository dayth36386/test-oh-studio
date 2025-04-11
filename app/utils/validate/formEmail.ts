import { z } from "zod";

export const FormEmailSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Please enter your message")
});
