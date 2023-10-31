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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameField_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameField.module.scss */ \"./components/game/GameField/GameField.module.scss\");\n/* harmony import */ var _GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/UIButton/UIButton */ \"./components/UI/UIButton/UIButton.jsx\");\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../GameSymbol */ \"./components/game/GameSymbol.jsx\");\n\n\n\n\n\nfunction GameField(param) {\n    let { style, cells, currentMove, nextMove, handleCellClick, winnerSequence } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MatchInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                field: cells,\n                handleCellClick: handleCellClick,\n                winnerSequence: winnerSequence\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, this);\n}\n_c = GameField;\nfunction MatchInfo(param) {\n    let { currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoveInfo, {\n                currentSm: currentMove,\n                nextSm: nextMove\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btns),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        outlined: true,\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 30,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n}\n_c1 = MatchInfo;\nfunction MoveInfo(param) {\n    let { currentSm, nextSm } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().moves),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().current),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Ход:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().currentSm),\n                        children: currentSm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 41,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                c: true,\n                className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Следующий:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                        children: nextSm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, this);\n}\n_c2 = MoveInfo;\nfunction Grid(param) {\n    let { field, handleCellClick, winnerSequence } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().field),\n        children: field.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    isWinner: isWinner(winnerSequence, index),\n                    symbol: symbol,\n                    onClick: ()=>handleCellClick([\n                            i,\n                            j\n                        ])\n                }, i + j, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 16\n                }, this)))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 55,\n        columnNumber: 7\n    }, this);\n}\n_c3 = Grid;\nfunction isWinner(winnerSequence, index1) {\n    const ans = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index1);\n    if (ans) debugger;\n    return ans;\n}\nfunction Cell(param) {\n    let { symbol, onClick, isWinner } = param;\n    if (isWinner) debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GameField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cell),\n        style: isWinner ? {\n            color: rgba(232, 42, 42, 0.4)\n        } : {},\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n            style: {\n                width: 20,\n                height: 20\n            },\n            children: symbol\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n            lineNumber: 83,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameField\\\\GameField.jsx\",\n        lineNumber: 79,\n        columnNumber: 7\n    }, this);\n}\n_c4 = Cell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"MatchInfo\");\n$RefreshReg$(_c2, \"MoveInfo\");\n$RefreshReg$(_c3, \"Grid\");\n$RefreshReg$(_c4, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZUZpZWxkL0dhbWVGaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ1M7QUFDTDtBQUVyQyxTQUFTSyxVQUFVLEtBT3pCO1FBUHlCLEVBQ3ZCQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBYyxFQUNoQixHQVB5QjtJQVF2QixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBV1gsdUVBQVU7UUFBRUksT0FBT0E7OzBCQUNoQyw4REFBQ1M7Z0JBQVVQLGFBQWFBO2dCQUFhQyxVQUFVQTs7Ozs7OzBCQUMvQyw4REFBQ087Z0JBQ0VDLE9BQU9WO2dCQUNQRyxpQkFBaUJBO2dCQUNqQkMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7O0FBSTVCO0tBbEJnQk47QUFvQmhCLFNBQVNVLFVBQVUsS0FBeUI7UUFBekIsRUFBRVAsV0FBVyxFQUFFQyxRQUFRLEVBQUUsR0FBekI7SUFDaEIscUJBQ0csOERBQUNHO1FBQUlDLFdBQVdYLG9FQUFPOzswQkFDcEIsOERBQUNpQjtnQkFBU0MsV0FBV1o7Z0JBQWFhLFFBQVFaOzs7Ozs7MEJBQzFDLDhEQUFDRztnQkFBSUMsV0FBV1gsb0VBQU87O2tDQUNwQiw4REFBQ0MsNkRBQVFBO2tDQUFDOzs7Ozs7a0NBQ1YsOERBQUNBLDZEQUFRQTt3QkFBQ29CLFFBQVE7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQjtNQVZTUjtBQVlULFNBQVNJLFNBQVMsS0FBcUI7UUFBckIsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBckI7SUFDZixxQkFDRyw4REFBQ1Q7UUFBSUMsV0FBV1gscUVBQVE7OzBCQUNyQiw4REFBQ1U7Z0JBQUlDLFdBQVdYLHVFQUFVOztrQ0FDdkIsOERBQUN3QjtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDdEIsbURBQVVBO3dCQUFDUyxXQUFXWCx5RUFBWTtrQ0FBR2tCOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDUjtnQkFBSWUsQ0FBQztnQkFBQ2QsV0FBV1gsb0VBQU87O2tDQUN0Qiw4REFBQ3dCO2tDQUFLOzs7Ozs7a0NBQ04sOERBQUN0QixtREFBVUE7a0NBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCO01BYlNGO0FBZVQsU0FBU0gsS0FBSyxLQUEwQztRQUExQyxFQUFFQyxLQUFLLEVBQUVQLGVBQWUsRUFBRUMsY0FBYyxFQUFFLEdBQTFDO0lBQ1gscUJBQ0csOERBQUNDO1FBQUlDLFdBQVdYLHFFQUFRO2tCQUNwQmUsTUFBTVksR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQ2ZELEtBQUtELEdBQUcsQ0FBQyxDQUFDRyxRQUFRQyxrQkFDZiw4REFBQ0M7b0JBQ0VDLFVBQVVBLFNBQVN4QixnQkFBZ0J5QjtvQkFFbkNKLFFBQVFBO29CQUNSSyxTQUFTLElBQU0zQixnQkFBZ0I7NEJBQUNxQjs0QkFBR0U7eUJBQUU7bUJBRmhDRixJQUFJRTs7Ozs7Ozs7OztBQVEzQjtNQWZTakI7QUFpQlQsU0FBU21CLFNBQVN4QixjQUFjLEVBQUV5QixNQUFLO0lBQ3BDLE1BQU1FLE1BQU0zQiwyQkFBQUEscUNBQUFBLGVBQWdCNEIsUUFBUSxDQUFDSDtJQUNyQyxJQUFJRSxLQUFLLFFBQVE7SUFDakIsT0FBT0E7QUFDVjtBQUVBLFNBQVNKLEtBQUssS0FBNkI7UUFBN0IsRUFBRUYsTUFBTSxFQUFFSyxPQUFPLEVBQUVGLFFBQVEsRUFBRSxHQUE3QjtJQUNYLElBQUlBLFVBQVUsUUFBUTtJQUN0QixxQkFDRyw4REFBQ3ZCO1FBQ0VDLFdBQVdYLG9FQUFPO1FBQ2xCSSxPQUFPNkIsV0FBVztZQUFFTSxPQUFPQyxLQUFLLEtBQUssSUFBSSxJQUFJO1FBQUssSUFBSSxDQUFDO1FBQ3ZETCxTQUFTQTtrQkFDVCw0RUFBQ2pDLG1EQUFVQTtZQUFDRSxPQUFPO2dCQUFFcUMsT0FBTztnQkFBSUMsUUFBUTtZQUFHO3NCQUFJWjs7Ozs7Ozs7Ozs7QUFHeEQ7TUFWU0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0dhbWVGaWVsZC9HYW1lRmllbGQuanN4PzJiYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL0dhbWVGaWVsZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFVJQnV0dG9uIGZyb20gJy4uLy4uL1VJL1VJQnV0dG9uL1VJQnV0dG9uJ1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi8uLi9HYW1lU3ltYm9sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7XHJcbiAgIHN0eWxlLFxyXG4gICBjZWxscyxcclxuICAgY3VycmVudE1vdmUsXHJcbiAgIG5leHRNb3ZlLFxyXG4gICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgIHdpbm5lclNlcXVlbmNlLFxyXG59KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC53cmFwcGVyfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICA8TWF0Y2hJbmZvIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfSAvPlxyXG4gICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBmaWVsZD17Y2VsbHN9XHJcbiAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljaz17aGFuZGxlQ2VsbENsaWNrfVxyXG4gICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hdGNoSW5mbyh7IGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSB9KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5pbmZvfT5cclxuICAgICAgICAgPE1vdmVJbmZvIGN1cnJlbnRTbT17Y3VycmVudE1vdmV9IG5leHRTbT17bmV4dE1vdmV9IC8+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5idG5zfT5cclxuICAgICAgICAgICAgPFVJQnV0dG9uPtCd0LjRh9GM0Y88L1VJQnV0dG9uPlxyXG4gICAgICAgICAgICA8VUlCdXR0b24gb3V0bGluZWQ+0KHQtNCw0YLRjNGB0Y88L1VJQnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTW92ZUluZm8oeyBjdXJyZW50U20sIG5leHRTbSB9KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5tb3Zlc30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jdXJyZW50fT5cclxuICAgICAgICAgICAgPHNwYW4+0KXQvtC0Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPEdhbWVTeW1ib2wgY2xhc3NOYW1lPXtjbC5jdXJyZW50U219PntjdXJyZW50U219PC9HYW1lU3ltYm9sPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjIGNsYXNzTmFtZT17Y2wubmV4dH0+XHJcbiAgICAgICAgICAgIDxzcGFuPtCh0LvQtdC00YPRjtGJ0LjQuTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxHYW1lU3ltYm9sPntuZXh0U219PC9HYW1lU3ltYm9sPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gR3JpZCh7IGZpZWxkLCBoYW5kbGVDZWxsQ2xpY2ssIHdpbm5lclNlcXVlbmNlIH0pIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmZpZWxkfT5cclxuICAgICAgICAge2ZpZWxkLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgbGluZS5tYXAoKHN5bWJvbCwgaikgPT4gKFxyXG4gICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICBpc1dpbm5lcj17aXNXaW5uZXIod2lubmVyU2VxdWVuY2UsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpICsgan1cclxuICAgICAgICAgICAgICAgICAgc3ltYm9sPXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhbaSwgal0pfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaW5uZXIod2lubmVyU2VxdWVuY2UsIGluZGV4KSB7XHJcbiAgIGNvbnN0IGFucyA9IHdpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleClcclxuICAgaWYgKGFucykgZGVidWdnZXJcclxuICAgcmV0dXJuIGFuc1xyXG59XHJcblxyXG5mdW5jdGlvbiBDZWxsKHsgc3ltYm9sLCBvbkNsaWNrLCBpc1dpbm5lciB9KSB7XHJcbiAgIGlmIChpc1dpbm5lcikgZGVidWdnZXJcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICBjbGFzc05hbWU9e2NsLmNlbGx9XHJcbiAgICAgICAgIHN0eWxlPXtpc1dpbm5lciA/IHsgY29sb3I6IHJnYmEoMjMyLCA0MiwgNDIsIDAuNCkgfSA6IHt9fVxyXG4gICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgPEdhbWVTeW1ib2wgc3R5bGU9e3sgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwIH19PntzeW1ib2x9PC9HYW1lU3ltYm9sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY2wiLCJVSUJ1dHRvbiIsIkdhbWVTeW1ib2wiLCJHYW1lRmllbGQiLCJzdHlsZSIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIk1hdGNoSW5mbyIsIkdyaWQiLCJmaWVsZCIsImluZm8iLCJNb3ZlSW5mbyIsImN1cnJlbnRTbSIsIm5leHRTbSIsImJ0bnMiLCJvdXRsaW5lZCIsIm1vdmVzIiwiY3VycmVudCIsInNwYW4iLCJjIiwibmV4dCIsIm1hcCIsImxpbmUiLCJpIiwic3ltYm9sIiwiaiIsIkNlbGwiLCJpc1dpbm5lciIsImluZGV4Iiwib25DbGljayIsImFucyIsImluY2x1ZGVzIiwiY2VsbCIsImNvbG9yIiwicmdiYSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/GameField/GameField.jsx\n"));

/***/ })

});