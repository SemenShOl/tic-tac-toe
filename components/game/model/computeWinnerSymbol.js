export const computeWinnerSymbol = (gameState) =>
   gameState.winnerSequence
      ? gameState.cells[gameState.winnerSequence?.[0][0]][gameState.winnerSequence?.[0][1]]
      : undefined;
