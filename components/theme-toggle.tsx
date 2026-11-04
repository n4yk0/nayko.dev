"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeToggle = ({ label }: { label: string }) => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  )
}
