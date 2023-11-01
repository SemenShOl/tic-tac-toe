import {useReducer, React, useCallback} from "react";

import {
   PlayerInfo,
   BackLink,
   GameLayout,
   GameInfo,
   GameTitle,
   MoveInfo,
   Cell,
   GameModal,
} from "../UIGame";
import {PLAYERS} from "../constants";
import {GAME_STATE_ACTIONS, initGameState, gameStateReducer} from "../model/gameStateReducer";
import {computeWinnerSymbol} from "./../model/computeWinnerSymbol";
import {getNextMove} from "../model/getNextMove";
import {computePlayerTimer} from "../model/computePlayerTimer";
import {useInterval} from "../../lib/timers";

export function Game() {
   const moveOrder = PLAYERS.map((player) => player.symbol);

   const [gameState, dispatch] = useReducer(
      gameStateReducer,
      {
         moveOrder,
         defaultTimer: 2000,
         currentMoveStart: Date.now(),
      },
      initGameState,
   );
   useInterval(1000, gameState.currentMoveStart, () => {
      dispatch({
         type: GAME_STATE_ACTIONS.TICK,
         payload: {
            now: Date.now(),
         },
      });
   });

   const winnerSymbol = computeWinnerSymbol(gameState);
   const nextMove = getNextMove(
      gameState.currentMove,
      moveOrder,
      gameState.playerWhoCannotMove,
      gameState.timers,
   );
   const winnerLogin = PLAYERS.find((player) => player.symbol === winnerSymbol)?.login;
   const handleCellClick = useCallback((i, j) => {
      dispatch({
         type: GAME_STATE_ACTIONS.CELL_CLICK,
         payload: {
            index: [i, j],
            now: Date.now(),
         },
      });
   }, []);
   return (
      <>
         <GameModal
            winnerLogin={winnerLogin}
            playersList={PLAYERS.map((player, index) => (
               <PlayerInfo
                  key={player.id}
                  profile={player}
                  isRight={index % 2}
                  timer={gameState.timers[player.symbol]}
               />
            ))}
         />
         <GameLayout
            backLink={<BackLink />}
            gameTitle={<GameTitle />}
            gameInfo={<GameInfo playersCount={2} timeMode={1} />}
            playersList={PLAYERS.map((player, index) => {
               const {timer, timerStartAt} = computePlayerTimer(player, gameState);
               return (
                  <PlayerInfo
                     key={player.id}
                     profile={player}
                     timer={timer}
                     timerStartAt={timerStartAt}
                     isRight={index % 2}
                  />
               );
            })}
            moveInfo={<MoveInfo currentSymbol={gameState.currentMove} nextSymbol={nextMove} />}
            gameCells={gameState.cells.map((line, i) =>
               line.map((symbol, j) => (
                  <Cell
                     i={i}
                     j={j}
                     isWinner={winnerSymbol === symbol}
                     key={i + j}
                     symbol={symbol}
                     onClick={handleCellClick}
                  />
               )),
            )}
         />
      </>
   );
}
