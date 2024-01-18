"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import Reveal from './Reveal'
import MotionTransition from './MotionTransition'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCards} from 'swiper/modules'
import { DataCards } from './Data'
import Image from 'next/image'
import Payments from './Payments'


function ThirdBlock() {

  return (
    <div>
        <div className='relative px-6 py-20 md:py-64 md:px-0' id='findyourcard'>
        <div className='block max-w-6xl mx-auto md:grid md:grid-cols-2'>
            <Reveal>
                <h2 className='text-4xl font-semibold block'>Elejí la tarjeta más adecuada para vos:</h2>
                <h3 className='text-2xl font-semibold block py-6'>Contamos con tarjetas estándar, <span className='text-pink-700 cursor-pointer' >prepago</span>, <span className='text-yellow-600 cursor-pointer'> gold</span> y <span className='text-black bg-white rounded-lg cursor-pointer'>black</span>.</h3>
            </Reveal>
            <div className='px-6 py-6 md:py-0 md:px-20'>
                <MotionTransition>
                    <Swiper
                    effect='cards'
                    grabCursor={true}
                    modules={[EffectCards]}>
                    
                    {DataCards.map(({id, src, message}) => (
                        <SwiperSlide key={id}>
                            <Image src={src} alt="Mastercard creditcard" width={500} height={500}/>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </MotionTransition>
            </div>
        </div>
    </div>
    {/* <Payments/> (Comentado porque no funciona el Slide correctamente.)*/}
    </div>
  )
}

export default ThirdBlock