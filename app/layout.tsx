import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALT Linux Team — Википедия',
  description: 'ALT Linux Team — сообщество разработчиков свободного программного обеспечения',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
