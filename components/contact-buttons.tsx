import { Github, Mail } from "lucide-react"
import { EMAIL, GITHUB_URL } from "@/lib/site"

export const ContactButtons = ({ emailLabel, githubLabel }: { emailLabel: string; githubLabel: string }) => (
  <div className="flex flex-wrap gap-3">
    <a
      href={`mailto:${EMAIL}`}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
    >
      <Mail className="h-4 w-4" aria-hidden="true" />
      {emailLabel}
    </a>
    <a
      href={GITHUB_URL}
      rel="me"
      className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Github className="h-4 w-4" aria-hidden="true" />
      {githubLabel}
    </a>
  </div>
)
