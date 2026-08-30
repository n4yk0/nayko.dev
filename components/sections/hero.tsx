import Image from "next/image"
import { Wifi } from "lucide-react"
import { ActionLinks } from "@/components/action-links"
import { Terminal } from "@/components/terminal"
import type { Dictionary } from "@/lib/dictionaries"

export const Hero = ({ dict }: { dict: Dictionary }) => {
  const { role, handle, tagline, years, prompt_user, prompt_host, whoami_cmd, whoami, status, french, english, remote } =
    dict.hero

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="flex flex-1 flex-col gap-5 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs tracking-wide text-primary sm:text-sm">
              <span className="text-muted-foreground/70">$</span> {role}
            </p>
            <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {handle}
              <span className="ml-0.5 inline-block text-primary animate-caret" aria-hidden="true">
                _
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{tagline}</p>

          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/40 bg-success/10 px-3 py-1 font-mono text-xs text-success">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              {status}
            </span>
            <span className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground">
              {years}
            </span>
            <span className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              {french}
            </span>
            <span className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              {english}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              <Wifi className="h-3 w-3" aria-hidden="true" />
              {remote}
            </span>
          </div>

          <ActionLinks dict={dict} className="justify-center sm:justify-start" />
        </div>

        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center sm:h-44 sm:w-44">
          <div className="brand-glow pointer-events-none absolute inset-0 rounded-full" aria-hidden="true" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg shadow-black/25 ring-1 ring-black/5 sm:h-36 sm:w-36">
            <Image
              src="/n4yk0.png"
              alt={handle}
              width={144}
              height={144}
              priority
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
          </div>
        </div>
      </div>

      <Terminal title={`${prompt_user}@${prompt_host}: ~`}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-success">
              {prompt_user}@{prompt_host}
            </span>
            <span className="text-muted-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">{whoami_cmd}</span>
          </div>
          <ul className="flex flex-col gap-1.5 text-muted-foreground">
            {whoami.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="select-none text-primary/70" aria-hidden="true">
                  ›
                </span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Terminal>
    </section>
  )
}
