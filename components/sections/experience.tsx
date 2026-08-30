import type { Dictionary } from "@/lib/dictionaries"

type ExperienceItem = Dictionary["experience"]["items"][number] & {
  description?: string
  stack?: string[]
}

export const Experience = ({ dict }: { dict: Dictionary }) => {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h2
          id="experience-heading"
          className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          <span className="text-primary">#</span> {dict.experience.title}
        </h2>
        <p className="font-mono text-xs text-muted-foreground/70">{dict.experience.note}</p>
      </div>

      <ol className="flex flex-col">
        {(dict.experience.items as ExperienceItem[]).map((item) => (
          <li key={`${item.org}-${item.date}`} className="relative border-l border-border/50 pb-7 pl-6 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-medium text-foreground">{item.org}</p>
                <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/80">{item.date}</p>
              </div>

              <p className="text-sm text-primary">{item.role}</p>

              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              )}

              {item.stack && item.stack.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
