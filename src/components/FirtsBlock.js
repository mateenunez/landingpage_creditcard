"use client"
import Link from "next/link"
import BackgroundLeftEffect from "./BackgroundLeftEffect"
import BackgroundRightEffect from "./BackgroundRightEffect"
import MotionTransition from "./MotionTransition"
import Image from "next/image"
import Reveal from "./Reveal"

function FirtsBlock() {
  return (
    <div className="relative p-4 md:py-48">
        <BackgroundRightEffect/>
        <BackgroundLeftEffect/>
        <div className="grid max-w-6xl mx-auto md:grid-cols-2">
        <div>
            <Reveal>
            <h1 className="text-5xl font-semibold"> Disfrutar lo simple es <span className="block text-orange-300"> esencial. </span></h1>
            </Reveal>
            <Reveal>
            <p className="max-w-md mt-10">Obtené la libertad financiera que te merecés. Las tarjetas de crédito te ofrecen excepcionales beneficios, premios, servicios y un mayor poder adquisitivo que te ayuda a hacer realidad tus sueños financieros y personales.</p>
            </Reveal>
            <Reveal>
            <div className="my-8">
                <Link href="#clients" className="px-4 py-3 rounded-md bg-gradient-to-t from-amber-600 to-yellow-500">Conocé más</Link> 
            </div>
            </Reveal>
        </div>
        <div>
            <MotionTransition className="flex items-center justify-center">
                <Image src={"/card-block.png"} alt="Tarjetas Premium" width={800} height={800} className="h-auto w-72 md:w-full"/>
            </MotionTransition>
        </div>
        

        </div>
    </div>
  )
}

export default FirtsBlock