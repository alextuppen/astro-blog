import { defineCollection } from "astro:content";
import {
  blogSchema,
  educationSchema,
  jobSchema,
  recipeSchema,
} from "../schemas";

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const education = defineCollection({
  type: "data",
  schema: educationSchema,
});

const experiences = defineCollection({
  type: "data",
  schema: jobSchema,
});

const recipes = defineCollection({
  type: "data",
  schema: recipeSchema,
});

export const collections = { blog, education, experiences, recipes };
