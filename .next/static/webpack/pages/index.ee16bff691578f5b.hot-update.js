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

/***/ "./components/UI/UIModal/UIModal.jsx":
/*!*******************************************!*\
  !*** ./components/UI/UIModal/UIModal.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UIModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UIModal.module.scss */ \"./components/UI/UIModal/UIModal.module.scss\");\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ \"./components/icons/index.js\");\n/* harmony import */ var _game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../game/GameInfo/GameInfo */ \"./components/game/GameInfo/GameInfo.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/**\r\n *\r\n * @param {{\r\n * width: 'md' | 'full'\r\n * }} param0\r\n * @returns\r\n */ function UIModal(param) {\n    let { players, currentMove, winnerSymbol, handlePlayerTimeOver, width } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeButton),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.ICCross, {\n                        style: {\n                            color: \"white\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Игра завершена\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerInfo),\n                    children: [\n                        \"Победитель: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerName),\n                            children: \"Paromovevg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    players: players,\n                    currentMove: currentMove,\n                    style: {\n                        marginBottom: 24\n                    },\n                    winnerSymbol: !!winnerSymbol,\n                    handlePlayerTimeOver: handlePlayerTimeOver\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c = UIModal;\nvar _c;\n$RefreshReg$(_c, \"UIModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQUNvQjtBQUM5QjtBQUMzQjs7Ozs7O0NBTUMsR0FDYyxTQUFTSyxRQUFRLEtBTS9CO1FBTitCLEVBQzdCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxvQkFBb0IsRUFDcEJDLEtBQUssRUFDUCxHQU4rQjtJQU83QixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBV1gscUVBQVU7a0JBQ3ZCLDRFQUFDVTtZQUFJQyxXQUFXWCwwRUFBZTs7OEJBQzVCLDhEQUFDVTtvQkFBSUMsV0FBV1gseUVBQWM7OEJBQzNCLDRFQUFDQywyQ0FBT0E7d0JBQUNjLE9BQU87NEJBQUVDLE9BQU87d0JBQVE7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ0M7b0JBQUdOLFdBQVdYLG1FQUFROzhCQUFFOzs7Ozs7OEJBQ3pCLDhEQUFDVTtvQkFBSUMsV0FBV1gsd0VBQWE7O3dCQUFFO3NDQUNoQiw4REFBQ29COzRCQUFLVCxXQUFXWCx3RUFBYTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUUvQyw4REFBQ0UsNkRBQVFBO29CQUNORyxTQUFTQTtvQkFDVEMsYUFBYUE7b0JBQ2JTLE9BQU87d0JBQUVPLGNBQWM7b0JBQUc7b0JBQzFCZixjQUFjLENBQUMsQ0FBQ0E7b0JBQ2hCQyxzQkFBc0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztLQTNCd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvVUlNb2RhbC9VSU1vZGFsLmpzeD8wNDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsIGZyb20gJy4vVUlNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgSUNDcm9zcyB9IGZyb20gJy4uLy4uL2ljb25zJ1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4vLi4vLi4vZ2FtZS9HYW1lSW5mby9HYW1lSW5mbydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3tcclxuICogd2lkdGg6ICdtZCcgfCAnZnVsbCdcclxuICogfX0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVSU1vZGFsKHtcclxuICAgcGxheWVycyxcclxuICAgY3VycmVudE1vdmUsXHJcbiAgIHdpbm5lclN5bWJvbCxcclxuICAgaGFuZGxlUGxheWVyVGltZU92ZXIsXHJcbiAgIHdpZHRoLFxyXG59KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC53cmFwcGVyfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jbG9zZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgIDxJQ0Nyb3NzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbC50aXRsZX0+0JjQs9GA0LAg0LfQsNCy0LXRgNGI0LXQvdCwPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLndpbm5lckluZm99PlxyXG4gICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjDogPHNwYW4gY2xhc3NOYW1lPXtjbC53aW5uZXJOYW1lfT5QYXJvbW92ZXZnPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdhbWVJbmZvXHJcbiAgICAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fVxyXG4gICAgICAgICAgICAgICB3aW5uZXJTeW1ib2w9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsIiwiSUNDcm9zcyIsIkdhbWVJbmZvIiwiY24iLCJVSU1vZGFsIiwicGxheWVycyIsImN1cnJlbnRNb3ZlIiwid2lubmVyU3ltYm9sIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJ3aWR0aCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJtb2RhbENvbnRlbnQiLCJjbG9zZUJ1dHRvbiIsInN0eWxlIiwiY29sb3IiLCJoMiIsInRpdGxlIiwid2lubmVySW5mbyIsInNwYW4iLCJ3aW5uZXJOYW1lIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UI/UIModal/UIModal.jsx\n"));

/***/ })

});