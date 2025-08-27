'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download, MapPin } from 'lucide-react';
import { client, urlFor, type Profile } from '@/lib/sanity';
import { motion } from 'framer-motion';

export function AboutHero() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const query = `*[_type == "profiles"][0] {
          _id,
          name,
          title,
          bio,
          image,
          email,
          resume,
          socialLinks
        }`;
        const data = await client.fetch(query);
        console.log(data);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Fallback to mock data
        setProfile(mockProfile);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="animate-pulse mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-48 h-48 bg-muted rounded-full"></div>
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-6 bg-muted rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          variants={avatarVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Avatar className="w-48 h-48">
            <AvatarImage
              src={
                profile.image
                  ? urlFor(profile.image).width(300).height(300).url()
                  : undefined
              }
              alt={profile.name}
            />
            <AvatarFallback className="text-4xl font-semibold bg-accent/10 text-accent">
              {profile.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Profile Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
            variants={itemVariants}
          >
            {profile.name}
          </motion.h1>
          <motion.h2
            className="text-xl text-accent mb-4"
            variants={itemVariants}
          >
            {profile.title}
          </motion.h2>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6"
            variants={itemVariants}
          >
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </motion.div>

          <motion.p
            className="text-muted-foreground leading-relaxed mb-8 text-pretty"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild>
                <a href={`mailto:${profile.email}`}>Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Mock data for demo
const mockProfile: Profile = {
  _id: '1',
  name: 'John Doe',
  title: 'Full-Stack Web Developer',
  bio: "I'm a passionate web developer with over 5 years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in modern web technologies and love turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying the great outdoors.",
  image: null,
  email: 'john@example.com',
  resume: null,
  socialLinks: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
};
