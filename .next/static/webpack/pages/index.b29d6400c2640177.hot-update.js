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

/***/ "./components/game/computingWinner.js":
/*!********************************************!*\
  !*** ./components/game/computingWinner.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    debugger;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9\n    ], movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    for(let i = 0; i < seqSize; i++){\n        debugger;\n        rows[0].push(cells.slice(movedCellIndex - seqSize + i, movedCellIndex + i));\n        rows[1].push(cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x));\n    // rows[2].push(movedCellIndex - i * x)\n    // rows[3].push(movedCellIndex + i * x)\n    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    }\n    console.log(rows[0]);\n    return rows;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxRQUFRO0lBRVIsTUFBTUMsT0FBT0M7SUFDYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsS0FBS0csTUFBTSxFQUFFRCxJQUFLO1FBQ25DRSxRQUFRQyxHQUFHLENBQUNMLElBQUksQ0FBQ0UsRUFBRTtRQUNuQixJQUFJSSxtQkFBbUJOLElBQUksQ0FBQ0UsRUFBRSxFQUFFTCxRQUFRO1lBQ3JDLE9BQU87UUFDVjtJQUNIO0lBQ0EsT0FBTztBQUNWO0FBRUEsTUFBTVMscUJBQXFCLENBQUNDLEtBQUtWO0lBQzlCLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJSyxJQUFJSixNQUFNLEVBQUVELElBQUs7UUFDbEMsSUFBSSxDQUFDTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEVBQUUsT0FBTztRQUMzQixJQUFJTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEtBQUtMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU87SUFDbkQ7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxTQUFTRDtRQUNOSixRQUFBQSxpRUFBUTtRQUFDO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFFLEVBQ25DQyxpQkFBQUEsaUVBQWlCLEdBQ2pCQyxVQUFBQSxpRUFBVTtJQUVWLHNDQUFzQztJQUN0QyxNQUFNUyxJQUFJQyxLQUFLQyxJQUFJLENBQUNiLE1BQU1NLE1BQU07SUFDaEMsTUFBTUgsT0FBTztRQUNWLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7S0FDSjtJQUNELElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJSCxTQUFTRyxJQUFLO1FBQy9CLFFBQVE7UUFDUkYsSUFBSSxDQUFDLEVBQUUsQ0FBQ1csSUFBSSxDQUFDZCxNQUFNZSxLQUFLLENBQUNkLGlCQUFpQkMsVUFBVUcsR0FBR0osaUJBQWlCSTtRQUN4RUYsSUFBSSxDQUFDLEVBQUUsQ0FBQ1csSUFBSSxDQUNUZCxNQUFNZSxLQUFLLENBQUNkLGlCQUFpQixDQUFDSSxJQUFJSCxVQUFVLEtBQUtTLEdBQUdWLGlCQUFpQkksSUFBSU07SUFFNUUsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx5REFBeUQ7SUFDekQseURBQXlEO0lBQzVEO0lBQ0FKLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDLEVBQUU7SUFDbkIsT0FBT0E7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihjZWxscywgbW92ZWRDZWxsSW5kZXggPSAxMiwgc2VxU2l6ZSA9IDUpIHtcclxuICAgZGVidWdnZXJcclxuXHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cygpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKVxyXG4gICAgICBpZiAoYXJlQ2VsbHNJblJvd0VxdWFsKHJvd3NbaV0sIGNlbGxzKSkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGFyZUNlbGxzSW5Sb3dFcXVhbCA9IChyb3csIGNlbGxzKSA9PiB7XHJcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghY2VsbHNbcm93W2ldXSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmIChjZWxsc1tyb3dbaV1dICE9PSBjZWxsc1tyb3dbaSAtIDFdXSkgcmV0dXJuIGZhbHNlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoXHJcbiAgIGNlbGxzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxyXG4gICBtb3ZlZENlbGxJbmRleCA9IDQsXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAgLy8gY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXFTaXplIC8gMilcclxuICAgY29uc3QgeCA9IE1hdGguc3FydChjZWxscy5sZW5ndGgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGRlYnVnZ2VyXHJcbiAgICAgIHJvd3NbMF0ucHVzaChjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCAtIHNlcVNpemUgKyBpLCBtb3ZlZENlbGxJbmRleCArIGkpKVxyXG4gICAgICByb3dzWzFdLnB1c2goXHJcbiAgICAgICAgIGNlbGxzLnNsaWNlKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBzZXFTaXplIC0gMSkgKiB4LCBtb3ZlZENlbGxJbmRleCArIGkgKiB4KSxcclxuICAgICAgKVxyXG4gICAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggLSBpICogeClcclxuICAgICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpXHJcbiAgICAgIC8vIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggKyBnYXAgLSBpKVxyXG4gICAgICAvLyByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4IC0gZ2FwICsgaSlcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhyb3dzWzBdKVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJjZWxscyIsIm1vdmVkQ2VsbEluZGV4Iiwic2VxU2l6ZSIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwieCIsIk1hdGgiLCJzcXJ0IiwicHVzaCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});