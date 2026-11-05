import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

export const locales = ["en", "fr"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

export const negotiateLocale = (acceptLanguage: string | null): Locale => {
  const languages = new Negotiator({ headers: { "accept-language": acceptLanguage ?? "" } }).languages()
  try {
    return match(languages, locales, defaultLocale) as Locale
  } catch {
    return defaultLocale
  }
}
