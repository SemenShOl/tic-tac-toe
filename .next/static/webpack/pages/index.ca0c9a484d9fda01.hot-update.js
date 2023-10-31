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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(obliquelyRightToLeft(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    // -\n    const row = [];\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // |\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, line = arguments.length > 3 ? arguments[3] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, size = arguments.length > 3 ? arguments[3] : void 0;\n    // \\\n    debugger;\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    debugger;\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLO1FBQ0xDLGlCQUFBQSxpRUFBaUI7UUFBRWMsR0FBRztRQUFHSyxHQUFHO0lBQUUsR0FDOUJsQixVQUFBQSxpRUFBVSxHQUNWNEI7SUFFQSxJQUFJO0lBQ0osUUFBUTtJQUNSLE1BQU1wQixNQUFNLEVBQUU7SUFDZCxNQUFNSSxPQUFPZCxLQUFLLENBQUMsRUFBRSxDQUFDYSxHQUFHLENBQUMsQ0FBQ0csTUFBTUMsUUFBVUE7SUFFM0MsTUFBTVcsV0FBVyxJQUFJakIsTUFBTVQsU0FBU1UsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDRyxNQUFNQyxRQUFVQTtJQUVwRSxJQUFLLElBQUlaLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNZ0IsUUFBUTtZQUNYTixHQUFHZCxlQUFlYyxDQUFDLEdBQUdiLFVBQVVHLElBQUk7WUFDcENlLEdBQUduQixlQUFlbUIsQ0FBQyxHQUFHbEIsVUFBVUcsSUFBSTtRQUN2QztRQUNBLE1BQU1pQixPQUFPO1lBQ1ZQLEdBQUdkLGVBQWVjLENBQUMsR0FBR1Y7WUFDdEJlLEdBQUduQixlQUFlbUIsQ0FBQyxHQUFHZjtRQUN6QjtRQUNBLElBQ0dTLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTU4sQ0FBQyxLQUNyQkQsS0FBS1MsUUFBUSxDQUFDRixNQUFNRCxDQUFDLEtBQ3JCTixLQUFLUyxRQUFRLENBQUNELEtBQUtQLENBQUMsS0FDcEJELEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS0YsQ0FBQyxHQUVwQlYsSUFBSWMsSUFBSSxDQUNMSSxTQUFTZixHQUFHLENBQUNnQixDQUFBQSxZQUFhO2dCQUFDUixNQUFNTixDQUFDLEdBQUdjO2dCQUFXUixNQUFNRCxDQUFDLEdBQUdTO2FBQVU7SUFFN0U7SUFDQSxRQUFRO0lBQ1IsT0FBT25CO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2NvbXB1dGluZ1dpbm5lci5qcz8yYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wdXRpbmdXaW5uZXIoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0gMTIsIHNlcVNpemUgPSA1KSB7XHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cygpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKVxyXG4gICAgICBpZiAoYXJlQ2VsbHNJblJvd0VxdWFsKHJvd3NbaV0sIGNlbGxzKSkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGFyZUNlbGxzSW5Sb3dFcXVhbCA9IChyb3csIGNlbGxzKSA9PiB7XHJcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghY2VsbHNbcm93W2ldXSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmIChjZWxsc1tyb3dbaV1dICE9PSBjZWxsc1tyb3dbaSAtIDFdXSkgcmV0dXJuIGZhbHNlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoXHJcbiAgIGNlbGxzID0gQXJyYXkoNSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KDUpLmZpbGwoMCkpLFxyXG4gICBtb3ZlZENlbGxJbmRleCA9IDEyLFxyXG4gICBzZXFTaXplID0gMyxcclxuKSB7XHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGNvbnNvbGUubG9nKG9ibGlxdWVseVJpZ2h0VG9MZWZ0KGNlbGxzKSlcclxuICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgLy8gICAgZGVidWdnZXJcclxuICAgLy8gICAgLy8gcm93c1swXS5wdXNoKGNlbGxzLnNsaWNlKG1vdmVkQ2VsbEluZGV4IC0gc2VxU2l6ZSArIGkgKyAxLCBtb3ZlZENlbGxJbmRleCArIGkpKVxyXG4gICAvLyAgICAvLyByb3dzWzFdLnB1c2goXHJcbiAgIC8vICAgIC8vICAgIGNlbGxzLnNsaWNlKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBzZXFTaXplIC0gMSkgKiB4LCBtb3ZlZENlbGxJbmRleCArIGkgKiB4KSxcclxuICAgLy8gICAgLy8gKVxyXG4gICAvLyAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggLSBpICogeClcclxuICAgLy8gICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpXHJcbiAgIC8vICAgIC8vIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggKyBnYXAgLSBpKVxyXG4gICAvLyAgICAvLyByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4IC0gZ2FwICsgaSlcclxuICAgLy8gfVxyXG4gICAvLyBjb25zb2xlLmxvZyhyb3dzWzFdKVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gNCkge1xyXG4gICAvLyAtXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnRpY2FsKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gMykge1xyXG4gICAvLyB8XHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1swXS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KFxyXG4gICBjZWxscyxcclxuICAgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSxcclxuICAgc2VxU2l6ZSA9IDMsXHJcbiAgIGxpbmUsXHJcbikge1xyXG4gICAvLyAvXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCArIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlSaWdodFRvTGVmdChcclxuICAgY2VsbHMsXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4gICBzaXplLFxyXG4pIHtcclxuICAgLy8gXFxcclxuICAgZGVidWdnZXJcclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3QgbGluZSA9IGNlbGxzWzBdLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54ICsgc2VxU2l6ZSAtIGkgLSAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggLSBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIGRlYnVnZ2VyXHJcbiAgIHJldHVybiByb3dcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcHV0aW5nV2lubmVyIiwiY2VsbHMiLCJtb3ZlZENlbGxJbmRleCIsInNlcVNpemUiLCJyb3dzIiwiY29tcHV0ZVJvd3MiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFyZUNlbGxzSW5Sb3dFcXVhbCIsInJvdyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImxpbmUiLCJ4IiwiZWxlbSIsImluZGV4Iiwib2JsaXF1ZWx5UmlnaHRUb0xlZnQiLCJob3Jpem9udGFsIiwieSIsImZpcnN0IiwibGFzdCIsImluY2x1ZGVzIiwicHVzaCIsInNsaWNlIiwidmVydGljYWwiLCJvYmxpcXVlbHlMZWZ0VG9SaWdodCIsInNlcUFycmF5IiwiaW5jcmVtZW50Iiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});