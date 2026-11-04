import "server-only"
import { defaultLocale, isLocale, type Locale } from "./i18n"

const dictionaries: Record<Locale, () => Promise<typeof import("../dictionaries/en.json")>> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
}

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>

export const getDictionary = (locale: string): Promise<Dictionary> =>
  dictionaries[isLocale(locale) ? locale : defaultLocale]()
