import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SideButtons from '@/components/SideButtons'
import AnimatedBackground from '@/components/AnimatedBackground'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Diana Minine Gudinho | Data Scientist & AI Specialist',
  description: 'Data Scientist with 4+ years of experience designing AI solutions. Expert in LLMs, RAG, and multi-agent systems.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${poppins.className}`}>
        <AnimatedBackground />
        <Navbar />
        <SideButtons />
        {children}
        <Footer />
      </body>
    </html>
  )
}

