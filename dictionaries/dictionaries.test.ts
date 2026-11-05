import { describe, expect, it } from "vitest"
import en from "./en.json"
import fr from "./fr.json"

type Shape = string | Shape[] | { [key: string]: Shape }

const shapeOf = (value: unknown): Shape => {
  if (Array.isArray(value)) return value.map(shapeOf)
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shapeOf(child)]))
  }
  return typeof value
}

describe("dictionaries", () => {
  it("fr has exactly the same structure as en", () => {
    expect(shapeOf(fr)).toEqual(shapeOf(en))
  })

  it("detects a missing key", () => {
    const { meta, ...withoutMeta } = fr
    expect(meta).toBeDefined()
    expect(shapeOf(withoutMeta)).not.toEqual(shapeOf(en))
  })
})
