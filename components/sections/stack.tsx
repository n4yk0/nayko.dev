import { IconChip } from "@/components/icon-chip"
import { sectionIcons, stackIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Stack = ({ dict }: { dict: Dictionary }) => (
  <Section id="stack" title={dict.stack.title} {...sectionIcons.stack}>
    <ul className="grid gap-3 sm:grid-cols-2">
      {dict.stack.groups.map((group) => (
        <li key={group.id} className="rounded-xl border bg-card p-4 sm:last:odd:col-span-2">
          <div className="flex items-center gap-2.5">
            <IconChip {...stackIcons[group.id]} small />
            <h3 className="text-sm font-medium">{group.label}</h3>
          </div>
          <p className="mt-3 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span key={item} className="rounded-md bg-muted px-2 py-0.5 text-sm">
                {item}
              </span>
            ))}
          </p>
        </li>
      ))}
    </ul>
  </Section>
)
