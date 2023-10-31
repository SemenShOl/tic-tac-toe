import React from 'react'
import cl from './PlayerInfo.module.scss'
import { GameSymbol } from '../GameSymbol'
import cn from 'classnames'
import { Player } from '../Player/Player'
export default function PlayerInfo({
   profile,
   isRight,
   seconds,
   isTimerRunning = true,
}) {
   const minutesStr = String(Math.floor(seconds / 60)).padStart(2, '0')
   const secondsStr = String(Math.floor(seconds % 60)).padStart(2, '0')
   const isDanger = seconds <= 10

   const getTimerColor = () => {
      if (!isTimerRunning) {
         if (!seconds) return cl.timeIsOver
         return cl.stopped
      }
      return isDanger ? cl.danger : ''
   }
   return (
      <div className={cl.gamerInfo}>
         <div className={cl.profileWithSymbol} style={isRight ? { order: '3' } : {}}>
            <Player
               login={profile.login}
               rating={profile.rating}
               avatar={profile.avatar}
            />
            <GameSymbol className={cl.symbol}>{profile.symbol}</GameSymbol>
         </div>
         <div className={cl.separator} style={isRight ? { order: '2' } : {}}></div>

         <div
            className={cn(cl.timer, getTimerColor())}
            style={isRight ? { order: '1' } : {}}>
            <p>
               {minutesStr}:{secondsStr}
            </p>
         </div>
      </div>
   )
}
