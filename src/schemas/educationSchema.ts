import { z } from "astro:content";
import { expEduDetailsSchema } from "./expEduDetailsSchema";

export const educationSchema = z.object({
  details: expEduDetailsSchema,
});
