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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    debugger;\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_moveOrderMovablePlayers_indexOf;\n    return (_moveOrderMovablePlayers_moveOrderMovablePlayers_indexOf = moveOrderMovablePlayers[moveOrderMovablePlayers.indexOf(currentMove)]) !== null && _moveOrderMovablePlayers_moveOrderMovablePlayers_indexOf !== void 0 ? _moveOrderMovablePlayers_moveOrderMovablePlayers_indexOf : moveOrderMovablePlayers[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder, playerWhoCannotMove);\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder, playerWhoCannotMove),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        debugger;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                playerWhoCannotMove: [\n                    ...lastGameState.playerWhoCannotMove,\n                    symbol\n                ]\n            }));\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence,\n        handlePlayerTimeOver\n    ];\n}\n_s(useGameState, \"ag6yBx+EFxkgT0b8dMGPD/+HgxQ=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxRQUFRO0lBQ1IsTUFBTUMsMEJBQTBCRixVQUFVRyxNQUFNLENBQzdDQyxDQUFBQSxTQUFVLENBQUNILG9CQUFvQkksUUFBUSxDQUFDRDtRQUd4Q0Y7SUFESCxPQUNHQSxDQUFBQSwyREFBQUEsdUJBQXVCLENBQUNBLHdCQUF3QkksT0FBTyxDQUFDUCxhQUFhLGNBQXJFRyxzRUFBQUEsMkRBQ0FBLHVCQUF1QixDQUFDLEVBQUU7QUFFaEM7QUFFTyxTQUFTSyxhQUFhUCxTQUFTOztJQUNuQyxNQUFNLENBQUMsRUFBRVEsS0FBSyxFQUFFVCxXQUFXLEVBQUVVLGNBQWMsRUFBRVIsbUJBQW1CLEVBQUUsRUFBRVMsYUFBYSxHQUM5RWQsK0NBQVFBLENBQUMsSUFBTztZQUNiWSxPQUFPRyxNQUFNLElBQ1RDLElBQUksQ0FBQyxNQUNMQyxHQUFHLENBQUMsSUFBTUYsTUFBTSxJQUFJQyxJQUFJLENBQUM7WUFDN0JiLGFBQWFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pCUyxnQkFBZ0I7WUFDaEJSLHFCQUFxQixFQUFFO1FBQzFCO0lBRUgsTUFBTWEsV0FBV2hCLFlBQVlDLGFBQWFDLFdBQVdDO0lBRXJELE1BQU1jLGtCQUFrQkMsQ0FBQUE7UUFDckIsTUFBTUMsV0FBV1QsTUFBTUssR0FBRyxDQUFDLENBQUNLLE1BQU1DLElBQU1ELEtBQUtMLEdBQUcsQ0FBQyxDQUFDTyxNQUFNQyxJQUFNYixLQUFLLENBQUNXLEVBQUUsQ0FBQ0UsRUFBRTtRQUN6RUosUUFBUSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBR2pCO1FBQy9CVyxhQUFhWSxDQUFBQTtZQUNWLElBQUlBLGNBQWNkLEtBQUssQ0FBQ1EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBT007WUFDcEQsT0FBTztnQkFDSixHQUFHQSxhQUFhO2dCQUNoQnZCLGFBQWFELFlBQ1Z3QixjQUFjdkIsV0FBVyxFQUN6QkMsV0FDQUM7Z0JBRUhPLE9BQU9TO2dCQUNQUixnQkFBZ0JaLHVEQUFlQSxDQUFDb0IsVUFBVUQsT0FBTztZQUNwRDtRQUNIO0lBQ0g7SUFFQSxNQUFNTyx1QkFBdUJuQixDQUFBQTtRQUMxQixRQUFRO1FBQ1JNLGFBQWFZLENBQUFBLGdCQUFrQjtnQkFDNUIsR0FBR0EsYUFBYTtnQkFDaEJyQixxQkFBcUI7dUJBQUlxQixjQUFjckIsbUJBQW1CO29CQUFFRztpQkFBTztZQUN0RTtJQUNIO0lBQ0EsT0FBTztRQUNKSTtRQUNBVDtRQUNBZTtRQUNBQztRQUNBTjtRQUNBYztLQUNGO0FBQ0o7R0E5Q2dCaEI7QUFnRGhCLFNBQVNpQixjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDM0MsT0FBT0QsV0FBV0UsUUFBUSxPQUFPRCxZQUFZQyxRQUFRO0FBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2VHYW1lU3RhdGUuanM/Nzg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb21wdXRpbmdXaW5uZXIgfSBmcm9tICcuL21vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlciwgcGxheWVyV2hvQ2Fubm90TW92ZSkge1xyXG4gICBkZWJ1Z2dlclxyXG4gICBjb25zdCBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVycyA9IG1vdmVPcmRlci5maWx0ZXIoXHJcbiAgICAgIHN5bWJvbCA9PiAhcGxheWVyV2hvQ2Fubm90TW92ZS5pbmNsdWRlcyhzeW1ib2wpLFxyXG4gICApXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzW21vdmVPcmRlck1vdmFibGVQbGF5ZXJzLmluZGV4T2YoY3VycmVudE1vdmUpXSA/P1xyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1swXVxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKSB7XHJcbiAgIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSwgd2lubmVyU2VxdWVuY2UsIHBsYXllcldob0Nhbm5vdE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9XHJcbiAgICAgIHVzZVN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgIGNlbGxzOiBBcnJheSgxOSlcclxuICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxOSkuZmlsbChudWxsKSksXHJcbiAgICAgICAgIGN1cnJlbnRNb3ZlOiBtb3ZlT3JkZXJbMF0sXHJcbiAgICAgICAgIHdpbm5lclNlcXVlbmNlOiBudWxsLFxyXG4gICAgICAgICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbXSxcclxuICAgICAgfSkpXHJcblxyXG4gICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIsIHBsYXllcldob0Nhbm5vdE1vdmUpXHJcblxyXG4gICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NlbGxzID0gY2VsbHMubWFwKChsaW5lLCBpKSA9PiBsaW5lLm1hcCgoY2VsbCwgaikgPT4gY2VsbHNbaV1bal0pKVxyXG4gICAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4ge1xyXG4gICAgICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gbGFzdEdhbWVTdGF0ZVxyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcbiAgICAgICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgICAgICAgICAgICAgIG1vdmVPcmRlcixcclxuICAgICAgICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG5cclxuICAgY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICBwbGF5ZXJXaG9DYW5ub3RNb3ZlOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlLCBzeW1ib2xdLFxyXG4gICAgICB9KSlcclxuICAgfVxyXG4gICByZXR1cm4gW1xyXG4gICAgICBjZWxscyxcclxuICAgICAgY3VycmVudE1vdmUsXHJcbiAgICAgIG5leHRNb3ZlLFxyXG4gICAgICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgICAgIHdpbm5lclNlcXVlbmNlLFxyXG4gICAgICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5c0VxdWFsKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSB7XHJcbiAgIHJldHVybiBmaXJzdEFycmF5LnRvU3RyaW5nKCkgPT09IHNlY29uZEFycmF5LnRvU3RyaW5nKClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb21wdXRpbmdXaW5uZXIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibW92ZU9yZGVyIiwicGxheWVyV2hvQ2Fubm90TW92ZSIsIm1vdmVPcmRlck1vdmFibGVQbGF5ZXJzIiwiZmlsdGVyIiwic3ltYm9sIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwidXNlR2FtZVN0YXRlIiwiY2VsbHMiLCJ3aW5uZXJTZXF1ZW5jZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJuZXdDZWxscyIsImxpbmUiLCJpIiwiY2VsbCIsImoiLCJsYXN0R2FtZVN0YXRlIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJpc0FycmF5c0VxdWFsIiwiZmlyc3RBcnJheSIsInNlY29uZEFycmF5IiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});