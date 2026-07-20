import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MainWrapper from '@/components/layout/MainWrapper'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '[Salon Name] | Luxury Cosmetic Studio & Salon',
  description: 'Experience unparalleled luxury and relaxation at [Salon Name]. Premium skincare, facials, styling, and wellness treatments tailored to your unique elegance.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-sand-900 bg-sand-50 selection:bg-sand-200 selection:text-sand-900">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <MainWrapper>
              {children}
            </MainWrapper>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
