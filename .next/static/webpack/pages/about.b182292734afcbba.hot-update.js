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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst MySkill = (param)=>{\n    let { name , initialX , initialY , _2xlX , _2xlY , xlX , xlY , lgX , lgY , mdX , mdY , smX , smY , xsX , xsY  } = param;\n    _s();\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialX);\n    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialY);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 1535) {\n                setX(_2xlX);\n                setY(_2xlY);\n            } else if (window.innerWidth > 1279) {\n                setX(xlX);\n                setY(xlY);\n            } else if (window.innerWidth > 1023) {\n                setX(lgX);\n                setY(lgY);\n            } else if (window.innerWidth > 767) {\n                setX(mdX);\n                setY(mdY);\n            } else if (window.innerWidth > 639) {\n                setX(smX);\n                setY(smY);\n            } else if (window.innerWidth > 479) {\n                setX(xsX);\n                setY(xsY);\n            } else {\n                setX(initialX);\n                setY(initialY);\n            }\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        initialX,\n        initialY,\n        _2xlX,\n        _2xlY,\n        xlX,\n        xlY,\n        mdX,\n        mdY,\n        smX,\n        smY,\n        xsX,\n        xsY\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x,\n            y\n        },\n        transition: {\n            duration: 1.5\n        },\n        style: {\n            left: x,\n            top: y\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MySkill, \"2iT2NOWDBLewp44sG1MXRvMogNU=\");\n_c = MySkill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Development\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Node.js\",\n                        initialX: \"10vw\",\n                        initialY: \"2vw\",\n                        _2xlX: \"15vw\",\n                        _2xlY: \"8vw\",\n                        xlX: \"18vw\",\n                        xlY: \"10vw\",\n                        lgX: \"10vw\",\n                        lgY: \"10vw\",\n                        mdX: \"10vw\",\n                        mdY: \"10vw\",\n                        smX: \"10vw\",\n                        smY: \"10vw\",\n                        xsX: \"10vw\",\n                        xsY: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Golang\",\n                        initialX: \"4vw\",\n                        initialY: \"-12vw\",\n                        _2xlX: \"10vw\",\n                        _2xlY: \"10vw\",\n                        xlX: \"10vw\",\n                        xlY: \"10vw\",\n                        lgX: \"10vw\",\n                        lgY: \"10vw\",\n                        mdX: \"10vw\",\n                        mdY: \"10vw\",\n                        smX: \"10vw\",\n                        smY: \"10vw\",\n                        xsX: \"10vw\",\n                        xsY: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Laravel\",\n                        x: \"-10vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Python\",\n                        x: \"-25vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"ReactJS\",\n                        x: \"-11vw\",\n                        y: \"9vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"ExpressJS\",\n                        x: \"11vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"PostgresQL\",\n                        x: \"-5vw\",\n                        y: \"-6vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"MongoDB\",\n                        x: \"0vw\",\n                        y: \"7vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"MySQL\",\n                        x: \"-21vw\",\n                        y: \"-9vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"PostGIS\",\n                        x: \"-1vw\",\n                        y: \"15vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Mocha\",\n                        x: \"25vw\",\n                        y: \"-2vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Docker\",\n                        x: \"-18vw\",\n                        y: \"-3vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Restify\",\n                        x: \"9vw\",\n                        y: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"JavaScript\",\n                        x: \"7vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"TypeScript\",\n                        x: \"17vw\",\n                        y: \"-11vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"SQLite\",\n                        x: \"22vw\",\n                        y: \"7vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"PHP\",\n                        x: \"-5vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"GraphQL\",\n                        x: \"-17vw\",\n                        y: \"-16vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"GRPC\",\n                        x: \"9vw\",\n                        y: \"-18vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"TensorFlow\",\n                        x: \"-19vw\",\n                        y: \"15vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Next.js\",\n                        x: \"19vw\",\n                        y: \"15vw\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"MySkill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szt3QkFBTWUsR0FBRTt3QkFBT0UsR0FBRTs7Ozs7O2tDQUN2Qiw4REFBQ2xCO3dCQUFRQyxNQUFLO3dCQUFVZSxHQUFFO3dCQUFRRSxHQUFFOzs7Ozs7a0NBQ3BDLDhEQUFDbEI7d0JBQVFDLE1BQUs7d0JBQU9lLEdBQUU7d0JBQU1FLEdBQUU7Ozs7OztrQ0FDL0IsOERBQUNsQjt3QkFBUUMsTUFBSzt3QkFBYWUsR0FBRTt3QkFBUUUsR0FBRTs7Ozs7O2tDQUN2Qyw4REFBQ2xCO3dCQUFRQyxNQUFLO3dCQUFVZSxHQUFFO3dCQUFPRSxHQUFFOzs7Ozs7Ozs7Ozs7OztBQUluRDtNQWpDTWtCO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qcz9lMWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IE15U2tpbGwgPSAoeyBuYW1lLCBpbml0aWFsWCwgaW5pdGlhbFksIF8yeGxYLCBfMnhsWSwgeGxYLCB4bFksIGxnWCwgbGdZLCBtZFgsIG1kWSwgc21YLCBzbVksIHhzWCwgeHNZfSkgPT4ge1xyXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKGluaXRpYWxYKTtcclxuICBjb25zdCBbeSwgc2V0WV0gPSB1c2VTdGF0ZShpbml0aWFsWSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE1MzUpIHsgLy8gU21hbGxlciBzY3JlZW4gc2l6ZSwgYWRqdXN0IHBvc2l0aW9uXHJcbiAgICAgICAgc2V0WChfMnhsWCk7XHJcbiAgICAgICAgc2V0WShfMnhsWSk7XHJcbiAgICAgIH0gZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNzkpIHtcclxuICAgICAgICBzZXRYKHhsWCk7XHJcbiAgICAgICAgc2V0WSh4bFkpO1xyXG4gICAgICB9IGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPiAxMDIzKSB7XHJcbiAgICAgICAgc2V0WChsZ1gpO1xyXG4gICAgICAgIHNldFkobGdZKTtcclxuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSB7XHJcbiAgICAgICAgc2V0WChtZFgpO1xyXG4gICAgICAgIHNldFkobWRZKTtcclxuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNjM5KSB7XHJcbiAgICAgICAgc2V0WChzbVgpO1xyXG4gICAgICAgIHNldFkoc21ZKTtcclxuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNDc5KSB7XHJcbiAgICAgICAgc2V0WCh4c1gpO1xyXG4gICAgICAgIHNldFkoeHNZKTtcclxuICAgICAgfSBlbHNlIHsgLy8gTGFyZ2VyIHNjcmVlbiBzaXplLCB1c2UgaW5pdGlhbCBwb3NpdGlvblxyXG4gICAgICAgIHNldFgoaW5pdGlhbFgpO1xyXG4gICAgICAgIHNldFkoaW5pdGlhbFkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtpbml0aWFsWCwgaW5pdGlhbFksIF8yeGxYLCBfMnhsWSwgeGxYLCB4bFksIG1kWCwgbWRZLCBzbVgsIHNtWSwgeHNYLCB4c1ldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodFwiXHJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cclxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgeCwgeSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUgfX1cclxuICAgICAgc3R5bGU9e3sgbGVmdDogeCwgdG9wOiB5IH19XHJcbiAgICA+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC04eGwgbXQtNjQgdy1mdWxsIHRleHQtY2VudGVyIG1kOnRleHQtNnhsIG1kOm10LTMyXCI+U2tpbGxzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWNpcmN1bGFyTGlnaHQgZGFyazpiZy1jaXJjdWxhckRhcmsgbGc6aC1bODB2aF0gc206aC1bNjB2aF0geHM6aC1bNTB2aF0gbGc6YmctY2lyY3VsYXJMaWdodExnIGxnOmRhcms6YmctY2lyY3VsYXJEYXJrTGcgbWQ6YmctY2lyY3VsYXJMaWdodE1kIG1kOmRhcms6YmctY2lyY3VsYXJEYXJrTWQgc206YmctY2lyY3VsYXJMaWdodFNtIHNtOmRhcms6YmctY2lyY3VsYXJEYXJrU21cIj5cclxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHQgcC02IHNoYWRvdy1kYXJrIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1kYXJrIGRhcms6YmctbGlnaHQgbGc6cC02IG1kOnAtNCB4czp0ZXh0LXhzIHhzOnAtMlwiIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0+XHJcbiAgICAgICAgICA8cD5Tb2Z0d2FyZTwvcD5cclxuICAgICAgICAgIDxwPkRldmVsb3BtZW50PC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiTm9kZS5qc1wiIGluaXRpYWxYPVwiMTB2d1wiIGluaXRpYWxZPVwiMnZ3XCIgXzJ4bFg9XCIxNXZ3XCIgXzJ4bFk9XCI4dndcIiB4bFg9XCIxOHZ3XCIgeGxZPVwiMTB2d1wiIGxnWD1cIjEwdndcIiBsZ1k9XCIxMHZ3XCIgbWRYPVwiMTB2d1wiIG1kWT1cIjEwdndcIiBzbVg9XCIxMHZ3XCIgc21ZPVwiMTB2d1wiIHhzWD1cIjEwdndcIiB4c1k9XCIxMHZ3XCIgLz5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiR29sYW5nXCIgaW5pdGlhbFg9XCI0dndcIiBpbml0aWFsWT1cIi0xMnZ3XCIgXzJ4bFg9XCIxMHZ3XCIgXzJ4bFk9XCIxMHZ3XCIgeGxYPVwiMTB2d1wiIHhsWT1cIjEwdndcIiBsZ1g9XCIxMHZ3XCIgbGdZPVwiMTB2d1wiIG1kWD1cIjEwdndcIiBtZFk9XCIxMHZ3XCIgc21YPVwiMTB2d1wiIHNtWT1cIjEwdndcIiB4c1g9XCIxMHZ3XCIgeHNZPVwiMTB2d1wiIC8+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIkxhcmF2ZWxcIiB4PVwiLTEwdndcIiB5PVwiLTEwdndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIlB5dGhvblwiIHg9XCItMjV2d1wiIHk9XCIydndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIlJlYWN0SlNcIiB4PVwiLTExdndcIiB5PVwiOXZ3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJFeHByZXNzSlNcIiB4PVwiMTF2d1wiIHk9XCIydndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIlBvc3RncmVzUUxcIiB4PVwiLTV2d1wiIHk9XCItNnZ3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJNb25nb0RCXCIgeD1cIjB2d1wiIHk9XCI3dndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIk15U1FMXCIgeD1cIi0yMXZ3XCIgeT1cIi05dndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIlBvc3RHSVNcIiB4PVwiLTF2d1wiIHk9XCIxNXZ3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJNb2NoYVwiIHg9XCIyNXZ3XCIgeT1cIi0ydndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIkRvY2tlclwiIHg9XCItMTh2d1wiIHk9XCItM3Z3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJSZXN0aWZ5XCIgeD1cIjl2d1wiIHk9XCIxMHZ3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJKYXZhU2NyaXB0XCIgeD1cIjd2d1wiIHk9XCItNXZ3XCI+PC9NeVNraWxsPlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJUeXBlU2NyaXB0XCIgeD1cIjE3dndcIiB5PVwiLTExdndcIj48L015U2tpbGw+XHJcbiAgICAgICAgPE15U2tpbGwgbmFtZT1cIlNRTGl0ZVwiIHg9XCIyMnZ3XCIgeT1cIjd2d1wiPjwvTXlTa2lsbD5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiUEhQXCIgeD1cIi01dndcIiB5PVwiLTE1dndcIj48L015U2tpbGw+XHJcbiAgICAgICAgICAgICAgICA8TXlTa2lsbCBuYW1lPVwiR3JhcGhRTFwiIHg9XCItMTd2d1wiIHk9XCItMTZ2d1wiPjwvTXlTa2lsbD5cclxuICAgICAgICAgICAgICAgIDxNeVNraWxsIG5hbWU9XCJHUlBDXCIgeD1cIjl2d1wiIHk9XCItMTh2d1wiPjwvTXlTa2lsbD5cclxuICAgICAgICAgICAgICAgIDxNeVNraWxsIG5hbWU9XCJUZW5zb3JGbG93XCIgeD1cIi0xOXZ3XCIgeT1cIjE1dndcIj48L015U2tpbGw+XHJcbiAgICAgICAgICAgICAgICA8TXlTa2lsbCBuYW1lPVwiTmV4dC5qc1wiIHg9XCIxOXZ3XCIgeT1cIjE1dndcIj48L015U2tpbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJNeVNraWxsIiwibmFtZSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJfMnhsWCIsIl8yeGxZIiwieGxYIiwieGxZIiwibGdYIiwibGdZIiwibWRYIiwibWRZIiwic21YIiwic21ZIiwieHNYIiwieHNZIiwieCIsInNldFgiLCJ5Iiwic2V0WSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiU2tpbGxzIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});