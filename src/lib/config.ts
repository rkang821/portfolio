export const siteConfig = {
  title: "Rachel's Portfolio",
  description:
    "Rachel's Portfolio, built with Next.js, Tailwind CSS, and TypeScript",
  url: 'https://rachelkang.xyz',
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
