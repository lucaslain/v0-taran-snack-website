"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { CookieSetsSection } from "@/components/cookie-sets-section"
import { Footer } from "@/components/footer"

export default function CookieSetsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <CookieSetsSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
