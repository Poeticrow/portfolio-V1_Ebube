import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsHeader } from "@/components/projects-header"

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </main>
  )
}
