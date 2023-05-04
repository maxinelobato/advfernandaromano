import Image from "next/image";
import { ButtonHero } from "../ButtonHero";
import { Credibility } from "../Credibility";
export function Hero(){
    return(
    <>
    <div className="hero min-h-min bg-[url('/img/fernandaromano.jpg')] md:bg-['/img/fernandaromano2.jpg'] xl:bg-[url('/img/fernandaromano2.jpg')] loading">
        <div className="hero-overlay bg-gradient-to-r from-[#2F1813]/60 bg-opacity-25">
        <header>
    <nav className="flex justify-center pb-20 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
     <a href="/" className="drop-shadow-lg">
        <Image
            src="/img/logo-branca.png" 
            width={300} 
            height={50}
            alt="Fernanda Logo"
            />
        </a>
        </nav>
    </header>
    <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8">
                <div className="space-y-10 max-w-xl">
                <div className="card min-w-full w-full h-auto backdrop-blur-sm bg-rose-300/20 shadow-lg">
                <div className="card-body">
                <h1 className="text-3xl drop-shadow-lg text-gray-100 font-extrabold mx-auto md:text-4xl">
                      Buscando uma Advogada  <span className="text-transparent bg-clip-text bg-rose-950">especialista em Direito de Família?</span>
                    </h1>
                    <h2 className="pt-4 pb-4 max-w-2xl text-lg drop-shadow-lg text-gray-200 mx-auto">
                    A Dra. Fernanda já atendeu mais de 2mil casos na área da Família.
                    </h2>
                    <ButtonHero/>
                </div>
                </div>
                </div>
            </div>
        </section>
        <Credibility/>
  </div>
</div>
</>
    )
}