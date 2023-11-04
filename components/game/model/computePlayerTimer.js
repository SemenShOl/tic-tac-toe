export const computePlayerTimer =
	(player, gameState) => ({
		timer:
			gameState.timers[
				player.symbol
			],
		isActive:
			player.symbol ==
			gameState.currentMove,
	});
