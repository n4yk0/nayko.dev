import { describe, expect, it } from "vitest"
import { defaultLocale, isLocale, negotiateLocale } from "./i18n"

describe("negotiateLocale", () => {
  it("picks French for a French browser", () => {
    expect(negotiateLocale("fr-FR,fr;q=0.9")).toBe("fr")
  })

  it("picks English for a US browser", () => {
    expect(negotiateLocale("en-US,en;q=0.9")).toBe("en")
  })

  it("follows quality weights", () => {
    expect(negotiateLocale("en;q=0.5, fr;q=0.9")).toBe("fr")
  })

  it("falls back to the default for an unsupported language", () => {
    expect(negotiateLocale("de-DE")).toBe(defaultLocale)
  })

  it("falls back to the default when the header is missing or a wildcard", () => {
    expect(negotiateLocale(null)).toBe(defaultLocale)
    expect(negotiateLocale("*")).toBe(defaultLocale)
  })
})

describe("isLocale", () => {
  it("accepts supported locales only", () => {
    expect(isLocale("fr")).toBe(true)
    expect(isLocale("de")).toBe(false)
    expect(isLocale("")).toBe(false)
  })
})
