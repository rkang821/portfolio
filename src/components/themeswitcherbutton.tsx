'use client'

import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@/components/icons'
import { useTheme } from 'next-themes'

export function ThemeSwitcherButton() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      id="themeswitcherbutton"
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-blue-500 dark:hidden sm:h-6 sm:w-6 " />
      <MoonIcon className="hidden h-5 w-5 transition dark:block dark:fill-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-blue-300 sm:h-6 sm:w-6" />
    </button>
  )
}
