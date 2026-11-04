import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Experience = ({ dict }: { dict: Dictionary }) => {
  const { title, items, education_title, education } = dict.experience

  return (
    <Section id="experience" title={title}>
      <ol className="space-y-8">
        {items.map((item) => (
          <li key={item.org}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium">
                {item.org} <span className="font-normal text-muted-foreground">— {item.role}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.date}</p>
            </div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.summary}</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">{item.tags.join(" · ")}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 font-medium">{education_title}</h3>
      <ul className="mt-3 space-y-1 leading-relaxed text-muted-foreground">
        {education.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Section>
  )
}
