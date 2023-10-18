import styles from './game.module.css'
import {
	SYMBOL_O,
	SYMBOL_X,
} from './constants'

export function GameSymbol({
	symbol,
}) {
	const getSymbolClassName =
		symobol => {
			if (symobol == SYMBOL_O) {
				return 'sm-o'
			}
			return 'sm-x'
		}
	return (
		<span
			className={
				styles[
					`${getSymbolClassName(
						symbol
					)}`
				]
			}
		>
			{symbol}
		</span>
	)
}
