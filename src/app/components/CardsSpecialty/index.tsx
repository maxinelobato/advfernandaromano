import { AboutFernanda } from "../AboutFernanda"
import { AboutWork } from "../AboutWork"
import { Faq } from "../Faq"
import LawIcon from "../icons/lawicon"
export function CardsSpecialty(){

    const features = [
        {
            title: "Pensão Alimentícia",
            href: '#'
        },
        {
            title: "Regulamentação de Guarda e Visitas",
            href: '#'
        },
        {
            title: "Divórcio",
            href: '#'
        },
        {
            title: "Reconhecimento de União Estável",
            href: '#'
        },
        {
            title: "Partilha de Bens",
            href: '#'
        },
        {
            title: "Visitas Assistidas",
              href: '#'
        },
    ]

    return(
        <>
        <div className="hero-overlay bg-gradient-to-tr from-rose-400 to-rose-950">
            <section className="py-14">
            <div className="max-w-screen-lg mx-auto px-4 text-center md:px-8">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl drop-shadow-lg text-white font-extrabold mx-auto md:text-5xl mb-4">
                Qual das especialidades   
            </h1>
            <span className="before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg text-gray-300 font-extrabold mx-auto md:text-4xl before:bg-gradient-to-r from-rose-700 to-rose-950 relative inline-block">
                <span className="relative text-white">você precisa de ajuda?</span>
                </span>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <a href="#" className="group backdrop-blur-sm space-y-3 p-4 rounded-xl bg-rose-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white">
                                <li key={idx} className="card">
                                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
                                        <LawIcon/>
                                    </div>
                                    <h4 className="text-lg sm:text-2xl text-white font-semibold">
                                        {item.title}
                                    </h4>
                                </li>
                            </a>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-2">
                    <a href="#" className="group backdrop-blur-sm space-y-3 p-4 rounded-xl bg-rose-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white">
                                <li className="card">
                                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
                                        <LawIcon/>
                                    </div>
                                    <h4 className="text-lg sm:text-2xl text-white font-semibold">
                                        Adoção
                                    </h4>
                                </li>
                                </a>
                                <a href="#" className="group backdrop-blur-sm space-y-3 p-4 rounded-xl bg-rose-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white">
                                <li className="card">
                                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
                                        <LawIcon/>
                                    </div>
                                    <h4 className="text-lg sm:text-2xl text-white font-semibold">
                                    Revisão da Pensão Alimentícia
                                    </h4>
                                </li>
                            </a>
                    </ul>
                </div>
            </div>
        </section>
        <AboutWork/>
        <AboutFernanda/>
        <Faq/>
        </div>
    </>
    )
}