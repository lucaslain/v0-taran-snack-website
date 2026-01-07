"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { HeritageSection } from "@/components/heritage-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <StorySection />
        <HeritageSection />
        <ProductsSection />
        <TestimonialSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
