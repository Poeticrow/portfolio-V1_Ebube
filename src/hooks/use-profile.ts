'use client';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';

export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image?: { asset: { url: string } };
  email: string;
  resume?: { asset: { url: string } };
  socialLinks?: { github?: string; linkedin?: string; email?: string };
}

const mockProfile: Profile = {
  _id: 'mock',
  name: 'Ebube Ibifuro Nwanze',
  title: 'Full-Stack Web Developer',
  bio: 'I craft beautiful, functional web experiences using modern technologies. Passionate about clean code, user experience, and bringing ideas to life through thoughtful design and development.',
  email: 'ebubenwanze@gmail.com',
  resume: { asset: { url: '/resume.pdf' } },
  socialLinks: {
    github: 'https://github.com/Poeticrow',
    linkedin: 'https://www.linkedin.com/in/ebube-nwanze-428641259',
    email: 'mailto:ebubenwanze@gmail.com',
  },
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

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
          resume {
            asset-> {
              url
            }
          },
          socialLinks
        }`;
        const data = await client.fetch(query);
        setProfile(data || mockProfile);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setProfile(mockProfile);
      }
    };
    fetchProfile();
  }, []);

  return profile;
}
