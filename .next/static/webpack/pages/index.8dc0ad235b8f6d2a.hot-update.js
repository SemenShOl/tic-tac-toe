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

/***/ "./components/game/GameField/GameField.jsx":
/*!*************************************************!*\
  !*** ./components/game/GameField/GameField.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameField_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameField.module.scss */ \"./components/game/GameField/GameField.module.scss\");\n/* harmony import */ var _GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/UIButton/UIButton */ \"./components/UI/UIButton/UIButton.jsx\");\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../GameSymbol */ \"./components/game/GameSymbol.jsx\");\n\n\n\n\n\nfunction GameField(param) {\n    let { style, cells, currentMove, nextMove, handleCellClick, winnerSequence } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MatchInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                field: cells,\n                handleCellClick: handleCellClick,\n                winnerSequence: winnerSequence\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, this);\n}\n_c = GameField;\nfunction MatchInfo(param) {\n    let { currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoveInfo, {\n                currentSm: currentMove,\n                nextSm: nextMove\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btns),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        outlined: true,\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 30,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n}\n_c1 = MatchInfo;\nfunction MoveInfo(param) {\n    let { currentSm, nextSm } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().moves),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().current),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Ход:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().currentSm),\n                        children: currentSm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 41,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                c: true,\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Следующий:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                        children: nextSm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, this);\n}\n_c2 = MoveInfo;\nfunction Grid(param) {\n    let { field, handleCellClick, winnerSequence } = param;\n    console.log(winnerSequence);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().field),\n        children: field.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    isWinner: isWinner(winnerSequence, [\n                        i,\n                        j\n                    ], symbol),\n                    symbol: symbol,\n                    onClick: ()=>handleCellClick([\n                            i,\n                            j\n                        ])\n                }, i + j, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 16\n                }, this)))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 56,\n        columnNumber: 7\n    }, this);\n}\n_c3 = Grid;\nfunction isWinner(winnerSequence, index, symbol) {\n    if (winnerSequence && symbol) debugger;\n    const ans = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index);\n    if (ans) debugger;\n    return ans;\n}\nfunction Cell(param) {\n    let { symbol, onClick, isWinner } = param;\n    if (isWinner) debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cell),\n        style: isWinner ? {\n            color: rgba(232, 42, 42, 0.4)\n        } : {},\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n            style: {\n                width: 20,\n                height: 20\n            },\n            children: symbol\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n            lineNumber: 85,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 81,\n        columnNumber: 7\n    }, this);\n}\n_c4 = Cell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"MatchInfo\");\n$RefreshReg$(_c2, \"MoveInfo\");\n$RefreshReg$(_c3, \"Grid\");\n$RefreshReg$(_c4, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZUZpZWxkL0dhbWVGaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ1M7QUFDTDtBQUVyQyxTQUFTSyxVQUFVLEtBT3pCO1FBUHlCLEVBQ3ZCQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBYyxFQUNoQixHQVB5QjtJQVF2QixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBV1gsdUVBQVU7UUFBRUksT0FBT0E7OzBCQUNoQyw4REFBQ1M7Z0JBQVVQLGFBQWFBO2dCQUFhQyxVQUFVQTs7Ozs7OzBCQUMvQyw4REFBQ087Z0JBQ0VDLE9BQU9WO2dCQUNQRyxpQkFBaUJBO2dCQUNqQkMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7O0FBSTVCO0tBbEJnQk47QUFvQmhCLFNBQVNVLFVBQVUsS0FBeUI7UUFBekIsRUFBRVAsV0FBVyxFQUFFQyxRQUFRLEVBQUUsR0FBekI7SUFDaEIscUJBQ0csOERBQUNHO1FBQUlDLFdBQVdYLG9FQUFPOzswQkFDcEIsOERBQUNpQjtnQkFBU0MsV0FBV1o7Z0JBQWFhLFFBQVFaOzs7Ozs7MEJBQzFDLDhEQUFDRztnQkFBSUMsV0FBV1gsb0VBQU87O2tDQUNwQiw4REFBQ0MsNkRBQVFBO2tDQUFDOzs7Ozs7a0NBQ1YsOERBQUNBLDZEQUFRQTt3QkFBQ29CLFFBQVE7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQjtNQVZTUjtBQVlULFNBQVNJLFNBQVMsS0FBcUI7UUFBckIsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBckI7SUFDZixxQkFDRyw4REFBQ1Q7UUFBSUMsV0FBV1gscUVBQVE7OzBCQUNyQiw4REFBQ1U7Z0JBQUlDLFdBQVdYLHVFQUFVOztrQ0FDdkIsOERBQUN3QjtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDdEIsbURBQVVBO3dCQUFDUyxXQUFXWCx5RUFBWTtrQ0FBR2tCOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDUjtnQkFBSWUsQ0FBQztnQkFBQ2QsV0FBV1gsb0VBQU87O2tDQUN0Qiw4REFBQ3dCO2tDQUFLOzs7Ozs7a0NBQ04sOERBQUN0QixtREFBVUE7a0NBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCO01BYlNGO0FBZVQsU0FBU0gsS0FBSyxLQUEwQztRQUExQyxFQUFFQyxLQUFLLEVBQUVQLGVBQWUsRUFBRUMsY0FBYyxFQUFFLEdBQTFDO0lBQ1hrQixRQUFRQyxHQUFHLENBQUNuQjtJQUNaLHFCQUNHLDhEQUFDQztRQUFJQyxXQUFXWCxxRUFBUTtrQkFDcEJlLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNmRCxLQUFLRCxHQUFHLENBQUMsQ0FBQ0csUUFBUUMsa0JBQ2YsOERBQUNDO29CQUNFQyxVQUFVQSxTQUFTMUIsZ0JBQWdCO3dCQUFDc0I7d0JBQUdFO3FCQUFFLEVBQUVEO29CQUUzQ0EsUUFBUUE7b0JBQ1JJLFNBQVMsSUFBTTVCLGdCQUFnQjs0QkFBQ3VCOzRCQUFHRTt5QkFBRTttQkFGaENGLElBQUlFOzs7Ozs7Ozs7O0FBUTNCO01BaEJTbkI7QUFrQlQsU0FBU3FCLFNBQVMxQixjQUFjLEVBQUU0QixLQUFLLEVBQUVMLE1BQU07SUFDNUMsSUFBSXZCLGtCQUFrQnVCLFFBQVEsUUFBUTtJQUN0QyxNQUFNTSxNQUFNN0IsMkJBQUFBLHFDQUFBQSxlQUFnQjhCLFFBQVEsQ0FBQ0Y7SUFDckMsSUFBSUMsS0FBSyxRQUFRO0lBQ2pCLE9BQU9BO0FBQ1Y7QUFFQSxTQUFTSixLQUFLLEtBQTZCO1FBQTdCLEVBQUVGLE1BQU0sRUFBRUksT0FBTyxFQUFFRCxRQUFRLEVBQUUsR0FBN0I7SUFDWCxJQUFJQSxVQUFVLFFBQVE7SUFDdEIscUJBQ0csOERBQUN6QjtRQUNFQyxXQUFXWCxvRUFBTztRQUNsQkksT0FBTytCLFdBQVc7WUFBRU0sT0FBT0MsS0FBSyxLQUFLLElBQUksSUFBSTtRQUFLLElBQUksQ0FBQztRQUN2RE4sU0FBU0E7a0JBQ1QsNEVBQUNsQyxtREFBVUE7WUFBQ0UsT0FBTztnQkFBRXVDLE9BQU87Z0JBQUlDLFFBQVE7WUFBRztzQkFBSVo7Ozs7Ozs7Ozs7O0FBR3hEO01BVlNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9HYW1lRmllbGQvR2FtZUZpZWxkLmpzeD8yYmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2wgZnJvbSAnLi9HYW1lRmllbGQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBVSUJ1dHRvbiBmcm9tICcuLi8uLi9VSS9VSUJ1dHRvbi9VSUJ1dHRvbidcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vLi4vR2FtZVN5bWJvbCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe1xyXG4gICBzdHlsZSxcclxuICAgY2VsbHMsXHJcbiAgIGN1cnJlbnRNb3ZlLFxyXG4gICBuZXh0TW92ZSxcclxuICAgaGFuZGxlQ2VsbENsaWNrLFxyXG4gICB3aW5uZXJTZXF1ZW5jZSxcclxufSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud3JhcHBlcn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgPE1hdGNoSW5mbyBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IG5leHRNb3ZlPXtuZXh0TW92ZX0gLz5cclxuICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgZmllbGQ9e2NlbGxzfVxyXG4gICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cclxuICAgICAgICAgICAgd2lubmVyU2VxdWVuY2U9e3dpbm5lclNlcXVlbmNlfVxyXG4gICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNYXRjaEluZm8oeyBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuaW5mb30+XHJcbiAgICAgICAgIDxNb3ZlSW5mbyBjdXJyZW50U209e2N1cnJlbnRNb3ZlfSBuZXh0U209e25leHRNb3ZlfSAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYnRuc30+XHJcbiAgICAgICAgICAgIDxVSUJ1dHRvbj7QndC40YfRjNGPPC9VSUJ1dHRvbj5cclxuICAgICAgICAgICAgPFVJQnV0dG9uIG91dGxpbmVkPtCh0LTQsNGC0YzRgdGPPC9VSUJ1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmVJbmZvKHsgY3VycmVudFNtLCBuZXh0U20gfSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wubW92ZXN9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY3VycmVudH0+XHJcbiAgICAgICAgICAgIDxzcGFuPtCl0L7QtDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxHYW1lU3ltYm9sIGNsYXNzTmFtZT17Y2wuY3VycmVudFNtfT57Y3VycmVudFNtfTwvR2FtZVN5bWJvbD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgYyBjbGFzc05hbWU9e2NsLm5leHR9PlxyXG4gICAgICAgICAgICA8c3Bhbj7QodC70LXQtNGD0Y7RidC40Lk6PC9zcGFuPlxyXG4gICAgICAgICAgICA8R2FtZVN5bWJvbD57bmV4dFNtfTwvR2FtZVN5bWJvbD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdyaWQoeyBmaWVsZCwgaGFuZGxlQ2VsbENsaWNrLCB3aW5uZXJTZXF1ZW5jZSB9KSB7XHJcbiAgIGNvbnNvbGUubG9nKHdpbm5lclNlcXVlbmNlKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuZmllbGR9PlxyXG4gICAgICAgICB7ZmllbGQubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICBsaW5lLm1hcCgoc3ltYm9sLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxDZWxsXHJcbiAgICAgICAgICAgICAgICAgIGlzV2lubmVyPXtpc1dpbm5lcih3aW5uZXJTZXF1ZW5jZSwgW2ksIGpdLCBzeW1ib2wpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2kgKyBqfVxyXG4gICAgICAgICAgICAgICAgICBzeW1ib2w9e3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKFtpLCBqXSl9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpbm5lcih3aW5uZXJTZXF1ZW5jZSwgaW5kZXgsIHN5bWJvbCkge1xyXG4gICBpZiAod2lubmVyU2VxdWVuY2UgJiYgc3ltYm9sKSBkZWJ1Z2dlclxyXG4gICBjb25zdCBhbnMgPSB3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpXHJcbiAgIGlmIChhbnMpIGRlYnVnZ2VyXHJcbiAgIHJldHVybiBhbnNcclxufVxyXG5cclxuZnVuY3Rpb24gQ2VsbCh7IHN5bWJvbCwgb25DbGljaywgaXNXaW5uZXIgfSkge1xyXG4gICBpZiAoaXNXaW5uZXIpIGRlYnVnZ2VyXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgY2xhc3NOYW1lPXtjbC5jZWxsfVxyXG4gICAgICAgICBzdHlsZT17aXNXaW5uZXIgPyB7IGNvbG9yOiByZ2JhKDIzMiwgNDIsIDQyLCAwLjQpIH0gOiB7fX1cclxuICAgICAgICAgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgIDxHYW1lU3ltYm9sIHN0eWxlPXt7IHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCB9fT57c3ltYm9sfTwvR2FtZVN5bWJvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsIiwiVUlCdXR0b24iLCJHYW1lU3ltYm9sIiwiR2FtZUZpZWxkIiwic3R5bGUiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJNYXRjaEluZm8iLCJHcmlkIiwiZmllbGQiLCJpbmZvIiwiTW92ZUluZm8iLCJjdXJyZW50U20iLCJuZXh0U20iLCJidG5zIiwib3V0bGluZWQiLCJtb3ZlcyIsImN1cnJlbnQiLCJzcGFuIiwiYyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibGluZSIsImkiLCJzeW1ib2wiLCJqIiwiQ2VsbCIsImlzV2lubmVyIiwib25DbGljayIsImluZGV4IiwiYW5zIiwiaW5jbHVkZXMiLCJjZWxsIiwiY29sb3IiLCJyZ2JhIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/GameField/GameField.jsx\n"));

/***/ })

});