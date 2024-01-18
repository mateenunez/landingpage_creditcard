"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {RiMenu3Line} from 'react-icons/ri'
import { DataHeader } from './Data'
import MotionTransition from './MotionTransition'

function Header() {

    const [Menu, setMenu] = useState(false)

  return (
    <MotionTransition>
        <nav className='flex flex-wrap justify-between items-center max-w-6xl p-4 mx-auto md:py-8 '> 
            <Link href={"/"} className='flex gap-4 items-center'>
                <Image src={"/logo.png"} width={50} height={50} alt="Logo"></Image>
                Mastercard
            </Link>
            <RiMenu3Line className="block text-3xl md:hidden" onClick={() => setMenu(!Menu)}/>
            <div className={`${(Menu) ? ('block') : ('hidden')} w-full md:w-auto md:block`}>
            <div className='flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            {DataHeader.map(({title, id, link}) => (
                <div key={id} className='px-4 transition-all duration-500 ease-in-out'>
                    <Link href={link} className='text-lg hover:text-orange-400 md:text-base'>{title}</Link>
                </div>
            ))}
            </div>
            </div>
        </nav>
    </MotionTransition>
  )
}

export default Header