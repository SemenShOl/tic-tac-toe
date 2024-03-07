import React from "react"
import {UIModal} from "./../UI/UIModal/UIModal"
import {UIButton} from "./../UI/UIButton/UIButton"
import Link from "next/link"
import cl from "./MenuModal.module.scss"
export default function MenuModal() {
    return (
        <UIModal isOpen={true} onClose={true}>
            <UIModal.Header>TIC TAC TOE</UIModal.Header>
            <UIModal.Main className={cl.main}>
                <UIButton outlined lg path="/">
                    Играть
                </UIButton>
                <UIButton lg>Настройки</UIButton>
            </UIModal.Main>
        </UIModal>
    )
}
