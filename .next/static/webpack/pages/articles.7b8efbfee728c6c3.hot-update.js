"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading screen in react js.jpg */ \"./public/images/articles/create loading screen in react js.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var _public_images_articles_articlesDark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/images/articles/articlesDark.png */ \"./public/images/articles/articlesDark.png\");\n/* harmony import */ var _public_images_articles_articlesLight_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/images/articles/articlesLight.png */ \"./public/images/articles/articlesLight.png\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { image , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.li, {\n        initial: {\n            y: 200\n        },\n        whileInView: {\n            y: 0,\n            transition: {\n                duration: 0.5,\n                ease: \"easeInOut\"\n            }\n        },\n        viewport: {\n            once: true\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: image,\n                link: link\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm\",\n                children: date\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    priority: true,\n                    sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    _s1();\n    const [z, setZ] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 1535) {\n                setZ(\"\\uD83D\\uDEA7 The work you wanted to see is still in progress \\uD83D\\uDEA7\");\n            } else if (window.innerWidth > 1279) {\n                setZ(\"\\uD83D\\uDEA7 The work you wanted to see is still in progress \\uD83D\\uDEA7\");\n            } else if (window.innerWidth > 1023) {\n                setZ(\"\\uD83D\\uDEA7 The work you wanted to see is still in progress \\uD83D\\uDEA7\");\n            } else if (window.innerWidth > 767) {\n                setZ(\"\\uD83D\\uDEA7 Work in Progress \\uD83D\\uDEA7\");\n            } else if (window.innerWidth > 639) {\n                setZ(\"\\uD83D\\uDEA7 Work in Progress \\uD83D\\uDEA7\");\n            } else if (window.innerWidth > 479) {\n                setZ(\"\\uD83D\\uDEA7 Work in Progress \\uD83D\\uDEA7\");\n            } else {\n                setZ(\"\\uD83D\\uDEA7 Work in Progress \\uD83D\\uDEA7\");\n            }\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Farkhan Hamzah Firdaus | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"farkhan description\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center floating\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-Pic dark:bg-Pic-dark w-full h-[28rem] md:w-full\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                                lineNumber: 140,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 139,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"flex justify-center items-center pt-10 pb-2 text-2xl font-semibold sm:pt-0 sm:pb-2\",\n                            children: \"So eager aren't we ?\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex justify-center items-center text-1xl font-medium text-dark/75 dark:text-light/75\",\n                            children: z\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s1(articles, \"yEb4RPgGpIHeN+y5jVZTFTg1BXo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7c0NBQ1gsNEVBQUNvQjtnQ0FBSXBCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ0Q7NEJBQUdDLFdBQVU7c0NBQXFGOzs7Ozs7c0NBQ25HLDhEQUFDeUI7NEJBQUV6QixXQUFVO3NDQUF5RjJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFIO0lBL0VNRDtBQWlGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRleHQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBhcnRpY2xlMSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9wYWdpbmF0aW9uIGNvbXBvbmVudCBpbiByZWFjdGpzLmpwZ1wiXHJcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbG9hZGluZyBzY3JlZW4gaW4gcmVhY3QganMuanBnXCJcclxuaW1wb3J0IGFydGljbGUzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2NyZWF0ZSBtb2RhbCBjb21wb25lbnQgaW4gcmVhY3QgdXNpbmcgcmVhY3QgcG9ydGFscy5wbmdcIlxyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHVzZVRoZW1lU3dpdGNoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9va3MvdXNlVGhlbWVTd2l0Y2hlclwiXHJcbmltcG9ydCB7IEFydGljbGVzSWNvbjEsIEFydGljbGVzSWNvbjIgfSBmcm9tICdAL2NvbXBvbmVudHMvSWNvbnMnXHJcbmltcG9ydCBhcnRpY2xlczEgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlc0RhcmsucG5nJztcclxuaW1wb3J0IGFydGljbGVzMiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGVzTGlnaHQucG5nJztcclxuXHJcbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcclxuXHJcbmNvbnN0IE1vdmluZ0ltZyA9ICh7dGl0bGUsIGltZywgbGlua30pID0+IHtcclxuXHJcbiAgICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMCk7XHJcbiAgICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMCk7XHJcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2UoZXZlbnQpIHtcclxuICAgICAgICBpbWdSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIHguc2V0KGV2ZW50LnBhZ2VYKVxyXG4gICAgICAgIHkuc2V0KC0xMClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgeC5zZXQoMClcclxuICAgICAgICB5LnNldCgwKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZX0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdjYXBpdGFsaXplIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3Zlcjp1bmRlcmxpbmUnPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDxGcmFtZXJJbWFnZSBzdHlsZT17eyB4OngsIHk6eSB9fSBpbml0aWFsPXt7b3BhY2l0eTogMH19IHdoaWxlSW5WaWV3PXt7b3BhY2l0eTogMSwgdHJhbnNpdGlvbjp7ZHVyYXRpb246IDAuMn19fSByZWY9e2ltZ1JlZn0gc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT0nei0xMCB3LTk2IGgtYXV0byBoaWRkZW4gYWJzb2x1dGUgcm91bmRlZC1sZyBtZDohaGlkZGVuJyAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7aW1hZ2UsIHRpdGxlLCBkYXRlLCBsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtb3Rpb24ubGkgaW5pdGlhbD17e3k6MjAwfX0gd2hpbGVJblZpZXc9e3t5OjAsIHRyYW5zaXRpb246e2R1cmF0aW9uOjAuNSwgZWFzZTpcImVhc2VJbk91dFwifX19IHZpZXdwb3J0PXt7b25jZTogdHJ1ZX19IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIHAtNCBweS02IG15LTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctbGlnaHQgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBib3JkZXItci00IGJvcmRlci1iLTQgZGFyazpib3JkZXItbGlnaHQgZGFyazpiZy1kYXJrIGRhcms6dGV4dC1saWdodCBzbTpmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxNb3ZpbmdJbWcgdGl0bGU9e3RpdGxlfSBpbWc9e2ltYWdlfSBsaW5rPXtsaW5rfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeURhcmsgZm9udC1zZW1pYm9sZCBwbC00IHNtOnNlbGYtc3RhcnQgc206cGwtMCB4czp0ZXh0LXNtJz57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSwgdGltZSwgc3VtbWFyeSwgbGlua30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0ncmVsYXRpdmUgY29sLXNwYW4tMSB3LWZ1bGwgcC00IGJnLWxpZ2h0IGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGwgZGFyazpiZy1kYXJrIGRhcms6Ym9yZGVyLWxpZ2h0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMSVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsgcm91bmRlZC1ici0zeGwgZGFyazpiZy1saWdodCcgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0ndy1mdWxsIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyc+XHJcbiAgICAgICAgICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIiB3aGlsZUhvdmVyPXt7c2NhbGU6MS4wNX19IHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjJ9fSBwcmlvcml0eSBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dywgKG1heC13aWR0aDogMTIwMHB4KSA1MHZ3LCA1MHZ3XCIgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjYXBpdGFsaXplIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yIG10LTQgaG92ZXI6dW5kZXJsaW5lIHhzOnRleHQtbGcnPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBtYi0yJz57c3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5RGFyayBmb250LXNlbWlib2xkJz57dGltZX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbeiwgc2V0Wl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTUzNSkgeyAvLyBTbWFsbGVyIHNjcmVlbiBzaXplLCBhZGp1c3QgcG9zaXRpb25cclxuICAgICAgICAgIHNldFooXCLwn5qnIFRoZSB3b3JrIHlvdSB3YW50ZWQgdG8gc2VlIGlzIHN0aWxsIGluIHByb2dyZXNzIPCfmqdcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI3OSkge1xyXG4gICAgICAgICAgc2V0WihcIvCfmqcgVGhlIHdvcmsgeW91IHdhbnRlZCB0byBzZWUgaXMgc3RpbGwgaW4gcHJvZ3Jlc3Mg8J+ap1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPiAxMDIzKSB7XHJcbiAgICAgICAgICBzZXRaKFwi8J+apyBUaGUgd29yayB5b3Ugd2FudGVkIHRvIHNlZSBpcyBzdGlsbCBpbiBwcm9ncmVzcyDwn5qnXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgICAgc2V0WihcIvCfmqcgV29yayBpbiBQcm9ncmVzcyDwn5qnXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDYzOSkge1xyXG4gICAgICAgICAgc2V0WihcIvCfmqcgV29yayBpbiBQcm9ncmVzcyDwn5qnXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDQ3OSkge1xyXG4gICAgICAgICAgc2V0WihcIvCfmqcgV29yayBpbiBQcm9ncmVzcyDwn5qnXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIFNtYWxsZXIgc2NyZWVuIHNpemVcclxuICAgICAgICAgIHNldFooXCLwn5qnIFdvcmsgaW4gUHJvZ3Jlc3Mg8J+ap1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RmFya2hhbiBIYW16YWggRmlyZGF1cyB8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J2ZhcmtoYW4gZGVzY3JpcHRpb24nIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSd3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGRhcms6dGV4dC1saWdodCc+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QW5pbWF0ZWRUZXh0IHRleHQ9XCJXb3JkcyBDYW4gQ2FobmdlIFRoZSBXb3JsZCFcIiBjbGFzc05hbWU9J21iLTE2IGxnOiF0ZXh0LTd4bCBzbTptYi04IHNtOiF0ZXh0LTZ4bCB4czohdGV4dC00eGwgdGV4dC1jZW50ZXInIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGl0ZW1zLWNlbnRlciBnYXAtMTYgbGctZ2FwLTggbWQ6Z3JpZC1jb2xzLTEgbWQ6Z2FwLXktMTYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT1cIkxlYXJuIGhvdyB0byBidWlsZCBhIGN1c3RvbSBwYWdpbmF0aW9uIGNvbXBvbmVudCBpbiBSZWFjdEpTIGZyb20gc2NyYXRjaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3QuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT1cIjkgbWluIHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IHRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBQYWdpbmF0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0SlMgcHJvamVjdC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTR4bCB3LWZ1bGwgdGV4dC1jZW50ZXIgbXktMTYgbXQtMzInPkFsbCBBcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDAxLCAyMDIzXCIgbGluaz1cIi9cIiBpbWFnZT17YXJ0aWNsZTN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMDEsIDIwMjNcIiBsaW5rPVwiL1wiIGltYWdlPXthcnRpY2xlM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAwMSwgMjAyM1wiIGxpbms9XCIvXCIgaW1hZ2U9e2FydGljbGUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDAxLCAyMDIzXCIgbGluaz1cIi9cIiBpbWFnZT17YXJ0aWNsZTN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMDEsIDIwMjNcIiBsaW5rPVwiL1wiIGltYWdlPXthcnRpY2xlM30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1QaWMgZGFyazpiZy1QaWMtZGFyayB3LWZ1bGwgaC1bMjhyZW1dIG1kOnctZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTEwIHBiLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBzbTpwdC0wIHNtOnBiLTInPlNvIGVhZ2VyIGFyZW4ndCB3ZSA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtMXhsIGZvbnQtbWVkaXVtIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzUnPnt6fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzIl0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIkxheW91dCIsIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwibW90aW9uIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VUaGVtZVN3aXRjaGVyIiwiQXJ0aWNsZXNJY29uMSIsIkFydGljbGVzSWNvbjIiLCJhcnRpY2xlczEiLCJhcnRpY2xlczIiLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW91c2UiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdXNlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiaW1hZ2UiLCJkYXRlIiwibGkiLCJlYXNlIiwidmlld3BvcnQiLCJvbmNlIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsInRpbWUiLCJzdW1tYXJ5IiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwicHJpb3JpdHkiLCJzaXplcyIsInAiLCJhcnRpY2xlcyIsInoiLCJzZXRaIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});