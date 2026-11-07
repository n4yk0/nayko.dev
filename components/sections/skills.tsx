import { sectionIcons } from "@/components/icons"
import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Skills = ({ dict }: { dict: Dictionary }) => (
  <Section id="skills" title={dict.skills.title} icon={sectionIcons.skills}>
    <dl className="space-y-6">
      {dict.skills.items.map((item) => (
        <div key={item.id}>
          <dt className="font-medium">{item.name}</dt>
          <dd className="mt-1 leading-relaxed">
            <RichText text={item.text} />
          </dd>
          {item.tools.length > 0 && <dd className="mt-1 font-mono text-xs text-muted-foreground">{item.tools.join(", ")}</dd>}
        </div>
      ))}
    </dl>
  </Section>
)
