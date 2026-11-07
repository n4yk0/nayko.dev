import { sectionIcons, workIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Work = ({ dict }: { dict: Dictionary }) => (
  <Section id="work" title={dict.work.title} icon={sectionIcons.work}>
    <div className="space-y-8">
      {dict.work.items.map((item) => {
        const Icon = workIcons[item.id]
        return (
          <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="flex scroll-mt-6 items-start gap-3">
            <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 id={`${item.id}-title`} className="font-medium">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.context}</p>
              <p className="mt-2 leading-relaxed">{item.text}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{item.stack.join(", ")}</p>
            </div>
          </article>
        )
      })}
    </div>
  </Section>
)
