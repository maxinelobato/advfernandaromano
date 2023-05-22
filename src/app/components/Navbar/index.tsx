import Image from 'next/image'
export function Navbar () {
  return (
    <>
      <div className='navbar mb-4'>
        <div className='flex justify-start'>
          <div className='flex-1'>
            <a href='/'>
              <Image
                src='/img/logonavbar.svg'
                width={200}
                height={200}
                loading='eager'
                quality={100}
                alt='Fernanda Logo'
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
