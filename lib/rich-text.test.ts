import { describe, expect, it } from "vitest"
import { parseRichText } from "./rich-text"

describe("parseRichText", () => {
  it("returns plain text untouched", () => {
    expect(parseRichText("no links here")).toEqual([{ type: "text", value: "no links here" }])
  })

  it("splits text around links", () => {
    expect(parseRichText("see [pstack](https://example.com/p) and [work](#work).")).toEqual([
      { type: "text", value: "see " },
      { type: "link", label: "pstack", href: "https://example.com/p" },
      { type: "text", value: " and " },
      { type: "link", label: "work", href: "#work" },
      { type: "text", value: "." },
    ])
  })

  it("handles a link at the very start and end", () => {
    expect(parseRichText("[a](#a)")).toEqual([{ type: "link", label: "a", href: "#a" }])
  })

  it("leaves malformed markup as text", () => {
    expect(parseRichText("[broken](no closing")).toEqual([{ type: "text", value: "[broken](no closing" }])
  })

  it("returns nothing for an empty string", () => {
    expect(parseRichText("")).toEqual([])
  })
})
