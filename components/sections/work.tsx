import { IconChip } from "@/components/icon-chip"
import { otherWorkIcons, sectionIcons, workIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Work = ({ dict }: { dict: Dictionary }) => {
  const { title, labels, items, other } = dict.work

  return (
    <Section id="work" title={title} {...sectionIcons.work}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <article
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-title`}
            className="scroll-mt-6 rounded-2xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <IconChip {...workIcons[item.id]} />
              <div>
                <h3 id={`${item.id}-title`} className="font-medium">
                  {item.title}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.context}</p>
              </div>
            </div>
            <dl className="mt-5 grid gap-x-6 gap-y-1 leading-relaxed sm:grid-cols-[8.5rem_1fr] sm:gap-y-3">
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.problem}</dt>
              <dd className="mb-2 sm:mb-0">{item.problem}</dd>
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.built}</dt>
              <dd className="mb-2 sm:mb-0">{item.built}</dd>
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.result}</dt>
              <dd className="font-medium">{item.result}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div id={other.id} className="mt-10 scroll-mt-6">
        <h3 className="font-medium">{other.title}</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {other.items.map((item) => (
            <li key={item.id} className="flex items-start gap-3 rounded-xl border bg-card p-4 leading-relaxed">
              <IconChip {...otherWorkIcons[item.id]} small />
              <span className="text-sm sm:pt-0.5">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
