'use client'

import Footer from './footer'
import Header from './header'
import ScrollButton from './scrollbutton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="content"
      className="flex min-h-screen w-full flex-col justify-between"
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollButton />
    </div>
  )
}
