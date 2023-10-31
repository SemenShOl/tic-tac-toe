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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(obliquely(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    // -\n    const row = [];\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // |\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, size = arguments.length > 3 ? arguments[3] : void 0;\n    // /\n    debugger;\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    debugger;\n    return row;\n}\nfunction obliquelyRightToLeft(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, size = arguments.length > 3 ? arguments[3] : void 0;\n    // /\n    debugger;\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    debugger;\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihjZWxscywgbW92ZWRDZWxsSW5kZXggPSAxMiwgc2VxU2l6ZSA9IDUpIHtcclxuICAgY29uc3Qgcm93cyA9IGNvbXB1dGVSb3dzKClcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvd3NbaV0pXHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMpKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgfVxyXG4gICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuY29uc3QgYXJlQ2VsbHNJblJvd0VxdWFsID0gKHJvdywgY2VsbHMpID0+IHtcclxuICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFjZWxsc1tyb3dbaV1dKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYgKGNlbGxzW3Jvd1tpXV0gIT09IGNlbGxzW3Jvd1tpIC0gMV1dKSByZXR1cm4gZmFsc2VcclxuICAgfVxyXG4gICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUm93cyhcclxuICAgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSksXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0gMTIsXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAgLy8gY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXFTaXplIC8gMilcclxuICAgY29uc3QgeCA9IE1hdGguc3FydChjZWxscy5sZW5ndGgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGNvbnNvbGUubG9nKG9ibGlxdWVseShjZWxscykpXHJcbiAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgIC8vICAgIGRlYnVnZ2VyXHJcbiAgIC8vICAgIC8vIHJvd3NbMF0ucHVzaChjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCAtIHNlcVNpemUgKyBpICsgMSwgbW92ZWRDZWxsSW5kZXggKyBpKSlcclxuICAgLy8gICAgLy8gcm93c1sxXS5wdXNoKFxyXG4gICAvLyAgICAvLyAgICBjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCArIChpIC0gc2VxU2l6ZSAtIDEpICogeCwgbW92ZWRDZWxsSW5kZXggKyBpICogeCksXHJcbiAgIC8vICAgIC8vIClcclxuICAgLy8gICAgLy8gcm93c1syXS5wdXNoKG1vdmVkQ2VsbEluZGV4IC0gaSAqIHgpXHJcbiAgIC8vICAgIC8vIHJvd3NbM10ucHVzaChtb3ZlZENlbGxJbmRleCArIGkgKiB4KVxyXG4gICAvLyAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4ICsgZ2FwIC0gaSlcclxuICAgLy8gICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBnYXApICogeCAtIGdhcCArIGkpXHJcbiAgIC8vIH1cclxuICAgLy8gY29uc29sZS5sb2cocm93c1sxXSlcclxuICAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuZnVuY3Rpb24gaG9yaXpvbnRhbChjZWxscywgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDQpIHtcclxuICAgLy8gLVxyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbbW92ZWRDZWxsSW5kZXgueF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnggKyBpXHJcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKGZpcnN0KSAmJiBsaW5lLmluY2x1ZGVzKGxhc3QpKVxyXG4gICAgICAgICByb3cucHVzaChsaW5lLnNsaWNlKGZpcnN0LCBsYXN0ICsgMSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJ0aWNhbChjZWxscywgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDMpIHtcclxuICAgLy8gfFxyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbMF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnkgKyBpXHJcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKGZpcnN0KSAmJiBsaW5lLmluY2x1ZGVzKGxhc3QpKVxyXG4gICAgICAgICByb3cucHVzaChsaW5lLnNsaWNlKGZpcnN0LCBsYXN0ICsgMSkpXHJcbiAgIH1cclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlMZWZ0VG9SaWdodChcclxuICAgY2VsbHMsXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4gICBzaXplLFxyXG4pIHtcclxuICAgLy8gL1xyXG4gICBkZWJ1Z2dlclxyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbMF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBzZXFTaXplIC0gaSAtIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCAtIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCArIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgZGVidWdnZXJcclxuICAgcmV0dXJuIHJvd1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmxpcXVlbHlSaWdodFRvTGVmdChcclxuICAgY2VsbHMsXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4gICBzaXplLFxyXG4pIHtcclxuICAgLy8gL1xyXG4gICBkZWJ1Z2dlclxyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBjb25zdCBsaW5lID0gY2VsbHNbMF0ubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBjb25zdCBzZXFBcnJheSA9IG5ldyBBcnJheShzZXFTaXplKS5maWxsKG51bGwpLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgLSBzZXFTaXplICsgaSArIDEsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIGksXHJcbiAgICAgICAgIHk6IG1vdmVkQ2VsbEluZGV4LnkgKyBpLFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LnkpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC54KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueSlcclxuICAgICAgKVxyXG4gICAgICAgICByb3cucHVzaChcclxuICAgICAgICAgICAgc2VxQXJyYXkubWFwKGluY3JlbWVudCA9PiBbZmlyc3QueCArIGluY3JlbWVudCwgZmlyc3QueSArIGluY3JlbWVudF0pLFxyXG4gICAgICAgICApXHJcbiAgIH1cclxuICAgZGVidWdnZXJcclxuICAgcmV0dXJuIHJvd1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJjZWxscyIsIm1vdmVkQ2VsbEluZGV4Iiwic2VxU2l6ZSIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwieCIsIk1hdGgiLCJzcXJ0Iiwib2JsaXF1ZWx5IiwiaG9yaXpvbnRhbCIsInkiLCJsaW5lIiwiZWxlbSIsImluZGV4IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJ2ZXJ0aWNhbCIsIm9ibGlxdWVseUxlZnRUb1JpZ2h0Iiwic2l6ZSIsInNlcUFycmF5IiwiaW5jcmVtZW50Iiwib2JsaXF1ZWx5UmlnaHRUb0xlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});