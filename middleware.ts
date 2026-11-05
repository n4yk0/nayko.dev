import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, negotiateLocale } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  if (hasLocale) return

  request.nextUrl.pathname = `/${negotiateLocale(request.headers.get("accept-language"))}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
