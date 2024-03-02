import { computeWinnerBySequence } from "./computeWinnerBySequence"
import { getNextMove } from "./getNextMove"
export const GAME_STATE_ACTIONS =
	{
		CELL_CLICK:
			"cell_click",
		TIME_IS_OVER:
			"time_is_over",
		TIME_CHANGE:
			"time_change",
		GET_INITIAL_GAME_STATE:
			"get_initial_game_state",
	}

export const initGameState =
	({
		moveOrder,
		defaultTimer,
	}) => ({
		cells: Array(19)
			.fill(null)
			.map(() =>
				Array(19).fill(null)
			),
		currentMove:
			moveOrder[0],
		winnerSequence: null,
		playerWhoCannotMove:
			[],
		moveOrder,
		timers:
			moveOrder.reduce(
				(
					timers,
					symbol
				) => {
					timers[symbol] =
						defaultTimer
					return timers
				},
				{}
			),
		isStateJustNowUpdated: true,
	})

export const gameStateReducer =
	(state, action) => {
		switch (action.type) {
			case GAME_STATE_ACTIONS.CELL_CLICK: {
				const { index } =
					action.payload

				const newCells =
					updateCells(
						state,
						index
					)

				if (
					state.cells[
						index[0]
					][index[1]]
				)
					return state

				return {
					...state,
					currentMove:
						getNextMove(
							state.currentMove,
							state.moveOrder,
							state.playerWhoCannotMove
						),
					isStateJustNowUpdated: false,
					currentMoveStart:
						action.payload
							.now,
					cells: newCells,
					winnerSequence:
						computeWinnerBySequence(
							newCells,
							index,
							3
						),
				}
			}

			case GAME_STATE_ACTIONS.TIME_IS_OVER: {
				return {
					...state,
					playerWhoCannotMove:
						[
							...state.playerWhoCannotMove,
							state.currentMove,
						],
					isStateJustNowUpdated: false,
					currentMove:
						getNextMove(
							state.currentMove,
							state.moveOrder,
							state.playerWhoCannotMove
						),
				}
			}

			case GAME_STATE_ACTIONS.TIME_CHANGE: {
				return {
					...state,
					timers: {
						...state.timers,
						[action.payload
							.playerMove]:
							action.payload
								.time,
					},
					isStateJustNowUpdated: false,
				}
			}
			case GAME_STATE_ACTIONS.GET_INITIAL_GAME_STATE: {
				return {
					...action.payload
						.initialGameState,
				}
			}
			default: {
				return state
			}
		}
	}

function updateCells(
	gameState,
	index
) {
	const newCells =
		gameState.cells.map(
			(line, i) =>
				line.map(
					(cell, j) =>
						gameState.cells[
							i
						][j]
				)
		)
	newCells[index[0]][
		index[1]
	] =
		gameState.currentMove
	return newCells
}
