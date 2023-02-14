import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'wt8m7oas',
  dataset: 'production',
  apiVersion: '2023-02-11',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
