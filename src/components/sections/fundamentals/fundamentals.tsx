'use client'

import Container from '@/components/shared/container'
import SubTabSection from './subtabs'

export default function FundamentalsSection() {
  return (
    <>
      <Container className="pb-14 pt-14 max-sm:pt-24">
        {/* Top Level Heading */}
        <header className="prose dark:prose-invert">
          <h2>
            <span className="text-blue-500 dark:text-blue-300">{'>'}</span>{' '}
            Fundamentals
          </h2>
          <h3>
            {' '}
            I frequently get asked what it takes to get into incident response,
            or the typical activities involved in this role. I&apos;ve compiled
            a thorough introduction to DFIR, highlighting the types of incidents
            typically encountered, the strategic approaches to managing these
            incidents, the essential tools utilized by professionals.{' '}
          </h3>
        </header>
      </Container>
      <Container>
        <SubTabSection />
      </Container>
    </>
  )
}
