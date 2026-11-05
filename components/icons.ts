import {
  Bot,
  Briefcase,
  CalendarCheck,
  CircleCheck,
  Code,
  CreditCard,
  Database,
  GitPullRequest,
  Globe,
  Grid2x2,
  Hammer,
  HeartPulse,
  History,
  Layers,
  type LucideIcon,
  Mail,
  PencilRuler,
  ScanSearch,
  Server,
  ShieldCheck,
  Smartphone,
  SquareTerminal,
  WifiOff,
} from "lucide-react"

export const sectionIcons = {
  work: Briefcase,
  howIWork: Bot,
  experience: History,
  stack: Layers,
  contact: Mail,
} satisfies Record<string, LucideIcon>

export const focusIcons: Record<string, LucideIcon> = {
  health: HeartPulse,
  security: ShieldCheck,
  ai: Bot,
}

export const workIcons: Record<string, LucideIcon> = {
  "opaline-sante": CalendarCheck,
  "offline-first-care": WifiOff,
  "speech-therapy-platform": CreditCard,
  "joinery-app": Grid2x2,
}

export const otherWorkIcons: Record<string, LucideIcon> = {
  wordpress: Globe,
  rust: SquareTerminal,
  android: Smartphone,
  linux: Server,
}

export const stepIcons: Record<string, LucideIcon> = {
  understand: ScanSearch,
  design: PencilRuler,
  build: Hammer,
  verify: CircleCheck,
  review: GitPullRequest,
}

export const stackIcons: Record<string, LucideIcon> = {
  web: Code,
  backend: Database,
  mobile: Smartphone,
  systems: Server,
  ai: Bot,
}
