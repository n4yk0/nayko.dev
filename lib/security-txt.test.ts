import { describe, expect, it } from "vitest"
import { buildSecurityTxt } from "./security-txt"

const field = (body: string, name: string) =>
  body
    .split("\n")
    .find((line) => line.startsWith(`${name}: `))
    ?.slice(name.length + 2)

describe("buildSecurityTxt", () => {
  const now = new Date("2026-11-04T12:00:00Z")
  const body = buildSecurityTxt(now)

  it("contains the fields RFC 9116 requires", () => {
    expect(field(body, "Contact")).toMatch(/^mailto:.+@.+/)
    expect(field(body, "Expires")).toBeDefined()
  })

  it("expires in the future but less than a year after the build", () => {
    const expires = new Date(field(body, "Expires") ?? "")
    const oneYearLater = new Date(now)
    oneYearLater.setUTCFullYear(now.getUTCFullYear() + 1)
    expect(expires.getTime()).toBeGreaterThan(now.getTime())
    expect(expires.getTime()).toBeLessThan(oneYearLater.getTime())
  })

  it("points its canonical URL at the well-known location", () => {
    expect(field(body, "Canonical")).toMatch(/^https?:\/\/[^/]+\/\.well-known\/security\.txt$/)
  })

  it("ends with a newline", () => {
    expect(body.endsWith("\n")).toBe(true)
  })
})
