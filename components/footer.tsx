"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl italic">Taran</h2>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">{t("footerDesc")}</p>
            <div className="flex gap-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-background hover:bg-background/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-background hover:bg-background/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-background hover:bg-background/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-4">{t("quickLinks")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#story" className="text-background/70 hover:text-background transition-colors">
                {t("ourStory")}
              </Link>
              <Link href="#products" className="text-background/70 hover:text-background transition-colors">
                {t("products")}
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors">
                {t("shipping")}
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-4">{t("staySweet")}</h4>
            <p className="text-background/70 text-sm mb-4">{t("newsletterDesc")}</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={t("yourEmail")}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" size="sm">
                {t("join")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2025 Taran. {t("madeWith")} ❤️ {t("inSwitzerland")}
          </p>
          <p className="text-sm text-background/50">taran-snack.com</p>
        </div>
      </div>
    </footer>
  )
}
