export function computingWinner(
	cells,
	movedCellIndex,
	seqSize,
) {
	//вычисляем rows (группы последовательностей длины выигрышной последовательности, различной формы - горизонтальные, вертикальные и тд., которые могут содержать выигрышыми )
	const rows = computeRows(
		cells,
		{
			x: movedCellIndex[0],
			y: movedCellIndex[1],
		},
		seqSize,
	);

	//проходим по всем rows и проверяем равны ли в них символы
	for (let i = 0; i < 4; i++) {
		const isEqual =
			areCellsInRowEqual(
				rows[i],
				cells,
				seqSize,
			);
		if (isEqual) return isEqual;
	}
}

const areCellsInRowEqual = (
	row,
	cells,
	seqSize,
) => {
	for (
		let i = 0;
		i < row.length;
		i++
	) {
		let isLineBreak = false; //флаг ответает за то, равны ли все символы в row[i], true - значит не равны
		let answerRow = row[i]; //row, в которой все символы равны
		for (
			let j = 1;
			j < seqSize;
			j++
		) {
			//row[i] - i-ый row, row[i][j] - j-ый вектор (координата символа) в i-ом row
			//if проверяет равны ли символы в точках j и j-1 i-ого row и не равен ли символ в точке j нулю (j-1 проверять не требуется)
			if (
				cells[row[i][j][0]][
					row[i][j][1]
				] !==
					cells[row[i][j - 1][0]][
						row[i][j - 1][1]
					] ||
				!cells[row[i][j][0]][
					row[i][j][1]
				]
			) {
				isLineBreak = true;
				break;
			}
		}

		if (!isLineBreak)
			return answerRow;
	}
	return false;
};

function computeRows(
	cells,
	movedCellIndex,
	seqSize,
) {
	const line = cells[
		movedCellIndex.x
	].map((elem, index) => index); //массив от 0 до ширины cells, определяет границы массива
	const seqArray = new Array(
		seqSize,
	)
		.fill(null)
		.map((elem, index) => index); //массив чисел от 0 до seqSize-1 включительно
	const rows = [
		[], // -
		[], // |
		[], // /
		[], // \
	];
	rows[0] = horizontal(
		movedCellIndex,
		seqSize,
		line,
	);
	rows[1] = vertical(
		movedCellIndex,
		seqSize,
		line,
	);
	rows[2] = obliquelyLeftToRight(
		movedCellIndex,
		seqSize,
		line,
		seqArray,
	);
	rows[3] = obliquelyRightToLeft(
		movedCellIndex,
		seqSize,
		line,
		seqArray,
	);
	return rows;
}

function horizontal(
	movedCellIndex,
	seqSize,
	line,
) {
	// -
	const row = [];

	for (
		let i = 0;
		i < seqSize;
		i++
	) {
		const first =
			movedCellIndex.x -
			seqSize +
			i +
			1;
		const last =
			movedCellIndex.x + i;
		//if проверяет находятся ли first(начало секвенции) и last(конец) внутри границ массива
		if (
			line.includes(first) &&
			line.includes(last)
		)
			row.push(
				line
					.slice(first, last + 1)
					.map(elem => [
						elem,
						movedCellIndex.y,
					]),
			);
	}
	return row;
}

function vertical(
	movedCellIndex,
	seqSize,
	line,
) {
	// |
	const row = [];

	for (
		let i = 0;
		i < seqSize;
		i++
	) {
		const first =
			movedCellIndex.y -
			seqSize +
			i +
			1;
		const last =
			movedCellIndex.y + i;
		//if проверяет находятся ли first(начало секвенции) и last(конец) внутри границ массива
		if (
			line.includes(first) &&
			line.includes(last)
		)
			row.push(
				line
					.slice(first, last + 1)
					.map(elem => [
						movedCellIndex.x,
						elem,
					]),
			);
	}
	return row;
}

function obliquelyLeftToRight(
	movedCellIndex,
	seqSize,
	line,
	seqArray,
) {
	// /
	const row = [];

	for (
		let i = 0;
		i < seqSize;
		i++
	) {
		const first = {
			x:
				movedCellIndex.x -
				seqSize +
				i +
				1,
			y:
				movedCellIndex.y -
				seqSize +
				i +
				1,
		};
		const last = {
			x: movedCellIndex.x + i,
			y: movedCellIndex.y + i,
		};
		//if проверяет находятся ли координаты first(x-координата и y-координата) и last(x-координата и y-координата) внутри границ массива
		if (
			line.includes(first.x) &&
			line.includes(first.y) &&
			line.includes(last.x) &&
			line.includes(last.y)
		)
			//в row кладется точки вида [first.x,first.y], [first.x + 1,first.y + 1]..., инкримент прибавляет единицу
			row.push(
				seqArray.map(increment => [
					first.x + increment,
					first.y + increment,
				]),
			);
	}
	return row;
}

function obliquelyRightToLeft(
	movedCellIndex,
	seqSize,
	line,
	seqArray,
) {
	// \
	const row = [];

	for (
		let i = 0;
		i < seqSize;
		i++
	) {
		const first = {
			x:
				movedCellIndex.x +
				seqSize -
				i -
				1,
			y:
				movedCellIndex.y -
				seqSize +
				i +
				1,
		};
		const last = {
			x: movedCellIndex.x - i,
			y: movedCellIndex.y + i,
		};
		//if проверяет находятся ли координаты first(x-координата и y-координата) и last(x-координата и y-координата) внутри границ массива
		if (
			line.includes(first.x) &&
			line.includes(first.y) &&
			line.includes(last.x) &&
			line.includes(last.y)
		)
			//в row кладется точки вида [first.x,first.y], [first.x + 1,first.y + 1]..., инкримент прибавляет единицу
			row.push(
				seqArray.map(increment => [
					first.x - increment,
					first.y + increment,
				]),
			);
	}
	return row;
}
