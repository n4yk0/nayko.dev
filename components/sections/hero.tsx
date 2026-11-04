import { ContactButtons } from "@/components/contact-buttons"
import { focusIcons } from "@/components/icons"
import type { Dictionary } from "@/lib/dictionaries"
import { HANDLE, NAME } from "@/lib/site"

export const Hero = ({ dict }: { dict: Dictionary }) => (
  <section aria-labelledby="hero-title" className="pb-14 pt-8 sm:pt-14">
    <h1 id="hero-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {NAME}
    </h1>
    <p className="mt-3">
      <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-sm text-primary">{HANDLE}</span>
    </p>
    <p className="mt-8 text-lg font-medium">{dict.hero.role}</p>
    <p className="mt-3 text-pretty leading-relaxed">{dict.hero.bio}</p>
    <ul className="mt-6 flex flex-wrap gap-2">
      {dict.hero.focus.map(({ id, label }) => {
        const Icon = focusIcons[id]
        return (
          <li key={id} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {label}
          </li>
        )
      })}
    </ul>
    <div className="mt-8">
      <ContactButtons emailLabel={dict.hero.email} githubLabel={dict.hero.github} />
    </div>
  </section>
)
