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

/***/ "./components/lib/timers.js":
/*!**********************************!*\
  !*** ./components/lib/timers.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInterval: function() { return /* binding */ useInterval; },\n/* harmony export */   useNow: function() { return /* binding */ useNow; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction useNow(interval, enabled) {\n    _s();\n    const [now, setNow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!enabled) {\n            setNow(undefined);\n            return;\n        }\n        const interID = setInterval(()=>{\n            setNow(Date.now());\n        }, interval);\n        return ()=>{\n            clearInterval(interID);\n        };\n    }, [\n        interval,\n        enabled\n    ]);\n    return now;\n}\n_s(useNow, \"uo7S3D1rb/OC8+YXLf5VVNMSQho=\");\nfunction useInterval(interval, enabled, callback) {\n    _s1();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!enabled) {\n            return;\n        }\n        const interID = setInterval(()=>{\n            callback(Date.now());\n        }, interval);\n        return ()=>{\n            clearInterval(interID);\n        };\n    //TODO useCallback\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        interval,\n        enabled\n    ]);\n}\n_s1(useInterval, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpYi90aW1lcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHZTtBQUVSLFNBQVNFLE9BQ2ZDLFFBQVEsRUFDUkMsT0FBTzs7SUFFUCxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0wsK0NBQVFBO0lBRTlCRCxnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ0ksU0FBUztZQUNiRSxPQUFPQztZQUNQO1FBQ0Q7UUFFQSxNQUFNQyxVQUFVQyxZQUNmO1lBQ0NILE9BQU9JLEtBQUtMLEdBQUc7UUFDaEIsR0FDQUY7UUFHRCxPQUFPO1lBQ05RLGNBQWNIO1FBQ2Y7SUFDRCxHQUFHO1FBQUNMO1FBQVVDO0tBQVE7SUFFdEIsT0FBT0M7QUFDUjtHQXpCZ0JIO0FBMkJULFNBQVNVLFlBQ2ZULFFBQVEsRUFDUkMsT0FBTyxFQUNQUyxRQUFROztJQUVSYixnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ0ksU0FBUztZQUNiO1FBQ0Q7UUFFQSxNQUFNSSxVQUFVQyxZQUNmO1lBQ0NJLFNBQVNILEtBQUtMLEdBQUc7UUFDbEIsR0FDQUY7UUFHRCxPQUFPO1lBQ05RLGNBQWNIO1FBQ2Y7SUFDQSxrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3hELEdBQUc7UUFBQ0w7UUFBVUM7S0FBUTtBQUN2QjtJQXZCZ0JRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGliL3RpbWVycy5qcz8yZTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0dXNlRWZmZWN0LFxyXG5cdHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5vdyhcclxuXHRpbnRlcnZhbCxcclxuXHRlbmFibGVkLFxyXG4pIHtcclxuXHRjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghZW5hYmxlZCkge1xyXG5cdFx0XHRzZXROb3codW5kZWZpbmVkKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGludGVySUQgPSBzZXRJbnRlcnZhbChcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHNldE5vdyhEYXRlLm5vdygpKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aW50ZXJ2YWwsXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJJRCk7XHJcblx0XHR9O1xyXG5cdH0sIFtpbnRlcnZhbCwgZW5hYmxlZF0pO1xyXG5cclxuXHRyZXR1cm4gbm93O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoXHJcblx0aW50ZXJ2YWwsXHJcblx0ZW5hYmxlZCxcclxuXHRjYWxsYmFjayxcclxuKSB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghZW5hYmxlZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW50ZXJJRCA9IHNldEludGVydmFsKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Y2FsbGJhY2soRGF0ZS5ub3coKSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGludGVydmFsLFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVySUQpO1xyXG5cdFx0fTtcclxuXHRcdC8vVE9ETyB1c2VDYWxsYmFja1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtpbnRlcnZhbCwgZW5hYmxlZF0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU5vdyIsImludGVydmFsIiwiZW5hYmxlZCIsIm5vdyIsInNldE5vdyIsInVuZGVmaW5lZCIsImludGVySUQiLCJzZXRJbnRlcnZhbCIsIkRhdGUiLCJjbGVhckludGVydmFsIiwidXNlSW50ZXJ2YWwiLCJjYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lib/timers.js\n"));

/***/ })

});