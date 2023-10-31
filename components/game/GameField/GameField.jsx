import React, { useState } from 'react'
import cl from './GameField.module.scss'
import UIButton from '../../UI/UIButton/UIButton'
import { GameSymbol } from './../GameSymbol'

export function GameField({
   style,
   cells,
   currentMove,
   nextMove,
   handleCellClick,
   winnerSequence,
   handlePlayerTimeOver,
}) {
   return (
      <div className={cl.wrapper} style={style}>
         <MatchInfo currentMove={currentMove} nextMove={nextMove} />
         <Grid
            field={cells}
            handleCellClick={handleCellClick}
            winnerSequence={winnerSequence}
         />
      </div>
   )
}

function MatchInfo({ currentMove, nextMove }) {
   return (
      <div className={cl.info}>
         <MoveInfo currentSm={currentMove} nextSm={nextMove} />
         <div className={cl.btns}>
            <UIButton>Ничья</UIButton>
            <UIButton outlined>Сдаться</UIButton>
         </div>
      </div>
   )
}

function MoveInfo({ currentSm, nextSm }) {
   return (
      <div className={cl.moves}>
         <div className={cl.current}>
            <span>Ход:</span>
            <GameSymbol className={cl.currentSm}>{currentSm}</GameSymbol>
         </div>
         <div c className={cl.next}>
            <span>Следующий:</span>
            <GameSymbol>{nextSm}</GameSymbol>
         </div>
      </div>
   )
}

function Grid({ field, handleCellClick, winnerSequence }) {
   return (
      <div className={cl.field}>
         {field.map((line, i) =>
            line.map((symbol, j) => (
               <Cell
                  isWinner={isWinner(winnerSequence, [i, j])}
                  disabled={!!winnerSequence}
                  key={i + j}
                  symbol={symbol}
                  onClick={() => handleCellClick([i, j])}
               />
            )),
         )}
      </div>
   )
}

//проверяет принадлежит ли точка index выгрышной последовательности
const isWinner = (winnerSequence, index) =>
   winnerSequence?.find(element => element[0] === index[0] && element[1] === index[1])

function Cell({ symbol, onClick, isWinner, disabled }) {
   return (
      <button
         className={cl.cell}
         style={isWinner ? { background: 'rgba(232, 42, 42, 0.1)' } : {}}
         disabled={disabled}
         onClick={onClick}>
         <GameSymbol style={{ width: 20, height: 20 }}>{symbol}</GameSymbol>
      </button>
   )
}
