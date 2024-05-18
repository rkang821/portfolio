import Head from 'next/head'
import { siteConfig } from '@/lib/config'

interface SEOProps {
  title?: string
  description?: string
  author?: string
  url?: string
}

const SEO = ({ title, description, author, url }: SEOProps) => {
  const pageTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title
  const pageDescription = description || siteConfig.description
  const pageAuthor = author || 'Rachel Kang'

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="icon" href="/images/favicon/favicon.ico" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url || siteConfig.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="author" content={pageAuthor} />
    </Head>
  )
}

export default SEO
