import { computingWinner } from "./computingWinner";
import { getNextMove } from "./getNextMove";
export const GAME_STATE_ACTIONS =
	{
		CELL_CLICK: "cell_click",
		PLAYER_ACTIVE_CHANGE:
			"player_active_change",
		TIME_CHANGE: "time_change",
	};

export const initGameState = ({
	moveOrder,
	defaultTimer,
	currentMoveStart,
}) => ({
	cells: Array(19)
		.fill(null)
		.map(() =>
			Array(19).fill(null),
		),
	currentMove: moveOrder[0],
	currentMoveStart,
	winnerSequence: null,
	playerWhoCannotMove: [],
	moveOrder,
	timers: moveOrder.reduce(
		(timers, symbol) => {
			timers[symbol] = defaultTimer;
			return timers;
		},
		{},
	),
});

export const gameStateReducer = (
	state,
	action,
) => {
	// debugger;
	console.log(state.timers);
	switch (action.type) {
		case GAME_STATE_ACTIONS.CELL_CLICK: {
			const { index, now } =
				action.payload;

			const newCells =
				state.cells.map((line, i) =>
					line.map(
						(cell, j) =>
							state.cells[i][j],
					),
				);
			newCells[index[0]][index[1]] =
				state.currentMove;
			if (
				state.cells[index[0]][
					index[1]
				]
			)
				return state;

			return {
				...state,
				currentMove: getNextMove(
					state.currentMove,
					state.moveOrder,
					state.playerWhoCannotMove,
				),
				currentMoveStart:
					action.payload.now,
				cells: newCells,
				winnerSequence:
					computingWinner(
						newCells,
						index,
						3,
					),
				timers: updateTimers(
					state,
					now,
				),
			};
		}
		case GAME_STATE_ACTIONS.PLAYER_ACTIVE_CHANGE: {
			return {
				...state,
				playerWhoCannotMove: [
					...state.playerWhoCannotMove,
					state.currentMove,
				],
				currentMove: getNextMove(
					state.currentMove,
					state.moveOrder,
					state.playerWhoCannotMove,
				),
			};
		}
		case GAME_STATE_ACTIONS.TIME_CHANGE: {
			// debugger;
			return {
				...state,
				timers: {
					...state.timers,
					[action.payload.playerMove]:
						action.payload.time,
				},
			};
		}
		default: {
			return state;
		}
	}
};

function updateTimers(
	gameState,
	now,
) {
	const diff =
		now -
		gameState.currentMoveStart;
	const timer =
		gameState.timers[
			gameState.currentMove
		];
	return {
		...gameState.timers,
		[gameState.currentMove]:
			timer - diff,
	};
}
function updateCells(gameState) {
	const newCells =
		gameState.cells.map((line, i) =>
			line.map(
				(cell, j) =>
					gameState.cells[i][j],
			),
		);
	newCells[index[0]][index[1]] =
		state.currentMove;
	return newCells;
}
