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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst MySkill = (param)=>{\n    let { name , initialX , initialY , _2xlX , _2xlY , xlX , xlY  } = param;\n    _s();\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialX);\n    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialY);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 1535) {\n                setX(_2xlX);\n                setY(_2xlY);\n            } else if (window.innerWidth > 1279) {\n                setX(xlX);\n                setY(xlY);\n            } else {\n                setX(initialX);\n                setY(initialY);\n            }\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        initialX,\n        initialY,\n        _2xlX,\n        _2xlY,\n        xlX,\n        xlY\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x,\n            y\n        },\n        transition: {\n            duration: 1.5\n        },\n        style: {\n            left: x,\n            top: y\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MySkill, \"2iT2NOWDBLewp44sG1MXRvMogNU=\");\n_c = MySkill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Development\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Node.js\",\n                        initialX: \"10vw\",\n                        initialY: \"2vw\",\n                        smallX: \"10vw\",\n                        smallY: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Golang\",\n                        initialX: \"4vw\",\n                        initialY: \"-12vw\",\n                        smallX: \"-4vw\",\n                        smallY: \"8vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"MySkill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUV2QyxNQUFNSSxVQUFVLFNBQTBEO1FBQXpELEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxJQUFHLEVBQUVDLElBQUcsRUFBRTs7SUFDbkUsTUFBTSxDQUFDQyxHQUFHQyxLQUFLLEdBQUdaLCtDQUFRQSxDQUFDSztJQUMzQixNQUFNLENBQUNRLEdBQUdDLEtBQUssR0FBR2QsK0NBQVFBLENBQUNNO0lBRTNCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWMsZUFBZSxJQUFNO1lBQ3pCLElBQUlDLE9BQU9DLFVBQVUsR0FBRyxNQUFNO2dCQUM1QkwsS0FBS0w7Z0JBQ0xPLEtBQUtOO1lBQ1AsT0FBTyxJQUFHUSxPQUFPQyxVQUFVLEdBQUcsTUFBTTtnQkFDbENMLEtBQUtIO2dCQUNMSyxLQUFLSjtZQUNQLE9BQ007Z0JBQ0pFLEtBQUtQO2dCQUNMUyxLQUFLUjtZQUNQLENBQUM7UUFDSDtRQUVBUztRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU07WUFDWEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHO1FBQUNWO1FBQVVDO1FBQVVDO1FBQU9DO1FBQU9DO1FBQUtDO0tBQUk7SUFFL0MscUJBQ0UsOERBQUNSLHFEQUFVO1FBQ1RtQixXQUFVO1FBQ1ZDLFlBQVk7WUFBRUMsT0FBTztRQUFLO1FBQzFCQyxTQUFTO1lBQUViLEdBQUc7WUFBR0UsR0FBRztRQUFFO1FBQ3RCWSxTQUFTO1lBQUVkO1lBQUdFO1FBQUU7UUFDaEJhLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxPQUFPO1lBQUVDLE1BQU1sQjtZQUFHbUIsS0FBS2pCO1FBQUU7a0JBRXhCVDs7Ozs7O0FBR1A7R0F2Q01EO0tBQUFBO0FBeUNOLE1BQU00QixTQUFTLElBQU07SUFDbkIscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBR1gsV0FBVTswQkFBbUU7Ozs7OzswQkFDakYsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ25CLHFEQUFVO3dCQUFDbUIsV0FBVTt3QkFBc0xDLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7OzBDQUNwTyw4REFBQ1U7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFTCw4REFBQzlCO3dCQUFRQyxNQUFLO3dCQUFVQyxVQUFTO3dCQUFPQyxVQUFTO3dCQUFNNEIsUUFBTzt3QkFBT0MsUUFBTzs7Ozs7O2tDQUM1RSw4REFBQ2hDO3dCQUFRQyxNQUFLO3dCQUFTQyxVQUFTO3dCQUFNQyxVQUFTO3dCQUFRNEIsUUFBTzt3QkFBT0MsUUFBTzs7Ozs7Ozs7Ozs7Ozs7QUFLcEY7TUFmTUo7QUFpQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgTXlTa2lsbCA9ICh7IG5hbWUsIGluaXRpYWxYLCBpbml0aWFsWSwgXzJ4bFgsIF8yeGxZLCB4bFgsIHhsWSB9KSA9PiB7XHJcbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoaW5pdGlhbFgpO1xyXG4gIGNvbnN0IFt5LCBzZXRZXSA9IHVzZVN0YXRlKGluaXRpYWxZKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTUzNSkgeyAvLyBTbWFsbGVyIHNjcmVlbiBzaXplLCBhZGp1c3QgcG9zaXRpb25cclxuICAgICAgICBzZXRYKF8yeGxYKTtcclxuICAgICAgICBzZXRZKF8yeGxZKTtcclxuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI3OSkge1xyXG4gICAgICAgIHNldFgoeGxYKTtcclxuICAgICAgICBzZXRZKHhsWSk7XHJcbiAgICAgIH1cclxuICAgICAgIGVsc2UgeyAvLyBMYXJnZXIgc2NyZWVuIHNpemUsIHVzZSBpbml0aWFsIHBvc2l0aW9uXHJcbiAgICAgICAgc2V0WChpbml0aWFsWCk7XHJcbiAgICAgICAgc2V0WShpbml0aWFsWSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW2luaXRpYWxYLCBpbml0aWFsWSwgXzJ4bFgsIF8yeGxZLCB4bFgsIHhsWV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgYmctZGFyayB0ZXh0LWxpZ2h0IHB5LTMgcHgtNiBzaGFkb3ctZGFyayBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSBkYXJrOnRleHQtZGFyayBkYXJrOmJnLWxpZ2h0XCJcclxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxyXG4gICAgICBpbml0aWFsPXt7IHg6IDAsIHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyB4LCB5IH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNSB9fVxyXG4gICAgICBzdHlsZT17eyBsZWZ0OiB4LCB0b3A6IHkgfX1cclxuICAgID5cclxuICAgICAge25hbWV9XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNraWxscyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTh4bCBtdC02NCB3LWZ1bGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC02eGwgbWQ6bXQtMzJcIj5Ta2lsbHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodCBkYXJrOmJnLWNpcmN1bGFyRGFyayBsZzpoLVs4MHZoXSBzbTpoLVs2MHZoXSB4czpoLVs1MHZoXSBsZzpiZy1jaXJjdWxhckxpZ2h0TGcgbGc6ZGFyazpiZy1jaXJjdWxhckRhcmtMZyBtZDpiZy1jaXJjdWxhckxpZ2h0TWQgbWQ6ZGFyazpiZy1jaXJjdWxhckRhcmtNZCBzbTpiZy1jaXJjdWxhckxpZ2h0U20gc206ZGFyazpiZy1jaXJjdWxhckRhcmtTbVwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBwLTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodCBsZzpwLTYgbWQ6cC00IHhzOnRleHQteHMgeHM6cC0yXCIgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fT5cclxuICAgICAgICAgIDxwPlNvZnR3YXJlPC9wPlxyXG4gICAgICAgICAgPHA+RGV2ZWxvcG1lbnQ8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJOb2RlLmpzXCIgaW5pdGlhbFg9XCIxMHZ3XCIgaW5pdGlhbFk9XCIydndcIiBzbWFsbFg9XCIxMHZ3XCIgc21hbGxZPVwiMTB2d1wiIC8+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIkdvbGFuZ1wiIGluaXRpYWxYPVwiNHZ3XCIgaW5pdGlhbFk9XCItMTJ2d1wiIHNtYWxsWD1cIi00dndcIiBzbWFsbFk9XCI4dndcIiAvPlxyXG4gICAgICAgIHsvKiBBZGQgbW9yZSBza2lsbHMgd2l0aCBpbml0aWFsIGFuZCBzbWFsbCBwb3NpdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJNeVNraWxsIiwibmFtZSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJfMnhsWCIsIl8yeGxZIiwieGxYIiwieGxZIiwieCIsInNldFgiLCJ5Iiwic2V0WSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiU2tpbGxzIiwiaDIiLCJwIiwic21hbGxYIiwic21hbGxZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});