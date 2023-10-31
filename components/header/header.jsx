import React from 'react'
import logoSrc from './logo.svg'
import Image from 'next/image'
import { Profile } from '../profile'
import { ICArrowDown } from '../icons'
import UIButton from '../UI/UIButton/UIButton'

export default function Header() {
   return (
      <header className="flex h-24 items-center px-8 bg-white shadow-lg">
         <Image src={logoSrc} alt="logo" />
         <div className="w-px h-8 bg-white mx-6"></div>
         <UIButton lg>Играть</UIButton>
         <button className="ml-auto bg-white flex items-center gap-8 text-teal-600 hover:text-teal-500 transition-colors">
            <Profile login={'Semen Shishkin'} rating={400} />
            <ICArrowDown />
         </button>
      </header>
   )
}
