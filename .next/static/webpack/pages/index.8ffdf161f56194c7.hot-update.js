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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerInfo.module.scss */ \"./components/game/UIGame/PlayerInfo/PlayerInfo.module.scss\");\n/* harmony import */ var _PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _GameSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameSymbol */ \"./components/game/UIGame/GameSymbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Player */ \"./components/game/UIGame/Player/Player.jsx\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { profile, isRight, timer, isActive, onChangeActive, onTimeChange } = param;\n    _s();\n    console.log(\"playeInfo renders\");\n    // const seconds = useTimerChange(\n    // \ttimer,\n    // \tisActive,\n    // \tonTimerChange,\n    // );\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(timer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isActive) return;\n        let currentSeconds = seconds;\n        const interID = setInterval(()=>{\n            currentSeconds = Math.max(currentSeconds - 1, 0);\n            setSeconds(currentSeconds);\n            if (!currentSeconds) {\n                onChangeActive();\n                onTimeChange(currentSeconds);\n            }\n        }, 1000);\n        return ()=>{\n            debugger;\n            clearInterval(interID);\n        };\n    }, [\n        isActive\n    ]);\n    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsStr = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    const getTimerColor = ()=>{\n        if (!isActive) {\n            if (!seconds) return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timeIsOver);\n            return (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().stopped);\n        }\n        return isDanger ? (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().danger) : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gamerInfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().profileWithSymbol),\n                style: isRight ? {\n                    order: \"3\"\n                } : {},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Player_Player__WEBPACK_IMPORTED_MODULE_4__.Player, {\n                        login: profile.login,\n                        rating: profile.rating,\n                        avatar: profile.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameSymbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                        className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().symbol),\n                        children: profile.symbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().separator),\n                style: isRight ? {\n                    order: \"2\"\n                } : {}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 91,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_PlayerInfo_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer), getTimerColor()),\n                style: isRight ? {\n                    order: \"1\"\n                } : {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        minutesStr,\n                        \":\",\n                        secondsStr\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\game\\\\UIGame\\\\PlayerInfo\\\\PlayerInfo.jsx\",\n        lineNumber: 71,\n        columnNumber: 3\n    }, this);\n} // function useTimerChange(\n // \tinitialTimer,\n // \tisActive,\n // \tonTimerChange,\n // ) {\n // \tconst [seconds, setSeconds] =\n // \t\tuseState(initialTimer);\n // \tuseEffect(() => {\n // \t\tif (!isActive) return;\n // \t\tconst interID = setInterval(\n // \t\t\t() => {\n // \t\t\t\tsetSeconds(timer =>\n // \t\t\t\t\tMath.max(timer - 1, 0),\n // \t\t\t\t);\n // \t\t\t},\n // \t\t\t1000,\n // \t\t);\n // \t\tdebugger;\n // \t\tonTimerChange(seconds);\n // \t\tconsole.log(\n // \t\t\t\"active or seconds changes\",\n // \t\t);\n // \t\treturn () =>\n // \t\t\tclearInterval(interID);\n // \t}, [isActive, seconds]);\n // \treturn seconds;\n // }\n_s(PlayerInfo, \"2Zt0J4gpCkhKX89UUwefXstGqEc=\");\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZTtBQUMyQjtBQUNDO0FBQ2Y7QUFDYztBQUNLO0FBQ3hDLFNBQVNRLFdBQVcsS0FPMUI7UUFQMEIsRUFDMUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1osR0FQMEI7O0lBUTFCQyxRQUFRQyxHQUFHLENBQUM7SUFFWixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUMxQmhCLCtDQUFRQSxDQUFDUztJQUNWVixnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ1csVUFBVTtRQUNmLElBQUlPLGlCQUFpQkY7UUFDckIsTUFBTUcsVUFBVUMsWUFDZjtZQUNDRixpQkFBaUJHLEtBQUtDLEdBQUcsQ0FDeEJKLGlCQUFpQixHQUNqQjtZQUVERCxXQUFXQztZQUNYLElBQUksQ0FBQ0EsZ0JBQWdCO2dCQUNwQk47Z0JBQ0FDLGFBQWFLO1lBQ2Q7UUFDRCxHQUNBO1FBR0QsT0FBTztZQUNOLFFBQVM7WUFDVEssY0FBY0o7UUFDZjtJQUNELEdBQUc7UUFBQ1I7S0FBUztJQUViLE1BQU1hLGFBQWFDLE9BQ2xCSixLQUFLSyxLQUFLLENBQUNWLFVBQVUsS0FDcEJXLFFBQVEsQ0FBQyxHQUFHO0lBQ2QsTUFBTUMsYUFBYUgsT0FDbEJKLEtBQUtLLEtBQUssQ0FBQ1YsVUFBVSxLQUNwQlcsUUFBUSxDQUFDLEdBQUc7SUFDZCxNQUFNRSxXQUFXYixXQUFXO0lBRTVCLE1BQU1jLGdCQUFnQjtRQUNyQixJQUFJLENBQUNuQixVQUFVO1lBQ2QsSUFBSSxDQUFDSyxTQUNKLE9BQU9kLDJFQUFhO1lBQ3JCLE9BQU9BLHdFQUFVO1FBQ2xCO1FBQ0EsT0FBTzJCLFdBQ0ozQix1RUFBUyxHQUNUO0lBQ0o7SUFFQSxxQkFDQyw4REFBQ2dDO1FBQUlDLFdBQVdqQywwRUFBWTs7MEJBQzNCLDhEQUFDZ0M7Z0JBQ0FDLFdBQ0NqQyxrRkFBb0I7Z0JBRXJCb0MsT0FDQzdCLFVBQVU7b0JBQUU4QixPQUFPO2dCQUFJLElBQUksQ0FBQzs7a0NBRzdCLDhEQUFDbEMsa0RBQU1BO3dCQUNObUMsT0FBT2hDLFFBQVFnQyxLQUFLO3dCQUNwQkMsUUFBUWpDLFFBQVFpQyxNQUFNO3dCQUN0QkMsUUFBUWxDLFFBQVFrQyxNQUFNOzs7Ozs7a0NBRXZCLDhEQUFDdkMsbURBQVVBO3dCQUNWZ0MsV0FBV2pDLHVFQUFTO2tDQUVuQk0sUUFBUW1DLE1BQU07Ozs7Ozs7Ozs7OzswQkFHakIsOERBQUNUO2dCQUNBQyxXQUFXakMsMEVBQVk7Z0JBQ3ZCb0MsT0FDQzdCLFVBQVU7b0JBQUU4QixPQUFPO2dCQUFJLElBQUksQ0FBQzs7Ozs7OzBCQUk5Qiw4REFBQ0w7Z0JBQ0FDLFdBQVcvQixpREFBRUEsQ0FDWkYsc0VBQVEsRUFDUjRCO2dCQUVEUSxPQUNDN0IsVUFBVTtvQkFBRThCLE9BQU87Z0JBQUksSUFBSSxDQUFDOzBCQUc3Qiw0RUFBQ007O3dCQUNDckI7d0JBQVc7d0JBQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkIsRUFFQSwyQkFBMkI7Q0FDM0IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IsU0FBUztDQUNULFFBQVE7Q0FDUixXQUFXO0NBQ1gsT0FBTztDQUNQLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxPQUFPO0NBQ1AsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLElBQUk7R0FuSVlyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvVUlHYW1lL1BsYXllckluZm8vUGxheWVySW5mby5qc3g/MWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuXHR1c2VFZmZlY3QsXHJcblx0dXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi4vR2FtZVN5bWJvbFwiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgdXNlTm93IH0gZnJvbSBcIi4vLi4vLi4vLi4vbGliL3RpbWVyc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVySW5mbyh7XHJcblx0cHJvZmlsZSxcclxuXHRpc1JpZ2h0LFxyXG5cdHRpbWVyLFxyXG5cdGlzQWN0aXZlLFxyXG5cdG9uQ2hhbmdlQWN0aXZlLFxyXG5cdG9uVGltZUNoYW5nZSxcclxufSkge1xyXG5cdGNvbnNvbGUubG9nKFwicGxheWVJbmZvIHJlbmRlcnNcIik7XHJcblxyXG5cdC8vIGNvbnN0IHNlY29uZHMgPSB1c2VUaW1lckNoYW5nZShcclxuXHQvLyBcdHRpbWVyLFxyXG5cdC8vIFx0aXNBY3RpdmUsXHJcblx0Ly8gXHRvblRpbWVyQ2hhbmdlLFxyXG5cdC8vICk7XHJcblx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID1cclxuXHRcdHVzZVN0YXRlKHRpbWVyKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xyXG5cdFx0bGV0IGN1cnJlbnRTZWNvbmRzID0gc2Vjb25kcztcclxuXHRcdGNvbnN0IGludGVySUQgPSBzZXRJbnRlcnZhbChcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGN1cnJlbnRTZWNvbmRzID0gTWF0aC5tYXgoXHJcblx0XHRcdFx0XHRjdXJyZW50U2Vjb25kcyAtIDEsXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0c2V0U2Vjb25kcyhjdXJyZW50U2Vjb25kcyk7XHJcblx0XHRcdFx0aWYgKCFjdXJyZW50U2Vjb25kcykge1xyXG5cdFx0XHRcdFx0b25DaGFuZ2VBY3RpdmUoKTtcclxuXHRcdFx0XHRcdG9uVGltZUNoYW5nZShjdXJyZW50U2Vjb25kcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDAwLFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcklEKTtcclxuXHRcdH07XHJcblx0fSwgW2lzQWN0aXZlXSk7XHJcblxyXG5cdGNvbnN0IG1pbnV0ZXNTdHIgPSBTdHJpbmcoXHJcblx0XHRNYXRoLmZsb29yKHNlY29uZHMgLyA2MCksXHJcblx0KS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Y29uc3Qgc2Vjb25kc1N0ciA9IFN0cmluZyhcclxuXHRcdE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKSxcclxuXHQpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPD0gMTA7XHJcblxyXG5cdGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XHJcblx0XHRpZiAoIWlzQWN0aXZlKSB7XHJcblx0XHRcdGlmICghc2Vjb25kcylcclxuXHRcdFx0XHRyZXR1cm4gY2wudGltZUlzT3ZlcjtcclxuXHRcdFx0cmV0dXJuIGNsLnN0b3BwZWQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNEYW5nZXJcclxuXHRcdFx0PyBjbC5kYW5nZXJcclxuXHRcdFx0OiBcIlwiO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2wuZ2FtZXJJbmZvfT5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRjbC5wcm9maWxlV2l0aFN5bWJvbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdHlsZT17XHJcblx0XHRcdFx0XHRpc1JpZ2h0ID8geyBvcmRlcjogXCIzXCIgfSA6IHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFBsYXllclxyXG5cdFx0XHRcdFx0bG9naW49e3Byb2ZpbGUubG9naW59XHJcblx0XHRcdFx0XHRyYXRpbmc9e3Byb2ZpbGUucmF0aW5nfVxyXG5cdFx0XHRcdFx0YXZhdGFyPXtwcm9maWxlLmF2YXRhcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxHYW1lU3ltYm9sXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsLnN5bWJvbH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7cHJvZmlsZS5zeW1ib2x9XHJcblx0XHRcdFx0PC9HYW1lU3ltYm9sPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2wuc2VwYXJhdG9yfVxyXG5cdFx0XHRcdHN0eWxlPXtcclxuXHRcdFx0XHRcdGlzUmlnaHQgPyB7IG9yZGVyOiBcIjJcIiB9IDoge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdD48L2Rpdj5cclxuXHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKFxyXG5cdFx0XHRcdFx0Y2wudGltZXIsXHJcblx0XHRcdFx0XHRnZXRUaW1lckNvbG9yKCksXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRzdHlsZT17XHJcblx0XHRcdFx0XHRpc1JpZ2h0ID8geyBvcmRlcjogXCIxXCIgfSA6IHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHR7bWludXRlc1N0cn06e3NlY29uZHNTdHJ9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHVzZVRpbWVyQ2hhbmdlKFxyXG4vLyBcdGluaXRpYWxUaW1lcixcclxuLy8gXHRpc0FjdGl2ZSxcclxuLy8gXHRvblRpbWVyQ2hhbmdlLFxyXG4vLyApIHtcclxuLy8gXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPVxyXG4vLyBcdFx0dXNlU3RhdGUoaW5pdGlhbFRpbWVyKTtcclxuLy8gXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyBcdFx0aWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xyXG4vLyBcdFx0Y29uc3QgaW50ZXJJRCA9IHNldEludGVydmFsKFxyXG4vLyBcdFx0XHQoKSA9PiB7XHJcbi8vIFx0XHRcdFx0c2V0U2Vjb25kcyh0aW1lciA9PlxyXG4vLyBcdFx0XHRcdFx0TWF0aC5tYXgodGltZXIgLSAxLCAwKSxcclxuLy8gXHRcdFx0XHQpO1xyXG4vLyBcdFx0XHR9LFxyXG4vLyBcdFx0XHQxMDAwLFxyXG4vLyBcdFx0KTtcclxuLy8gXHRcdGRlYnVnZ2VyO1xyXG4vLyBcdFx0b25UaW1lckNoYW5nZShzZWNvbmRzKTtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFxyXG4vLyBcdFx0XHRcImFjdGl2ZSBvciBzZWNvbmRzIGNoYW5nZXNcIixcclxuLy8gXHRcdCk7XHJcbi8vIFx0XHRyZXR1cm4gKCkgPT5cclxuLy8gXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcklEKTtcclxuLy8gXHR9LCBbaXNBY3RpdmUsIHNlY29uZHNdKTtcclxuLy8gXHRyZXR1cm4gc2Vjb25kcztcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsIiwiR2FtZVN5bWJvbCIsImNuIiwiUGxheWVyIiwidXNlTm93IiwiUGxheWVySW5mbyIsInByb2ZpbGUiLCJpc1JpZ2h0IiwidGltZXIiLCJpc0FjdGl2ZSIsIm9uQ2hhbmdlQWN0aXZlIiwib25UaW1lQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiY3VycmVudFNlY29uZHMiLCJpbnRlcklEIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwibWF4IiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXNTdHIiLCJTdHJpbmciLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0ciIsImlzRGFuZ2VyIiwiZ2V0VGltZXJDb2xvciIsInRpbWVJc092ZXIiLCJzdG9wcGVkIiwiZGFuZ2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2FtZXJJbmZvIiwicHJvZmlsZVdpdGhTeW1ib2wiLCJzdHlsZSIsIm9yZGVyIiwibG9naW4iLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJzZXBhcmF0b3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/UIGame/PlayerInfo/PlayerInfo.jsx\n"));

/***/ })

});