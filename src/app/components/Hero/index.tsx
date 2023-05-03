import Image from "next/image";
import { ButtonHero } from "../ButtonHero";

export function Hero(){
    return(
    <>
    <div className="hero min-h-screen bg-[url('/img/fernandaromano.jpg')] md:bg-['/img/fernandaromano2.jpg'] xl:bg-[url('/img/fernandaromano2.jpg')]">
        <div className="hero-overlay bg-gradient-to-r from-[#2F1813]/60 bg-opacity-25">
        <header>
    <nav className="flex justify-center pb-20 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
        <a href="/">
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
                <div className="card min-w-full w-full h-auto backdrop-blur-sm bg-white/5 shadow-lg">
                <div className="card-body">
                <h1 className="text-4xl drop-shadow-lg text-gray-100 font-extrabold mx-auto md:text-5xl">
                      Buscando uma Advogada  <span className="text-transparent bg-clip-text bg-[#2C1718]">especialista em Direito de Família?</span>
                    </h1>
                    <h2 className="pt-4 pb-4 max-w-2xl text-lg drop-shadow-lg text-gray-200 mx-auto">
                    A Dra. Fernanda atende mais de 40 casos na área da Família todos os meses seja você um desses casos.
                    </h2>
                    <ButtonHero/>
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