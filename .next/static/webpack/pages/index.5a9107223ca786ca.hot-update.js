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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UIModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UIModal.module.scss */ \"./components/UI/UIModal/UIModal.module.scss\");\n/* harmony import */ var _UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _game_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../game/GameInfo/GameInfo */ \"./components/game/GameInfo/GameInfo.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/**\r\n *\r\n * @param {{\r\n * width: 'md' | 'full'\r\n * isOpen: boolean\r\n * onClose: ()=> void\r\n * }} param0\r\n * @returns\r\n */ function UIModal(param) {\n    let { children, width = \"md\", isOpen = false, onClose } = param;\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        onClick: (e)=>{\n            if (!e.target.getAttribute(\"data-id\")) onClose();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalContent), (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[width]),\n            \"data-id\": \"modal\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n}\n_c = UIModal;\nUIModal.Header = function UIModalHeader(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, this);\n};\nUIModal.Main = function UIModalMain(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, this);\n};\nUIModal.Footer = function UIModalFooter(param) {\n    let { children, className, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_UIModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer)),\n        style: style,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 60,\n        columnNumber: 7\n    }, this);\n};\nfunction ICCloseModal(className, style) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: className,\n        style: style,\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M0.781396 16.0001C0.626858 16.0001 0.475783 15.9543 0.347281 15.8685C0.218778 15.7826 0.118621 15.6606 0.0594776 15.5178C0.00033466 15.3751 -0.0151369 15.218 0.0150198 15.0664C0.0451766 14.9148 0.119607 14.7756 0.228896 14.6664L14.6664 0.228853C14.8129 0.0823209 15.0117 0 15.2189 0C15.4261 0 15.6249 0.0823209 15.7714 0.228853C15.9179 0.375385 16.0002 0.574125 16.0002 0.781353C16.0002 0.988581 15.9179 1.18732 15.7714 1.33385L1.3339 15.7714C1.26141 15.844 1.17528 15.9016 1.08047 15.9408C0.985653 15.9801 0.884016 16.0002 0.781396 16.0001Z\",\n                fill: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                lineNumber: 76,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n                fill: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n                lineNumber: 80,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HONOR\\\\Desktop\\\\Programming\\\\JS Projects\\\\react\\\\tic-tac-toe-online\\\\components\\\\UI\\\\UIModal\\\\UIModal.jsx\",\n        lineNumber: 68,\n        columnNumber: 7\n    }, this);\n}\n_c1 = ICCloseModal;\nvar _c, _c1;\n$RefreshReg$(_c, \"UIModal\");\n$RefreshReg$(_c1, \"ICCloseModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNtQjtBQUM5QjtBQUMzQjs7Ozs7Ozs7Q0FRQyxHQUNjLFNBQVNJLFFBQVEsS0FBbUQ7UUFBbkQsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLElBQUksRUFBRUMsU0FBUyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFuRDtJQUM3QixJQUFJLENBQUNELFFBQVEsT0FBTztJQUNwQixxQkFDRyw4REFBQ0U7UUFDRUMsV0FBV1QscUVBQVU7UUFDckJXLFNBQVNDLENBQUFBO1lBQ04sSUFBSSxDQUFDQSxFQUFFQyxNQUFNLENBQUNDLFlBQVksQ0FBQyxZQUFZUDtRQUMxQztrQkFDQSw0RUFBQ0M7WUFBSUMsV0FBV1AsaURBQUVBLENBQUNGLDBFQUFlLEVBQUVBLDZEQUFFLENBQUNLLE1BQU07WUFBR1csV0FBUTtzQkFjcERaOzs7Ozs7Ozs7OztBQUliO0tBMUJ3QkQ7QUE0QnhCQSxRQUFRYyxNQUFNLEdBQUcsU0FBU0MsY0FBYyxLQUE4QjtRQUE5QixFQUFFZCxRQUFRLEVBQUVLLFNBQVMsRUFBRVUsS0FBSyxFQUFFLEdBQTlCO0lBQ3JDLHFCQUNHLDhEQUFDWDtRQUFJQyxXQUFXUCxpREFBRUEsQ0FBQ08sV0FBV1QsbUVBQVE7UUFBR21CLE9BQU9BO2tCQUM1Q2Y7Ozs7OztBQUdWO0FBRUFELFFBQVFrQixJQUFJLEdBQUcsU0FBU0MsWUFBWSxLQUE4QjtRQUE5QixFQUFFbEIsUUFBUSxFQUFFSyxTQUFTLEVBQUVVLEtBQUssRUFBRSxHQUE5QjtJQUNqQyxxQkFDRyw4REFBQ1g7UUFBSUMsV0FBV1AsaURBQUVBLENBQUNPLFdBQVdULGtFQUFPO1FBQUdtQixPQUFPQTtrQkFDM0NmOzs7Ozs7QUFHVjtBQUVBRCxRQUFRcUIsTUFBTSxHQUFHLFNBQVNDLGNBQWMsS0FBOEI7UUFBOUIsRUFBRXJCLFFBQVEsRUFBRUssU0FBUyxFQUFFVSxLQUFLLEVBQUUsR0FBOUI7SUFDckMscUJBQ0csOERBQUNYO1FBQUlDLFdBQVdQLGlEQUFFQSxDQUFDTyxXQUFXVCxvRUFBUztRQUFHbUIsT0FBT0E7a0JBQzdDZjs7Ozs7O0FBR1Y7QUFFQSxTQUFTdUIsYUFBYWxCLFNBQVMsRUFBRVUsS0FBSztJQUNuQyxxQkFDRyw4REFBQ1M7UUFDRW5CLFdBQVdBO1FBQ1hVLE9BQU9BO1FBQ1BkLE9BQU07UUFDTndCLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO1FBQ0xDLE9BQU07OzBCQUNOLDhEQUFDQztnQkFDRUMsR0FBRTtnQkFDRkgsTUFBSzs7Ozs7OzBCQUVSLDhEQUFDRTtnQkFDRUMsR0FBRTtnQkFDRkgsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWpCO01BcEJTSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL1VJTW9kYWwvVUlNb2RhbC5qc3g/MDQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL1VJTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi8uLi8uLi9nYW1lL0dhbWVJbmZvL0dhbWVJbmZvJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7e1xyXG4gKiB3aWR0aDogJ21kJyB8ICdmdWxsJ1xyXG4gKiBpc09wZW46IGJvb2xlYW5cclxuICogb25DbG9zZTogKCk9PiB2b2lkXHJcbiAqIH19IHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUlNb2RhbCh7IGNoaWxkcmVuLCB3aWR0aCA9ICdtZCcsIGlzT3BlbiA9IGZhbHNlLCBvbkNsb3NlIH0pIHtcclxuICAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgY2xhc3NOYW1lPXtjbC53cmFwcGVyfVxyXG4gICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgb25DbG9zZSgpXHJcbiAgICAgICAgIH19PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2wubW9kYWxDb250ZW50LCBjbFt3aWR0aF0pfSBkYXRhLWlkPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbC5jbG9zZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgIDxJQ0Nsb3NlTW9kYWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC53aW5uZXJJbmZvfT5cclxuICAgICAgICAgICAgICAg0J/QvtCx0LXQtNC40YLQtdC70Yw6IDxzcGFuIGNsYXNzTmFtZT17Y2wud2lubmVyTmFtZX0+UGFyb21vdmV2Zzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICB7LyogPEdhbWVJbmZvXHJcbiAgICAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fVxyXG4gICAgICAgICAgICAgICB3aW5uZXJTeW1ib2w9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5VSU1vZGFsLkhlYWRlciA9IGZ1bmN0aW9uIFVJTW9kYWxIZWFkZXIoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSB9KSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsIGNsLnRpdGxlKX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5VSU1vZGFsLk1haW4gPSBmdW5jdGlvbiBVSU1vZGFsTWFpbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlIH0pIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgY2wubWFpbil9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuVUlNb2RhbC5Gb290ZXIgPSBmdW5jdGlvbiBVSU1vZGFsRm9vdGVyKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUgfSkge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBjbC5mb290ZXIpfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIElDQ2xvc2VNb2RhbChjbGFzc05hbWUsIHN0eWxlKSB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTAuNzgxMzk2IDE2LjAwMDFDMC42MjY4NTggMTYuMDAwMSAwLjQ3NTc4MyAxNS45NTQzIDAuMzQ3MjgxIDE1Ljg2ODVDMC4yMTg3NzggMTUuNzgyNiAwLjExODYyMSAxNS42NjA2IDAuMDU5NDc3NiAxNS41MTc4QzAuMDAwMzM0NjYgMTUuMzc1MSAtMC4wMTUxMzY5IDE1LjIxOCAwLjAxNTAxOTggMTUuMDY2NEMwLjA0NTE3NjYgMTQuOTE0OCAwLjExOTYwNyAxNC43NzU2IDAuMjI4ODk2IDE0LjY2NjRMMTQuNjY2NCAwLjIyODg1M0MxNC44MTI5IDAuMDgyMzIwOSAxNS4wMTE3IDAgMTUuMjE4OSAwQzE1LjQyNjEgMCAxNS42MjQ5IDAuMDgyMzIwOSAxNS43NzE0IDAuMjI4ODUzQzE1LjkxNzkgMC4zNzUzODUgMTYuMDAwMiAwLjU3NDEyNSAxNi4wMDAyIDAuNzgxMzUzQzE2LjAwMDIgMC45ODg1ODEgMTUuOTE3OSAxLjE4NzMyIDE1Ljc3MTQgMS4zMzM4NUwxLjMzMzkgMTUuNzcxNEMxLjI2MTQxIDE1Ljg0NCAxLjE3NTI4IDE1LjkwMTYgMS4wODA0NyAxNS45NDA4QzAuOTg1NjUzIDE1Ljk4MDEgMC44ODQwMTYgMTYuMDAwMiAwLjc4MTM5NiAxNi4wMDAxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTUuMjE4OSAxNi4wMDAxQzE1LjExNjMgMTYuMDAwMiAxNS4wMTQ2IDE1Ljk4MDEgMTQuOTE5OCAxNS45NDA4QzE0LjgyNSAxNS45MDE2IDE0LjczODkgMTUuODQ0IDE0LjY2NjQgMTUuNzcxNEwwLjIyODg5NiAxLjMzMzg1QzAuMDgyMzYzOSAxLjE4NzMyIDQuMzAzNjRlLTA1IDAuOTg4NTgxIDQuMzAzNjRlLTA1IDAuNzgxMzUzQzQuMzAzNjRlLTA1IDAuNTc0MTI1IDAuMDgyMzYzOSAwLjM3NTM4NSAwLjIyODg5NiAwLjIyODg1M0MwLjM3NTQyOCAwLjA4MjMyMDkgMC41NzQxNjggMCAwLjc4MTM5NiAwQzAuOTg4NjI0IDAgMS4xODczNiAwLjA4MjMyMDkgMS4zMzM5IDAuMjI4ODUzTDE1Ljc3MTQgMTQuNjY2NEMxNS44ODA3IDE0Ljc3NTYgMTUuOTU1MSAxNC45MTQ4IDE1Ljk4NTMgMTUuMDY2NEMxNi4wMTU0IDE1LjIxOCAxNiAxNS4zNzUxIDE1Ljk0MDggMTUuNTE3OEMxNS44ODE3IDE1LjY2MDYgMTUuNzgxNSAxNS43ODI2IDE1LjY1MyAxNS44Njg1QzE1LjUyNDUgMTUuOTU0MyAxNS4zNzM0IDE2LjAwMDEgMTUuMjE4OSAxNi4wMDAxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2wiLCJHYW1lSW5mbyIsImNuIiwiVUlNb2RhbCIsImNoaWxkcmVuIiwid2lkdGgiLCJpc09wZW4iLCJvbkNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIm9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibW9kYWxDb250ZW50IiwiZGF0YS1pZCIsIkhlYWRlciIsIlVJTW9kYWxIZWFkZXIiLCJzdHlsZSIsInRpdGxlIiwiTWFpbiIsIlVJTW9kYWxNYWluIiwibWFpbiIsIkZvb3RlciIsIlVJTW9kYWxGb290ZXIiLCJmb290ZXIiLCJJQ0Nsb3NlTW9kYWwiLCJzdmciLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UI/UIModal/UIModal.jsx\n"));

/***/ })

});