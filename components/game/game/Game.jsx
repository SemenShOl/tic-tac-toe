import {
	useReducer,
	React,
	useCallback,
	useEffect,
	useState,
} from "react"
import {
	PlayerInfo,
	BackLink,
	GameLayout,
	GameInfo,
	GameTitle,
	MoveInfo,
	Cell,
	GameModal,
} from "../UIGame"
import { PLAYERS } from "../constants"
import {
	GAME_STATE_ACTIONS,
	initGameState,
	gameStateReducer,
} from "../model/gameStateReducer"
import { computeWinnerSymbol } from "./../model/computeWinnerSymbol"
import { getNextMove } from "../model/getNextMove"
import { computePlayerTimer } from "../model/computePlayerTimer"
import { computeModalInfo } from "../model/computeModalInfojs"

export function Game() {
	const moveOrder =
		PLAYERS.map(
			(player) =>
				player.symbol
		)
	// const [
	// 	isStateUpdated,
	// 	setIsStateUpdated,
	// ] = useState(false)
	const [
		gameState,
		dispatch,
	] = useReducer(
		gameStateReducer,
		{
			moveOrder,
			defaultTimer: 3,
		},
		initGameState
	)

	const winnerSymbol =
		computeWinnerSymbol(
			gameState
		)

	const nextMove =
		getNextMove(
			gameState.currentMove,
			moveOrder,
			gameState.playerWhoCannotMove
		)
	const winnerLogin =
		PLAYERS.find(
			(player) =>
				player.symbol ===
				winnerSymbol
		)?.login

	const modalInfo =
		!!winnerSymbol

	const [
		initialGameState,
		setInitialGameState,
	] = useState(gameState)

	const handleCellClick =
		useCallback(
			(i, j) => {
				dispatch({
					type:
						GAME_STATE_ACTIONS.CELL_CLICK,
					payload: {
						index: [i, j],
					},
				})
			},
			[]
		)

	const handleTimeIsOver =
		() => {
			dispatch({
				type:
					GAME_STATE_ACTIONS.TIME_IS_OVER,
			})
		}

	const handleTimeChange =
		(
			time,
			playerMove
		) => {
			dispatch({
				type:
					GAME_STATE_ACTIONS.TIME_CHANGE,
				payload: {
					time,
					playerMove,
				},
			})
		}

	const handleGameRestart =
		() => {
			// 	setIsStateUpdated(
			// 		(v) => !v
			// 	)
			dispatch({
				type:
					GAME_STATE_ACTIONS.GET_INITIAL_GAME_STATE,
				payload: {
					initialGameState,
				},
			})
		}
	//Не имеет смысла без регистрации
	// const modalInfo = winnerSymbol
	// 	? computeModalInfo(
	// 			moveOrder,
	// 			winnerSymbol,
	// 			30,
	// 			20,
	// 	  )
	// 	: undefined;

	// debugger
	return (
		<>
			{winnerLogin ? (
				<GameModal
					isOpen={
						!!winnerLogin
					}
					winnerLogin={
						winnerLogin
					}
					onGameRestart={
						handleGameRestart
					}
					playersList={PLAYERS.map(
						(
							player,
							index
						) => {
							const { timer } =
								computePlayerTimer(
									player,
									gameState
								)

							return (
								<PlayerInfo
									key={player.id}
									profile={
										player
									}
									isRight={
										index % 2
									}
									timer={timer}
									isActive={
										false
									}
									modalInfo={
										modalInfo
									}
									isStateUpdated={
										gameState.isStateJustNowUpdated
									}
								/>
							)
						}
					)}
				/>
			) : null}

			<GameLayout
				backLink={
					<BackLink />
				}
				gameTitle={
					<GameTitle />
				}
				gameInfo={
					<GameInfo
						playersCount={2}
						timeMode={1}
					/>
				}
				playersList={PLAYERS.map(
					(
						player,
						index
					) => {
						const {
							timer,
							isActive,
						} =
							computePlayerTimer(
								player,
								gameState
							)
						return (
							<PlayerInfo
								key={player.id}
								profile={player}
								timer={timer}
								isRight={
									index % 2
								}
								isActive={
									winnerSymbol
										? false
										: isActive
								}
								onTimeIsOver={
									handleTimeIsOver
								}
								onTimeChange={
									handleTimeChange
								}
								isStateUpdated={
									gameState.isStateJustNowUpdated
								}
							/>
						)
					}
				)}
				moveInfo={
					<MoveInfo
						currentSymbol={
							gameState.currentMove
						}
						nextSymbol={
							nextMove
						}
					/>
				}
				gameCells={gameState.cells.map(
					(line, i) =>
						line.map(
							(symbol, j) => (
								<Cell
									i={i}
									j={j}
									isWinner={
										winnerSymbol ===
										symbol
									}
									key={i + j}
									symbol={symbol}
									onClick={
										handleCellClick
									}
								/>
							)
						)
				)}
			/>
		</>
	)
}
