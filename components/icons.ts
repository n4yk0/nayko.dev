import {
  Bot,
  Briefcase,
  CalendarCheck,
  Code,
  CreditCard,
  Database,
  Grid2x2,
  HeartPulse,
  History,
  Layers,
  type LucideIcon,
  Mail,
  Package,
  Server,
  Smartphone,
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
  ai: Bot,
  product: Package,
}

export const workIcons: Record<string, LucideIcon> = {
  "opaline-sante": CalendarCheck,
  "offline-first-care": WifiOff,
  "speech-therapy-platform": CreditCard,
  "joinery-app": Grid2x2,
}

export const stackIcons: Record<string, LucideIcon> = {
  web: Code,
  mobile: Smartphone,
  backend: Database,
  ai: Bot,
  notions: Server,
}
