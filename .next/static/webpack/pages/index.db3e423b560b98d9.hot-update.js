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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    // const gap = Math.floor(seqSize / 2)\n    const x = Math.sqrt(cells.length);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    console.log(horizontal(cells));\n    // for (let i = 0; i < seqSize; i++) {\n    //    debugger\n    //    // rows[0].push(cells.slice(movedCellIndex - seqSize + i + 1, movedCellIndex + i))\n    //    // rows[1].push(\n    //    //    cells.slice(movedCellIndex + (i - seqSize - 1) * x, movedCellIndex + i * x),\n    //    // )\n    //    // rows[2].push(movedCellIndex - i * x)\n    //    // rows[3].push(movedCellIndex + i * x)\n    //    // rows[2].push(movedCellIndex + (i - gap) * x + gap - i)\n    //    // rows[3].push(movedCellIndex + (i - gap) * x - gap + i)\n    // }\n    // console.log(rows[1])\n    return rows;\n}\nfunction horizontal(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    debugger;\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (first >= 0 && last > 0) {\n            const line = cells[movedCellIndex.x].map((elem, index)=>index);\n            const sl = line.slice(first, last);\n            row.push(sl);\n        }\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxNQUFNQyxPQUFPQztJQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixLQUFLRyxNQUFNLEVBQUVELElBQUs7UUFDbkNFLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDRSxFQUFFO1FBQ25CLElBQUlJLG1CQUFtQk4sSUFBSSxDQUFDRSxFQUFFLEVBQUVMLFFBQVE7WUFDckMsT0FBTztRQUNWO0lBQ0g7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxNQUFNUyxxQkFBcUIsQ0FBQ0MsS0FBS1Y7SUFDOUIsSUFBSyxJQUFJSyxJQUFJLEdBQUdBLElBQUlLLElBQUlKLE1BQU0sRUFBRUQsSUFBSztRQUNsQyxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsRUFBRSxPQUFPO1FBQzNCLElBQUlMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsS0FBS0wsS0FBSyxDQUFDVSxHQUFHLENBQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTztJQUNuRDtJQUNBLE9BQU87QUFDVjtBQUVBLFNBQVNEO1FBQ05KLFFBQUFBLGlFQUFRVyxNQUFNLEdBQ1ZDLElBQUksR0FDSkMsR0FBRyxDQUFDLElBQU1GLE1BQU0sR0FBR0MsSUFBSSxDQUFDLEtBQzVCWCxpQkFBQUEsaUVBQWlCLElBQ2pCQyxVQUFBQSxpRUFBVTtJQUVWLHNDQUFzQztJQUN0QyxNQUFNWSxJQUFJQyxLQUFLQyxJQUFJLENBQUNoQixNQUFNTSxNQUFNO0lBQ2hDLE1BQU1ILE9BQU87UUFDVixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO0tBQ0o7SUFDREksUUFBUUMsR0FBRyxDQUFDUyxXQUFXakI7SUFDdkIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCx3RkFBd0Y7SUFDeEYsc0JBQXNCO0lBQ3RCLHdGQUF3RjtJQUN4RixVQUFVO0lBQ1YsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3QywrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELElBQUk7SUFDSix1QkFBdUI7SUFDdkIsT0FBT0c7QUFDVjtBQUVBLFNBQVNjLFdBQVdqQixLQUFLO1FBQUVDLGlCQUFBQSxpRUFBaUI7UUFBRWEsR0FBRztRQUFHSSxHQUFHO0lBQUUsR0FBR2hCLFVBQUFBLGlFQUFVO0lBQ25FLFFBQVE7SUFFUixNQUFNUSxNQUFNLEVBQUU7SUFDZCxJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNYyxRQUFRbEIsZUFBZWEsQ0FBQyxHQUFHWixVQUFVRyxJQUFJO1FBQy9DLE1BQU1lLE9BQU9uQixlQUFlYSxDQUFDLEdBQUdUO1FBQ2hDLElBQUljLFNBQVMsS0FBS0MsT0FBTyxHQUFHO1lBQ3pCLE1BQU1DLE9BQU9yQixLQUFLLENBQUNDLGVBQWVhLENBQUMsQ0FBQyxDQUFDRCxHQUFHLENBQUMsQ0FBQ1MsTUFBTUMsUUFBVUE7WUFDMUQsTUFBTUMsS0FBS0gsS0FBS0ksS0FBSyxDQUFDTixPQUFPQztZQUM3QlYsSUFBSWdCLElBQUksQ0FBQ0Y7UUFDWjtJQUNIO0lBQ0EsT0FBT2Q7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzPzJiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGluZ1dpbm5lcihjZWxscywgbW92ZWRDZWxsSW5kZXggPSAxMiwgc2VxU2l6ZSA9IDUpIHtcclxuICAgY29uc3Qgcm93cyA9IGNvbXB1dGVSb3dzKClcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvd3NbaV0pXHJcbiAgICAgIGlmIChhcmVDZWxsc0luUm93RXF1YWwocm93c1tpXSwgY2VsbHMpKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgfVxyXG4gICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuY29uc3QgYXJlQ2VsbHNJblJvd0VxdWFsID0gKHJvdywgY2VsbHMpID0+IHtcclxuICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFjZWxsc1tyb3dbaV1dKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYgKGNlbGxzW3Jvd1tpXV0gIT09IGNlbGxzW3Jvd1tpIC0gMV1dKSByZXR1cm4gZmFsc2VcclxuICAgfVxyXG4gICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUm93cyhcclxuICAgY2VsbHMgPSBBcnJheSg1KVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSksXHJcbiAgIG1vdmVkQ2VsbEluZGV4ID0gMTIsXHJcbiAgIHNlcVNpemUgPSAzLFxyXG4pIHtcclxuICAgLy8gY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXFTaXplIC8gMilcclxuICAgY29uc3QgeCA9IE1hdGguc3FydChjZWxscy5sZW5ndGgpXHJcbiAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFtdLCAvLyAtXHJcbiAgICAgIFtdLCAvLyB8XHJcbiAgICAgIFtdLCAvLyAvXHJcbiAgICAgIFtdLCAvLyBcXFxyXG4gICBdXHJcbiAgIGNvbnNvbGUubG9nKGhvcml6b250YWwoY2VsbHMpKVxyXG4gICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAvLyAgICBkZWJ1Z2dlclxyXG4gICAvLyAgICAvLyByb3dzWzBdLnB1c2goY2VsbHMuc2xpY2UobW92ZWRDZWxsSW5kZXggLSBzZXFTaXplICsgaSArIDEsIG1vdmVkQ2VsbEluZGV4ICsgaSkpXHJcbiAgIC8vICAgIC8vIHJvd3NbMV0ucHVzaChcclxuICAgLy8gICAgLy8gICAgY2VsbHMuc2xpY2UobW92ZWRDZWxsSW5kZXggKyAoaSAtIHNlcVNpemUgLSAxKSAqIHgsIG1vdmVkQ2VsbEluZGV4ICsgaSAqIHgpLFxyXG4gICAvLyAgICAvLyApXHJcbiAgIC8vICAgIC8vIHJvd3NbMl0ucHVzaChtb3ZlZENlbGxJbmRleCAtIGkgKiB4KVxyXG4gICAvLyAgICAvLyByb3dzWzNdLnB1c2gobW92ZWRDZWxsSW5kZXggKyBpICogeClcclxuICAgLy8gICAgLy8gcm93c1syXS5wdXNoKG1vdmVkQ2VsbEluZGV4ICsgKGkgLSBnYXApICogeCArIGdhcCAtIGkpXHJcbiAgIC8vICAgIC8vIHJvd3NbM10ucHVzaChtb3ZlZENlbGxJbmRleCArIChpIC0gZ2FwKSAqIHggLSBnYXAgKyBpKVxyXG4gICAvLyB9XHJcbiAgIC8vIGNvbnNvbGUubG9nKHJvd3NbMV0pXHJcbiAgIHJldHVybiByb3dzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvcml6b250YWwoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0KSB7XHJcbiAgIGRlYnVnZ2VyXHJcblxyXG4gICBjb25zdCByb3cgPSBbXVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IG1vdmVkQ2VsbEluZGV4LnggLSBzZXFTaXplICsgaSArIDFcclxuICAgICAgY29uc3QgbGFzdCA9IG1vdmVkQ2VsbEluZGV4LnggKyBpXHJcbiAgICAgIGlmIChmaXJzdCA+PSAwICYmIGxhc3QgPiAwKSB7XHJcbiAgICAgICAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuICAgICAgICAgY29uc3Qgc2wgPSBsaW5lLnNsaWNlKGZpcnN0LCBsYXN0KVxyXG4gICAgICAgICByb3cucHVzaChzbClcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcHV0aW5nV2lubmVyIiwiY2VsbHMiLCJtb3ZlZENlbGxJbmRleCIsInNlcVNpemUiLCJyb3dzIiwiY29tcHV0ZVJvd3MiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFyZUNlbGxzSW5Sb3dFcXVhbCIsInJvdyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIngiLCJNYXRoIiwic3FydCIsImhvcml6b250YWwiLCJ5IiwiZmlyc3QiLCJsYXN0IiwibGluZSIsImVsZW0iLCJpbmRleCIsInNsIiwic2xpY2UiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});