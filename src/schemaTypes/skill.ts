export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Database", value: "database" },
          { title: "Tools", value: "tools" },
          { title: "Design", value: "design" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "level",
      title: "Proficiency Level (1-5)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
    },
  },
}
