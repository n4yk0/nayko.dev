import Image from "next/image"
import { ContactButtons } from "@/components/contact-buttons"
import { focusIcons } from "@/components/icons"
import type { Dictionary } from "@/lib/dictionaries"
import { NAME } from "@/lib/site"

export const Hero = ({ dict }: { dict: Dictionary }) => (
  <section aria-labelledby="hero-title" className="pb-14 pt-8 sm:pt-14">
    <h1 id="hero-title" className="font-serif text-4xl tracking-tight sm:text-5xl">
      {NAME}
    </h1>
    <p className="mt-3 text-lg text-muted-foreground">{dict.hero.role}</p>
    <div className="mt-8 flow-root">
      <Image
        src="/n4yk0.png"
        alt=""
        width={96}
        height={96}
        priority
        className="float-left mb-2 mr-5 h-24 w-24 rounded-full bg-white object-contain p-3 ring-1 ring-black/5"
      />
      <p className="text-pretty leading-relaxed">{dict.hero.bio}</p>
    </div>
    <ul className="mt-6 flex flex-wrap gap-2">
      {dict.hero.focus.map(({ id, label }) => {
        const Icon = focusIcons[id]
        return (
          <li key={id} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {label}
          </li>
        )
      })}
    </ul>
    <div className="mt-8">
      <ContactButtons labels={dict.hero} />
    </div>
  </section>
)
