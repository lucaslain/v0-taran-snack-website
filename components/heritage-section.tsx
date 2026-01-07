"use client"

import { useLanguage } from "@/lib/language-context"
import { Leaf, BookOpen, Building2 } from "lucide-react"

export function HeritageSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("ourHeritage")}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t("heritageTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">{t("heritageDesc")}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">{t("heritageServing")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium">{t("naturalIngredients")}</h3>
                <p className="text-sm text-muted-foreground">100% naturels et de qualité</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium">{t("traditionalRecipes")}</h3>
                <p className="text-sm text-muted-foreground">Héritées de génération en génération</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium">{t("forProfessionals")}</h3>
                <p className="text-sm text-muted-foreground">Cafés, hôtels, événements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
