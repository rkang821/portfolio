'use client'

import Link from 'next/link'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { DoubleChevronUp } from './icons'

//Primary Button Styles
const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-100 border border-zinc-300 font-medium text-zinc-900 hover:bg-blue-500/50 hover:text-white active:text-zinc-900/60 dark:bg-zinc-800/50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-blue-300/80 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

//Primary Button
export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

//Scroll Button
const scrollButtonStyle =
  'fixed bottom-5 left-5 m-3 p-1 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 max-sm:bottom-3 max-sm:left-3'

function scrollToTop() {
  window.scrollTo({
    left: window.scrollX,
    top: 0,
    behavior: 'smooth',
  })
}

export function ScrollButton(props: React.ComponentPropsWithoutRef<'svg'>) {
  const [show, setShow] = useState(false)

  function updateButtonVisibility() {
    setShow(window.scrollY !== 0)
  }

  useEffect(() => {
    updateButtonVisibility()
    window.addEventListener('scroll', updateButtonVisibility)
    return () => {
      window.removeEventListener('scroll', updateButtonVisibility)
    }
  }, [])

  return (
    <button
      id="scrollup"
      type="button"
      aria-label="Scrolls back up"
      className={`${scrollButtonStyle} ${show ? '' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <DoubleChevronUp
        className="h-4 w-4 stroke-blue-500 transition group-hover:stroke-zinc-900 dark:stroke-blue-300  dark:group-hover:stroke-zinc-200 sm:h-5  sm:w-5"
        {...props}
      />
    </button>
  )
}
