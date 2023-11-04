import React, {
	useEffect,
	useState,
} from "react";
import cl from "./PlayerInfo.module.scss";
import { GameSymbol } from "../GameSymbol";
import cn from "classnames";
import { Player } from "../Player/Player";
import { useNow } from "./../../../lib/timers";
export function PlayerInfo({
	profile,
	isRight,
	timer,
	isActive,
	onChangeActive,
	onTimeChange,
	isModal,
}) {
	const [seconds, setSeconds] =
		useState(timer);
	const viewSeconds = !isModal
		? seconds
		: timer;
	useEffect(() => {
		if (!isActive) return;
		let currentSeconds = seconds;
		const interID = setInterval(
			() => {
				currentSeconds = Math.max(
					currentSeconds - 0.1,
					0,
				);
				setSeconds(currentSeconds);
				if (!currentSeconds)
					onChangeActive();
			},
			100,
		);

		return () => {
			onTimeChange(
				currentSeconds,
				profile.symbol,
			);
			clearInterval(interID);
		};
	}, [isActive]);

	const minutesStr = String(
		Math.floor(viewSeconds / 60),
	).padStart(2, "0");
	const secondsStr = String(
		Math.ceil(viewSeconds % 60),
	).padStart(2, "0");
	const isDanger =
		viewSeconds <= 10;

	const getTimerColor = () => {
		if (!isActive) {
			if (!viewSeconds)
				return cl.timeIsOver;
			return cl.stopped;
		}
		return isDanger
			? cl.danger
			: "";
	};

	return (
		<div className={cl.gamerInfo}>
			<div
				className={
					cl.profileWithSymbol
				}
				style={
					isRight ? { order: "3" } : {}
				}
			>
				<Player
					login={profile.login}
					rating={profile.rating}
					avatar={profile.avatar}
				/>
				<GameSymbol
					className={cl.symbol}
				>
					{profile.symbol}
				</GameSymbol>
			</div>
			<div
				className={cl.separator}
				style={
					isRight ? { order: "2" } : {}
				}
			></div>

			<div
				className={cn(
					cl.timer,
					getTimerColor(),
				)}
				style={
					isRight ? { order: "1" } : {}
				}
			>
				<p>
					{minutesStr}:{secondsStr}
				</p>
			</div>
		</div>
	);
}

// function useTimerChange(
// 	initialTimer,
// 	isActive,
// 	onTimerChange,
// ) {
// 	const [seconds, setSeconds] =
// 		useState(initialTimer);
// 	useEffect(() => {
// 		if (!isActive) return;
// 		const interID = setInterval(
// 			() => {
// 				setSeconds(timer =>
// 					Math.max(timer - 1, 0),
// 				);
// 			},
// 			1000,
// 		);
// 		debugger;
// 		onTimerChange(seconds);
// 		console.log(
// 			"active or seconds changes",
// 		);
// 		return () =>
// 			clearInterval(interID);
// 	}, [isActive, seconds]);
// 	return seconds;
// }
