import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export const Section = ({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string
  title: string
  icon: LucideIcon
  children: ReactNode
}) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 border-t py-14">
    <div className="flex items-center gap-2.5">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>
    <div className="mt-8">{children}</div>
  </section>
)
