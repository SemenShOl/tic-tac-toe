import React from 'react'
import cl from './HomePageLayout.module.scss'
export default function HomePageLayout({ children, header }) {
   return (
      <div className={cl.wrapper}>
         {header}
         <main className={cl.main}>{children}</main>
      </div>
   )
}
