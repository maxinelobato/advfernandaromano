import { Suspense } from 'react'
import Hero from './components/Hero'
import CardsSpecialty from './components/CardsSpecialty'
import AboutWork from './components/AboutWork'
import AboutFernanda from './components/AboutFernanda'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ButtonFloat from './components/ButtonFloat'
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
