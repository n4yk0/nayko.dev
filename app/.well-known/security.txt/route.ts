import { buildSecurityTxt } from "@/lib/security-txt"

export const dynamic = "force-static"

export function GET() {
  return new Response(buildSecurityTxt(new Date()), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
