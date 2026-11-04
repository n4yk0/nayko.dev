import { Github, Mail } from "lucide-react"
import type { ReactNode } from "react"
import { EMAIL, GITHUB_URL } from "./site"

export type ContactLink = {
  key: "email" | "github"
  href: string
  icon: ReactNode
  value: string
  external: boolean
}

export const contactLinks: ContactLink[] = [
  {
    key: "email",
    href: `mailto:${EMAIL}`,
    icon: <Mail className="h-5 w-5" />,
    value: EMAIL,
    external: false,
  },
  {
    key: "github",
    href: GITHUB_URL,
    icon: <Github className="h-5 w-5" />,
    value: "github.com/n4yk0",
    external: true,
  },
]
