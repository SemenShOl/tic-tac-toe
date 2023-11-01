export function getNextMove(currentMove, moveOrder, playerWhoCannotMove) {
   const moveOrderMovablePlayers = moveOrder.filter(
      (symbol) => !playerWhoCannotMove.includes(symbol),
   );
   return (
      moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1] ??
      moveOrderMovablePlayers[0]
   );
}
