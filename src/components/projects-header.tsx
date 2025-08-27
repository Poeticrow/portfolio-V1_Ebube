"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Frontend", "Full-Stack", "Mobile", "Design"]

export function ProjectsHeader() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          A collection of projects that showcase my skills in web development, from simple landing pages to complex
          full-stack applications.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="transition-all duration-200"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
