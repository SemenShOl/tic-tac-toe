import {GameCell} from "./game-cell";
import {GameInfo} from "./game-info";
import {ResetButton} from "./reset-button";
import {useGameState} from "./use-game-state";

export function Game() {
	let {currentStep, cells, winnerComb, HandleCellClick, handleClearClick, isDraw} = useGameState();

	return (
		<div className="flex flex-col items-center w-80 mx-auto my-24 border border-black p-5">
			<div className="flex flex-col items-center content-center pt-10 pb-10 ">
				<GameInfo
					isDraw={isDraw}
					currentStep={currentStep}
					winnerComb={winnerComb}
					textStyle="mb-3 text-lg"
				/>
				<div className="grid gap-2 gam grid-rows-game-field grid-cols-[repeat(3,80px)] ">
					{cells.map((symbol, index) => {
						return (
							<GameCell
								key={index}
								onClick={() => HandleCellClick(index)}
								sm={symbol}
								isWinner={winnerComb?.includes(index)}
							/>
						);
					})}
				</div>

				<ResetButton onClick={handleClearClick} />
			</div>
		</div>
	);
}
