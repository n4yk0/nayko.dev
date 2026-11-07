import { GraduationCap } from "lucide-react"
import { sectionIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Experience = ({ dict }: { dict: Dictionary }) => {
  const { title, items, education_title, education } = dict.experience

  return (
    <Section id="experience" title={title} icon={sectionIcons.experience}>
      <ol className="ml-1 space-y-8 border-l pl-6">
        {items.map((item) => (
          <li key={item.org} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium">
                {item.org} <span className="font-normal text-muted-foreground">· {item.role}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.date}</p>
            </div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.summary}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex items-center gap-2.5">
        <GraduationCap className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
        <h3 className="font-medium">{education_title}</h3>
      </div>
      <ul className="mt-3 space-y-1 leading-relaxed text-muted-foreground">
        {education.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Section>
  )
}
