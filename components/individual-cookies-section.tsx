"use client"

import { useLanguage } from "@/lib/language-context"

export function IndividualCookiesSection() {
  const { t } = useLanguage()

  const cookies = [
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv1-tLIBYJl55hnmI2URYEQEPGHY44eeuK.mp4",
      nameKey: "cookie1Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv2-FzH7vVtfzfcAWBeVhHZDyaDKpth5qQ.mp4",
      nameKey: "cookie2Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv3-g2FuZ3NL6nU4azDgyfYP8yG6Cem9Zs.mp4",
      nameKey: "cookie3Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv4-23UafcVRJAUWJEm5KWFxnIXwEee6Cc.mp4",
      nameKey: "cookie4Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv5-YzJnrc15Vanze59rWpFgEPHBNBMBxt.mp4",
      nameKey: "cookie5Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv6-pKURpgLbiGnmbkg4Syo3reedQ46gfv.mp4",
      nameKey: "cookie6Name" as const,
    },
    {
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indiv7-HfSJjpduP9gQIgWor0BcL81c15GGt6.mp4",
      nameKey: "cookie7Name" as const,
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">{t("ourSelection")}</span>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 text-balance">{t("individualCookiesTitle")}</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("individualCookiesSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cookies.map((cookie, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-lg">
                <video
                  src={cookie.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center mt-4">
                <h4 className="font-serif text-lg">{t(cookie.nameKey)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
