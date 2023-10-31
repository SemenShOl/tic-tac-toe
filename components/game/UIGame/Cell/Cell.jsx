import { GameSymbol } from './../GameSymbol'
import cl from './Cell.module.scss'
export default function Cell({ symbol, onClick, winnerSequence, index }) {
   const isWinner = (winnerSequence, index) =>
      winnerSequence?.find(
         element => element[0] === index[0] && element[1] === index[1],
      )

   return (
      <button
         className={cl.cell}
         style={
            isWinner(winnerSequence, [index[0], index[1]])
               ? { background: 'rgba(232, 42, 42, 0.1)' }
               : {}
         }
         disabled={!!winnerSequence}
         onClick={onClick}>
         <GameSymbol style={{ width: 20, height: 20 }}>{symbol}</GameSymbol>
      </button>
   )
}
