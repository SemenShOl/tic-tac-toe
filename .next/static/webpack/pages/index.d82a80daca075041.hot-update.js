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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    debugger;\n    const rows = computeRows(cells, movedCellIndex, seqSize);\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows(cells, movedCellIndex, seqSize) {\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [\n            [],\n            [],\n            [],\n            [],\n            []\n        ],\n        [\n            [],\n            [],\n            [],\n            [],\n            []\n        ],\n        [\n            [],\n            [],\n            [],\n            [],\n            []\n        ],\n        [\n            [],\n            [],\n            [],\n            [],\n            []\n        ]\n    ];\n    for(let i = 0; i < seqSize; i++){\n        rows[0][0] = cells.slice(movedCellIndex - seqSize + i, movedCellIndex + i);\n        rows[1].push(movedCellIndex + i);\n        rows[2].push(movedCellIndex - i * x);\n        rows[3].push(movedCellIndex + i * x);\n        rows[2].push(movedCellIndex + (i - gap) * x + gap - i);\n        rows[3].push(movedCellIndex + (i - gap) * x - gap + i);\n    }\n    return rows;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxRQUFRO0lBRVIsTUFBTUMsT0FBT0MsWUFBWUosT0FBT0MsZ0JBQWdCQztJQUNoRCxJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUYsS0FBS0csTUFBTSxFQUFFRCxJQUFLO1FBQ25DRSxRQUFRQyxHQUFHLENBQUNMLElBQUksQ0FBQ0UsRUFBRTtRQUNuQixJQUFJSSxtQkFBbUJOLElBQUksQ0FBQ0UsRUFBRSxFQUFFTCxRQUFRO1lBQ3JDLE9BQU87UUFDVjtJQUNIO0lBQ0EsT0FBTztBQUNWO0FBRUEsTUFBTVMscUJBQXFCLENBQUNDLEtBQUtWO0lBQzlCLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJSyxJQUFJSixNQUFNLEVBQUVELElBQUs7UUFDbEMsSUFBSSxDQUFDTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEVBQUUsT0FBTztRQUMzQixJQUFJTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEtBQUtMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU87SUFDbkQ7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxTQUFTRCxZQUFZSixLQUFLLEVBQUVDLGNBQWMsRUFBRUMsT0FBTztJQUNoRCxzQ0FBc0M7SUFDdEMsTUFBTVMsSUFBSUMsS0FBS0MsSUFBSSxDQUFDYixNQUFNTSxNQUFNO0lBQ2hDLE1BQU1ILE9BQU87UUFDVjtZQUFDLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1NBQUM7UUFDcEI7WUFBQyxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtTQUFDO1FBQ3BCO1lBQUMsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7U0FBQztRQUNwQjtZQUFDLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1NBQUM7S0FDdEI7SUFDRCxJQUFLLElBQUlFLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUdILE1BQU1jLEtBQUssQ0FBQ2IsaUJBQWlCQyxVQUFVRyxHQUFHSixpQkFBaUJJO1FBQ3hFRixJQUFJLENBQUMsRUFBRSxDQUFDWSxJQUFJLENBQUNkLGlCQUFpQkk7UUFDOUJGLElBQUksQ0FBQyxFQUFFLENBQUNZLElBQUksQ0FBQ2QsaUJBQWlCSSxJQUFJTTtRQUNsQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQ1ksSUFBSSxDQUFDZCxpQkFBaUJJLElBQUlNO1FBQ2xDUixJQUFJLENBQUMsRUFBRSxDQUFDWSxJQUFJLENBQUNkLGlCQUFpQixDQUFDSSxJQUFJVyxHQUFFLElBQUtMLElBQUlLLE1BQU1YO1FBQ3BERixJQUFJLENBQUMsRUFBRSxDQUFDWSxJQUFJLENBQUNkLGlCQUFpQixDQUFDSSxJQUFJVyxHQUFFLElBQUtMLElBQUlLLE1BQU1YO0lBQ3ZEO0lBQ0EsT0FBT0Y7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihjZWxscywgbW92ZWRDZWxsSW5kZXggPSAxMiwgc2VxU2l6ZSA9IDUpIHtcclxuICAgZGVidWdnZXJcclxuXHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cyhjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKVxyXG4gICAgICBpZiAoYXJlQ2VsbHNJblJvd0VxdWFsKHJvd3NbaV0sIGNlbGxzKSkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGFyZUNlbGxzSW5Sb3dFcXVhbCA9IChyb3csIGNlbGxzKSA9PiB7XHJcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghY2VsbHNbcm93W2ldXSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmIChjZWxsc1tyb3dbaV1dICE9PSBjZWxsc1tyb3dbaSAtIDFdXSkgcmV0dXJuIGZhbHNlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoY2VsbHMsIG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplKSB7XHJcbiAgIC8vIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxU2l6ZSAvIDIpXHJcbiAgIGNvbnN0IHggPSBNYXRoLnNxcnQoY2VsbHMubGVuZ3RoKVxyXG4gICBjb25zdCByb3dzID0gW1xyXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdXSwgLy8gLVxyXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdXSwgLy8gfFxyXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdXSwgLy8gL1xyXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdXSwgLy8gXFxcclxuICAgXVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICByb3dzWzBdWzBdID0gY2VsbHMuc2xpY2UobW92ZWRDZWxsSW5kZXggLSBzZXFTaXplICsgaSwgbW92ZWRDZWxsSW5kZXggKyBpKVxyXG4gICAgICByb3dzWzFdLnB1c2gobW92ZWRDZWxsSW5kZXggKyBpKVxyXG4gICAgICByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggLSBpICogeClcclxuICAgICAgcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpXHJcbiAgICAgIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggKyBnYXAgLSBpKVxyXG4gICAgICByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4IC0gZ2FwICsgaSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJjZWxscyIsIm1vdmVkQ2VsbEluZGV4Iiwic2VxU2l6ZSIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwieCIsIk1hdGgiLCJzcXJ0Iiwic2xpY2UiLCJwdXNoIiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});