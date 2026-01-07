"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">{t("whatPeopleSay")}</span>

        <Quote className="h-10 w-10 mx-auto mt-8 text-primary/30" />

        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl mt-6 leading-relaxed italic">
          "{t("testimonialQuote")}"
        </blockquote>

        <div className="mt-8">
          <p className="font-medium">Olena M.</p>
          <p className="text-sm text-muted-foreground">Zürich, Switzerland</p>
        </div>
      </div>
    </section>
  )
}
