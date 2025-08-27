export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: any;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  publishedAt: string;
}

export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image: any;
  email: string;
  resume: any;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  level: number;
}
