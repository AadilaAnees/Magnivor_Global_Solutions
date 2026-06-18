import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Economic Trends", value: "Economic Trends" },
          { title: "Taxation Updates", value: "Taxation Updates" },
          { title: "Financial Strategy", value: "Financial Strategy" },
          { title: "Corporate Governance", value: "Corporate Governance" },
          { title: "Business Intelligence", value: "Business Intelligence" },
          { title: "Other", value: "Other" },
        ],
      },
    }),
    defineField({ name: "author", type: "string" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
