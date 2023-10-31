import { ICSquare, ICTriangle, ICCross, ICZero } from '../gameIcons'
import { GAME_SYMBOLS } from '../constants'
export function GameSymbol({ children, className }) {
   const Icon =
      {
         [GAME_SYMBOLS.CROSS]: ICCross,
         [GAME_SYMBOLS.ZERO]: ICZero,
         [GAME_SYMBOLS.SQUARE]: ICSquare,
         [GAME_SYMBOLS.TRIANGLE]: ICTriangle,
      }[children] ?? Empty
   return (
      <div className={className}>
         <Icon />
      </div>
   )
}

const Empty = () => <div></div>
