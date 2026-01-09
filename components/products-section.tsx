"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function ProductsSection() {
  const { t } = useLanguage()

  const categories = [
    {
      nameKey: "individualCookies" as const,
      descKey: "individualCookiesDesc" as const,
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie1-mPDYn0nnml5SRm0p9ZbDA4osWcFBBM.mp4",
      href: "/individual-cookies",
    },
    {
      nameKey: "gingerbreadCookies" as const,
      descKey: "gingerbreadCookiesDesc" as const,
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gingerbread-PfSCksLzlh2FPSBhd3fJAGfxQafL1I.mp4",
      href: "/gingerbread-cookies",
    },
    {
      nameKey: "cookieSets" as const,
      descKey: "cookieSetsDesc" as const,
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/setofcookies-MTGx0Nsr4kvOdfL1Y8assUG9T0zKe3.mp4",
      href: null,
    },
  ]

  return (
    <section id="products" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">{t("ourCollection")}</span>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 text-balance">{t("handcraftedWithLove")}</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("productSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            if (category.href) {
              return (
                <Link key={category.nameKey} href={category.href} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-card mb-6">
                    {category.video ? (
                      <video
                        src={category.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent/50 text-sm">{t("comingSoon")}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif text-xl mt-2">{t(category.nameKey)}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{t(category.descKey)}</p>
                  </div>
                </Link>
              )
            }

            return (
              <div key={category.nameKey} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-card mb-6">
                  {category.video ? (
                    <video
                      src={category.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent/50 text-sm">{t("comingSoon")}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-xl mt-2">{t(category.nameKey)}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{t(category.descKey)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
