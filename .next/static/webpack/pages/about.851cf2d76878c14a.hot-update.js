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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst MySkill = (param)=>{\n    let { name , initialX , initialY , _2xlX , _2xlY  } = param;\n    _s();\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialX);\n    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialY);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 1535) {\n                setX(_2xlX);\n                setY(smallY);\n            } else {\n                setX(initialX);\n                setY(initialY);\n            }\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        initialX,\n        initialY,\n        smallX,\n        smallY\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x,\n            y\n        },\n        transition: {\n            duration: 1.5\n        },\n        style: {\n            left: x,\n            top: y\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MySkill, \"2iT2NOWDBLewp44sG1MXRvMogNU=\");\n_c = MySkill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Development\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Node.js\",\n                        initialX: \"10vw\",\n                        initialY: \"2vw\",\n                        smallX: \"10vw\",\n                        smallY: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Golang\",\n                        initialX: \"4vw\",\n                        initialY: \"-12vw\",\n                        smallX: \"-4vw\",\n                        smallY: \"8vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"MySkill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUV2QyxNQUFNSSxVQUFVLFNBQWdEO1FBQS9DLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFOztJQUN6RCxNQUFNLENBQUNDLEdBQUdDLEtBQUssR0FBR1YsK0NBQVFBLENBQUNLO0lBQzNCLE1BQU0sQ0FBQ00sR0FBR0MsS0FBSyxHQUFHWiwrQ0FBUUEsQ0FBQ007SUFFM0JMLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNWSxlQUFlLElBQU07WUFDekIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLE1BQU07Z0JBQzVCTCxLQUFLSDtnQkFDTEssS0FBS0k7WUFDUCxPQUFPO2dCQUNMTixLQUFLTDtnQkFDTE8sS0FBS047WUFDUCxDQUFDO1FBQ0g7UUFFQU87UUFDQUMsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTyxJQUFNO1lBQ1hDLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDUjtRQUFVQztRQUFVYTtRQUFRSDtLQUFPO0lBRXZDLHFCQUNFLDhEQUFDZCxxREFBVTtRQUNUbUIsV0FBVTtRQUNWQyxZQUFZO1lBQUVDLE9BQU87UUFBSztRQUMxQkMsU0FBUztZQUFFZixHQUFHO1lBQUdFLEdBQUc7UUFBRTtRQUN0QmMsU0FBUztZQUFFaEI7WUFBR0U7UUFBRTtRQUNoQmUsWUFBWTtZQUFFQyxVQUFVO1FBQUk7UUFDNUJDLE9BQU87WUFBRUMsTUFBTXBCO1lBQUdxQixLQUFLbkI7UUFBRTtrQkFFeEJQOzs7Ozs7QUFHUDtHQW5DTUQ7S0FBQUE7QUFxQ04sTUFBTTRCLFNBQVMsSUFBTTtJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFHWCxXQUFVOzBCQUFtRTs7Ozs7OzBCQUNqRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbkIscURBQVU7d0JBQUNtQixXQUFVO3dCQUFzTEMsWUFBWTs0QkFBRUMsT0FBTzt3QkFBSzs7MENBQ3BPLDhEQUFDVTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVMLDhEQUFDOUI7d0JBQVFDLE1BQUs7d0JBQVVDLFVBQVM7d0JBQU9DLFVBQVM7d0JBQU1hLFFBQU87d0JBQU9ILFFBQU87Ozs7OztrQ0FDNUUsOERBQUNiO3dCQUFRQyxNQUFLO3dCQUFTQyxVQUFTO3dCQUFNQyxVQUFTO3dCQUFRYSxRQUFPO3dCQUFPSCxRQUFPOzs7Ozs7Ozs7Ozs7OztBQUtwRjtNQWZNZTtBQWlCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanM/ZTFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBNeVNraWxsID0gKHsgbmFtZSwgaW5pdGlhbFgsIGluaXRpYWxZLCBfMnhsWCwgXzJ4bFkgfSkgPT4ge1xyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKGluaXRpYWxYKTtcclxuICBjb25zdCBbeSwgc2V0WV0gPSB1c2VTdGF0ZShpbml0aWFsWSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE1MzUpIHsgLy8gU21hbGxlciBzY3JlZW4gc2l6ZSwgYWRqdXN0IHBvc2l0aW9uXHJcbiAgICAgICAgc2V0WChfMnhsWCk7XHJcbiAgICAgICAgc2V0WShzbWFsbFkpO1xyXG4gICAgICB9IGVsc2UgeyAvLyBMYXJnZXIgc2NyZWVuIHNpemUsIHVzZSBpbml0aWFsIHBvc2l0aW9uXHJcbiAgICAgICAgc2V0WChpbml0aWFsWCk7XHJcbiAgICAgICAgc2V0WShpbml0aWFsWSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW2luaXRpYWxYLCBpbml0aWFsWSwgc21hbGxYLCBzbWFsbFldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodFwiXHJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cclxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgeCwgeSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUgfX1cclxuICAgICAgc3R5bGU9e3sgbGVmdDogeCwgdG9wOiB5IH19XHJcbiAgICA+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC04eGwgbXQtNjQgdy1mdWxsIHRleHQtY2VudGVyIG1kOnRleHQtNnhsIG1kOm10LTMyXCI+U2tpbGxzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWNpcmN1bGFyTGlnaHQgZGFyazpiZy1jaXJjdWxhckRhcmsgbGc6aC1bODB2aF0gc206aC1bNjB2aF0geHM6aC1bNTB2aF0gbGc6YmctY2lyY3VsYXJMaWdodExnIGxnOmRhcms6YmctY2lyY3VsYXJEYXJrTGcgbWQ6YmctY2lyY3VsYXJMaWdodE1kIG1kOmRhcms6YmctY2lyY3VsYXJEYXJrTWQgc206YmctY2lyY3VsYXJMaWdodFNtIHNtOmRhcms6YmctY2lyY3VsYXJEYXJrU21cIj5cclxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHQgcC02IHNoYWRvdy1kYXJrIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1kYXJrIGRhcms6YmctbGlnaHQgbGc6cC02IG1kOnAtNCB4czp0ZXh0LXhzIHhzOnAtMlwiIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0+XHJcbiAgICAgICAgICA8cD5Tb2Z0d2FyZTwvcD5cclxuICAgICAgICAgIDxwPkRldmVsb3BtZW50PC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiTm9kZS5qc1wiIGluaXRpYWxYPVwiMTB2d1wiIGluaXRpYWxZPVwiMnZ3XCIgc21hbGxYPVwiMTB2d1wiIHNtYWxsWT1cIjEwdndcIiAvPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJHb2xhbmdcIiBpbml0aWFsWD1cIjR2d1wiIGluaXRpYWxZPVwiLTEydndcIiBzbWFsbFg9XCItNHZ3XCIgc21hbGxZPVwiOHZ3XCIgLz5cclxuICAgICAgICB7LyogQWRkIG1vcmUgc2tpbGxzIHdpdGggaW5pdGlhbCBhbmQgc21hbGwgcG9zaXRpb25zICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiTXlTa2lsbCIsIm5hbWUiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiXzJ4bFgiLCJfMnhsWSIsIngiLCJzZXRYIiwieSIsInNldFkiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic21hbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzbWFsbFgiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwibGVmdCIsInRvcCIsIlNraWxscyIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});