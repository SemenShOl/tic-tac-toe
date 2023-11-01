import {useReducer, React} from "react";

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

export function Game() {
   const moveOrder = PLAYERS.map((player) => player.symbol);

   const [gameState, dispatch] = useReducer(gameStateReducer, {moveOrder}, initGameState);

   const winnerSymbol = computeWinnerSymbol(gameState);
   const nextMove = getNextMove(gameState.currentMove, moveOrder, gameState.playerWhoCannotMove);
   const winnerLogin = PLAYERS.find((player) => player.symbol === winnerSymbol)?.login;
   return (
      <>
         <GameModal
            winnerLogin={winnerLogin}
            playersList={PLAYERS.map((player, index) => (
               <PlayerInfo key={player.id} profile={player} isRight={index % 2} seconds={60} />
            ))}
         />
         <GameLayout
            backLink={<BackLink />}
            gameTitle={<GameTitle />}
            gameInfo={<GameInfo playersCount={2} timeMode={1} />}
            playersList={PLAYERS.map((player, index) => (
               <PlayerInfo key={player.id} profile={player} isRight={index % 2} seconds={60} />
            ))}
            moveInfo={<MoveInfo currentSymbol={gameState.currentMove} nextSymbol={nextMove} />}
            gameCells={gameState.cells.map((line, i) =>
               line.map((symbol, j) => (
                  <Cell
                     index={[i, j]}
                     winnerSequence={gameState.winnerSequence}
                     key={i + j}
                     symbol={symbol}
                     onClick={() => {
                        dispatch({
                           type: GAME_STATE_ACTIONS.CELL_CLICK,
                           payload: {index: [i, j]},
                        });
                     }}
                  />
               )),
            )}
         />
      </>
   );
}
