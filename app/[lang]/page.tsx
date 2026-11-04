import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { HowIWork } from "@/components/sections/how-i-work"
import { Stack } from "@/components/sections/stack"
import { Work } from "@/components/sections/work"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict} />
      <Work dict={dict} />
      <HowIWork dict={dict} />
      <Experience dict={dict} />
      <Stack dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
