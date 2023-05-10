import { Suspense } from 'react'
import './globals.css'
import { Gruppo } from 'next/font/google'

const gruppo = Gruppo({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Fernanda Romano Advocacia - Especialista em Direito de Família',
  description: 'Pensão Alimentícia, Divórcio, Regulamentção de Visita e Partilha de Bens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={gruppo.className}>
       <Suspense>
      <body className='bg-gradient-to-tr from-rose-400 to-rose-950'>{children}</body>
      </Suspense>
    </html>
  )
}
