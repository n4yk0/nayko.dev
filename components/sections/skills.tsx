import { sectionIcons } from "@/components/icons"
import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"
import { skillLogos } from "@/lib/tech-logos"

export const Skills = ({ dict }: { dict: Dictionary }) => (
  <Section id="skills" title={dict.skills.title} icon={sectionIcons.skills}>
    <dl className="space-y-6">
      {dict.skills.items.map((item) => (
        <div key={item.id}>
          <dt className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-2 text-foreground/80">
              {skillLogos[item.id].map((logo) => (
                <svg key={logo.title} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <title>{logo.title}</title>
                  <path d={logo.path} />
                </svg>
              ))}
            </span>
            {item.name}
          </dt>
          <dd className="mt-1 leading-relaxed">
            <RichText text={item.text} />
          </dd>
          {item.tools.length > 0 && <dd className="mt-1 font-mono text-xs text-muted-foreground">{item.tools.join(", ")}</dd>}
        </div>
      ))}
    </dl>
  </Section>
)
