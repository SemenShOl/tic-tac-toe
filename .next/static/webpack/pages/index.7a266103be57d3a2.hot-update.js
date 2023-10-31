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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(movedCellIndex, seqSize, line);\n    rows[1] = vertical(movedCellIndex, seqSize, line);\n    debugger;\n    rows[2] = obliquelyLeftToRight(movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(movedCellIndex, seqSize, line);\n    debugger;\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNa0IsV0FBVyxJQUFJakIsTUFBTVQsU0FBU1UsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDSSxNQUFNQyxRQUFVQTtJQUVwRSxJQUFLLElBQUliLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNa0IsUUFBUTtZQUNYVCxHQUFHYixlQUFlYSxDQUFDLEdBQUdaLFVBQVVHLElBQUk7WUFDcENVLEdBQUdkLGVBQWVjLENBQUMsR0FBR2IsVUFBVUcsSUFBSTtRQUN2QztRQUNBLE1BQU1tQixPQUFPO1lBQ1ZWLEdBQUdiLGVBQWVhLENBQUMsR0FBR1Q7WUFDdEJVLEdBQUdkLGVBQWVjLENBQUMsR0FBR1Y7UUFDekI7UUFDQSxJQUNHVyxLQUFLUyxRQUFRLENBQUNGLE1BQU1ULENBQUMsS0FDckJFLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTVIsQ0FBQyxLQUNyQkMsS0FBS1MsUUFBUSxDQUFDRCxLQUFLVixDQUFDLEtBQ3BCRSxLQUFLUyxRQUFRLENBQUNELEtBQUtULENBQUMsR0FFcEJMLElBQUlnQixJQUFJLENBQ0xFLFNBQVNmLEdBQUcsQ0FBQ2dCLENBQUFBLFlBQWE7Z0JBQUNOLE1BQU1ULENBQUMsR0FBR2U7Z0JBQVdOLE1BQU1SLENBQUMsR0FBR2M7YUFBVTtJQUU3RTtJQUNBLE9BQU9uQjtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9jb21wdXRpbmdXaW5uZXIuanM/MmI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0aW5nV2lubmVyKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IDEyLCBzZXFTaXplID0gNSkge1xyXG4gICBjb25zdCByb3dzID0gY29tcHV0ZVJvd3MoKVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2cocm93c1tpXSlcclxuICAgICAgaWYgKGFyZUNlbGxzSW5Sb3dFcXVhbChyb3dzW2ldLCBjZWxscykpIHtcclxuICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscykgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMTsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWNlbGxzW3Jvd1tpXV0pIHJldHVybiBmYWxzZVxyXG4gICAgICBpZiAoY2VsbHNbcm93W2ldXSAhPT0gY2VsbHNbcm93W2kgLSAxXV0pIHJldHVybiBmYWxzZVxyXG4gICB9XHJcbiAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVSb3dzKFxyXG4gICBjZWxscyA9IEFycmF5KDUpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSg1KS5maWxsKDApKSxcclxuICAgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSxcclxuICAgc2VxU2l6ZSA9IDMsXHJcbikge1xyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbbW92ZWRDZWxsSW5kZXgueF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIHJvd3NbMF0gPSBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzFdID0gdmVydGljYWwobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIGRlYnVnZ2VyXHJcbiAgIHJvd3NbMl0gPSBvYmxpcXVlbHlMZWZ0VG9SaWdodChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgcm93c1szXSA9IG9ibGlxdWVseVJpZ2h0VG9MZWZ0KG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICBkZWJ1Z2dlclxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0LCBsaW5lKSB7XHJcbiAgIC8vIC1cclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnRpY2FsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIHxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIC9cclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggKyBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gb2JsaXF1ZWx5UmlnaHRUb0xlZnQobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gXFxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIHNlcVNpemUgLSBpIC0gMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54IC0gaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGluZ1dpbm5lciIsImNlbGxzIiwibW92ZWRDZWxsSW5kZXgiLCJzZXFTaXplIiwicm93cyIsImNvbXB1dGVSb3dzIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmVDZWxsc0luUm93RXF1YWwiLCJyb3ciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4IiwieSIsImxpbmUiLCJlbGVtIiwiaW5kZXgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJvYmxpcXVlbHlMZWZ0VG9SaWdodCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJzZXFBcnJheSIsImluY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});