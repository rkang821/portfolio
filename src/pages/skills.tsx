'use client'

import { type Metadata } from 'next'
import { Container } from '@/components/container'
import { useState } from 'react'
import { DFIRPost, ITPost, TKPost, SCPost } from './posts'

export const metadata: Metadata = {
  title: 'My Skills',
  description: 'Things I use daily',
}

export default function SkillsSection() {
  interface Tab {
    id: string
    label: string
    content: JSX.Element
  }
  const tabs: Tab[] = [
    {
      id: 'styled-DFIR',
      label: 'DFIR Overview',
      content: <DFIRPost />,
    },
    {
      id: 'styled-IT',
      label: 'Incident Types',
      content: <ITPost />,
    },
    {
      id: 'styled-TK',
      label: 'DFIR Toolkit',
      content: <TKPost />,
    },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <Container className="pb-14 pt-14 max-sm:pt-24">
      {/* Top Level Heading */}
      <header className="prose dark:prose-invert">
        <h2>
          <span className="text-blue-500 dark:text-blue-300">{'>'}</span> My
          Skillsets
        </h2>
        <h3>
          {' '}
          I frequently get asked what it takes to get into incident response, or
          what I do on a day-to-day basis. I&apos;ve compiled a comprehensive
          overview of the different areas of DFIR, including my steps to
          approaching each types of compromises, tools leveraged, and the
          players in the game.{' '}
        </h3>
      </header>

      {/* Skills Section */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 max-sm:mt-5 max-sm:p-2 max-sm:text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 active:text-blue-500 dark:border-blue-300'
                    : 'hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-styled-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${
              activeTab === tab.id ? '' : 'hidden'
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
      {/* Site Credits */}
      {/* <div className="flex w-full justify-end">
        <div className="text-right prose dark:prose-invert justify-end w-full text-sm tracking-tighter opacity-70 sm:m-0 sm:w-1/3">
        <p>
        This website was built with <Link href="https://nextjs.org/" target="_blank" rel="noreferrer noopener"> Next.js</Link> + <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>.  
        </p>
        Open source + available on GitHub.
        </div>
      </div> */}
    </Container>
  )
}
