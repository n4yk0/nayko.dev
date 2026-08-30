import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/dictionaries"

export const Skills = ({ dict }: { dict: Dictionary }) => {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-5">
      <h2 id="skills-heading" className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">#</span> {dict.skills.title}
      </h2>

      <dl className="flex flex-col gap-4">
        {dict.skills.groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <dt className="w-40 shrink-0 font-mono text-sm text-muted-foreground">{group.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-md border border-border/50 px-3 py-1 font-mono text-xs font-normal text-foreground"
                >
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
