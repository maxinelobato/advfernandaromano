import Link from 'next/link';
export default function ButtonHero () {
  return (
    <>
      <Link
        aria-label='Saiba mais'
        className='no-underline'
        href='https://api.whatsapp.com/send?phone=5551980187011&text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vim%20pelo%20site%20de%20Direito%20de%20Família.%20Podemos%20conversar%3F%20'
        target='_blank'
      >
        <button className='btn flex bg-white glass rounded-xl justify-center items-center gap-2 px-7 py-4 btn-wide text-rose-950 font-bold hover:ring-2 hover:ring-white hover:text-white hover:-translate-x-0 hover:duration-300 hover:scale-110'>
          Fale com a Dra. Fernanda
        </button>
      </Link>
    </>
  )
}
