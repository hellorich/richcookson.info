import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Richard Cookson - Front end web developer and designer',
  description: 'A freelance web developer with nearly twenty years of experience. My primary focus is on front end web development and responsive web design, generally of content based web sites, and on projects ranging in size from a single page to serving content created by thousands of users.',
  keywords: 'richard cookson, freelance web developer, brighton front end web developer, brighton web developer, freelance web developer brighton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
