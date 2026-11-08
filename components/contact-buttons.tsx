import { Github, Linkedin, Mail } from "lucide-react"
import { externalLinkProps } from "@/lib/links"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site"

const outlineButton =
  "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"

export const ContactButtons = ({ labels }: { labels: { email: string; github: string; linkedin: string } }) => (
  <div className="flex flex-wrap gap-3">
    <a
      href={`mailto:${EMAIL}`}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      <Mail className="h-4 w-4" aria-hidden="true" />
      {labels.email}
    </a>
    <a href={LINKEDIN_URL} {...externalLinkProps(LINKEDIN_URL, "me")} className={outlineButton}>
      <Linkedin className="h-4 w-4" aria-hidden="true" />
      {labels.linkedin}
    </a>
    <a href={GITHUB_URL} {...externalLinkProps(GITHUB_URL, "me")} className={outlineButton}>
      <Github className="h-4 w-4" aria-hidden="true" />
      {labels.github}
    </a>
  </div>
)
