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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst MySkill = (param)=>{\n    let { name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x,\n            y\n        },\n        transition: {\n            duration: 1.5\n        },\n        style: {\n            left: x,\n            top: y\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MySkill;\nconst Skills = ()=>{\n    const getAdjustedPosition = (screenSize, x, y)=>{\n        if (screenSize === \"lg\") {\n            return {\n                x: x,\n                y: y\n            };\n        } else if (screenSize === \"md\") {\n            return {\n                x: x,\n                y: y\n            };\n        } else if (screenSize === \"sm\") {\n            return {\n                x: x,\n                y: y\n            };\n        } else if (screenSize === \"xs\") {\n            return {\n                x: x,\n                y: y\n            };\n        }\n        // Default position if screenSize is not matched\n        return {\n            x: \"0\",\n            y: \"0\"\n        };\n    };\n    const getCurrentScreenSize = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth >= 1535) {\n            return \"2xl\";\n        } else if (screenWidth >= 1279) {\n            return \"xl\";\n        } else if (screenWidth >= 1023) {\n            return \"lg\";\n        } else if (screenWidth >= 767) {\n            return \"md\";\n        } else if (screenWidth >= 639) {\n            return \"sm\";\n        } else {\n            return \"xs\";\n        }\n    };\n    const currentScreenSize = getCurrentScreenSize();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex flex-col items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Development\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Node.js\",\n                        ...getAdjustedPosition(currentScreenSize, \"15vw\", \"2vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Golang\",\n                        ...getAdjustedPosition(currentScreenSize, \"15vw\", \"2vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySkill, {\n                        name: \"Laravel\",\n                        ...getAdjustedPosition(currentScreenSize, \"-11vw\", \"2vw\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\components\\\\Skills.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"MySkill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFVBQVUsU0FBb0I7UUFBbkIsRUFBRUMsS0FBSSxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRTtJQUM3QixxQkFDRSw4REFBQ0oscURBQVU7UUFDVE0sV0FBVTtRQUNWQyxZQUFZO1lBQUVDLE9BQU87UUFBSztRQUMxQkMsU0FBUztZQUFFTixHQUFHO1lBQUdDLEdBQUc7UUFBRTtRQUN0Qk0sU0FBUztZQUFFUDtZQUFHQztRQUFFO1FBQ2hCTyxZQUFZO1lBQUVDLFVBQVU7UUFBSTtRQUM1QkMsT0FBTztZQUFFQyxNQUFNWDtZQUFHWSxLQUFLWDtRQUFFO2tCQUV4QkY7Ozs7OztBQUdQO0tBYk1EO0FBZU4sTUFBTWUsU0FBUyxJQUFNO0lBQ25CLE1BQU1DLHNCQUFzQixDQUFDQyxZQUFZZixHQUFHQyxJQUFNO1FBQ2hELElBQUljLGVBQWUsTUFBTTtZQUN2QixPQUFPO2dCQUFFZixHQUFHQTtnQkFBR0MsR0FBR0E7WUFBRTtRQUN0QixPQUFPLElBQUljLGVBQWUsTUFBTTtZQUM5QixPQUFPO2dCQUFFZixHQUFHQTtnQkFBR0MsR0FBR0E7WUFBRTtRQUN0QixPQUFPLElBQUljLGVBQWUsTUFBTTtZQUM5QixPQUFPO2dCQUFFZixHQUFHQTtnQkFBR0MsR0FBR0E7WUFBRTtRQUN0QixPQUFPLElBQUljLGVBQWUsTUFBTTtZQUM5QixPQUFPO2dCQUFFZixHQUFHQTtnQkFBR0MsR0FBR0E7WUFBRTtRQUN0QixDQUFDO1FBRUQsZ0RBQWdEO1FBQ2hELE9BQU87WUFBRUQsR0FBRztZQUFLQyxHQUFHO1FBQUk7SUFDMUI7SUFFQSxNQUFNZSx1QkFBdUIsSUFBTTtRQUNqQyxNQUFNQyxjQUFjQyxPQUFPQyxVQUFVO1FBQ3JDLElBQUlGLGVBQWUsTUFBTTtZQUNyQixPQUFPO1FBQ1gsT0FBTyxJQUFJQSxlQUFlLE1BQU07WUFDOUIsT0FBTztRQUNULE9BQU8sSUFBSUEsZUFBZSxNQUFNO1lBQzlCLE9BQU87UUFDVCxPQUFPLElBQUlBLGVBQWUsS0FBSztZQUM3QixPQUFPO1FBQ1QsT0FBTyxJQUFJQSxlQUFlLEtBQUs7WUFDN0IsT0FBTztRQUNULE9BQU87WUFDTCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBRUEsTUFBTUcsb0JBQW9CSjtJQUUxQixxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUFHbEIsV0FBVTswQkFBbUU7Ozs7OzswQkFDakYsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ04scURBQVU7d0JBQUNNLFdBQVU7d0JBQXNMQyxZQUFZOzRCQUFFQyxPQUFPO3dCQUFLOzswQ0FDcE8sOERBQUNpQjswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVMLDhEQUFDeEI7d0JBQVFDLE1BQUs7d0JBQVcsR0FBR2Usb0JBQW9CTSxtQkFBbUIsUUFBUSxNQUFNOzs7Ozs7a0NBQ2pGLDhEQUFDdEI7d0JBQVFDLE1BQUs7d0JBQVUsR0FBR2Usb0JBQW9CTSxtQkFBbUIsUUFBUSxNQUFNOzs7Ozs7a0NBQ2hGLDhEQUFDdEI7d0JBQVFDLE1BQUs7d0JBQVcsR0FBR2Usb0JBQW9CTSxtQkFBbUIsU0FBUyxNQUFNOzs7Ozs7Ozs7Ozs7OztBQUsxRjtNQWxETVA7QUFvRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBNeVNraWxsID0gKHsgbmFtZSwgeCwgeSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodFwiXHJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cclxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgeCwgeSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUgfX1cclxuICAgICAgc3R5bGU9e3sgbGVmdDogeCwgdG9wOiB5IH19XHJcbiAgICA+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0QWRqdXN0ZWRQb3NpdGlvbiA9IChzY3JlZW5TaXplLCB4LCB5KSA9PiB7XHJcbiAgICBpZiAoc2NyZWVuU2l6ZSA9PT0gJ2xnJykge1xyXG4gICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlblNpemUgPT09ICdtZCcpIHtcclxuICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW5TaXplID09PSAnc20nKSB7XHJcbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuU2l6ZSA9PT0gJ3hzJykge1xyXG4gICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBwb3NpdGlvbiBpZiBzY3JlZW5TaXplIGlzIG5vdCBtYXRjaGVkXHJcbiAgICByZXR1cm4geyB4OiAnMCcsIHk6ICcwJyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRTY3JlZW5TaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA+PSAxNTM1KSB7XHJcbiAgICAgICAgcmV0dXJuICcyeGwnXHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbldpZHRoID49IDEyNzkpIHtcclxuICAgICAgcmV0dXJuICd4bCc7XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbldpZHRoID49IDEwMjMpIHtcclxuICAgICAgcmV0dXJuICdsZyc7XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbldpZHRoID49IDc2Nykge1xyXG4gICAgICByZXR1cm4gJ21kJztcclxuICAgIH0gZWxzZSBpZiAoc2NyZWVuV2lkdGggPj0gNjM5KSB7XHJcbiAgICAgIHJldHVybiAnc20nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICd4cyc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VycmVudFNjcmVlblNpemUgPSBnZXRDdXJyZW50U2NyZWVuU2l6ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTh4bCBtdC02NCB3LWZ1bGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC02eGwgbWQ6bXQtMzJcIj5Ta2lsbHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodCBkYXJrOmJnLWNpcmN1bGFyRGFyayBsZzpoLVs4MHZoXSBzbTpoLVs2MHZoXSB4czpoLVs1MHZoXSBsZzpiZy1jaXJjdWxhckxpZ2h0TGcgbGc6ZGFyazpiZy1jaXJjdWxhckRhcmtMZyBtZDpiZy1jaXJjdWxhckxpZ2h0TWQgbWQ6ZGFyazpiZy1jaXJjdWxhckRhcmtNZCBzbTpiZy1jaXJjdWxhckxpZ2h0U20gc206ZGFyazpiZy1jaXJjdWxhckRhcmtTbVwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBwLTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgZGFyazp0ZXh0LWRhcmsgZGFyazpiZy1saWdodCBsZzpwLTYgbWQ6cC00IHhzOnRleHQteHMgeHM6cC0yXCIgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fT5cclxuICAgICAgICAgIDxwPlNvZnR3YXJlPC9wPlxyXG4gICAgICAgICAgPHA+RGV2ZWxvcG1lbnQ8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDxNeVNraWxsIG5hbWU9XCJOb2RlLmpzXCIgey4uLmdldEFkanVzdGVkUG9zaXRpb24oY3VycmVudFNjcmVlblNpemUsIFwiMTV2d1wiLCBcIjJ2d1wiKX0gLz5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiR29sYW5nXCIgey4uLmdldEFkanVzdGVkUG9zaXRpb24oY3VycmVudFNjcmVlblNpemUsIFwiMTV2d1wiLCBcIjJ2d1wiKX0gLz5cclxuICAgICAgICA8TXlTa2lsbCBuYW1lPVwiTGFyYXZlbFwiIHsuLi5nZXRBZGp1c3RlZFBvc2l0aW9uKGN1cnJlbnRTY3JlZW5TaXplLCBcIi0xMXZ3XCIsIFwiMnZ3XCIpfSAvPlxyXG4gICAgICAgIHsvKiBBZGQgbW9yZSBza2lsbHMgd2l0aCBhZGp1c3RlZCBwb3NpdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiTXlTa2lsbCIsIm5hbWUiLCJ4IiwieSIsImRpdiIsImNsYXNzTmFtZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiU2tpbGxzIiwiZ2V0QWRqdXN0ZWRQb3NpdGlvbiIsInNjcmVlblNpemUiLCJnZXRDdXJyZW50U2NyZWVuU2l6ZSIsInNjcmVlbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImN1cnJlbnRTY3JlZW5TaXplIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});