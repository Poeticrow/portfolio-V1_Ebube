"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { urlFor, type Project } from "@/lib/sanity"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </Button>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{project.title}</h1>
          {project.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          {project.liveUrl && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </Link>
            </Button>
          )}

          {project.githubUrl && (
            <Button asChild variant="outline">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="relative h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(project.image).width(800).height(600).url() || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
