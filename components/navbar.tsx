import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitch } from "./language-switch"
import type { Dictionary } from "@/lib/dictionaries"

export const Navbar = ({ lang, dict }: { lang: string; dict: Dictionary }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="w-full max-w-4xl border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image src="/n4yk0.png" alt="" width={28} height={28} className="h-6 w-6 object-contain" />
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground">{dict.hero.handle}</span>
          </Link>

          <span className="hidden items-center gap-1.5 font-mono text-xs text-success sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            {dict.nav.status}
          </span>

          <div className="ml-auto flex items-center gap-1">
            <LanguageSwitch lang={lang} label={dict.nav.switch_language} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
