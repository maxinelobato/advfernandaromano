import { Inter } from 'next/font/google'
import { Hero } from './components/Hero'
import { CardsSpecialty } from './components/CardsSpecialty'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
    <CardsSpecialty/>
    </>
  )
}
