"use client"

import Image from "next/image"
import { DataFooter, DataSocialMediaFooter } from "./Data"
import Reveal from "./Reveal"
import Link from "next/link"

function FourthBlock() {
  return (
    <div className="max-w-6xl p-6 mx-auto mt-10 md:mt-40">
        <div className="md:flex justify-between ">
            <div className="items-center flex flex-col">
                <Image src="/logo.png" alt="Mastercard" height={40} width={80} />
                <h2>© 1994-2024 Mastercard. </h2>
            </div>
            {DataFooter.map(({id, title, links}) => (
                <div key={id}> 
                <h4 className="mt-8 text-lg md:mt-0"><Reveal>{title}</Reveal></h4>
                {links.map(({id,subtitle}) => (
                    <div key={id}>
                        <Link href={"/"} className="block mt-4 text-gray-400 hover:scale-105 hover:text-white"><Reveal>{subtitle}</Reveal></Link>
                    </div>
                ) )}
                </div>
            ))}
        </div>
        <div className="my-7 border-gray-500 border-t" >
            <div className="items-center justify-between md:flex">
                <div className="flex gap-5 my-3">
                    {DataSocialMediaFooter.map(({id,icon,link}) => (
                        <Link key={id} href={link} className="text-2xl hover:scale-105">
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthBlock