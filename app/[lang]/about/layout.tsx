export const metadata = {
  title: 'About | n4yk0',
  description: 'Learn more about n4yk0, a Software Engineer specializing in Next.js, Nest.js, and Python.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
