export function getNextMove(currentMove, moveOrder, playerWhoCannotMove, timers) {
   const moveOrderMovablePlayers = moveOrder.filter((symbol) => timers[symbol] > 0);
   return (
      moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1] ??
      moveOrderMovablePlayers[0]
   );
}
