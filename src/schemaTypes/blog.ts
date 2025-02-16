import { defineField } from "sanity";

import { BiBookOpen } from "react-icons/bi";

const blog = {
  name: "blog",
  title: "Blog Post",
  type: "document",
  icon: BiBookOpen,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "profile" }],
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "web-development" },
          { title: "Design", value: "design" },
          { title: "Personal Growth", value: "personal-growth" },
          { title: "Career", value: "career" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
};

export default blog;
