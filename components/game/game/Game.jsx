import {
	useReducer,
	React,
	useCallback,
	useState,
} from "react";

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
import { PLAYERS } from "../constants";
import {
	GAME_STATE_ACTIONS,
	initGameState,
	gameStateReducer,
} from "../model/gameStateReducer";
import { computeWinnerSymbol } from "./../model/computeWinnerSymbol";
import { getNextMove } from "../model/getNextMove";
import { computePlayerTimer } from "../model/computePlayerTimer";

export function Game() {
	const moveOrder = PLAYERS.map(
		player => player.symbol,
	);

	const [gameState, dispatch] =
		useReducer(
			gameStateReducer,
			{
				moveOrder,
				defaultTimer: 5,
				currentMoveStart: Date.now(),
			},
			initGameState,
		);
	const winnerSymbol =
		computeWinnerSymbol(gameState);

	const nextMove = getNextMove(
		gameState.currentMove,
		moveOrder,
		gameState.playerWhoCannotMove,
	);
	const winnerLogin = PLAYERS.find(
		player =>
			player.symbol === winnerSymbol,
	)?.login;

	const handleCellClick =
		useCallback((i, j) => {
			dispatch({
				type:
					GAME_STATE_ACTIONS.CELL_CLICK,
				payload: {
					index: [i, j],
					now: Date.now(),
				},
			});
		}, []);

	const handleChangeMove = () => {
		dispatch({
			type:
				GAME_STATE_ACTIONS.PLAYER_ACTIVE_CHANGE,
		});
	};

	const handleTimeChange = (
		time,
		playerMove,
	) => {
		dispatch({
			type:
				GAME_STATE_ACTIONS.TIME_CHANGE,
			payload: {
				time,
				playerMove,
			},
		});
	};

	const [
		isModalOpen,
		setIsModalOpen,
	] = useState(!!winnerLogin);
	return (
		<>
			<GameModal
				isOpen={!!winnerLogin}
				winnerLogin={winnerLogin}
				onClose={() =>
					setIsModalOpen(false)
				}
				playersList={PLAYERS.map(
					(player, index) => {
						const { timer, isActive } =
							computePlayerTimer(
								player,
								gameState,
							);

						return (
							<PlayerInfo
								key={player.id}
								profile={player}
								isRight={index % 2}
								timer={timer}
								isActive={false}
								isModal={true}
							/>
						);
					},
				)}
			/>
			<GameLayout
				backLink={<BackLink />}
				gameTitle={<GameTitle />}
				gameInfo={
					<GameInfo
						playersCount={2}
						timeMode={1}
					/>
				}
				playersList={PLAYERS.map(
					(player, index) => {
						const { timer, isActive } =
							computePlayerTimer(
								player,
								gameState,
							);
						return (
							<PlayerInfo
								key={player.id}
								profile={player}
								timer={timer}
								isRight={index % 2}
								isActive={
									winnerSymbol
										? false
										: isActive
								}
								onChangeActive={
									handleChangeMove
								}
								onTimeChange={
									handleTimeChange
								}
							/>
						);
					},
				)}
				moveInfo={
					<MoveInfo
						currentSymbol={
							gameState.currentMove
						}
						nextSymbol={nextMove}
					/>
				}
				gameCells={gameState.cells.map(
					(line, i) =>
						line.map((symbol, j) => (
							<Cell
								i={i}
								j={j}
								isWinner={
									winnerSymbol === symbol
								}
								key={i + j}
								symbol={symbol}
								onClick={handleCellClick}
							/>
						)),
				)}
			/>
		</>
	);
}
