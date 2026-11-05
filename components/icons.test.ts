import { describe, expect, it } from "vitest"
import en from "@/dictionaries/en.json"
import { focusIcons, otherWorkIcons, stackIcons, stepIcons, workIcons } from "./icons"

const missing = (ids: string[], map: Record<string, unknown>) => ids.filter((id) => !(id in map))

describe("icon maps", () => {
  it("cover every id used in the dictionary", () => {
    expect(missing(en.hero.focus.map((item) => item.id), focusIcons)).toEqual([])
    expect(missing(en.work.items.map((item) => item.id), workIcons)).toEqual([])
    expect(missing(en.work.other.items.map((item) => item.id), otherWorkIcons)).toEqual([])
    expect(missing(en.how.steps.map((step) => step.id), stepIcons)).toEqual([])
    expect(missing(en.stack.groups.map((group) => group.id), stackIcons)).toEqual([])
  })

  it("reports an id without an icon", () => {
    expect(missing(["unknown"], workIcons)).toEqual(["unknown"])
  })
})
