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

/***/ "./components/game/model/gameStateReducer.js":
/*!***************************************************!*\
  !*** ./components/game/model/gameStateReducer.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _computingWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computingWinner */ \"./components/game/model/computingWinner.js\");\n/* harmony import */ var _getNextMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNextMove */ \"./components/game/model/getNextMove.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell_click\",\n    TIMER_CHANGE: \"timer_change\"\n};\nconst initGameState = (param)=>{\n    let { moveOrder, defaultTimer, currentMoveStart } = param;\n    return {\n        cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n        currentMove: moveOrder[0],\n        currentMoveStart,\n        winnerSequence: null,\n        playerWhoCannotMove: [],\n        moveOrder,\n        timers: moveOrder.reduce((timers, symbol)=>{\n            timers[symbol] = defaultTimer;\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state1, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index: index1, now } = action.payload;\n                const newCells = state1.cells.map((line, i)=>line.map((cell, j)=>state1.cells[i][j]));\n                newCells[index1[0]][index1[1]] = state1.currentMove;\n                if (state1.cells[index1[0]][index1[1]]) return state1;\n                return {\n                    ...state1,\n                    currentMove: (0,_getNextMove__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state1.currentMove, state1.moveOrder, state1.playerWhoCannotMove, state1.timers),\n                    currentMoveStart: action.payload.now,\n                    cells: newCells,\n                    winnerSequence: (0,_computingWinner__WEBPACK_IMPORTED_MODULE_0__.computingWinner)(newCells, index1, 3),\n                    timers: updateTimers(state1, now)\n                };\n            }\n        case GAME_STATE_ACTIONS.TIMER_CHANGE:\n            {\n                const { timer } = action.payload;\n                if (timer < 0) {\n                    const newPlayersWhoCannotMove = [\n                        ...state1.playerWhoCannotMove,\n                        currentMove\n                    ];\n                }\n                return {\n                    ...state1,\n                    timers: {\n                        ...state1.timers,\n                        [state1.currentMove]: timer\n                    }\n                };\n            }\n        default:\n            {\n                return state1;\n            }\n    }\n};\nfunction updateTimers(gameState, now) {\n    const diff = now - gameState.currentMoveStart;\n    const timer = gameState.timers[gameState.currentMove];\n    return {\n        ...gameState.timers,\n        [gameState.currentMove]: timer - diff\n    };\n}\nfunction updateCells(gameState) {\n    const newCells = gameState.cells.map((line, i)=>line.map((cell, j)=>gameState.cells[i][j]));\n    newCells[index[0]][index[1]] = state.currentMove;\n    return newCells;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvbW9kZWwvZ2FtZVN0YXRlUmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUNSO0FBQ3JDLE1BQU1FLHFCQUNaO0lBQ0NDLFlBQVk7SUFDWkMsY0FBYztBQUNmLEVBQUU7QUFFSSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUM3QkMsU0FBUyxFQUNUQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQjtXQUFNO1FBQ05DLE9BQU9DLE1BQU0sSUFDWEMsSUFBSSxDQUFDLE1BQ0xDLEdBQUcsQ0FBQyxJQUNKRixNQUFNLElBQUlDLElBQUksQ0FBQztRQUVqQkUsYUFBYVAsU0FBUyxDQUFDLEVBQUU7UUFDekJFO1FBQ0FNLGdCQUFnQjtRQUNoQkMscUJBQXFCLEVBQUU7UUFDdkJUO1FBQ0FVLFFBQVFWLFVBQVVXLE1BQU0sQ0FDdkIsQ0FBQ0QsUUFBUUU7WUFDUkYsTUFBTSxDQUFDRSxPQUFPLEdBQUdYO1lBQ2pCLE9BQU9TO1FBQ1IsR0FDQSxDQUFDO0lBRUg7QUFBQSxFQUFHO0FBRUksTUFBTUcsbUJBQW1CLENBQy9CQyxRQUNBQztJQUVBLE9BQVFBLE9BQU9DLElBQUk7UUFDbEIsS0FBS3BCLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxNQUFNLEVBQUVvQixPQUFBQSxNQUFLLEVBQUVDLEdBQUcsRUFBRSxHQUNuQkgsT0FBT0ksT0FBTztnQkFFZixNQUFNQyxXQUNMTixPQUFNWCxLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDZSxNQUFNQyxJQUN0QkQsS0FBS2YsR0FBRyxDQUNQLENBQUNpQixNQUFNQyxJQUNOVixPQUFNWCxLQUFLLENBQUNtQixFQUFFLENBQUNFLEVBQUU7Z0JBR3JCSixRQUFRLENBQUNILE1BQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsTUFBSyxDQUFDLEVBQUUsQ0FBQyxHQUMzQkgsT0FBTVAsV0FBVztnQkFDbEIsSUFDQ08sT0FBTVgsS0FBSyxDQUFDYyxNQUFLLENBQUMsRUFBRSxDQUFDLENBQ3BCQSxNQUFLLENBQUMsRUFBRSxDQUNSLEVBRUQsT0FBT0g7Z0JBRVIsT0FBTztvQkFDTixHQUFHQSxNQUFLO29CQUNSUCxhQUFhWix5REFBV0EsQ0FDdkJtQixPQUFNUCxXQUFXLEVBQ2pCTyxPQUFNZCxTQUFTLEVBQ2ZjLE9BQU1MLG1CQUFtQixFQUN6QkssT0FBTUosTUFBTTtvQkFFYlIsa0JBQ0NhLE9BQU9JLE9BQU8sQ0FBQ0QsR0FBRztvQkFDbkJmLE9BQU9pQjtvQkFDUFosZ0JBQ0NkLGlFQUFlQSxDQUNkMEIsVUFDQUgsUUFDQTtvQkFFRlAsUUFBUWUsYUFDUFgsUUFDQUk7Z0JBRUY7WUFDRDtRQUNBLEtBQUt0QixtQkFBbUJFLFlBQVk7WUFBRTtnQkFDckMsTUFBTSxFQUFFNEIsS0FBSyxFQUFFLEdBQ2RYLE9BQU9JLE9BQU87Z0JBQ2YsSUFBSU8sUUFBUSxHQUFHO29CQUNkLE1BQU1DLDBCQUNMOzJCQUNJYixPQUFNTCxtQkFBbUI7d0JBQzVCRjtxQkFDQTtnQkFDSDtnQkFFQSxPQUFPO29CQUNOLEdBQUdPLE1BQUs7b0JBQ1JKLFFBQVE7d0JBQ1AsR0FBR0ksT0FBTUosTUFBTTt3QkFDZixDQUFDSSxPQUFNUCxXQUFXLENBQUMsRUFBRW1CO29CQUN0QjtnQkFDRDtZQUNEO1FBQ0E7WUFBUztnQkFDUixPQUFPWjtZQUNSO0lBQ0Q7QUFDRCxFQUFFO0FBRUYsU0FBU1csYUFDUkcsU0FBUyxFQUNUVixHQUFHO0lBRUgsTUFBTVcsT0FDTFgsTUFDQVUsVUFBVTFCLGdCQUFnQjtJQUMzQixNQUFNd0IsUUFDTEUsVUFBVWxCLE1BQU0sQ0FDZmtCLFVBQVVyQixXQUFXLENBQ3JCO0lBQ0YsT0FBTztRQUNOLEdBQUdxQixVQUFVbEIsTUFBTTtRQUNuQixDQUFDa0IsVUFBVXJCLFdBQVcsQ0FBQyxFQUN0Qm1CLFFBQVFHO0lBQ1Y7QUFDRDtBQUNBLFNBQVNDLFlBQVlGLFNBQVM7SUFDN0IsTUFBTVIsV0FDTFEsVUFBVXpCLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUNlLE1BQU1DLElBQzFCRCxLQUFLZixHQUFHLENBQ1AsQ0FBQ2lCLE1BQU1DLElBQ05JLFVBQVV6QixLQUFLLENBQUNtQixFQUFFLENBQUNFLEVBQUU7SUFHekJKLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQzNCSCxNQUFNUCxXQUFXO0lBQ2xCLE9BQU9hO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL21vZGVsL2dhbWVTdGF0ZVJlZHVjZXIuanM/YWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRpbmdXaW5uZXIgfSBmcm9tIFwiLi9jb21wdXRpbmdXaW5uZXJcIjtcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tIFwiLi9nZXROZXh0TW92ZVwiO1xyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID1cclxuXHR7XHJcblx0XHRDRUxMX0NMSUNLOiBcImNlbGxfY2xpY2tcIixcclxuXHRcdFRJTUVSX0NIQU5HRTogXCJ0aW1lcl9jaGFuZ2VcIixcclxuXHR9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRHYW1lU3RhdGUgPSAoe1xyXG5cdG1vdmVPcmRlcixcclxuXHRkZWZhdWx0VGltZXIsXHJcblx0Y3VycmVudE1vdmVTdGFydCxcclxufSkgPT4gKHtcclxuXHRjZWxsczogQXJyYXkoMTkpXHJcblx0XHQuZmlsbChudWxsKVxyXG5cdFx0Lm1hcCgoKSA9PlxyXG5cdFx0XHRBcnJheSgxOSkuZmlsbChudWxsKSxcclxuXHRcdCksXHJcblx0Y3VycmVudE1vdmU6IG1vdmVPcmRlclswXSxcclxuXHRjdXJyZW50TW92ZVN0YXJ0LFxyXG5cdHdpbm5lclNlcXVlbmNlOiBudWxsLFxyXG5cdHBsYXllcldob0Nhbm5vdE1vdmU6IFtdLFxyXG5cdG1vdmVPcmRlcixcclxuXHR0aW1lcnM6IG1vdmVPcmRlci5yZWR1Y2UoXHJcblx0XHQodGltZXJzLCBzeW1ib2wpID0+IHtcclxuXHRcdFx0dGltZXJzW3N5bWJvbF0gPSBkZWZhdWx0VGltZXI7XHJcblx0XHRcdHJldHVybiB0aW1lcnM7XHJcblx0XHR9LFxyXG5cdFx0e30sXHJcblx0KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChcclxuXHRzdGF0ZSxcclxuXHRhY3Rpb24sXHJcbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0s6IHtcclxuXHRcdFx0Y29uc3QgeyBpbmRleCwgbm93IH0gPVxyXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0Y29uc3QgbmV3Q2VsbHMgPVxyXG5cdFx0XHRcdHN0YXRlLmNlbGxzLm1hcCgobGluZSwgaSkgPT5cclxuXHRcdFx0XHRcdGxpbmUubWFwKFxyXG5cdFx0XHRcdFx0XHQoY2VsbCwgaikgPT5cclxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5jZWxsc1tpXVtqXSxcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0bmV3Q2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSA9XHJcblx0XHRcdFx0c3RhdGUuY3VycmVudE1vdmU7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGF0ZS5jZWxsc1tpbmRleFswXV1bXHJcblx0XHRcdFx0XHRpbmRleFsxXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdFx0XHRcdFx0c3RhdGUuY3VycmVudE1vdmUsXHJcblx0XHRcdFx0XHRzdGF0ZS5tb3ZlT3JkZXIsXHJcblx0XHRcdFx0XHRzdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlLFxyXG5cdFx0XHRcdFx0c3RhdGUudGltZXJzLFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0Y3VycmVudE1vdmVTdGFydDpcclxuXHRcdFx0XHRcdGFjdGlvbi5wYXlsb2FkLm5vdyxcclxuXHRcdFx0XHRjZWxsczogbmV3Q2VsbHMsXHJcblx0XHRcdFx0d2lubmVyU2VxdWVuY2U6XHJcblx0XHRcdFx0XHRjb21wdXRpbmdXaW5uZXIoXHJcblx0XHRcdFx0XHRcdG5ld0NlbGxzLFxyXG5cdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0dGltZXJzOiB1cGRhdGVUaW1lcnMoXHJcblx0XHRcdFx0XHRzdGF0ZSxcclxuXHRcdFx0XHRcdG5vdyxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuVElNRVJfQ0hBTkdFOiB7XHJcblx0XHRcdGNvbnN0IHsgdGltZXIgfSA9XHJcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdGlmICh0aW1lciA8IDApIHtcclxuXHRcdFx0XHRjb25zdCBuZXdQbGF5ZXJzV2hvQ2Fubm90TW92ZSA9XHJcblx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdC4uLnN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRNb3ZlLFxyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aW1lcnM6IHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLnRpbWVycyxcclxuXHRcdFx0XHRcdFtzdGF0ZS5jdXJyZW50TW92ZV06IHRpbWVyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUaW1lcnMoXHJcblx0Z2FtZVN0YXRlLFxyXG5cdG5vdyxcclxuKSB7XHJcblx0Y29uc3QgZGlmZiA9XHJcblx0XHRub3cgLVxyXG5cdFx0Z2FtZVN0YXRlLmN1cnJlbnRNb3ZlU3RhcnQ7XHJcblx0Y29uc3QgdGltZXIgPVxyXG5cdFx0Z2FtZVN0YXRlLnRpbWVyc1tcclxuXHRcdFx0Z2FtZVN0YXRlLmN1cnJlbnRNb3ZlXHJcblx0XHRdO1xyXG5cdHJldHVybiB7XHJcblx0XHQuLi5nYW1lU3RhdGUudGltZXJzLFxyXG5cdFx0W2dhbWVTdGF0ZS5jdXJyZW50TW92ZV06XHJcblx0XHRcdHRpbWVyIC0gZGlmZixcclxuXHR9O1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzKGdhbWVTdGF0ZSkge1xyXG5cdGNvbnN0IG5ld0NlbGxzID1cclxuXHRcdGdhbWVTdGF0ZS5jZWxscy5tYXAoKGxpbmUsIGkpID0+XHJcblx0XHRcdGxpbmUubWFwKFxyXG5cdFx0XHRcdChjZWxsLCBqKSA9PlxyXG5cdFx0XHRcdFx0Z2FtZVN0YXRlLmNlbGxzW2ldW2pdLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID1cclxuXHRcdHN0YXRlLmN1cnJlbnRNb3ZlO1xyXG5cdHJldHVybiBuZXdDZWxscztcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcHV0aW5nV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJDRUxMX0NMSUNLIiwiVElNRVJfQ0hBTkdFIiwiaW5pdEdhbWVTdGF0ZSIsIm1vdmVPcmRlciIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImN1cnJlbnRNb3ZlIiwid2lubmVyU2VxdWVuY2UiLCJwbGF5ZXJXaG9DYW5ub3RNb3ZlIiwidGltZXJzIiwicmVkdWNlIiwic3ltYm9sIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluZGV4Iiwibm93IiwicGF5bG9hZCIsIm5ld0NlbGxzIiwibGluZSIsImkiLCJjZWxsIiwiaiIsInVwZGF0ZVRpbWVycyIsInRpbWVyIiwibmV3UGxheWVyc1dob0Nhbm5vdE1vdmUiLCJnYW1lU3RhdGUiLCJkaWZmIiwidXBkYXRlQ2VsbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/model/gameStateReducer.js\n"));

/***/ })

});