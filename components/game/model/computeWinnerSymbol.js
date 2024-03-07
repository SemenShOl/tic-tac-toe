export const computeWinnerSymbol =
	gameState => {
		if (
			countFinishedTimers(
				gameState.timers,
				gameState.moveOrder,
			) ===
			gameState.moveOrder.length - 1
		)
			return gameState.currentMove;
		return gameState.winnerSequence
			? gameState.cells[
					gameState
						.winnerSequence?.[0][0]
			  ][
					gameState
						.winnerSequence?.[0][1]
			  ]
			: undefined;
	};

function countFinishedTimers(
	timers,
	moveOrder,
) {
	let numFinishTimers = 0;
	moveOrder.forEach(symbol => {
		if (!timers[symbol])
			numFinishTimers += 1;
	});
	return numFinishTimers;
}
