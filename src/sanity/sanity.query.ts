// import { groq } from 'next-sanity';
// import client from './sanity.client';
// import { Blog, Job, Profile, Project } from '@/types';

// // export async function getProfile() {
// //   return client.fetch(
// //     groq`*[_type == "profile"][0] {
// //   fullName,
// //   headline,
// //   profileImage {
// //     asset->{
// //       url
// //     },
// //     alt
// //   },
// //   shortBio,
// //   email,
// //   location,
// //   fullBio,
// //   "resumeURL": resumeURL.asset->url
// // }`
// //   );
// // }

// // export async function getJobs() {
// //   return client.fetch(groq`*[_type == "job"] | order(startDate desc) {
// //   title,
// //   company,
// //   location,
// //   startDate,
// //   endDate,
// //   description
// // }`);
// // }
// // export async function getBlogPosts() {
// //   return client.fetch(groq`*[_type == "blog"] | order(publishedAt desc) {
// //   title,
// //   slug,
// //   publishedAt,
// //   excerpt,
// //   mainImage {
// //     asset->{
// //       url
// //     }
// //   }
// // }`);
// // }
// // export async function getProjects() {
// //   return client.fetch(groq`*[_type == "project"] | order(publishedAt desc) {
// //   title,
// //   slug,
// //   description,
// //   "imageUrl": mainImage.asset->url,
// //   githubURL,
// //   liveURL,
// //   techStack
// // }`);
// // }
// // export async function getProject(slug: string) {
// //   return client.fetch(
// //     groq`*[_type == "project" && slug.current == $slug][0]{
// //       _id,
// //       title,
// //       description,
// //       technologies,
// //       "imageUrl": mainImage.asset->url
// //     }`,
// //     { slug }
// //   );
// // }

// // // ✅ Fetch Profile Data
// // export async function getProfile(): Promise<Profile> {
// //   return await client.fetch(
// //     groq`*[_type == "profile"][0]{
// //       _id,
// //       fullName,
// //       headline,
// //       "profileImage": {
// //         "asset": profileImage.asset->url,
// //         "alt": profileImage.alt
// //       },
// //       shortBio,
// //       email,
// //       location,
// //       fullBio,
// //       "resumeURL": resumeURL.asset->url
// //     }`
// //   );
// // }

// // ✅ Fetch All Jobs
// export async function getJobs(): Promise<Job[]> {
//   return await client.fetch(
//     groq`*[_type == "job"] | order(startDate desc) {
//       _id,
//       company,
//       position,
//       startDate,
//       endDate,
//       description
//     }`,
//   );
// }

// // ✅ Fetch All Blogs
// export async function getBlogs(): Promise<Blog[]> {
//   return await client.fetch(
//     groq`*[_type == "blog"] | order(publishedAt desc) {
//       _id,
//       title,
//       "slug": slug.current,
//       publishedAt,
//       content,
//       "author": {
//         name,
//         "image": author.image.asset->url
//       }
//     }`,
//   );
// }

// // ✅ Fetch a Single Blog by Slug
// export async function getBlogBySlug(slug: string): Promise<Blog | null> {
//   return await client.fetch(
//     groq`*[_type == "blog" && slug.current == $slug][0]{
//       _id,
//       title,
//       "slug": slug.current,
//       publishedAt,
//       content,
//       "author": {
//         name,
//         "image": author.image.asset->url
//       }
//     }`,
//     { slug },
//   );
// }

// // ✅ Fetch All Projects
// export async function getProjects(): Promise<Project[]> {
//   return await client.fetch(
//     groq`*[_type == "project"] | order(_createdAt desc) {
//       _id,
//       title,
//       "slug": slug.current,
//       description,
//       technologies,
//       "mainImage": {
//         "asset": mainImage.asset->url
//       },
//       githubUrl,
//       liveUrl
//     }`,
//   );
// }

// // ✅ Fetch a Single Project by Slug
// export async function getProjectBySlug(slug: string): Promise<Project | null> {
//   return await client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       title,
//       "slug": slug.current,
//       description,
//       technologies,
//       "mainImage": {
//         "asset": mainImage.asset->url
//       },
//       githubUrl,
//       liveUrl
//     }`,
//     { slug },
//   );
// }
