import {computingWinner} from "./computingWinner";
import {getNextMove} from "./getNextMove";
export const GAME_STATE_ACTIONS = {
   CELL_CLICK: "cell_click",
   TICK: "tick",
};

export const initGameState = ({moveOrder, defaultTimer, currentMoveStart}) => ({
   cells: Array(19)
      .fill(null)
      .map(() => Array(19).fill(null)),
   currentMove: moveOrder[0],
   currentMoveStart,
   winnerSequence: null,
   playerWhoCannotMove: [],
   moveOrder,
   timers: moveOrder.reduce((timers, symbol) => {
      timers[symbol] = defaultTimer;
      return timers;
   }, {}),
});

export const gameStateReducer = (state, action) => {
   switch (action.type) {
      case GAME_STATE_ACTIONS.CELL_CLICK: {
         const {index, now} = action.payload;

         const newCells = state.cells.map((line, i) => line.map((cell, j) => state.cells[i][j]));
         newCells[index[0]][index[1]] = state.currentMove;
         if (state.cells[index[0]][index[1]]) return state;

         return {
            ...state,
            currentMove: getNextMove(
               state.currentMove,
               state.moveOrder,
               state.playerWhoCannotMove,
               state.timers,
            ),
            currentMoveStart: action.payload.now,
            cells: newCells,
            winnerSequence: computingWinner(newCells, index, 3),
            timers: updateTimers(state, now),
         };
      }
      case GAME_STATE_ACTIONS.TICK: {
         const now = action.payload.now;
      }
      default: {
         return state;
      }
   }
};

function updateTimers(gameState, now) {
   const diff = now - gameState.currentMoveStart;
   const timer = gameState.timers[gameState.currentMove];
   return {
      ...gameState.timers,
      [gameState.currentMove]: timer - diff,
   };
}
function updateCells(gameState) {
   const newCells = gameState.cells.map((line, i) => line.map((cell, j) => gameState.cells[i][j]));
   newCells[index[0]][index[1]] = state.currentMove;
   return newCells;
}
