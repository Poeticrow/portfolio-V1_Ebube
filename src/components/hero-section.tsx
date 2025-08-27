'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants}>
          <Badge variant="secondary" className="mb-6">
            Available for new opportunities
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-accent">Ebube Ibifuro Nwanze</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance"
          variants={itemVariants}
        >
          Full-Stack Web Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
          variants={itemVariants}
        >
          I craft beautiful, functional web experiences using modern
          technologies. Passionate about clean code, user experience, and
          bringing ideas to life through thoughtful design and development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          {[
            {
              href: 'https://github.com/Poeticrowhttps://github.com/Poeticrow',
              icon: Github,
              label: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/ebube-nwanze-428641259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
              icon: Linkedin,
              label: 'LinkedIn',
            },
            { href: 'ebubenwanze@gmail.com', icon: Mail, label: 'Email' },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
