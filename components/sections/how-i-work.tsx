import { CircleCheck, ShieldCheck } from "lucide-react"
import { sectionIcons } from "@/components/icons"
import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const HowIWork = ({ dict }: { dict: Dictionary }) => {
  const { title, intro, setup, rules_title, rules } = dict.how

  return (
    <Section id="how-i-work" title={title} icon={sectionIcons.howIWork}>
      <div className="space-y-4 leading-relaxed">
        <p>{intro}</p>
        <p>
          <RichText text={setup} />
        </p>
      </div>

      <div className="mt-10 flex items-center gap-2.5">
        <ShieldCheck className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
        <h3 className="font-medium">{rules_title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5 leading-relaxed">
        {rules.map((rule) => (
          <li key={rule} className="flex gap-3">
            <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
