import Script from 'next/script'
import './globals.css'
import { Gruppo } from 'next/font/google'
import { Suspense } from 'react'
import Analytics from './components/Analytics'

const gruppo = Gruppo({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Fernanda Romano Advocacia - Especialista em Direito de Família',
  description:
    'Pensão Alimentícia, Divórcio, Regulamentção de Visita e Partilha de Bens'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={gruppo.className}>
        <Suspense>
          <main>{children}</main>
          <Suspense>
            <Analytics />
          </Suspense>
        </Suspense>
      </body>
    </html>
  )
}
