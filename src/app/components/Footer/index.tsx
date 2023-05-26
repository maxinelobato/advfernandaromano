import Image from 'next/image'

export default function Footer () {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z'></path>
        </svg>
      ),
      contact: 'advfernanda@fernanda.com'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z'></path>
        </svg>
      ),
      contact: '+55 (51) 98018-7011'
    }
  ]
  return (
    <>
      <div className='bg-rose-950'>
        <footer className='pt-10'>
          <div className='max-w-screen-xl mx-auto px-4 text-white md:px-8'>
            <div className='space-y-6 text-center max-w-screen-xl mx-auto sm:max-w-lg sm:mx-auto sm:text-center'>
              <a href='#'>
                <Image
                  src='/img/logonavbarbranca.svg'
                  quality={75}
                  loading='lazy'
                  width={100}
                  height={100}
                  alt='Logo Footer'
                  className='w-32 mx-auto sm:mx-auto'
                />
              </a>
              <p className='font-bold'>
                Fernanda Romano Advocacia - Especialista em Direito de Família
              </p>
              <div>
                <ul className='mt-6 flex flex-col gap-x-10 gap-y-6 items-center'>
                  {contactMethods.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-x-3'>
                      <div className='flex-none text-white'>{item.icon}</div>
                      <p>{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='stats shadow bg-black/30 backdrop-blur-sm'>
                <div className='stat'>
                  <div className='stat-title font-bold text-white text-lg'>
                    OAB/RS
                  </div>
                  <div className='stat-value font-medium text-white text-2xl'>
                    11.9723
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 py-10 text-center border-t md:text-center'>
              <p className='text-white'>
                © 2023 FR Advocacia. Todos os Direitos Reservados.
              </p>
            </div>
            <div className='py-4 text-center md:text-center'>
              <ul className='mx-auto items-center gap-4 mt-4 sm:text-sm sm:mt-0'>
                <li className='text-gray-400 mb-2'>Desenvolvido por</li>
                <li>
                  <Image
                    src='/signaturemidia.svg'
                    alt='Logo Signature'
                    width={60}
                    height={60}
                    quality={75}
                    loading='lazy'
                    className='w-12 mx-auto sm:mx-auto'
                  />
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
