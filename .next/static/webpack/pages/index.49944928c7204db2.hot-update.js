"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/model/useGameState.js":
/*!***********************************************!*\
  !*** ./components/game/model/useGameState.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _computingWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computingWinner */ \"./components/game/model/computingWinner.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell_click\"\n};\nfunction getNextMove(currentMove1, moveOrder1, playerWhoCannotMove1) {\n    const moveOrderMovablePlayers = moveOrder1.filter((symbol)=>!playerWhoCannotMove1.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove1) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n                newCells[index[0]][index[1]] = currentMove;\n                setGameState((lastGameState)=>{\n                    if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n                    return {\n                        ...lastGameState,\n                        currentMove: getNextMove(lastGameState.currentMove, moveOrder, playerWhoCannotMove),\n                        cells: newCells,\n                        winnerSequence: (0,_computingWinner__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n                    };\n                });\n            }\n    }\n};\nconst initGameState = (param)=>{\n    let {} = param;\n    return {\n        cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_2__.GAME_SYMBOLS.CROSS,\n        winnerSequence: null,\n        playerWhoCannotMove: []\n    };\n};\nfunction useGameState(moveOrder1) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n    // const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] =\n    //    useState(() => ({\n    //       cells: Array(19)\n    //          .fill(null)\n    //          .map(() => Array(19).fill(null)),\n    //       currentMove: moveOrder[0],\n    //       winnerSequence: null,\n    //       playerWhoCannotMove: [],\n    //    }))\n    console.log(gameState);\n    const winnerSymbol = gameState.winnerSequence;\n    //    ? cells[winnerSequence?.[0][0]][winnerSequence?.[0][1]]\n    //    : undefined\n    // console.log(winnerSymbol)\n    const nextMove = getNextMove(gameState.currentMove, moveOrder1, gameState.playerWhoCannotMove);\n    // const handleCellClick = index => {\n    //    const newCells = cells.map((line, i) => line.map((cell, j) => cells[i][j]))\n    //    newCells[index[0]][index[1]] = currentMove\n    //    setGameState(lastGameState => {\n    //       if (lastGameState.cells[index[0]][index[1]]) return lastGameState\n    //       return {\n    //          ...lastGameState,\n    //          currentMove: getNextMove(\n    //             lastGameState.currentMove,\n    //             moveOrder,\n    //             playerWhoCannotMove,\n    //          ),\n    //          cells: newCells,\n    //          winnerSequence: computingWinner(newCells, index, 3),\n    //       }\n    //    })\n    // }\n    // const handlePlayerTimeOver = symbol => {\n    //    const newPlayersWhoCannotMove = [...playerWhoCannotMove, symbol]\n    //    if (newPlayersWhoCannotMove.length === 3) {\n    //       setGameState(lastGameState => ({\n    //          ...lastGameState,\n    //          winnerSymbol: moveOrder.find(\n    //             symbol => !newPlayersWhoCannotMove.includes(symbol),\n    //          ),\n    //       }))\n    //    }\n    //    setGameState(lastGameState => ({\n    //       ...lastGameState,\n    //       currentMove: getNextMove(\n    //          lastGameState.currentMove,\n    //          moveOrder,\n    //          lastGameState.playerWhoCannotMove,\n    //       ),\n    //       playerWhoCannotMove: [...lastGameState.playerWhoCannotMove, symbol],\n    //    }))\n    // }\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence: gameState.winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNDO0lBQ3RDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLDZFQUE2RTtJQUM3RSxTQUFTO0lBQ1QsSUFBSTtJQUVKLE9BQU87UUFDSlcsT0FBT2UsVUFBVWYsS0FBSztRQUN0QmIsYUFBYTRCLFVBQVU1QixXQUFXO1FBQ2xDaUM7UUFDQVgsZ0JBQWdCTSxVQUFVTixjQUFjO1FBQ3hDVTtRQUNBSDtJQUNIO0FBQ0g7R0FqRWdCRjtBQW1FaEIsU0FBU08sY0FBY0MsVUFBVSxFQUFFQyxXQUFXO0lBQzNDLE9BQU9ELFdBQVdFLFFBQVEsT0FBT0QsWUFBWUMsUUFBUTtBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvbW9kZWwvdXNlR2FtZVN0YXRlLmpzPzdiOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWR1Y2VyLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29tcHV0aW5nV2lubmVyfSBmcm9tIFwiLi9jb21wdXRpbmdXaW5uZXJcIjtcclxuaW1wb3J0IHtHQU1FX1NZTUJPTFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XHJcbiAgIENFTExfQ0xJQ0s6IFwiY2VsbF9jbGlja1wiLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlciwgcGxheWVyV2hvQ2Fubm90TW92ZSkge1xyXG4gICBjb25zdCBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyA9IG1vdmVPcmRlci5maWx0ZXIoXHJcbiAgICAgIChzeW1ib2wpID0+ICFwbGF5ZXJXaG9DYW5ub3RNb3ZlLmluY2x1ZGVzKHN5bWJvbCksXHJcbiAgICk7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzW21vdmVPcmRlck1vdmFibGVQbGF5ZXJzLmluZGV4T2YoY3VycmVudE1vdmUpICsgMV0gPz9cclxuICAgICAgbW92ZU9yZGVyTW92YWJsZVBsYXllcnNbMF1cclxuICAgKTtcclxufVxyXG5cclxuY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xyXG4gICAgICAgICBjb25zdCBuZXdDZWxscyA9IGNlbGxzLm1hcCgobGluZSwgaSkgPT4gbGluZS5tYXAoKGNlbGwsIGopID0+IGNlbGxzW2ldW2pdKSk7XHJcbiAgICAgICAgIG5ld0NlbGxzW2luZGV4WzBdXVtpbmRleFsxXV0gPSBjdXJyZW50TW92ZTtcclxuICAgICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4WzBdXVtpbmRleFsxXV0pIHJldHVybiBsYXN0R2FtZVN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlKSxcclxuICAgICAgICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH1cclxufTtcclxuXHJcbmNvbnN0IGluaXRHYW1lU3RhdGUgPSAoe30pID0+ICh7XHJcbiAgIGNlbGxzOiBBcnJheSgxOSlcclxuICAgICAgLmZpbGwobnVsbClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSgxOSkuZmlsbChudWxsKSksXHJcbiAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgIHdpbm5lclNlcXVlbmNlOiBudWxsLFxyXG4gICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbXSxcclxufSk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKSB7XHJcbiAgIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge30sIGluaXRHYW1lU3RhdGUpO1xyXG4gICAvLyBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHdpbm5lclNlcXVlbmNlLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPVxyXG4gICAvLyAgICB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAvLyAgICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgIC8vICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgIC8vICAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAvLyAgICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICAvLyAgICAgICB3aW5uZXJTZXF1ZW5jZTogbnVsbCxcclxuICAgLy8gICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogW10sXHJcbiAgIC8vICAgIH0pKVxyXG4gICBjb25zb2xlLmxvZyhnYW1lU3RhdGUpO1xyXG4gICBjb25zdCB3aW5uZXJTeW1ib2wgPSBnYW1lU3RhdGUud2lubmVyU2VxdWVuY2U7XHJcbiAgIC8vICAgID8gY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXVswXV1bd2lubmVyU2VxdWVuY2U/LlswXVsxXV1cclxuICAgLy8gICAgOiB1bmRlZmluZWRcclxuICAgLy8gY29uc29sZS5sb2cod2lubmVyU3ltYm9sKVxyXG4gICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBnYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSk7XHJcblxyXG4gICAvLyBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgIC8vICAgIGNvbnN0IG5ld0NlbGxzID0gY2VsbHMubWFwKChsaW5lLCBpKSA9PiBsaW5lLm1hcCgoY2VsbCwgaikgPT4gY2VsbHNbaV1bal0pKVxyXG4gICAvLyAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgLy8gICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4ge1xyXG4gICAvLyAgICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gbGFzdEdhbWVTdGF0ZVxyXG4gICAvLyAgICAgICByZXR1cm4ge1xyXG4gICAvLyAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAvLyAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcbiAgIC8vICAgICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgIC8vICAgICAgICAgICAgIG1vdmVPcmRlcixcclxuICAgLy8gICAgICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgLy8gICAgICAgICAgKSxcclxuICAgLy8gICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAvLyAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgIC8vICAgICAgIH1cclxuICAgLy8gICAgfSlcclxuICAgLy8gfVxyXG5cclxuICAgLy8gY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG4gICAvLyAgICBjb25zdCBuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZSA9IFsuLi5wbGF5ZXJXaG9DYW5ub3RNb3ZlLCBzeW1ib2xdXHJcbiAgIC8vICAgIGlmIChuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZS5sZW5ndGggPT09IDMpIHtcclxuICAgLy8gICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuICAgLy8gICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgLy8gICAgICAgICAgd2lubmVyU3ltYm9sOiBtb3ZlT3JkZXIuZmluZChcclxuICAgLy8gICAgICAgICAgICAgc3ltYm9sID0+ICFuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZS5pbmNsdWRlcyhzeW1ib2wpLFxyXG4gICAvLyAgICAgICAgICApLFxyXG4gICAvLyAgICAgICB9KSlcclxuICAgLy8gICAgfVxyXG4gICAvLyAgICBzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG4gICAvLyAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAvLyAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcbiAgIC8vICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgIC8vICAgICAgICAgIG1vdmVPcmRlcixcclxuICAgLy8gICAgICAgICAgbGFzdEdhbWVTdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlLFxyXG4gICAvLyAgICAgICApLFxyXG4gICAvLyAgICAgICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlLCBzeW1ib2xdLFxyXG4gICAvLyAgICB9KSlcclxuICAgLy8gfVxyXG5cclxuICAgcmV0dXJuIHtcclxuICAgICAgY2VsbHM6IGdhbWVTdGF0ZS5jZWxscyxcclxuICAgICAgY3VycmVudE1vdmU6IGdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuICAgICAgbmV4dE1vdmUsXHJcbiAgICAgIHdpbm5lclNlcXVlbmNlOiBnYW1lU3RhdGUud2lubmVyU2VxdWVuY2UsXHJcbiAgICAgIHdpbm5lclN5bWJvbCxcclxuICAgICAgZGlzcGF0Y2gsXHJcbiAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXlzRXF1YWwoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpIHtcclxuICAgcmV0dXJuIGZpcnN0QXJyYXkudG9TdHJpbmcoKSA9PT0gc2Vjb25kQXJyYXkudG9TdHJpbmcoKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiY29tcHV0aW5nV2lubmVyIiwiR0FNRV9TWU1CT0xTIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJtb3ZlT3JkZXIiLCJwbGF5ZXJXaG9DYW5ub3RNb3ZlIiwibW92ZU9yZGVyTW92YWJsZVBsYXllcnMiLCJmaWx0ZXIiLCJzeW1ib2wiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3Q2VsbHMiLCJjZWxscyIsIm1hcCIsImxpbmUiLCJpIiwiY2VsbCIsImoiLCJpbmRleCIsInNldEdhbWVTdGF0ZSIsImxhc3RHYW1lU3RhdGUiLCJ3aW5uZXJTZXF1ZW5jZSIsImluaXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsInVzZUdhbWVTdGF0ZSIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIndpbm5lclN5bWJvbCIsIm5leHRNb3ZlIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/model/useGameState.js\n"));

/***/ })

});