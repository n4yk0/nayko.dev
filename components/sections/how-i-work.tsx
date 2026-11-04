import { CircleCheck, ShieldCheck } from "lucide-react"
import { sectionIcons, stepIcons } from "@/components/icons"
import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const HowIWork = ({ dict }: { dict: Dictionary }) => {
  const { title, intro, setup, loop_title, steps, rules_title, rules, proof } = dict.how

  return (
    <Section id="how-i-work" title={title} icon={sectionIcons.howIWork}>
      <div className="space-y-4 leading-relaxed">
        <p>{intro}</p>
        <p>
          <RichText text={setup} />
        </p>
      </div>

      <h3 className="mt-10 font-medium">{loop_title}</h3>
      <ol className="relative mt-5 space-y-6 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-border">
        {steps.map((step) => {
          const Icon = stepIcons[step.id]
          return (
            <li key={step.id} className="relative flex gap-4">
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <div className="leading-relaxed sm:pt-1">
                <p>
                  <span className="font-medium">{step.name}.</span> {step.text}
                </p>
                {step.skills.length > 0 && (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {step.skills.map((skill) => `/${skill}`).join(" · ")}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

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

      <p className="mt-10 leading-relaxed">
        <RichText text={proof} />
      </p>
    </Section>
  )
}
