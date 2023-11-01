export const computePlayerTimer = (player, gameState) => ({
   timer: gameState.timers[player.symbol],
   timerStartAt: player.symbol == gameState.currentMove ? gameState.currentMoveStart : undefined,
});
