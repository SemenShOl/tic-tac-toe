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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;\n    const cells = Array(5).fill().map(()=>Array(5).fill(0));\n    console.log(cells);\n    cells[1][1] = \"x\";\n    cells[2][2] = \"x\";\n    cells[3][3] = \"x\";\n    const rows = computeRows(cells, movedCellIndex, seqSize);\n    for(let i = 0; i < 4; i++){\n        debugger;\n        const isEqual = areCellsInRowEqual(rows[i], cells, seqSize);\n        if (isEqual) return rows[i];\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells, seqSize)=>{\n    for(let i = 0; i < row.length; i++){\n        let isLineBreak = false;\n        for(let j = 1; j < seqSize; j++){\n            // console.log(row[i][j])\n            // console.log(cells[row[i][j][0]][row[i][j][1]])\n            if (cells[row[i][j][0]][row[i][j][1]] !== cells[row[i][j - 1][0]][row[i][j - 1][1]] && cells[row[i][j][0]][row[i][j][1]]) {\n                isLineBreak = true;\n                break;\n            }\n        }\n        2;\n        if (!isLineBreak) return true;\n    }\n    return true;\n};\nfunction computeRows(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    console.log(cells[movedCellIndex.x]);\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(movedCellIndex, seqSize, line);\n    rows[1] = vertical(movedCellIndex, seqSize, line);\n    rows[2] = obliquelyLeftToRight(movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(movedCellIndex, seqSize, line);\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                elem,\n                movedCellIndex.y\n            ]));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                movedCellIndex.x,\n                elem\n            ]));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWUsT0FBTztZQUNWMUIsR0FBR0QsZUFBZUMsQ0FBQyxHQUFHVztZQUN0QlYsR0FBR0YsZUFBZUUsQ0FBQyxHQUFHVTtRQUN6QjtRQUNBLElBQ0dPLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTXpCLENBQUMsS0FDckJrQixLQUFLUyxRQUFRLENBQUNGLE1BQU14QixDQUFDLEtBQ3JCaUIsS0FBS1MsUUFBUSxDQUFDRCxLQUFLMUIsQ0FBQyxLQUNwQmtCLEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS3pCLENBQUMsR0FFcEJhLElBQUljLElBQUksQ0FDTEUsU0FBU3hCLEdBQUcsQ0FBQ3lCLENBQUFBLFlBQWE7Z0JBQUNOLE1BQU16QixDQUFDLEdBQUcrQjtnQkFBV04sTUFBTXhCLENBQUMsR0FBRzhCO2FBQVU7SUFFN0U7SUFDQSxPQUFPakI7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gMykge1xyXG4gICBjb25zdCBjZWxscyA9IEFycmF5KDUpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSg1KS5maWxsKDApKVxyXG4gICBjb25zb2xlLmxvZyhjZWxscylcclxuICAgY2VsbHNbMV1bMV0gPSAneCdcclxuICAgY2VsbHNbMl1bMl0gPSAneCdcclxuICAgY2VsbHNbM11bM10gPSAneCdcclxuICAgY29uc3Qgcm93cyA9IGNvbXB1dGVSb3dzKGNlbGxzLCBtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSlcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgZGVidWdnZXJcclxuXHJcbiAgICAgIGNvbnN0IGlzRXF1YWwgPSBhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMsIHNlcVNpemUpXHJcbiAgICAgIGlmIChpc0VxdWFsKSByZXR1cm4gcm93c1tpXVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscywgc2VxU2l6ZSkgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgaXNMaW5lQnJlYWsgPSBmYWxzZVxyXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHNlcVNpemU7IGorKykge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dbaV1bal0pXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxzW3Jvd1tpXVtqXVswXV1bcm93W2ldW2pdWzFdXSlcclxuICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjZWxsc1tyb3dbaV1bal1bMF1dW3Jvd1tpXVtqXVsxXV0gIT09XHJcbiAgICAgICAgICAgICAgIGNlbGxzW3Jvd1tpXVtqIC0gMV1bMF1dW3Jvd1tpXVtqIC0gMV1bMV1dICYmXHJcbiAgICAgICAgICAgIGNlbGxzW3Jvd1tpXVtqXVswXV1bcm93W2ldW2pdWzFdXVxyXG4gICAgICAgICApIHtcclxuICAgICAgICAgICAgaXNMaW5lQnJlYWsgPSB0cnVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAyXHJcbiAgICAgIGlmICghaXNMaW5lQnJlYWspIHJldHVybiB0cnVlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzKSB7XHJcbiAgIGNvbnNvbGUubG9nKGNlbGxzW21vdmVkQ2VsbEluZGV4LnhdKVxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbbW92ZWRDZWxsSW5kZXgueF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIHJvd3NbMF0gPSBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzFdID0gdmVydGljYWwobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbMl0gPSBvYmxpcXVlbHlMZWZ0VG9SaWdodChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgcm93c1szXSA9IG9ibGlxdWVseVJpZ2h0VG9MZWZ0KG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0LCBsaW5lKSB7XHJcbiAgIC8vIC1cclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKS5tYXAoZWxlbSA9PiBbZWxlbSwgbW92ZWRDZWxsSW5kZXgueV0pKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gdmVydGljYWwobW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gfFxyXG4gICBjb25zdCByb3cgPSBbXVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtb3ZlZENlbGxJbmRleC55ICsgaVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSlcclxuICAgICAgICAgcm93LnB1c2gobGluZS5zbGljZShmaXJzdCwgbGFzdCArIDEpLm1hcChlbGVtID0+IFttb3ZlZENlbGxJbmRleC54LCBlbGVtXSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlMZWZ0VG9SaWdodChtb3ZlZENlbGxJbmRleCA9IHsgeDogMSwgeTogMiB9LCBzZXFTaXplID0gMywgbGluZSkge1xyXG4gICAvLyAvXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54ICsgaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54ICsgaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseVJpZ2h0VG9MZWZ0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIFxcXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBzZXFTaXplIC0gaSAtIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCAtIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCAtIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJtb3ZlZENlbGxJbmRleCIsIngiLCJ5Iiwic2VxU2l6ZSIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJpc0VxdWFsIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwibGVuZ3RoIiwiaXNMaW5lQnJlYWsiLCJqIiwibGluZSIsImVsZW0iLCJpbmRleCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsIm9ibGlxdWVseUxlZnRUb1JpZ2h0Iiwib2JsaXF1ZWx5UmlnaHRUb0xlZnQiLCJmaXJzdCIsImxhc3QiLCJpbmNsdWRlcyIsInB1c2giLCJzbGljZSIsInNlcUFycmF5IiwiaW5jcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});