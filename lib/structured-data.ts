import { EMAIL, GITHUB_URL, HANDLE, LINKEDIN_URL, NAME, SITE_URL } from "./site"

export const personJsonLd = ({ lang, jobTitle, description }: { lang: string; jobTitle: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: HANDLE,
  url: `${SITE_URL}/${lang}`,
  email: `mailto:${EMAIL}`,
  jobTitle,
  description,
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsLanguage: ["fr", "en"],
})

export const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c")
