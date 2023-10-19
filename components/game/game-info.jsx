import { GameSymbol } from "./game-symbol";
import styles from "./game.module.css";

export function GameInfo({
    isDraw,
    winnerComb,
    currentStep,
    textStyle,
}) {
    if (isDraw) {
        return (
            <h2
                className={
                    textStyle
                }
            >
                This is
                draw
            </h2>
        );
    }

    if (winnerComb) {
        return (
            <h2
                className={
                    textStyle
                }
            >
                The
                winner
                is{" "}
                <GameSymbol
                    symbol={
                        currentStep
                    }
                />
            </h2>
        );
    }

    return (
        <h2
            className={
                textStyle
            }
        >
            Your move :{" "}
            <GameSymbol
                symbol={
                    currentStep
                }
            />
        </h2>
    );
}
