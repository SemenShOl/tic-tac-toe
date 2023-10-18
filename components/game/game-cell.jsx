import styles from './game.module.css'
import { GameSymbol } from './game-symbol'

export function GameCell({
	onClick,
	isWinner,
	sm,
}) {
	return (
		<button
			onClick={onClick}
			className={`${
				isWinner ? 'bg-yellow-700' : ''
			}`}
		>
			<GameSymbol symbol={sm} />
		</button>
	)
}
