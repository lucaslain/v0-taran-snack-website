"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function StorySection() {
  const { t } = useLanguage()

  return (
    <section id="story" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/taran-family.jpg" alt="The Taran family" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl bg-primary flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <span className="font-serif text-2xl md:text-3xl block">CH</span>
                <span className="text-xs uppercase tracking-wider">Carouge</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">{t("ourHeritage")}</span>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight text-balance">{t("storyTitle")}</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("storyP1")}</p>
              <p>{t("storyP2")}</p>
              <p className="italic text-foreground">{t("storyP3")}</p>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-border">
              <div>
                <span className="font-serif text-3xl text-primary">2024</span>
                <p className="text-sm text-muted-foreground mt-1">{t("since2024")}</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-primary">4</span>
                <p className="text-sm text-muted-foreground mt-1">{t("familyMembers")}</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-primary">GE</span>
                <p className="text-sm text-muted-foreground mt-1">{t("carouge")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
