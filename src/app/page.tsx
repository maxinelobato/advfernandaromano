import { Inter } from 'next/font/google'
import { Hero } from './components/Hero'
import { CardsSpecialty } from './components/CardsSpecialty'
import { Credibility } from './components/Credibility'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
    {/* <Credibility/> */}
    <CardsSpecialty/>
    </>
  )
}
