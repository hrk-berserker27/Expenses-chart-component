"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap\\\");\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"DM sans\\\", \\\"sans-serif\\\";\\n}\\n\\nbody {\\n  display: grid;\\n  place-items: center;\\n  min-height: 100vh;\\n  padding: 1em;\\n  background-color: hsl(27deg, 66%, 92%);\\n}\\n\\nmain {\\n  width: 100%;\\n}\\nmain header {\\n  border-radius: 0.8em;\\n  background-color: hsl(10deg, 79%, 65%);\\n  padding: 1em 1.3em 1.5em 1.5em;\\n}\\nmain header h1 {\\n  padding-top: 0.3em;\\n  font-size: 14px;\\n  font-weight: 400;\\n  color: hsl(27deg, 66%, 92%);\\n}\\nmain header h2 {\\n  font-weight: 700;\\n  color: hsl(33deg, 100%, 98%);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/_design.scss\",\"webpack://styles/style.scss\",\"webpack://../../../../Frontend%20Intermediate%20challenges/expenses-chart-component-main/Expenses-chart-component%20app/nextapp/styles/style.scss\"],\"names\":[],\"mappings\":\"AAAQ,yFAAA;ACER;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EDeA,oCAAA;AEdJ;;ADGA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,sCAAA;ACAJ;;ADGA;EACI,WAAA;ACAJ;ADEI;EACI,oBAAA;EACA,sCAAA;EACA,8BAAA;ACAR;ADEQ;EACI,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAAA;ACAZ;ADGQ;EACI,gBAAA;EACA,4BAAA;ACDZ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');\\r\\n\\r\\n$screen-size: (\\r\\n    'mobile': 375px,\\r\\n    'desktop': 1440px\\r\\n);\\r\\n$color-bucket: (\\r\\n    'Soft red': hsl(10, 79%, 65%),\\r\\n    'Cyan': hsl(186, 34%, 60%),\\r\\n    'Dark brown': hsl(25, 47%, 15%),\\r\\n    'Medium brown': hsl(28, 10%, 53%),\\r\\n    'Cream': hsl(27, 66%, 92%),\\r\\n    'Very pale orange': hsl(33, 100%, 98%)\\r\\n);\\r\\n$font-size: (\\r\\n    'default': 16px,\\r\\n    'heading': 18px\\r\\n);\\r\\n\\r\\n@mixin font-family {\\r\\n    font-family: 'DM sans', 'sans-serif';\\r\\n}\",\"@use \\\"design\\\" as d;\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    @include d.font-family;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    display: grid;\\r\\n    place-items: center;\\r\\n    min-height: 100vh;\\r\\n    padding: 1em;\\r\\n    background-color: map-get(d.$color-bucket, \\\"Cream\\\");\\r\\n}\\r\\n\\r\\nmain {\\r\\n    width: 100%;\\r\\n\\r\\n    header {\\r\\n        border-radius: 0.8em;\\r\\n        background-color: map-get(d.$color-bucket, \\\"Soft red\\\");\\r\\n        padding: 1em 1.3em 1.5em 1.5em;\\r\\n\\r\\n        h1 {\\r\\n            padding-top: 0.3em;\\r\\n            font-size: 14px;\\r\\n            font-weight: 400;\\r\\n            color: map-get(d.$color-bucket, \\\"Cream\\\");\\r\\n        }\\r\\n\\r\\n        h2 {\\r\\n            font-weight: 700;\\r\\n            color: map-get(d.$color-bucket, \\\"Very pale orange\\\");\\r\\n        }\\r\\n    }\\r\\n}\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap\\\");\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"DM sans\\\", \\\"sans-serif\\\";\\n}\\n\\nbody {\\n  display: grid;\\n  place-items: center;\\n  min-height: 100vh;\\n  padding: 1em;\\n  background-color: hsl(27deg, 66%, 92%);\\n}\\n\\nmain {\\n  width: 100%;\\n}\\nmain header {\\n  border-radius: 0.8em;\\n  background-color: hsl(10deg, 79%, 65%);\\n  padding: 1em 1.3em 1.5em 1.5em;\\n}\\nmain header h1 {\\n  padding-top: 0.3em;\\n  font-size: 14px;\\n  font-weight: 400;\\n  color: hsl(27deg, 66%, 92%);\\n}\\nmain header h2 {\\n  font-weight: 700;\\n  color: hsl(33deg, 100%, 98%);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxrSEFBa0gsb0JBQW9CLEtBQUssY0FBYyxlQUFlLDJCQUEyQiw2Q0FBNkMsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0Isc0JBQXNCLGlCQUFpQiwyQ0FBMkMsR0FBRyxVQUFVLGdCQUFnQixHQUFHLGVBQWUseUJBQXlCLDJDQUEyQyxtQ0FBbUMsR0FBRyxrQkFBa0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsZ0NBQWdDLEdBQUcsa0JBQWtCLHFCQUFxQixpQ0FBaUMsR0FBRyxPQUFPLDRRQUE0USxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxnR0FBZ0csbUJBQW1CLDhFQUE4RSxzUUFBc1Esc0VBQXNFLDRCQUE0Qiw2Q0FBNkMsS0FBSyx3QkFBd0IsV0FBVyxrQkFBa0IsbUJBQW1CLCtCQUErQiwrQkFBK0IsS0FBSyxjQUFjLHNCQUFzQiw0QkFBNEIsMEJBQTBCLHFCQUFxQiw4REFBOEQsS0FBSyxjQUFjLG9CQUFvQixvQkFBb0IsaUNBQWlDLHFFQUFxRSwyQ0FBMkMsb0JBQW9CLG1DQUFtQyxnQ0FBZ0MsaUNBQWlDLDJEQUEyRCxhQUFhLG9CQUFvQixpQ0FBaUMsc0VBQXNFLGFBQWEsU0FBUyxLQUFLLDJFQUEyRSxvQkFBb0IsS0FBSyxjQUFjLGVBQWUsMkJBQTJCLDZDQUE2QyxHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixzQkFBc0IsaUJBQWlCLDJDQUEyQyxHQUFHLFVBQVUsZ0JBQWdCLEdBQUcsZUFBZSx5QkFBeUIsMkNBQTJDLG1DQUFtQyxHQUFHLGtCQUFrQix1QkFBdUIsb0JBQW9CLHFCQUFxQixnQ0FBZ0MsR0FBRyxrQkFBa0IscUJBQXFCLGlDQUFpQyxHQUFHLG1CQUFtQjtBQUM1MUc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGUuc2Nzcz80YWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBzYW5zXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjdkZWcsIDY2JSwgOTIlKTtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiBoZWFkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTBkZWcsIDc5JSwgNjUlKTtcXG4gIHBhZGRpbmc6IDFlbSAxLjNlbSAxLjVlbSAxLjVlbTtcXG59XFxubWFpbiBoZWFkZXIgaDEge1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBoc2woMjdkZWcsIDY2JSwgOTIlKTtcXG59XFxubWFpbiBoZWFkZXIgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBoc2woMzNkZWcsIDEwMCUsIDk4JSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvX2Rlc2lnbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9Gcm9udGVuZCUyMEludGVybWVkaWF0ZSUyMGNoYWxsZW5nZXMvZXhwZW5zZXMtY2hhcnQtY29tcG9uZW50LW1haW4vRXhwZW5zZXMtY2hhcnQtY29tcG9uZW50JTIwYXBwL25leHRhcHAvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQVEseUZBQUE7QUNFUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RURlQSxvQ0FBQTtBRWRKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0FDQVI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNBWjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQ0RaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRzY3JlZW4tc2l6ZTogKFxcclxcbiAgICAnbW9iaWxlJzogMzc1cHgsXFxyXFxuICAgICdkZXNrdG9wJzogMTQ0MHB4XFxyXFxuKTtcXHJcXG4kY29sb3ItYnVja2V0OiAoXFxyXFxuICAgICdTb2Z0IHJlZCc6IGhzbCgxMCwgNzklLCA2NSUpLFxcclxcbiAgICAnQ3lhbic6IGhzbCgxODYsIDM0JSwgNjAlKSxcXHJcXG4gICAgJ0RhcmsgYnJvd24nOiBoc2woMjUsIDQ3JSwgMTUlKSxcXHJcXG4gICAgJ01lZGl1bSBicm93bic6IGhzbCgyOCwgMTAlLCA1MyUpLFxcclxcbiAgICAnQ3JlYW0nOiBoc2woMjcsIDY2JSwgOTIlKSxcXHJcXG4gICAgJ1ZlcnkgcGFsZSBvcmFuZ2UnOiBoc2woMzMsIDEwMCUsIDk4JSlcXHJcXG4pO1xcclxcbiRmb250LXNpemU6IChcXHJcXG4gICAgJ2RlZmF1bHQnOiAxNnB4LFxcclxcbiAgICAnaGVhZGluZyc6IDE4cHhcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBmb250LWZhbWlseSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRE0gc2FucycsICdzYW5zLXNlcmlmJztcXHJcXG59XCIsXCJAdXNlIFxcXCJkZXNpZ25cXFwiIGFzIGQ7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgQGluY2x1ZGUgZC5mb250LWZhbWlseTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoZC4kY29sb3ItYnVja2V0LCBcXFwiQ3JlYW1cXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC44ZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KGQuJGNvbG9yLWJ1Y2tldCwgXFxcIlNvZnQgcmVkXFxcIik7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW0gMS4zZW0gMS41ZW0gMS41ZW07XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuM2VtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KGQuJGNvbG9yLWJ1Y2tldCwgXFxcIkNyZWFtXFxcIik7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldChkLiRjb2xvci1idWNrZXQsIFxcXCJWZXJ5IHBhbGUgb3JhbmdlXFxcIik7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBzYW5zXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjdkZWcsIDY2JSwgOTIlKTtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiBoZWFkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTBkZWcsIDc5JSwgNjUlKTtcXG4gIHBhZGRpbmc6IDFlbSAxLjNlbSAxLjVlbSAxLjVlbTtcXG59XFxubWFpbiBoZWFkZXIgaDEge1xcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBoc2woMjdkZWcsIDY2JSwgOTIlKTtcXG59XFxubWFpbiBoZWFkZXIgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBoc2woMzNkZWcsIDEwMCUsIDk4JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss\n"));

/***/ })

});