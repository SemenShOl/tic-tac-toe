import Header from '../components/header/header'
import { Game, useGameState } from '../components/game'
import HomePageLayout from './HomePageLayout/HomePageLayout'

export default function HomePage() {
   // const moveOrder = players.map(player => player.symbol)
   // const [
   //    cells,
   //    currentMove,
   //    nextMove,
   //    handleCellClick,
   //    winnerSequence,
   //    handlePlayerTimeOver,
   //    winnerSymbol,
   // ] = useGameState(moveOrder)
   // const isModalOpen = winnerSymbol
   // const setOnModalClose = () => {}
   return <HomePageLayout header={<Header />}>{<Game />}</HomePageLayout>
}
