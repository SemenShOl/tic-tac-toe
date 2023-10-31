import React from 'react'
import { ICArrowLeft } from '../../../icons'
import cl from './BackLink.module.scss'
import Link from 'next/link'
export default function BackLink() {
   return (
      <div>
         <Link href="#" className={cl.link}>
            <ICArrowLeft />
            На главную
         </Link>
      </div>
   )
}
