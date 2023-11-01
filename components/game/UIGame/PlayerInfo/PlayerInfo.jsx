import React, {useEffect, useState} from "react";
import cl from "./PlayerInfo.module.scss";
import {GameSymbol} from "../GameSymbol";
import cn from "classnames";
import {Player} from "../Player/Player";
import {useNow} from "./../../../lib/timers";
export function PlayerInfo({profile, isRight, timer, timerStartAt}) {
   const now = useNow(1000, timerStartAt);
   const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
   const seconds = Math.ceil(mils / 1000);
   const minutesStr = String(Math.floor(seconds / 60)).padStart(2, "0");
   const secondsStr = String(Math.floor(seconds % 60)).padStart(2, "0");
   const isDanger = seconds <= 10;
   const getTimerColor = () => {
      if (!timerStartAt) {
         if (!seconds) return cl.timeIsOver;
         return cl.stopped;
      }
      return isDanger ? cl.danger : "";
   };

   return (
      <div className={cl.gamerInfo}>
         <div className={cl.profileWithSymbol} style={isRight ? {order: "3"} : {}}>
            <Player login={profile.login} rating={profile.rating} avatar={profile.avatar} />
            <GameSymbol className={cl.symbol}>{profile.symbol}</GameSymbol>
         </div>
         <div className={cl.separator} style={isRight ? {order: "2"} : {}}></div>

         <div className={cn(cl.timer, getTimerColor())} style={isRight ? {order: "1"} : {}}>
            <p>
               {minutesStr}:{secondsStr}
            </p>
         </div>
      </div>
   );
}
