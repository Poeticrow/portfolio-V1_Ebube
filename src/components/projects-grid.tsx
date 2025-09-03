'use client';

import { useEffect, useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { client, type Project } from '@/lib/sanity';
import { motion } from 'framer-motion';

export function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          description,
          image,
          technologies,
          githubUrl,
          liveUrl,
          featured,
          publishedAt
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to mock data for demo
        setProjects(mockProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="bg-muted rounded-lg h-48 mb-4"></div>
            <div className="h-4 bg-muted rounded mb-2"></div>
            <div className="h-3 bg-muted rounded w-3/4"></div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project._id} project={project} index={index} />
      ))}
    </motion.div>
  );
}

// Mock data for demo purposes
const mockProjects: Project[] = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    slug: { current: 'ecommerce-platform' },
    description:
      'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: null,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    publishedAt: '2024-01-15T00:00:00Z',
  },
  {
    _id: '2',
    title: 'Task Management App',
    slug: { current: 'task-management' },
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: null,
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/johndoe/taskapp',
    liveUrl: 'https://taskapp-demo.vercel.app',
    featured: true,
    publishedAt: '2024-02-20T00:00:00Z',
  },
  {
    _id: '3',
    title: 'Weather Dashboard',
    slug: { current: 'weather-dashboard' },
    description:
      'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.',
    image: null,
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    featured: false,
    publishedAt: '2024-03-10T00:00:00Z',
  },
  {
    _id: '4',
    title: 'Portfolio Website',
    slug: { current: 'portfolio-website' },
    description:
      'A minimalist portfolio website built with Next.js and Sanity CMS, featuring smooth animations and responsive design.',
    image: null,
    technologies: ['Next.js', 'Sanity', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/johndoe/portfolio',
    liveUrl: 'https://johndoe-portfolio.vercel.app',
    featured: false,
    publishedAt: '2024-04-05T00:00:00Z',
  },
  {
    _id: '5',
    title: 'Blog Platform',
    slug: { current: 'blog-platform' },
    description:
      'A modern blog platform with markdown support, comment system, and SEO optimization built with Next.js.',
    image: null,
    technologies: ['Next.js', 'MDX', 'Prisma', 'NextAuth.js', 'Vercel'],
    githubUrl: 'https://github.com/johndoe/blog',
    liveUrl: 'https://blog-demo.vercel.app',
    featured: false,
    publishedAt: '2024-05-12T00:00:00Z',
  },
  {
    _id: '6',
    title: 'Recipe Finder',
    slug: { current: 'recipe-finder' },
    description:
      'A recipe discovery app that helps users find recipes based on available ingredients with nutritional information.',
    image: null,
    technologies: ['React Native', 'Expo', 'Spoonacular API', 'AsyncStorage'],
    githubUrl: 'https://github.com/johndoe/recipe-finder',
    liveUrl: undefined,
    featured: false,
    publishedAt: '2024-06-18T00:00:00Z',
  },
];
