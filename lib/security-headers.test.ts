import { describe, expect, it } from "vitest"
import { securityHeaders } from "./security-headers"

const headerMap = (isDev: boolean) => new Map(securityHeaders(isDev).map(({ key, value }) => [key, value]))

describe("securityHeaders", () => {
  it("sets every expected header", () => {
    expect([...headerMap(false).keys()].sort()).toEqual(
      [
        "Content-Security-Policy",
        "Cross-Origin-Opener-Policy",
        "Permissions-Policy",
        "Referrer-Policy",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "X-Frame-Options",
      ].sort(),
    )
  })

  it("forbids framing, plugins and foreign base URLs", () => {
    const csp = headerMap(false).get("Content-Security-Policy")
    expect(csp).toContain("frame-ancestors 'none'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain("base-uri 'self'")
  })

  it("allows eval only in development", () => {
    expect(headerMap(false).get("Content-Security-Policy")).not.toContain("unsafe-eval")
    expect(headerMap(true).get("Content-Security-Policy")).toContain("'unsafe-eval'")
  })

  it("keeps HSTS for at least one year", () => {
    const maxAge = Number(/max-age=(\d+)/.exec(headerMap(false).get("Strict-Transport-Security") ?? "")?.[1])
    expect(maxAge).toBeGreaterThanOrEqual(31536000)
  })
})
