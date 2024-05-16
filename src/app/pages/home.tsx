'use client'

import Link from 'next/link'
import { Container } from '@/components/container'
import { ReactTyped } from 'react-typed'
import { Button } from '@/components/buttons'
import {
  LinkedInIcon,
  GitHubIcon,
  MailIcon,
  ArrowDownTray,
} from '@/components/icons'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 p-1"
      {...props}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

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
                'Blue Teaming',
                'Digital Forensics',
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
          <div className="space-x-3 border-r-[0.15rem] border-blue-500/90 pr-5 max-sm:border-none">
            <Button
              href="/documents/RK_Resume2024.pdf"
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
              className="opacity-60 hover:opacity-100"
            >
              Resume
              <ArrowDownTray className="h-4 w-4 stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>

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
            Based out of Chicago, IL, I lead teams in response to cybersecurity
            incidents, ranging from{' '}
            <span className="font-semibold"> minor anomalies </span> to{' '}
            <span className="font-semibold">significant data breaches</span> and{' '}
            <span className="font-semibold">privacy incidents</span>.
          </p>
          <p>
            With a keen interest in cloud forensics, particularly within{' '}
            <span className="font-semibold">Microsoft&apos;s Azure </span>
            ecosystem, I specialize in managing complex incidents and navigating
            high-stakes environments breaches within cloud platforms. I&apos;m
            fascinated by the intricacies and complexities emerging within cloud
            forensics and the evolving challenges posed by such emerging
            threats.
          </p>
        </div>
      </div>
    </Container>
  )
}
