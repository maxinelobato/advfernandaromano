import Link from 'next/link'
import WhatsappIcon from '../icons/whatsappicon'
export default function ButtonFloat () {
  return (
    <>
      <div className='items-center justify-center mx-auto'>
        <Link
          aria-label='Saiba mais'
          className='no-underline'
          id='text'
          href='https://api.whatsapp.com/send?phone=5551980187011&text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vim%20pelo%20site%20de%20Direito%20de%20Família.%20Podemos%20conversar%3F%20'
          style={{ textDecoration: 'none' }}
          target='_blank'
        >
          <button className='z-[100] fixed bottom-3 right-8 pl-2 w-12 h-12 bg-[#25D366] rounded-full hover:bg-green-800 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none'>
            <WhatsappIcon />
          </button>
        </Link>
      </div>
    </>
  )
}
