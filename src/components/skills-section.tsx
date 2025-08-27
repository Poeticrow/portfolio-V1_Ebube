"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { client, type Skill } from "@/lib/sanity"

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const query = `*[_type == "skill"] | order(category asc, level desc) {
          _id,
          name,
          category,
          level
        }`
        const data = await client.fetch(query)
        setSkills(data)
      } catch (error) {
        console.error("Error fetching skills:", error)
        // Fallback to mock data
        setSkills(mockSkills)
      }
    }

    fetchSkills()
  }, [])

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  const categoryTitles: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & DevOps",
    design: "Design",
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Skills & Technologies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <Card key={category} className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">{categoryTitles[category] || category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill._id} variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

// Mock data for demo
const mockSkills: Skill[] = [
  { _id: "1", name: "React", category: "frontend", level: 5 },
  { _id: "2", name: "Next.js", category: "frontend", level: 5 },
  { _id: "3", name: "TypeScript", category: "frontend", level: 4 },
  { _id: "4", name: "Tailwind CSS", category: "frontend", level: 5 },
  { _id: "5", name: "Vue.js", category: "frontend", level: 4 },
  { _id: "6", name: "Node.js", category: "backend", level: 4 },
  { _id: "7", name: "Express", category: "backend", level: 4 },
  { _id: "8", name: "Python", category: "backend", level: 3 },
  { _id: "9", name: "PostgreSQL", category: "database", level: 4 },
  { _id: "10", name: "MongoDB", category: "database", level: 3 },
  { _id: "11", name: "Redis", category: "database", level: 3 },
  { _id: "12", name: "Git", category: "tools", level: 5 },
  { _id: "13", name: "Docker", category: "tools", level: 3 },
  { _id: "14", name: "AWS", category: "tools", level: 3 },
  { _id: "15", name: "Figma", category: "design", level: 4 },
]
