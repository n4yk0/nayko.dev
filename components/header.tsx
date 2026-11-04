import Image from "next/image"
import Link from "next/link"
import { LanguageSwitch } from "@/components/language-switch"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Dictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"

export const Header = ({ lang, dict }: { lang: string; dict: Dictionary }) => {
  const target = locales.find((locale) => locale !== lang) ?? locales[0]

  return (
    <header className="flex items-center justify-between py-6">
      <Link href={`/${lang}`} aria-label={dict.nav.home} className="rounded-full">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
          <Image src="/n4yk0.png" alt="" width={28} height={28} priority className="h-7 w-7 object-contain" />
        </span>
      </Link>
      <div className="flex items-center gap-1">
        <LanguageSwitch lang={lang} target={target} label={dict.nav.switch_language} />
        <ThemeToggle label={dict.nav.toggle_theme} />
      </div>
    </header>
  )
}
