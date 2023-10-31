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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/constants */ \"./components/game/constants.js\");\n/* harmony import */ var _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/imgs/avatar.jpg */ \"./components/game/imgs/avatar.jpg\");\n/* harmony import */ var _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game/imgs/avatar1.png */ \"./components/game/imgs/avatar1.png\");\n/* harmony import */ var _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/imgs/avatar2.png */ \"./components/game/imgs/avatar2.png\");\n/* harmony import */ var _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/imgs/avatar3.png */ \"./components/game/imgs/avatar3.png\");\n/* harmony import */ var _components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/UIModal/UIModal */ \"./components/UI/UIModal/UIModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        login: \"Semen\",\n        rating: 400,\n        avatar: _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        login: \"Petr\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 2,\n        login: \"Sarasfgsgsfgsjfg;sfgjsfgjs;\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 2,\n        login: \"Anna\",\n        rating: 100,\n        avatar: _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction HomePage() {\n    _s();\n    const moveOrder = players.map((player)=>player.symbol);\n    const [cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol] = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(moveOrder);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-200 min-h-screen min-w-full flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto max-w-[616px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: players.length,\n                        style: {\n                            marginBottom: 17\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        players: players,\n                        currentMove: currentMove,\n                        style: {\n                            marginBottom: 24\n                        },\n                        winnerSymbol: !!winnerSymbol,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 47,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, this);\n}\n_s(HomePage, \"2PcnWrb4jGFJGgnxKlPvKCq+yWg=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNpQztBQUN0QjtBQUNKO0FBQ0U7QUFDQTtBQUNBO0FBRUg7QUFFdEQsTUFBTVcsVUFBVTtJQUNiO1FBQUVDLElBQUk7UUFBR0MsT0FBTztRQUFTQyxRQUFRO1FBQUtSLFFBQVFBLHdFQUFNQTtRQUFFUyxRQUFRVixvRUFBWUEsQ0FBQ1csS0FBSztJQUFDO0lBQ2pGO1FBQUVKLElBQUk7UUFBR0MsT0FBTztRQUFRQyxRQUFRO1FBQUtSLFFBQVFDLHlFQUFPQTtRQUFFUSxRQUFRVixvRUFBWUEsQ0FBQ1ksSUFBSTtJQUFDO0lBQ2hGO1FBQ0dMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JSLFFBQVFFLHlFQUFPQTtRQUNmTyxRQUFRVixvRUFBWUEsQ0FBQ2EsUUFBUTtJQUNoQztJQUNBO1FBQ0dOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JSLFFBQVFHLHlFQUFPQTtRQUNmTSxRQUFRVixvRUFBWUEsQ0FBQ2MsTUFBTTtJQUM5QjtDQUNGO0FBRWMsU0FBU0M7O0lBQ3JCLE1BQU1DLFlBQVlWLFFBQVFXLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT1IsTUFBTTtJQUNyRCxNQUFNLENBQ0hTLE9BQ0FDLGFBQ0FDLFVBQ0FDLGlCQUNBQyxnQkFDQUMsc0JBQ0FDLGFBQ0YsR0FBRzFCLDhEQUFZQSxDQUFDaUI7SUFDakIscUJBQ0csOERBQUNVO1FBQUlDLFdBQVU7OzBCQUdaLDhEQUFDaEMsaUVBQU1BOzs7OzswQkFFUCw4REFBQ2lDO2dCQUFLRCxXQUFVOztrQ0FDYiw4REFBQy9CLHVEQUFTQTt3QkFBQ2lDLGNBQWN2QixRQUFRd0IsTUFBTTt3QkFBRUMsT0FBTzs0QkFBRUMsY0FBYzt3QkFBRzs7Ozs7O2tDQUNuRSw4REFBQ25DLHNEQUFRQTt3QkFDTlMsU0FBU0E7d0JBQ1RjLGFBQWFBO3dCQUNiVyxPQUFPOzRCQUFFQyxjQUFjO3dCQUFHO3dCQUMxQlAsY0FBYyxDQUFDLENBQUNBO3dCQUNoQkQsc0JBQXNCQTs7Ozs7O2tDQUV6Qiw4REFBQzFCLHVEQUFTQTt3QkFDUHFCLE9BQU9BO3dCQUNQQyxhQUFhQTt3QkFDYkMsVUFBVUE7d0JBQ1ZDLGlCQUFpQkE7d0JBQ2pCQyxnQkFBZ0JBO3dCQUNoQkMsc0JBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JDO0dBckN3QlQ7O1FBVWpCaEIsMERBQVlBOzs7S0FWS2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJ1xuaW1wb3J0IHsgR2FtZVRpdGxlLCBHYW1lSW5mbywgR2FtZUZpZWxkLCB1c2VHYW1lU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvY29uc3RhbnRzJ1xuaW1wb3J0IGF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIuanBnJ1xuaW1wb3J0IGF2YXRhcjEgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2ltZ3MvYXZhdGFyMS5wbmcnXG5pbXBvcnQgYXZhdGFyMiBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIyLnBuZydcbmltcG9ydCBhdmF0YXIzIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhcjMucG5nJ1xuXG5pbXBvcnQgVUlNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbCdcblxuY29uc3QgcGxheWVycyA9IFtcbiAgIHsgaWQ6IDEsIGxvZ2luOiAnU2VtZW4nLCByYXRpbmc6IDQwMCwgYXZhdGFyOiBhdmF0YXIsIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTIH0sXG4gICB7IGlkOiAyLCBsb2dpbjogJ1BldHInLCByYXRpbmc6IDIwMCwgYXZhdGFyOiBhdmF0YXIxLCBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPIH0sXG4gICB7XG4gICAgICBpZDogMixcbiAgICAgIGxvZ2luOiAnU2FyYXNmZ3Nnc2Znc2pmZztzZmdqc2ZnanM7JyxcbiAgICAgIHJhdGluZzogMjAwLFxuICAgICAgYXZhdGFyOiBhdmF0YXIyLFxuICAgICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG4gICB9LFxuICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBsb2dpbjogJ0FubmEnLFxuICAgICAgcmF0aW5nOiAxMDAsXG4gICAgICBhdmF0YXI6IGF2YXRhcjMsXG4gICAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgIGNvbnN0IG1vdmVPcmRlciA9IHBsYXllcnMubWFwKHBsYXllciA9PiBwbGF5ZXIuc3ltYm9sKVxuICAgY29uc3QgW1xuICAgICAgY2VsbHMsXG4gICAgICBjdXJyZW50TW92ZSxcbiAgICAgIG5leHRNb3ZlLFxuICAgICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgICAgd2lubmVyU2VxdWVuY2UsXG4gICAgICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcbiAgICAgIHdpbm5lclN5bWJvbCxcbiAgIF0gPSB1c2VHYW1lU3RhdGUobW92ZU9yZGVyKVxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIG1pbi1oLXNjcmVlbiBtaW4tdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICB7LyogPFVJTW9kYWwgLz4gKi99XG5cbiAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIG1heC13LVs2MTZweF0gXCI+XG4gICAgICAgICAgICA8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVycy5sZW5ndGh9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTcgfX0gLz5cbiAgICAgICAgICAgIDxHYW1lSW5mb1xuICAgICAgICAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjQgfX1cbiAgICAgICAgICAgICAgIHdpbm5lclN5bWJvbD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdhbWVGaWVsZFxuICAgICAgICAgICAgICAgY2VsbHM9e2NlbGxzfVxuICAgICAgICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgICAgICAgbmV4dE1vdmU9e25leHRNb3ZlfVxuICAgICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9XG4gICAgICAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XG4gICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICApXG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJHYW1lRmllbGQiLCJ1c2VHYW1lU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJhdmF0YXIiLCJhdmF0YXIxIiwiYXZhdGFyMiIsImF2YXRhcjMiLCJVSU1vZGFsIiwicGxheWVycyIsImlkIiwibG9naW4iLCJyYXRpbmciLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkhvbWVQYWdlIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpbm5lclN5bWJvbCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJwbGF5ZXJzQ291bnQiLCJsZW5ndGgiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});