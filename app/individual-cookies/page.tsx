"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { IndividualCookiesSection } from "@/components/individual-cookies-section"
import { Footer } from "@/components/footer"

export default function IndividualCookiesPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <IndividualCookiesSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
