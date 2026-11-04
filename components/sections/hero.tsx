import type { Dictionary } from "@/lib/dictionaries"
import { EMAIL, GITHUB_URL, HANDLE, NAME } from "@/lib/site"

export const Hero = ({ dict }: { dict: Dictionary }) => (
  <section aria-labelledby="hero-title" className="pb-14 pt-8 sm:pt-14">
    <h1 id="hero-title" className="text-4xl font-semibold tracking-tight">
      {NAME}
    </h1>
    <p className="mt-2 font-mono text-sm text-muted-foreground">{HANDLE}</p>
    <p className="mt-8 text-lg font-medium">{dict.hero.role}</p>
    <p className="mt-3 text-pretty leading-relaxed">{dict.hero.bio}</p>
    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
      <li>
        <a href={`mailto:${EMAIL}`} className="link">
          {dict.hero.email}
        </a>
      </li>
      <li>
        <a href={GITHUB_URL} rel="me" className="link">
          {dict.hero.github}
        </a>
      </li>
    </ul>
  </section>
)
