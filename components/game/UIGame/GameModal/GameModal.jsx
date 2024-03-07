import React from "react"
import {UIButton, UIModal} from "../../../UI"
import cl from "./GameModal.module.scss"
import Link from "next/link"
export function GameModal({
    isOpen,
    winnerLogin,
    playersList,
    onGameRestart,
}) {
    return (
        <UIModal isOpen={!!winnerLogin}>
            <UIModal.Header>Игра завершена</UIModal.Header>
            <UIModal.Main>
                <div className={cl.winnerInfo}>
                    <span>Победитель: </span>
                    <span className={cl.winnerName}>
                        {" " + winnerLogin}
                    </span>
                </div>
                <div className={cl.players}>{playersList}</div>
            </UIModal.Main>
            <UIModal.Footer>
                <UIButton outlined path="/menu">
                    Вернуться
                </UIButton>
                <UIButton onClick={onGameRestart}>
                    Играть снова
                </UIButton>
            </UIModal.Footer>
        </UIModal>
    )
}
