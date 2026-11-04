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
import type { Tone } from "@/components/icon-chip"

type ToneIcon = { icon: LucideIcon; tone: Tone }

export const sectionIcons = {
  work: { icon: Briefcase, tone: "blue" },
  howIWork: { icon: Bot, tone: "violet" },
  experience: { icon: History, tone: "emerald" },
  stack: { icon: Layers, tone: "amber" },
  contact: { icon: Mail, tone: "rose" },
} satisfies Record<string, ToneIcon>

export const focusIcons: Record<string, ToneIcon> = {
  health: { icon: HeartPulse, tone: "rose" },
  security: { icon: ShieldCheck, tone: "emerald" },
  ai: { icon: Bot, tone: "violet" },
}

export const workIcons: Record<string, ToneIcon> = {
  "opaline-sante": { icon: CalendarCheck, tone: "blue" },
  "offline-first-care": { icon: WifiOff, tone: "emerald" },
  "speech-therapy-platform": { icon: CreditCard, tone: "violet" },
}

export const otherWorkIcons: Record<string, ToneIcon> = {
  wordpress: { icon: Globe, tone: "blue" },
  rust: { icon: SquareTerminal, tone: "amber" },
  android: { icon: Smartphone, tone: "emerald" },
  linux: { icon: Server, tone: "rose" },
}

export const stepIcons: Record<string, LucideIcon> = {
  understand: ScanSearch,
  design: PencilRuler,
  build: Hammer,
  verify: CircleCheck,
  review: GitPullRequest,
}

export const stackIcons: Record<string, ToneIcon> = {
  web: { icon: Code, tone: "blue" },
  backend: { icon: Database, tone: "emerald" },
  mobile: { icon: Smartphone, tone: "amber" },
  systems: { icon: Server, tone: "rose" },
  ai: { icon: Bot, tone: "violet" },
}
