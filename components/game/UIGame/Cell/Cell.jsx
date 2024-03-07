import { memo } from "react";
import { GameSymbol } from "./../GameSymbol";
import cl from "./Cell.module.scss";
export const Cell = memo(
	function Cell({
		symbol,
		onClick,
		isWinner,
		i,
		j,
	}) {
		console.log("cell renders");
		return (
			<button
				className={cl.cell}
				style={
					isWinner
						? {
								background:
									"rgba(232, 42, 42, 0.1)",
						  }
						: {}
				}
				disabled={!!isWinner}
				onClick={() => onClick(i, j)}
			>
				<GameSymbol
					style={{
						width: 20,
						height: 20,
					}}
				>
					{symbol}
				</GameSymbol>
			</button>
		);
	},
);
