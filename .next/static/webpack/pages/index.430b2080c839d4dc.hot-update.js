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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UIModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UIModal.module.scss */ \"./components/UI/UIModal/UIModal.module.scss\");\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ \"./components/icons/index.js\");\n/* harmony import */ var _game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../game/GameInfo/GameInfo */ \"./components/game/GameInfo/GameInfo.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/**\r\n *\r\n * @param {{\r\n * width: 'md' | 'full'\r\n * }} param0\r\n * @returns\r\n */ function UIModal(param) {\n    let { players, currentMove, winnerSymbol, handlePlayerTimeOver, width = \"md  \" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalContent), (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[width]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ICCloseModal, {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeButton)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Игра завершена\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerInfo),\n                    children: [\n                        \"Победитель: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().winnerName),\n                            children: \"Paromovevg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    players: players,\n                    currentMove: currentMove,\n                    style: {\n                        marginBottom: 24\n                    },\n                    winnerSymbol: !!winnerSymbol,\n                    handlePlayerTimeOver: handlePlayerTimeOver\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c = UIModal;\nfunction ICCloseModal(className, style) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: className,\n        style: style,\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n            fill: \"white\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 54,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, this);\n}\n_c1 = ICCloseModal;\nvar _c, _c1;\n$RefreshReg$(_c, \"UIModal\");\n$RefreshReg$(_c1, \"ICCloseModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDRDtBQUNvQjtBQUM5QjtBQUMzQjs7Ozs7O0NBTUMsR0FDYyxTQUFTSyxRQUFRLEtBTS9CO1FBTitCLEVBQzdCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxvQkFBb0IsRUFDcEJDLFFBQVEsTUFBTSxFQUNoQixHQU4rQjtJQU83QixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBV1gscUVBQVU7a0JBQ3ZCLDRFQUFDVTtZQUFJQyxXQUFXUixpREFBRUEsQ0FBQ0gsMEVBQWUsRUFBRUEsNkRBQUUsQ0FBQ1MsTUFBTTs7OEJBQzFDLDhEQUFDSztvQkFBYUgsV0FBV1gseUVBQWM7Ozs7Ozs4QkFDdkMsOERBQUNnQjtvQkFBR0wsV0FBV1gsbUVBQVE7OEJBQUU7Ozs7Ozs4QkFDekIsOERBQUNVO29CQUFJQyxXQUFXWCx3RUFBYTs7d0JBQUU7c0NBQ2hCLDhEQUFDbUI7NEJBQUtSLFdBQVdYLHdFQUFhO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRS9DLDhEQUFDRSw2REFBUUE7b0JBQ05HLFNBQVNBO29CQUNUQyxhQUFhQTtvQkFDYmUsT0FBTzt3QkFBRUMsY0FBYztvQkFBRztvQkFDMUJmLGNBQWMsQ0FBQyxDQUFDQTtvQkFDaEJDLHNCQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JDO0tBekJ3Qko7QUEyQnhCLFNBQVNVLGFBQWFILFNBQVMsRUFBRVUsS0FBSztJQUNuQyxxQkFDRyw4REFBQ0U7UUFDRVosV0FBV0E7UUFDWFUsT0FBT0E7UUFDUFosT0FBTTtRQUNOZSxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxPQUFNO2tCQUtOLDRFQUFDQztZQUNFQyxHQUFFO1lBQ0ZILE1BQUs7Ozs7Ozs7Ozs7O0FBSWpCO01BcEJTWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3g/MDQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL1VJTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IElDQ3Jvc3MgfSBmcm9tICcuLi8uLi9pY29ucydcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuLy4uLy4uL2dhbWUvR2FtZUluZm8vR2FtZUluZm8nXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG4vKipcclxuICpcclxuICogQHBhcmFtIHt7XHJcbiAqIHdpZHRoOiAnbWQnIHwgJ2Z1bGwnXHJcbiAqIH19IHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUlNb2RhbCh7XHJcbiAgIHBsYXllcnMsXHJcbiAgIGN1cnJlbnRNb3ZlLFxyXG4gICB3aW5uZXJTeW1ib2wsXHJcbiAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG4gICB3aWR0aCA9ICdtZCAgJyxcclxufSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud3JhcHBlcn0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbC5tb2RhbENvbnRlbnQsIGNsW3dpZHRoXSl9PlxyXG4gICAgICAgICAgICA8SUNDbG9zZU1vZGFsIGNsYXNzTmFtZT17Y2wuY2xvc2VCdXR0b259PjwvSUNDbG9zZU1vZGFsPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbC50aXRsZX0+0JjQs9GA0LAg0LfQsNCy0LXRgNGI0LXQvdCwPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLndpbm5lckluZm99PlxyXG4gICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjDogPHNwYW4gY2xhc3NOYW1lPXtjbC53aW5uZXJOYW1lfT5QYXJvbW92ZXZnPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdhbWVJbmZvXHJcbiAgICAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fVxyXG4gICAgICAgICAgICAgICB3aW5uZXJTeW1ib2w9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJQ0Nsb3NlTW9kYWwoY2xhc3NOYW1lLCBzdHlsZSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgey8qIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMC43ODEzOTYgMTYuMDAwMUMwLjYyNjg1OCAxNi4wMDAxIDAuNDc1NzgzIDE1Ljk1NDMgMC4zNDcyODEgMTUuODY4NUMwLjIxODc3OCAxNS43ODI2IDAuMTE4NjIxIDE1LjY2MDYgMC4wNTk0Nzc2IDE1LjUxNzhDMC4wMDAzMzQ2NiAxNS4zNzUxIC0wLjAxNTEzNjkgMTUuMjE4IDAuMDE1MDE5OCAxNS4wNjY0QzAuMDQ1MTc2NiAxNC45MTQ4IDAuMTE5NjA3IDE0Ljc3NTYgMC4yMjg4OTYgMTQuNjY2NEwxNC42NjY0IDAuMjI4ODUzQzE0LjgxMjkgMC4wODIzMjA5IDE1LjAxMTcgMCAxNS4yMTg5IDBDMTUuNDI2MSAwIDE1LjYyNDkgMC4wODIzMjA5IDE1Ljc3MTQgMC4yMjg4NTNDMTUuOTE3OSAwLjM3NTM4NSAxNi4wMDAyIDAuNTc0MTI1IDE2LjAwMDIgMC43ODEzNTNDMTYuMDAwMiAwLjk4ODU4MSAxNS45MTc5IDEuMTg3MzIgMTUuNzcxNCAxLjMzMzg1TDEuMzMzOSAxNS43NzE0QzEuMjYxNDEgMTUuODQ0IDEuMTc1MjggMTUuOTAxNiAxLjA4MDQ3IDE1Ljk0MDhDMC45ODU2NTMgMTUuOTgwMSAwLjg4NDAxNiAxNi4wMDAyIDAuNzgxMzk2IDE2LjAwMDFaXCJcclxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTUuMjE4OSAxNi4wMDAxQzE1LjExNjMgMTYuMDAwMiAxNS4wMTQ2IDE1Ljk4MDEgMTQuOTE5OCAxNS45NDA4QzE0LjgyNSAxNS45MDE2IDE0LjczODkgMTUuODQ0IDE0LjY2NjQgMTUuNzcxNEwwLjIyODg5NiAxLjMzMzg1QzAuMDgyMzYzOSAxLjE4NzMyIDQuMzAzNjRlLTA1IDAuOTg4NTgxIDQuMzAzNjRlLTA1IDAuNzgxMzUzQzQuMzAzNjRlLTA1IDAuNTc0MTI1IDAuMDgyMzYzOSAwLjM3NTM4NSAwLjIyODg5NiAwLjIyODg1M0MwLjM3NTQyOCAwLjA4MjMyMDkgMC41NzQxNjggMCAwLjc4MTM5NiAwQzAuOTg4NjI0IDAgMS4xODczNiAwLjA4MjMyMDkgMS4zMzM5IDAuMjI4ODUzTDE1Ljc3MTQgMTQuNjY2NEMxNS44ODA3IDE0Ljc3NTYgMTUuOTU1MSAxNC45MTQ4IDE1Ljk4NTMgMTUuMDY2NEMxNi4wMTU0IDE1LjIxOCAxNiAxNS4zNzUxIDE1Ljk0MDggMTUuNTE3OEMxNS44ODE3IDE1LjY2MDYgMTUuNzgxNSAxNS43ODI2IDE1LjY1MyAxNS44Njg1QzE1LjUyNDUgMTUuOTU0MyAxNS4zNzM0IDE2LjAwMDEgMTUuMjE4OSAxNi4wMDAxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2wiLCJJQ0Nyb3NzIiwiR2FtZUluZm8iLCJjbiIsIlVJTW9kYWwiLCJwbGF5ZXJzIiwiY3VycmVudE1vdmUiLCJ3aW5uZXJTeW1ib2wiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIm1vZGFsQ29udGVudCIsIklDQ2xvc2VNb2RhbCIsImNsb3NlQnV0dG9uIiwiaDIiLCJ0aXRsZSIsIndpbm5lckluZm8iLCJzcGFuIiwid2lubmVyTmFtZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UI/UIModal/UIModal.jsx\n"));

/***/ })

});