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

/***/ "./components/game/GameInfo/PlayerInfo/PlayerInfo.jsx":
/*!************************************************************!*\
  !*** ./components/game/GameInfo/PlayerInfo/PlayerInfo.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerInfo.module.scss */ \"./components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss\");\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../profile/profile */ \"./components/profile/profile.jsx\");\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../GameSymbol */ \"./components/game/GameSymbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { profile, currentMove, isRight, onPlayerTimeOver, winnerSymbol } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);\n    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsStr = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    const isTimerRunning = currentMove === profile.symbol && !winnerSymbol;\n    const getTimerColor = ()=>{\n        if (!isTimerRunning) {\n            if (!seconds) return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().timeIsOver);\n            return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().stopped);\n        }\n        return isDanger ? (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().danger) : \"\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interID = setInterval(()=>{\n                setSeconds((lastState)=>Math.max(lastState - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interID);\n                setSeconds((lastState)=>lastState ? lastState + 4 : 0);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!seconds) {\n            onPlayerTimeOver(currentMove);\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        seconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gamerInfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().profileWithSymbol),\n                style: isRight ? {\n                    order: \"3\"\n                } : {},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        login: profile.login,\n                        rating: profile.rating,\n                        avatar: profile.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().symbol),\n                        children: profile.symbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().separator),\n                style: isRight ? {\n                    order: \"2\"\n                } : {}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 53,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().timer), getTimerColor()),\n                style: isRight ? {\n                    order: \"1\"\n                } : {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        minutesStr,\n                        \":\",\n                        secondsStr\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 55,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\GameInfo\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, this);\n}\n_s(PlayerInfo, \"ShZvLRLEMQwm9SWepdIEgTqM9oE=\");\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvR2FtZUluZm8vUGxheWVySW5mby9QbGF5ZXJJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Q7QUFDVztBQUNMO0FBQ3BCO0FBQ1osU0FBU08sV0FBVyxLQU1sQztRQU5rQyxFQUNoQ0MsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsZ0JBQWdCLEVBQ2hCQyxZQUFZLEVBQ2QsR0FOa0M7O0lBT2hDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNYSxhQUFhQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDaEUsTUFBTUMsYUFBYUosT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ2hFLE1BQU1FLFdBQVdSLFdBQVc7SUFDNUIsTUFBTVMsaUJBQWlCYixnQkFBZ0JELFFBQVFlLE1BQU0sSUFBSSxDQUFDWDtJQUMxRCxNQUFNWSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDRixnQkFBZ0I7WUFDbEIsSUFBSSxDQUFDVCxTQUFTLE9BQU9WLDJFQUFhO1lBQ2xDLE9BQU9BLHdFQUFVO1FBQ3BCO1FBQ0EsT0FBT2tCLFdBQVdsQix1RUFBUyxHQUFHO0lBQ2pDO0lBQ0FGLGdEQUFTQSxDQUFDO1FBQ1AsSUFBSXFCLGdCQUFnQjtZQUNqQixNQUFNTSxVQUFVQyxZQUFZO2dCQUN6QmYsV0FBV2dCLENBQUFBLFlBQWFiLEtBQUtjLEdBQUcsQ0FBQ0QsWUFBWSxHQUFHO1lBQ25ELEdBQUc7WUFDSCxPQUFPO2dCQUNKRSxjQUFjSjtnQkFDZGQsV0FBV2dCLENBQUFBLFlBQWNBLFlBQVlBLFlBQVksSUFBSTtZQUN4RDtRQUNIO0lBQ0gsR0FBRztRQUFDUjtLQUFlO0lBRW5CckIsZ0RBQVNBLENBQUM7UUFDUCxJQUFJLENBQUNZLFNBQVM7WUFDWEYsaUJBQWlCRjtRQUNwQjtJQUNBLHVEQUF1RDtJQUMxRCxHQUFHO1FBQUNJO0tBQVE7SUFDWixxQkFDRyw4REFBQ29CO1FBQUlDLFdBQVcvQiwwRUFBWTs7MEJBQ3pCLDhEQUFDOEI7Z0JBQUlDLFdBQVcvQixrRkFBb0I7Z0JBQUVrQyxPQUFPM0IsVUFBVTtvQkFBRTRCLE9BQU87Z0JBQUksSUFBSSxDQUFDOztrQ0FDdEUsOERBQUNsQyxxREFBT0E7d0JBQ0xtQyxPQUFPL0IsUUFBUStCLEtBQUs7d0JBQ3BCQyxRQUFRaEMsUUFBUWdDLE1BQU07d0JBQ3RCQyxRQUFRakMsUUFBUWlDLE1BQU07Ozs7OztrQ0FFekIsOERBQUNwQyxtREFBVUE7d0JBQUM2QixXQUFXL0IsdUVBQVM7a0NBQUdLLFFBQVFlLE1BQU07Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUNVO2dCQUFJQyxXQUFXL0IsMEVBQVk7Z0JBQUVrQyxPQUFPM0IsVUFBVTtvQkFBRTRCLE9BQU87Z0JBQUksSUFBSSxDQUFDOzs7Ozs7MEJBRWpFLDhEQUFDTDtnQkFDRUMsV0FBVzVCLGlEQUFFQSxDQUFDSCxzRUFBUSxFQUFFcUI7Z0JBQ3hCYSxPQUFPM0IsVUFBVTtvQkFBRTRCLE9BQU87Z0JBQUksSUFBSSxDQUFDOzBCQUNuQyw0RUFBQ007O3dCQUNHN0I7d0JBQVc7d0JBQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0ExRHdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvR2FtZUluZm8vUGxheWVySW5mby9QbGF5ZXJJbmZvLmpzeD8yYmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL1BsYXllckluZm8ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLy4uLy4uLy4uL3Byb2ZpbGUvcHJvZmlsZSdcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vLi4vLi4vR2FtZVN5bWJvbCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllckluZm8oe1xyXG4gICBwcm9maWxlLFxyXG4gICBjdXJyZW50TW92ZSxcclxuICAgaXNSaWdodCxcclxuICAgb25QbGF5ZXJUaW1lT3ZlcixcclxuICAgd2lubmVyU3ltYm9sLFxyXG59KSB7XHJcbiAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYpXHJcbiAgIGNvbnN0IG1pbnV0ZXNTdHIgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCAnMCcpXHJcbiAgIGNvbnN0IHNlY29uZHNTdHIgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzICUgNjApKS5wYWRTdGFydCgyLCAnMCcpXHJcbiAgIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8PSAxMFxyXG4gICBjb25zdCBpc1RpbWVyUnVubmluZyA9IGN1cnJlbnRNb3ZlID09PSBwcm9maWxlLnN5bWJvbCAmJiAhd2lubmVyU3ltYm9sXHJcbiAgIGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNUaW1lclJ1bm5pbmcpIHtcclxuICAgICAgICAgaWYgKCFzZWNvbmRzKSByZXR1cm4gY2wudGltZUlzT3ZlclxyXG4gICAgICAgICByZXR1cm4gY2wuc3RvcHBlZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc0RhbmdlciA/IGNsLmRhbmdlciA6ICcnXHJcbiAgIH1cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XHJcbiAgICAgICAgIGNvbnN0IGludGVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMobGFzdFN0YXRlID0+IE1hdGgubWF4KGxhc3RTdGF0ZSAtIDEsIDApKVxyXG4gICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVySUQpXHJcbiAgICAgICAgICAgIHNldFNlY29uZHMobGFzdFN0YXRlID0+IChsYXN0U3RhdGUgPyBsYXN0U3RhdGUgKyA0IDogMCkpXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9LCBbaXNUaW1lclJ1bm5pbmddKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFzZWNvbmRzKSB7XHJcbiAgICAgICAgIG9uUGxheWVyVGltZU92ZXIoY3VycmVudE1vdmUpXHJcbiAgICAgIH1cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICB9LCBbc2Vjb25kc10pXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5nYW1lckluZm99PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wucHJvZmlsZVdpdGhTeW1ib2x9IHN0eWxlPXtpc1JpZ2h0ID8geyBvcmRlcjogJzMnIH0gOiB7fX0+XHJcbiAgICAgICAgICAgIDxQcm9maWxlXHJcbiAgICAgICAgICAgICAgIGxvZ2luPXtwcm9maWxlLmxvZ2lufVxyXG4gICAgICAgICAgICAgICByYXRpbmc9e3Byb2ZpbGUucmF0aW5nfVxyXG4gICAgICAgICAgICAgICBhdmF0YXI9e3Byb2ZpbGUuYXZhdGFyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8R2FtZVN5bWJvbCBjbGFzc05hbWU9e2NsLnN5bWJvbH0+e3Byb2ZpbGUuc3ltYm9sfTwvR2FtZVN5bWJvbD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5zZXBhcmF0b3J9IHN0eWxlPXtpc1JpZ2h0ID8geyBvcmRlcjogJzInIH0gOiB7fX0+PC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oY2wudGltZXIsIGdldFRpbWVyQ29sb3IoKSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXtpc1JpZ2h0ID8geyBvcmRlcjogJzEnIH0gOiB7fX0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICB7bWludXRlc1N0cn06e3NlY29uZHNTdHJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIlByb2ZpbGUiLCJHYW1lU3ltYm9sIiwiY24iLCJQbGF5ZXJJbmZvIiwicHJvZmlsZSIsImN1cnJlbnRNb3ZlIiwiaXNSaWdodCIsIm9uUGxheWVyVGltZU92ZXIiLCJ3aW5uZXJTeW1ib2wiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHIiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHIiLCJpc0RhbmdlciIsImlzVGltZXJSdW5uaW5nIiwic3ltYm9sIiwiZ2V0VGltZXJDb2xvciIsInRpbWVJc092ZXIiLCJzdG9wcGVkIiwiZGFuZ2VyIiwiaW50ZXJJRCIsInNldEludGVydmFsIiwibGFzdFN0YXRlIiwibWF4IiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImdhbWVySW5mbyIsInByb2ZpbGVXaXRoU3ltYm9sIiwic3R5bGUiLCJvcmRlciIsImxvZ2luIiwicmF0aW5nIiwiYXZhdGFyIiwic2VwYXJhdG9yIiwidGltZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/GameInfo/PlayerInfo/PlayerInfo.jsx\n"));

/***/ })

});