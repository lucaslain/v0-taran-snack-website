"use client"

import { useLanguage } from "@/lib/language-context"

export function GingerbreadSection() {
  const { t } = useLanguage()

  const episodes = [
    {
      video: "/images/pains-ep-1.mp4",
      nameKey: "painsEp1Name" as const,
    },
    {
      video: "/images/pains-ep-2.mp4",
      nameKey: "painsEp2Name" as const,
    },
    {
      video: "/images/pains-ep-3.mp4",
      nameKey: "painsEp3Name" as const,
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">{t("ourGingerbread")}</span>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 text-balance">{t("gingerbreadTitle")}</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("gingerbreadSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-card shadow-lg">
                <video
                  src={episode.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center mt-4">
                <h4 className="font-serif text-lg">{t(episode.nameKey)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
