import HomePage from '@/app/pages/home'
import AboutSection from '@/app/pages/about'
import ExperienceSection from '@/app/pages/experience'
import FundamentalsSection from '@/app/pages/fundamentals/fundamentals'
import BlogSection from '@/app/pages/blog'

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
      {/*  --- Fundamentals Section -- */}
      <div id="fundamentals">
        <FundamentalsSection />
      </div>
      {/*  --- Blog Section -- */}
      <div id="blog">
        <BlogSection />
      </div>
    </>
  )
}
