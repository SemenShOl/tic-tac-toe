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

/***/ "./components/game/UIGame/PlayerInfo/PlayerInfo.jsx":
/*!**********************************************************!*\
  !*** ./components/game/UIGame/PlayerInfo/PlayerInfo.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerInfo.module.scss */ \"./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\");\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameSymbol */ \"./components/game/UIGame/GameSymbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Player */ \"./components/game/UIGame/Player/Player.jsx\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { profile, isRight, timer, isActive, onChangeActive } = param;\n    _s();\n    console.log(\"playeInfo renders\");\n    // const seconds = useTimerChange(\n    // \ttimer,\n    // \tisActive,\n    // \tonTimerChange,\n    // );\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(timer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isActive) return;\n        let currentSeconds = seconds;\n        const interID = setInterval(()=>{\n            currentSeconds = Math.max(seconds - 1, 0);\n            setSeconds(currentSeconds);\n            if (!currentSeconds) onChangeActive();\n        }, 1000);\n        return ()=>{\n            debugger;\n            console.log(currentSeconds);\n            clearInterval(interID);\n        };\n    }, [\n        isActive\n    ]);\n    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsStr = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    const getTimerColor = ()=>{\n        if (!isActive) {\n            if (!seconds) return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timeIsOver);\n            return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().stopped);\n        }\n        return isDanger ? (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().danger) : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gamerInfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().profileWithSymbol),\n                style: isRight ? {\n                    order: \"3\"\n                } : {},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Player_Player__WEBPACK_IMPORTED_MODULE_4__.Player, {\n                        login: profile.login,\n                        rating: profile.rating,\n                        avatar: profile.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().symbol),\n                        children: profile.symbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 70,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().separator),\n                style: isRight ? {\n                    order: \"2\"\n                } : {}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 89,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer), getTimerColor()),\n                style: isRight ? {\n                    order: \"1\"\n                } : {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        minutesStr,\n                        \":\",\n                        secondsStr\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                    lineNumber: 105,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 96,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n        lineNumber: 69,\n        columnNumber: 3\n    }, this);\n} // function useTimerChange(\n // \tinitialTimer,\n // \tisActive,\n // \tonTimerChange,\n // ) {\n // \tconst [seconds, setSeconds] =\n // \t\tuseState(initialTimer);\n // \tuseEffect(() => {\n // \t\tif (!isActive) return;\n // \t\tconst interID = setInterval(\n // \t\t\t() => {\n // \t\t\t\tsetSeconds(timer =>\n // \t\t\t\t\tMath.max(timer - 1, 0),\n // \t\t\t\t);\n // \t\t\t},\n // \t\t\t1000,\n // \t\t);\n // \t\tdebugger;\n // \t\tonTimerChange(seconds);\n // \t\tconsole.log(\n // \t\t\t\"active or seconds changes\",\n // \t\t);\n // \t\treturn () =>\n // \t\t\tclearInterval(interID);\n // \t}, [isActive, seconds]);\n // \treturn seconds;\n // }\n_s(PlayerInfo, \"2Zt0J4gpCkhKX89UUwefXstGqEc=\");\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZTtBQUMyQjtBQUNDO0FBQ2Y7QUFDYztBQUNLO0FBQ3hDLFNBQVNRLFdBQVcsS0FNMUI7UUFOMEIsRUFDMUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsY0FBYyxFQUNkLEdBTjBCOztJQU8xQkMsUUFBUUMsR0FBRyxDQUFDO0lBRVosa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FDMUJmLCtDQUFRQSxDQUFDUztJQUNWVixnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ1csVUFBVTtRQUNmLElBQUlNLGlCQUFpQkY7UUFDckIsTUFBTUcsVUFBVUMsWUFDZjtZQUNDRixpQkFBaUJHLEtBQUtDLEdBQUcsQ0FDeEJOLFVBQVUsR0FDVjtZQUVEQyxXQUFXQztZQUNYLElBQUksQ0FBQ0EsZ0JBQ0pMO1FBQ0YsR0FDQTtRQUdELE9BQU87WUFDTixRQUFTO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0c7WUFDWkssY0FBY0o7UUFDZjtJQUNELEdBQUc7UUFBQ1A7S0FBUztJQUViLE1BQU1ZLGFBQWFDLE9BQ2xCSixLQUFLSyxLQUFLLENBQUNWLFVBQVUsS0FDcEJXLFFBQVEsQ0FBQyxHQUFHO0lBQ2QsTUFBTUMsYUFBYUgsT0FDbEJKLEtBQUtLLEtBQUssQ0FBQ1YsVUFBVSxLQUNwQlcsUUFBUSxDQUFDLEdBQUc7SUFDZCxNQUFNRSxXQUFXYixXQUFXO0lBRTVCLE1BQU1jLGdCQUFnQjtRQUNyQixJQUFJLENBQUNsQixVQUFVO1lBQ2QsSUFBSSxDQUFDSSxTQUNKLE9BQU9iLDJFQUFhO1lBQ3JCLE9BQU9BLHdFQUFVO1FBQ2xCO1FBQ0EsT0FBTzBCLFdBQ0oxQix1RUFBUyxHQUNUO0lBQ0o7SUFFQSxxQkFDQyw4REFBQytCO1FBQUlDLFdBQVdoQywwRUFBWTs7MEJBQzNCLDhEQUFDK0I7Z0JBQ0FDLFdBQ0NoQyxrRkFBb0I7Z0JBRXJCbUMsT0FDQzVCLFVBQVU7b0JBQUU2QixPQUFPO2dCQUFJLElBQUksQ0FBQzs7a0NBRzdCLDhEQUFDakMsa0RBQU1BO3dCQUNOa0MsT0FBTy9CLFFBQVErQixLQUFLO3dCQUNwQkMsUUFBUWhDLFFBQVFnQyxNQUFNO3dCQUN0QkMsUUFBUWpDLFFBQVFpQyxNQUFNOzs7Ozs7a0NBRXZCLDhEQUFDdEMsbURBQVVBO3dCQUNWK0IsV0FBV2hDLHVFQUFTO2tDQUVuQk0sUUFBUWtDLE1BQU07Ozs7Ozs7Ozs7OzswQkFHakIsOERBQUNUO2dCQUNBQyxXQUFXaEMsMEVBQVk7Z0JBQ3ZCbUMsT0FDQzVCLFVBQVU7b0JBQUU2QixPQUFPO2dCQUFJLElBQUksQ0FBQzs7Ozs7OzBCQUk5Qiw4REFBQ0w7Z0JBQ0FDLFdBQVc5QixpREFBRUEsQ0FDWkYsc0VBQVEsRUFDUjJCO2dCQUVEUSxPQUNDNUIsVUFBVTtvQkFBRTZCLE9BQU87Z0JBQUksSUFBSSxDQUFDOzBCQUc3Qiw0RUFBQ007O3dCQUNDckI7d0JBQVc7d0JBQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkIsRUFFQSwyQkFBMkI7Q0FDM0IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IsU0FBUztDQUNULFFBQVE7Q0FDUixXQUFXO0NBQ1gsT0FBTztDQUNQLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxPQUFPO0NBQ1AsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLElBQUk7R0FqSVlwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3g/MWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuXHR1c2VFZmZlY3QsXHJcblx0dXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi4vR2FtZVN5bWJvbFwiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgdXNlTm93IH0gZnJvbSBcIi4vLi4vLi4vLi4vbGliL3RpbWVyc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVySW5mbyh7XHJcblx0cHJvZmlsZSxcclxuXHRpc1JpZ2h0LFxyXG5cdHRpbWVyLFxyXG5cdGlzQWN0aXZlLFxyXG5cdG9uQ2hhbmdlQWN0aXZlLFxyXG59KSB7XHJcblx0Y29uc29sZS5sb2coXCJwbGF5ZUluZm8gcmVuZGVyc1wiKTtcclxuXHJcblx0Ly8gY29uc3Qgc2Vjb25kcyA9IHVzZVRpbWVyQ2hhbmdlKFxyXG5cdC8vIFx0dGltZXIsXHJcblx0Ly8gXHRpc0FjdGl2ZSxcclxuXHQvLyBcdG9uVGltZXJDaGFuZ2UsXHJcblx0Ly8gKTtcclxuXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPVxyXG5cdFx0dXNlU3RhdGUodGltZXIpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIWlzQWN0aXZlKSByZXR1cm47XHJcblx0XHRsZXQgY3VycmVudFNlY29uZHMgPSBzZWNvbmRzO1xyXG5cdFx0Y29uc3QgaW50ZXJJRCA9IHNldEludGVydmFsKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudFNlY29uZHMgPSBNYXRoLm1heChcclxuXHRcdFx0XHRcdHNlY29uZHMgLSAxLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHNldFNlY29uZHMoY3VycmVudFNlY29uZHMpO1xyXG5cdFx0XHRcdGlmICghY3VycmVudFNlY29uZHMpXHJcblx0XHRcdFx0XHRvbkNoYW5nZUFjdGl2ZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDAwLFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0Y29uc29sZS5sb2coY3VycmVudFNlY29uZHMpO1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVySUQpO1xyXG5cdFx0fTtcclxuXHR9LCBbaXNBY3RpdmVdKTtcclxuXHJcblx0Y29uc3QgbWludXRlc1N0ciA9IFN0cmluZyhcclxuXHRcdE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSxcclxuXHQpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBzZWNvbmRzU3RyID0gU3RyaW5nKFxyXG5cdFx0TWF0aC5mbG9vcihzZWNvbmRzICUgNjApLFxyXG5cdCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8PSAxMDtcclxuXHJcblx0Y29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcclxuXHRcdGlmICghaXNBY3RpdmUpIHtcclxuXHRcdFx0aWYgKCFzZWNvbmRzKVxyXG5cdFx0XHRcdHJldHVybiBjbC50aW1lSXNPdmVyO1xyXG5cdFx0XHRyZXR1cm4gY2wuc3RvcHBlZDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0RhbmdlclxyXG5cdFx0XHQ/IGNsLmRhbmdlclxyXG5cdFx0XHQ6IFwiXCI7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbC5nYW1lckluZm99PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtcclxuXHRcdFx0XHRcdGNsLnByb2ZpbGVXaXRoU3ltYm9sXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN0eWxlPXtcclxuXHRcdFx0XHRcdGlzUmlnaHQgPyB7IG9yZGVyOiBcIjNcIiB9IDoge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8UGxheWVyXHJcblx0XHRcdFx0XHRsb2dpbj17cHJvZmlsZS5sb2dpbn1cclxuXHRcdFx0XHRcdHJhdGluZz17cHJvZmlsZS5yYXRpbmd9XHJcblx0XHRcdFx0XHRhdmF0YXI9e3Byb2ZpbGUuYXZhdGFyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEdhbWVTeW1ib2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2wuc3ltYm9sfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtwcm9maWxlLnN5bWJvbH1cclxuXHRcdFx0XHQ8L0dhbWVTeW1ib2w+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbC5zZXBhcmF0b3J9XHJcblx0XHRcdFx0c3R5bGU9e1xyXG5cdFx0XHRcdFx0aXNSaWdodCA/IHsgb3JkZXI6IFwiMlwiIH0gOiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PjwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oXHJcblx0XHRcdFx0XHRjbC50aW1lcixcclxuXHRcdFx0XHRcdGdldFRpbWVyQ29sb3IoKSxcclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHN0eWxlPXtcclxuXHRcdFx0XHRcdGlzUmlnaHQgPyB7IG9yZGVyOiBcIjFcIiB9IDoge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdHttaW51dGVzU3RyfTp7c2Vjb25kc1N0cn1cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdXNlVGltZXJDaGFuZ2UoXHJcbi8vIFx0aW5pdGlhbFRpbWVyLFxyXG4vLyBcdGlzQWN0aXZlLFxyXG4vLyBcdG9uVGltZXJDaGFuZ2UsXHJcbi8vICkge1xyXG4vLyBcdGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9XHJcbi8vIFx0XHR1c2VTdGF0ZShpbml0aWFsVGltZXIpO1xyXG4vLyBcdHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vIFx0XHRpZiAoIWlzQWN0aXZlKSByZXR1cm47XHJcbi8vIFx0XHRjb25zdCBpbnRlcklEID0gc2V0SW50ZXJ2YWwoXHJcbi8vIFx0XHRcdCgpID0+IHtcclxuLy8gXHRcdFx0XHRzZXRTZWNvbmRzKHRpbWVyID0+XHJcbi8vIFx0XHRcdFx0XHRNYXRoLm1heCh0aW1lciAtIDEsIDApLFxyXG4vLyBcdFx0XHRcdCk7XHJcbi8vIFx0XHRcdH0sXHJcbi8vIFx0XHRcdDEwMDAsXHJcbi8vIFx0XHQpO1xyXG4vLyBcdFx0ZGVidWdnZXI7XHJcbi8vIFx0XHRvblRpbWVyQ2hhbmdlKHNlY29uZHMpO1xyXG4vLyBcdFx0Y29uc29sZS5sb2coXHJcbi8vIFx0XHRcdFwiYWN0aXZlIG9yIHNlY29uZHMgY2hhbmdlc1wiLFxyXG4vLyBcdFx0KTtcclxuLy8gXHRcdHJldHVybiAoKSA9PlxyXG4vLyBcdFx0XHRjbGVhckludGVydmFsKGludGVySUQpO1xyXG4vLyBcdH0sIFtpc0FjdGl2ZSwgc2Vjb25kc10pO1xyXG4vLyBcdHJldHVybiBzZWNvbmRzO1xyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2wiLCJHYW1lU3ltYm9sIiwiY24iLCJQbGF5ZXIiLCJ1c2VOb3ciLCJQbGF5ZXJJbmZvIiwicHJvZmlsZSIsImlzUmlnaHQiLCJ0aW1lciIsImlzQWN0aXZlIiwib25DaGFuZ2VBY3RpdmUiLCJjb25zb2xlIiwibG9nIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJjdXJyZW50U2Vjb25kcyIsImludGVySUQiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJtYXgiLCJjbGVhckludGVydmFsIiwibWludXRlc1N0ciIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyIiwiaXNEYW5nZXIiLCJnZXRUaW1lckNvbG9yIiwidGltZUlzT3ZlciIsInN0b3BwZWQiLCJkYW5nZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lckluZm8iLCJwcm9maWxlV2l0aFN5bWJvbCIsInN0eWxlIiwib3JkZXIiLCJsb2dpbiIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsInNlcGFyYXRvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/UIGame/PlayerInfo/PlayerInfo.jsx\n"));

/***/ })

});