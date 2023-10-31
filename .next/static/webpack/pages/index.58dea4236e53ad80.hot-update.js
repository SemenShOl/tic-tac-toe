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

/***/ "./components/game/useGameState.js":
/*!*****************************************!*\
  !*** ./components/game/useGameState.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder, playerWhoCannotMove);\n    const winnerSymbol = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0];\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState((lastGameState1)=>{\n            if (lastGameState1.cells[index[0]][index[1]]) return lastGameState1;\n            return {\n                ...lastGameState1,\n                currentMove: getNextMove(lastGameState1.currentMove, moveOrder, playerWhoCannotMove),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        const newPlayersWhoCannotMove = [\n            ...lastGameState.playerWhoCannotMove,\n            symbol\n        ];\n        if (newPlayersWhoCannotMove.length === 3) {}\n        setGameState((lastGameState1)=>({\n                ...lastGameState1,\n                currentMove: getNextMove(lastGameState1.currentMove, moveOrder, lastGameState1.playerWhoCannotMove),\n                playerWhoCannotMove: [\n                    ...lastGameState1.playerWhoCannotMove,\n                    symbol\n                ]\n            }));\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence,\n        handlePlayerTimeOver,\n        winnerSymbol\n    ];\n}\n_s(useGameState, \"ag6yBx+EFxkgT0b8dMGPD/+HgxQ=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxNQUFNQywwQkFBMEJGLFVBQVVHLE1BQU0sQ0FDN0NDLENBQUFBLFNBQVUsQ0FBQ0gsb0JBQW9CSSxRQUFRLENBQUNEO1FBR3hDRjtJQURILE9BQ0dBLENBQUFBLDRCQUFBQSx1QkFBdUIsQ0FBQ0Esd0JBQXdCSSxPQUFPLENBQUNQLGVBQWUsRUFBRSxjQUF6RUcsdUNBQUFBLDRCQUNBQSx1QkFBdUIsQ0FBQyxFQUFFO0FBRWhDO0FBRU8sU0FBU0ssYUFBYVAsU0FBUzs7SUFDbkMsTUFBTSxDQUFDLEVBQUVRLEtBQUssRUFBRVQsV0FBVyxFQUFFVSxjQUFjLEVBQUVSLG1CQUFtQixFQUFFLEVBQUVTLGFBQWEsR0FDOUVkLCtDQUFRQSxDQUFDLElBQU87WUFDYlksT0FBT0csTUFBTSxJQUNUQyxJQUFJLENBQUMsTUFDTEMsR0FBRyxDQUFDLElBQU1GLE1BQU0sSUFBSUMsSUFBSSxDQUFDO1lBQzdCYixhQUFhQyxTQUFTLENBQUMsRUFBRTtZQUN6QlMsZ0JBQWdCO1lBQ2hCUixxQkFBcUIsRUFBRTtRQUMxQjtJQUVILE1BQU1hLFdBQVdoQixZQUFZQyxhQUFhQyxXQUFXQztJQUNyRCxNQUFNYyxlQUFlTiwyQkFBQUEscUNBQUFBLGNBQWdCLENBQUMsRUFBRTtJQUV4QyxNQUFNTyxrQkFBa0JDLENBQUFBO1FBQ3JCLE1BQU1DLFdBQVdWLE1BQU1LLEdBQUcsQ0FBQyxDQUFDTSxNQUFNQyxJQUFNRCxLQUFLTixHQUFHLENBQUMsQ0FBQ1EsTUFBTUMsSUFBTWQsS0FBSyxDQUFDWSxFQUFFLENBQUNFLEVBQUU7UUFDekVKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUdsQjtRQUMvQlcsYUFBYWEsQ0FBQUE7WUFDVixJQUFJQSxlQUFjZixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU9NO1lBQ3BELE9BQU87Z0JBQ0osR0FBR0EsY0FBYTtnQkFDaEJ4QixhQUFhRCxZQUNWeUIsZUFBY3hCLFdBQVcsRUFDekJDLFdBQ0FDO2dCQUVITyxPQUFPVTtnQkFDUFQsZ0JBQWdCWix1REFBZUEsQ0FBQ3FCLFVBQVVELE9BQU87WUFDcEQ7UUFDSDtJQUNIO0lBRUEsTUFBTU8sdUJBQXVCcEIsQ0FBQUE7UUFDMUIsTUFBTXFCLDBCQUEwQjtlQUFJRixjQUFjdEIsbUJBQW1CO1lBQUVHO1NBQU87UUFDOUUsSUFBSXFCLHdCQUF3QkMsTUFBTSxLQUFLLEdBQUcsQ0FDMUM7UUFDQWhCLGFBQWFhLENBQUFBLGlCQUFrQjtnQkFDNUIsR0FBR0EsY0FBYTtnQkFDaEJ4QixhQUFhRCxZQUNWeUIsZUFBY3hCLFdBQVcsRUFDekJDLFdBQ0F1QixlQUFjdEIsbUJBQW1CO2dCQUVwQ0EscUJBQXFCO3VCQUFJc0IsZUFBY3RCLG1CQUFtQjtvQkFBRUc7aUJBQU87WUFDdEU7SUFDSDtJQUNBLE9BQU87UUFDSkk7UUFDQVQ7UUFDQWU7UUFDQUU7UUFDQVA7UUFDQWU7UUFDQVQ7S0FDRjtBQUNKO0dBdkRnQlI7QUF5RGhCLFNBQVNvQixjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDM0MsT0FBT0QsV0FBV0UsUUFBUSxPQUFPRCxZQUFZQyxRQUFRO0FBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2VHYW1lU3RhdGUuanM/Nzg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb21wdXRpbmdXaW5uZXIgfSBmcm9tICcuL21vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlciwgcGxheWVyV2hvQ2Fubm90TW92ZSkge1xyXG4gICBjb25zdCBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyA9IG1vdmVPcmRlci5maWx0ZXIoXHJcbiAgICAgIHN5bWJvbCA9PiAhcGxheWVyV2hvQ2Fubm90TW92ZS5pbmNsdWRlcyhzeW1ib2wpLFxyXG4gICApXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzW21vdmVPcmRlck1vdmFibGVQbGF5ZXJzLmluZGV4T2YoY3VycmVudE1vdmUpICsgMV0gPz9cclxuICAgICAgbW92ZU9yZGVyTW92YWJsZVBsYXllcnNbMF1cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKG1vdmVPcmRlcikge1xyXG4gICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHdpbm5lclNlcXVlbmNlLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPVxyXG4gICAgICB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAgICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICAgICAgICB3aW5uZXJTZXF1ZW5jZTogbnVsbCxcclxuICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogW10sXHJcbiAgICAgIH0pKVxyXG5cclxuICAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlKVxyXG4gICBjb25zdCB3aW5uZXJTeW1ib2wgPSB3aW5uZXJTZXF1ZW5jZT8uWzBdXHJcblxyXG4gICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NlbGxzID0gY2VsbHMubWFwKChsaW5lLCBpKSA9PiBsaW5lLm1hcCgoY2VsbCwgaikgPT4gY2VsbHNbaV1bal0pKVxyXG4gICAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4ge1xyXG4gICAgICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gbGFzdEdhbWVTdGF0ZVxyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcbiAgICAgICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgICAgICAgICAgICAgIG1vdmVPcmRlcixcclxuICAgICAgICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG5cclxuICAgY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG4gICAgICBjb25zdCBuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZSA9IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUsIHN5bWJvbF1cclxuICAgICAgaWYgKG5ld1BsYXllcnNXaG9DYW5ub3RNb3ZlLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB9XHJcbiAgICAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcbiAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuICAgICAgICAgICAgbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuICAgICAgICAgICAgbW92ZU9yZGVyLFxyXG4gICAgICAgICAgICBsYXN0R2FtZVN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUsXHJcbiAgICAgICAgICksXHJcbiAgICAgICAgIHBsYXllcldob0Nhbm5vdE1vdmU6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUsIHN5bWJvbF0sXHJcbiAgICAgIH0pKVxyXG4gICB9XHJcbiAgIHJldHVybiBbXHJcbiAgICAgIGNlbGxzLFxyXG4gICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgbmV4dE1vdmUsXHJcbiAgICAgIGhhbmRsZUNlbGxDbGljayxcclxuICAgICAgd2lubmVyU2VxdWVuY2UsXHJcbiAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG4gICAgICB3aW5uZXJTeW1ib2wsXHJcbiAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheXNFcXVhbChmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkge1xyXG4gICByZXR1cm4gZmlyc3RBcnJheS50b1N0cmluZygpID09PSBzZWNvbmRBcnJheS50b1N0cmluZygpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29tcHV0aW5nV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm1vdmVPcmRlciIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyIsImZpbHRlciIsInN5bWJvbCIsImluY2x1ZGVzIiwiaW5kZXhPZiIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwid2lubmVyU2VxdWVuY2UiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibmV3Q2VsbHMiLCJsaW5lIiwiaSIsImNlbGwiLCJqIiwibGFzdEdhbWVTdGF0ZSIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwibmV3UGxheWVyc1dob0Nhbm5vdE1vdmUiLCJsZW5ndGgiLCJpc0FycmF5c0VxdWFsIiwiZmlyc3RBcnJheSIsInNlY29uZEFycmF5IiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});