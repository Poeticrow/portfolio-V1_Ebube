import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, describe what you do",
      validation: (rule) => rule.required().min(40).max(70),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile image",
      options: { hotspot: true, metadata: ["lqip"] },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "email",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) =>
        rule.regex(/^\+?[0-9]{7,15}$/, {
          name: "Valid phone number",
        }),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "portfolioWebsite",
      title: "Portfolio Website",
      type: "url",
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "twitter", title: "Twitter", type: "url" },
      ],
    }),
  ],
};

export default profile;
