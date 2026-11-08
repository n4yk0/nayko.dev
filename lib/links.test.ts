import { describe, expect, it } from "vitest"
import { externalLinkProps } from "@/lib/links"

describe("externalLinkProps", () => {
  it("opens http and https links in a new tab without leaking the opener", () => {
    expect(externalLinkProps("https://github.com/n4yk0")).toEqual({ target: "_blank", rel: "noopener noreferrer" })
    expect(externalLinkProps("http://example.com")).toEqual({ target: "_blank", rel: "noopener noreferrer" })
  })

  it("treats protocol-relative and uppercase scheme links as external", () => {
    expect(externalLinkProps("//example.com").target).toBe("_blank")
    expect(externalLinkProps("HTTPS://example.com").target).toBe("_blank")
  })

  it("keeps an existing rel such as me", () => {
    expect(externalLinkProps("https://www.linkedin.com/in/x/", "me")).toEqual({
      target: "_blank",
      rel: "me noopener noreferrer",
    })
  })

  it("leaves mailto, relative and anchor links in the same tab", () => {
    for (const href of ["mailto:a@b.c", "/fr/legal", "#content", "fr"]) {
      expect(externalLinkProps(href)).toEqual({ rel: undefined })
    }
    expect(externalLinkProps("/fr", "me")).toEqual({ rel: "me" })
  })
})
