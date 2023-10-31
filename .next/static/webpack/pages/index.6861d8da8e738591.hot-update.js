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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/constants */ \"./components/game/constants.js\");\n/* harmony import */ var _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game/imgs/avatar.jpg */ \"./components/game/imgs/avatar.jpg\");\n/* harmony import */ var _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/imgs/avatar1.png */ \"./components/game/imgs/avatar1.png\");\n/* harmony import */ var _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/imgs/avatar2.png */ \"./components/game/imgs/avatar2.png\");\n/* harmony import */ var _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/game/imgs/avatar3.png */ \"./components/game/imgs/avatar3.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        login: \"Semen\",\n        rating: 400,\n        avatar: _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        login: \"Petr\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 2,\n        login: \"Sarasfgsgsfgsjfg;sfgjsfgjs;\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 2,\n        login: \"Anna\",\n        rating: 100,\n        avatar: _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction HomePage() {\n    _s();\n    const moveOrder = players.map((player)=>player.symbol);\n    const [cells, currentMove, nextMove, handleCellClick, winnerSequence, playerWhoCannotMove] = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(moveOrder);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-200 min-h-screen min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto max-w-[616px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: players.length,\n                        style: {\n                            marginBottom: 17\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        players: players,\n                        currentMove: currentMove,\n                        style: {\n                            marginBottom: 24\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        playerWhoCannotMove: playerWhoCannotMove\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n}\n_s(HomePage, \"4cXZYahRKyJ1RC+0RYBMBkhvba4=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaUM7QUFDakQ7QUFDMkI7QUFDSjtBQUNFO0FBQ0E7QUFDQTtBQUV6RCxNQUFNVyxVQUFVO0lBQ2I7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQVNDLFFBQVE7UUFBS1AsUUFBUUEsd0VBQU1BO1FBQUVRLFFBQVFULG9FQUFZQSxDQUFDVSxLQUFLO0lBQUM7SUFDakY7UUFBRUosSUFBSTtRQUFHQyxPQUFPO1FBQVFDLFFBQVE7UUFBS1AsUUFBUUMseUVBQU9BO1FBQUVPLFFBQVFULG9FQUFZQSxDQUFDVyxJQUFJO0lBQUM7SUFDaEY7UUFDR0wsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlAsUUFBUUUseUVBQU9BO1FBQ2ZNLFFBQVFULG9FQUFZQSxDQUFDWSxRQUFRO0lBQ2hDO0lBQ0E7UUFDR04sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlAsUUFBUUcseUVBQU9BO1FBQ2ZLLFFBQVFULG9FQUFZQSxDQUFDYSxNQUFNO0lBQzlCO0NBQ0Y7QUFFYyxTQUFTQzs7SUFDckIsTUFBTUMsWUFBWVYsUUFBUVcsR0FBRyxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPUixNQUFNO0lBQ3JELE1BQU0sQ0FDSFMsT0FDQUMsYUFDQUMsVUFDQUMsaUJBQ0FDLGdCQUNBQyxvQkFDRixHQUFHekIsOERBQVlBLENBQUNpQjtJQUVqQixxQkFDRyw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUMvQixpRUFBTUE7Ozs7OzBCQUVQLDhEQUFDZ0M7Z0JBQUtELFdBQVU7O2tDQUNiLDhEQUFDOUIsdURBQVNBO3dCQUFDZ0MsY0FBY3RCLFFBQVF1QixNQUFNO3dCQUFFQyxPQUFPOzRCQUFFQyxjQUFjO3dCQUFHOzs7Ozs7a0NBQ25FLDhEQUFDbEMsc0RBQVFBO3dCQUNOUyxTQUFTQTt3QkFDVGMsYUFBYUE7d0JBQ2JVLE9BQU87NEJBQUVDLGNBQWM7d0JBQUc7Ozs7OztrQ0FFN0IsOERBQUNqQyx1REFBU0E7d0JBQ1BxQixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTt3QkFDaEJDLHFCQUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQWpDd0JUOztRQVNqQmhCLDBEQUFZQTs7O0tBVEtnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcidcbmltcG9ydCB7IEdhbWVUaXRsZSwgR2FtZUluZm8sIEdhbWVGaWVsZCwgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9jb25zdGFudHMnXG5pbXBvcnQgYXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhci5qcGcnXG5pbXBvcnQgYXZhdGFyMSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIxLnBuZydcbmltcG9ydCBhdmF0YXIyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhcjIucG5nJ1xuaW1wb3J0IGF2YXRhcjMgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2ltZ3MvYXZhdGFyMy5wbmcnXG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gICB7IGlkOiAxLCBsb2dpbjogJ1NlbWVuJywgcmF0aW5nOiA0MDAsIGF2YXRhcjogYXZhdGFyLCBzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TUyB9LFxuICAgeyBpZDogMiwgbG9naW46ICdQZXRyJywgcmF0aW5nOiAyMDAsIGF2YXRhcjogYXZhdGFyMSwgc3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyB9LFxuICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBsb2dpbjogJ1NhcmFzZmdzZ3NmZ3NqZmc7c2ZnanNmZ2pzOycsXG4gICAgICByYXRpbmc6IDIwMCxcbiAgICAgIGF2YXRhcjogYXZhdGFyMixcbiAgICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICAgfSxcbiAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbG9naW46ICdBbm5hJyxcbiAgICAgIHJhdGluZzogMTAwLFxuICAgICAgYXZhdGFyOiBhdmF0YXIzLFxuICAgICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFLFxuICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICBjb25zdCBtb3ZlT3JkZXIgPSBwbGF5ZXJzLm1hcChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbClcbiAgIGNvbnN0IFtcbiAgICAgIGNlbGxzLFxuICAgICAgY3VycmVudE1vdmUsXG4gICAgICBuZXh0TW92ZSxcbiAgICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICAgIHdpbm5lclNlcXVlbmNlLFxuICAgICAgcGxheWVyV2hvQ2Fubm90TW92ZSxcbiAgIF0gPSB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgbWluLWgtc2NyZWVuIG1pbi13LWZ1bGxcIj5cbiAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIG1heC13LVs2MTZweF0gXCI+XG4gICAgICAgICAgICA8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVycy5sZW5ndGh9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTcgfX0gLz5cbiAgICAgICAgICAgIDxHYW1lSW5mb1xuICAgICAgICAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjQgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgICAgICBjZWxscz17Y2VsbHN9XG4gICAgICAgICAgICAgICBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XG4gICAgICAgICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XG4gICAgICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICAgICAgIHdpbm5lclNlcXVlbmNlPXt3aW5uZXJTZXF1ZW5jZX1cbiAgICAgICAgICAgICAgIHBsYXllcldob0Nhbm5vdE1vdmU9e3BsYXllcldob0Nhbm5vdE1vdmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICApXG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJHYW1lRmllbGQiLCJ1c2VHYW1lU3RhdGUiLCJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsImF2YXRhciIsImF2YXRhcjEiLCJhdmF0YXIyIiwiYXZhdGFyMyIsInBsYXllcnMiLCJpZCIsImxvZ2luIiwicmF0aW5nIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJIb21lUGFnZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwicGxheWVyV2hvQ2Fubm90TW92ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJwbGF5ZXJzQ291bnQiLCJsZW5ndGgiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});