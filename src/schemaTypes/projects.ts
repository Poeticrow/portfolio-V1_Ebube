import { BiFolder } from "react-icons/bi";
import { defineField } from "sanity";
// import { FolderIcon } from "lucide-react";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  icon: BiFolder,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
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
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "A brief overview (max 150 characters)",
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Freelance", value: "freelance" },
          { title: "Open Source", value: "open-source" },
          { title: "Client Project", value: "client" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "currentlyWorking",
      title: "Currently Working on this?",
      type: "boolean",
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
          { title: "Paused", value: "paused" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveURL",
      title: "Live Demo URL",
      type: "url",
    }),
    defineField({
      name: "repoURL",
      title: "GitHub Repository",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Project Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
};

export default project;
