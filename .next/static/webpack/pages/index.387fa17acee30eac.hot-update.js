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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/constants */ \"./components/game/constants.js\");\n/* harmony import */ var _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game/imgs/avatar.jpg */ \"./components/game/imgs/avatar.jpg\");\n/* harmony import */ var _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/imgs/avatar1.png */ \"./components/game/imgs/avatar1.png\");\n/* harmony import */ var _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/imgs/avatar2.png */ \"./components/game/imgs/avatar2.png\");\n/* harmony import */ var _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/game/imgs/avatar3.png */ \"./components/game/imgs/avatar3.png\");\n/* harmony import */ var _components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UI/UIModal/UIModal */ \"./components/UI/UIModal/UIModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        login: \"Semen\",\n        rating: 400,\n        avatar: _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        login: \"Petr\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 2,\n        login: \"Sarasfgsgsfgsjfg;sfgjsfgjs;\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 2,\n        login: \"Anna\",\n        rating: 100,\n        avatar: _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction HomePage() {\n    _s();\n    const moveOrder = players.map((player)=>player.symbol);\n    const [cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol] = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(moveOrder);\n    console.log(winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-200 min-h-screen min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto max-w-[616px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: players.length,\n                        style: {\n                            marginBottom: 17\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        players: players,\n                        currentMove: currentMove,\n                        style: {\n                            marginBottom: 24\n                        },\n                        winnerSymbol: !!winnerSymbol,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 43,\n        columnNumber: 7\n    }, this);\n}\n_s(HomePage, \"2PcnWrb4jGFJGgnxKlPvKCq+yWg=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2lDO0FBQ2pEO0FBQzJCO0FBQ0o7QUFDRTtBQUNBO0FBQ0E7QUFDSDtBQUV0RCxNQUFNWSxVQUFVO0lBQ2I7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQVNDLFFBQVE7UUFBS1IsUUFBUUEsd0VBQU1BO1FBQUVTLFFBQVFWLG9FQUFZQSxDQUFDVyxLQUFLO0lBQUM7SUFDakY7UUFBRUosSUFBSTtRQUFHQyxPQUFPO1FBQVFDLFFBQVE7UUFBS1IsUUFBUUMseUVBQU9BO1FBQUVRLFFBQVFWLG9FQUFZQSxDQUFDWSxJQUFJO0lBQUM7SUFDaEY7UUFDR0wsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlIsUUFBUUUseUVBQU9BO1FBQ2ZPLFFBQVFWLG9FQUFZQSxDQUFDYSxRQUFRO0lBQ2hDO0lBQ0E7UUFDR04sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlIsUUFBUUcseUVBQU9BO1FBQ2ZNLFFBQVFWLG9FQUFZQSxDQUFDYyxNQUFNO0lBQzlCO0NBQ0Y7QUFFYyxTQUFTQzs7SUFDckIsTUFBTUMsWUFBWVYsUUFBUVcsR0FBRyxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPUixNQUFNO0lBQ3JELE1BQU0sQ0FDSFMsT0FDQUMsYUFDQUMsVUFDQUMsaUJBQ0FDLGdCQUNBQyxzQkFDQUMsYUFDRixHQUFHM0IsOERBQVlBLENBQUNrQjtJQUNqQlUsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNHLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDWiw4REFBQ3hCLHNFQUFPQTs7Ozs7MEJBRVIsOERBQUNYLGlFQUFNQTs7Ozs7MEJBRVAsOERBQUNvQztnQkFBS0QsV0FBVTs7a0NBQ2IsOERBQUNsQyx1REFBU0E7d0JBQUNvQyxjQUFjekIsUUFBUTBCLE1BQU07d0JBQUVDLE9BQU87NEJBQUVDLGNBQWM7d0JBQUc7Ozs7OztrQ0FDbkUsOERBQUN0QyxzREFBUUE7d0JBQ05VLFNBQVNBO3dCQUNUYyxhQUFhQTt3QkFDYmEsT0FBTzs0QkFBRUMsY0FBYzt3QkFBRzt3QkFDMUJULGNBQWMsQ0FBQyxDQUFDQTt3QkFDaEJELHNCQUFzQkE7Ozs7OztrQ0FFekIsOERBQUMzQix1REFBU0E7d0JBQ1BzQixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTt3QkFDaEJDLHNCQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztHQXRDd0JUOztRQVVqQmpCLDBEQUFZQTs7O0tBVktpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcidcbmltcG9ydCB7IEdhbWVUaXRsZSwgR2FtZUluZm8sIEdhbWVGaWVsZCwgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9jb25zdGFudHMnXG5pbXBvcnQgYXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhci5qcGcnXG5pbXBvcnQgYXZhdGFyMSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIxLnBuZydcbmltcG9ydCBhdmF0YXIyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhcjIucG5nJ1xuaW1wb3J0IGF2YXRhcjMgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2ltZ3MvYXZhdGFyMy5wbmcnXG5pbXBvcnQgVUlNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbCdcblxuY29uc3QgcGxheWVycyA9IFtcbiAgIHsgaWQ6IDEsIGxvZ2luOiAnU2VtZW4nLCByYXRpbmc6IDQwMCwgYXZhdGFyOiBhdmF0YXIsIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTIH0sXG4gICB7IGlkOiAyLCBsb2dpbjogJ1BldHInLCByYXRpbmc6IDIwMCwgYXZhdGFyOiBhdmF0YXIxLCBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPIH0sXG4gICB7XG4gICAgICBpZDogMixcbiAgICAgIGxvZ2luOiAnU2FyYXNmZ3Nnc2Znc2pmZztzZmdqc2ZnanM7JyxcbiAgICAgIHJhdGluZzogMjAwLFxuICAgICAgYXZhdGFyOiBhdmF0YXIyLFxuICAgICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG4gICB9LFxuICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBsb2dpbjogJ0FubmEnLFxuICAgICAgcmF0aW5nOiAxMDAsXG4gICAgICBhdmF0YXI6IGF2YXRhcjMsXG4gICAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgIGNvbnN0IG1vdmVPcmRlciA9IHBsYXllcnMubWFwKHBsYXllciA9PiBwbGF5ZXIuc3ltYm9sKVxuICAgY29uc3QgW1xuICAgICAgY2VsbHMsXG4gICAgICBjdXJyZW50TW92ZSxcbiAgICAgIG5leHRNb3ZlLFxuICAgICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgICAgd2lubmVyU2VxdWVuY2UsXG4gICAgICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcbiAgICAgIHdpbm5lclN5bWJvbCxcbiAgIF0gPSB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKVxuICAgY29uc29sZS5sb2cod2lubmVyU3ltYm9sKVxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIG1pbi1oLXNjcmVlbiBtaW4tdy1mdWxsXCI+XG4gICAgICAgICA8VUlNb2RhbCAvPlxuXG4gICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LTYgbXgtYXV0byBtYXgtdy1bNjE2cHhdIFwiPlxuICAgICAgICAgICAgPEdhbWVUaXRsZSBwbGF5ZXJzQ291bnQ9e3BsYXllcnMubGVuZ3RofSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE3IH19IC8+XG4gICAgICAgICAgICA8R2FtZUluZm9cbiAgICAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XG4gICAgICAgICAgICAgICBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XG4gICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDI0IH19XG4gICAgICAgICAgICAgICB3aW5uZXJTeW1ib2w9eyEhd2lubmVyU3ltYm9sfVxuICAgICAgICAgICAgICAgaGFuZGxlUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICAgICAgIGNlbGxzPXtjZWxsc31cbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cbiAgICAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljaz17aGFuZGxlQ2VsbENsaWNrfVxuICAgICAgICAgICAgICAgd2lubmVyU2VxdWVuY2U9e3dpbm5lclNlcXVlbmNlfVxuICAgICAgICAgICAgICAgaGFuZGxlUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiR2FtZUZpZWxkIiwidXNlR2FtZVN0YXRlIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJhdmF0YXIiLCJhdmF0YXIxIiwiYXZhdGFyMiIsImF2YXRhcjMiLCJVSU1vZGFsIiwicGxheWVycyIsImlkIiwibG9naW4iLCJyYXRpbmciLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkhvbWVQYWdlIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpbm5lclN5bWJvbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicGxheWVyc0NvdW50IiwibGVuZ3RoIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});