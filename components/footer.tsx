import { HANDLE } from "@/lib/definitions"
import type { Dictionary } from "@/lib/dictionaries"

export const Footer = ({ dict }: { dict: Dictionary }) => {
  return (
    <footer className="mt-20 flex flex-col items-center gap-1.5 border-t border-border/40 py-8">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> echo &quot;© {new Date().getFullYear()} {HANDLE}&quot;
      </p>
      <p className="text-[11px] text-muted-foreground/60">{dict.footer.tagline}</p>
    </footer>
  )
}
