'use client';

import { Caveat } from 'next/font/google'
import Image from 'next/image'

const caveat = Caveat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function AboutFernanda () {
  const stats = [
    {
      data: '+ de 2 mil',
      title: 'Mães ajudadas'
    },
    {
      data: '130 Mil',
      title: 'Pessoas acompanham seu trabalho'
    },
    {
      data: '+ de 40',
      title: 'Mães ajudadas todos os meses'
    },
    {
      data: '+ de 2 mil',
      title: 'Mães satisfeitas'
    }
  ]

  return (
    <>
      <div className='bg-gradient-to-t from-rose-900 to-rose-200'>
        <section className='py-14'>
          <div className='max-w-screen-xl mx-auto px-4 text-white text-center sm:text-left text-2xl font-bold gap-x-12 items-start justify-between lg:flex md:px-8'>
            <div className='sm:hidden lg:block lg:max-w-xl'>
              <Image
                src='/img/fernandaromanoblack.webp'
                width={400}
                height={400}
                loading='lazy'
                className='rounded-xl shadow-xl drop-shadow-xl'
                alt='About Fernanda'
              />
            </div>
            <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
              <div className='max-w-2xl'>
                <h1 className='text-4xl text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto md:text-5xl mb-4'>
                  A FR Advocacia atende
                </h1>
                <span className='text-center before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg font-extrabold mx-auto md:text-4xl before:bg-rose-950 relative inline-block'>
                  <span className='relative text-white'>
                    em todo o Brasil e Exterior de forma totalmente Online!
                  </span>
                </span>
                <p className='text-2xl text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto mt-6'>
                  Através de um atendimento humanizado e especializado no{' '}
                  <span className='text-2xl underline decoration-white/40'>
                    Direito das Famílias e Direito para Mulheres!
                  </span>
                </p>
                <p className='text-2xl text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto'>
                  Na nossa equipe, a força vem das{' '}
                  <span className='text-2xl underline decoration-white/40'>
                    mulheres!
                  </span>
                </p>
                <p className='text-2xl text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto'>
                  Com dedicação e conhecimento jurídico,{' '}
                  <span className='text-2xl underline decoration-white/40'>
                    buscamos sempre o melhor
                  </span>{' '}
                  resultado para cada processo e situação judicial, visando a
                  satisfação dos nossos clientes em resolver seus conflitos
                  através da lei.
                </p>
                <div className='flex-none mt-6 text-right'>
                  <ul className='inline-grid gap-y-4 gap-x-7 grid-cols-1'>
                    <li>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        fill='currentColor'
                        viewBox='0 0 256 256'
                      >
                        <path d='M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z'></path>
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className='flex-none text-right'>
                  <ul className='inline-grid gap-y-4 gap-x-7 grid-cols-1'>
                    <li className={caveat.className}>
                      <p className='text-3xl drop-shadow-lg text-white font-extrabold mx-auto'>
                        Com passos pequenos e firmes
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='py-14'>
              <div className='max-w-screen-xl mx-auto px-4 text-center md:px-8'>
                <ul className='mx-auto grid gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-4'>
                  {stats.map((item, idx) => (
                    <li
                      key={idx}
                      className='card group justify-start bg-rose-300/25 backdrop-blur-sm space-y-3 p-4 rounded-xl shadow-lg'
                    >
                      <h1 className='text-5xl text-white font-bold'>
                        {item.data}
                      </h1>
                      <h2 className='mt-3 text-white text-xl font-bold'>
                        {item.title}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
