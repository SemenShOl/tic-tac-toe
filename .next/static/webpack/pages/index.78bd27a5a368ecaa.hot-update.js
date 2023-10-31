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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/constants */ \"./components/game/constants.js\");\n/* harmony import */ var _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/imgs/avatar.jpg */ \"./components/game/imgs/avatar.jpg\");\n/* harmony import */ var _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game/imgs/avatar1.png */ \"./components/game/imgs/avatar1.png\");\n/* harmony import */ var _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/imgs/avatar2.png */ \"./components/game/imgs/avatar2.png\");\n/* harmony import */ var _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/imgs/avatar3.png */ \"./components/game/imgs/avatar3.png\");\n/* harmony import */ var _components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/UIModal/UIModal */ \"./components/UI/UIModal/UIModal.jsx\");\n/* harmony import */ var _components_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UI/UIButton/UIButton */ \"./components/UI/UIButton/UIButton.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        login: \"Semen\",\n        rating: 400,\n        avatar: _components_game_imgs_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        login: \"Petr\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 2,\n        login: \"Sarasfgsgsfgsjfg;sfgjsfgjs;\",\n        rating: 200,\n        avatar: _components_game_imgs_avatar2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 2,\n        login: \"Anna\",\n        rating: 100,\n        avatar: _components_game_imgs_avatar3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _components_game_constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction HomePage() {\n    _s();\n    const moveOrder = players.map((player)=>player.symbol);\n    const [cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol] = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(moveOrder);\n    const isModalOpen = winnerSymbol;\n    const setOnModalClose = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                isOpen: winnerSymbol,\n                onClose: ()=>{\n                    isOpen = false;\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                        children: \"Игра завершена\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Main, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().winnerInfo),\n                            children: [\n                                \"Победитель: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().winnerName),\n                                    children: \"Paromovevg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 31\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 16\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIModal_UIModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Footer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                outlined: true,\n                                children: \"Вернуться\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_UIButton_UIButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: \"Играть снова\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 63,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: players.length,\n                        style: {\n                            marginBottom: 17\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        players: players,\n                        currentMove: currentMove,\n                        style: {\n                            marginBottom: 24\n                        },\n                        winnerSymbol: !!winnerSymbol,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        handlePlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 65,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, this);\n}\n_s(HomePage, \"2PcnWrb4jGFJGgnxKlPvKCq+yWg=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { children, header } = param;\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNpQztBQUN0QjtBQUNKO0FBQ0U7QUFDQTtBQUNBO0FBRUg7QUFDRztBQUNyQjtBQUNwQyxNQUFNYSxVQUFVO0lBQ2I7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQVNDLFFBQVE7UUFBS1YsUUFBUUEsd0VBQU1BO1FBQUVXLFFBQVFaLG9FQUFZQSxDQUFDYSxLQUFLO0lBQUM7SUFDakY7UUFBRUosSUFBSTtRQUFHQyxPQUFPO1FBQVFDLFFBQVE7UUFBS1YsUUFBUUMseUVBQU9BO1FBQUVVLFFBQVFaLG9FQUFZQSxDQUFDYyxJQUFJO0lBQUM7SUFDaEY7UUFDR0wsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlYsUUFBUUUseUVBQU9BO1FBQ2ZTLFFBQVFaLG9FQUFZQSxDQUFDZSxRQUFRO0lBQ2hDO0lBQ0E7UUFDR04sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUlYsUUFBUUcseUVBQU9BO1FBQ2ZRLFFBQVFaLG9FQUFZQSxDQUFDZ0IsTUFBTTtJQUM5QjtDQUNGO0FBRWMsU0FBU0M7O0lBQ3JCLE1BQU1DLFlBQVlWLFFBQVFXLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT1IsTUFBTTtJQUNyRCxNQUFNLENBQ0hTLE9BQ0FDLGFBQ0FDLFVBQ0FDLGlCQUNBQyxnQkFDQUMsc0JBQ0FDLGFBQ0YsR0FBRzVCLDhEQUFZQSxDQUFDbUI7SUFDakIsTUFBTVUsY0FBY0Q7SUFDcEIsTUFBTUUsa0JBQWtCLEtBQU87SUFDL0IscUJBQ0csOERBQUNDO1FBQUlDLFdBQVd4QixvRUFBVTs7MEJBQ3ZCLDhEQUFDRixzRUFBT0E7Z0JBQ0w0QixRQUFRTjtnQkFDUk8sU0FBUztvQkFDTkQsU0FBUztnQkFDWjs7a0NBQ0EsOERBQUM1Qiw2RUFBYztrQ0FBQzs7Ozs7O2tDQUNoQiw4REFBQ0EsMkVBQVk7a0NBQ1YsNEVBQUN5Qjs0QkFBSUMsV0FBV3hCLHVFQUFhOztnQ0FBRTs4Q0FDaEIsOERBQUM4QjtvQ0FBS04sV0FBV3hCLHVFQUFhOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEQsOERBQUNGLDZFQUFjOzswQ0FDWiw4REFBQ0Msd0VBQVFBO2dDQUFDa0MsUUFBUTswQ0FBQzs7Ozs7OzBDQUNuQiw4REFBQ2xDLHdFQUFRQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ1gsaUVBQU1BOzs7OzswQkFFUCw4REFBQzhDO2dCQUFLVixXQUFXeEIsaUVBQU87O2tDQUNyQiw4REFBQ1gsdURBQVNBO3dCQUFDOEMsY0FBY2xDLFFBQVFtQyxNQUFNO3dCQUFFQyxPQUFPOzRCQUFFQyxjQUFjO3dCQUFHOzs7Ozs7a0NBQ25FLDhEQUFDaEQsc0RBQVFBO3dCQUNOVyxTQUFTQTt3QkFDVGMsYUFBYUE7d0JBQ2JzQixPQUFPOzRCQUFFQyxjQUFjO3dCQUFHO3dCQUMxQmxCLGNBQWMsQ0FBQyxDQUFDQTt3QkFDaEJELHNCQUFzQkE7Ozs7OztrQ0FFekIsOERBQUM1Qix1REFBU0E7d0JBQ1B1QixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTt3QkFDaEJDLHNCQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztHQXREd0JUOztRQVVqQmxCLDBEQUFZQTs7O0tBVktrQjtBQXdEeEIsU0FBUzZCLGVBQWUsS0FBb0I7UUFBcEIsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUUsR0FBcEI7QUFBdUI7TUFBdENGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJ1xuaW1wb3J0IHsgR2FtZVRpdGxlLCBHYW1lSW5mbywgR2FtZUZpZWxkLCB1c2VHYW1lU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvY29uc3RhbnRzJ1xuaW1wb3J0IGF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIuanBnJ1xuaW1wb3J0IGF2YXRhcjEgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2ltZ3MvYXZhdGFyMS5wbmcnXG5pbXBvcnQgYXZhdGFyMiBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvaW1ncy9hdmF0YXIyLnBuZydcbmltcG9ydCBhdmF0YXIzIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9pbWdzL2F2YXRhcjMucG5nJ1xuXG5pbXBvcnQgVUlNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbCdcbmltcG9ydCBVSUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1VJL1VJQnV0dG9uL1VJQnV0dG9uJ1xuaW1wb3J0IGNsIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5jb25zdCBwbGF5ZXJzID0gW1xuICAgeyBpZDogMSwgbG9naW46ICdTZW1lbicsIHJhdGluZzogNDAwLCBhdmF0YXI6IGF2YXRhciwgc3ltYm9sOiBHQU1FX1NZTUJPTFMuQ1JPU1MgfSxcbiAgIHsgaWQ6IDIsIGxvZ2luOiAnUGV0cicsIHJhdGluZzogMjAwLCBhdmF0YXI6IGF2YXRhcjEsIHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk8gfSxcbiAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbG9naW46ICdTYXJhc2Znc2dzZmdzamZnO3NmZ2pzZmdqczsnLFxuICAgICAgcmF0aW5nOiAyMDAsXG4gICAgICBhdmF0YXI6IGF2YXRhcjIsXG4gICAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcbiAgIH0sXG4gICB7XG4gICAgICBpZDogMixcbiAgICAgIGxvZ2luOiAnQW5uYScsXG4gICAgICByYXRpbmc6IDEwMCxcbiAgICAgIGF2YXRhcjogYXZhdGFyMyxcbiAgICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcbiAgIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgY29uc3QgbW92ZU9yZGVyID0gcGxheWVycy5tYXAocGxheWVyID0+IHBsYXllci5zeW1ib2wpXG4gICBjb25zdCBbXG4gICAgICBjZWxscyxcbiAgICAgIGN1cnJlbnRNb3ZlLFxuICAgICAgbmV4dE1vdmUsXG4gICAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gICAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxuICAgICAgd2lubmVyU3ltYm9sLFxuICAgXSA9IHVzZUdhbWVTdGF0ZShtb3ZlT3JkZXIpXG4gICBjb25zdCBpc01vZGFsT3BlbiA9IHdpbm5lclN5bWJvbFxuICAgY29uc3Qgc2V0T25Nb2RhbENsb3NlID0gKCkgPT4ge31cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud3JhcHBlcn0+XG4gICAgICAgICA8VUlNb2RhbFxuICAgICAgICAgICAgaXNPcGVuPXt3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8VUlNb2RhbC5IZWFkZXI+0JjQs9GA0LAg0LfQsNCy0LXRgNGI0LXQvdCwPC9VSU1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxVSU1vZGFsLk1haW4+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud2lubmVySW5mb30+XG4gICAgICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjDogPHNwYW4gY2xhc3NOYW1lPXtjbC53aW5uZXJOYW1lfT5QYXJvbW92ZXZnPC9zcGFuPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1VJTW9kYWwuTWFpbj5cbiAgICAgICAgICAgIDxVSU1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgIDxVSUJ1dHRvbiBvdXRsaW5lZD7QktC10YDQvdGD0YLRjNGB0Y88L1VJQnV0dG9uPlxuICAgICAgICAgICAgICAgPFVJQnV0dG9uPtCY0LPRgNCw0YLRjCDRgdC90L7QstCwPC9VSUJ1dHRvbj5cbiAgICAgICAgICAgIDwvVUlNb2RhbC5Gb290ZXI+XG4gICAgICAgICA8L1VJTW9kYWw+XG5cbiAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbC5tYWlufT5cbiAgICAgICAgICAgIDxHYW1lVGl0bGUgcGxheWVyc0NvdW50PXtwbGF5ZXJzLmxlbmd0aH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNyB9fSAvPlxuICAgICAgICAgICAgPEdhbWVJbmZvXG4gICAgICAgICAgICAgICBwbGF5ZXJzPXtwbGF5ZXJzfVxuICAgICAgICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fVxuICAgICAgICAgICAgICAgd2lubmVyU3ltYm9sPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgICAgICBjZWxscz17Y2VsbHN9XG4gICAgICAgICAgICAgICBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XG4gICAgICAgICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XG4gICAgICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICAgICAgIHdpbm5lclNlcXVlbmNlPXt3aW5uZXJTZXF1ZW5jZX1cbiAgICAgICAgICAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2VMYXlvdXQoeyBjaGlsZHJlbiwgaGVhZGVyIH0pIHt9XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJHYW1lRmllbGQiLCJ1c2VHYW1lU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJhdmF0YXIiLCJhdmF0YXIxIiwiYXZhdGFyMiIsImF2YXRhcjMiLCJVSU1vZGFsIiwiVUlCdXR0b24iLCJjbCIsInBsYXllcnMiLCJpZCIsImxvZ2luIiwicmF0aW5nIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJIb21lUGFnZSIsIm1vdmVPcmRlciIsIm1hcCIsInBsYXllciIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJ3aW5uZXJTeW1ib2wiLCJpc01vZGFsT3BlbiIsInNldE9uTW9kYWxDbG9zZSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiTWFpbiIsIndpbm5lckluZm8iLCJzcGFuIiwid2lubmVyTmFtZSIsIkZvb3RlciIsIm91dGxpbmVkIiwibWFpbiIsInBsYXllcnNDb3VudCIsImxlbmd0aCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiSG9tZVBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});