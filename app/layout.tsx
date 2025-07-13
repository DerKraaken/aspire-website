// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'ASPIRE',
  description: 'Austrian Study on Post-Intervention Recovery and Employment'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
