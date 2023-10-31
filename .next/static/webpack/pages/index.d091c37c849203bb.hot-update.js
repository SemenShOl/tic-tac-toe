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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(movedCellIndex, seqSize, line);\n    rows[1] = vertical(movedCellIndex, seqSize, line);\n    rows[2] = obliquelyLeftToRight(movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(movedCellIndex, seqSize, line);\n    debugger;\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1).map((elem)=>[\n                elem,\n                movedCellIndex.y\n            ]));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBVSxHQUFHYztJQUN6RSxJQUFJO0lBQ0osTUFBTU4sTUFBTSxFQUFFO0lBRWQsTUFBTWtCLFdBQVcsSUFBSWpCLE1BQU1ULFNBQVNVLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0ksTUFBTUMsUUFBVUE7SUFFcEUsSUFBSyxJQUFJYixJQUFJLEdBQUdBLElBQUlILFNBQVNHLElBQUs7UUFDL0IsTUFBTWtCLFFBQVE7WUFDWFQsR0FBR2IsZUFBZWEsQ0FBQyxHQUFHWixVQUFVRyxJQUFJO1lBQ3BDVSxHQUFHZCxlQUFlYyxDQUFDLEdBQUdiLFVBQVVHLElBQUk7UUFDdkM7UUFDQSxNQUFNbUIsT0FBTztZQUNWVixHQUFHYixlQUFlYSxDQUFDLEdBQUdUO1lBQ3RCVSxHQUFHZCxlQUFlYyxDQUFDLEdBQUdWO1FBQ3pCO1FBQ0EsSUFDR1csS0FBS1MsUUFBUSxDQUFDRixNQUFNVCxDQUFDLEtBQ3JCRSxLQUFLUyxRQUFRLENBQUNGLE1BQU1SLENBQUMsS0FDckJDLEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS1YsQ0FBQyxLQUNwQkUsS0FBS1MsUUFBUSxDQUFDRCxLQUFLVCxDQUFDLEdBRXBCTCxJQUFJZ0IsSUFBSSxDQUNMRSxTQUFTZixHQUFHLENBQUNnQixDQUFBQSxZQUFhO2dCQUFDTixNQUFNVCxDQUFDLEdBQUdlO2dCQUFXTixNQUFNUixDQUFDLEdBQUdjO2FBQVU7SUFFN0U7SUFDQSxPQUFPbkI7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihjZWxscywgbW92ZWRDZWxsSW5kZXggPSAxMiwgc2VxU2l6ZSA9IDUpIHtcclxuICAgY29uc3Qgcm93cyA9IGNvbXB1dGVSb3dzKClcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvd3NbaV0pXHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMpKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgfVxyXG4gICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuY29uc3QgYXJlQ2VsbHNJblJvd0VxdWFsID0gKHJvdywgY2VsbHMpID0+IHtcclxuICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFjZWxsc1tyb3dbaV1dKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYgKGNlbGxzW3Jvd1tpXV0gIT09IGNlbGxzW3Jvd1tpIC0gMV1dKSByZXR1cm4gZmFsc2VcclxuICAgfVxyXG4gICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUm93cyhcclxuICAgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSksXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAgY29uc3QgbGluZSA9IGNlbGxzW21vdmVkQ2VsbEluZGV4LnhdLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG4gICBjb25zdCByb3dzID0gW1xyXG4gICAgICBbXSwgLy8gLVxyXG4gICAgICBbXSwgLy8gfFxyXG4gICAgICBbXSwgLy8gL1xyXG4gICAgICBbXSwgLy8gXFxcclxuICAgXVxyXG4gICByb3dzWzBdID0gaG9yaXpvbnRhbChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgcm93c1sxXSA9IHZlcnRpY2FsKG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzJdID0gb2JsaXF1ZWx5TGVmdFRvUmlnaHQobW92ZWRDZWxsSW5kZXgsIHNlcVNpemUsIGxpbmUpXHJcbiAgIHJvd3NbM10gPSBvYmxpcXVlbHlSaWdodFRvTGVmdChtb3ZlZENlbGxJbmRleCwgc2VxU2l6ZSwgbGluZSlcclxuICAgZGVidWdnZXJcclxuICAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuZnVuY3Rpb24gaG9yaXpvbnRhbChtb3ZlZENlbGxJbmRleCA9IHsgeDogMiwgeTogMiB9LCBzZXFTaXplID0gNCwgbGluZSkge1xyXG4gICAvLyAtXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnggKyBpXHJcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKGZpcnN0KSAmJiBsaW5lLmluY2x1ZGVzKGxhc3QpKVxyXG4gICAgICAgICByb3cucHVzaChsaW5lLnNsaWNlKGZpcnN0LCBsYXN0ICsgMSkubWFwKGVsZW0gPT4gW2VsZW0sIG1vdmVkQ2VsbEluZGV4LnldKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnRpY2FsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIHxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIC9cclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggKyBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gb2JsaXF1ZWx5UmlnaHRUb0xlZnQobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gXFxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIHNlcVNpemUgLSBpIC0gMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54IC0gaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGluZ1dpbm5lciIsImNlbGxzIiwibW92ZWRDZWxsSW5kZXgiLCJzZXFTaXplIiwicm93cyIsImNvbXB1dGVSb3dzIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmVDZWxsc0luUm93RXF1YWwiLCJyb3ciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4IiwieSIsImxpbmUiLCJlbGVtIiwiaW5kZXgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJvYmxpcXVlbHlMZWZ0VG9SaWdodCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJzZXFBcnJheSIsImluY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});