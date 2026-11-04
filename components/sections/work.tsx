import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"

export const Work = ({ dict }: { dict: Dictionary }) => {
  const { title, labels, items, other } = dict.work

  return (
    <Section id="work" title={title}>
      <div className="flex flex-col gap-12">
        {items.map((item) => (
          <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="scroll-mt-6">
            <h3 id={`${item.id}-title`} className="font-medium">
              {item.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{item.context}</p>
            <dl className="mt-4 grid gap-x-6 gap-y-1 leading-relaxed sm:grid-cols-[9rem_1fr] sm:gap-y-3">
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.problem}</dt>
              <dd className="mb-2 sm:mb-0">{item.problem}</dd>
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.built}</dt>
              <dd className="mb-2 sm:mb-0">{item.built}</dd>
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{labels.result}</dt>
              <dd>{item.result}</dd>
            </dl>
          </article>
        ))}

        <div id={other.id} className="scroll-mt-6">
          <h3 className="font-medium">{other.title}</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted-foreground">
            {other.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
