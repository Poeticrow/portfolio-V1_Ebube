import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Sanity Portfolio Nextjs site",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  // projectId: "5sw32q3o",
  // dataset: "production",

  basePath: "/studio",
  plugins: [structureTool(), deskTool()],

  schema: {
    types: schemaTypes,
  },
});
