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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>!playerWhoCannotMove.includes(symbol));\n    var _moveOrderMovablePlayers_;\n    return (_moveOrderMovablePlayers_ = moveOrderMovablePlayers[moveOrder.indexOf(currentMove) + 1]) !== null && _moveOrderMovablePlayers_ !== void 0 ? _moveOrderMovablePlayers_ : moveOrderMovablePlayers[0];\n}\nfunction onTimeOver(symbol) {\n    setGameState((lastGameState)=>({\n            ...lastGameState,\n            playerWhoCannotMove: [\n                ...lastGameState.playerWhoCannotMove,\n                symbol\n            ]\n        }));\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence }, setGameState1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder);\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState1((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence\n    ];\n}\n_s(useGameState, \"Voqn8QOBrS1O4WRzcHA7aAzP4to=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxNQUFNQywwQkFBMEJGLFVBQVVHLE1BQU0sQ0FDN0NDLENBQUFBLFNBQVUsQ0FBQ0gsb0JBQW9CSSxRQUFRLENBQUNEO1FBR3hDRjtJQURILE9BQ0dBLENBQUFBLDRCQUFBQSx1QkFBdUIsQ0FBQ0YsVUFBVU0sT0FBTyxDQUFDUCxlQUFlLEVBQUUsY0FBM0RHLHVDQUFBQSw0QkFDQUEsdUJBQXVCLENBQUMsRUFBRTtBQUVoQztBQUVBLFNBQVNLLFdBQVdILE1BQU07SUFDdkJJLGFBQWFDLENBQUFBLGdCQUFrQjtZQUM1QixHQUFHQSxhQUFhO1lBQ2hCUixxQkFBcUI7bUJBQUlRLGNBQWNSLG1CQUFtQjtnQkFBRUc7YUFBTztRQUN0RTtBQUNIO0FBRU8sU0FBU00sYUFBYVYsU0FBUzs7SUFDbkMsTUFBTSxDQUFDLEVBQUVXLEtBQUssRUFBRVosV0FBVyxFQUFFYSxjQUFjLEVBQUUsRUFBRUosY0FBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQzVFZSxPQUFPRSxNQUFNLElBQ1RDLElBQUksQ0FBQyxNQUNMQyxHQUFHLENBQUMsSUFBTUYsTUFBTSxJQUFJQyxJQUFJLENBQUM7WUFDN0JmLGFBQWFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pCWSxnQkFBZ0I7WUFDaEJYLHFCQUFxQixFQUFFO1FBQzFCO0lBRUEsTUFBTWUsV0FBV2xCLFlBQVlDLGFBQWFDO0lBQzFDLE1BQU1pQixrQkFBa0JDLENBQUFBO1FBQ3JCLE1BQU1DLFdBQVdSLE1BQU1JLEdBQUcsQ0FBQyxDQUFDSyxNQUFNQyxJQUFNRCxLQUFLTCxHQUFHLENBQUMsQ0FBQ08sTUFBTUMsSUFBTVosS0FBSyxDQUFDVSxFQUFFLENBQUNFLEVBQUU7UUFDekVKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUduQjtRQUMvQlMsY0FBYUMsQ0FBQUE7WUFDVixJQUFJQSxjQUFjRSxLQUFLLENBQUNPLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU9UO1lBQ3BELE9BQU87Z0JBQ0osR0FBR0EsYUFBYTtnQkFDaEJWLGFBQWFELFlBQVlXLGNBQWNWLFdBQVcsRUFBRUM7Z0JBQ3BEVyxPQUFPUTtnQkFDUFAsZ0JBQWdCZix1REFBZUEsQ0FBQ3NCLFVBQVVELE9BQU87WUFDcEQ7UUFDSDtJQUNIO0lBQ0EsT0FBTztRQUFDUDtRQUFPWjtRQUFhaUI7UUFBVUM7UUFBaUJMO0tBQWU7QUFDekU7R0F6QmdCRjtBQTJCaEIsU0FBU2MsY0FBY0MsVUFBVSxFQUFFQyxXQUFXO0lBQzNDLE9BQU9ELFdBQVdFLFFBQVEsT0FBT0QsWUFBWUMsUUFBUTtBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzPzc4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0aW5nV2lubmVyIH0gZnJvbSAnLi9tb2RlbCdcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIsIHBsYXllcldob0Nhbm5vdE1vdmUpIHtcclxuICAgY29uc3QgbW92ZU9yZGVyTW92YWJsZVBsYXllcnMgPSBtb3ZlT3JkZXIuZmlsdGVyKFxyXG4gICAgICBzeW1ib2wgPT4gIXBsYXllcldob0Nhbm5vdE1vdmUuaW5jbHVkZXMoc3ltYm9sKSxcclxuICAgKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1ttb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXSA/P1xyXG4gICAgICBtb3ZlT3JkZXJNb3ZhYmxlUGxheWVyc1swXVxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVGltZU92ZXIoc3ltYm9sKSB7XHJcbiAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgIHBsYXllcldob0Nhbm5vdE1vdmU6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcldob0Nhbm5vdE1vdmUsIHN5bWJvbF0sXHJcbiAgIH0pKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKG1vdmVPcmRlcikge1xyXG4gICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHdpbm5lclNlcXVlbmNlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICAgICB3aW5uZXJTZXF1ZW5jZTogbnVsbCxcclxuICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogW10sXHJcbiAgIH0pKVxyXG5cclxuICAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyKVxyXG4gICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NlbGxzID0gY2VsbHMubWFwKChsaW5lLCBpKSA9PiBsaW5lLm1hcCgoY2VsbCwgaikgPT4gY2VsbHNbaV1bal0pKVxyXG4gICAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4ge1xyXG4gICAgICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gbGFzdEdhbWVTdGF0ZVxyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyKSxcclxuICAgICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG4gICByZXR1cm4gW2NlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGhhbmRsZUNlbGxDbGljaywgd2lubmVyU2VxdWVuY2VdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXlzRXF1YWwoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpIHtcclxuICAgcmV0dXJuIGZpcnN0QXJyYXkudG9TdHJpbmcoKSA9PT0gc2Vjb25kQXJyYXkudG9TdHJpbmcoKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbXB1dGluZ1dpbm5lciIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJtb3ZlT3JkZXIiLCJwbGF5ZXJXaG9DYW5ub3RNb3ZlIiwibW92ZU9yZGVyTW92YWJsZVBsYXllcnMiLCJmaWx0ZXIiLCJzeW1ib2wiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJvblRpbWVPdmVyIiwic2V0R2FtZVN0YXRlIiwibGFzdEdhbWVTdGF0ZSIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwid2lubmVyU2VxdWVuY2UiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibmV3Q2VsbHMiLCJsaW5lIiwiaSIsImNlbGwiLCJqIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});