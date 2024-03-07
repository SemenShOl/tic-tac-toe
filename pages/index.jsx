import Header from "../components/header/header"
import {Game, useGameState} from "../components/game"
import cl from "../styles/HomePage.module.scss"
import Link from "next/link"
export default function HomePage() {
    return (
        <div className={cl.wrapper}>
            <Header />
            <div className={cl.main}>
                <Game />
            </div>
        </div>
    )
}
