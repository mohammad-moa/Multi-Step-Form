import '@/styles/globals.css'
import { Comfortaa } from 'next/font/google'

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "500", "700"]
})

export const metadata = {
  title: 'Home Page',
  description: 'This is home page design - Multi Step Form',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
