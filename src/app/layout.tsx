import './globals.css'
import { Inter } from 'next/font/google'
import Footer  from '../components/Footer/Footer'
import Head  from '../components/Head/Head'
import Background from '@/components/ulix/background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fox Solutions',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Footer/>
        <Head/>
      </body>
    </html>
  )
}