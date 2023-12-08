import { Inter } from 'next/font/google'
import './globals.css'
import Desktop from '@/components/navbar/Desktop/page'
import { BloggetContext } from '@/components/Context/Blogget/page'
import { BlogpostContext } from '@/components/Context/Blogpost/page'

import { ProfileUserContext } from '@/components/Context/UserprofileContext/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>
      <body className={inter.className}>
     
     <BloggetContext>
    <BlogpostContext>
    <ProfileUserContext>
    <Desktop/>
   
      {children}
      </ProfileUserContext>
    </BlogpostContext>
     </BloggetContext>
      
      </body>
    </html>
  )
}
