import { PortableTextBlock } from "@sanity/types";

// 🌟 Profile Schema Type
export interface Profile {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  shortBio: string;
  email: string;
  location: string;
  fullBio: PortableTextBlock[];
  resumeURL: string;
}

// 🌟 Job Schema Type
export interface Job {
  _id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // Optional for ongoing jobs
  description: PortableTextBlock[];
}

// 🌟 Blog Schema Type
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  content: PortableTextBlock[];
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
}

// 🌟 Project Schema Type
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  technologies: string[];
  mainImage: {
    asset: {
      url: string;
    };
  };
  githubUrl?: string;
  liveUrl?: string;
}
