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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _computingWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computingWinner */ \"./components/game/computingWinner.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder) {\n    var _moveOrder_;\n    return (_moveOrder_ = moveOrder[moveOrder.indexOf(currentMove) + 1]) !== null && _moveOrder_ !== void 0 ? _moveOrder_ : moveOrder[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0]\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder);\n    const handleCellClick = (index)=>{\n        debugger;\n        const newCells = cells.slice();\n        console.log(index);\n        // newCells[index[0]][index[1]] = currentMove\n        alert((0,_computingWinner__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(cells, index, 3));\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder),\n                cells: newCells\n            };\n        });\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    ];\n}\n_s(useGameState, \"v882/gAEWqIrwA8dl/FOMBPwR4M=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ21CO0FBRW5ELFNBQVNFLFlBQVlDLFdBQVcsRUFBRUMsU0FBUztRQUNqQ0E7SUFBUCxPQUFPQSxDQUFBQSxjQUFBQSxTQUFTLENBQUNBLFVBQVVDLE9BQU8sQ0FBQ0YsZUFBZSxFQUFFLGNBQTdDQyx5QkFBQUEsY0FBaURBLFNBQVMsQ0FBQyxFQUFFO0FBQ3ZFO0FBRU8sU0FBU0UsYUFBYUYsU0FBUzs7SUFDbkMsTUFBTSxDQUFDLEVBQUVHLEtBQUssRUFBRUosV0FBVyxFQUFFLEVBQUVLLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsSUFBTztZQUM1RE8sT0FBT0UsTUFBTSxJQUNUQyxJQUFJLENBQUMsTUFDTEMsR0FBRyxDQUFDLElBQU1GLE1BQU0sSUFBSUMsSUFBSSxDQUFDO1lBQzdCUCxhQUFhQyxTQUFTLENBQUMsRUFBRTtRQUM1QjtJQUNBLE1BQU1RLFdBQVdWLFlBQVlDLGFBQWFDO0lBRTFDLE1BQU1TLGtCQUFrQkMsQ0FBQUE7UUFDckIsUUFBUTtRQUNSLE1BQU1DLFdBQVdSLE1BQU1TLEtBQUs7UUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWiw2Q0FBNkM7UUFDN0NLLE1BQU1sQixpRUFBZUEsQ0FBQ00sT0FBT08sT0FBTztRQUNwQ04sYUFBYVksQ0FBQUE7WUFDVixJQUFJQSxjQUFjYixLQUFLLENBQUNPLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU9NO1lBQ3BELE9BQU87Z0JBQ0osR0FBR0EsYUFBYTtnQkFDaEJqQixhQUFhRCxZQUFZa0IsY0FBY2pCLFdBQVcsRUFBRUM7Z0JBQ3BERyxPQUFPUTtZQUNWO1FBQ0g7SUFDSDtJQUNBLE9BQU87UUFBQ1I7UUFBT0o7UUFBYVM7UUFBVUM7S0FBZ0I7QUFDekQ7R0F6QmdCUDtBQTJCaEIsU0FBU2UsY0FBY0MsVUFBVSxFQUFFQyxXQUFXO0lBQzNDLE9BQU9ELFdBQVdFLFFBQVEsT0FBT0QsWUFBWUMsUUFBUTtBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzPzc4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0aW5nV2lubmVyIH0gZnJvbSAnLi9jb21wdXRpbmdXaW5uZXInXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyKSB7XHJcbiAgIHJldHVybiBtb3ZlT3JkZXJbbW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMV0gPz8gbW92ZU9yZGVyWzBdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKSB7XHJcbiAgIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcclxuICAgICAgY2VsbHM6IEFycmF5KDE5KVxyXG4gICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAubWFwKCgpID0+IEFycmF5KDE5KS5maWxsKG51bGwpKSxcclxuICAgICAgY3VycmVudE1vdmU6IG1vdmVPcmRlclswXSxcclxuICAgfSkpXHJcbiAgIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIG1vdmVPcmRlcilcclxuXHJcbiAgIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuICAgICAgZGVidWdnZXJcclxuICAgICAgY29uc3QgbmV3Q2VsbHMgPSBjZWxscy5zbGljZSgpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAvLyBuZXdDZWxsc1tpbmRleFswXV1baW5kZXhbMV1dID0gY3VycmVudE1vdmVcclxuICAgICAgYWxlcnQoY29tcHV0aW5nV2lubmVyKGNlbGxzLCBpbmRleCwgMykpXHJcbiAgICAgIHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+IHtcclxuICAgICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSkgcmV0dXJuIGxhc3RHYW1lU3RhdGVcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsIG1vdmVPcmRlciksXHJcbiAgICAgICAgICAgIGNlbGxzOiBuZXdDZWxscyxcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICB9XHJcbiAgIHJldHVybiBbY2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgaGFuZGxlQ2VsbENsaWNrXVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5c0VxdWFsKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSB7XHJcbiAgIHJldHVybiBmaXJzdEFycmF5LnRvU3RyaW5nKCkgPT09IHNlY29uZEFycmF5LnRvU3RyaW5nKClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb21wdXRpbmdXaW5uZXIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibW92ZU9yZGVyIiwiaW5kZXhPZiIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsIm5ld0NlbGxzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJsYXN0R2FtZVN0YXRlIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});