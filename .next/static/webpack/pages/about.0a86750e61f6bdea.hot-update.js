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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_farkhan10_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/farkhan10.png */ \"./public/images/profile/farkhan10.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Farkhan Hamzah Firdaus | About Page\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"farkhan description\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"Biography\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm Farkhan, a software engineer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty. It's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _public_images_profile_farkhan10_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"Farkhan\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-evenly\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 10\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 83\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 2\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 83\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years experiences\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ3hCO0FBQ3lCO0FBQ2I7QUFDVjtBQUNvQztBQUNFO0FBRXBFLE1BQU1ZLGtCQUFrQixTQUFhO1FBQVosRUFBQ0MsTUFBSyxFQUFDOztJQUM1QixNQUFNQyxNQUFNVCw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXZCLE1BQU1VLGNBQWNMLDZEQUFjQSxDQUFDO0lBQ25DLE1BQU1NLGNBQWNMLHdEQUFTQSxDQUFDSSxhQUFhO1FBQUNFLFVBQVU7SUFBSTtJQUMxRCxNQUFNQyxXQUFXVCx3REFBU0EsQ0FBQ0ssS0FBSztRQUFDSyxNQUFNLElBQUk7SUFBQTtJQUUzQ2YsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUdjLFVBQVM7WUFDUkgsWUFBWUssR0FBRyxDQUFDUDtRQUNwQixDQUFDO0lBQ0wsR0FBRztRQUFDSztRQUFVTDtRQUFPRTtLQUFZO0lBRWpDWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pZLFlBQVlLLEVBQUUsQ0FBQyxVQUFVLENBQUNDLFNBQVc7WUFDakMsSUFBR1IsSUFBSVMsT0FBTyxJQUFJRCxPQUFPRSxPQUFPLENBQUMsTUFBTVgsT0FBTztnQkFDMUNDLElBQUlTLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHSCxPQUFPRSxPQUFPLENBQUM7WUFDN0MsQ0FBQztRQUNMO0lBQ0osR0FBRztRQUFDUjtRQUFhSDtLQUFNO0lBRXZCLHFCQUFPLDhEQUFDYTtRQUFLWixLQUFLQTs7Ozs7O0FBQ3RCO0dBdEJNRjs7UUFHa0JGLHlEQUFjQTtRQUNkQyxvREFBU0E7UUFDWkYsb0RBQVNBOzs7S0FMeEJHO0FBd0JOLE1BQU1lLFFBQVEsSUFBTTtJQUNoQixxQkFDSTs7MEJBQ0ksOERBQUMxQixrREFBSUE7O2tDQUNELDhEQUFDMkI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNaLDRFQUFDM0IsMERBQU1BO29CQUFDMkIsV0FBVTs7c0NBQ2QsOERBQUNqQyxnRUFBWUE7NEJBQUNrQyxNQUFLOzRCQUF5QkQsV0FBVTs7Ozs7O3NDQUN0RCw4REFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ1gsOERBQUNHOzRDQUFHSCxXQUFVO3NEQUFnRDs7Ozs7O3NEQUM5RCw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQWM7Ozs7OztzREFLM0IsOERBQUNJOzRDQUFFSixXQUFVO3NEQUFtQjs7Ozs7O3NEQUloQyw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQWM7Ozs7Ozs7Ozs7Ozs4Q0FNL0IsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0U7NENBQUlGLFdBQVU7Ozs7OztzREFDZiw4REFBQzFCLG1EQUFLQTs0Q0FBQytCLEtBQUs5Qiw0RUFBVUE7NENBQUUrQixLQUFJOzRDQUFVTixXQUFVOzs7Ozs7Ozs7Ozs7OENBR3BELDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ1gsOERBQUNFOzRDQUFJRixXQUFVOzs4REFDWCw4REFBQ1A7b0RBQUtPLFdBQVU7O3NFQUFrQyw4REFBQ3JCOzREQUFnQkMsT0FBTzs7Ozs7O3dEQUFNOzs7Ozs7OzhEQUNoRiw4REFBQ3VCO29EQUFHSCxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs7c0VBQWtDLDhEQUFDckI7NERBQWdCQyxPQUFPOzs7Ozs7d0RBQUs7Ozs7Ozs7OERBQy9FLDhEQUFDdUI7b0RBQUdILFdBQVU7OERBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVGO0FBRUEsK0RBQWVOLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvZmFya2hhbjEwLnBuZ1wiXHJcbmltcG9ydCB7IHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5jb25zdCBBbmltYXRlZE51bWJlcnMgPSAoe3ZhbHVlfSkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3QgbW90aW9uVmFsdWUgPSB1c2VNb3Rpb25WYWx1ZSgwKVxyXG4gICAgY29uc3Qgc3ByaW5nVmFsdWUgPSB1c2VTcHJpbmcobW90aW9uVmFsdWUsIHtkdXJhdGlvbjogMzAwMH0pXHJcbiAgICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHtvbmNlOiB0cnVlfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzSW5WaWV3KXtcclxuICAgICAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0luVmlldywgdmFsdWUsIG1vdGlvblZhbHVlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNwcmluZ1ZhbHVlLm9uKFwiY2hhbmdlXCIsIChsYXRlc3QpID0+IHtcclxuICAgICAgICAgICAgaWYocmVmLmN1cnJlbnQgJiYgbGF0ZXN0LnRvRml4ZWQoMCkgPD0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnRleHRDb250ZW50ID0gbGF0ZXN0LnRvRml4ZWQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbc3ByaW5nVmFsdWUsIHZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pjwvc3Bhbj5cclxufVxyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkZhcmtoYW4gSGFtemFoIEZpcmRhdXMgfCBBYm91dCBQYWdlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdmYXJraGFuIGRlc2NyaXB0aW9uJyAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPSdwdC0xNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlIVwiIGNsYXNzTmFtZT0nbWItMTYnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgdy1mdWxsIGdyaWQtY29scy04IGdhcC0xNic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1kYXJrLzc1Jz5CaW9ncmFwaHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGksIEknbSBGYXJraGFuLCBhIHNvZnR3YXJlIGVuZ2luZWVyIGFuZCBVSS9VWCBkZXNpZ25lciB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgdXNlci1jZW50ZXJlZCBkaWdpdGFsIGV4cGVyaWVuY2VzLiBXaXRoIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0aGUgZmllbGQuIEkgYW0gYWx3YXlzIGxvb2tpbmcgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBhbmQgaW5ub3ZhdGl2ZSB3YXlzIHRvIGJyaW5nIG15IGNsaWVudHMnIHZpc2lvbnMgdG8gbGlmZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktNCBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgZGVzaWduIGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IG1ha2luZyB0aGluZ3MgbG9vayBwcmV0dHkuIEl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgY3JlYXRpbmcgaW50dWl0aXZlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmpveWFibGUgZXhwZXJpZW5jZXMgZm9yIHVzZXJzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgSSdtIHdvcmtpbmcgb24gYSB3ZWJzaXRlLCBtb2JpbGUgYXBwLCBvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlciBkaWdpdGFsIHByb2R1Y3QsIEkgYnJpbmcgbXkgY29tbWl0bWVudCB0byBkZXNpZ24gZXhjZWxsZW5jZSBhbmQgdXNlci1jZW50ZXJlZCB0aGlua2luZyB0byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVyeSBwcm9qZWN0IEkgd29yayBvbi4gSSBsb29rIGZvcndhcmQgdG8gdGhlIG9wcG9ydHVuaXR5IHRvIGJyaW5nIG15IHNraWxscyBhbmQgcGFzc2lvbiB0byB5b3VyIG5leHQgcHJvamVjdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIHJlbGF0aXZlIGgtbWF4IHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBiZy1saWdodCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMiVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSBhbHQ9XCJGYXJraGFuXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByb3VuZGVkLTJ4bFwiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1ldmVubHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQnPjxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezEwfSAvPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NSc+cHJvamVjdHMgY29tcGxldGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQnPjxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezJ9IC8+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgdGV4dC1kYXJrLzc1Jz55ZWFycyBleHBlcmllbmNlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0Il0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIkhlYWQiLCJSZWFjdCIsInVzZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxheW91dCIsIkltYWdlIiwicHJvZmlsZVBpYyIsInVzZUluVmlldyIsInVzZU1vdGlvblZhbHVlIiwidXNlU3ByaW5nIiwiQW5pbWF0ZWROdW1iZXJzIiwidmFsdWUiLCJyZWYiLCJtb3Rpb25WYWx1ZSIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsIm9uY2UiLCJzZXQiLCJvbiIsImxhdGVzdCIsImN1cnJlbnQiLCJ0b0ZpeGVkIiwidGV4dENvbnRlbnQiLCJzcGFuIiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZGl2IiwiaDIiLCJwIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});