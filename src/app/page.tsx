import { Suspense } from 'react'
import { AboutFernanda } from './components/AboutFernanda'
import { AboutWork } from './components/AboutWork'
import { CardsSpecialty } from './components/CardsSpecialty'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ButtonFloat } from './components/ButtonFloat'
export default function Home() {
  return (
    <>
    <Suspense>
    <Hero/>
    <CardsSpecialty/>
    <AboutWork/>
    <AboutFernanda/>
    <Faq/>
    <Footer/>
    <ButtonFloat/>
    </Suspense>
    </>
  )
}
