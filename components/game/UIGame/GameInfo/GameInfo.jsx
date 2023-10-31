import React from 'react'
import { ICStar, ICPersonCount, ICTimer } from '../../../icons'
import cl from './GameInfo.module.scss'
export default function GameInfo({ playersCount, timeMode }) {
   return (
      <div className={cl.icons}>
         <ICStar />
         <div className={cl.icon}>
            <ICPersonCount />
            {playersCount}
         </div>
         <div className={cl.icon}>
            <ICTimer />
            {timeMode} мин на ход
         </div>
      </div>
   )
}
