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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = vertical(cells, movedCellIndex, seqSize, line);\n    rows[1] = vertical(cells, movedCellIndex, seqSize, line);\n    rows[2] = vertical(cells, movedCellIndex, seqSize, line);\n    rows[3] = vertical(cells, movedCellIndex, seqSize, line);\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4, line = arguments.length > 3 ? arguments[3] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, line = arguments.length > 3 ? arguments[3] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNaUIsV0FBVyxJQUFJaEIsTUFBTVQsU0FBU1UsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDRyxNQUFNQyxRQUFVQTtJQUVwRSxJQUFLLElBQUlaLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNZ0IsUUFBUTtZQUNYTixHQUFHZCxlQUFlYyxDQUFDLEdBQUdiLFVBQVVHLElBQUk7WUFDcENlLEdBQUduQixlQUFlbUIsQ0FBQyxHQUFHbEIsVUFBVUcsSUFBSTtRQUN2QztRQUNBLE1BQU1pQixPQUFPO1lBQ1ZQLEdBQUdkLGVBQWVjLENBQUMsR0FBR1Y7WUFDdEJlLEdBQUduQixlQUFlbUIsQ0FBQyxHQUFHZjtRQUN6QjtRQUNBLElBQ0dTLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTU4sQ0FBQyxLQUNyQkQsS0FBS1MsUUFBUSxDQUFDRixNQUFNRCxDQUFDLEtBQ3JCTixLQUFLUyxRQUFRLENBQUNELEtBQUtQLENBQUMsS0FDcEJELEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS0YsQ0FBQyxHQUVwQlYsSUFBSWMsSUFBSSxDQUNMRyxTQUFTZCxHQUFHLENBQUNlLENBQUFBLFlBQWE7Z0JBQUNQLE1BQU1OLENBQUMsR0FBR2E7Z0JBQVdQLE1BQU1ELENBQUMsR0FBR1E7YUFBVTtJQUU3RTtJQUNBLE9BQU9sQjtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9jb21wdXRpbmdXaW5uZXIuanM/MmI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0aW5nV2lubmVyKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IDEyLCBzZXFTaXplID0gNSkge1xyXG4gICBjb25zdCByb3dzID0gY29tcHV0ZVJvd3MoKVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2cocm93c1tpXSlcclxuICAgICAgaWYgKGFyZUNlbGxzSW5Sb3dFcXVhbChyb3dzW2ldLCBjZWxscykpIHtcclxuICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscykgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMTsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWNlbGxzW3Jvd1tpXV0pIHJldHVybiBmYWxzZVxyXG4gICAgICBpZiAoY2VsbHNbcm93W2ldXSAhPT0gY2VsbHNbcm93W2kgLSAxXV0pIHJldHVybiBmYWxzZVxyXG4gICB9XHJcbiAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVSb3dzKFxyXG4gICBjZWxscyA9IEFycmF5KDUpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSg1KS5maWxsKDApKSxcclxuICAgbW92ZWRDZWxsSW5kZXggPSAxMixcclxuICAgc2VxU2l6ZSA9IDMsXHJcbikge1xyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbbW92ZWRDZWxsSW5kZXgueF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIHJvd3NbMF0gPSB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbMV0gPSB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbMl0gPSB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbM10gPSB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcblxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gNCwgbGluZSkge1xyXG4gICAvLyAtXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnggKyBpXHJcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKGZpcnN0KSAmJiBsaW5lLmluY2x1ZGVzKGxhc3QpKVxyXG4gICAgICAgICByb3cucHVzaChsaW5lLnNsaWNlKGZpcnN0LCBsYXN0ICsgMSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gfFxyXG4gICBjb25zdCByb3cgPSBbXVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtb3ZlZENlbGxJbmRleC55ICsgaVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSlcclxuICAgICAgICAgcm93LnB1c2gobGluZS5zbGljZShmaXJzdCwgbGFzdCArIDEpKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gb2JsaXF1ZWx5TGVmdFRvUmlnaHQobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gL1xyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCArIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlSaWdodFRvTGVmdChtb3ZlZENlbGxJbmRleCA9IHsgeDogMSwgeTogMiB9LCBzZXFTaXplID0gMywgbGluZSkge1xyXG4gICAvLyBcXFxyXG4gICBjb25zdCByb3cgPSBbXVxyXG5cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54ICsgc2VxU2l6ZSAtIGkgLSAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggLSBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcHV0aW5nV2lubmVyIiwiY2VsbHMiLCJtb3ZlZENlbGxJbmRleCIsInNlcVNpemUiLCJyb3dzIiwiY29tcHV0ZVJvd3MiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFyZUNlbGxzSW5Sb3dFcXVhbCIsInJvdyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImxpbmUiLCJ4IiwiZWxlbSIsImluZGV4IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwieSIsImZpcnN0IiwibGFzdCIsImluY2x1ZGVzIiwicHVzaCIsInNsaWNlIiwib2JsaXF1ZWx5TGVmdFRvUmlnaHQiLCJzZXFBcnJheSIsImluY3JlbWVudCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});