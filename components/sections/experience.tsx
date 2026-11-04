import { GraduationCap } from "lucide-react"
import { IconChip } from "@/components/icon-chip"
import { sectionIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Experience = ({ dict }: { dict: Dictionary }) => {
  const { title, items, education_title, education } = dict.experience

  return (
    <Section id="experience" title={title} {...sectionIcons.experience}>
      <ol className="ml-1 space-y-8 border-l pl-6">
        {items.map((item) => (
          <li key={item.org} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-tone-emerald bg-background"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium">
                {item.org} <span className="font-normal text-muted-foreground">— {item.role}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.date}</p>
            </div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.summary}</p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
        <IconChip icon={GraduationCap} tone="amber" />
        <div>
          <h3 className="font-medium">{education_title}</h3>
          <ul className="mt-2 space-y-1 leading-relaxed text-muted-foreground">
            {education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
