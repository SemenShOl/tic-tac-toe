import Header from '../components/header/header'
import { GameTitle, GameInfo, GameField, useGameState } from '../components/game'
import { GAME_SYMBOLS } from '../components/game/constants'
import avatar from '../components/game/imgs/avatar.jpg'
import avatar1 from '../components/game/imgs/avatar1.png'
import avatar2 from '../components/game/imgs/avatar2.png'
import avatar3 from '../components/game/imgs/avatar3.png'
import HomePageLayout from './HomePageLayout/HomePageLayout'
import UIModal from '../components/UI/UIModal/UIModal'
import UIButton from '../components/UI/UIButton/UIButton'
const players = [
   { id: 1, login: 'Semen', rating: 400, avatar: avatar, symbol: GAME_SYMBOLS.CROSS },
   { id: 2, login: 'Petr', rating: 200, avatar: avatar1, symbol: GAME_SYMBOLS.ZERO },
   {
      id: 2,
      login: 'Sarasfgsgsfgsjfg;sfgjsfgjs;',
      rating: 200,
      avatar: avatar2,
      symbol: GAME_SYMBOLS.TRIANGLE,
   },
   {
      id: 2,
      login: 'Anna',
      rating: 100,
      avatar: avatar3,
      symbol: GAME_SYMBOLS.SQUARE,
   },
]

export default function HomePage() {
   const moveOrder = players.map(player => player.symbol)
   const [
      cells,
      currentMove,
      nextMove,
      handleCellClick,
      winnerSequence,
      handlePlayerTimeOver,
      winnerSymbol,
   ] = useGameState(moveOrder)
   const isModalOpen = winnerSymbol
   const setOnModalClose = () => {}
   return (
      <HomePageLayout header={<Header />}>
         {/* <UIModal
            isOpen={winnerSymbol}
            onClose={() => {
               isOpen = false
            }}>
            <UIModal.Header>Игра завершена</UIModal.Header>
            <UIModal.Main>
               <div className={cl.winnerInfo}>
                  Победитель: <span className={cl.winnerName}>Paromovevg</span>
               </div>
            </UIModal.Main>
            <UIModal.Footer>
               <UIButton outlined>Вернуться</UIButton>
               <UIButton>Играть снова</UIButton>
            </UIModal.Footer>
         </UIModal> */}

         <GameTitle playersCount={players.length} style={{ marginBottom: 17 }} />
         <GameInfo
            players={players}
            currentMove={currentMove}
            style={{ marginBottom: 24 }}
            winnerSymbol={!!winnerSymbol}
            handlePlayerTimeOver={handlePlayerTimeOver}
         />
         <GameField
            cells={cells}
            currentMove={currentMove}
            nextMove={nextMove}
            handleCellClick={handleCellClick}
            winnerSequence={winnerSequence}
            handlePlayerTimeOver={handlePlayerTimeOver}
         />
      </HomePageLayout>
   )
}
