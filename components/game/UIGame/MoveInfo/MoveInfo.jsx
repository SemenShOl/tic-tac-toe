import React from 'react'
import { GameSymbol } from './../GameSymbol'
import cl from './MoveInfo.module.scss'
export default function MoveInfo({ currentSymbol, nextSymbol }) {
   return (
      <>
         <div className={cl.current}>
            <span>Ход:</span>
            <GameSymbol className={cl.currentSm}>{currentSymbol}</GameSymbol>
         </div>
         <div className={cl.next}>
            <span>Следующий:</span>
            <GameSymbol>{nextSymbol}</GameSymbol>
         </div>
      </>
   )
}
