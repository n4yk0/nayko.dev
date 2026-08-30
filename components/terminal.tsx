import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const Terminal = ({
  title,
  children,
  className,
}: {
  title?: string
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/70 bg-card/60 shadow-xl shadow-black/20 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </span>
        {title && <span className="ml-1.5 truncate font-mono text-xs text-muted-foreground">{title}</span>}
      </div>
      <div className="p-4 font-mono text-sm sm:p-5">{children}</div>
    </div>
  )
}
