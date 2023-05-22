import ButtonHero from '../ButtonHero'
import Credibility from '../Credibility'
import { Navbar } from '../Navbar'
export default function Hero () {
  return (
    <>
      <div className="hero min-h-mi bg-no-repeat bg-center bg-[url('/img/fernandaromano2.webp')] sm:bg-[url('/img/fernandaromano2.webp')] md:bg-[url('/img/fernandaromano.webp')]">
        <div className='hero-overlay bg-gradient-to-r from-rose-950 from-5% bg-opacity-0'>
          <section className='py-16 mt-32'>
            <div className='max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8'>
              <div className='space-y-4 max-w-xl'>
                <div className='card-compact rounded-2xl min-w-full w-full h-auto backdrop-blur-sm bg-rose-300/5 shadow-lg'>
                  <div className='card-body'>
                    <Navbar />
                    <h3 className='text-2xl md:text-4xl text-left drop-shadow-lg text-white font-extrabold mx-auto'>
                      Buscando uma Advogada especialista em Direito de Família?
                    </h3>
                    <p className='text-sm md:text-lg pt-1 pb-1 leading-relaxed font-bold text-white'>
                      A Dra. Fernanda já atendeu mais de 2mil casos na área da
                      Família.
                    </p>
                    <ButtonHero />
                    <Credibility />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
