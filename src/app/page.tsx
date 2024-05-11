import HomePage from '@/pages/home'
import AboutSection from '@/pages/about'
import ExperienceSection from '@/pages/experience'
import SkillsSection from '@/pages/skills'

export default function Page() {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen items-center justify-center max-sm:min-h-full max-sm:items-center max-sm:py-12"
      >
        <HomePage />
      </div>
      {/*  --- About Me Section -- */}
      <div id="about">
        <AboutSection />
      </div>
      {/*  --- Experience Section -- */}
      <div id="experience">
        <ExperienceSection />
      </div>
      {/*  --- Skillsets Section -- */}
      <div id="skills">
        <SkillsSection />
      </div>
    </>
  )
}
