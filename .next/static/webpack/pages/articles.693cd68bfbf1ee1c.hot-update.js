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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading screen in react js.jpg */ \"./public/images/articles/create loading screen in react js.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var _public_images_articles_articlesDark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/images/articles/articlesDark.png */ \"./public/images/articles/articlesDark.png?3024\");\n/* harmony import */ var _public_images_articles_articlesLight_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/images/articles/articlesLight.png */ \"./public/images/articles/articlesLight.png?4b61\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_14__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { image , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.li, {\n        initial: {\n            y: 200\n        },\n        whileInView: {\n            y: 0,\n            transition: {\n                duration: 0.5,\n                ease: \"easeInOut\"\n            }\n        },\n        viewport: {\n            once: true\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: image,\n                link: link\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm\",\n                children: date\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    priority: true,\n                    sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_components_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            setImageSrc(_public_images_articles_articlesDark_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\n        } else {\n            setImageSrc(_public_images_articles_articlesLight_png__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n        }\n    }, [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Farkhan Hamzah Firdaus | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"farkhan description\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center floating\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons__WEBPACK_IMPORTED_MODULE_11__.ArticlesIcon2, {\n                            className: \"!w-[500\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 122,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 121,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ReactJS\\\\my-porto\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s1(articles, \"NMERTpJnTH96YHCKfuqDoEP2ZlI=\", false, function() {\n    return [\n        _components_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxRQUFPOzBCQUNyQiw0RUFBQ0c7b0JBQUdDLFdBQVU7OEJBQXNFbkI7Ozs7Ozs7Ozs7OzBCQUV4Riw4REFBQzRDO2dCQUFFekIsV0FBVTswQkFBZ0JtQjs7Ozs7OzBCQUM3Qiw4REFBQ0g7Z0JBQUtoQixXQUFVOzBCQUFvRGtCOzs7Ozs7Ozs7Ozs7QUFHaEY7TUFkTUQ7QUFnQk4sTUFBTVMsV0FBVyxJQUFNOztJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3RELCtFQUFnQkE7SUFDeEMsTUFBTSxDQUFDdUQsVUFBVUMsWUFBWSxHQUFHaEUsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJNEQsU0FBUyxRQUFRO1lBQ25CRyxZQUFZckQsaUZBQVNBO1FBQ3ZCLE9BQU87WUFDTHFELFlBQVlwRCxrRkFBU0E7UUFDdkIsQ0FBQztJQUNILEdBQUc7UUFBQ2lEO0tBQUs7SUFDVCxxQkFDSTs7MEJBQ0ksOERBQUNqRSxrREFBSUE7O2tDQUNELDhEQUFDbUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ2tEO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBS2xDLFdBQVU7MEJBQ1osNEVBQUN2QywwREFBTUE7b0JBQUN1QyxXQUFVOzhCQWtDZCw0RUFBQ29CO3dCQUFJcEIsV0FBVTtrQ0FDWCw0RUFBQ3hCLDZEQUFhQTs0QkFBQ3dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxEO0lBN0RNMEI7O1FBQ3NCcEQsMkVBQWdCQTs7O0FBOEQ1QywrREFBZW9ELFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gcmVhY3Rqcy5qcGdcIlxyXG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIGxvYWRpbmcgc2NyZWVuIGluIHJlYWN0IGpzLmpwZ1wiXHJcbmltcG9ydCBhcnRpY2xlMyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbW9kYWwgY29tcG9uZW50IGluIHJlYWN0IHVzaW5nIHJlYWN0IHBvcnRhbHMucG5nXCJcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB1c2VUaGVtZVN3aXRjaGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXJcIlxyXG5pbXBvcnQgeyBBcnRpY2xlc0ljb24xLCBBcnRpY2xlc0ljb24yIH0gZnJvbSAnQC9jb21wb25lbnRzL0ljb25zJ1xyXG5pbXBvcnQgYXJ0aWNsZXMxIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZXNEYXJrLnBuZyc7XHJcbmltcG9ydCBhcnRpY2xlczIgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlc0xpZ2h0LnBuZyc7XHJcblxyXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XHJcblxyXG5jb25zdCBNb3ZpbmdJbWcgPSAoe3RpdGxlLCBpbWcsIGxpbmt9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlKGV2ZW50KSB7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICB4LnNldChldmVudC5wYWdlWClcclxuICAgICAgICB5LnNldCgtMTApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShldmVudCkge1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIHguc2V0KDApXHJcbiAgICAgICAgeS5zZXQoMClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD0nX2JsYW5rJyBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2V9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lJz57dGl0bGV9PC9oMj5cclxuICAgICAgICA8RnJhbWVySW1hZ2Ugc3R5bGU9e3sgeDp4LCB5OnkgfX0gaW5pdGlhbD17e29wYWNpdHk6IDB9fSB3aGlsZUluVmlldz17e29wYWNpdHk6IDEsIHRyYW5zaXRpb246e2R1cmF0aW9uOiAwLjJ9fX0gcmVmPXtpbWdSZWZ9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9J3otMTAgdy05NiBoLWF1dG8gaGlkZGVuIGFic29sdXRlIHJvdW5kZWQtbGcgbWQ6IWhpZGRlbicgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe2ltYWdlLCB0aXRsZSwgZGF0ZSwgbGlua30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8bW90aW9uLmxpIGluaXRpYWw9e3t5OjIwMH19IHdoaWxlSW5WaWV3PXt7eTowLCB0cmFuc2l0aW9uOntkdXJhdGlvbjowLjUsIGVhc2U6XCJlYXNlSW5PdXRcIn19fSB2aWV3cG9ydD17e29uY2U6IHRydWV9fSBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0IHRleHQtZGFyayBmaXJzdDptdC0wIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYm9yZGVyLXItNCBib3JkZXItYi00IGRhcms6Ym9yZGVyLWxpZ2h0IGRhcms6YmctZGFyayBkYXJrOnRleHQtbGlnaHQgc206ZmxleC1jb2wnPlxyXG4gICAgICAgICAgICA8TW92aW5nSW1nIHRpdGxlPXt0aXRsZX0gaW1nPXtpbWFnZX0gbGluaz17bGlua30gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlEYXJrIGZvbnQtc2VtaWJvbGQgcGwtNCBzbTpzZWxmLXN0YXJ0IHNtOnBsLTAgeHM6dGV4dC1zbSc+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoe2ltZywgdGl0bGUsIHRpbWUsIHN1bW1hcnksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3JlbGF0aXZlIGNvbC1zcGFuLTEgdy1mdWxsIHAtNCBiZy1saWdodCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIHJvdW5kZWQtMnhsIGRhcms6YmctZGFyayBkYXJrOmJvcmRlci1saWdodCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSByb3VuZGVkLVsycmVtXSBiZy1kYXJrIHJvdW5kZWQtYnItM3hsIGRhcms6YmctbGlnaHQnIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J3ctZnVsbCBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcnPlxyXG4gICAgICAgICAgICAgICAgPEZyYW1lckltYWdlIHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCIgd2hpbGVIb3Zlcj17e3NjYWxlOjEuMDV9fSB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC4yfX0gcHJpb3JpdHkgc2l6ZXM9XCIobWF4LXdpZHRoOiA3NjhweCkgMTAwdncsIChtYXgtd2lkdGg6IDEyMDBweCkgNTB2dywgNTB2d1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSB0ZXh0LTJ4bCBmb250LWJvbGQgbXktMiBtdC00IGhvdmVyOnVuZGVybGluZSB4czp0ZXh0LWxnJz57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gbWItMic+e3N1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeURhcmsgZm9udC1zZW1pYm9sZCc+e3RpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGFydGljbGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAobW9kZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgc2V0SW1hZ2VTcmMoYXJ0aWNsZXMxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJbWFnZVNyYyhhcnRpY2xlczIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbW9kZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5GYXJraGFuIEhhbXphaCBGaXJkYXVzIHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nZmFya2hhbiBkZXNjcmlwdGlvbicgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J3ctZnVsbCBtYi0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gZGFyazp0ZXh0LWxpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPSdwdC0xNic+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDYWhuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT0nbWItMTYgbGc6IXRleHQtN3hsIHNtOm1iLTggc206IXRleHQtNnhsIHhzOiF0ZXh0LTR4bCB0ZXh0LWNlbnRlcicgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgaXRlbXMtY2VudGVyIGdhcC0xNiBsZy1nYXAtOCBtZDpncmlkLWNvbHMtMSBtZDpnYXAteS0xNic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IHRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBQYWdpbmF0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0SlMgcHJvamVjdC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCdWlsZCBBIEN1c3RvbSBQYWdpbmF0aW9uIENvbXBvbmVudCBJbiBSZWFjdGpzIEZyb20gU2NyYXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW50ZWdyYXRlIFBhZ2luYXRpb24gY29tcG9uZW50IGluIHlvdXIgUmVhY3RKUyBwcm9qZWN0LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMic+QWxsIEFydGljbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMDEsIDIwMjNcIiBsaW5rPVwiL1wiIGltYWdlPXthcnRpY2xlM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAwMSwgMjAyM1wiIGxpbms9XCIvXCIgaW1hZ2U9e2FydGljbGUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDAxLCAyMDIzXCIgbGluaz1cIi9cIiBpbWFnZT17YXJ0aWNsZTN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMDEsIDIwMjNcIiBsaW5rPVwiL1wiIGltYWdlPXthcnRpY2xlM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAwMSwgMjAyM1wiIGxpbms9XCIvXCIgaW1hZ2U9e2FydGljbGUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZXNJY29uMiBjbGFzc05hbWU9eychdy1bNTAwJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e2FydGljbGUxfSBjbGFzc05hbWU9JycgYWx0PScnIC8+ICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctUGljIGRhcms6YmctUGljLWRhcmsgdy1bNTUwcHhdIGgtWzQ1MHB4XVwiPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzIl0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIkxheW91dCIsIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwibW90aW9uIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VUaGVtZVN3aXRjaGVyIiwiQXJ0aWNsZXNJY29uMSIsIkFydGljbGVzSWNvbjIiLCJhcnRpY2xlczEiLCJhcnRpY2xlczIiLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW91c2UiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdXNlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiaW1hZ2UiLCJkYXRlIiwibGkiLCJlYXNlIiwidmlld3BvcnQiLCJvbmNlIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsInRpbWUiLCJzdW1tYXJ5IiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwicHJpb3JpdHkiLCJzaXplcyIsInAiLCJhcnRpY2xlcyIsIm1vZGUiLCJzZXRNb2RlIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});