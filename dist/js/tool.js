/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ManipulateField__ = __webpack_require__(2);


Nova.booting(function (Vue, router, store) {

    Vue.mixin(__WEBPACK_IMPORTED_MODULE_0__mixins_ManipulateField__["a" /* default */]);
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            lookup: ["formRowClasses", "wrapperClasses", "wrapperLabelClasses", "wrapperFieldClasses", "labelClasses", "fieldClasses", "stack", "half", "third", "forth", "fifth", "clear"],
            form: null,
            formDivs: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        if (this.$options.name === undefined || !this.$options.name.includes('form-') || !this.$options.name.includes('field')) {
            return;
        }

        this.form = this.$el.closest("form");
        this.saveDivs();
        this.row();

        if (this.field.clear) {
            this.$el.setAttribute("class", "");
            this.clearChildNodes(this.$el.childNodes);
        }

        _.each(this.field, function (params, key) {
            if (typeof _this[key] === "function" && _.includes(_this.lookup, key)) {
                _this[key](params);
            }
        });
    },


    methods: {
        saveDivs: function saveDivs() {
            var _this2 = this;

            this.form.childNodes.forEach(function (cn) {
                if (cn.nodeName === "DIV") {
                    cn.setAttribute("id", "form-row");
                    _this2.formDivs.push(cn);
                }
            });
        },
        clearChildNodes: function clearChildNodes(nodes) {
            var _this3 = this;

            nodes.forEach(function (cn) {
                if (cn.classList) {
                    cn.setAttribute("class", "");
                }
                if (cn.childNodes) {
                    _this3.clearChildNodes(cn.childNodes);
                }
            });
        },
        loopClasses: function loopClasses(classes, item) {
            classes.split(" ").forEach(function (c) {
                item.classList.add(c);
            });
        },
        stack: function stack() {
            this.$el.classList.add("flex-col");
            this.$el.querySelectorAll("div")[0].classList.add("pb-1");
            this.$el.querySelectorAll("div")[1].classList.add("pt-1");
        },
        row: function row() {
            this.form.classList.add("flex", "flex-wrap");
            this.formDivs.forEach(function (div) {
                if (_.includes(div.classList, "form-div")) return;
                div.classList.add("form-div", "w-full");
            });
        },
        clearFormDivWidthClasses: function clearFormDivWidthClasses() {
            var _this4 = this;

            this.$el.closest(".form-div").classList.forEach(function (c) {
                if (c.includes("w-")) {
                    _this4.$el.closest(".form-div").classList.remove(c);
                }
            });
        },
        addFormDivClass: function addFormDivClass(classes) {
            this.$el.closest(".form-div").classList.add(classes);
        },
        half: function half() {
            this.clearFormDivWidthClasses();
            this.addFormDivClass("w-1/2");
        },
        third: function third() {
            this.clearFormDivWidthClasses();
            this.addFormDivClass("w-1/3");
        },
        forth: function forth() {
            this.clearFormDivWidthClasses();
            this.addFormDivClass("w-1/4");
        },
        fifth: function fifth() {
            this.clearFormDivWidthClasses();
            this.addFormDivClass("w-1/5");
        },
        formRowClasses: function formRowClasses(params) {
            var elem = this.$el.closest("#form-row");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        wrapperClasses: function wrapperClasses(params) {
            if (params.clear) {
                this.$el.setAttribute("class", "");
            }
            this.loopClasses(params.classes, this.$el);
        },
        wrapperLabelClasses: function wrapperLabelClasses(params) {
            var elem = this.$el.querySelector("div");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        wrapperFieldClasses: function wrapperFieldClasses(params) {
            var elem = this.$el.querySelectorAll("div")[1];
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        labelClasses: function labelClasses(params) {
            var elem = this.$el.querySelector("div label");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        fieldClasses: function fieldClasses(params) {
            var elem = this.$el.querySelector("div input");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);