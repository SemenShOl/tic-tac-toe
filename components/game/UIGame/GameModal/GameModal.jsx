import React from 'react'
import { UIButton, UIModal } from '../../../UI'
import cl from './GameModal.module.scss'
export default function GameModal({ winnerLogin, playersList }) {
   return (
      <UIModal
         isOpen={winnerLogin}
         onClose={() => {
            isOpen = false
         }}>
         <UIModal.Header>Игра завершена</UIModal.Header>
         <UIModal.Main>
            <div className={cl.winnerInfo}>
               Победитель: <span className={cl.winnerName}>{winnerLogin}</span>
            </div>
            <div className={cl.players}>{playersList}</div>
         </UIModal.Main>
         <UIModal.Footer>
            <UIButton outlined>Вернуться</UIButton>
            <UIButton>Играть снова</UIButton>
         </UIModal.Footer>
      </UIModal>
   )
}
