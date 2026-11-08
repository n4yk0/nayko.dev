const NEW_TAB_REL = "noopener noreferrer"

const EXTERNAL_HREF = /^(https?:)?\/\//i

export const externalLinkProps = (href: string, rel?: string) =>
  EXTERNAL_HREF.test(href) ? { target: "_blank", rel: rel ? `${rel} ${NEW_TAB_REL}` : NEW_TAB_REL } : { rel }
