import { AboutWork } from "../AboutWork";
import { ButtonHero } from "../ButtonHero";
import { CardsSpecialty } from "../CardsSpecialty";
import { Credibility } from "../Credibility";
import { Navbar } from "../Navbar";
export function Hero(){
    return(
    <>
<div className="hero min-h-min bg-[url('/img/fernandaromano.webp')] md:bg-['/img/fernandaromano2.webp'] xl:bg-[url('/img/fernandaromano2.webp')] loading">
        <div className="hero-overlay bg-gradient-to-r from-rose-400/60 bg-opacity-25">
    <section className="py-16 mt-36">
            <div className="max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8">
                <div className="space-y-4 max-w-xl">
                <div className="card min-w-full w-full h-auto backdrop-blur-sm bg-rose-300/5 shadow-lg">
                <div className="card-body">
                <Navbar/>    
                <h1 className="text-2xl drop-shadow-lg text-gray-100 font-extrabold mx-auto md:text-4xl">
                      Buscando uma Advogada  <span className="text-transparent bg-clip-text bg-rose-950">especialista em Direito de Família?</span>
                    </h1>
                    <h2 className="pt-2 pb-2 text-lg drop-shadow-lg text-gray-200 mx-auto">
                    A Dra. Fernanda já atendeu mais de 2mil casos na área da Família.
                    </h2>
                    <ButtonHero/>
                    <Credibility/>
                </div>
                </div>
                </div>
            </div>
        </section>
  </div>
</div>
<CardsSpecialty/>
</>
    )
}