import HomePage from '@/app/pages/home'
import AboutSection from '@/app/pages/about'
import ExperienceSection from '@/app/pages/experience'
import ConceptsSection from '@/app/pages/concepts/concepts'

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
      {/*  --- Concepts Section -- */}
      <div id="concepts">
        <ConceptsSection />
      </div>
    </>
  )
}
