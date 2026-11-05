import type { Metadata } from "next"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { HowIWork } from "@/components/sections/how-i-work"
import { Stack } from "@/components/sections/stack"
import { Work } from "@/components/sections/work"
import { getDictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"
import { alternatesFor } from "@/lib/seo"
import { NAME } from "@/lib/site"
import { personJsonLd, serializeJsonLd } from "@/lib/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const { meta } = await getDictionary(lang)
  const alternateLocales = await Promise.all(
    locales.filter((locale) => locale !== lang).map(async (locale) => (await getDictionary(locale)).meta.og_locale),
  )

  return {
    title: meta.title,
    description: meta.description,
    alternates: alternatesFor(lang, ""),
    openGraph: {
      type: "profile",
      siteName: NAME,
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: meta.og_locale,
      alternateLocale: alternateLocales,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const person = personJsonLd({ lang, jobTitle: dict.meta.job_title, description: dict.meta.description })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(person) }} />
      <Hero dict={dict} />
      <Work dict={dict} />
      <HowIWork dict={dict} />
      <Experience dict={dict} />
      <Stack dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
