import React, { useEffect, useState } from 'react'
import cl from './PlayerInfo.module.scss'
import { Profile } from './../../../profile/profile'
import { GameSymbol } from './../../GameSymbol'
import cn from 'classnames'
export default function PlayerInfo({
   profile,
   currentMove,
   isRight,
   onPlayerTimeOver,
   winnerSymbol,
}) {
   const [seconds, setSeconds] = useState(600)
   const minutesStr = String(Math.floor(seconds / 60)).padStart(2, '0')
   const secondsStr = String(Math.floor(seconds % 60)).padStart(2, '0')
   const isDanger = seconds <= 10
   const isTimerRunning = currentMove === profile.symbol && !winnerSymbol
   const getTimerColor = () => {
      if (!isTimerRunning) {
         if (!seconds) return cl.timeIsOver
         return cl.stopped
      }
      return isDanger ? cl.danger : ''
   }
   useEffect(() => {
      if (isTimerRunning) {
         const interID = setInterval(() => {
            setSeconds(lastState => Math.max(lastState - 1, 0))
         }, 1000)
         return () => {
            clearInterval(interID)
            setSeconds(lastState => (lastState ? lastState + 4 : 0))
         }
      }
   }, [isTimerRunning])

   useEffect(() => {
      if (!seconds) {
         onPlayerTimeOver(currentMove)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [seconds])
   return (
      <div className={cl.gamerInfo}>
         <div className={cl.profileWithSymbol} style={isRight ? { order: '3' } : {}}>
            <Profile
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
