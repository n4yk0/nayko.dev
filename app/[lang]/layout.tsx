import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "../globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"
import { SITE_URL } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" })

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const params = await props.params
  const dict = await getDictionary(params.lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/n4yk0-badge.png" },
    alternates: {
      canonical: `/${params.lang}`,
      languages: { "en-US": "/en", "fr-FR": "/fr" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "profile",
      url: `/${params.lang}`,
      locale: params.lang === "fr" ? "fr_FR" : "en_US",
      images: [{ url: "/n4yk0-badge.png", width: 512, height: 512, alt: "n4yk0" }],
    },
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const params = await props.params
  const dict = await getDictionary(params.lang)
  const { children } = props

  return (
    <html lang={params.lang} className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 sm:px-6">
            <Navbar lang={params.lang} dict={dict} />
            <main className="flex-1 pt-28 sm:pt-32">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
