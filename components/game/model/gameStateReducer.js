import {computingWinner} from "./computingWinner";
import {getNextMove} from "./getNextMove";
export const GAME_STATE_ACTIONS = {
   CELL_CLICK: "cell_click",
};
export const gameStateReducer = (state, action) => {
   switch (action.type) {
      case GAME_STATE_ACTIONS.CELL_CLICK: {
         const index = action.payload.index;
         const newCells = state.cells.map((line, i) => line.map((cell, j) => state.cells[i][j]));
         newCells[index[0]][index[1]] = state.currentMove;
         if (state.cells[index[0]][index[1]]) return state;
         return {
            ...state,
            currentMove: getNextMove(
               state.currentMove,
               state.moveOrder,
               state.playerWhoCannotMove,
            ),
            cells: newCells,
            winnerSequence: computingWinner(newCells, index, 3),
         };
      }
      default: {
         return state;
      }
   }
};

export const initGameState = ({moveOrder}) => ({
   cells: Array(19)
      .fill(null)
      .map(() => Array(19).fill(null)),
   currentMove: moveOrder[0],
   winnerSequence: null,
   playerWhoCannotMove: [],
   moveOrder,
});
