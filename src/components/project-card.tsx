"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { urlFor, type Project } from "@/lib/sanity"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 bg-muted overflow-hidden">
          {project.image ? (
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src={urlFor(project.image).width(400).height(300).url() || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-mono text-accent/40">{project.title.charAt(0)}</div>
            </motion.div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
            </motion.div>
          )}
        </div>

        <CardContent className="p-6">
          {/* Project Title */}
          <motion.h3
            className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          {/* Project Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies?.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * techIndex }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.technologies && project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="sm" className="w-full">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </motion.div>
            )}

            {project.githubUrl && (
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
