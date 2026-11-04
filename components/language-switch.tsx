"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const LanguageSwitch = ({ lang, target, label }: { lang: string; target: string; label: string }) => {
  const pathname = usePathname()
  const href = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${target}`)

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      className="rounded px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  )
}
