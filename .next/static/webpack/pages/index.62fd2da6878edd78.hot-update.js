/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".PlayerInfo_gamerInfo__nvIkJ {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_profileWithSymbol__kbWWC {\\n  position: relative;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_profileWithSymbol__kbWWC .PlayerInfo_symbol__Mm3lV {\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -4px;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_separator__P5qbw {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_timer__RxE5y {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_stopped__kXNvp {\\n  color: #94A3B8;\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_danger__UYaZf {\\n  color: rgb(171, 24, 24);\\n}\\n.PlayerInfo_gamerInfo__nvIkJ .PlayerInfo_timeIsOver__4OTuM {\\n  color: #94A3B8;\\n  text-decoration: overline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss\",\"webpack://../../../JS%20Projects/react/tic-tac-toe-online/components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss\",\"webpack://styles/colors.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;ACDJ;ADGI;EACI,kBAAA;ACDR;ADGQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;ACDZ;ADKI;EACI,YAAA;EACA,UAAA;EACA,mBErBG;ADkBX;ADMI;EACI,WAAA;EACA,cEzBG;EF0BH,eAAA;EACA,gBAAA;ACJR;ADQI;EACI,cElCG;AD4BX;ADSI;EACI,uBAAA;ACPR;ADUI;EACI,cE1CG;EF2CH,yBAAA;ACRR\",\"sourcesContent\":[\"@import \\\"../../../../styles/colors.module.scss\\\";\\r\\n\\r\\n.gamerInfo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n\\r\\n    .profileWithSymbol {\\r\\n        position: relative;\\r\\n\\r\\n        .symbol {\\r\\n            width: 20px;\\r\\n            height: 20px;\\r\\n            position: absolute;\\r\\n            background-color: white;\\r\\n            display: flex;\\r\\n            align-items: center;\\r\\n            justify-content: center;\\r\\n            border-radius: 100%;\\r\\n            left: -4px;\\r\\n            top: -4px;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    .separator {\\r\\n        height: 24px;\\r\\n        width: 1px;\\r\\n        background: $slate200;\\r\\n    }\\r\\n\\r\\n    .timer {\\r\\n        width: 60px;\\r\\n        color: $slate900;\\r\\n        font-size: 18px;\\r\\n        font-weight: 600;\\r\\n        // color: $slate400\\r\\n    }\\r\\n\\r\\n    .stopped {\\r\\n        color: $slate400\\r\\n    }\\r\\n\\r\\n    .danger {\\r\\n        color: rgb(171, 24, 24);\\r\\n    }\\r\\n\\r\\n    .timeIsOver {\\r\\n        color: $slate400;\\r\\n        text-decoration: overline;\\r\\n\\r\\n    }\\r\\n}\",\".gamerInfo {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.gamerInfo .profileWithSymbol {\\n  position: relative;\\n}\\n.gamerInfo .profileWithSymbol .symbol {\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  background-color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 100%;\\n  left: -4px;\\n  top: -4px;\\n}\\n.gamerInfo .separator {\\n  height: 24px;\\n  width: 1px;\\n  background: #E2E8F0;\\n}\\n.gamerInfo .timer {\\n  width: 60px;\\n  color: #0F172A;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n.gamerInfo .stopped {\\n  color: #94A3B8;\\n}\\n.gamerInfo .danger {\\n  color: rgb(171, 24, 24);\\n}\\n.gamerInfo .timeIsOver {\\n  color: #94A3B8;\\n  text-decoration: overline;\\n}\",\"$teal600: #0D9488;\\r\\n$teal500: #3abdb2;\\r\\n\\r\\n\\r\\n$slate50: #F8FAFC;\\r\\n$slate400: #94A3B8;\\r\\n$slate200: #E2E8F0;\\r\\n$slate900: #0F172A;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"gamerInfo\": \"PlayerInfo_gamerInfo__nvIkJ\",\n\t\"profileWithSymbol\": \"PlayerInfo_profileWithSymbol__kbWWC\",\n\t\"symbol\": \"PlayerInfo_symbol__Mm3lV\",\n\t\"separator\": \"PlayerInfo_separator__P5qbw\",\n\t\"timer\": \"PlayerInfo_timer__RxE5y\",\n\t\"stopped\": \"PlayerInfo_stopped__kXNvp\",\n\t\"danger\": \"PlayerInfo_danger__UYaZf\",\n\t\"timeIsOver\": \"PlayerInfo_timeIsOver__4OTuM\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvZ2FtZS9HYW1lSW5mby9QbGF5ZXJJbmZvL1BsYXllckluZm8ubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0S0FBd0Y7QUFDbEk7QUFDQTtBQUNBLHdFQUF3RSxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsK0ZBQStGLGdCQUFnQixpQkFBaUIsdUJBQXVCLDRCQUE0QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsZUFBZSxjQUFjLEdBQUcsNkRBQTZELGlCQUFpQixlQUFlLHdCQUF3QixHQUFHLHlEQUF5RCxnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRywyREFBMkQsbUJBQW1CLEdBQUcsMERBQTBELDRCQUE0QixHQUFHLDhEQUE4RCxtQkFBbUIsOEJBQThCLEdBQUcsT0FBTyx3UkFBd1IsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksMkVBQTJFLG9CQUFvQixzQkFBc0IsNEJBQTRCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLG1DQUFtQyx3Q0FBd0MsOEJBQThCLG9DQUFvQyx3Q0FBd0Msb0NBQW9DLDJCQUEyQiwwQkFBMEIsYUFBYSxTQUFTLHdCQUF3Qix5QkFBeUIsdUJBQXVCLGtDQUFrQyxTQUFTLG9CQUFvQix3QkFBd0IsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsd0NBQXdDLHNCQUFzQixxQ0FBcUMscUJBQXFCLG9DQUFvQyxTQUFTLHlCQUF5Qiw2QkFBNkIsc0NBQXNDLGFBQWEsS0FBSyxlQUFlLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQix1QkFBdUIsNEJBQTRCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixlQUFlLGNBQWMsR0FBRyx5QkFBeUIsaUJBQWlCLGVBQWUsd0JBQXdCLEdBQUcscUJBQXFCLGdCQUFnQixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsMEJBQTBCLG1CQUFtQiw4QkFBOEIsR0FBRyxxQkFBcUIsc0JBQXNCLDhCQUE4Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixtQkFBbUI7QUFDMW9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvR2FtZUluZm8vUGxheWVySW5mby9QbGF5ZXJJbmZvLm1vZHVsZS5zY3NzPzMyZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5QbGF5ZXJJbmZvX2dhbWVySW5mb19fbnZJa0oge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19fbnZJa0ogLlBsYXllckluZm9fcHJvZmlsZVdpdGhTeW1ib2xfX2tiV1dDIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlBsYXllckluZm9fZ2FtZXJJbmZvX19udklrSiAuUGxheWVySW5mb19wcm9maWxlV2l0aFN5bWJvbF9fa2JXV0MgLlBsYXllckluZm9fc3ltYm9sX19NbTNsViB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBsZWZ0OiAtNHB4O1xcbiAgdG9wOiAtNHB4O1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX252SWtKIC5QbGF5ZXJJbmZvX3NlcGFyYXRvcl9fUDVxYncge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFMkU4RjA7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19fbnZJa0ogLlBsYXllckluZm9fdGltZXJfX1J4RTV5IHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgY29sb3I6ICMwRjE3MkE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX252SWtKIC5QbGF5ZXJJbmZvX3N0b3BwZWRfX2tYTnZwIHtcXG4gIGNvbG9yOiAjOTRBM0I4O1xcbn1cXG4uUGxheWVySW5mb19nYW1lckluZm9fX252SWtKIC5QbGF5ZXJJbmZvX2Rhbmdlcl9fVVlhWmYge1xcbiAgY29sb3I6IHJnYigxNzEsIDI0LCAyNCk7XFxufVxcbi5QbGF5ZXJJbmZvX2dhbWVySW5mb19fbnZJa0ogLlBsYXllckluZm9fdGltZUlzT3Zlcl9fNE9UdU0ge1xcbiAgY29sb3I6ICM5NEEzQjg7XFxuICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9nYW1lL0dhbWVJbmZvL1BsYXllckluZm8vUGxheWVySW5mby5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL0pTJTIwUHJvamVjdHMvcmVhY3QvdGljLXRhYy10b2Utb25saW5lL2NvbXBvbmVudHMvZ2FtZS9HYW1lSW5mby9QbGF5ZXJJbmZvL1BsYXllckluZm8ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29sb3JzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0RKO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkVyQkc7QURrQlg7QURNSTtFQUNJLFdBQUE7RUFDQSxjRXpCRztFRjBCSCxlQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRFFJO0VBQ0ksY0VsQ0c7QUQ0Qlg7QURTSTtFQUNJLHVCQUFBO0FDUFI7QURVSTtFQUNJLGNFMUNHO0VGMkNILHlCQUFBO0FDUlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5tb2R1bGUuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuLmdhbWVySW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG4gICAgLnByb2ZpbGVXaXRoU3ltYm9sIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIC5zeW1ib2wge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICAgICAgICAgbGVmdDogLTRweDtcXHJcXG4gICAgICAgICAgICB0b3A6IC00cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlcGFyYXRvciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHNsYXRlMjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aW1lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2xhdGU5MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgLy8gY29sb3I6ICRzbGF0ZTQwMFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdG9wcGVkIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2xhdGU0MDBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGFuZ2VyIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTcxLCAyNCwgMjQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aW1lSXNPdmVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2xhdGU0MDA7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xcclxcblxcclxcbiAgICB9XFxyXFxufVwiLFwiLmdhbWVySW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmdhbWVySW5mbyAucHJvZmlsZVdpdGhTeW1ib2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ2FtZXJJbmZvIC5wcm9maWxlV2l0aFN5bWJvbCAuc3ltYm9sIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IC00cHg7XFxuICB0b3A6IC00cHg7XFxufVxcbi5nYW1lckluZm8gLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0UyRThGMDtcXG59XFxuLmdhbWVySW5mbyAudGltZXIge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBjb2xvcjogIzBGMTcyQTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5nYW1lckluZm8gLnN0b3BwZWQge1xcbiAgY29sb3I6ICM5NEEzQjg7XFxufVxcbi5nYW1lckluZm8gLmRhbmdlciB7XFxuICBjb2xvcjogcmdiKDE3MSwgMjQsIDI0KTtcXG59XFxuLmdhbWVySW5mbyAudGltZUlzT3ZlciB7XFxuICBjb2xvcjogIzk0QTNCODtcXG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XFxufVwiLFwiJHRlYWw2MDA6ICMwRDk0ODg7XFxyXFxuJHRlYWw1MDA6ICMzYWJkYjI7XFxyXFxuXFxyXFxuXFxyXFxuJHNsYXRlNTA6ICNGOEZBRkM7XFxyXFxuJHNsYXRlNDAwOiAjOTRBM0I4O1xcclxcbiRzbGF0ZTIwMDogI0UyRThGMDtcXHJcXG4kc2xhdGU5MDA6ICMwRjE3MkE7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZ2FtZXJJbmZvXCI6IFwiUGxheWVySW5mb19nYW1lckluZm9fX252SWtKXCIsXG5cdFwicHJvZmlsZVdpdGhTeW1ib2xcIjogXCJQbGF5ZXJJbmZvX3Byb2ZpbGVXaXRoU3ltYm9sX19rYldXQ1wiLFxuXHRcInN5bWJvbFwiOiBcIlBsYXllckluZm9fc3ltYm9sX19NbTNsVlwiLFxuXHRcInNlcGFyYXRvclwiOiBcIlBsYXllckluZm9fc2VwYXJhdG9yX19QNXFid1wiLFxuXHRcInRpbWVyXCI6IFwiUGxheWVySW5mb190aW1lcl9fUnhFNXlcIixcblx0XCJzdG9wcGVkXCI6IFwiUGxheWVySW5mb19zdG9wcGVkX19rWE52cFwiLFxuXHRcImRhbmdlclwiOiBcIlBsYXllckluZm9fZGFuZ2VyX19VWWFaZlwiLFxuXHRcInRpbWVJc092ZXJcIjogXCJQbGF5ZXJJbmZvX3RpbWVJc092ZXJfXzRPVHVNXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[9].use[4]!./components/game/GameInfo/PlayerInfo/PlayerInfo.module.scss\n"));

/***/ })

});