import Link from "next/link"
import "./globals.css"
import en from "@/dictionaries/en.json"
import fr from "@/dictionaries/fr.json"

const NotFound = () => (
  <html lang="en">
    <body className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 font-sans">
      <h1 className="text-xl font-semibold">{en.not_found.title}</h1>
      <p lang="fr" className="text-muted-foreground">
        {fr.not_found.title}
      </p>
      <p className="flex gap-6 text-sm">
        <Link href="/en" className="link">
          {en.nav.home}
        </Link>
        <Link href="/fr" lang="fr" className="link">
          {fr.nav.home}
        </Link>
      </p>
    </body>
  </html>
)

export default NotFound
