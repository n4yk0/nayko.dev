import { Fragment } from "react"
import { externalLinkProps } from "@/lib/links"
import { parseRichText } from "@/lib/rich-text"

export const RichText = ({ text }: { text: string }) => (
  <>
    {parseRichText(text).map((part, index) => (
      <Fragment key={index}>
        {part.type === "text" ? (
          part.value
        ) : (
          <a href={part.href} {...externalLinkProps(part.href)} className="link">
            {part.label}
          </a>
        )}
      </Fragment>
    ))}
  </>
)
