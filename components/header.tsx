import Link from "next/link"
import { LanguageSwitch } from "@/components/language-switch"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Dictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"
import { HANDLE } from "@/lib/site"

export const Header = ({ lang, dict }: { lang: string; dict: Dictionary }) => {
  const target = locales.find((locale) => locale !== lang) ?? locales[0]

  return (
    <header className="flex items-center justify-between py-6">
      <Link
        href={`/${lang}`}
        aria-label={dict.nav.home}
        className="rounded font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {HANDLE}
      </Link>
      <div className="flex items-center gap-1">
        <LanguageSwitch lang={lang} target={target} label={dict.nav.switch_language} />
        <ThemeToggle label={dict.nav.toggle_theme} />
      </div>
    </header>
  )
}
