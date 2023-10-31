import React from 'react'
import Image from 'next/image'
import avatarSrc from './avatar.png'
import cl from './profile.module.scss'

export function Profile({ login, rating, avatar = avatarSrc }) {
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
