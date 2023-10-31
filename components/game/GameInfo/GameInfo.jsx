import React from 'react'
import cn from 'classnames'
import cl from './GameInfo.module.scss'
import PlayerInfo from './PlayerInfo/PlayerInfo'
import { GAME_SYMBOLS } from '../constants'

export function GameInfo({
   className,
   style,
   currentMove,
   players,
   handlePlayerTimeOver,
   winnerSymbol,
}) {
   return (
      <div className={cn(className, cl.wrapper)} style={style}>
         {players.map((player, index) => (
            <PlayerInfo
               key={player.id}
               profile={player}
               isRight={index % 2}
               currentMove={currentMove}
               onPlayerTimeOver={handlePlayerTimeOver}
               winnerSymbol={winnerSymbol}
            />
         ))}
      </div>
   )
}
