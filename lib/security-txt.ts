import { EMAIL, SITE_URL } from "./site"

const VALIDITY_DAYS = 364

export const buildSecurityTxt = (now: Date) => {
  const expires = new Date(now.getTime() + VALIDITY_DAYS * 24 * 60 * 60 * 1000)
  return [
    `Contact: mailto:${EMAIL}`,
    `Expires: ${expires.toISOString()}`,
    "Preferred-Languages: fr, en",
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    "",
  ].join("\n")
}
