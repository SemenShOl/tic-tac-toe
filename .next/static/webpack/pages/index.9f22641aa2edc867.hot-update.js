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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computingWinner: function() { return /* binding */ computingWinner; }\n/* harmony export */ });\nfunction computingWinner(cells) {\n    let movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const rows = computeRows();\n    for(let i = 0; i < rows.length; i++){\n        console.log(rows[i]);\n        if (areCellsInRowEqual(rows[i], cells)) {\n            return true;\n        }\n    }\n    return false;\n}\nconst areCellsInRowEqual = (row, cells)=>{\n    for(let i = 1; i < row.length; i++){\n        if (!cells[row[i]]) return false;\n        if (cells[row[i]] !== cells[row[i - 1]]) return false;\n    }\n    return true;\n};\nfunction computeRows() {\n    let cells = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Array(5).fill().map(()=>Array(5).fill(0)), movedCellIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;\n    const line = cells[movedCellIndex.x].map((elem, index)=>index);\n    const rows = [\n        [],\n        [],\n        [],\n        []\n    ];\n    rows[0] = horizontal(cells, movedCellIndex, seqSize, line);\n    rows[1] = vertical(cells, movedCellIndex, seqSize, line);\n    rows[2] = obliquelyLeftToRight(cells, movedCellIndex, seqSize, line);\n    rows[3] = obliquelyRightToLeft(cells, movedCellIndex, seqSize, line);\n    debugger;\n    return rows;\n}\nfunction horizontal() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, line = arguments.length > 2 ? arguments[2] : void 0;\n    // -\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.x - seqSize + i + 1;\n        const last = movedCellIndex.x + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction vertical() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 2,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // |\n    const row = [];\n    for(let i = 0; i < seqSize; i++){\n        const first = movedCellIndex.y - seqSize + i + 1;\n        const last = movedCellIndex.y + i;\n        if (line.includes(first) && line.includes(last)) row.push(line.slice(first, last + 1));\n    }\n    return row;\n}\nfunction obliquelyLeftToRight() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // /\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x - seqSize + i + 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x + i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x + increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\nfunction obliquelyRightToLeft() {\n    let movedCellIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {\n        x: 1,\n        y: 2\n    }, seqSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, line = arguments.length > 2 ? arguments[2] : void 0;\n    // \\\n    const row = [];\n    const seqArray = new Array(seqSize).fill(null).map((elem, index)=>index);\n    for(let i = 0; i < seqSize; i++){\n        const first = {\n            x: movedCellIndex.x + seqSize - i - 1,\n            y: movedCellIndex.y - seqSize + i + 1\n        };\n        const last = {\n            x: movedCellIndex.x - i,\n            y: movedCellIndex.y + i\n        };\n        if (line.includes(first.x) && line.includes(first.y) && line.includes(last.x) && line.includes(last.y)) row.push(seqArray.map((increment)=>[\n                first.x - increment,\n                first.y + increment\n            ]));\n    }\n    return row;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvY29tcHV0aW5nV2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxnQkFBZ0JDLEtBQUs7UUFBRUMsaUJBQUFBLGlFQUFpQixJQUFJQyxVQUFBQSxpRUFBVTtJQUNuRSxNQUFNQyxPQUFPQztJQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixLQUFLRyxNQUFNLEVBQUVELElBQUs7UUFDbkNFLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDRSxFQUFFO1FBQ25CLElBQUlJLG1CQUFtQk4sSUFBSSxDQUFDRSxFQUFFLEVBQUVMLFFBQVE7WUFDckMsT0FBTztRQUNWO0lBQ0g7SUFDQSxPQUFPO0FBQ1Y7QUFFQSxNQUFNUyxxQkFBcUIsQ0FBQ0MsS0FBS1Y7SUFDOUIsSUFBSyxJQUFJSyxJQUFJLEdBQUdBLElBQUlLLElBQUlKLE1BQU0sRUFBRUQsSUFBSztRQUNsQyxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsRUFBRSxPQUFPO1FBQzNCLElBQUlMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxFQUFFLENBQUMsS0FBS0wsS0FBSyxDQUFDVSxHQUFHLENBQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTztJQUNuRDtJQUNBLE9BQU87QUFDVjtBQUVBLFNBQVNEO1FBQ05KLFFBQUFBLGlFQUFRVyxNQUFNLEdBQ1ZDLElBQUksR0FDSkMsR0FBRyxDQUFDLElBQU1GLE1BQU0sR0FBR0MsSUFBSSxDQUFDLEtBQzVCWCxpQkFBQUEsaUVBQWlCO1FBQUVhLEdBQUc7UUFBR0MsR0FBRztJQUFFLEdBQzlCYixVQUFBQSxpRUFBVTtJQUVWLE1BQU1jLE9BQU9oQixLQUFLLENBQUNDLGVBQWVhLENBQUMsQ0FBQyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0ksTUFBTUMsUUFBVUE7SUFDMUQsTUFBTWYsT0FBTztRQUNWLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7S0FDSjtJQUNEQSxJQUFJLENBQUMsRUFBRSxHQUFHZ0IsV0FBV25CLE9BQU9DLGdCQUFnQkMsU0FBU2M7SUFDckRiLElBQUksQ0FBQyxFQUFFLEdBQUdpQixTQUFTcEIsT0FBT0MsZ0JBQWdCQyxTQUFTYztJQUNuRGIsSUFBSSxDQUFDLEVBQUUsR0FBR2tCLHFCQUFxQnJCLE9BQU9DLGdCQUFnQkMsU0FBU2M7SUFDL0RiLElBQUksQ0FBQyxFQUFFLEdBQUdtQixxQkFBcUJ0QixPQUFPQyxnQkFBZ0JDLFNBQVNjO0lBQy9ELFFBQVE7SUFDUixPQUFPYjtBQUNWO0FBRUEsU0FBU2dCO1FBQVdsQixpQkFBQUEsaUVBQWlCO1FBQUVhLEdBQUc7UUFBR0MsR0FBRztJQUFFLEdBQUdiLFVBQUFBLGlFQUFVLEdBQUdjO0lBQy9ELElBQUk7SUFDSixNQUFNTixNQUFNLEVBQUU7SUFFZCxJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSUgsU0FBU0csSUFBSztRQUMvQixNQUFNa0IsUUFBUXRCLGVBQWVhLENBQUMsR0FBR1osVUFBVUcsSUFBSTtRQUMvQyxNQUFNbUIsT0FBT3ZCLGVBQWVhLENBQUMsR0FBR1Q7UUFDaEMsSUFBSVcsS0FBS1MsUUFBUSxDQUFDRixVQUFVUCxLQUFLUyxRQUFRLENBQUNELE9BQ3ZDZCxJQUFJZ0IsSUFBSSxDQUFDVixLQUFLVyxLQUFLLENBQUNKLE9BQU9DLE9BQU87SUFDeEM7SUFDQSxPQUFPZDtBQUNWO0FBRUEsU0FBU1U7UUFBU25CLGlCQUFBQSxpRUFBaUI7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUUsR0FBR2IsVUFBQUEsaUVBQVUsR0FBR2M7SUFDN0QsSUFBSTtJQUNKLE1BQU1OLE1BQU0sRUFBRTtJQUVkLElBQUssSUFBSUwsSUFBSSxHQUFHQSxJQUFJSCxTQUFTRyxJQUFLO1FBQy9CLE1BQU1rQixRQUFRdEIsZUFBZWMsQ0FBQyxHQUFHYixVQUFVRyxJQUFJO1FBQy9DLE1BQU1tQixPQUFPdkIsZUFBZWMsQ0FBQyxHQUFHVjtRQUNoQyxJQUFJVyxLQUFLUyxRQUFRLENBQUNGLFVBQVVQLEtBQUtTLFFBQVEsQ0FBQ0QsT0FDdkNkLElBQUlnQixJQUFJLENBQUNWLEtBQUtXLEtBQUssQ0FBQ0osT0FBT0MsT0FBTztJQUN4QztJQUNBLE9BQU9kO0FBQ1Y7QUFFQSxTQUFTVztRQUFxQnBCLGlCQUFBQSxpRUFBaUI7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUUsR0FBR2IsVUFBQUEsaUVBQVUsR0FBR2M7SUFDekUsSUFBSTtJQUNKLE1BQU1OLE1BQU0sRUFBRTtJQUNkLE1BQU1rQixXQUFXLElBQUlqQixNQUFNVCxTQUFTVSxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNJLE1BQU1DLFFBQVVBO0lBRXBFLElBQUssSUFBSWIsSUFBSSxHQUFHQSxJQUFJSCxTQUFTRyxJQUFLO1FBQy9CLE1BQU1rQixRQUFRO1lBQ1hULEdBQUdiLGVBQWVhLENBQUMsR0FBR1osVUFBVUcsSUFBSTtZQUNwQ1UsR0FBR2QsZUFBZWMsQ0FBQyxHQUFHYixVQUFVRyxJQUFJO1FBQ3ZDO1FBQ0EsTUFBTW1CLE9BQU87WUFDVlYsR0FBR2IsZUFBZWEsQ0FBQyxHQUFHVDtZQUN0QlUsR0FBR2QsZUFBZWMsQ0FBQyxHQUFHVjtRQUN6QjtRQUNBLElBQ0dXLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTVQsQ0FBQyxLQUNyQkUsS0FBS1MsUUFBUSxDQUFDRixNQUFNUixDQUFDLEtBQ3JCQyxLQUFLUyxRQUFRLENBQUNELEtBQUtWLENBQUMsS0FDcEJFLEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS1QsQ0FBQyxHQUVwQkwsSUFBSWdCLElBQUksQ0FDTEUsU0FBU2YsR0FBRyxDQUFDZ0IsQ0FBQUEsWUFBYTtnQkFBQ04sTUFBTVQsQ0FBQyxHQUFHZTtnQkFBV04sTUFBTVIsQ0FBQyxHQUFHYzthQUFVO0lBRTdFO0lBQ0EsT0FBT25CO0FBQ1Y7QUFFQSxTQUFTWTtRQUFxQnJCLGlCQUFBQSxpRUFBaUI7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUUsR0FBR2IsVUFBQUEsaUVBQVUsR0FBR2M7SUFDekUsSUFBSTtJQUNKLE1BQU1OLE1BQU0sRUFBRTtJQUVkLE1BQU1rQixXQUFXLElBQUlqQixNQUFNVCxTQUFTVSxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNJLE1BQU1DLFFBQVVBO0lBRXBFLElBQUssSUFBSWIsSUFBSSxHQUFHQSxJQUFJSCxTQUFTRyxJQUFLO1FBQy9CLE1BQU1rQixRQUFRO1lBQ1hULEdBQUdiLGVBQWVhLENBQUMsR0FBR1osVUFBVUcsSUFBSTtZQUNwQ1UsR0FBR2QsZUFBZWMsQ0FBQyxHQUFHYixVQUFVRyxJQUFJO1FBQ3ZDO1FBQ0EsTUFBTW1CLE9BQU87WUFDVlYsR0FBR2IsZUFBZWEsQ0FBQyxHQUFHVDtZQUN0QlUsR0FBR2QsZUFBZWMsQ0FBQyxHQUFHVjtRQUN6QjtRQUNBLElBQ0dXLEtBQUtTLFFBQVEsQ0FBQ0YsTUFBTVQsQ0FBQyxLQUNyQkUsS0FBS1MsUUFBUSxDQUFDRixNQUFNUixDQUFDLEtBQ3JCQyxLQUFLUyxRQUFRLENBQUNELEtBQUtWLENBQUMsS0FDcEJFLEtBQUtTLFFBQVEsQ0FBQ0QsS0FBS1QsQ0FBQyxHQUVwQkwsSUFBSWdCLElBQUksQ0FDTEUsU0FBU2YsR0FBRyxDQUFDZ0IsQ0FBQUEsWUFBYTtnQkFBQ04sTUFBTVQsQ0FBQyxHQUFHZTtnQkFBV04sTUFBTVIsQ0FBQyxHQUFHYzthQUFVO0lBRTdFO0lBQ0EsT0FBT25CO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2NvbXB1dGluZ1dpbm5lci5qcz8yYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wdXRpbmdXaW5uZXIoY2VsbHMsIG1vdmVkQ2VsbEluZGV4ID0gMTIsIHNlcVNpemUgPSA1KSB7XHJcbiAgIGNvbnN0IHJvd3MgPSBjb21wdXRlUm93cygpXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKVxyXG4gICAgICBpZiAoYXJlQ2VsbHNJblJvd0VxdWFsKHJvd3NbaV0sIGNlbGxzKSkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGFyZUNlbGxzSW5Sb3dFcXVhbCA9IChyb3csIGNlbGxzKSA9PiB7XHJcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghY2VsbHNbcm93W2ldXSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmIChjZWxsc1tyb3dbaV1dICE9PSBjZWxsc1tyb3dbaSAtIDFdXSkgcmV0dXJuIGZhbHNlXHJcbiAgIH1cclxuICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJvd3MoXHJcbiAgIGNlbGxzID0gQXJyYXkoNSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KDUpLmZpbGwoMCkpLFxyXG4gICBtb3ZlZENlbGxJbmRleCA9IHsgeDogMSwgeTogMiB9LFxyXG4gICBzZXFTaXplID0gMyxcclxuKSB7XHJcbiAgIGNvbnN0IGxpbmUgPSBjZWxsc1ttb3ZlZENlbGxJbmRleC54XS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuICAgY29uc3Qgcm93cyA9IFtcclxuICAgICAgW10sIC8vIC1cclxuICAgICAgW10sIC8vIHxcclxuICAgICAgW10sIC8vIC9cclxuICAgICAgW10sIC8vIFxcXHJcbiAgIF1cclxuICAgcm93c1swXSA9IGhvcml6b250YWwoY2VsbHMsIG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzFdID0gdmVydGljYWwoY2VsbHMsIG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzJdID0gb2JsaXF1ZWx5TGVmdFRvUmlnaHQoY2VsbHMsIG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICByb3dzWzNdID0gb2JsaXF1ZWx5UmlnaHRUb0xlZnQoY2VsbHMsIG1vdmVkQ2VsbEluZGV4LCBzZXFTaXplLCBsaW5lKVxyXG4gICBkZWJ1Z2dlclxyXG4gICByZXR1cm4gcm93c1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3Jpem9udGFsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSA0LCBsaW5lKSB7XHJcbiAgIC8vIC1cclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueCAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueCArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnRpY2FsKG1vdmVkQ2VsbEluZGV4ID0geyB4OiAyLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIHxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMVxyXG4gICAgICBjb25zdCBsYXN0ID0gbW92ZWRDZWxsSW5kZXgueSArIGlcclxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoZmlyc3QpICYmIGxpbmUuaW5jbHVkZXMobGFzdCkpXHJcbiAgICAgICAgIHJvdy5wdXNoKGxpbmUuc2xpY2UoZmlyc3QsIGxhc3QgKyAxKSlcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ibGlxdWVseUxlZnRUb1JpZ2h0KG1vdmVkQ2VsbEluZGV4ID0geyB4OiAxLCB5OiAyIH0sIHNlcVNpemUgPSAzLCBsaW5lKSB7XHJcbiAgIC8vIC9cclxuICAgY29uc3Qgcm93ID0gW11cclxuICAgY29uc3Qgc2VxQXJyYXkgPSBuZXcgQXJyYXkoc2VxU2l6ZSkuZmlsbChudWxsKS5tYXAoKGVsZW0sIGluZGV4KSA9PiBpbmRleClcclxuXHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55IC0gc2VxU2l6ZSArIGkgKyAxLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3QgPSB7XHJcbiAgICAgICAgIHg6IG1vdmVkQ2VsbEluZGV4LnggKyBpLFxyXG4gICAgICAgICB5OiBtb3ZlZENlbGxJbmRleC55ICsgaSxcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhmaXJzdC55KSAmJlxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGxhc3QueCkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LnkpXHJcbiAgICAgIClcclxuICAgICAgICAgcm93LnB1c2goXHJcbiAgICAgICAgICAgIHNlcUFycmF5Lm1hcChpbmNyZW1lbnQgPT4gW2ZpcnN0LnggKyBpbmNyZW1lbnQsIGZpcnN0LnkgKyBpbmNyZW1lbnRdKSxcclxuICAgICAgICAgKVxyXG4gICB9XHJcbiAgIHJldHVybiByb3dcclxufVxyXG5cclxuZnVuY3Rpb24gb2JsaXF1ZWx5UmlnaHRUb0xlZnQobW92ZWRDZWxsSW5kZXggPSB7IHg6IDEsIHk6IDIgfSwgc2VxU2l6ZSA9IDMsIGxpbmUpIHtcclxuICAgLy8gXFxcclxuICAgY29uc3Qgcm93ID0gW11cclxuXHJcbiAgIGNvbnN0IHNlcUFycmF5ID0gbmV3IEFycmF5KHNlcVNpemUpLmZpbGwobnVsbCkubWFwKChlbGVtLCBpbmRleCkgPT4gaW5kZXgpXHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcVNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHtcclxuICAgICAgICAgeDogbW92ZWRDZWxsSW5kZXgueCArIHNlcVNpemUgLSBpIC0gMSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSAtIHNlcVNpemUgKyBpICsgMSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0ID0ge1xyXG4gICAgICAgICB4OiBtb3ZlZENlbGxJbmRleC54IC0gaSxcclxuICAgICAgICAgeTogbW92ZWRDZWxsSW5kZXgueSArIGksXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICBsaW5lLmluY2x1ZGVzKGZpcnN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMoZmlyc3QueSkgJiZcclxuICAgICAgICAgbGluZS5pbmNsdWRlcyhsYXN0LngpICYmXHJcbiAgICAgICAgIGxpbmUuaW5jbHVkZXMobGFzdC55KVxyXG4gICAgICApXHJcbiAgICAgICAgIHJvdy5wdXNoKFxyXG4gICAgICAgICAgICBzZXFBcnJheS5tYXAoaW5jcmVtZW50ID0+IFtmaXJzdC54IC0gaW5jcmVtZW50LCBmaXJzdC55ICsgaW5jcmVtZW50XSksXHJcbiAgICAgICAgIClcclxuICAgfVxyXG4gICByZXR1cm4gcm93XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGluZ1dpbm5lciIsImNlbGxzIiwibW92ZWRDZWxsSW5kZXgiLCJzZXFTaXplIiwicm93cyIsImNvbXB1dGVSb3dzIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmVDZWxsc0luUm93RXF1YWwiLCJyb3ciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4IiwieSIsImxpbmUiLCJlbGVtIiwiaW5kZXgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJvYmxpcXVlbHlMZWZ0VG9SaWdodCIsIm9ibGlxdWVseVJpZ2h0VG9MZWZ0IiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwic2xpY2UiLCJzZXFBcnJheSIsImluY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/computingWinner.js\n"));

/***/ })

});