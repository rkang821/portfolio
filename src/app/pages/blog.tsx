import { type Metadata } from 'next'
import { Container } from '@/components/container'

export const metadata: Metadata = {
    title: 'My Blog',
    description: 'My thoughts',
  }
  
  export default function BlogSection() {
    return (
      <>
        <Container className="pb-14 pt-14 max-sm:pt-24">
          <div className="prose flex flex-col items-center  gap-6 dark:prose-invert">
            <header>
              <h2>
                <span className="text-blue-500 dark:text-blue-300">{'>'}</span> Blogs
              </h2>
              <h3>
                {' '}
                In my investigations, I often encounter fascinating concepts that
                spark my curiosity. Here, you&apos;ll find a rolling collection of
                my written and verbal insights as a subject matter expert, and
                several certifications I&apos;ve pursued to deepen my expertise in
                areas of cybersecurity.
              </h3>
            </header>
          </div>
        </Container>
        <Container>
          <div className="flex max-lg:flex-col">
          </div>
        </Container>
      </>
    )
  }
  