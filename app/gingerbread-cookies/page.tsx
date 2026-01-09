"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { GingerbreadSection } from "@/components/gingerbread-section"
import { Footer } from "@/components/footer"

export default function GingerbreadCookiesPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <GingerbreadSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
