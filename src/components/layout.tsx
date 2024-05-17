import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/themeprovider'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { ScrollButton } from '@/components/shared/buttons'

const inter = Inter({ subsets: ['latin'] })

{/* <html
  lang="en"
  className="min-h-screen antialiased"
  suppressHydrationWarning
>
</html> */}

// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url),
//   title: {
//     default: siteConfig.title,
//     template: `%s | ${siteConfig.title}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: 'images/favicon/favicon.ico',
//   },
//   openGraph: {
//     url: siteConfig.url,
//     title: siteConfig.title,
//     description: siteConfig.description,
//     siteName: siteConfig.title,
//     type: 'website',
//     locale: 'en_US',
//   },
//   authors: [
//     {
//       name: 'Rachel Kang',
//       url: 'https://rachelkang.xyz',
//     },
//   ],
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main id="app" className={`${inter.className} bg-lightBg dark:bg-darkBg`}>
      <div
        id="banner"
        className="absolute left-0 top-0 z-50 inline-block h-2 w-full bg-gradient-to-r from-bannerGradientStart to-bannerGradientEnd p-1"
      />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div
          id="content"
          className="flex min-h-screen w-full flex-col justify-between"
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollButton />
        </div>
      </ThemeProvider>
    </main> 
  )
}
