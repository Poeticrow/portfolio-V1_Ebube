import { BiBriefcase } from "react-icons/bi";
import { defineField } from "sanity";

const job = {
  name: "job",
  title: "Job Experience",
  type: "document",
  icon: BiBriefcase,
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
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
      title: "Currently Working Here?",
      type: "boolean",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
};

export default job;
