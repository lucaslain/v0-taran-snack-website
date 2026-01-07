"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-balance">
          {t("heroTitle1")}
          <br />
          <span className="italic">{t("heroTitle2")}</span>
        </h2>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">{t("heroSubtitle")}</p>
      </div>

      {/* Video Section */}
      <div className="mt-12 w-full max-w-md mx-auto">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => console.log("[v0] Video error:", e)}
            onLoadedData={() => console.log("[v0] Video loaded successfully")}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/53432671-1AC3-47D0-A133-CFAFBB9E3250-PU3RMwgaYcS6jMkG1pnvzUGMJNz5kg.MP4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* CTA Links */}
      <div className="mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
        <Link href="#story" className="group flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("learnOur")}</span>
          <span className="text-sm uppercase tracking-[0.2em] font-medium">{t("untoldStory")}</span>
          <span className="w-10 h-10 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link href="#products" className="group flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("discoverOur")}</span>
          <span className="text-sm uppercase tracking-[0.2em] font-medium">{t("cookieCollection")}</span>
          <span className="w-10 h-10 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  )
}
