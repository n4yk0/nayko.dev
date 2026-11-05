import { ContactButtons } from "@/components/contact-buttons"
import { sectionIcons } from "@/components/icons"
import { Section } from "@/components/section"
import type { Dictionary } from "@/lib/dictionaries"
import { EMAIL } from "@/lib/site"

export const Contact = ({ dict }: { dict: Dictionary }) => (
  <Section id="contact" title={dict.contact.title} icon={sectionIcons.contact}>
    <p className="leading-relaxed">{dict.contact.text}</p>
    <p className="mt-2 font-mono text-sm text-muted-foreground">{EMAIL}</p>
    <div className="mt-6">
      <ContactButtons labels={dict.hero} />
    </div>
  </Section>
)
