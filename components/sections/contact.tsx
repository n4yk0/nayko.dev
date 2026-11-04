import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"
import { EMAIL, GITHUB_URL } from "@/lib/site"

export const Contact = ({ dict }: { dict: Dictionary }) => (
  <Section id="contact" title={dict.contact.title}>
    <p className="leading-relaxed">{dict.contact.text}</p>
    <p className="mt-6">
      <a href={`mailto:${EMAIL}`} className="link text-lg font-medium">
        {EMAIL}
      </a>
    </p>
    <p className="mt-3 text-sm">
      <a href={GITHUB_URL} rel="me" className="link">
        {dict.contact.github}
      </a>
    </p>
  </Section>
)
