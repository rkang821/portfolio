import Link from 'next/link'
import { Container } from '@/components/container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className=" hover:text-blue-500 dark:hover:text-blue-300">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <Container
      id="footer"
      className="border-t border-zinc-300 pb-10 pt-10 dark:border-zinc-700/40 max-sm:py-5"
    >
      {/* Footer Nav Section */}
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-8">
        <div className="flex flex-wrap justify-center gap-x-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 max-sm:hidden">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href="/#blogs">Blog Posts</NavLink>
          <NavLink href="/#fundamentals">Fundamentals</NavLink>
        </div>
        <div className="text-right text-sm text-zinc-400 dark:text-zinc-500 max-sm:text-center">
          <p>
            Built and designed by Rachel Kang &copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </Container>
  )
}
