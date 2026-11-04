import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { getDictionary } from "@/lib/dictionaries"
import { locales } from "@/lib/i18n"
import { HANDLE, NAME, SITE_URL } from "@/lib/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = NAME

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const logo = await readFile(join(process.cwd(), "public/n4yk0.png"), "base64")

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fafafa",
          color: "#1f1f1f",
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 52,
            background: "#ffffff",
            border: "1px solid #e5e5e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={`data:image/png;base64,${logo}`} width={76} height={76} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>{NAME}</div>
          <div style={{ fontSize: 40, marginTop: 20, color: "#525252" }}>{dict.hero.role}</div>
        </div>
        <div style={{ fontSize: 28, color: "#737373" }}>{`${new URL(SITE_URL).host} · ${HANDLE}`}</div>
      </div>
    ),
    size,
  )
}
