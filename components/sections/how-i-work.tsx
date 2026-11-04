import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const HowIWork = ({ dict }: { dict: Dictionary }) => {
  const { title, intro, setup, loop_title, steps, rules_title, rules, proof } = dict.how

  return (
    <Section id="how-i-work" title={title}>
      <div className="space-y-4 leading-relaxed">
        <p>{intro}</p>
        <p>
          <RichText text={setup} />
        </p>
      </div>

      <h3 className="mt-10 font-medium">{loop_title}</h3>
      <ol className="mt-4 space-y-4 leading-relaxed">
        {steps.map((step, index) => (
          <li key={step.name} className="grid grid-cols-[2rem_1fr]">
            <span className="pt-0.5 font-mono text-sm text-muted-foreground" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
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
        ))}
      </ol>

      <h3 className="mt-10 font-medium">{rules_title}</h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted-foreground">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>

      <p className="mt-10 leading-relaxed">
        <RichText text={proof} />
      </p>
    </Section>
  )
}
