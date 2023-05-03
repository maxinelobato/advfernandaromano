import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
