import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VedX Agency - Web Development & Digital Solutions',
  description:
    'Professional web development agency specializing in modern, responsive websites and digital solutions. Transform your ideas into powerful web experiences.',
  keywords: 'web development, agency, portfolio, next.js, react, digital solutions',
  authors: [{ name: 'VedX Agency' }],
  openGraph: {
    title: 'VedX Agency - Web Development & Digital Solutions',
    description:
      'Professional web development agency specializing in modern, responsive websites and digital solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
