import HomePage from '../components/sections/home'
import AboutSection from '../components/sections/about'
import ExperienceSection from '../components/sections/experience'
import BlogSection from '../components/sections/blogs'
import FundamentalsSection from '../components/sections/fundamentals'

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
      {/*  --- Blog Section -- */}
      <div id="blogs">
        <BlogSection />
      </div>
      {/*  --- Fundamentals Section -- */}
      <div id="fundamentals">
        <FundamentalsSection />
      </div>
    </>
  )
}
