import { AboutHero } from "@/components/about-hero"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </main>
  )
}
