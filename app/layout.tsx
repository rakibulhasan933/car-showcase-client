import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub ShowCase',
  description: 'Discover in the best car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
