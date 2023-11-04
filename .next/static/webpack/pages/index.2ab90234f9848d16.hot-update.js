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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIGame */ \"./components/game/UIGame/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/gameStateReducer */ \"./components/game/model/gameStateReducer.js\");\n/* harmony import */ var _model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../model/computeWinnerSymbol */ \"./components/game/model/computeWinnerSymbol.js\");\n/* harmony import */ var _model_getNextMove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/getNextMove */ \"./components/game/model/getNextMove.js\");\n/* harmony import */ var _model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/computePlayerTimer */ \"./components/game/model/computePlayerTimer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Game() {\n    var _PLAYERS_find;\n    _s();\n    const moveOrder = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player)=>player.symbol);\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.gameStateReducer, {\n        moveOrder,\n        defaultTimer: 3,\n        currentMoveStart: Date.now()\n    }, _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.initGameState);\n    const winnerSymbol = (0,_model_computeWinnerSymbol__WEBPACK_IMPORTED_MODULE_5__.computeWinnerSymbol)(gameState);\n    const nextMove = (0,_model_getNextMove__WEBPACK_IMPORTED_MODULE_6__.getNextMove)(gameState.currentMove, moveOrder, gameState.playerWhoCannotMove);\n    const winnerLogin = (_PLAYERS_find = _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.find((player)=>player.symbol === winnerSymbol)) === null || _PLAYERS_find === void 0 ? void 0 : _PLAYERS_find.login;\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((i, j)=>{\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.CELL_CLICK,\n            payload: {\n                index: [\n                    i,\n                    j\n                ],\n                now: Date.now()\n            }\n        });\n    }, []);\n    // const handleTimerChange =\n    // \tuseCallback(timer => {\n    // \t\tdispatch({\n    // \t\t\ttype:\n    // \t\t\t\tGAME_STATE_ACTIONS.TIMER_CHANGE,\n    // \t\t\tpayload: {\n    // \t\t\t\ttimer,\n    // \t\t\t},\n    // \t\t});\n    // \t}, []);\n    const handleChangeMove = ()=>{\n        debugger;\n        dispatch({\n            type: _model_gameStateReducer__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE_ACTIONS.PLAYER_ACTIVE_CHANGE\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameModal, {\n                winnerLogin: winnerLogin,\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>{\n                    const { timer, isActive } = (0,_model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__.computePlayerTimer)(player, gameState);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        isRight: index % 2,\n                        timer: timer,\n                        isActive: false\n                    }, player.id, false, void 0, void 0);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                    playersCount: 2,\n                    timeMode: 1\n                }, void 0, false, void 0, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_3__.PLAYERS.map((player, index)=>{\n                    const { timer, isActive } = (0,_model_computePlayerTimer__WEBPACK_IMPORTED_MODULE_7__.computePlayerTimer)(player, gameState);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                        profile: player,\n                        timer: timer,\n                        isRight: index % 2,\n                        isActive: winnerSymbol ? false : isActive,\n                        onChangeActive: handleChangeMove\n                    }, player.id, false, void 0, void 0);\n                }),\n                moveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.MoveInfo, {\n                    currentSymbol: gameState.currentMove,\n                    nextSymbol: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: gameState.cells.map((line, i)=>line.map((symbol, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UIGame__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                            i: i,\n                            j: j,\n                            isWinner: winnerSymbol === symbol,\n                            symbol: symbol,\n                            onClick: handleCellClick\n                        }, i + j, false, void 0, void 0)))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\Game\\\\Game.jsx\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"I3sn7gW1TC9lolr0iNlfPxm9w7Y=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDSjZCLEdBQUdBOzRCQUNIQyxHQUFHQTs0QkFDSHlCLFVBQ0NsQyxpQkFBaUJQOzRCQUdsQkEsUUFBUUE7NEJBQ1IwQyxTQUFTNUI7MkJBRkpDLElBQUlDOzs7Ozs7OztBQVNqQjtHQTVJZ0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvR2FtZS9HYW1lLmpzeD9hNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0dXNlUmVkdWNlcixcclxuXHRSZWFjdCxcclxuXHR1c2VDYWxsYmFjayxcclxuXHR1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0UGxheWVySW5mbyxcclxuXHRCYWNrTGluayxcclxuXHRHYW1lTGF5b3V0LFxyXG5cdEdhbWVJbmZvLFxyXG5cdEdhbWVUaXRsZSxcclxuXHRNb3ZlSW5mbyxcclxuXHRDZWxsLFxyXG5cdEdhbWVNb2RhbCxcclxufSBmcm9tIFwiLi4vVUlHYW1lXCI7XHJcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7XHJcblx0R0FNRV9TVEFURV9BQ1RJT05TLFxyXG5cdGluaXRHYW1lU3RhdGUsXHJcblx0Z2FtZVN0YXRlUmVkdWNlcixcclxufSBmcm9tIFwiLi4vbW9kZWwvZ2FtZVN0YXRlUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyU3ltYm9sIH0gZnJvbSBcIi4vLi4vbW9kZWwvY29tcHV0ZVdpbm5lclN5bWJvbFwiO1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gXCIuLi9tb2RlbC9nZXROZXh0TW92ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlUGxheWVyVGltZXIgfSBmcm9tIFwiLi4vbW9kZWwvY29tcHV0ZVBsYXllclRpbWVyXCI7XHJcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uLy4uL2xpYi90aW1lcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG5cdGNvbnN0IG1vdmVPcmRlciA9IFBMQVlFUlMubWFwKFxyXG5cdFx0cGxheWVyID0+IHBsYXllci5zeW1ib2wsXHJcblx0KTtcclxuXHJcblx0Y29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID1cclxuXHRcdHVzZVJlZHVjZXIoXHJcblx0XHRcdGdhbWVTdGF0ZVJlZHVjZXIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtb3ZlT3JkZXIsXHJcblx0XHRcdFx0ZGVmYXVsdFRpbWVyOiAzLFxyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlU3RhcnQ6IERhdGUubm93KCksXHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRHYW1lU3RhdGUsXHJcblx0XHQpO1xyXG5cdGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcblx0XHRjb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSk7XHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoXHJcblx0XHRnYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0XHRtb3ZlT3JkZXIsXHJcblx0XHRnYW1lU3RhdGUucGxheWVyV2hvQ2Fubm90TW92ZSxcclxuXHQpO1xyXG5cdGNvbnN0IHdpbm5lckxvZ2luID0gUExBWUVSUy5maW5kKFxyXG5cdFx0cGxheWVyID0+XHJcblx0XHRcdHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCxcclxuXHQpPy5sb2dpbjtcclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPVxyXG5cdFx0dXNlQ2FsbGJhY2soKGksIGopID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6XHJcblx0XHRcdFx0XHRHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcclxuXHRcdFx0XHRwYXlsb2FkOiB7XHJcblx0XHRcdFx0XHRpbmRleDogW2ksIGpdLFxyXG5cdFx0XHRcdFx0bm93OiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgW10pO1xyXG5cclxuXHQvLyBjb25zdCBoYW5kbGVUaW1lckNoYW5nZSA9XHJcblx0Ly8gXHR1c2VDYWxsYmFjayh0aW1lciA9PiB7XHJcblx0Ly8gXHRcdGRpc3BhdGNoKHtcclxuXHQvLyBcdFx0XHR0eXBlOlxyXG5cdC8vIFx0XHRcdFx0R0FNRV9TVEFURV9BQ1RJT05TLlRJTUVSX0NIQU5HRSxcclxuXHQvLyBcdFx0XHRwYXlsb2FkOiB7XHJcblx0Ly8gXHRcdFx0XHR0aW1lcixcclxuXHQvLyBcdFx0XHR9LFxyXG5cdC8vIFx0XHR9KTtcclxuXHQvLyBcdH0sIFtdKTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VNb3ZlID0gKCkgPT4ge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6XHJcblx0XHRcdFx0R0FNRV9TVEFURV9BQ1RJT05TLlBMQVlFUl9BQ1RJVkVfQ0hBTkdFLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEdhbWVNb2RhbFxyXG5cdFx0XHRcdHdpbm5lckxvZ2luPXt3aW5uZXJMb2dpbn1cclxuXHRcdFx0XHRwbGF5ZXJzTGlzdD17UExBWUVSUy5tYXAoXHJcblx0XHRcdFx0XHQocGxheWVyLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHRpbWVyLCBpc0FjdGl2ZSB9ID1cclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlUGxheWVyVGltZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRnYW1lU3RhdGUsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PFBsYXllckluZm9cclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0cHJvZmlsZT17cGxheWVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyfVxyXG5cdFx0XHRcdFx0XHRcdFx0dGltZXI9e3RpbWVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNBY3RpdmU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxHYW1lTGF5b3V0XHJcblx0XHRcdFx0YmFja0xpbms9ezxCYWNrTGluayAvPn1cclxuXHRcdFx0XHRnYW1lVGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcblx0XHRcdFx0Z2FtZUluZm89e1xyXG5cdFx0XHRcdFx0PEdhbWVJbmZvXHJcblx0XHRcdFx0XHRcdHBsYXllcnNDb3VudD17Mn1cclxuXHRcdFx0XHRcdFx0dGltZU1vZGU9ezF9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwbGF5ZXJzTGlzdD17UExBWUVSUy5tYXAoXHJcblx0XHRcdFx0XHQocGxheWVyLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHRpbWVyLCBpc0FjdGl2ZSB9ID1cclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlUGxheWVyVGltZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRnYW1lU3RhdGUsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8UGxheWVySW5mb1xyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwbGF5ZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9maWxlPXtwbGF5ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lcj17dGltZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRpc1JpZ2h0PXtpbmRleCAlIDJ9XHJcblx0XHRcdFx0XHRcdFx0XHRpc0FjdGl2ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpbm5lclN5bWJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGlzQWN0aXZlXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZUFjdGl2ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZU1vdmVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdG1vdmVJbmZvPXtcclxuXHRcdFx0XHRcdDxNb3ZlSW5mb1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U3ltYm9sPXtcclxuXHRcdFx0XHRcdFx0XHRnYW1lU3RhdGUuY3VycmVudE1vdmVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRuZXh0U3ltYm9sPXtuZXh0TW92ZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdhbWVDZWxscz17Z2FtZVN0YXRlLmNlbGxzLm1hcChcclxuXHRcdFx0XHRcdChsaW5lLCBpKSA9PlxyXG5cdFx0XHRcdFx0XHRsaW5lLm1hcCgoc3ltYm9sLCBqKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENlbGxcclxuXHRcdFx0XHRcdFx0XHRcdGk9e2l9XHJcblx0XHRcdFx0XHRcdFx0XHRqPXtqfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNXaW5uZXI9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5uZXJTeW1ib2wgPT09IHN5bWJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpICsgan1cclxuXHRcdFx0XHRcdFx0XHRcdHN5bWJvbD17c3ltYm9sfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2VsbENsaWNrfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCkpLFxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiUGxheWVySW5mbyIsIkJhY2tMaW5rIiwiR2FtZUxheW91dCIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwiTW92ZUluZm8iLCJDZWxsIiwiR2FtZU1vZGFsIiwiUExBWUVSUyIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsImluaXRHYW1lU3RhdGUiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiY29tcHV0ZVdpbm5lclN5bWJvbCIsImdldE5leHRNb3ZlIiwiY29tcHV0ZVBsYXllclRpbWVyIiwidXNlSW50ZXJ2YWwiLCJHYW1lIiwibW92ZU9yZGVyIiwibWFwIiwicGxheWVyIiwic3ltYm9sIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJkZWZhdWx0VGltZXIiLCJjdXJyZW50TW92ZVN0YXJ0IiwiRGF0ZSIsIm5vdyIsIndpbm5lclN5bWJvbCIsIm5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJwbGF5ZXJXaG9DYW5ub3RNb3ZlIiwid2lubmVyTG9naW4iLCJmaW5kIiwibG9naW4iLCJoYW5kbGVDZWxsQ2xpY2siLCJpIiwiaiIsInR5cGUiLCJDRUxMX0NMSUNLIiwicGF5bG9hZCIsImluZGV4IiwiaGFuZGxlQ2hhbmdlTW92ZSIsIlBMQVlFUl9BQ1RJVkVfQ0hBTkdFIiwicGxheWVyc0xpc3QiLCJ0aW1lciIsImlzQWN0aXZlIiwicHJvZmlsZSIsImlzUmlnaHQiLCJpZCIsImJhY2tMaW5rIiwiZ2FtZVRpdGxlIiwiZ2FtZUluZm8iLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsIm9uQ2hhbmdlQWN0aXZlIiwibW92ZUluZm8iLCJjdXJyZW50U3ltYm9sIiwibmV4dFN5bWJvbCIsImdhbWVDZWxscyIsImNlbGxzIiwibGluZSIsImlzV2lubmVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Game/Game.jsx\n"));

/***/ })

});