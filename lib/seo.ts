import { locales } from "./i18n"

export const pagePaths = ["", "/legal"] as const
export type PagePath = (typeof pagePaths)[number]

const localizedPaths = (path: PagePath, base = "") =>
  Object.fromEntries(locales.map((locale) => [locale, `${base}/${locale}${path}`]))

export const alternatesFor = (lang: string, path: PagePath) => ({
  canonical: `/${lang}${path}`,
  languages: { ...localizedPaths(path), "x-default": path || "/" },
})

export const sitemapEntries = (siteUrl: string) =>
  pagePaths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      alternates: { languages: localizedPaths(path, siteUrl) },
    })),
  )
