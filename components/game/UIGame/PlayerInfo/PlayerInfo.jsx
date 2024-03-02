import cl from "./PlayerInfo.module.scss"
import { GameSymbol } from "../GameSymbol"
import cn from "classnames"
import { Player } from "../Player/Player"
import { useTimerChange } from "./../../../lib/timers"
export function PlayerInfo({
	profile,
	isRight,
	timer,
	isActive,
	onTimeIsOver,
	onTimeChange,
	modalInfo,
	isStateUpdated,
}) {
	const seconds =
		useTimerChange(
			timer,
			isActive,
			onTimeIsOver,
			onTimeChange,
			profile,
			isStateUpdated
		)
	const viewSeconds =
		!modalInfo
			? seconds
			: timer

	const minutesStr =
		String(
			Math.floor(
				viewSeconds / 60
			)
		).padStart(2, "0")
	const secondsStr =
		String(
			Math.ceil(
				viewSeconds % 60
			)
		).padStart(2, "0")
	const isDanger =
		viewSeconds <= 10

	const getTimerColor =
		() => {
			if (!isActive) {
				if (!viewSeconds)
					return cl.timeIsOver
				return cl.stopped
			}
			return isDanger
				? cl.danger
				: ""
		}

	return (
		<div
			className={
				cl.gamerInfo
			}
		>
			<div
				className={
					cl.profileWithSymbol
				}
				style={
					isRight
						? { order: "3" }
						: {}
				}
			>
				<Player
					login={
						profile.login
					}
					rating={
						profile.rating
					}
					avatar={
						profile.avatar
					}
					changeRating={
						modalInfo?.[
							profile.symbol
						]
					}
				/>
				<GameSymbol
					className={
						cl.symbol
					}
				>
					{profile.symbol}
				</GameSymbol>
			</div>
			<div
				className={
					cl.separator
				}
				style={
					isRight
						? { order: "2" }
						: {}
				}
			></div>

			<div
				className={cn(
					cl.timer,
					getTimerColor()
				)}
				style={
					isRight
						? { order: "1" }
						: {}
				}
			>
				<p>
					{minutesStr}:
					{secondsStr}
				</p>
			</div>
		</div>
	)
}
