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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(horizontal(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    debugger;\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        const line = cells[movedCellIndex.x].map((elem, index)=>index);\n        if (line.includes(first) && line.includes(last)) {\n            const sl = line.slice(first, last);\n            row.push(sl);\n        }\n    }\n    debugger;\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxNQUFNQyxPQUFPQztJQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixLQUFLRyxNQUFNLEVBQUVELElBQUs7UUFDbkNFLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDRSxFQUFFO1FBQ25CLElBQUlJLG1CQUFtQk4sSUFBSSxDQUFDRSxFQUFFLEVBQUVMLFFBQVE7WUFDckMsT0FBTztRQUNWO0lBQ0g7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxNQUFNUyxxQkFBcUIsQ0FBQ0MsS0FBS1Y7SUFDOUIsSUFBSyxJQUFJSyxJQUFJLEdBQUdBLElBQUlLLElBQUlKLE1BQU0sRUFBRUQsSUFBSztRQUNsQyxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsRUFBRSxPQUFPO1FBQzNCLElBQUlMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsS0FBS0wsS0FBSyxDQUFDVSxHQUFHLENBQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTztJQUNuRDtJQUNBLE9BQU87QUFDVjtBQUVBLFNBQVNEO1FBQ05KLFFBQUFBLGlFQUFRVyxNQUFNLEdBQ1ZDLElBQUksR0FDSkMsR0FBRyxDQUFDLElBQU1GLE1BQU0sR0FBR0MsSUFBSSxDQUFDLEtBQzVCWCxpQkFBQUEsaUVBQWlCLElBQ2pCQyxVQUFBQSxpRUFBVTtJQUVWLHNDQUFzQztJQUN0QyxNQUFNWSxJQUFJQyxLQUFLQyxJQUFJLENBQUNoQixNQUFNTSxNQUFNO0lBQ2hDLE1BQU1ILE9BQU87UUFDVixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO0tBQ0o7SUFDREksUUFBUUMsR0FBRyxDQUFDUyxXQUFXakI7SUFDdkIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCx3RkFBd0Y7SUFDeEYsc0JBQXNCO0lBQ3RCLHdGQUF3RjtJQUN4RixVQUFVO0lBQ1YsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3QywrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELElBQUk7SUFDSix1QkFBdUI7SUFDdkIsT0FBT0c7QUFDVjtBQUVBLFNBQVNjLFdBQVdqQixLQUFLO1FBQUVDLGlCQUFBQSxpRUFBaUI7UUFBRWEsR0FBRztRQUFHSSxHQUFHO0lBQUUsR0FBR2hCLFVBQUFBLGlFQUFVO0lBQ25FLFFBQVE7SUFFUixNQUFNUSxNQUFNLEVBQUU7SUFDZCxJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNYyxRQUFRbEIsZUFBZWEsQ0FBQyxHQUFHWixVQUFVRyxJQUFJO1FBQy9DLE1BQU1lLE9BQU9uQixlQUFlYSxDQUFDLEdBQUdUO1FBQ2hDLE1BQU1nQixPQUFPckIsS0FBSyxDQUFDQyxlQUFlYSxDQUFDLENBQUMsQ0FBQ0QsR0FBRyxDQUFDLENBQUNTLE1BQU1DLFFBQVVBO1FBQzFELElBQUlGLEtBQUtHLFFBQVEsQ0FBQ0wsVUFBVUUsS0FBS0csUUFBUSxDQUFDSixPQUFPO1lBQzlDLE1BQU1LLEtBQUtKLEtBQUtLLEtBQUssQ0FBQ1AsT0FBT0M7WUFDN0JWLElBQUlpQixJQUFJLENBQUNGO1FBQ1o7SUFDSDtJQUNBLFFBQVE7SUFDUixPQUFPZjtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9jb21wdXRpbmdXaW5uZXIuanM/MmI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0aW5nV2lubmVyKGNlbGxzLCBtb3ZlZENlbGxJbmRleCA9IDEyLCBzZXFTaXplID0gNSkge1xyXG4gICBjb25zdCByb3dzID0gY29tcHV0ZVJvd3MoKVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2cocm93c1tpXSlcclxuICAgICAgaWYgKGFyZUNlbGxzSW5Sb3dFcXVhbChyb3dzW2ldLCBjZWxscykpIHtcclxuICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBhcmVDZWxsc0luUm93RXF1YWwgPSAocm93LCBjZWxscykgPT4ge1xyXG4gICBmb3IgKGxldCBpID0gMTsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWNlbGxzW3Jvd1tpXV0pIHJldHVybiBmYWxzZVxyXG4gICAgICBpZiAoY2VsbHNbcm93W2ldXSAhPT0gY2VsbHNbcm93W2kgLSAxXV0pIHJldHVybiBmYWxzZVxyXG4gICB9XHJcbiAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVSb3dzKFxyXG4gICBjZWxscyA9IEFycmF5KDUpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSg1KS5maWxsKDApKSxcclxuICAgbW92ZWRDZWxsSW5kZXggPSAxMixcclxuICAgc2VxU2l6ZSA9IDMsXHJcbikge1xyXG4gICAvLyBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcVNpemUgLyAyKVxyXG4gICBjb25zdCB4ID0gTWF0aC5zcXJ0KGNlbGxzLmxlbmd0aClcclxuICAgY29uc3Qgcm93cyA9IFtcclxuICAgICAgW10sIC8vIC1cclxuICAgICAgW10sIC8vIHxcclxuICAgICAgW10sIC8vIC9cclxuICAgICAgW10sIC8vIFxcXHJcbiAgIF1cclxuICAgY29uc29sZS5sb2coaG9yaXpvbnRhbChjZWxscykpXHJcbiAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgIC8vICAgIGRlYnVnZ2VyXHJcbiAgIC8vICAgIC8vIHJvd3NbMF0ucHVzaChjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCAtIHNlcVNpemUgKyBpICsgMSwgbW92ZWRDZWxsSW5kZXggKyBpKSlcclxuICAgLy8gICAgLy8gcm93c1sxXS5wdXNoKFxyXG4gICAvLyAgICAvLyAgICBjZWxscy5zbGljZShtb3ZlZENlbGxJbmRleCArIChpIC0gc2VxU2l6ZSAtIDEpICogeCwgbW92ZWRDZWxsSW5kZXggKyBpICogeCksXHJcbiAgIC8vICAgIC8vIClcclxuICAgLy8gICAgLy8gcm93c1syXS5wdXNoKG1vdmVkQ2VsbEluZGV4IC0gaSAqIHgpXHJcbiAgIC8vICAgIC8vIHJvd3NbM10ucHVzaChtb3ZlZENlbGxJbmRleCArIGkgKiB4KVxyXG4gICAvLyAgICAvLyByb3dzWzJdLnB1c2gobW92ZWRDZWxsSW5kZXggKyAoaSAtIGdhcCkgKiB4ICsgZ2FwIC0gaSlcclxuICAgLy8gICAgLy8gcm93c1szXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBnYXApICogeCAtIGdhcCArIGkpXHJcbiAgIC8vIH1cclxuICAgLy8gY29uc29sZS5sb2cocm93c1sxXSlcclxuICAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuZnVuY3Rpb24gaG9yaXpvbnRhbChjZWxscywgbW92ZWRDZWxsSW5kZXggPSB7IHg6IDIsIHk6IDIgfSwgc2VxU2l6ZSA9IDQpIHtcclxuICAgZGVidWdnZXJcclxuXHJcbiAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgY29uc3QgbGluZSA9IGNlbGxzW21vdmVkQ2VsbEluZGV4LnhdLm1hcCgoZWxlbSwgaW5kZXgpID0+IGluZGV4KVxyXG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhmaXJzdCkgJiYgbGluZS5pbmNsdWRlcyhsYXN0KSkge1xyXG4gICAgICAgICBjb25zdCBzbCA9IGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QpXHJcbiAgICAgICAgIHJvdy5wdXNoKHNsKVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgZGVidWdnZXJcclxuICAgcmV0dXJuIHJvd1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb21wdXRpbmdXaW5uZXIiLCJjZWxscyIsIm1vdmVkQ2VsbEluZGV4Iiwic2VxU2l6ZSIsInJvd3MiLCJjb21wdXRlUm93cyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYXJlQ2VsbHNJblJvd0VxdWFsIiwicm93IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwieCIsIk1hdGgiLCJzcXJ0IiwiaG9yaXpvbnRhbCIsInkiLCJmaXJzdCIsImxhc3QiLCJsaW5lIiwiZWxlbSIsImluZGV4IiwiaW5jbHVkZXMiLCJzbCIsInNsaWNlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});