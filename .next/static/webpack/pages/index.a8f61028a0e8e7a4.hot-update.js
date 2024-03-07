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

/***/ "./components/game/Game/Game.jsx":
/*!***************************************!*\
  !*** ./components/game/Game/Game.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/gameStateReducer */ \"./components/game/model/gameStateReducer.js\");\n/* harmony import */ var _model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../model/computeWinnerSymbol */ \"./components/game/model/computeWinnerSymbol.js\");\n/* harmony import */ var _model_getNextMove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/getNextMove */ \"./components/game/model/getNextMove.js\");\n/* harmony import */ var _model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/computePlayerTimer */ \"./components/game/model/computePlayerTimer.js\");\n/* harmony import */ var _model_computeModalInfojs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/computeModalInfojs */ \"./components/game/model/computeModalInfojs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player)=>player.symbol);\n    const [isStateUpdated, setIsStateUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.gameStateReducer, {\n        moveOrder,\n        defaultTimer: 3\n    }, _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.initGameState);\n    const winnerSymbol = (0,_model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__.computeWinnerSymbol)(gameState);\n    const nextMove = (0,_model_getNextMove__WEBPACK_IMPORTED_MODULE_6__.getNextMove)(gameState.currentMove, moveOrder, gameState.playerWhoCannotMove);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    const modalInfo = !!winnerSymbol;\n    const [initialGameState, setInitialGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gameState);\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((i, j)=>{\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.CELL_CLICK,\n            payload: {\n                index: [\n                    i,\n                    j\n                ]\n            }\n        });\n    }, []);\n    const handleTimeIsOver = ()=>{\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.TIME_IS_OVER\n        });\n    };\n    const handleTimeChange = (time, playerMove)=>{\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.TIME_CHANGE,\n            payload: {\n                time,\n                playerMove\n            }\n        });\n    };\n    const handleGameRestart = ()=>{\n        isStateUpdated((v)=>!v);\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.GET_INITIAL_GAME_STATE,\n            payload: {\n                initialGameState\n            }\n        });\n    };\n    //Не имеет смысла без регистрации\n    // const modalInfo = winnerSymbol\n    // \t? computeModalInfo(\n    // \t\t\tmoveOrder,\n    // \t\t\twinnerSymbol,\n    // \t\t\t30,\n    // \t\t\t20,\n    // \t  )\n    // \t: undefined;\n    // debugger\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            winnerLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameModal, {\n                isOpen: !!winnerLogin,\n                winnerLogin: winnerLogin,\n                onGameRestart: handleGameRestart,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>{\n                    const { timer } = (0,_model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__.computePlayerTimer)(player, gameState);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        timer: timer,\n                        isActive: false,\n                        modalInfo: modalInfo,\n                        isStateUpdated: isStateUpdated\n                    }, player.id, false, void 0, void 0);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 141,\n                columnNumber: 5\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>{\n                    const { timer, isActive } = (0,_model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__.computePlayerTimer)(player, gameState);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        timer: timer,\n                        isRight: index % 2,\n                        isActive: winnerSymbol ? false : isActive,\n                        onTimeIsOver: handleTimeIsOver,\n                        onTimeChange: handleTimeChange,\n                        isStateUpdated: gameState.isStateJustNowUpdated\n                    }, player.id, false, void 0, void 0);\n                }),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.MoveInfo, {\n                    currentSymbol: gameState.currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: gameState.cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                            i: i,\n                            j: j,\n                            isWinner: winnerSymbol === symbol,\n                            symbol: symbol,\n                            onClick: handleCellClick\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 188,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"n4curvs4xZyNDEwDUoRdrmqLews=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1IsR0FDQTVDLDZFQUFrQkEsQ0FDakJLLFFBQ0FJO29CQUVGLHFCQUNDLDhEQUFDdkIsK0NBQVVBO3dCQUVWd0QsU0FBU3JDO3dCQUNUb0MsT0FBT0E7d0JBQ1BFLFNBQ0NmLFFBQVE7d0JBRVRnQixVQUNDaEMsZUFDRyxRQUNBZ0M7d0JBRUpPLGNBQ0N0Qjt3QkFFRHVCLGNBQ0NyQjt3QkFFRHhCLGdCQUNDRSxVQUFVNEMscUJBQXFCO3VCQWxCM0JoRCxPQUFPd0MsRUFBRTtnQkFzQmpCO2dCQUVEUyx3QkFDQyw4REFBQy9ELDZDQUFRQTtvQkFDUmdFLGVBQ0M5QyxVQUFVSyxXQUFXO29CQUV0QjBDLFlBQ0MzQzs7Z0JBSUg0QyxXQUFXaEQsVUFBVWlELEtBQUssQ0FBQ3RELEdBQUcsQ0FDN0IsQ0FBQ3VELE1BQU1wQyxJQUNOb0MsS0FBS3ZELEdBQUcsQ0FDUCxDQUFDRSxRQUFRa0Isa0JBQ1IsOERBQUNoQyx5Q0FBSUE7NEJBQ0orQixHQUFHQTs0QkFDSEMsR0FBR0E7NEJBQ0hvQyxVQUNDaEQsaUJBQ0FOOzRCQUdEQSxRQUFRQTs0QkFDUnVELFNBQ0N2QzsyQkFISUMsSUFBSUM7Ozs7Ozs7O0FBWWxCO0dBcFBnQnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9HYW1lL0dhbWUuanN4P2E1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHR1c2VSZWR1Y2VyLFxyXG5cdFJlYWN0LFxyXG5cdHVzZUNhbGxiYWNrLFxyXG5cdHVzZUVmZmVjdCxcclxuXHR1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG5cdFBsYXllckluZm8sXHJcblx0QmFja0xpbmssXHJcblx0R2FtZUxheW91dCxcclxuXHRHYW1lSW5mbyxcclxuXHRHYW1lVGl0bGUsXHJcblx0TW92ZUluZm8sXHJcblx0Q2VsbCxcclxuXHRHYW1lTW9kYWwsXHJcbn0gZnJvbSBcIi4uL1VJR2FtZVwiXHJcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHtcclxuXHRHQU1FX1NUQVRFX0FDVElPTlMsXHJcblx0aW5pdEdhbWVTdGF0ZSxcclxuXHRnYW1lU3RhdGVSZWR1Y2VyLFxyXG59IGZyb20gXCIuLi9tb2RlbC9nYW1lU3RhdGVSZWR1Y2VyXCJcclxuaW1wb3J0IHsgY29tcHV0ZVdpbm5lclN5bWJvbCB9IGZyb20gXCIuLy4uL21vZGVsL2NvbXB1dGVXaW5uZXJTeW1ib2xcIlxyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gXCIuLi9tb2RlbC9nZXROZXh0TW92ZVwiXHJcbmltcG9ydCB7IGNvbXB1dGVQbGF5ZXJUaW1lciB9IGZyb20gXCIuLi9tb2RlbC9jb21wdXRlUGxheWVyVGltZXJcIlxyXG5pbXBvcnQgeyBjb21wdXRlTW9kYWxJbmZvIH0gZnJvbSBcIi4uL21vZGVsL2NvbXB1dGVNb2RhbEluZm9qc1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuXHRjb25zdCBtb3ZlT3JkZXIgPVxyXG5cdFx0UExBWUVSUy5tYXAoXHJcblx0XHRcdChwbGF5ZXIpID0+XHJcblx0XHRcdFx0cGxheWVyLnN5bWJvbFxyXG5cdFx0KVxyXG5cdGNvbnN0IFtcclxuXHRcdGlzU3RhdGVVcGRhdGVkLFxyXG5cdFx0c2V0SXNTdGF0ZVVwZGF0ZWQsXHJcblx0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtcclxuXHRcdGdhbWVTdGF0ZSxcclxuXHRcdGRpc3BhdGNoLFxyXG5cdF0gPSB1c2VSZWR1Y2VyKFxyXG5cdFx0Z2FtZVN0YXRlUmVkdWNlcixcclxuXHRcdHtcclxuXHRcdFx0bW92ZU9yZGVyLFxyXG5cdFx0XHRkZWZhdWx0VGltZXI6IDMsXHJcblx0XHR9LFxyXG5cdFx0aW5pdEdhbWVTdGF0ZVxyXG5cdClcclxuXHJcblx0Y29uc3Qgd2lubmVyU3ltYm9sID1cclxuXHRcdGNvbXB1dGVXaW5uZXJTeW1ib2woXHJcblx0XHRcdGdhbWVTdGF0ZVxyXG5cdFx0KVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZSA9XHJcblx0XHRnZXROZXh0TW92ZShcclxuXHRcdFx0Z2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdFx0XHRtb3ZlT3JkZXIsXHJcblx0XHRcdGdhbWVTdGF0ZS5wbGF5ZXJXaG9DYW5ub3RNb3ZlXHJcblx0XHQpXHJcblx0Y29uc3Qgd2lubmVyTG9naW4gPVxyXG5cdFx0UExBWUVSUy5maW5kKFxyXG5cdFx0XHQocGxheWVyKSA9PlxyXG5cdFx0XHRcdHBsYXllci5zeW1ib2wgPT09XHJcblx0XHRcdFx0d2lubmVyU3ltYm9sXHJcblx0XHQpPy5sb2dpblxyXG5cclxuXHRjb25zdCBtb2RhbEluZm8gPVxyXG5cdFx0ISF3aW5uZXJTeW1ib2xcclxuXHJcblx0Y29uc3QgW1xyXG5cdFx0aW5pdGlhbEdhbWVTdGF0ZSxcclxuXHRcdHNldEluaXRpYWxHYW1lU3RhdGUsXHJcblx0XSA9IHVzZVN0YXRlKGdhbWVTdGF0ZSlcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID1cclxuXHRcdHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoaSwgaikgPT4ge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6XHJcblx0XHRcdFx0XHRcdEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG5cdFx0XHRcdFx0cGF5bG9hZDoge1xyXG5cdFx0XHRcdFx0XHRpbmRleDogW2ksIGpdLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbXVxyXG5cdFx0KVxyXG5cclxuXHRjb25zdCBoYW5kbGVUaW1lSXNPdmVyID1cclxuXHRcdCgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6XHJcblx0XHRcdFx0XHRHQU1FX1NUQVRFX0FDVElPTlMuVElNRV9JU19PVkVSLFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVUaW1lQ2hhbmdlID1cclxuXHRcdChcclxuXHRcdFx0dGltZSxcclxuXHRcdFx0cGxheWVyTW92ZVxyXG5cdFx0KSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOlxyXG5cdFx0XHRcdFx0R0FNRV9TVEFURV9BQ1RJT05TLlRJTUVfQ0hBTkdFLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHtcclxuXHRcdFx0XHRcdHRpbWUsXHJcblx0XHRcdFx0XHRwbGF5ZXJNb3ZlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUdhbWVSZXN0YXJ0ID1cclxuXHRcdCgpID0+IHtcclxuXHRcdFx0aXNTdGF0ZVVwZGF0ZWQoXHJcblx0XHRcdFx0KHYpID0+ICF2XHJcblx0XHRcdClcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6XHJcblx0XHRcdFx0XHRHQU1FX1NUQVRFX0FDVElPTlMuR0VUX0lOSVRJQUxfR0FNRV9TVEFURSxcclxuXHRcdFx0XHRwYXlsb2FkOiB7XHJcblx0XHRcdFx0XHRpbml0aWFsR2FtZVN0YXRlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0Ly/QndC1INC40LzQtdC10YIg0YHQvNGL0YHQu9CwINCx0LXQtyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XHJcblx0Ly8gY29uc3QgbW9kYWxJbmZvID0gd2lubmVyU3ltYm9sXHJcblx0Ly8gXHQ/IGNvbXB1dGVNb2RhbEluZm8oXHJcblx0Ly8gXHRcdFx0bW92ZU9yZGVyLFxyXG5cdC8vIFx0XHRcdHdpbm5lclN5bWJvbCxcclxuXHQvLyBcdFx0XHQzMCxcclxuXHQvLyBcdFx0XHQyMCxcclxuXHQvLyBcdCAgKVxyXG5cdC8vIFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIGRlYnVnZ2VyXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHt3aW5uZXJMb2dpbiA/IChcclxuXHRcdFx0XHQ8R2FtZU1vZGFsXHJcblx0XHRcdFx0XHRpc09wZW49e1xyXG5cdFx0XHRcdFx0XHQhIXdpbm5lckxvZ2luXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR3aW5uZXJMb2dpbj17XHJcblx0XHRcdFx0XHRcdHdpbm5lckxvZ2luXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRvbkdhbWVSZXN0YXJ0PXtcclxuXHRcdFx0XHRcdFx0aGFuZGxlR2FtZVJlc3RhcnRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcChcclxuXHRcdFx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0XHRcdHBsYXllcixcclxuXHRcdFx0XHRcdFx0XHRpbmRleFxyXG5cdFx0XHRcdFx0XHQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB7IHRpbWVyIH0gPVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcHV0ZVBsYXllclRpbWVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdhbWVTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PFBsYXllckluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwbGF5ZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb2ZpbGU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllclxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzUmlnaHQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4ICUgMlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbWVyPXt0aW1lcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNBY3RpdmU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kYWxJbmZvPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RhbEluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc1N0YXRlVXBkYXRlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTdGF0ZVVwZGF0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHQ8R2FtZUxheW91dFxyXG5cdFx0XHRcdGJhY2tMaW5rPXtcclxuXHRcdFx0XHRcdDxCYWNrTGluayAvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnYW1lVGl0bGU9e1xyXG5cdFx0XHRcdFx0PEdhbWVUaXRsZSAvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnYW1lSW5mbz17XHJcblx0XHRcdFx0XHQ8R2FtZUluZm9cclxuXHRcdFx0XHRcdFx0cGxheWVyc0NvdW50PXsyfVxyXG5cdFx0XHRcdFx0XHR0aW1lTW9kZT17MX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHBsYXllcnNMaXN0PXtQTEFZRVJTLm1hcChcclxuXHRcdFx0XHRcdChcclxuXHRcdFx0XHRcdFx0cGxheWVyLFxyXG5cdFx0XHRcdFx0XHRpbmRleFxyXG5cdFx0XHRcdFx0KSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdFx0XHR0aW1lcixcclxuXHRcdFx0XHRcdFx0XHRpc0FjdGl2ZSxcclxuXHRcdFx0XHRcdFx0fSA9XHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZVBsYXllclRpbWVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2FtZVN0YXRlXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdDxQbGF5ZXJJbmZvXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3BsYXllci5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdHByb2ZpbGU9e3BsYXllcn1cclxuXHRcdFx0XHRcdFx0XHRcdHRpbWVyPXt0aW1lcn1cclxuXHRcdFx0XHRcdFx0XHRcdGlzUmlnaHQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCAlIDJcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlzQWN0aXZlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lubmVyU3ltYm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogaXNBY3RpdmVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uVGltZUlzT3Zlcj17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVRpbWVJc092ZXJcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uVGltZUNoYW5nZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVRpbWVDaGFuZ2VcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlzU3RhdGVVcGRhdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2FtZVN0YXRlLmlzU3RhdGVKdXN0Tm93VXBkYXRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdG1vdmVJbmZvPXtcclxuXHRcdFx0XHRcdDxNb3ZlSW5mb1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U3ltYm9sPXtcclxuXHRcdFx0XHRcdFx0XHRnYW1lU3RhdGUuY3VycmVudE1vdmVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRuZXh0U3ltYm9sPXtcclxuXHRcdFx0XHRcdFx0XHRuZXh0TW92ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnYW1lQ2VsbHM9e2dhbWVTdGF0ZS5jZWxscy5tYXAoXHJcblx0XHRcdFx0XHQobGluZSwgaSkgPT5cclxuXHRcdFx0XHRcdFx0bGluZS5tYXAoXHJcblx0XHRcdFx0XHRcdFx0KHN5bWJvbCwgaikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PENlbGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aT17aX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aj17an1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNXaW5uZXI9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbm5lclN5bWJvbCA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzeW1ib2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2kgKyBqfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzeW1ib2w9e3N5bWJvbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQ2VsbENsaWNrXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBsYXllckluZm8iLCJCYWNrTGluayIsIkdhbWVMYXlvdXQiLCJHYW1lSW5mbyIsIkdhbWVUaXRsZSIsIk1vdmVJbmZvIiwiQ2VsbCIsIkdhbWVNb2RhbCIsIlBMQVlFUlMiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJpbml0R2FtZVN0YXRlIiwiZ2FtZVN0YXRlUmVkdWNlciIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJnZXROZXh0TW92ZSIsImNvbXB1dGVQbGF5ZXJUaW1lciIsImNvbXB1dGVNb2RhbEluZm8iLCJHYW1lIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwic3ltYm9sIiwiaXNTdGF0ZVVwZGF0ZWQiLCJzZXRJc1N0YXRlVXBkYXRlZCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwiZGVmYXVsdFRpbWVyIiwid2lubmVyU3ltYm9sIiwibmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcldob0Nhbm5vdE1vdmUiLCJ3aW5uZXJMb2dpbiIsImZpbmQiLCJsb2dpbiIsIm1vZGFsSW5mbyIsImluaXRpYWxHYW1lU3RhdGUiLCJzZXRJbml0aWFsR2FtZVN0YXRlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaSIsImoiLCJ0eXBlIiwiQ0VMTF9DTElDSyIsInBheWxvYWQiLCJpbmRleCIsImhhbmRsZVRpbWVJc092ZXIiLCJUSU1FX0lTX09WRVIiLCJoYW5kbGVUaW1lQ2hhbmdlIiwidGltZSIsInBsYXllck1vdmUiLCJUSU1FX0NIQU5HRSIsImhhbmRsZUdhbWVSZXN0YXJ0IiwidiIsIkdFVF9JTklUSUFMX0dBTUVfU1RBVEUiLCJpc09wZW4iLCJvbkdhbWVSZXN0YXJ0IiwicGxheWVyc0xpc3QiLCJ0aW1lciIsInByb2ZpbGUiLCJpc1JpZ2h0IiwiaXNBY3RpdmUiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm9uVGltZUlzT3ZlciIsIm9uVGltZUNoYW5nZSIsImlzU3RhdGVKdXN0Tm93VXBkYXRlZCIsIm1vdmVJbmZvIiwiY3VycmVudFN5bWJvbCIsIm5leHRTeW1ib2wiLCJnYW1lQ2VsbHMiLCJjZWxscyIsImxpbmUiLCJpc1dpbm5lciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});