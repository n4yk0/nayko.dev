import { CircleCheck, ShieldCheck, Sparkles } from "lucide-react"
import { IconChip, ToneTag } from "@/components/icon-chip"
import { sectionIcons, stepIcons } from "@/components/icons"
import { RichText } from "@/components/rich-text"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const HowIWork = ({ dict }: { dict: Dictionary }) => {
  const { title, intro, setup, loop_title, steps, rules_title, rules, proof } = dict.how

  return (
    <Section id="how-i-work" title={title} {...sectionIcons.howIWork}>
      <div className="space-y-4 leading-relaxed">
        <p>{intro}</p>
        <p>
          <RichText text={setup} />
        </p>
      </div>

      <h3 className="mt-10 font-medium">{loop_title}</h3>
      <ol className="relative mt-5 space-y-6 before:absolute before:bottom-4 before:left-[17px] before:top-4 before:w-px before:bg-border">
        {steps.map((step) => (
          <li key={step.id} className="relative flex gap-4">
            <span className="relative rounded-lg bg-background">
              <IconChip icon={stepIcons[step.id]} tone="violet" />
            </span>
            <div className="leading-relaxed sm:pt-1">
              <p>
                <span className="font-medium">{step.name}.</span> {step.text}
              </p>
              {step.skills.length > 0 && (
                <p className="mt-2 flex flex-wrap gap-1.5">
                  {step.skills.map((skill) => (
                    <ToneTag key={skill} tone="violet">{`/${skill}`}</ToneTag>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <IconChip icon={ShieldCheck} tone="emerald" small />
          <h3 className="font-medium">{rules_title}</h3>
        </div>
        <ul className="mt-4 space-y-2.5 leading-relaxed">
          {rules.map((rule) => (
            <li key={rule} className="flex gap-3">
              <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-tone-emerald" aria-hidden="true" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 flex gap-3 rounded-xl bg-primary/5 p-4 leading-relaxed ring-1 ring-inset ring-primary/15">
        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <RichText text={proof} />
        </span>
      </p>
    </Section>
  )
}
