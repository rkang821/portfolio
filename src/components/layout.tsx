import { ThemeProvider } from './shared/themeprovider'
import Header from './shared/header'
import Footer from './shared/footer'
import { ScrollButton } from './shared/buttons'
import SEO from '@/components/shared/SEO'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SEO />
      <div
        lang="en"
        className="min-h-screen antialiased"
        suppressHydrationWarning
      >
        <div className={`bg-lightBg dark:bg-darkBg`}>
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
        </div>
      </div>
    </>
  )
}
