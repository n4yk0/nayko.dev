import { describe, expect, it } from "vitest"
import { personJsonLd, serializeJsonLd } from "./structured-data"

describe("personJsonLd", () => {
  const person = personJsonLd({ lang: "fr", jobTitle: "Ingénieur logiciel", description: "desc" })

  it("describes a schema.org Person with the real name and the handle", () => {
    expect(person["@context"]).toBe("https://schema.org")
    expect(person["@type"]).toBe("Person")
    expect(person.name).toBe("Alexis Sanchis")
    expect(person.alternateName).toBe("n4yk0")
  })

  it("points to the localized page and the GitHub and LinkedIn profiles", () => {
    expect(person.url).toMatch(/\/fr$/)
    expect(person.sameAs).toEqual([
      "https://github.com/n4yk0",
      "https://www.linkedin.com/in/alexis-sanchis-617301129/",
    ])
  })

  it("lists both nationalities as schema.org countries", () => {
    expect(person.nationality).toEqual([
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Switzerland" },
    ])
  })
})

describe("serializeJsonLd", () => {
  it("escapes < so the payload cannot close its script tag", () => {
    const serialized = serializeJsonLd({ text: "</script><script>alert(1)</script>" })
    expect(serialized).not.toContain("<")
    expect(JSON.parse(serialized)).toEqual({ text: "</script><script>alert(1)</script>" })
  })
})
