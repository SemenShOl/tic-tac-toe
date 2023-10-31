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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder, playerWhoCannotMove);\n    let winnerSymbol = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0];\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder, playerWhoCannotMove),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        const newPlayersWhoCannotMove = [\n            ...playerWhoCannotMove,\n            symbol\n        ];\n        if (newPlayersWhoCannotMove.length === 3) {\n            winnerSymbol = moveOrder.find((symbol)=>!newPlayersWhoCannotMove.includes(symbol));\n        }\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder, lastGameState.playerWhoCannotMove),\n                playerWhoCannotMove: [\n                    ...lastGameState.playerWhoCannotMove,\n                    symbol\n                ]\n            }));\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence,\n        handlePlayerTimeOver,\n        winnerSymbol\n    ];\n}\n_s(useGameState, \"ag6yBx+EFxkgT0b8dMGPD/+HgxQ=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxNQUFNQywwQkFBMEJGLFVBQVVHLE1BQU0sQ0FDN0NDLENBQUFBLFNBQVUsQ0FBQ0gsb0JBQW9CSSxRQUFRLENBQUNEO1FBR3hDRjtJQURILE9BQ0dBLENBQUFBLDRCQUFBQSx1QkFBdUIsQ0FBQ0Esd0JBQXdCSSxPQUFPLENBQUNQLGVBQWUsRUFBRSxjQUF6RUcsdUNBQUFBLDRCQUNBQSx1QkFBdUIsQ0FBQyxFQUFFO0FBRWhDO0FBRU8sU0FBU0ssYUFBYVAsU0FBUzs7SUFDbkMsTUFBTSxDQUFDLEVBQUVRLEtBQUssRUFBRVQsV0FBVyxFQUFFVSxjQUFjLEVBQUVSLG1CQUFtQixFQUFFLEVBQUVTLGFBQWEsR0FDOUVkLCtDQUFRQSxDQUFDLElBQU87WUFDYlksT0FBT0csTUFBTSxJQUNUQyxJQUFJLENBQUMsTUFDTEMsR0FBRyxDQUFDLElBQU1GLE1BQU0sSUFBSUMsSUFBSSxDQUFDO1lBQzdCYixhQUFhQyxTQUFTLENBQUMsRUFBRTtZQUN6QlMsZ0JBQWdCO1lBQ2hCUixxQkFBcUIsRUFBRTtRQUMxQjtJQUVILE1BQU1hLFdBQVdoQixZQUFZQyxhQUFhQyxXQUFXQztJQUNyRCxJQUFJYyxlQUFlTiwyQkFBQUEscUNBQUFBLGNBQWdCLENBQUMsRUFBRTtJQUV0QyxNQUFNTyxrQkFBa0JDLENBQUFBO1FBQ3JCLE1BQU1DLFdBQVdWLE1BQU1LLEdBQUcsQ0FBQyxDQUFDTSxNQUFNQyxJQUFNRCxLQUFLTixHQUFHLENBQUMsQ0FBQ1EsTUFBTUMsSUFBTWQsS0FBSyxDQUFDWSxFQUFFLENBQUNFLEVBQUU7UUFDekVKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUdsQjtRQUMvQlcsYUFBYWEsQ0FBQUE7WUFDVixJQUFJQSxjQUFjZixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU9NO1lBQ3BELE9BQU87Z0JBQ0osR0FBR0EsYUFBYTtnQkFDaEJ4QixhQUFhRCxZQUNWeUIsY0FBY3hCLFdBQVcsRUFDekJDLFdBQ0FDO2dCQUVITyxPQUFPVTtnQkFDUFQsZ0JBQWdCWix1REFBZUEsQ0FBQ3FCLFVBQVVELE9BQU87WUFDcEQ7UUFDSDtJQUNIO0lBRUEsTUFBTU8sdUJBQXVCcEIsQ0FBQUE7UUFDMUIsTUFBTXFCLDBCQUEwQjtlQUFJeEI7WUFBcUJHO1NBQU87UUFDaEUsSUFBSXFCLHdCQUF3QkMsTUFBTSxLQUFLLEdBQUc7WUFDdkNYLGVBQWVmLFVBQVUyQixJQUFJLENBQzFCdkIsQ0FBQUEsU0FBVSxDQUFDcUIsd0JBQXdCcEIsUUFBUSxDQUFDRDtRQUVsRDtRQUNBTSxhQUFhYSxDQUFBQSxnQkFBa0I7Z0JBQzVCLEdBQUdBLGFBQWE7Z0JBQ2hCeEIsYUFBYUQsWUFDVnlCLGNBQWN4QixXQUFXLEVBQ3pCQyxXQUNBdUIsY0FBY3RCLG1CQUFtQjtnQkFFcENBLHFCQUFxQjt1QkFBSXNCLGNBQWN0QixtQkFBbUI7b0JBQUVHO2lCQUFPO1lBQ3RFO0lBQ0g7SUFFQSxPQUFPO1FBQ0pJO1FBQ0FUO1FBQ0FlO1FBQ0FFO1FBQ0FQO1FBQ0FlO1FBQ0FUO0tBQ0Y7QUFDSjtHQTNEZ0JSO0FBNkRoQixTQUFTcUIsY0FBY0MsVUFBVSxFQUFFQyxXQUFXO0lBQzNDLE9BQU9ELFdBQVdFLFFBQVEsT0FBT0QsWUFBWUMsUUFBUTtBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzPzc4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0aW5nV2lubmVyIH0gZnJvbSAnLi9tb2RlbCdcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIsIHBsYXllcldob0Nhbm5vdE1vdmUpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyTW92YWJsZVBsYXllcnMgPSBtb3ZlT3JkZXIuZmlsdGVyKFxyXG4gICAgICBzeW1ib2wgPT4gIXBsYXllcldob0Nhbm5vdE1vdmUuaW5jbHVkZXMoc3ltYm9sKSxcclxuICAgKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1ttb3ZlT3JkZXJNb3ZhYmxlUGxheWVycy5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFdID8/XHJcbiAgICAgIG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzWzBdXHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShtb3ZlT3JkZXIpIHtcclxuICAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlLCB3aW5uZXJTZXF1ZW5jZSwgcGxheWVyV2hvQ2Fubm90TW92ZSB9LCBzZXRHYW1lU3RhdGVdID1cclxuICAgICAgdXNlU3RhdGUoKCkgPT4gKHtcclxuICAgICAgICAgY2VsbHM6IEFycmF5KDE5KVxyXG4gICAgICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAgICAubWFwKCgpID0+IEFycmF5KDE5KS5maWxsKG51bGwpKSxcclxuICAgICAgICAgY3VycmVudE1vdmU6IG1vdmVPcmRlclswXSxcclxuICAgICAgICAgd2lubmVyU2VxdWVuY2U6IG51bGwsXHJcbiAgICAgICAgIHBsYXllcldob0Nhbm5vdE1vdmU6IFtdLFxyXG4gICAgICB9KSlcclxuXHJcbiAgIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlciwgcGxheWVyV2hvQ2Fubm90TW92ZSlcclxuICAgbGV0IHdpbm5lclN5bWJvbCA9IHdpbm5lclNlcXVlbmNlPy5bMF1cclxuXHJcbiAgIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2VsbHMgPSBjZWxscy5tYXAoKGxpbmUsIGkpID0+IGxpbmUubWFwKChjZWxsLCBqKSA9PiBjZWxsc1tpXVtqXSkpXHJcbiAgICAgIG5ld0NlbGxzW2luZGV4WzBdXVtpbmRleFsxXV0gPSBjdXJyZW50TW92ZVxyXG4gICAgICBzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiB7XHJcbiAgICAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4WzBdXVtpbmRleFsxXV0pIHJldHVybiBsYXN0R2FtZVN0YXRlXHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuICAgICAgICAgICAgICAgbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuICAgICAgICAgICAgICAgbW92ZU9yZGVyLFxyXG4gICAgICAgICAgICAgICBwbGF5ZXJXaG9DYW5ub3RNb3ZlLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjZWxsczogbmV3Q2VsbHMsXHJcbiAgICAgICAgICAgIHdpbm5lclNlcXVlbmNlOiBjb21wdXRpbmdXaW5uZXIobmV3Q2VsbHMsIGluZGV4LCAzKSxcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG4gICBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IHN5bWJvbCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1BsYXllcnNXaG9DYW5ub3RNb3ZlID0gWy4uLnBsYXllcldob0Nhbm5vdE1vdmUsIHN5bWJvbF1cclxuICAgICAgaWYgKG5ld1BsYXllcnNXaG9DYW5ub3RNb3ZlLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICB3aW5uZXJTeW1ib2wgPSBtb3ZlT3JkZXIuZmluZChcclxuICAgICAgICAgICAgc3ltYm9sID0+ICFuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZS5pbmNsdWRlcyhzeW1ib2wpLFxyXG4gICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG4gICAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG4gICAgICAgICAgICBtb3ZlT3JkZXIsXHJcbiAgICAgICAgICAgIGxhc3RHYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgICAgICAgKSxcclxuICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSwgc3ltYm9sXSxcclxuICAgICAgfSkpXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBbXHJcbiAgICAgIGNlbGxzLFxyXG4gICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgbmV4dE1vdmUsXHJcbiAgICAgIGhhbmRsZUNlbGxDbGljayxcclxuICAgICAgd2lubmVyU2VxdWVuY2UsXHJcbiAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG4gICAgICB3aW5uZXJTeW1ib2wsXHJcbiAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheXNFcXVhbChmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkge1xyXG4gICByZXR1cm4gZmlyc3RBcnJheS50b1N0cmluZygpID09PSBzZWNvbmRBcnJheS50b1N0cmluZygpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29tcHV0aW5nV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm1vdmVPcmRlciIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyIsImZpbHRlciIsInN5bWJvbCIsImluY2x1ZGVzIiwiaW5kZXhPZiIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwid2lubmVyU2VxdWVuY2UiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibmV3Q2VsbHMiLCJsaW5lIiwiaSIsImNlbGwiLCJqIiwibGFzdEdhbWVTdGF0ZSIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwibmV3UGxheWVyc1dob0Nhbm5vdE1vdmUiLCJsZW5ndGgiLCJmaW5kIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});