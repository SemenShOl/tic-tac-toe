import React from 'react'
import Image from 'next/image'
import cl from './Player.module.scss'

export function Player({ login, rating, avatar }) {
   return (
      <div className={cl.wrapper}>
         <Image src={avatar} alt="avatar" width={48} height={48} unoptimized />
         <div>
            <div className={cl.login}>{login}</div>
            <div className={cl.rating}>Рейтинг {rating}</div>
         </div>
      </div>
   )
}
