import { z } from "astro:content";
import { educationSchema } from "./educationSchema";

export const technologySchema = z.union([
  z.literal("apollo"),
  z.literal("urql"),
  z.literal("codegen"),
  z.literal("dotNet"),
  z.literal("gatsby"),
  z.literal("nextjs"),
  z.literal("react"),
  z.literal("graphql"),
  z.literal("node"),
  z.literal("postgresql"),
  z.literal("sccm"),
  z.literal("cSharp"),
  z.literal("css"),
  z.literal("html"),
  z.literal("javascript"),
  z.literal("powerShell"),
  z.literal("typescript"),
  z.literal("aws"),
  z.literal("azure"),
  z.literal("heroku"),
  z.literal("eslint"),
  z.literal("git"),
  z.literal("npm"),
  z.literal("prettier"),
  z.literal("yarn"),
]);

export const technologyAlternativeSchema = z.object({
  key: technologySchema,
  title: z.string(),
  alt: z.string(),
});

export const experienceSchema = educationSchema.extend({
  technologies: z
    .array(z.union([technologySchema, technologyAlternativeSchema]))
    .optional(),
  description: z.string().array(),
});
