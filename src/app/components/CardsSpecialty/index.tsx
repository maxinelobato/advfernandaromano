import PensaoIcon from "../icons/pensao"

export function CardsSpecialty(){

    const features = [
        {
            title: "Pensão/Revisão Alimentícia",
        },
        {
            title: "Regulamentação de Guarda e Visitas",
        },
        {
            title: "Divórcio",
        },
        {
            title: "Reconhecimento de União Estável",
        },
        {
            title: "Partilha de Bens",
        },
        {
            title: "Visitas Assistidas",
        },
    ]

    return(
        <>
        <div className="hero-overlay bg-gradient-to-r from-[#D5BEB8] to-[#A7818D]">
            <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl drop-shadow-lg text-[#2C1718] font-extrabold mx-auto md:text-5xl">
                Nossas Especialidades          
            </h1>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3 backdrop-blur-sm bg-white/30 p-4 border rounded-lg">
                                    <div className="w-12 h-12 mx-auto text-[#2C1718] rounded-full flex items-center justify-center">
                                        <PensaoIcon/>
                                    </div>
                                    <h4 className="text-lg text-stone-950 font-semibold">
                                        {item.title}
                                    </h4>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </div>
    </>
    )
}