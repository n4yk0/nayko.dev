import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Stack = ({ dict }: { dict: Dictionary }) => (
  <Section id="stack" title={dict.stack.title}>
    <dl className="space-y-3 leading-relaxed">
      {dict.stack.groups.map((group) => (
        <div key={group.id} className="sm:grid sm:grid-cols-[12rem_1fr] sm:gap-x-6">
          <dt className="text-sm text-muted-foreground sm:pt-0.5">{group.label}</dt>
          <dd>{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
)
