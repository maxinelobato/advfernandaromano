'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper";

import QuotesIcon from "../icons/quotesicon"
export function AboutWork(){

    const testimonials = [
        {
            img: "/img/clientes/cliente1.webp",
        },
        {
            img: "/img/clientes/cliente2.webp",
        },
        {
            img: "/img/clientes/cliente3.webp",
        },
        {
            img: "/img/clientes/cliente4.webp",
        },
        {
            img: "/img/clientes/cliente5.webp",
        },
        {
            img: "/img/clientes/cliente6.webp",
        },
        {
            img: "/img/clientes/cliente7.webp",
        },
        {
            img: "/img/clientes/cliente8.webp",
        },
        {
            img: "/img/clientes/cliente9.webp",
        },
        {
            img: "/img/clientes/cliente10.webp",
        },
        {
            img: "/img/clientes/cliente11.webp",
        },
        {
            img: "/img/clientes/cliente12.webp",
        },
        {
            img: "/img/clientes/cliente13.webp",
        },
        {
            img: "/img/clientes/cliente14.webp",
        },
        {
            img: "/img/clientes/cliente15.webp",
        },
        {
            img: "/img/clientes/cliente16.webp",
        },
        {
            img: "/img/clientes/cliente17.webp",
        },
    ]

    return(
        <>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl drop-shadow-lg text-white font-extrabold mx-auto md:text-5xl mb-4">
                Veja nossas mulheres e o quanto    
            </h1>
            <span className="before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg text-gray-300 font-extrabold mx-auto md:text-4xl before:bg-gradient-to-r from-rose-700 to-rose-950 relative inline-block">
        <span className="relative text-white">conhecemos a dor de uma mãe solo</span>
        </span>
            </div>
                <div className="mt-12">
                <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                spaceBetween={30}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
            
               >
                    <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                            <SwiperSlide>      
                                <li key={idx} className="space-y-3 p-4 rounded-xl">
                                <div className="card-body">
                                        <QuotesIcon/>
                                        <a href="https://www.instagram.com/feromano_adv/" className="text-white font-bold">@feromano_adv</a>
                                    </div>
                                        <div className="card w-72 space-y-0 p-2 pb-10">
                                            <figure><img src={item.img} width={600} height={600} loading="lazy" alt="Imagens" className="w-full rounded-lg"/></figure>
                                        </div>
                                </li>
                                </SwiperSlide>
                            ))
                        }
                    </ul>
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}