import type { LucideIcon } from "lucide-react"

export type Tone = "blue" | "emerald" | "violet" | "amber" | "rose"

export const toneClasses: Record<Tone, string> = {
  blue: "bg-tone-blue/10 text-tone-blue ring-tone-blue/20",
  emerald: "bg-tone-emerald/10 text-tone-emerald ring-tone-emerald/20",
  violet: "bg-tone-violet/10 text-tone-violet ring-tone-violet/20",
  amber: "bg-tone-amber/10 text-tone-amber ring-tone-amber/20",
  rose: "bg-tone-rose/10 text-tone-rose ring-tone-rose/20",
}

export const IconChip = ({ icon: Icon, tone, small = false }: { icon: LucideIcon; tone: Tone; small?: boolean }) => (
  <span
    aria-hidden="true"
    className={`inline-flex shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ${toneClasses[tone]} ${small ? "h-7 w-7" : "h-9 w-9"}`}
  >
    <Icon className={small ? "h-3.5 w-3.5" : "h-4.5 w-4.5"} />
  </span>
)

export const ToneTag = ({ tone, children }: { tone: Tone; children: string }) => (
  <span className={`rounded-md px-1.5 py-0.5 font-mono text-xs ring-1 ring-inset ${toneClasses[tone]}`}>{children}</span>
)
