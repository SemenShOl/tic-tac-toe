import Link from 'next/link'
import React from 'react'
import { ICPersonCount, ICArrowLeft, ICStar, ICTimer } from '../../icons'
import cl from './GameTitle.module.scss'
export function GameTitle({ style, playersCount }) {
   return (
      <div className={cl.wrapper} style={style}>
         <Link href="#" className={cl.link}>
            <ICArrowLeft />
            На главную
         </Link>
         <h1 className={cl.title}>Крестики нолики </h1>
         <div className={cl.icons}>
            <ICStar />
            <div className={cl.icon}>
               <ICPersonCount />
               {playersCount}
            </div>
            <div className={cl.icon}>
               <ICTimer />1 мин на ход
            </div>
         </div>

         <div></div>
      </div>
   )
}
