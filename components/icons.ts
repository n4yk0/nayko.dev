import {
  Bot,
  Briefcase,
  CalendarCheck,
  CreditCard,
  Grid2x2,
  HeartPulse,
  History,
  Layers,
  type LucideIcon,
  Mail,
  MapPin,
  Package,
  WifiOff,
} from "lucide-react"

export const sectionIcons = {
  skills: Layers,
  work: Briefcase,
  experience: History,
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
  "ar-app": MapPin,
}
