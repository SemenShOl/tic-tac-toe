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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UIModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UIModal.module.scss */ \"./components/UI/UIModal/UIModal.module.scss\");\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../game/GameInfo/GameInfo */ \"./components/game/GameInfo/GameInfo.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/**\r\n *\r\n * @param {{\r\n * width: 'md' | 'full'\r\n * isOpen: boolean\r\n * onClose: ()=> void\r\n * }} param0\r\n * @returns\r\n */ function UIModal(param) {\n    let { children, width = \"md\", isOpen = false, onClose } = param;\n    if (!isOpen) return null;\n    const handleClick = (e)=>{\n        //   if (!e.target.getAttribute('data-id')) onClose()\n        console.log(e.target);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        onClick: handleClick,\n        \"data-id\": \"closeArea\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalContent), (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[width]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeButton),\n                    \"data-id\": \"closeArea\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ICCloseModal, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 23,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, this);\n}\n_c = UIModal;\nUIModal.Header = function UIModalHeader(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, this);\n};\nUIModal.Main = function UIModalMain(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 54,\n        columnNumber: 7\n    }, this);\n};\nUIModal.Footer = function UIModalFooter(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 62,\n        columnNumber: 7\n    }, this);\n};\nfunction ICCloseModal(className, style) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: className,\n        style: style,\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M0.781396 16.0001C0.626858 16.0001 0.475783 15.9543 0.347281 15.8685C0.218778 15.7826 0.118621 15.6606 0.0594776 15.5178C0.00033466 15.3751 -0.0151369 15.218 0.0150198 15.0664C0.0451766 14.9148 0.119607 14.7756 0.228896 14.6664L14.6664 0.228853C14.8129 0.0823209 15.0117 0 15.2189 0C15.4261 0 15.6249 0.0823209 15.7714 0.228853C15.9179 0.375385 16.0002 0.574125 16.0002 0.781353C16.0002 0.988581 15.9179 1.18732 15.7714 1.33385L1.3339 15.7714C1.26141 15.844 1.17528 15.9016 1.08047 15.9408C0.985653 15.9801 0.884016 16.0002 0.781396 16.0001Z\",\n                fill: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                lineNumber: 78,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n                fill: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                lineNumber: 82,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 70,\n        columnNumber: 7\n    }, this);\n}\n_c1 = ICCloseModal;\nvar _c, _c1;\n$RefreshReg$(_c, \"UIModal\");\n$RefreshReg$(_c1, \"ICCloseModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNtQjtBQUM5QjtBQUMzQjs7Ozs7Ozs7Q0FRQyxHQUNjLFNBQVNJLFFBQVEsS0FBbUQ7UUFBbkQsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLElBQUksRUFBRUMsU0FBUyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFuRDtJQUM3QixJQUFJLENBQUNELFFBQVEsT0FBTztJQUVwQixNQUFNRSxjQUFjQyxDQUFBQTtRQUNqQixxREFBcUQ7UUFDckRDLFFBQVFDLEdBQUcsQ0FBQ0YsRUFBRUcsTUFBTTtJQUN2QjtJQUNBLHFCQUNHLDhEQUFDQztRQUFJQyxXQUFXZCxxRUFBVTtRQUFFZ0IsU0FBU1I7UUFBYVMsV0FBUTtrQkFDdkQsNEVBQUNKO1lBQUlDLFdBQVdaLGlEQUFFQSxDQUFDRiwwRUFBZSxFQUFFQSw2REFBRSxDQUFDSyxNQUFNOzs4QkFDMUMsOERBQUNRO29CQUFJQyxXQUFXZCx5RUFBYztvQkFBRWlCLFdBQVE7OEJBQ3JDLDRFQUFDRzs7Ozs7Ozs7OztnQkFhSGhCOzs7Ozs7Ozs7Ozs7QUFJYjtLQTVCd0JEO0FBOEJ4QkEsUUFBUWtCLE1BQU0sR0FBRyxTQUFTQyxjQUFjLEtBQThCO1FBQTlCLEVBQUVsQixRQUFRLEVBQUVVLFNBQVMsRUFBRVMsS0FBSyxFQUFFLEdBQTlCO0lBQ3JDLHFCQUNHLDhEQUFDVjtRQUFJQyxXQUFXWixpREFBRUEsQ0FBQ1ksV0FBV2QsbUVBQVE7UUFBR3VCLE9BQU9BO2tCQUM1Q25COzs7Ozs7QUFHVjtBQUVBRCxRQUFRc0IsSUFBSSxHQUFHLFNBQVNDLFlBQVksS0FBOEI7UUFBOUIsRUFBRXRCLFFBQVEsRUFBRVUsU0FBUyxFQUFFUyxLQUFLLEVBQUUsR0FBOUI7SUFDakMscUJBQ0csOERBQUNWO1FBQUlDLFdBQVdaLGlEQUFFQSxDQUFDWSxXQUFXZCxrRUFBTztRQUFHdUIsT0FBT0E7a0JBQzNDbkI7Ozs7OztBQUdWO0FBRUFELFFBQVF5QixNQUFNLEdBQUcsU0FBU0MsY0FBYyxLQUE4QjtRQUE5QixFQUFFekIsUUFBUSxFQUFFVSxTQUFTLEVBQUVTLEtBQUssRUFBRSxHQUE5QjtJQUNyQyxxQkFDRyw4REFBQ1Y7UUFBSUMsV0FBV1osaURBQUVBLENBQUNZLFdBQVdkLG9FQUFTO1FBQUd1QixPQUFPQTtrQkFDN0NuQjs7Ozs7O0FBR1Y7QUFFQSxTQUFTZ0IsYUFBYU4sU0FBUyxFQUFFUyxLQUFLO0lBQ25DLHFCQUNHLDhEQUFDUTtRQUNFakIsV0FBV0E7UUFDWFMsT0FBT0E7UUFDUGxCLE9BQU07UUFDTjJCLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO1FBQ0xDLE9BQU07OzBCQUNOLDhEQUFDQztnQkFDRUMsR0FBRTtnQkFDRkgsTUFBSzs7Ozs7OzBCQUVSLDhEQUFDRTtnQkFDRUMsR0FBRTtnQkFDRkgsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWpCO01BcEJTZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3g/MDQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL1VJTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi8uLi8uLi9nYW1lL0dhbWVJbmZvL0dhbWVJbmZvJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7e1xyXG4gKiB3aWR0aDogJ21kJyB8ICdmdWxsJ1xyXG4gKiBpc09wZW46IGJvb2xlYW5cclxuICogb25DbG9zZTogKCk9PiB2b2lkXHJcbiAqIH19IHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUlNb2RhbCh7IGNoaWxkcmVuLCB3aWR0aCA9ICdtZCcsIGlzT3BlbiA9IGZhbHNlLCBvbkNsb3NlIH0pIHtcclxuICAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsXHJcblxyXG4gICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAvLyAgIGlmICghZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIG9uQ2xvc2UoKVxyXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgfVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wud3JhcHBlcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtaWQ9XCJjbG9zZUFyZWFcIj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsLm1vZGFsQ29udGVudCwgY2xbd2lkdGhdKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jbG9zZUJ1dHRvbn0gZGF0YS1pZD1cImNsb3NlQXJlYVwiPlxyXG4gICAgICAgICAgICAgICA8SUNDbG9zZU1vZGFsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLndpbm5lckluZm99PlxyXG4gICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjDogPHNwYW4gY2xhc3NOYW1lPXtjbC53aW5uZXJOYW1lfT5QYXJvbW92ZXZnPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8R2FtZUluZm9cclxuICAgICAgICAgICAgICAgcGxheWVycz17cGxheWVyc31cclxuICAgICAgICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG4gICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDI0IH19XHJcbiAgICAgICAgICAgICAgIHdpbm5lclN5bWJvbD17ISF3aW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgIGhhbmRsZVBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcblVJTW9kYWwuSGVhZGVyID0gZnVuY3Rpb24gVUlNb2RhbEhlYWRlcih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlIH0pIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgY2wudGl0bGUpfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcblVJTW9kYWwuTWFpbiA9IGZ1bmN0aW9uIFVJTW9kYWxNYWluKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUgfSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBjbC5tYWluKX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5VSU1vZGFsLkZvb3RlciA9IGZ1bmN0aW9uIFVJTW9kYWxGb290ZXIoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSB9KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsIGNsLmZvb3Rlcil9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gSUNDbG9zZU1vZGFsKGNsYXNzTmFtZSwgc3R5bGUpIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMC43ODEzOTYgMTYuMDAwMUMwLjYyNjg1OCAxNi4wMDAxIDAuNDc1NzgzIDE1Ljk1NDMgMC4zNDcyODEgMTUuODY4NUMwLjIxODc3OCAxNS43ODI2IDAuMTE4NjIxIDE1LjY2MDYgMC4wNTk0Nzc2IDE1LjUxNzhDMC4wMDAzMzQ2NiAxNS4zNzUxIC0wLjAxNTEzNjkgMTUuMjE4IDAuMDE1MDE5OCAxNS4wNjY0QzAuMDQ1MTc2NiAxNC45MTQ4IDAuMTE5NjA3IDE0Ljc3NTYgMC4yMjg4OTYgMTQuNjY2NEwxNC42NjY0IDAuMjI4ODUzQzE0LjgxMjkgMC4wODIzMjA5IDE1LjAxMTcgMCAxNS4yMTg5IDBDMTUuNDI2MSAwIDE1LjYyNDkgMC4wODIzMjA5IDE1Ljc3MTQgMC4yMjg4NTNDMTUuOTE3OSAwLjM3NTM4NSAxNi4wMDAyIDAuNTc0MTI1IDE2LjAwMDIgMC43ODEzNTNDMTYuMDAwMiAwLjk4ODU4MSAxNS45MTc5IDEuMTg3MzIgMTUuNzcxNCAxLjMzMzg1TDEuMzMzOSAxNS43NzE0QzEuMjYxNDEgMTUuODQ0IDEuMTc1MjggMTUuOTAxNiAxLjA4MDQ3IDE1Ljk0MDhDMC45ODU2NTMgMTUuOTgwMSAwLjg4NDAxNiAxNi4wMDAyIDAuNzgxMzk2IDE2LjAwMDFaXCJcclxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xNS4yMTg5IDE2LjAwMDFDMTUuMTE2MyAxNi4wMDAyIDE1LjAxNDYgMTUuOTgwMSAxNC45MTk4IDE1Ljk0MDhDMTQuODI1IDE1LjkwMTYgMTQuNzM4OSAxNS44NDQgMTQuNjY2NCAxNS43NzE0TDAuMjI4ODk2IDEuMzMzODVDMC4wODIzNjM5IDEuMTg3MzIgNC4zMDM2NGUtMDUgMC45ODg1ODEgNC4zMDM2NGUtMDUgMC43ODEzNTNDNC4zMDM2NGUtMDUgMC41NzQxMjUgMC4wODIzNjM5IDAuMzc1Mzg1IDAuMjI4ODk2IDAuMjI4ODUzQzAuMzc1NDI4IDAuMDgyMzIwOSAwLjU3NDE2OCAwIDAuNzgxMzk2IDBDMC45ODg2MjQgMCAxLjE4NzM2IDAuMDgyMzIwOSAxLjMzMzkgMC4yMjg4NTNMMTUuNzcxNCAxNC42NjY0QzE1Ljg4MDcgMTQuNzc1NiAxNS45NTUxIDE0LjkxNDggMTUuOTg1MyAxNS4wNjY0QzE2LjAxNTQgMTUuMjE4IDE2IDE1LjM3NTEgMTUuOTQwOCAxNS41MTc4QzE1Ljg4MTcgMTUuNjYwNiAxNS43ODE1IDE1Ljc4MjYgMTUuNjUzIDE1Ljg2ODVDMTUuNTI0NSAxNS45NTQzIDE1LjM3MzQgMTYuMDAwMSAxNS4yMTg5IDE2LjAwMDFaXCJcclxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbCIsIkdhbWVJbmZvIiwiY24iLCJVSU1vZGFsIiwiY2hpbGRyZW4iLCJ3aWR0aCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIm9uQ2xpY2siLCJkYXRhLWlkIiwibW9kYWxDb250ZW50IiwiY2xvc2VCdXR0b24iLCJJQ0Nsb3NlTW9kYWwiLCJIZWFkZXIiLCJVSU1vZGFsSGVhZGVyIiwic3R5bGUiLCJ0aXRsZSIsIk1haW4iLCJVSU1vZGFsTWFpbiIsIm1haW4iLCJGb290ZXIiLCJVSU1vZGFsRm9vdGVyIiwiZm9vdGVyIiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UI/UIModal/UIModal.jsx\n"));

/***/ })

});