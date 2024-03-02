import avatar from "./imgs/avatar.jpg";
import avatar1 from "./imgs/avatar1.png";
import avatar2 from "./imgs/avatar2.png";
import avatar3 from "./imgs/avatar3.png";

export const GAME_SYMBOLS = {
	ZERO: "zero",
	CROSS: "cross",
	SQUARE: "square",
	TRIANGLE: "triangle",
};

export const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.SQUARE,
	GAME_SYMBOLS.TRIANGLE,
];

export const PLAYERS = [
	{
		id: 1,
		login: "Semen",
		rating: 400,
		avatar: avatar,
		symbol: GAME_SYMBOLS.CROSS,
	},
	{
		id: 2,
		login: "Petr",
		rating: 200,
		avatar: avatar1,
		symbol: GAME_SYMBOLS.ZERO,
	},
	// {
	// 	id: 2,
	// 	login:
	// 		"Sarasfgsgsfgsjfg;sfgjsfgjs;",
	// 	rating: 200,
	// 	avatar: avatar2,
	// 	symbol: GAME_SYMBOLS.TRIANGLE,
	// },
	// {
	// 	id: 2,
	// 	login: "Anna",
	// 	rating: 100,
	// 	avatar: avatar3,
	// 	symbol: GAME_SYMBOLS.SQUARE,
	// },
];
