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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _computingWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computingWinner */ \"./components/game/computingWinner.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, moveOrder) {\n    var _moveOrder_;\n    return (_moveOrder_ = moveOrder[moveOrder.indexOf(currentMove) + 1]) !== null && _moveOrder_ !== void 0 ? _moveOrder_ : moveOrder[0];\n}\nfunction useGameState(moveOrder) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: Array(19).fill(null).map(()=>Array(19).fill(null)),\n            currentMove: moveOrder[0]\n        }));\n    const nextMove = getNextMove(currentMove, moveOrder);\n    const handleCellClick = (index)=>{\n        debugger;\n        const newCells = cells.slice();\n        newCells[index[0]][index[1]] = currentMove;\n        alert((0,_computingWinner__WEBPACK_IMPORTED_MODULE_1__.computingWinner)(cells, index, 3));\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index[0]][index[1]]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, moveOrder),\n                cells: newCells\n            };\n        });\n    };\n    return [\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    ];\n}\n_s(useGameState, \"v882/gAEWqIrwA8dl/FOMBPwR4M=\");\nfunction isArraysEqual(firstArray, secondArray) {\n    return firstArray.toString() === secondArray.toString();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ21CO0FBRW5ELFNBQVNFLFlBQVlDLFdBQVcsRUFBRUMsU0FBUztRQUNqQ0E7SUFBUCxPQUFPQSxDQUFBQSxjQUFBQSxTQUFTLENBQUNBLFVBQVVDLE9BQU8sQ0FBQ0YsZUFBZSxFQUFFLGNBQTdDQyx5QkFBQUEsY0FBaURBLFNBQVMsQ0FBQyxFQUFFO0FBQ3ZFO0FBRU8sU0FBU0UsYUFBYUYsU0FBUzs7SUFDbkMsTUFBTSxDQUFDLEVBQUVHLEtBQUssRUFBRUosV0FBVyxFQUFFLEVBQUVLLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsSUFBTztZQUM1RE8sT0FBT0UsTUFBTSxJQUNUQyxJQUFJLENBQUMsTUFDTEMsR0FBRyxDQUFDLElBQU1GLE1BQU0sSUFBSUMsSUFBSSxDQUFDO1lBQzdCUCxhQUFhQyxTQUFTLENBQUMsRUFBRTtRQUM1QjtJQUNBLE1BQU1RLFdBQVdWLFlBQVlDLGFBQWFDO0lBRTFDLE1BQU1TLGtCQUFrQkMsQ0FBQUE7UUFDckIsUUFBUTtRQUNSLE1BQU1DLFdBQVdSLE1BQU1TLEtBQUs7UUFDNUJELFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUdYO1FBQy9CYyxNQUFNaEIsaUVBQWVBLENBQUNNLE9BQU9PLE9BQU87UUFDcENOLGFBQWFVLENBQUFBO1lBQ1YsSUFBSUEsY0FBY1gsS0FBSyxDQUFDTyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPSTtZQUNwRCxPQUFPO2dCQUNKLEdBQUdBLGFBQWE7Z0JBQ2hCZixhQUFhRCxZQUFZZ0IsY0FBY2YsV0FBVyxFQUFFQztnQkFDcERHLE9BQU9RO1lBQ1Y7UUFDSDtJQUNIO0lBQ0EsT0FBTztRQUFDUjtRQUFPSjtRQUFhUztRQUFVQztLQUFnQjtBQUN6RDtHQXhCZ0JQO0FBMEJoQixTQUFTYSxjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDM0MsT0FBT0QsV0FBV0UsUUFBUSxPQUFPRCxZQUFZQyxRQUFRO0FBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2VHYW1lU3RhdGUuanM/Nzg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb21wdXRpbmdXaW5uZXIgfSBmcm9tICcuL2NvbXB1dGluZ1dpbm5lcidcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIpIHtcclxuICAgcmV0dXJuIG1vdmVPcmRlclttb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXSA/PyBtb3ZlT3JkZXJbMF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShtb3ZlT3JkZXIpIHtcclxuICAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICBjZWxsczogQXJyYXkoMTkpXHJcbiAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTkpLmZpbGwobnVsbCkpLFxyXG4gICAgICBjdXJyZW50TW92ZTogbW92ZU9yZGVyWzBdLFxyXG4gICB9KSlcclxuICAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgbW92ZU9yZGVyKVxyXG5cclxuICAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBjb25zdCBuZXdDZWxscyA9IGNlbGxzLnNsaWNlKClcclxuICAgICAgbmV3Q2VsbHNbaW5kZXhbMF1dW2luZGV4WzFdXSA9IGN1cnJlbnRNb3ZlXHJcbiAgICAgIGFsZXJ0KGNvbXB1dGluZ1dpbm5lcihjZWxscywgaW5kZXgsIDMpKVxyXG4gICAgICBzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiB7XHJcbiAgICAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4WzBdXVtpbmRleFsxXV0pIHJldHVybiBsYXN0R2FtZVN0YXRlXHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBtb3ZlT3JkZXIpLFxyXG4gICAgICAgICAgICBjZWxsczogbmV3Q2VsbHMsXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG4gICByZXR1cm4gW2NlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGhhbmRsZUNlbGxDbGlja11cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheXNFcXVhbChmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkge1xyXG4gICByZXR1cm4gZmlyc3RBcnJheS50b1N0cmluZygpID09PSBzZWNvbmRBcnJheS50b1N0cmluZygpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29tcHV0aW5nV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm1vdmVPcmRlciIsImluZGV4T2YiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJuZXdDZWxscyIsInNsaWNlIiwiYWxlcnQiLCJsYXN0R2FtZVN0YXRlIiwiaXNBcnJheXNFcXVhbCIsImZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});