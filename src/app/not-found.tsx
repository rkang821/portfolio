import Button from '@/components/buttons'
import { Container } from '@/components/container'

export default function NotFound() {
  return (
    <Container className="*:text-center">
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 max-sm:text-5xl">
        404: Page not found
      </h1>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button href="/" variant="secondary" className="mt-4">
        Go Home
      </Button>
    </Container>
  )
}
