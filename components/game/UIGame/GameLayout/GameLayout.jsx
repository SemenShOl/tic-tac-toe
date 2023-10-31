import React from 'react'
import cl from './GameLayout.module.scss'
import { UIButton } from './../../../UI/UIButton/UIButton'
export default function GameLayout({
   backLink,
   gameTitle,
   gameInfo,
   playersList,
   moveInfo,
   gameCells,
}) {
   return (
      <div>
         <div className={cl.header}>
            {backLink}
            {gameTitle}
            {gameInfo}
         </div>
         <div className={cl.playerInfo}>{playersList}</div>

         <div className={cl.field}>
            <div className={cl.matchInfo}>
               <div className={cl.moves}>{moveInfo}</div>
               <div className={cl.btns}>
                  <UIButton>Ничья</UIButton>
                  <UIButton outlined>Сдаться</UIButton>
               </div>
            </div>

            <div className={cl.gridWrapper}>{gameCells}</div>
         </div>
      </div>
   )
}
