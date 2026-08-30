import Link from "next/link"

const NotFound = () => {
  return (
    <html lang="en" className="dark">
      <body className="flex h-screen flex-col items-center justify-center gap-4 bg-background font-mono text-foreground">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">404 · not found</p>
        <p className="text-sm text-muted-foreground">
          <span className="text-success">visitor@n4yk0</span>
          <span>:</span>
          <span className="text-primary">~</span>
          <span>$ cat this_page</span>
        </p>
        <p className="text-sm text-destructive">cat: this_page: No such file or directory</p>
        <Link
          href="/"
          className="text-sm text-primary underline underline-offset-4 hover:text-foreground"
        >
          cd ~ // back home
        </Link>
      </body>
    </html>
  )
}

export default NotFound
