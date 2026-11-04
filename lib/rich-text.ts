export type RichTextPart = { type: "text"; value: string } | { type: "link"; label: string; href: string }

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

export const parseRichText = (text: string): RichTextPart[] => {
  const parts: RichTextPart[] = []
  let cursor = 0
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0
    if (index > cursor) parts.push({ type: "text", value: text.slice(cursor, index) })
    parts.push({ type: "link", label: match[1], href: match[2] })
    cursor = index + match[0].length
  }
  if (cursor < text.length) parts.push({ type: "text", value: text.slice(cursor) })
  return parts
}
