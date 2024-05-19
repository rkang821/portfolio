import Container from '@/components/shared/container'
import BlogPostList from './blogpost'

export default function BlogSection() {
  return (
    <>
      <Container className="pb-10 pt-14 max-sm:pt-24">
        <div className="prose flex flex-col items-center  gap-6 dark:prose-invert">
          <header>
            <h2>
              <span className="text-blue-500 dark:text-blue-300">{'>'}</span>{' '}
              Blog Posts
            </h2>
            <h3>
              {' '}
              Dive into my ongoing collection of reflections and narratives,
              where I share real-world experiences, lessons learned from various
              cases, and my evolving thoughts on the dynamic field of incident
              response. This section serves as a living diary of my journey and
              discoveries in the realm of DFIR.
            </h3>
          </header>
        </div>
      </Container>
      <Container>
        <BlogPostList />
      </Container>
    </>
  )
}
