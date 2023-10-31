import React from 'react'
import GameLayout from '../UIGame/GameLayout/GameLayout'
import GameInfo from './../UIGame/GameInfo/GameInfo'
import GameTitle from './../UIGame/GameTitle/GameTitle'
import BackLink from './../UIGame/BackLink/BackLink'
import { PLAYERS } from '../constants'
import PlayerInfo from '../UIGame/PlayerInfo/PlayerInfo'
import MoveInfo from './../UIGame/MoveInfo/MoveInfo'
import { useGameState } from '../model/useGameState'
import Cell from '../UIGame/Cell/Cell'
import GameModal from '../UIGame/GameModal/GameModal'
export function Game() {
   const moveOrder = PLAYERS.map(player => player.symbol)
   const [
      cells,
      currentMove,
      nextMove,
      handleCellClick,
      winnerSequence,
      handlePlayerTimeOver,
      winnerSymbol,
   ] = useGameState(moveOrder)
   console.log(winnerSymbol)
   const winnerLogin = PLAYERS.find(player => player.symbol === winnerSymbol)?.login
   return (
      <>
         <GameModal
            winnerLogin={winnerLogin}
            playersList={PLAYERS.map((player, index) => (
               <PlayerInfo
                  key={player.id}
                  profile={player}
                  isRight={index % 2}
                  seconds={60}
               />
            ))}
         />
         <GameLayout
            backLink={<BackLink />}
            gameTitle={<GameTitle />}
            gameInfo={<GameInfo playersCount={2} timeMode={1} />}
            playersList={PLAYERS.map((player, index) => (
               <PlayerInfo
                  key={player.id}
                  profile={player}
                  isRight={index % 2}
                  seconds={60}
               />
            ))}
            moveInfo={<MoveInfo currentSymbol={currentMove} nextSymbol={nextMove} />}
            gameCells={cells.map((line, i) =>
               line.map((symbol, j) => (
                  <Cell
                     index={[i, j]}
                     winnerSequence={winnerSequence}
                     key={i + j}
                     symbol={symbol}
                     onClick={() => handleCellClick([i, j])}
                  />
               )),
            )}
         />
      </>
   )
}
