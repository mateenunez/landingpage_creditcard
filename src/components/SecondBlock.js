import Image from "next/image"
import Reveal from "./Reveal"


function SecondBlock() {
  return (
    <div className="relative py-20 px-6 md:px-0 md:py-60 flex justify-start items-center" id="cards">
        <Image src={"/cards.jpg"} alt="Tarjetas Mastercard" width={1000} height={350} className="w-full absolute -z-10 opacity-75"/>
        <div className="md:py-10 md:px-48">
        <Reveal>
        <h2 className="text-5xl ">Encuentra la <span className="block text-orange-300"> tarjeta ideal </span> para ti</h2>
        </Reveal>
        <Reveal>
        <p className="max-w-md mt-10">Disfruta de lo último en practicidad y control financiero, al combinar la aceptación mundial con los beneficios de las tarjetas Mastercard, con descuento directo de tu cuenta corriente.</p>
        </Reveal>
        </div>
    
    </div>
  )
}

export default SecondBlock