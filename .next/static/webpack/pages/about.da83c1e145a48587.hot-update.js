"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst MySkill = (param)=>{\n    let { name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        whileInView: {\n            x,\n            y,\n            transition: {\n                duration: 1.5\n            }\n        },\n        viewport: {\n            once: true\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MySkill;\nconst Skills = ()=>{\n    const getAdjustedPosition = (x, y)=>{\n        return \"\\n      lg:left-[\".concat(x, \"]\\n      lg:top-[\").concat(y, \"]\\n      md:left-[\").concat(x, \"]\\n      md:top-[\").concat(y, \"]\\n      sm:left-[\").concat(x, \"]\\n      sm:top-[\").concat(y, \"]\\n      xs:left-[\").concat(x, \"]\\n      xs:top-[\").concat(y, \"]\\n    \");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]   lg:bg-circularLightLg lg:dark:bg-circularDarkLg   md:bg-circularLightMd md:dark:bg-circularDarkMd   sm:bg-circularLightSm sm:dark:bg-circularDarkSm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center rounded-full font-semibold    bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Development\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Node.js\",\n                        x: getAdjustedPosition(\"-11vw\", \"2vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Golang\",\n                        x: getAdjustedPosition(\"4vw\", \"-12vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Laravel\",\n                        x: getAdjustedPosition(\"-10vw\", \"-10vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"MySkill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFVBQVUsU0FBb0I7UUFBbkIsRUFBRUMsS0FBSSxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRTtJQUM3QixxQkFDRSw4REFBQ0oscURBQVU7UUFDVE0sV0FBVTtRQUVWQyxZQUFZO1lBQUVDLE9BQU87UUFBSztRQUMxQkMsU0FBUztZQUFFTixHQUFHO1lBQUdDLEdBQUc7UUFBRTtRQUN0Qk0sYUFBYTtZQUFFUDtZQUFHQztZQUFHTyxZQUFZO2dCQUFFQyxVQUFVO1lBQUk7UUFBRTtRQUNuREMsVUFBVTtZQUFFQyxNQUFNLElBQUk7UUFBQztrQkFDdEJaOzs7Ozs7QUFHUDtLQVpNRDtBQWNOLE1BQU1jLFNBQVMsSUFBTTtJQUNuQixNQUFNQyxzQkFBc0IsQ0FBQ2IsR0FBR0MsSUFBTTtRQUNwQyxPQUFPLG9CQUVLQSxPQURDRCxHQUFFLHFCQUVGQSxPQUREQyxHQUFFLHNCQUVGQSxPQURDRCxHQUFFLHFCQUVGQSxPQUREQyxHQUFFLHNCQUVGQSxPQURDRCxHQUFFLHFCQUVGQSxPQUREQyxHQUFFLHNCQUVGQSxPQURDRCxHQUFFLHFCQUNELE9BQUZDLEdBQUU7SUFFaEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNhO2dCQUFHWCxXQUFVOzBCQUFtRTs7Ozs7OzBCQUNqRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUliLDhEQUFDTixxREFBVTt3QkFDVE0sV0FBVTt3QkFFVkMsWUFBWTs0QkFBRUMsT0FBTzt3QkFBSzs7MENBQzFCLDhEQUFDVTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVMLDhEQUFDakI7d0JBQVFDLE1BQUs7d0JBQVVDLEdBQUdhLG9CQUFvQixTQUFTOzs7Ozs7a0NBQ3hELDhEQUFDZjt3QkFBUUMsTUFBSzt3QkFBU0MsR0FBR2Esb0JBQW9CLE9BQU87Ozs7OztrQ0FDckQsOERBQUNmO3dCQUFRQyxNQUFLO3dCQUFVQyxHQUFHYSxvQkFBb0IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFLaEU7TUFuQ01EO0FBcUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qcz9lMWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBNeVNraWxsID0gKHsgbmFtZSwgeCwgeSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgXHJcbiAgICAgIGJnLWRhcmsgdGV4dC1saWdodCBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodCBsZzpweS0yIGxnOnB4LTQgbWQ6dGV4dC1zbSBtZDpweS0xLjUgbWQ6cHgtMyB4czpiZy10cmFuc3BhcmVudCB4czpkYXJrOmJnLXRyYW5zcGFyZW50IHhzOnRleHQtZGFyayB4czpkYXJrOnRleHQtbGlnaHQgeHM6Zm9udC1ib2xkJ1xyXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcbiAgICAgIGluaXRpYWw9e3sgeDogMCwgeTogMCB9fVxyXG4gICAgICB3aGlsZUluVmlldz17eyB4LCB5LCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLjUgfSB9fVxyXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19PlxyXG4gICAgICB7bmFtZX1cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldEFkanVzdGVkUG9zaXRpb24gPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgbGc6bGVmdC1bJHt4fV1cclxuICAgICAgbGc6dG9wLVske3l9XVxyXG4gICAgICBtZDpsZWZ0LVske3h9XVxyXG4gICAgICBtZDp0b3AtWyR7eX1dXHJcbiAgICAgIHNtOmxlZnQtWyR7eH1dXHJcbiAgICAgIHNtOnRvcC1bJHt5fV1cclxuICAgICAgeHM6bGVmdC1bJHt4fV1cclxuICAgICAgeHM6dG9wLVske3l9XVxyXG4gICAgYDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtOHhsIG10LTY0IHctZnVsbCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTZ4bCBtZDptdC0zMic+U2tpbGxzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodCBkYXJrOmJnLWNpcmN1bGFyRGFyayBsZzpoLVs4MHZoXSBzbTpoLVs2MHZoXSB4czpoLVs1MHZoXVxyXG4gICAgICAgICAgICBsZzpiZy1jaXJjdWxhckxpZ2h0TGcgbGc6ZGFyazpiZy1jaXJjdWxhckRhcmtMZ1xyXG4gICAgICAgICAgICBtZDpiZy1jaXJjdWxhckxpZ2h0TWQgbWQ6ZGFyazpiZy1jaXJjdWxhckRhcmtNZFxyXG4gICAgICAgICAgICBzbTpiZy1jaXJjdWxhckxpZ2h0U20gc206ZGFyazpiZy1jaXJjdWxhckRhcmtTbSc+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgXHJcbiAgICAgICAgICAgICAgICBiZy1kYXJrIHRleHQtbGlnaHQgcC02IHNoYWRvdy1kYXJrIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1kYXJrIGRhcms6YmctbGlnaHQgbGc6cC02IG1kOnAtNCB4czp0ZXh0LXhzIHhzOnAtMidcclxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0+XHJcbiAgICAgICAgICA8cD5Tb2Z0d2FyZTwvcD5cclxuICAgICAgICAgIDxwPkRldmVsb3BtZW50PC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiTm9kZS5qc1wiIHg9e2dldEFkanVzdGVkUG9zaXRpb24oXCItMTF2d1wiLCBcIjJ2d1wiKX0gLz5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiR29sYW5nXCIgeD17Z2V0QWRqdXN0ZWRQb3NpdGlvbihcIjR2d1wiLCBcIi0xMnZ3XCIpfSAvPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJMYXJhdmVsXCIgeD17Z2V0QWRqdXN0ZWRQb3NpdGlvbihcIi0xMHZ3XCIsIFwiLTEwdndcIil9IC8+XHJcbiAgICAgICAgey8qIEFkZCBtb3JlIHNraWxscyB3aXRoIGFkanVzdGVkIHBvc2l0aW9ucyAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJNeVNraWxsIiwibmFtZSIsIngiLCJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidmlld3BvcnQiLCJvbmNlIiwiU2tpbGxzIiwiZ2V0QWRqdXN0ZWRQb3NpdGlvbiIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});