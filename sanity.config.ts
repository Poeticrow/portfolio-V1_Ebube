import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Sanity Portfolio Nextjs site',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
