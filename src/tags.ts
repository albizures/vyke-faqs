import { z } from "astro/zod";
import type { IconName } from "./icons";

type Tag = z.infer<typeof tagSchema>;
const tagSchema = z.union([
  z.literal("JavaScript"),
  z.literal("CSS"),
  z.literal("VanillaJS"),
  z.literal("HTML"),
  z.literal("TypeScript"),
  z.literal("React.js"),
  z.literal("others"),
]);

export const tagsSchema = z.array(tagSchema).default(["others"]);

export const tagPriority: Record<Tag, number> = {
  "React.js": 10,
  TypeScript: 9,
  VanillaJS: 9,
  JavaScript: 8,
  CSS: 8,
  HTML: 8,
  others: -1,
};

export const tagIcons: Record<Tag, IconName> = {
  JavaScript: "javascript",
  CSS: "css",
  HTML: "html",
  "React.js": "react",
  TypeScript: "typescript",
  VanillaJS: "vanillajs",
  others: "info",
};

export function sortByPriority(tags: Array<Tag>) {
  return tags.toSorted((a, b) => {
    const priorityA = tagPriority[a];
    const priorityB = tagPriority[b];
    if (priorityA > priorityB) {
      return -1;
    }
    if (priorityB > priorityA) {
      return 1;
    }

    return 0;
  });
}
