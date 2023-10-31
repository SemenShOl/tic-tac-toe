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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder, playerWhoCannotMove) {\n    const moveOrderMovablePlayers = moveOrder.filter((symbol)=>symbol !== playerWhoCannotMove);\n    var _moveOrder_;\n    return (_moveOrder_ = moveOrder[moveOrder.indexOf(currentMove) + 1]) !== null && _moveOrder_ !== void 0 ? _moveOrder_ : moveOrder[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove, winnerSequence, playerWhoCannotMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0],\n            winnerSequence: null,\n            playerWhoCannotMove: []\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder);\n    const handleCellClick = (index)=>{\n        const newCells = cells.map((line, i)=>line.map((cell, j)=>cells[i][j]));\n        newCells[index[0]][index[1]] = currentMove;\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder),\n                cells: newCells,\n                winnerSequence: (0,_model__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(newCells, index, 3)\n            };\n        });\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence\n    ];\n}\n_s(useGameState, \"ag6yBx+EFxkgT0b8dMGPD/+HgxQ=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFFekMsU0FBU0UsWUFBWUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLG1CQUFtQjtJQUM3RCxNQUFNQywwQkFBMEJGLFVBQVVHLE1BQU0sQ0FDN0NDLENBQUFBLFNBQVVBLFdBQVdIO1FBRWpCRDtJQUFQLE9BQU9BLENBQUFBLGNBQUFBLFNBQVMsQ0FBQ0EsVUFBVUssT0FBTyxDQUFDTixlQUFlLEVBQUUsY0FBN0NDLHlCQUFBQSxjQUFpREEsU0FBUyxDQUFDLEVBQUU7QUFDdkU7QUFFTyxTQUFTTSxhQUFhTixTQUFTOztJQUNuQyxNQUFNLENBQUMsRUFBRU8sS0FBSyxFQUFFUixXQUFXLEVBQUVTLGNBQWMsRUFBRVAsbUJBQW1CLEVBQUUsRUFBRVEsYUFBYSxHQUM5RWIsK0NBQVFBLENBQUMsSUFBTztZQUNiVyxPQUFPRyxNQUFNLElBQ1RDLElBQUksQ0FBQyxNQUNMQyxHQUFHLENBQUMsSUFBTUYsTUFBTSxJQUFJQyxJQUFJLENBQUM7WUFDN0JaLGFBQWFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pCUSxnQkFBZ0I7WUFDaEJQLHFCQUFxQixFQUFFO1FBQzFCO0lBRUgsTUFBTVksV0FBV2YsWUFBWUMsYUFBYUM7SUFDMUMsTUFBTWMsa0JBQWtCQyxDQUFBQTtRQUNyQixNQUFNQyxXQUFXVCxNQUFNSyxHQUFHLENBQUMsQ0FBQ0ssTUFBTUMsSUFBTUQsS0FBS0wsR0FBRyxDQUFDLENBQUNPLE1BQU1DLElBQU1iLEtBQUssQ0FBQ1csRUFBRSxDQUFDRSxFQUFFO1FBQ3pFSixRQUFRLENBQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHaEI7UUFDL0JVLGFBQWFZLENBQUFBO1lBQ1YsSUFBSUEsY0FBY2QsS0FBSyxDQUFDUSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPTTtZQUNwRCxPQUFPO2dCQUNKLEdBQUdBLGFBQWE7Z0JBQ2hCdEIsYUFBYUQsWUFBWXVCLGNBQWN0QixXQUFXLEVBQUVDO2dCQUNwRE8sT0FBT1M7Z0JBQ1BSLGdCQUFnQlgsdURBQWVBLENBQUNtQixVQUFVRCxPQUFPO1lBQ3BEO1FBQ0g7SUFDSDtJQUNBLE9BQU87UUFBQ1I7UUFBT1I7UUFBYWM7UUFBVUM7UUFBaUJOO0tBQWU7QUFDekU7R0ExQmdCRjtBQTRCaEIsU0FBU2dCLGNBQWNDLFVBQVUsRUFBRUMsV0FBVztJQUMzQyxPQUFPRCxXQUFXRSxRQUFRLE9BQU9ELFlBQVlDLFFBQVE7QUFDeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZUdhbWVTdGF0ZS5qcz83ODc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbXB1dGluZ1dpbm5lciB9IGZyb20gJy4vbW9kZWwnXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlKSB7XHJcbiAgIGNvbnN0IG1vdmVPcmRlck1vdmFibGVQbGF5ZXJzID0gbW92ZU9yZGVyLmZpbHRlcihcclxuICAgICAgc3ltYm9sID0+IHN5bWJvbCAhPT0gcGxheWVyV2hvQ2Fubm90TW92ZSxcclxuICAgKVxyXG4gICByZXR1cm4gbW92ZU9yZGVyW21vdmVPcmRlci5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFdID8/IG1vdmVPcmRlclswXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKG1vdmVPcmRlcikge1xyXG4gICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHdpbm5lclNlcXVlbmNlLCBwbGF5ZXJXaG9DYW5ub3RNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPVxyXG4gICAgICB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAgICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICAgICAgICB3aW5uZXJTZXF1ZW5jZTogbnVsbCxcclxuICAgICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZTogW10sXHJcbiAgICAgIH0pKVxyXG5cclxuICAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyKVxyXG4gICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NlbGxzID0gY2VsbHMubWFwKChsaW5lLCBpKSA9PiBsaW5lLm1hcCgoY2VsbCwgaikgPT4gY2VsbHNbaV1bal0pKVxyXG4gICAgICBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgICAgc2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4ge1xyXG4gICAgICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleFswXV1baW5kZXhbMV1dKSByZXR1cm4gbGFzdEdhbWVTdGF0ZVxyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgbW92ZU9yZGVyKSxcclxuICAgICAgICAgICAgY2VsbHM6IG5ld0NlbGxzLFxyXG4gICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZTogY29tcHV0aW5nV2lubmVyKG5ld0NlbGxzLCBpbmRleCwgMyksXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG4gICByZXR1cm4gW2NlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGhhbmRsZUNlbGxDbGljaywgd2lubmVyU2VxdWVuY2VdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXlzRXF1YWwoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpIHtcclxuICAgcmV0dXJuIGZpcnN0QXJyYXkudG9TdHJpbmcoKSA9PT0gc2Vjb25kQXJyYXkudG9TdHJpbmcoKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbXB1dGluZ1dpbm5lciIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJtb3ZlT3JkZXIiLCJwbGF5ZXJXaG9DYW5ub3RNb3ZlIiwibW92ZU9yZGVyTW92YWJsZVBsYXllcnMiLCJmaWx0ZXIiLCJzeW1ib2wiLCJpbmRleE9mIiwidXNlR2FtZVN0YXRlIiwiY2VsbHMiLCJ3aW5uZXJTZXF1ZW5jZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJuZXdDZWxscyIsImxpbmUiLCJpIiwiY2VsbCIsImoiLCJsYXN0R2FtZVN0YXRlIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});