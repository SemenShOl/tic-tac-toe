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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(vertical(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    const row = [];\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    debugger;\n    const row = [];\n    const line = cells[0].map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    debugger;\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUdkO1FBQ2hDLElBQUllLEtBQUtLLFFBQVEsQ0FBQ0YsVUFBVUgsS0FBS0ssUUFBUSxDQUFDRCxPQUN2Q2QsSUFBSWdCLElBQUksQ0FBQ04sS0FBS08sS0FBSyxDQUFDSixPQUFPQyxPQUFPO0lBQ3hDO0lBQ0EsUUFBUTtJQUNSLE9BQU9kO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2NvbXB1dGluZ1dpbm5lci5qcz8yYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wdXRpbmdXaW5uZXIoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0gMTIsIHNlcVNpemUgPSA1KSB7XHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cygpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKVxyXG4gICAgICBpZiAoYXJlQ2VsbHNJblJvd0VxdWFsKHJvd3NbaV0sIGNlbGxzKSkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGFyZUNlbGxzSW5Sb3dFcXVhbCA9IChyb3csIGNlbGxzKSA9PiB7XHJcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghY2VsbHNbcm93W2ldXSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmIChjZWxsc1tyb3dbaV1dICE9PSBjZWxsc1tyb3dbaSAtIDFdXSkgcmV0dXJuIGZhbHNlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoXHJcbiAgIGNlbGxzID0gQXJyYXkoNSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KDUpLmZpbGwoMCkpLFxyXG4gICBtb3ZlZENlbGxJbmRleCA9IDEyLFxyXG4gICBzZXFTaXplID0gMyxcclxuKSB7XHJcbiAgIC8vIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxU2l6ZSAvIDIpXHJcbiAgIGNvbnN0IHggPSBNYXRoLnNxcnQoY2VsbHMubGVuZ3RoKVxyXG4gICBjb25zdCByb3dzID0gW1xyXG4gICAgICBbXSwgLy8gLVxyXG4gICAgICBbXSwgLy8gfFxyXG4gICAgICBbXSwgLy8gL1xyXG4gICAgICBbXSwgLy8gXFxcclxuICAgXVxyXG4gICBjb25zb2xlLmxvZyh2ZXJ0aWNhbChjZWxscykpXHJcbiAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgIC8vICAgIGRlYnVnZ2VyXHJcbiAgIC8vICAgIC8vIHJvd3NbMF0ucHVzaChjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCAtIHNlcVNpemUgKyBpICsgMSwgbW92ZWRDZWxsSW5kZXggKyBpKSlcclxuICAgLy8gICAgLy8gcm93c1sxXS5wdXNoKFxyXG4gICAvLyAgICAvLyAgICBjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCArIChpIC0gc2VxU2l6ZSAtIDEpICogeCwgbW92ZWRDZWxsSW5kZXggKyBpICogeCksXHJcbiAgIC8vICAgIC8vIClcclxuICAgLy8gICAgLy8gcm93c1syXS5wdXNoKG1vdmVkQ2VsbEluZGV4IC0gaSAqIHgpXHJcbiAgIC8vICAgIC8vIHJvd3NbM10ucHVzaChtb3ZlZENlbGxJbmRleCArIGkgKiB4KVxyXG4gICAvLyAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4ICsgZ2FwIC0gaSlcclxuICAgLy8gICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBnYXApICogeCAtIGdhcCArIGkpXHJcbiAgIC8vIH1cclxuICAgLy8gY29uc29sZS5sb2cocm93c1sxXSlcclxuICAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuZnVuY3Rpb24gaG9yaXpvbnRhbChjZWxscywgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDQpIHtcclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3QgbGluZSA9IGNlbGxzW21vdmVkQ2VsbEluZGV4LnhdLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXFTaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtb3ZlZENlbGxJbmRleC54ICsgaVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSlcclxuICAgICAgICAgcm93LnB1c2gobGluZS5zbGljZShmaXJzdCwgbGFzdCArIDEpKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gdmVydGljYWwoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSAzKSB7XHJcbiAgIGRlYnVnZ2VyXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1swXS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICBkZWJ1Z2dlclxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGluZ1dpbm5lciIsImNlbGxzIiwibW92ZWRDZWxsSW5kZXgiLCJzZXFTaXplIiwicm93cyIsImNvbXB1dGVSb3dzIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmVDZWxsc0luUm93RXF1YWwiLCJyb3ciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4IiwiTWF0aCIsInNxcnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ5IiwibGluZSIsImVsZW0iLCJpbmRleCIsImZpcnN0IiwibGFzdCIsImluY2x1ZGVzIiwicHVzaCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});