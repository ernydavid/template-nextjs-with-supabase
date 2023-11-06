import type { Metadata } from 'next'
import * as React from 'react'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Navbar from '@/ui/nav-bar'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finance App',
  description: 'Finance app cargo'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} bg-background text-foreground w-full`}>
        <div className='w-full m-auto'>
          <Navbar />
          <div className='w-full pt-20'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
