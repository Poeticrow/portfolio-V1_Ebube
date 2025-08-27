export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
}
