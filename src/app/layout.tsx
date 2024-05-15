import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { ThemeProvider } from '@/components/themeprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: 'images/favicon/favicon.ico',
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: 'website',
    locale: 'en_US',
  },
  authors: [
    {
      name: 'Rachel Kang',
      url: 'https://rachelkang.xyz',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="min-h-screen antialiased"
      suppressHydrationWarning
    >
      <body id="app" className={`${inter.className} bg-lightBg dark:bg-darkBg`}>
        <div
          id="banner"
          className="absolute left-0 top-0 z-50 inline-block h-2 w-full bg-gradient-to-r from-bannerGradientStart to-bannerGradientEnd p-1"
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
