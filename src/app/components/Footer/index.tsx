import Image from "next/image"

export function Footer(){

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]

    return(
        <>
        <div className="bg-rose-950">
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="space-y-6 text-center max-w-screen-xl mx-auto sm:max-w-lg sm:mx-auto sm:text-center">
                    <a href="#">
                    <Image src="/img/logonavbarbranca.svg" quality={75} loading="lazy" width={100} height={100} alt="Logo Footer" className="w-32 mx-auto sm:mx-auto" />
                    </a>
                    <p>
                    Fernanda Romano Advocacia - Especialista em Direito de Família
                    </p>
                    <p>
                    OAB - 0000000
                    </p>
                </div>
                <div className="mt-10 py-10 text-center max-w-screen-xl mx-auto border-t items-center justify-between sm:flex">
                    <p className="text-white">© 2023 FR Advocacia. Todos os Direitos Reservados.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        <li className="text-gray-500">
                            Desenvolvido por
                        </li>
                        <li>
                            <Image src="/signaturelogo.webp" alt="Logo Signature" width={60} height={60} quality={75} loading="lazy" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
        </>
    )
}