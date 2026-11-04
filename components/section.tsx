import type { ReactNode } from "react"

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 border-t py-14">
    <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
      {title}
    </h2>
    <div className="mt-8">{children}</div>
  </section>
)
