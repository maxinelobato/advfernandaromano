'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCube, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

import QuotesIcon from '../icons/quotesicon'
import Image from 'next/image'
export default function AboutWork () {
  return (
    <>
      <div className='bg-gradient-to-b from-rose-950 to-rose-200'>
        <section className='py-14'>
          <div className='max-w-screen-xl mx-auto px-4 text-center md:px-8'>
            <div className='max-w-5xl mx-auto'>
              <h1 className='text-4xl drop-shadow-lg text-white font-extrabold mx-auto md:text-5xl mb-4'>
                Veja nossas mulheres e o quanto
              </h1>
              <span className='before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg text-white font-extrabold mx-auto md:text-4xl before:bg-rose-800 relative inline-block'>
                <span className='relative text-white'>
                  conhecemos a dor de uma Mãe solo
                </span>
              </span>
            </div>
            <div className='mt-12'>
              <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true
                }}
                modules={[EffectCube, Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente1.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente2.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente3.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente4.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente5.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente6.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente7.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente8.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente9.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente10.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente11.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente12.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente13.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente14.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente15.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente16.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <li className='space-y-3 mx-auto p-4 rounded-xl'>
                      <div className='card w-72 space-y-0 p-2 pb-10'>
                        <div className='pb-4'>
                          <QuotesIcon />
                        </div>
                        <figure>
                          <Image
                            src='/img/clientes/cliente17.webp'
                            loading='lazy'
                            width={300}
                            height={300}
                            quality={75}
                            alt='Imagens'
                            className='w-full rounded-xl'
                          />
                        </figure>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
