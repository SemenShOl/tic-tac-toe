import { useState } from "react";
import {
    SYMBOL_O,
    SYMBOL_X,
} from "./constants";

const computeWinner =
    cells => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (
            let i = 0;
            i <
            lines.length;
            i++
        ) {
            const [
                a,
                b,
                c,
            ] =
                lines[
                    i
                ];
            if (
                cells[
                    a
                ] &&
                cells[
                    a
                ] ==
                    cells[
                        b
                    ] &&
                cells[
                    a
                ] ==
                    cells[
                        c
                    ]
            ) {
                return [
                    a,
                    b,
                    c,
                ];
            }
        }
    };

export function useGameState() {
    const [
        currentStep,
        setCurrentStep,
    ] = useState(
        SYMBOL_X
    );
    const [
        cells,
        setCells,
    ] = useState(
        Array(9).fill(
            null
        )
    );
    const [
        winnerComb,
        setWinnerComb,
    ] = useState();

    function HandleCellClick(
        index
    ) {
        if (
            cells[
                index
            ] ||
            winnerComb
        )
            return;

        const cellsCopy =
            cells.slice();
        cellsCopy[
            index
        ] = currentStep;
        const winner =
            computeWinner(
                cellsCopy
            );

        setCells(
            cellsCopy
        );
        if (!winner)
            setCurrentStep(
                currentStep ==
                    SYMBOL_X
                    ? SYMBOL_O
                    : SYMBOL_X
            );
        setWinnerComb(
            winner
        );
    }

    function handleClearClick() {
        const cellsCopy =
            Array(
                9
            ).fill(
                null
            );
        setCells(
            cellsCopy
        );
        setCurrentStep(
            SYMBOL_X
        );
        setWinnerComb(
            undefined
        );
    }

    const isDraw =
        !cells.includes(
            null
        ) &&
        !computeWinner(
            cells
        );

    return {
        currentStep,
        cells,
        winnerComb,
        HandleCellClick,
        handleClearClick,
        isDraw,
    };
}
