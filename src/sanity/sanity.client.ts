import { createClient, type ClientConfig } from '@sanity/client';
import urlBuilder from '@sanity/image-url';

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-02-05',
  useCdn: false,
};

const client = createClient(config);

export default client;

const builders = urlBuilder(client);

export function urlFor(source: any) {
  return builders.image(source);
}
