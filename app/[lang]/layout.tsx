import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { GeistSerifRegular } from "geist/font/serif/regular"
import type { ReactNode } from "react"
import "../globals.css"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"
import { SITE_URL } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/n4yk0-badge.png" },
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSerifRegular.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-3 focus:py-2"
          >
            {dict.nav.skip}
          </a>
          <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 sm:px-6">
            <Header lang={lang} dict={dict} />
            <main id="content" className="flex-1">
              {children}
            </main>
            <Footer lang={lang} dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
