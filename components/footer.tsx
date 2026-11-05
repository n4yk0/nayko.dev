import Link from "next/link"
import type { Dictionary } from "@/lib/dictionaries"
import { HANDLE, NAME } from "@/lib/site"

export const Footer = ({ lang, dict }: { lang: string; dict: Dictionary }) => (
  <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t py-8 text-sm text-muted-foreground">
    <p>
      <span className="font-mono">{HANDLE}</span> · © {new Date().getFullYear()} {NAME}
    </p>
    <Link href={`/${lang}/legal`} className="link">
      {dict.footer.legal}
    </Link>
  </footer>
)
