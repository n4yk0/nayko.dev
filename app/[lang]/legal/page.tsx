import type { Metadata } from "next"
import Link from "next/link"
import { RichText } from "@/components/rich-text"
import { getDictionary } from "@/lib/dictionaries"
import { alternatesFor } from "@/lib/seo"
import { EMAIL, NAME } from "@/lib/site"

const HOST = {
  name: "Vercel Inc.",
  address: ["440 N Barranca Avenue #4133", "Covina, CA 91723"],
  url: "https://vercel.com",
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: `${dict.legal.title} - ${NAME}`,
    alternates: alternatesFor(lang, "/legal"),
  }
}

export default async function Legal({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const { legal } = await getDictionary(lang)

  return (
    <article className="pb-16 pt-8 sm:pt-14">
      <h1 className="text-3xl font-semibold tracking-tight">{legal.title}</h1>

      <section aria-labelledby="publisher" className="mt-12">
        <h2 id="publisher" className="font-medium">
          {legal.publisher_title}
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {NAME}
          <br />
          {legal.contact_label}{" "}
          <a href={`mailto:${EMAIL}`} className="link">
            {EMAIL}
          </a>
        </p>
      </section>

      <section aria-labelledby="host" className="mt-10">
        <h2 id="host" className="font-medium">
          {legal.host_title}
        </h2>
        <address className="mt-2 not-italic leading-relaxed text-muted-foreground">
          {HOST.name}
          {HOST.address.map((line) => (
            <span key={line}>
              <br />
              {line}
            </span>
          ))}
          <br />
          {legal.host_country}
          <br />
          <a href={HOST.url} className="link">
            vercel.com
          </a>
        </address>
      </section>

      <section aria-labelledby="data" className="mt-10">
        <h2 id="data" className="font-medium">
          {legal.data_title}
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          <RichText text={legal.data} />
        </p>
      </section>

      <p className="mt-12 text-sm">
        <Link href={`/${lang}`} className="link">
          {legal.back}
        </Link>
      </p>
    </article>
  )
}
