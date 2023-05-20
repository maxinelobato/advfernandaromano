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
      <section className='py-14'>
        <div className='max-w-screen-xl mx-auto px-4 text-white text-center sm:text-left text-2xl font-bold gap-x-12 items-start justify-between lg:flex md:px-8'>
          <div className='sm:hidden lg:block lg:max-w-xl'>
            <Image
              src='/img/fernandaromano3.webp'
              width={600}
              height={600}
              className='rounded-xl shadow-xl drop-shadow-xl'
              alt='About Fernanda'
            />
          </div>
          <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
            <div className='max-w-2xl'>
              <h1 className='text-4xl drop-shadow-lg text-white font-extrabold mx-auto md:text-5xl mb-4'>
                A FR Advocacia atende
              </h1>
              <span className='before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg font-extrabold mx-auto md:text-4xl before:bg-gradient-to-r from-rose-700 to-rose-950 relative inline-block'>
                <span className='relative text-white'>
                  em todo o Brasil e Exterior de forma totalmente Online!
                </span>
              </span>
              <p className='text-lg text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto mt-3'>
                Através de um atendimento humanizado e especializado no{' '}
                <span className='text-white text-xl font-bold'>
                  Direito das Famílias e Direito para Mulheres!
                </span>
              </p>
              <p className='text-lg text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto'>
                Na nossa equipe, a força vem das{' '}
                <span className='text-white text-xl font-bold'>mulheres!</span>
              </p>
              <p className='text-lg text-center drop-shadow-lg text-rose-950 font-extrabold mx-auto'>
                Com dedicação e conhecimento jurídico,{' '}
                <span className='text-white text-xl font-bold'>
                  buscamos sempre o melhor
                </span>{' '}
                resultado para cada processo e situação judicial, visando a
                satisfação dos nossos clientes em resolver seus conflitos
                através da lei.
              </p>
              <div className='flex-none mt-2 text-center sm:text-right'>
                <ul className='inline-grid gap-y-4 gap-x-7 grid-cols-1'>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='28'
                      height='28'
                      fill='#ffffff'
                      viewBox='0 0 256 256'
                    >
                      <path d='M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z'></path>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className='flex-none text-center sm:text-right'>
                <ul className='inline-grid gap-y-4 gap-x-7 grid-cols-1'>
                  <li className={caveat.className}>
                    <p className='text-xl drop-shadow-lg text-white font-extrabold mx-auto'>
                      Com passos pequenos e firmes
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex-none mt-6 md:mt-0 lg:mt-6'>
              <ul className='inline-grid gap-y-8 gap-x-14 grid-cols-2'>
                {stats.map((item, idx) => (
                  <li key={idx}>
                    <h3 className='text-5xl text-rose-950 font-bold'>
                      {item.data}
                    </h3>
                    <h4 className='mt-3 text-rose-950 text-xl font-bold'>
                      {item.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
