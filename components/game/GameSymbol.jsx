import { ICSquare, ICTriangle } from '../icons'
import { ICCross } from '../icons/GameIcons/ICCross'
import { ICZero } from '../icons/GameIcons/ICZero'
import { GAME_SYMBOLS } from './constants'
export function GameSymbol({ children, className }) {
   const Icon =
      {
         [GAME_SYMBOLS.CROSS]: ICCross,
         [GAME_SYMBOLS.ZERO]: ICZero,
         [GAME_SYMBOLS.SQUARE]: ICSquare,
         [GAME_SYMBOLS.TRIANGLE]: ICTriangle,
      }[children] ?? Empty
   return <Icon className={className} />
}

const Empty = () => <div></div>
