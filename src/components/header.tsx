import Link from 'next/link'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ThemeSwitcherButton } from './themeswitcherbutton'
import { Container } from '@/components/container'
import {
  ChevronDownIcon,
  CloseIcon,
  HomeIcon,
  AboutIcon,
  ExperienceIcon,
  FundamentalsIcon,
  BlogIcon,
} from '@/components/icons'

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-2 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/#about">About</MobileNavItem>
                <MobileNavItem href="/#experience">Experience</MobileNavItem>
                <MobileNavItem href="/#blogs">Blog Posts</MobileNavItem>
                <MobileNavItem href="/#fundamentals">
                  Fundamentals
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          'hover:text-blue-500 dark:hover:text-blue-300',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-opacity-100 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-opacity-100 dark:text-zinc-200 dark:shadow-lg dark:shadow-zinc-300/5 dark:ring-white/10">
        <NavItem href="/">
          <HomeIcon />
        </NavItem>
        <NavItem href="/#about">
          <AboutIcon />{' '}
        </NavItem>
        <NavItem href="/#experience">
          <ExperienceIcon />
        </NavItem>
        <NavItem href="/#blogs">
          <BlogIcon />
        </NavItem>
        <NavItem href="/#fundamentals">
          <FundamentalsIcon />
        </NavItem>
      </ul>
    </nav>
  )
}

export default function Header() {
  return (
    <Container id="header" className="sticky top-0 z-50">
      <div className="flex max-w-5xl justify-between pt-10 max-sm:justify-end max-sm:gap-x-2">
        <div className="w-[48px]"></div>
        <div>
          <MobileNavigation className="pointer-events-auto md:hidden" />
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
        </div>
        <ThemeSwitcherButton />
      </div>
    </Container>
  )
}
