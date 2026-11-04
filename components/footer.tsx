import { HANDLE, NAME } from "@/lib/site"

export const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t py-8 text-sm text-muted-foreground">
    <p>
      <span className="font-mono">{HANDLE}</span> · © {new Date().getFullYear()} {NAME}
    </p>
  </footer>
)
