import { HANDLE } from "@/lib/definitions"

export const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col items-center gap-1.5 border-t border-border/40 py-8">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> echo &quot;© {new Date().getFullYear()} {HANDLE}&quot;
      </p>
    </footer>
  )
}
