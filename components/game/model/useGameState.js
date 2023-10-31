import { useState } from 'react'
import { computingWinner } from './computingWinner'

function getNextMove(currentMove, moveOrder, playerWhoCannotMove) {
   const moveOrderMovablePlayers = moveOrder.filter(
      symbol => !playerWhoCannotMove.includes(symbol),
   )
   return (
      moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1] ??
      moveOrderMovablePlayers[0]
   )
}

export function useGameState(moveOrder) {
   const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] =
      useState(() => ({
         cells: Array(19)
            .fill(null)
            .map(() => Array(19).fill(null)),
         currentMove: moveOrder[0],
         winnerSequence: null,
         playerWhoCannotMove: [],
      }))

   const winnerSymbol = winnerSequence
      ? cells[winnerSequence?.[0][0]][winnerSequence?.[0][1]]
      : undefined
   console.log(winnerSymbol)
   const nextMove = getNextMove(currentMove, moveOrder, playerWhoCannotMove)

   const handleCellClick = index => {
      const newCells = cells.map((line, i) => line.map((cell, j) => cells[i][j]))
      newCells[index[0]][index[1]] = currentMove
      setGameState(lastGameState => {
         if (lastGameState.cells[index[0]][index[1]]) return lastGameState
         return {
            ...lastGameState,
            currentMove: getNextMove(
               lastGameState.currentMove,
               moveOrder,
               playerWhoCannotMove,
            ),
            cells: newCells,
            winnerSequence: computingWinner(newCells, index, 3),
         }
      })
   }

   const handlePlayerTimeOver = symbol => {
      const newPlayersWhoCannotMove = [...playerWhoCannotMove, symbol]
      if (newPlayersWhoCannotMove.length === 3) {
         setGameState(lastGameState => ({
            ...lastGameState,
            winnerSymbol: moveOrder.find(
               symbol => !newPlayersWhoCannotMove.includes(symbol),
            ),
         }))
      }
      setGameState(lastGameState => ({
         ...lastGameState,
         currentMove: getNextMove(
            lastGameState.currentMove,
            moveOrder,
            lastGameState.playerWhoCannotMove,
         ),
         playerWhoCannotMove: [...lastGameState.playerWhoCannotMove, symbol],
      }))
   }

   return [
      cells,
      currentMove,
      nextMove,
      handleCellClick,
      winnerSequence,
      handlePlayerTimeOver,
      winnerSymbol,
   ]
}

function isArraysEqual(firstArray, secondArray) {
   return firstArray.toString() === secondArray.toString()
}
