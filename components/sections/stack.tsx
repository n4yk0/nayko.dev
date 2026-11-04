import { sectionIcons, stackIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Stack = ({ dict }: { dict: Dictionary }) => (
  <Section id="stack" title={dict.stack.title} icon={sectionIcons.stack}>
    <dl className="space-y-3 leading-relaxed">
      {dict.stack.groups.map((group) => {
        const Icon = stackIcons[group.id]
        return (
          <div key={group.id} className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-x-6">
            <dt className="flex items-center gap-2 text-sm text-muted-foreground sm:pt-0.5">
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {group.label}
            </dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        )
      })}
    </dl>
  </Section>
)
