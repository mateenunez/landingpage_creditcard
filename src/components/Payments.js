"use client"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DataPayments } from "./Data"
import Image from "next/image"

function Payments() {
  return (
    <div className="relative py-20 ">
        <div className="relative w-full overflow-hidden">
            <Swiper autoplay={{delay: 1, disableOnInteraction:false}} slidesPerView={8} spaceBetween={10}>
                {DataPayments.map(({id, src}) => (
                        <SwiperSlide key={id} className="flex items-center" > 
                            <Image src={src} alt="Payments method" height="70" width="70" className="h-[60px] w-[120px] object-contain"/>
                        </SwiperSlide>
                    ))}
                
            </Swiper>

        </div>
    </div>
  )
}

export default Payments