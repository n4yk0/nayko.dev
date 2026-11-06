import { sectionIcons, workIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Work = ({ dict }: { dict: Dictionary }) => {
  const { title, labels, items } = dict.work

  return (
    <Section id="work" title={title} icon={sectionIcons.work}>
      <div className="flex flex-col gap-12">
        {items.map((item) => {
          const Icon = workIcons[item.id]
          return (
            <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="scroll-mt-6">
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 id={`${item.id}-title`} className="font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{item.context}</p>
                </div>
              </div>
              <dl className="mt-4 grid gap-x-6 gap-y-1 leading-relaxed sm:grid-cols-[9rem_1fr] sm:gap-y-3">
                <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.problem}</dt>
                <dd className="mb-2 sm:mb-0">{item.problem}</dd>
                <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.built}</dt>
                <dd className="mb-2 sm:mb-0">{item.built}</dd>
                {item.result && (
                  <>
                    <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.result}</dt>
                    <dd>{item.result}</dd>
                  </>
                )}
              </dl>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
