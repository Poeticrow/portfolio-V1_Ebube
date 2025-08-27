import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable")
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  console.warn("Missing NEXT_PUBLIC_SANITY_DATASET environment variable")
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2024-01-01",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Types for our portfolio content
export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  image: any
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  publishedAt: string
}

export interface Profile {
  _id: string
  name: string
  title: string
  bio: string
  image: any
  email: string
  resume: any
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface Skill {
  _id: string
  name: string
  category: string
  level: number
}
