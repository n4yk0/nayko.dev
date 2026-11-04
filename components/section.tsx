import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { IconChip, type Tone } from "@/components/icon-chip"

export const Section = ({
  id,
  title,
  icon,
  tone,
  children,
}: {
  id: string
  title: string
  icon: LucideIcon
  tone: Tone
  children: ReactNode
}) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 py-14">
    <div className="flex items-center gap-3">
      <IconChip icon={icon} tone={tone} />
      <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>
    <div className="mt-8">{children}</div>
  </section>
)
