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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    debugger;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(cells);\n    for(let i = 0; i < seqSize; i++){\n        debugger;\n        rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i));\n        rows[1].push(cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x));\n    // rows[2].push(movedCellIndex - i * x)\n    // rows[3].push(movedCellIndex + i * x)\n    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    }\n    console.log(rows[1]);\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4, row = arguments.length > 3 ? arguments[3] : void 0;\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex[0] - seqSize + i - 1;\n        const last = movedCellIndex[0] + i;\n        if (first > 0 && last > 0) row.push(cells[movedCellIndex[0]]);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxRQUFRO0lBRVIsTUFBTUMsT0FBT0M7SUFDYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsS0FBS0csTUFBTSxFQUFFRCxJQUFLO1FBQ25DRSxRQUFRQyxHQUFHLENBQUNMLElBQUksQ0FBQ0UsRUFBRTtRQUNuQixJQUFJSSxtQkFBbUJOLElBQUksQ0FBQ0UsRUFBRSxFQUFFTCxRQUFRO1lBQ3JDLE9BQU87UUFDVjtJQUNIO0lBQ0EsT0FBTztBQUNWO0FBRUEsTUFBTVMscUJBQXFCLENBQUNDLEtBQUtWO0lBQzlCLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJSyxJQUFJSixNQUFNLEVBQUVELElBQUs7UUFDbEMsSUFBSSxDQUFDTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEVBQUUsT0FBTztRQUMzQixJQUFJTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDLEtBQUtMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU87SUFDbkQ7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxTQUFTRDtRQUNOSixRQUFBQSxpRUFBUVcsTUFBTSxHQUNWQyxJQUFJLEdBQ0pDLEdBQUcsQ0FBQyxJQUFNRixNQUFNLEdBQUdDLElBQUksQ0FBQyxLQUM1QlgsaUJBQUFBLGlFQUFpQixJQUNqQkMsVUFBQUEsaUVBQVU7SUFFVixzQ0FBc0M7SUFDdEMsTUFBTVksSUFBSUMsS0FBS0MsSUFBSSxDQUFDaEIsTUFBTU0sTUFBTTtJQUNoQyxNQUFNSCxPQUFPO1FBQ1YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtLQUNKO0lBQ0RJLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixJQUFLLElBQUlLLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixRQUFRO1FBQ1JGLElBQUksQ0FBQyxFQUFFLENBQUNjLElBQUksQ0FBQ2pCLE1BQU1rQixLQUFLLENBQUNqQixpQkFBaUJDLFVBQVVHLElBQUksR0FBR0osaUJBQWlCSTtRQUM1RUYsSUFBSSxDQUFDLEVBQUUsQ0FBQ2MsSUFBSSxDQUNUakIsTUFBTWtCLEtBQUssQ0FBQ2pCLGlCQUFpQixDQUFDSSxJQUFJSCxVQUFVLEtBQUtZLEdBQUdiLGlCQUFpQkksSUFBSVM7SUFFNUUsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx5REFBeUQ7SUFDekQseURBQXlEO0lBQzVEO0lBQ0FQLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDLEVBQUU7SUFDbkIsT0FBT0E7QUFDVjtBQUVBLFNBQVNnQixXQUFXbkIsS0FBSztRQUFFQyxpQkFBQUEsaUVBQWlCO1FBQUVhLEdBQUc7UUFBR00sR0FBRztJQUFFLEdBQUdsQixVQUFBQSxpRUFBVSxHQUFHUTtJQUN0RSxJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNZ0IsUUFBUXBCLGNBQWMsQ0FBQyxFQUFFLEdBQUdDLFVBQVVHLElBQUk7UUFDaEQsTUFBTWlCLE9BQU9yQixjQUFjLENBQUMsRUFBRSxHQUFHSTtRQUNqQyxJQUFJZ0IsUUFBUSxLQUFLQyxPQUFPLEdBQUdaLElBQUlPLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUMvRDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9jb21wdXRpbmdXaW5uZXIuanM/MmI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0aW5nV2lubmVyKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IDEyLCBzZXFTaXplID0gNSkge1xyXG4gICBkZWJ1Z2dlclxyXG5cclxuICAgY29uc3Qgcm93cyA9IGNvbXB1dGVSb3dzKClcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvd3NbaV0pXHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMpKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgfVxyXG4gICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuY29uc3QgYXJlQ2VsbHNJblJvd0VxdWFsID0gKHJvdywgY2VsbHMpID0+IHtcclxuICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFjZWxsc1tyb3dbaV1dKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYgKGNlbGxzW3Jvd1tpXV0gIT09IGNlbGxzW3Jvd1tpIC0gMV1dKSByZXR1cm4gZmFsc2VcclxuICAgfVxyXG4gICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUm93cyhcclxuICAgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSksXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0gMTIsXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAgLy8gY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXFTaXplIC8gMilcclxuICAgY29uc3QgeCA9IE1hdGguc3FydChjZWxscy5sZW5ndGgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGNvbnNvbGUubG9nKGNlbGxzKVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICByb3dzWzBdLnB1c2goY2VsbHMuc2xpY2UobW92ZWRDZWxsSW5kZXggLSBzZXFTaXplICsgaSArIDEsIG1vdmVkQ2VsbEluZGV4ICsgaSkpXHJcbiAgICAgIHJvd3NbMV0ucHVzaChcclxuICAgICAgICAgY2VsbHMuc2xpY2UobW92ZWRDZWxsSW5kZXggKyAoaSAtIHNlcVNpemUgLSAxKSAqIHgsIG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpLFxyXG4gICAgICApXHJcbiAgICAgIC8vIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCAtIGkgKiB4KVxyXG4gICAgICAvLyByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyBpICogeClcclxuICAgICAgLy8gcm93c1syXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBnYXApICogeCArIGdhcCAtIGkpXHJcbiAgICAgIC8vIHJvd3NbM10ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggLSBnYXAgKyBpKVxyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHJvd3NbMV0pXHJcbiAgIHJldHVybiByb3dzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvcml6b250YWwoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0LCByb3cpIHtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleFswXSAtIHNlcVNpemUgKyBpIC0gMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXhbMF0gKyBpXHJcbiAgICAgIGlmIChmaXJzdCA+IDAgJiYgbGFzdCA+IDApIHJvdy5wdXNoKGNlbGxzW21vdmVkQ2VsbEluZGV4WzBdXSlcclxuICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJjZWxscyIsIm1vdmVkQ2VsbEluZGV4Iiwic2VxU2l6ZSIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwieCIsIk1hdGgiLCJzcXJ0IiwicHVzaCIsInNsaWNlIiwiaG9yaXpvbnRhbCIsInkiLCJmaXJzdCIsImxhc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});