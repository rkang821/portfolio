import React, { useEffect, useState } from 'react'
import { DoubleChevronUp } from './icons'

const scrollButtonStyle =
  'fixed bottom-5 left-5 m-3 p-1 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 max-sm:bottom-3 max-sm:left-3'

function scrollToTop() {
  window.scrollTo({
    left: window.scrollX,
    top: 0,
    behavior: 'smooth',
  })
}

export default function ScrollButton(
  props: React.ComponentPropsWithoutRef<'svg'>,
) {
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
