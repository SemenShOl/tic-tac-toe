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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(obliquelyRightToLeft(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    // -\n    const row = [];\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // |\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, line = arguments.length > 3 ? arguments[3] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, size = arguments.length > 3 ? arguments[3] : void 0;\n    // \\\n    debugger;\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    debugger;\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtRQUFFYSxHQUFHO1FBQUdLLEdBQUc7SUFBRSxHQUM5QmpCLFVBQUFBLGlFQUFVLEdBQ1Y4QjtJQUVBLElBQUk7SUFDSixRQUFRO0lBQ1IsTUFBTXRCLE1BQU0sRUFBRTtJQUNkLE1BQU1VLE9BQU9wQixLQUFLLENBQUMsRUFBRSxDQUFDYSxHQUFHLENBQUMsQ0FBQ1EsTUFBTUMsUUFBVUE7SUFFM0MsTUFBTVEsV0FBVyxJQUFJbkIsTUFBTVQsU0FBU1UsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDUSxNQUFNQyxRQUFVQTtJQUVwRSxJQUFLLElBQUlqQixJQUFJLEdBQUdBLElBQUlILFNBQVNHLElBQUs7UUFDL0IsTUFBTWtCLFFBQVE7WUFDWFQsR0FBR2IsZUFBZWEsQ0FBQyxHQUFHWixVQUFVRyxJQUFJO1lBQ3BDYyxHQUFHbEIsZUFBZWtCLENBQUMsR0FBR2pCLFVBQVVHLElBQUk7UUFDdkM7UUFDQSxNQUFNbUIsT0FBTztZQUNWVixHQUFHYixlQUFlYSxDQUFDLEdBQUdUO1lBQ3RCYyxHQUFHbEIsZUFBZWtCLENBQUMsR0FBR2Q7UUFDekI7UUFDQSxJQUNHZSxLQUFLSyxRQUFRLENBQUNGLE1BQU1ULENBQUMsS0FDckJNLEtBQUtLLFFBQVEsQ0FBQ0YsTUFBTUosQ0FBQyxLQUNyQkMsS0FBS0ssUUFBUSxDQUFDRCxLQUFLVixDQUFDLEtBQ3BCTSxLQUFLSyxRQUFRLENBQUNELEtBQUtMLENBQUMsR0FFcEJULElBQUlnQixJQUFJLENBQ0xJLFNBQVNqQixHQUFHLENBQUNrQixDQUFBQSxZQUFhO2dCQUFDUixNQUFNVCxDQUFDLEdBQUdpQjtnQkFBV1IsTUFBTUosQ0FBQyxHQUFHWTthQUFVO0lBRTdFO0lBQ0EsUUFBUTtJQUNSLE9BQU9yQjtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9jb21wdXRpbmdXaW5uZXIuanM/MmI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0aW5nV2lubmVyKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IDEyLCBzZXFTaXplID0gNSkge1xyXG4gICBjb25zdCByb3dzID0gY29tcHV0ZVJvd3MoKVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2cocm93c1tpXSlcclxuICAgICAgaWYgKGFyZUNlbGxzSW5Sb3dFcXVhbChyb3dzW2ldLCBjZWxscykpIHtcclxuICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscykgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMTsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWNlbGxzW3Jvd1tpXV0pIHJldHVybiBmYWxzZVxyXG4gICAgICBpZiAoY2VsbHNbcm93W2ldXSAhPT0gY2VsbHNbcm93W2kgLSAxXV0pIHJldHVybiBmYWxzZVxyXG4gICB9XHJcbiAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVSb3dzKFxyXG4gICBjZWxscyA9IEFycmF5KDUpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSg1KS5maWxsKDApKSxcclxuICAgbW92ZWRDZWxsSW5kZXggPSAxMixcclxuICAgc2VxU2l6ZSA9IDMsXHJcbikge1xyXG4gICBjb25zdCB4ID0gTWF0aC5zcXJ0KGNlbGxzLmxlbmd0aClcclxuXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGNvbnNvbGUubG9nKG9ibGlxdWVseVJpZ2h0VG9MZWZ0KGNlbGxzKSlcclxuICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgLy8gICAgZGVidWdnZXJcclxuICAgLy8gICAgLy8gcm93c1swXS5wdXNoKGNlbGxzLnNsaWNlKG1vdmVkQ2VsbEluZGV4IC0gc2VxU2l6ZSArIGkgKyAxLCBtb3ZlZENlbGxJbmRleCArIGkpKVxyXG4gICAvLyAgICAvLyByb3dzWzFdLnB1c2goXHJcbiAgIC8vICAgIC8vICAgIGNlbGxzLnNsaWNlKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBzZXFTaXplIC0gMSkgKiB4LCBtb3ZlZENlbGxJbmRleCArIGkgKiB4KSxcclxuICAgLy8gICAgLy8gKVxyXG4gICAvLyAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggLSBpICogeClcclxuICAgLy8gICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpXHJcbiAgIC8vICAgIC8vIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggKyBnYXAgLSBpKVxyXG4gICAvLyAgICAvLyByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4IC0gZ2FwICsgaSlcclxuICAgLy8gfVxyXG4gICAvLyBjb25zb2xlLmxvZyhyb3dzWzFdKVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gNCkge1xyXG4gICAvLyAtXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnRpY2FsKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gMykge1xyXG4gICAvLyB8XHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1swXS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KFxyXG4gICBjZWxscyxcclxuICAgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSxcclxuICAgc2VxU2l6ZSA9IDMsXHJcbiAgIGxpbmUsXHJcbikge1xyXG4gICAvLyAvXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCArIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlSaWdodFRvTGVmdChcclxuICAgY2VsbHMsXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4gICBzaXplLFxyXG4pIHtcclxuICAgLy8gXFxcclxuICAgZGVidWdnZXJcclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3QgbGluZSA9IGNlbGxzWzBdLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54ICsgc2VxU2l6ZSAtIGkgLSAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggLSBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIGRlYnVnZ2VyXHJcbiAgIHJldHVybiByb3dcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcHV0aW5nV2lubmVyIiwiY2VsbHMiLCJtb3ZlZENlbGxJbmRleCIsInNlcVNpemUiLCJyb3dzIiwiY29tcHV0ZVJvd3MiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFyZUNlbGxzSW5Sb3dFcXVhbCIsInJvdyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIngiLCJNYXRoIiwic3FydCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0IiwiaG9yaXpvbnRhbCIsInkiLCJsaW5lIiwiZWxlbSIsImluZGV4IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJ2ZXJ0aWNhbCIsIm9ibGlxdWVseUxlZnRUb1JpZ2h0Iiwic2VxQXJyYXkiLCJpbmNyZW1lbnQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});