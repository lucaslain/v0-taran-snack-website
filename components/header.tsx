"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#story" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              {t("ourStory")}
            </Link>
            <Link href="#products" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              {t("products")}
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-2xl md:text-3xl italic tracking-wide">TARAN SNACK-FOOD</h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#contact" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              {t("contact")}
            </Link>
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </nav>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link
              href="#story"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("ourStory")}
            </Link>
            <Link
              href="#products"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("products")}
            </Link>
            <Link
              href="#contact"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
