'use client'

import { ReactTyped } from 'react-typed'
import Container from '@/components/shared/container'
import { Button } from '@/components/shared/buttons'
import {
  LinkedInIcon,
  GitHubIcon,
  MailIcon,
  ArrowDownTray,
} from '@/components/shared/icons'
import SocialLink from './socials'

export default function HomePage() {
  return (
    <Container>
      <div className="max-lg:row-span-5">
        {/*  --- Home Page Animation -- */}
        <header className="prose justify-start space-y-5 text-4xl font-semibold tracking-tight text-zinc-700 dark:prose-invert dark:text-zinc-100 max-sm:text-center sm:text-5xl">
          <span className="mr-5 text-blue-500 dark:text-blue-300">&gt;</span>Hi,
          I&apos;m Rachel!
          <h1 className="space-y-5 text-3xl tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-4xl">
            {' '}
            Welcome to my portfolio, with all things related to...
          </h1>
          <div>
            <ReactTyped
              className="text-blue-500 dark:text-blue-300"
              strings={[
                'Insider Risk',
                'Detection + Response',
                'Incident Response',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop={true}
              cursorChar="_"
            />
          </div>
        </header>
        {/*  --- Resume/Contact Links -- */}
        <div className="flex items-center justify-start py-7 pl-3 max-sm:flex-col max-sm:justify-center max-sm:space-y-5 max-sm:pl-0">
          <div className="space-x-3 border-r-[0.15rem] border-blue-500/90 sm:pr-5 max-sm:border-none">

            <Button
              href="mailto:kpxrachel@gmail.com"
              variant="secondary"
              className="opacity-60 hover:opacity-100"
            >
              Get In Touch
              <MailIcon className="h-4 w-4 stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
          <div className="flex space-x-3 pl-5 max-sm:justify-center max-sm:pl-0">
            <SocialLink
              href="https://github.com/rkang821"
              aria-label="Follow me on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rkang821/"
              aria-label="Follow me on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
        {/*  --- Home Page Intro -- */}
        <div className="prose space-y-4 text-base dark:prose-invert max-sm:text-center max-sm:text-lg">
          <p>
          Based in San Francisco, I love building and refining security pipelines
          with an emphasis on <span className="font-semibold">automated investigative workflows</span> and&nbsp;
          <span className="font-semibold">scalable detections</span>.
          </p>
          <p>
            Recently, I've been deeply involved with integrating <span className="font-semibold">LLM-driven workflows</span> into security 
            platforms, building tailored detections for complex & highly integrated environments. I'm passionate about the potential of automation 
            in security, but even more passionate about ensuring these workflows remain <span className="font-semibold">transparaent</span>, 
            <span className="font-semibold"> scalable</span>, and  <span className="font-semibold">observable</span>.
          </p>
        </div>
      </div>
    </Container>
  )
}
