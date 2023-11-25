import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/src/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


export const metadata: Metadata = {
  title: 'Mercadinho',
  description: 'No description yet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-green text-gray-900 tracking-tight`}>
        <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
          {children}
        </div>
      </body>
    </html>
  )
}
