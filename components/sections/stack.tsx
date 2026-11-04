import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Stack = ({ dict }: { dict: Dictionary }) => (
  <Section id="stack" title={dict.stack.title}>
    <p className="leading-relaxed">{dict.stack.line}</p>
  </Section>
)
