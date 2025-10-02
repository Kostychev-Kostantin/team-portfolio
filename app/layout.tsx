import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kostychev\'s Development Team - Full-Stack & AI/ML Experts',
  description: 'Professional development team from Kazakhstan specializing in Full-Stack development and AI/ML solutions. We deliver cutting-edge software solutions for global clients.',
  keywords: 'Kazakhstan developers, Full-Stack development, AI/ML, React, Next.js, Python, TypeScript, software development team',
  authors: [{ name: 'Kazakhstan Development Team' }],
  openGraph: {
    title: 'Kazakhstan Development Team - Full-Stack & AI/ML Experts',
    description: 'Professional development team from Kazakhstan specializing in Full-Stack development and AI/ML solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kazakhstan Development Team - Full-Stack & AI/ML Experts',
    description: 'Professional development team from Kazakhstan specializing in Full-Stack development and AI/ML solutions.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    shortcut: '/icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}
