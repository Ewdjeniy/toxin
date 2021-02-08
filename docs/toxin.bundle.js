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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".layout {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.layout__container {\n  display: flex;\n  align-content: flex-start;\n}\n.layout__container_basis-50.layout__container {\n  flex-basis: 50px;\n}\n.layout__container_basis-100.layout__container {\n  flex-basis: 100px;\n}\n.layout__container_basis-150.layout__container {\n  flex-basis: 150px;\n}\n.layout__container_basis-200.layout__container {\n  flex-basis: 200px;\n}\n.layout__container_basis-250.layout__container {\n  flex-basis: 250px;\n}\n.layout__container_basis-300.layout__container {\n  flex-basis: 300px;\n}\n.layout__container_basis-350.layout__container {\n  flex-basis: 350px;\n}\n.layout__container_basis-400.layout__container {\n  flex-basis: 400px;\n}\n.layout__container_basis-450.layout__container {\n  flex-basis: 450px;\n}\n.layout__container_basis-500.layout__container {\n  flex-basis: 500px;\n}\n.layout__container_basis-550.layout__container {\n  flex-basis: 550px;\n}\n.layout__container_basis-600.layout__container {\n  flex-basis: 600px;\n}\n.layout__container_basis-650.layout__container {\n  flex-basis: 650px;\n}\n.layout__container_basis-700.layout__container {\n  flex-basis: 700px;\n}\n.layout__container_basis-750.layout__container {\n  flex-basis: 750px;\n}\n.layout__container_basis-800.layout__container {\n  flex-basis: 800px;\n}\n.layout__container_basis-850.layout__container {\n  flex-basis: 850px;\n}\n.layout__container_basis-900.layout__container {\n  flex-basis: 900px;\n}\n.layout__container_basis-950.layout__container {\n  flex-basis: 950px;\n}\n.layout__container_basis-1000.layout__container {\n  flex-basis: 1000px;\n}\n.layout__container_basis-1050.layout__container {\n  flex-basis: 1050px;\n}\n.layout__container_basis-1100.layout__container {\n  flex-basis: 1100px;\n}\n.layout__container_basis-1150.layout__container {\n  flex-basis: 1150px;\n}\n.layout__container_basis-1200.layout__container {\n  flex-basis: 1200px;\n}\n.layout__container_basis-1250.layout__container {\n  flex-basis: 1250px;\n}\n.layout__container_basis-1300.layout__container {\n  flex-basis: 1300px;\n}\n.layout__container_basis-1350.layout__container {\n  flex-basis: 1350px;\n}\n.layout__container_basis-1400.layout__container {\n  flex-basis: 1400px;\n}\n.layout__container_basis-1450.layout__container {\n  flex-basis: 1450px;\n}\n.layout__container_basis-1500.layout__container {\n  flex-basis: 1500px;\n}\n.layout__container_basis-1550.layout__container {\n  flex-basis: 1550px;\n}\n.layout__container_basis-1600.layout__container {\n  flex-basis: 1600px;\n}\n.layout__container_basis-1650.layout__container {\n  flex-basis: 1650px;\n}\n.layout__container_basis-1700.layout__container {\n  flex-basis: 1700px;\n}\n.layout__container_basis-1750.layout__container {\n  flex-basis: 1750px;\n}\n.layout__container_basis-1800.layout__container {\n  flex-basis: 1800px;\n}\n.layout__container_basis-1850.layout__container {\n  flex-basis: 1850px;\n}\n.layout__container_basis-1900.layout__container {\n  flex-basis: 1900px;\n}\n.layout__container_basis-1950.layout__container {\n  flex-basis: 1950px;\n}\n.layout__container_basis-2000.layout__container {\n  flex-basis: 2000px;\n}\n.layout__container_basis-2050.layout__container {\n  flex-basis: 2050px;\n}\n.layout__container_basis-2100.layout__container {\n  flex-basis: 2100px;\n}\n.layout__container_basis-2150.layout__container {\n  flex-basis: 2150px;\n}\n.layout__container_basis-2200.layout__container {\n  flex-basis: 2200px;\n}\n.layout__container_basis-2250.layout__container {\n  flex-basis: 2250px;\n}\n.layout__container_basis-2300.layout__container {\n  flex-basis: 2300px;\n}\n.layout__container_basis-2350.layout__container {\n  flex-basis: 2350px;\n}\n.layout__container_basis-2400.layout__container {\n  flex-basis: 2400px;\n}\n.layout__container_basis-2450.layout__container {\n  flex-basis: 2450px;\n}\n.layout__container_basis-2500.layout__container {\n  flex-basis: 2500px;\n}\n.layout__container_basis-2550.layout__container {\n  flex-basis: 2550px;\n}\n.layout__container_basis-2600.layout__container {\n  flex-basis: 2600px;\n}\n.layout__container_basis-2650.layout__container {\n  flex-basis: 2650px;\n}\n.layout__container_basis-2700.layout__container {\n  flex-basis: 2700px;\n}\n.layout__container_basis-2750.layout__container {\n  flex-basis: 2750px;\n}\n.layout__container_basis-2800.layout__container {\n  flex-basis: 2800px;\n}\n.layout__container_basis-2850.layout__container {\n  flex-basis: 2850px;\n}\n.layout__container_basis-2900.layout__container {\n  flex-basis: 2900px;\n}\n.layout__container_basis-2950.layout__container {\n  flex-basis: 2950px;\n}\n.layout__container_basis-3000.layout__container {\n  flex-basis: 3000px;\n}\n.layout__container_basis-3050.layout__container {\n  flex-basis: 3050px;\n}\n.layout__container_basis-3100.layout__container {\n  flex-basis: 3100px;\n}\n.layout__container_basis-3150.layout__container {\n  flex-basis: 3150px;\n}\n.layout__container_basis-3200.layout__container {\n  flex-basis: 3200px;\n}\n.layout__container_basis-3250.layout__container {\n  flex-basis: 3250px;\n}\n.layout__container_basis-3300.layout__container {\n  flex-basis: 3300px;\n}\n.layout__container_basis-3350.layout__container {\n  flex-basis: 3350px;\n}\n.layout__container_basis-3400.layout__container {\n  flex-basis: 3400px;\n}\n.layout__container_basis-3450.layout__container {\n  flex-basis: 3450px;\n}\n.layout__container_basis-3500.layout__container {\n  flex-basis: 3500px;\n}\n.layout__container_basis-3550.layout__container {\n  flex-basis: 3550px;\n}\n.layout__container_basis-3600.layout__container {\n  flex-basis: 3600px;\n}\n.layout__container_basis-3650.layout__container {\n  flex-basis: 3650px;\n}\n.layout__container_basis-3700.layout__container {\n  flex-basis: 3700px;\n}\n.layout__container_basis-3750.layout__container {\n  flex-basis: 3750px;\n}\n.layout__container_basis-3800.layout__container {\n  flex-basis: 3800px;\n}\n.layout__container_basis-3850.layout__container {\n  flex-basis: 3850px;\n}\n.layout__container_basis-3900.layout__container {\n  flex-basis: 3900px;\n}\n.layout__container_basis-3950.layout__container {\n  flex-basis: 3950px;\n}\n.layout__container_grow-0 {\n  flex-grow: 0;\n}\n.layout__container_grow-1 {\n  flex-grow: 1;\n}\n.layout__container_grow-2 {\n  flex-grow: 2;\n}\n.layout__container_grow-3 {\n  flex-grow: 3;\n}\n.layout__container_grow-4 {\n  flex-grow: 4;\n}\n.layout__container_grow-5 {\n  flex-grow: 5;\n}\n.layout__container_grow-6 {\n  flex-grow: 6;\n}\n.layout__container_grow-7 {\n  flex-grow: 7;\n}\n.layout__container_grow-8 {\n  flex-grow: 8;\n}\n.layout__container_grow-9 {\n  flex-grow: 9;\n}\n.layout__container_shrink-0 {\n  flex-shrink: 0;\n}\n.layout__container_shrink-1 {\n  flex-shrink: 1;\n}\n.layout__container_shrink-2 {\n  flex-shrink: 2;\n}\n.layout__container_shrink-3 {\n  flex-shrink: 3;\n}\n.layout__container_shrink-4 {\n  flex-shrink: 4;\n}\n.layout__container_shrink-5 {\n  flex-shrink: 5;\n}\n.layout__container_shrink-6 {\n  flex-shrink: 6;\n}\n.layout__container_shrink-7 {\n  flex-shrink: 7;\n}\n.layout__container_shrink-8 {\n  flex-shrink: 8;\n}\n.layout__container_shrink-9 {\n  flex-shrink: 9;\n}\n.layout__container_block {\n  display: block;\n}\n.layout__container_left {\n  flex-grow: 0;\n  margin-right: auto;\n}\n.layout__container_right {\n  flex-grow: 0;\n  margin-left: auto;\n}\n.layout__container_center {\n  flex-grow: 0;\n  margin-right: auto;\n  margin-left: auto;\n}\n.layout__container_column {\n  flex-direction: column;\n}\n.layout__container_column > .layout__container {\n  flex-basis: auto;\n}\n.layout__container_column-reverse {\n  flex-direction: column-reverse;\n}\n.layout__container_column-reverse > .layout__container {\n  flex-basis: auto;\n}\n.layout__container_row-reverse {\n  flex-direction: row-reverse;\n}\n.layout__container_wrap {\n  flex-wrap: wrap;\n}\n.layout__container_wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n.layout__container_basis-auto.layout__container {\n  flex-basis: auto;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.5-beta.0
 */
!function webpackUniversalModuleDefinition(root, factory) {
    if (true) module.exports = factory(); else { var i, a; }
}(window, function() {
    return modules = [ function(module) {
        module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}');
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0, __webpack_require__(10);
        var _mask = __webpack_require__(11), _inputmask = _interopRequireDefault(__webpack_require__(9)), _window = _interopRequireDefault(__webpack_require__(6)), _maskLexer = __webpack_require__(19), _validationTests = __webpack_require__(3), _positioning = __webpack_require__(2), _validation = __webpack_require__(4), _inputHandling = __webpack_require__(5), _eventruler = __webpack_require__(12), _definitions = _interopRequireDefault(__webpack_require__(20)), _defaults = _interopRequireDefault(__webpack_require__(21));
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj;
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var document = _window.default.document, dataKey = "_inputmask_opts";
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.dependencyLib = _inputmask.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
            !0 !== internal && ("[object Object]" === Object.prototype.toString.call(alias) ? options = alias : (options = options || {}, 
            alias && (options.alias = alias)), this.opts = _inputmask.default.extend(!0, {}, this.defaults, options), 
            this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, 
            resolveAlias(this.opts.alias, options, this.opts)), this.refreshValue = !1, this.undoValue = void 0, 
            this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, 
            this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, 
            this.isComposing = !1;
        }
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), 
            _inputmask.default.extend(!0, opts, aliasDefinition), _inputmask.default.extend(!0, opts, options), 
            !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
        }
        function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
            function importOption(option, optionData) {
                var attrOption = "" === dataAttribute ? option : dataAttribute + "-" + option;
                optionData = void 0 !== optionData ? optionData : npt.getAttribute(attrOption), 
                null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = _window.default[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                userOptions[option] = optionData);
            }
            if (!0 === opts.importDataAttributes) {
                var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), 
                dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, 
                dataoptions) if ("alias" === p.toLowerCase()) {
                    optionData = dataoptions[p];
                    break;
                }
                for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), 
                opts) {
                    if (dataoptions) for (p in optionData = void 0, dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                        optionData = dataoptions[p];
                        break;
                    }
                    importOption(option, optionData);
                }
            }
            return _inputmask.default.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), 
            "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), 
            opts.isRTL = !0), Object.keys(userOptions).length;
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: _defaults.default,
            definitions: _definitions.default,
            aliases: {},
            masksCache: {},
            get isRTL() {
                return this.opts.isRTL || this.opts.numericInput;
            },
            mask: function mask(elems) {
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                elems = elems.nodeName ? [ elems ] : elems, elems.forEach(function(el, ndx) {
                    var scopedOpts = _inputmask.default.extend(!0, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, _inputmask.default.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = (0, _maskLexer.generateMaskSet)(scopedOpts, that.noMasksCache);
                        void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, 
                        el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, 
                        el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = _inputmask.default.extend(!0, {}, that.userOptions), 
                        el.inputmask.el = el, el.inputmask.$el = (0, _inputmask.default)(el), el.inputmask.maskset = maskset, 
                        _inputmask.default.data(el, dataKey, that.userOptions), _mask.mask.call(el.inputmask));
                    }
                }), elems && elems[0] && elems[0].inputmask || this;
            },
            option: function option(options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? (_inputmask.default.extend(this.userOptions, options), 
                this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function unmaskedvalue(value) {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), 
                void 0 === this.el || void 0 !== value) {
                    var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                    _inputHandling.checkVal.call(this, void 0, !1, !1, valueBuffer), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, _positioning.getBuffer.call(this), 0, this.opts);
                }
                return _inputHandling.unmaskedvalue.call(this, this.el);
            },
            remove: function remove() {
                if (this.el) {
                    _inputmask.default.data(this.el, dataKey, null);
                    var cv = this.opts.autoUnmask ? (0, _inputHandling.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask), valueProperty;
                    cv !== _positioning.getBufferTemplate.call(this).join("") ? this._valueSet(cv, this.opts.autoUnmask) : this._valueSet(""), 
                    _eventruler.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value"), 
                    valueProperty && this.__valueGet && Object.defineProperty(this.el, "value", {
                        get: this.__valueGet,
                        set: this.__valueSet,
                        configurable: !0
                    })) : document.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                    this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                }
                return this.el;
            },
            getemptymask: function getemptymask() {
                return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), 
                _positioning.getBufferTemplate.call(this).join("");
            },
            hasMaskedValue: function hasMaskedValue() {
                return !this.opts.autoUnmask;
            },
            isComplete: function isComplete() {
                return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), 
                _validation.isComplete.call(this, _positioning.getBuffer.call(this));
            },
            getmetadata: function getmetadata() {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), 
                Array.isArray(this.maskset.metadata)) {
                    var maskTarget = _validationTests.getMaskTemplate.call(this, !0, 0, !1).join("");
                    return this.maskset.metadata.forEach(function(mtdt) {
                        return mtdt.mask !== maskTarget || (maskTarget = mtdt, !1);
                    }), maskTarget;
                }
                return this.maskset.metadata;
            },
            isValid: function isValid(value) {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), 
                value) {
                    var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                    _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer);
                } else value = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
                for (var buffer = _positioning.getBuffer.call(this), rl = _positioning.determineLastRequiredPosition.call(this), lmib = buffer.length - 1; rl < lmib && !_positioning.isMask.call(this, lmib); lmib--) ;
                return buffer.splice(rl, lmib + 1 - rl), _validation.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join(""));
            },
            format: function format(value, metadata) {
                this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer);
                var formattedValue = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
                return metadata ? {
                    value: formattedValue,
                    metadata: this.getmetadata()
                } : formattedValue;
            },
            setValue: function setValue(value) {
                this.el && (0, _inputmask.default)(this.el).trigger("setvalue", [ value ]);
            },
            analyseMask: _maskLexer.analyseMask
        }, Inputmask.extendDefaults = function(options) {
            _inputmask.default.extend(!0, Inputmask.prototype.defaults, options);
        }, Inputmask.extendDefinitions = function(definition) {
            _inputmask.default.extend(!0, Inputmask.prototype.definitions, definition);
        }, Inputmask.extendAliases = function(alias) {
            _inputmask.default.extend(!0, Inputmask.prototype.aliases, alias);
        }, Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        }, Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        }, Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        }, Inputmask.remove = function(elems) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
            elems = elems.nodeName ? [ elems ] : elems, elems.forEach(function(el) {
                el.inputmask && el.inputmask.remove();
            });
        }, Inputmask.setValue = function(elems, value) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
            elems = elems.nodeName ? [ elems ] : elems, elems.forEach(function(el) {
                el.inputmask ? el.inputmask.setValue(value) : (0, _inputmask.default)(el).trigger("setvalue", [ value ]);
            });
        }, Inputmask.dependencyLib = _inputmask.default, _window.default.Inputmask = Inputmask;
        var _default = Inputmask;
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.caret = caret, exports.determineLastRequiredPosition = determineLastRequiredPosition, 
        exports.determineNewCaretPosition = determineNewCaretPosition, exports.getBuffer = getBuffer, 
        exports.getBufferTemplate = getBufferTemplate, exports.getLastValidPosition = getLastValidPosition, 
        exports.isMask = isMask, exports.resetMaskSet = resetMaskSet, exports.seekNext = seekNext, 
        exports.seekPrevious = seekPrevious, exports.translatePosition = translatePosition;
        var _validationTests = __webpack_require__(3), _validation = __webpack_require__(4), _mask = __webpack_require__(11);
        function caret(input, begin, end, notranslate, isDelete) {
            var inputmask = this, opts = this.opts, range;
            if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, 
            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), 
            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), 
            end = begin + range.text.length), {
                begin: notranslate ? begin : translatePosition.call(this, begin),
                end: notranslate ? end : translatePosition.call(this, end)
            };
            if (Array.isArray(begin) && (end = this.isRTL ? begin[0] : begin[1], begin = this.isRTL ? begin[1] : begin[0]), 
            void 0 !== begin.begin && (end = this.isRTL ? begin.begin : begin.end, begin = this.isRTL ? begin.end : begin.begin), 
            "number" == typeof begin) {
                begin = notranslate ? begin : translatePosition.call(this, begin), end = notranslate ? end : translatePosition.call(this, end), 
                end = "number" == typeof end ? end : begin;
                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
                    begin: begin,
                    end: end
                }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), 
                input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end); else if (window.getSelection) {
                    if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                    range.collapse(!0);
                    var sel = window.getSelection();
                    sel.removeAllRanges(), sel.addRange(range);
                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), 
                range.moveEnd("character", end), range.moveStart("character", begin), range.select());
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            var inputmask = this, maskset = this.maskset, $ = this.dependencyLib, buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0, !0), bl = buffer.length, pos, lvp = getLastValidPosition.call(this), positions = {}, lvTest = maskset.validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0, testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = _validationTests.getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), 
            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
            var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
            for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && _validation.checkAlternationMatch.call(this, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== _validationTests.getTests.call(this, pos)[0].def)) && buffer[pos] === _validationTests.getPlaceholder.call(this, pos, testPos.match)); pos--) bl--;
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : void 0
            } : bl;
        }
        function determineNewCaretPosition(selectedCaret, tabbed) {
            var inputmask = this, maskset = this.maskset, opts = this.opts;
            function doRadixFocus(clickPos) {
                if ("" !== opts.radixPoint && 0 !== opts.digits) {
                    var vps = maskset.validPositions;
                    if (void 0 === vps[clickPos] || vps[clickPos].input === _validationTests.getPlaceholder.call(inputmask, clickPos)) {
                        if (clickPos < seekNext.call(inputmask, -1)) return !0;
                        var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
                        if (-1 !== radixPos) {
                            for (var vp in vps) if (vps[vp] && radixPos < vp && vps[vp].input !== _validationTests.getPlaceholder.call(inputmask, vp)) return !1;
                            return !0;
                        }
                    }
                }
                return !1;
            }
            if (tabbed && (inputmask.isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
            selectedCaret.begin === selectedCaret.end) {
                switch (opts.positionCaretOnClick) {
                  case "none":
                    break;

                  case "select":
                    selectedCaret = {
                        begin: 0,
                        end: getBuffer.call(inputmask).length
                    };
                    break;

                  case "ignore":
                    selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
                    break;

                  case "radixFocus":
                    if (doRadixFocus(selectedCaret.begin)) {
                        var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
                        break;
                    }

                  default:
                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, !0), lastPosition = seekNext.call(inputmask, -1 !== lvclickPosition || isMask.call(inputmask, 0) ? lvclickPosition : -1);
                    if (clickPosition <= lastPosition) selectedCaret.end = selectedCaret.begin = isMask.call(inputmask, clickPosition, !1, !0) ? clickPosition : seekNext.call(inputmask, clickPosition); else {
                        var lvp = maskset.validPositions[lvclickPosition], tt = _validationTests.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : void 0, lvp), placeholder = _validationTests.getPlaceholder.call(inputmask, lastPosition, tt.match);
                        if ("" !== placeholder && getBuffer.call(inputmask)[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask.call(inputmask, lastPosition, opts.keepStatic, !0) && tt.match.def === placeholder) {
                            var newPos = seekNext.call(inputmask, lastPosition);
                            (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                        }
                        selectedCaret.end = selectedCaret.begin = lastPosition;
                    }
                }
                return selectedCaret;
            }
        }
        function getBuffer(noCache) {
            var inputmask = this, maskset = this.maskset;
            return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0), 
            void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
        }
        function getBufferTemplate() {
            var inputmask = this, maskset = this.maskset;
            return void 0 === maskset._buffer && (maskset._buffer = _validationTests.getMaskTemplate.call(this, !1, 1), 
            void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var maskset = this.maskset, before = -1, after = -1, valids = validPositions || maskset.validPositions;
            for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
                var psNdx = parseInt(posNdx);
                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                closestTo <= psNdx && (after = psNdx));
            }
            return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
        }
        function isMask(pos, strict, fuzzy) {
            var inputmask = this, maskset = this.maskset, test = _validationTests.getTestTemplate.call(this, pos).match;
            if ("" === test.def && (test = _validationTests.getTest.call(this, pos).match), 
            !0 !== test.static) return test.fn;
            if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;
            if (!0 !== strict && -1 < pos) {
                if (fuzzy) {
                    var tests = _validationTests.getTests.call(this, pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                }
                var testTemplate = _validationTests.determineTestTemplate.call(this, pos, _validationTests.getTests.call(this, pos)), testPlaceHolder = _validationTests.getPlaceholder.call(this, pos, testTemplate.match);
                return testTemplate.match.def !== testPlaceHolder;
            }
            return !1;
        }
        function resetMaskSet(soft) {
            var maskset = this.maskset;
            maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
        }
        function seekNext(pos, newBlock, fuzzy) {
            var inputmask = this;
            void 0 === fuzzy && (fuzzy = !0);
            for (var position = pos + 1; "" !== _validationTests.getTest.call(this, position).match.def && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, fuzzy)); ) position++;
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var inputmask = this, position = pos - 1;
            if (pos <= 0) return 0;
            for (;0 < position && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, !0)); ) position--;
            return position;
        }
        function translatePosition(pos) {
            var inputmask = this, opts = this.opts, el = this.el;
            return !this.isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = this._valueGet().length - pos), 
            pos;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function getLocator(tst, align) {
            var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if ("" !== locator) for (;locator.length < align; ) locator += "0";
            return locator;
        }
        function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), 
            void 0 !== decisionTaker ? decisionTaker.toString() : "";
        }
        function getPlaceholder(pos, test, returnPL) {
            var inputmask = this, opts = this.opts, maskset = this.maskset;
            if (test = test || getTest.call(this, pos).match, void 0 !== test.placeholder || !0 === returnPL) return "function" == typeof test.placeholder ? test.placeholder(opts) : test.placeholder;
            if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);
            if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                var tests = getTests.call(this, pos), staticAlternations = [], prevTest;
                if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                !0 === tests[i].match.static && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            return test.def;
        }
        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var inputmask = this, opts = this.opts, maskset = this.maskset, greedy = opts.greedy;
            clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
            var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, jitRenderStatic;
            do {
                if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], 
                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test)); else {
                    testPos = getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), test = testPos.match, 
                    ndxIntlzr = testPos.locator.slice();
                    var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                    jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && null === test.fn, 
                    jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test)) : jitRenderStatic = !1;
                }
                pos++;
            } while ((void 0 === this.maxLength || pos < this.maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);
            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), 
            opts.greedy = greedy, maskTemplate;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            var inputmask = this, maskset = this.maskset;
            return maskset.validPositions[pos] || determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function determineTestTemplate(pos, tests) {
            var inputmask = this, opts = this.opts;
            pos = 0 < pos ? pos - 1 : 0;
            for (var altTest = getTest.call(this, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
                var tst = tests[ndx];
                tstLocator = getLocator(tst, targetLocator.length);
                var distance = Math.abs(tstLocator - targetLocator);
                (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, 
                bestMatch = tst);
            }
            return bestMatch;
        }
        function getTest(pos, tests) {
            var inputmask = this, maskset = this.maskset;
            return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests.call(this, pos))[0];
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            var inputmask = this, $ = this.dependencyLib, maskset = this.maskset, opts = this.opts, el = this.el, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = 0 === tokenGroup.matches.indexOf(latestMatch);
                        return firstMatch || tokenGroup.matches.every(function(match, ndx) {
                            return !0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), 
                            !firstMatch;
                        }), firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if ((maskset.tests[pos] || maskset.validPositions[pos]) && (maskset.tests[pos] || [ maskset.validPositions[pos] ]).every(function(lmnt, ndx) {
                            if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation, ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            return (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                            indexPos = ndxPos), !0;
                        }), bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation], locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                            return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
                        }
                        return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                    }
                    function isSubsetOf(source, target) {
                        function expand(pattern) {
                            for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++) if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end; ) expanded.push(String.fromCharCode(start)); else start = pattern.charCodeAt(i), 
                            expanded.push(pattern.charAt(i));
                            return expanded.join("");
                        }
                        return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
                    }
                    function staticCanMatchDefinition(source, target) {
                        return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                        var alternationNdx = targetMatch.alternation, shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                        if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) if (targetMatch.locator[i] !== altMatch.locator[i]) {
                            alternationNdx = i, shouldMerge = !0;
                            break;
                        }
                        if (shouldMerge) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[alternationNdx];
                            if (void 0 !== locNdx) {
                                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), 
                                void 0 !== altMatch) {
                                    for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), 
                                    void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                    targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                                }
                                return !0;
                            }
                            targetMatch.alternation = void 0;
                        }
                        return !1;
                    }
                    function isSameLevel(targetMatch, altMatch) {
                        if (targetMatch.locator.length !== altMatch.locator.length) return !1;
                        for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
                        return !0;
                    }
                    if (testPos > pos + opts._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                    if (testPos === pos && void 0 === match.matches) return matches.push({
                        match: match,
                        locator: loopNdx.reverse(),
                        cd: cacheDependency,
                        mloc: {}
                    }), !0;
                    if (void 0 !== match.matches) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            if (match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse), 
                            match) return !0;
                        } else if (match.isOptional) {
                            var optionalToken = match, mtchsNdx = matches.length;
                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                            match) {
                                if (matches.forEach(function(mtch, ndx) {
                                    mtchsNdx <= ndx && (mtch.match.optionality = !0);
                                }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                                insertStop = !0, testPos = pos;
                            }
                        } else if (match.isAlternator) {
                            var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                            if (-1 === altIndex || "string" == typeof altIndex) {
                                var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                if (void 0 !== maskset.excludes[pos]) {
                                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                                    }
                                    0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                                }
                                (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                    alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), 
                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, 
                                        setMergeLocators(altMatch);
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if ("string" != typeof altIndex || void 0 !== altMatch.alternation && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) {
                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                    dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                }
                                                if (isSubsetOf(altMatch, altMatch2)) {
                                                    setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                    break;
                                                }
                                                if (isSubsetOf(altMatch2, altMatch)) {
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                }
                                                if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                    isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, 
                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                                                    break;
                                                }
                                            }
                                        }
                                        dropMatch || malternateMatches.push(altMatch);
                                    }
                                }
                                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, 
                                match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                            if (match) return !0;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup), match) {
                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, 
                                latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, 
                                latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                    insertStop = !0, testPos = pos;
                                    break;
                                }
                                return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), 
                                !0;
                            }
                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                        match) return !0;
                    } else testPos++;
                }
                for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match;
                    if (pos < testPos) break;
                }
            }
            function mergeLocators(pos, tests) {
                var locator = [], alternation;
                return Array.isArray(tests) || (tests = [ tests ]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice(), 
                0 === locator.length && (locator = tests[0].locator.slice())) : tests.forEach(function(tst) {
                    "" !== tst.def && (0 === locator.length ? (alternation = tst.alternation, locator = tst.locator.slice()) : tst.locator[alternation] && -1 === locator[alternation].toString().indexOf(tst.locator[alternation]) && (locator[alternation] += "," + tst.locator[alternation]));
                })), locator;
            }
            if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
                if (void 0 === ndxIntlzr) {
                    for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos; ) previousPos--;
                    void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), 
                    cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                }
                if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                    if (match && testPos === pos || pos < testPos) break;
                }
            }
            return 0 !== matches.length && !insertStop || matches.push({
                match: {
                    fn: null,
                    static: !0,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: cacheDependency
            }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), 
            maskset.tests[pos]);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.determineTestTemplate = determineTestTemplate, exports.getDecisionTaker = getDecisionTaker, 
        exports.getMaskTemplate = getMaskTemplate, exports.getPlaceholder = getPlaceholder, 
        exports.getTest = getTest, exports.getTests = getTests, exports.getTestTemplate = getTestTemplate;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.alternate = alternate, exports.checkAlternationMatch = checkAlternationMatch, 
        exports.isComplete = isComplete, exports.isValid = isValid, exports.refreshFromBuffer = refreshFromBuffer, 
        exports.revalidateMask = revalidateMask, exports.handleRemove = handleRemove;
        var _validationTests = __webpack_require__(3), _keycode = _interopRequireDefault(__webpack_require__(0)), _positioning = __webpack_require__(2), _eventhandlers = __webpack_require__(7);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
            var inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = this.maskset, validPsClone = $.extend(!0, {}, maskset.validPositions), tstClone = $.extend(!0, {}, maskset.tests), lastAlt, alternation, isValidRslt = !1, returnRslt = !1, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = void 0 !== rAltPos ? rAltPos : _positioning.getLastValidPosition.call(this), nextPos, input, begin, end;
            if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, 
            end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = _validationTests.getTest.call(this, lastAlt), 
            alternation = prevAltPos.alternation; else for (;0 <= lAltPos; lAltPos--) if (altPos = maskset.validPositions[lAltPos], 
            altPos && void 0 !== altPos.alternation) {
                if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
            }
            if (void 0 !== alternation) {
                decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], 
                !0 !== maskPos && maskset.excludes[decisionPos].push((0, _validationTests.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
                var validInputs = [], resultPos = -1;
                for (i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), 
                resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), 
                delete maskset.validPositions[i];
                for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10; ) {
                    for (maskset.tests = {}, _positioning.resetMaskSet.call(this, !0), isValidRslt = !0, 
                    i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || _positioning.getLastValidPosition.call(this, void 0, !0) + 1, 
                    input = validInputs[i], isValidRslt = isValid.call(this, nextPos, input, !1, fromIsValid, !0)); i++) i === resultPos && (returnRslt = isValidRslt), 
                    1 == maskPos && isValidRslt && (returnRslt = {
                        caretPos: i
                    });
                    if (isValidRslt) break;
                    if (_positioning.resetMaskSet.call(this), prevAltPos = _validationTests.getTest.call(this, decisionPos), 
                    maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), 
                    !maskset.excludes[decisionPos]) {
                        returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break;
                    }
                    var decisionTaker = (0, _validationTests.getDecisionTaker)(prevAltPos);
                    if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                        returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break;
                    }
                    for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), 
                    i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) delete maskset.validPositions[i];
                }
            }
            return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], 
            returnRslt;
        }
        function casing(elem, test, pos) {
            var opts = this.opts, maskset = this.maskset;
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = maskset.validPositions[pos - 1];
                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(_keycode.default.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                break;

              default:
                if ("function" == typeof opts.casing) {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            for (var opts = this.opts, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if (altArrC.includes(altArr1[alndx])) {
                isMatch = !0;
                break;
            }
            return isMatch;
        }
        function handleRemove(input, k, pos, strict, fromIsValid) {
            var inputmask = this, maskset = this.maskset, opts = this.opts;
            if ((opts.numericInput || this.isRTL) && (k === _keycode.default.BACKSPACE ? k = _keycode.default.DELETE : k === _keycode.default.DELETE && (k = _keycode.default.BACKSPACE), 
            this.isRTL)) {
                var pend = pos.end;
                pos.end = pos.begin, pos.begin = pend;
            }
            var lvp = _positioning.getLastValidPosition.call(this, void 0, !0), offset;
            if (pos.end >= _positioning.getBuffer.call(this).length && lvp >= pos.end && (pos.end = lvp + 1), 
            k === _keycode.default.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = _positioning.seekPrevious.call(this, pos.begin)) : k === _keycode.default.DELETE && pos.begin === pos.end && (pos.end = _positioning.isMask.call(this, pos.end, !0, !0) ? pos.end + 1 : _positioning.seekNext.call(this, pos.end) + 1), 
            !1 !== (offset = revalidateMask.call(this, pos))) {
                if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== _validationTests.getTest.call(this, pos.begin).match.def.indexOf("|")) {
                    var result = alternate.call(this, !0);
                    if (result) {
                        var newPos = void 0 !== result.caret ? result.caret : result.pos ? _positioning.seekNext.call(this, result.pos.begin ? result.pos.begin : result.pos) : _positioning.getLastValidPosition.call(this, -1, !0);
                        (k !== _keycode.default.DELETE || pos.begin > newPos) && pos.begin;
                    }
                }
                !0 !== strict && (maskset.p = k === _keycode.default.DELETE ? pos.begin + offset : pos.begin);
            }
        }
        function isComplete(buffer) {
            var inputmask = this, opts = this.opts, maskset = this.maskset;
            if ("function" == typeof opts.isComplete) return opts.isComplete(buffer, opts);
            if ("*" !== opts.repeat) {
                var complete = !1, lrp = _positioning.determineLastRequiredPosition.call(this, !0), aml = _positioning.seekPrevious.call(this, lrp.l);
                if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = _validationTests.getTestTemplate.call(this, i).match;
                        if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== _validationTests.getPlaceholder.call(this, i, test)) {
                            complete = !1;
                            break;
                        }
                    }
                }
                return complete;
            }
        }
        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
            var inputmask = this, $ = this.dependencyLib, opts = this.opts, el = inputmask.el, maskset = inputmask.maskset;
            function isSelection(posObj) {
                return inputmask.isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
            }
            strict = !0 === strict;
            var maskPos = pos;
            function processCommandObject(commandObj) {
                if (void 0 !== commandObj) {
                    if (void 0 !== commandObj.remove && (Array.isArray(commandObj.remove) || (commandObj.remove = [ commandObj.remove ]), 
                    commandObj.remove.sort(function(a, b) {
                        return b.pos - a.pos;
                    }).forEach(function(lmnt) {
                        revalidateMask.call(inputmask, {
                            begin: lmnt,
                            end: lmnt + 1
                        });
                    }), commandObj.remove = void 0), void 0 !== commandObj.insert && (Array.isArray(commandObj.insert) || (commandObj.insert = [ commandObj.insert ]), 
                    commandObj.insert.sort(function(a, b) {
                        return a.pos - b.pos;
                    }).forEach(function(lmnt) {
                        "" !== lmnt.c && isValid.call(inputmask, lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
                    }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                        var refresh = commandObj.refreshFromBuffer;
                        refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), 
                        commandObj.refreshFromBuffer = void 0;
                    }
                    void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, 
                    commandObj = !0);
                }
                return commandObj;
            }
            function _isValid(position, c, strict) {
                var rslt = !1;
                return _validationTests.getTests.call(inputmask, position).every(function(tst, ndx) {
                    var test = tst.match;
                    if (_positioning.getBuffer.call(inputmask, !0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                        c: _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def,
                        pos: position
                    }, !1 === rslt) return !0;
                    var elem = void 0 !== rslt.c ? rslt.c : c, validatedPos = position;
                    return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def : elem, 
                    rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), 
                    !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c || !1 === revalidateMask.call(inputmask, pos, $.extend({}, tst, {
                        input: casing.call(inputmask, elem, test, validatedPos)
                    }), fromIsValid, validatedPos) && (rslt = !1), !1;
                }), rslt;
            }
            void 0 !== pos.begin && (maskPos = inputmask.isRTL ? pos.end : pos.begin);
            var result = !0, positionsClone = $.extend(!0, {}, maskset.validPositions);
            if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, 
            delete maskset.tests[i]);
            if ("function" == typeof opts.preValidation && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, _positioning.getBuffer.call(inputmask), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), 
            result = processCommandObject(result)), !0 === result) {
                if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
                    if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                        var currentPosValid = maskset.validPositions[maskPos];
                        if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                            if (opts.insertMode || void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] || pos.end > maskPos) {
                                var skip = !1;
                                if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] && (result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, !0), 
                                !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), 
                                pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !_positioning.isMask.call(inputmask, maskPos, opts.keepStatic && 0 === maskPos)) for (var nPos = maskPos + 1, snPos = _positioning.seekNext.call(inputmask, maskPos, !1, 0 !== maskPos); nPos <= snPos; nPos++) if (result = _isValid(nPos, c, strict), 
                                !1 !== result) {
                                    result = trackbackPositions.call(inputmask, maskPos, void 0 !== result.pos ? result.pos : nPos) || result, 
                                    maskPos = nPos;
                                    break;
                                }
                            }
                        } else result = {
                            caret: _positioning.seekNext.call(inputmask, maskPos)
                        };
                    }
                } else result = !1;
                !1 !== result || !opts.keepStatic || !isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate.call(inputmask, !0)) : result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, void 0, pos), 
                !0 === result && (result = {
                    pos: maskPos
                });
            }
            if ("function" == typeof opts.postValidation && !0 !== fromIsValid && !0 !== validateOnly) {
                var postResult = opts.postValidation.call(el, _positioning.getBuffer.call(inputmask, !0), void 0 !== pos.begin ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
                void 0 !== postResult && (result = !0 === postResult ? result : postResult);
            }
            result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (_positioning.resetMaskSet.call(inputmask, !0), 
            maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions.call(inputmask, void 0, maskPos, !0);
            var endResult = processCommandObject(result);
            return endResult;
        }
        function positionCanMatchDefinition(pos, testDefinition, opts) {
            for (var inputmask = this, maskset = this.maskset, valid = !1, tests = _validationTests.getTests.call(this, pos), tndx = 0; tndx < tests.length; tndx++) {
                if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
                    valid = !0;
                    break;
                }
                if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                    valid = void 0;
                    break;
                }
            }
            return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition.call(this, pos + maskset.jitOffset[pos], testDefinition, opts)), 
            valid;
        }
        function refreshFromBuffer(start, end, buffer) {
            var inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib, el = this.el, i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = this.isRTL ? buffer.slice().reverse() : buffer;
            if (opts.skipOptionalPartCharacter = "", !0 === start) _positioning.resetMaskSet.call(this), 
            maskset.tests = {}, start = 0, end = buffer.length, p = _positioning.determineNewCaretPosition.call(this, {
                begin: 0,
                end: 0
            }, !1).begin; else {
                for (i = start; i < end; i++) delete maskset.validPositions[i];
                p = start;
            }
            var keypress = new $.Event("keypress");
            for (i = start; i < end; i++) {
                keypress.which = bffr[i].toString().charCodeAt(0), this.ignorable = !1;
                var valResult = _eventhandlers.EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                !1 !== valResult && (p = valResult.forwardPosition);
            }
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }
        function trackbackPositions(originalPos, newPos, fillOnly) {
            var inputmask = this, maskset = this.maskset, $ = this.dependencyLib;
            if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) ;
            for (var ps = originalPos; ps < newPos; ps++) if (void 0 === maskset.validPositions[ps] && !_positioning.isMask.call(this, ps, !0)) {
                var vp = 0 == ps ? _validationTests.getTest.call(this, ps) : maskset.validPositions[ps - 1];
                if (vp) {
                    var tests = _validationTests.getTests.call(this, ps).slice();
                    "" === tests[tests.length - 1].match.def && tests.pop();
                    var bestMatch = _validationTests.determineTestTemplate.call(this, ps, tests), np;
                    if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                        input: _validationTests.getPlaceholder.call(this, ps, bestMatch.match, !0) || bestMatch.match.def
                    }), bestMatch.generatedInput = !0, revalidateMask.call(this, ps, bestMatch, !0), 
                    !0 !== fillOnly)) {
                        var cvpInput = maskset.validPositions[newPos].input;
                        return maskset.validPositions[newPos] = void 0, isValid.call(this, newPos, cvpInput, !0, !0);
                    }
                }
            }
        }
        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
            var inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
            function IsEnclosedStatic(pos, valids, selection) {
                var posMatch = valids[pos];
                if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
                var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
                return prevMatch && nextMatch;
            }
            var offset = 0, begin = void 0 !== pos.begin ? pos.begin : pos, end = void 0 !== pos.end ? pos.end : pos;
            if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, 
            begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                var positionsClone = $.extend(!0, {}, maskset.validPositions), lvp = _positioning.getLastValidPosition.call(this, void 0, !0), i;
                for (maskset.p = begin, i = lvp; begin <= i; i--) delete maskset.validPositions[i], 
                void 0 === validTest && delete maskset.tests[i + 1];
                var valid = !0, j = validatedPos, posMatch = j, t, canMatch;
                for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), 
                posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
                    if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                        begin: begin,
                        end: end
                    }))) {
                        for (;"" !== _validationTests.getTest.call(this, posMatch).match.def; ) {
                            if (!1 !== (canMatch = positionCanMatchDefinition.call(this, posMatch, t, opts)) || "+" === t.match.def) {
                                "+" === t.match.def && _positioning.getBuffer.call(this, !0);
                                var result = isValid.call(this, posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
                            } else valid = !1;
                            if (valid) {
                                void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                break;
                            }
                            if (!valid && posMatch > maskset.maskLength) break;
                            posMatch++;
                        }
                        "" == _validationTests.getTest.call(this, posMatch).match.def && (valid = !1), posMatch = j;
                    }
                    if (!valid) break;
                }
                if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), _positioning.resetMaskSet.call(this, !0), 
                !1;
            } else validTest && _validationTests.getTest.call(this, validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
            return _positioning.resetMaskSet.call(this, !0), offset;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.applyInputValue = applyInputValue, exports.clearOptionalTail = clearOptionalTail, 
        exports.checkVal = checkVal, exports.HandleNativePlaceholder = HandleNativePlaceholder, 
        exports.unmaskedvalue = unmaskedvalue, exports.writeBuffer = writeBuffer;
        var _keycode = _interopRequireDefault(__webpack_require__(0)), _validationTests = __webpack_require__(3), _positioning = __webpack_require__(2), _validation = __webpack_require__(4), _environment = __webpack_require__(8), _eventhandlers = __webpack_require__(7);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function applyInputValue(input, value) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts;
            input.inputmask.refreshValue = !1, "function" == typeof opts.onBeforeMask && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
            value = value.toString().split(""), checkVal(input, !0, !1, value), inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), 
            (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && -1 === _positioning.getLastValidPosition.call(inputmask) && input.inputmask._valueSet("");
        }
        function clearOptionalTail(buffer) {
            var inputmask = this;
            buffer.length = 0;
            for (var template = _validationTests.getMaskTemplate.call(this, !0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift()); ) buffer.push(lmnt);
            return buffer;
        }
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = input ? input.inputmask : this, maskset = inputmask.maskset, opts = inputmask.opts, $ = inputmask.dependencyLib, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = void 0, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
            function isTemplateMatch(ndx, charCodes) {
                for (var targetTemplate = _validationTests.getMaskTemplate.call(inputmask, !0, 0).slice(ndx, _positioning.seekNext.call(inputmask, ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1]; ) charCodeNdx--;
                var match = 0 === charCodeNdx && !_positioning.isMask.call(inputmask, ndx) && (_validationTests.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx).match.static && _validationTests.getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === _validationTests.getTest.call(inputmask, ndx).match.nativeDef && (_validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx + 1).match.static && _validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                if (!match && 0 < charCodeNdx && !_positioning.isMask.call(inputmask, ndx, !1, !0)) {
                    var nextPos = _positioning.seekNext.call(inputmask, ndx);
                    inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {
                        begin: nextPos
                    });
                }
                return match;
            }
            opts.skipOptionalPartCharacter = "", _positioning.resetMaskSet.call(inputmask), 
            maskset.tests = {}, initialNdx = opts.radixPoint ? _positioning.determineNewCaretPosition.call(inputmask, {
                begin: 0,
                end: 0
            }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
                begin: initialNdx
            };
            var staticMatches = [], prevCaretPos = inputmask.caretPos;
            if (inputValue.forEach(function(charCode, ndx) {
                if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === _validationTests.getPlaceholder.call(inputmask, ndx) && _positioning.isMask.call(inputmask, ndx, !0) && !1 === _validation.isValid.call(inputmask, ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++; else {
                    var keypress = new $.Event("_checkval");
                    keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
                    var lvp = _positioning.getLastValidPosition.call(inputmask, void 0, !0);
                    isTemplateMatch(initialNdx, charCodes) ? result = _eventhandlers.EventHandlers.keypressEvent.call(input || inputmask, keypress, !0, !1, strict, lvp + 1) : (result = _eventhandlers.EventHandlers.keypressEvent.call(input || inputmask, keypress, !0, !1, strict, inputmask.caretPos.begin), 
                    result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), 
                    inputmask.isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer.call(inputmask, void 0, _positioning.getBuffer.call(inputmask), result.forwardPosition, keypress, !1), 
                    inputmask.caretPos = {
                        begin: result.forwardPosition,
                        end: result.forwardPosition
                    }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
                }
            }), 0 < staticMatches.length) {
                var sndx, validPos, nextValid = _positioning.seekNext.call(inputmask, -1, void 0, !1);
                if (!_validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && staticMatches.length <= nextValid || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift()); ) {
                    var keypress = new $.Event("_checkval");
                    if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), 
                    result = _eventhandlers.EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), 
                    result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static) staticMatches.push(result.pos); else if (!result) break;
                    nextSndx++;
                }
            }
            writeOut && writeBuffer.call(inputmask, input, _positioning.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("")), 
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }
        function HandleNativePlaceholder(npt, value) {
            var inputmask = npt ? npt.inputmask : this;
            if (_environment.ie) {
                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                    var buffer = _positioning.getBuffer.call(inputmask).slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                        var lvp = _positioning.getLastValidPosition.call(inputmask);
                        -1 === lvp && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : -1 !== lvp && clearOptionalTail.call(inputmask, buffer), 
                        writeBuffer(npt, buffer);
                    }
                }
            } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
        }
        function unmaskedvalue(input) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts, maskset = inputmask.maskset;
            if (input) {
                if (void 0 === input.inputmask) return input.value;
                input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
            }
            var umValue = [], vps = maskset.validPositions;
            for (var pndx in vps) vps[pndx] && vps[pndx].match && (1 != vps[pndx].match.static || Array.isArray(maskset.metadata) && !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
            var unmaskedValue = 0 === umValue.length ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
            if ("function" == typeof opts.onUnMask) {
                var bufferValue = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts, $ = inputmask.dependencyLib;
            if (event && "function" == typeof opts.onBeforeWrite) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        _validation.refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                        buffer = _positioning.getBuffer.call(inputmask, !0);
                    }
                    void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
                }
            }
            if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || _positioning.caret.call(inputmask, input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === _keycode.default.DELETE || event.keyCode === _keycode.default.BACKSPACE)), 
            !0 === triggerEvents)) {
                var $input = $(input), nptVal = input.inputmask._valueGet();
                input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout(function() {
                    nptVal === _positioning.getBufferTemplate.call(inputmask).join("") ? $input.trigger("cleared") : !0 === _validation.isComplete.call(inputmask, buffer) && $input.trigger("complete");
                }, 0);
            }
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _default = "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.EventHandlers = void 0;
        var _positioning = __webpack_require__(2), _keycode = _interopRequireDefault(__webpack_require__(0)), _environment = __webpack_require__(8), _validation = __webpack_require__(4), _inputHandling = __webpack_require__(5), _validationTests = __webpack_require__(3);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var EventHandlers = {
            keydownEvent: function keydownEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset, input = this, $input = $(input), k = e.keyCode, pos = _positioning.caret.call(inputmask, input), kdResult = opts.onKeyDown.call(this, e, _positioning.getBuffer.call(inputmask), pos, opts);
                if (void 0 !== kdResult) return kdResult;
                if (k === _keycode.default.BACKSPACE || k === _keycode.default.DELETE || _environment.iphone && k === _keycode.default.BACKSPACE_SAFARI || e.ctrlKey && k === _keycode.default.X && !("oncut" in input)) e.preventDefault(), 
                _validation.handleRemove.call(inputmask, input, k, pos), (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask, !0), maskset.p, e, input.inputmask._valueGet() !== _positioning.getBuffer.call(inputmask).join("")); else if (k === _keycode.default.END || k === _keycode.default.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask));
                    _positioning.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                } else k === _keycode.default.HOME && !e.shiftKey || k === _keycode.default.PAGE_UP ? (e.preventDefault(), 
                _positioning.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === _keycode.default.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? ((0, 
                _inputHandling.checkVal)(input, !0, !1, inputmask.undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === _keycode.default.TAB ? !0 === e.shiftKey ? (pos.end = _positioning.seekPrevious.call(inputmask, pos.end, !0), 
                !0 === _validationTests.getTest.call(inputmask, pos.end - 1).match.static && pos.end--, 
                pos.begin = _positioning.seekPrevious.call(inputmask, pos.end, !0), 0 <= pos.begin && 0 < pos.end && (e.preventDefault(), 
                _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : (pos.begin = _positioning.seekNext.call(inputmask, pos.begin, !0), 
                pos.end = _positioning.seekNext.call(inputmask, pos.begin, !0), pos.end < maskset.maskLength && pos.end--, 
                pos.begin <= maskset.maskLength && (e.preventDefault(), _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === _keycode.default.RIGHT ? setTimeout(function() {
                    var caretPos = _positioning.caret.call(inputmask, input);
                    _positioning.caret.call(inputmask, input, caretPos.begin);
                }, 0) : k === _keycode.default.LEFT && setTimeout(function() {
                    var caretPos_begin = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.begin), caretPos_end = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.end);
                    inputmask.isRTL ? _positioning.caret.call(inputmask, input, caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1)) : _positioning.caret.call(inputmask, input, caretPos_begin - (0 === caretPos_begin ? 0 : 1));
                }, 0));
                inputmask.ignorable = opts.ignorables.includes(k);
            },
            keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                var inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset, input = inputmask.el, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === _keycode.default.ENTER && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), 
                setTimeout(function() {
                    $input.trigger("change");
                }, 0)), inputmask.skipInputEvent = !0, !0;
                if (k) {
                    44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
                    var pos = checkval ? {
                        begin: ndx,
                        end: ndx
                    } : _positioning.caret.call(inputmask, input), forwardPosition, c = String.fromCharCode(k);
                    maskset.writeOutBuffer = !0;
                    var valResult = _validation.isValid.call(inputmask, pos, c, strict, void 0, void 0, void 0, checkval);
                    if (!1 !== valResult && (_positioning.resetMaskSet.call(inputmask, !0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : _positioning.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos), 
                    maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? _positioning.seekPrevious.call(inputmask, forwardPosition) : forwardPosition, 
                    !1 !== writeOut && (setTimeout(function() {
                        opts.onKeyValidation.call(input, k, valResult);
                    }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
                        var buffer = _positioning.getBuffer.call(inputmask);
                        (0, _inputHandling.writeBuffer)(input, buffer, forwardPosition, e, !0 !== checkval);
                    }
                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                    valResult;
                }
            },
            keyupEvent: function keyupEvent(e) {
                var inputmask = this.inputmask;
                !inputmask.isComposing || e.keyCode !== _keycode.default.KEY_229 && e.keyCode !== _keycode.default.ENTER || inputmask.$el.trigger("input");
            },
            pasteEvent: function pasteEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this, inputValue = inputmask._valueGet(!0), caretPos = _positioning.caret.call(inputmask, this), tempValue;
                inputmask.isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                valueAfterCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                    inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
                }
                var pasteValue = inputValue;
                if ("function" == typeof opts.onBeforePaste) {
                    if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
                    pasteValue = pasteValue || inputValue;
                }
                return (0, _inputHandling.checkVal)(this, !0, !1, pasteValue.toString().split(""), e), 
                e.preventDefault();
            },
            inputFallBackEvent: function inputFallBackEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
                function ieMobileHandler(input, inputValue, caretPos) {
                    if (_environment.iemobile) {
                        var inputChar = inputValue.replace(_positioning.getBuffer.call(inputmask).join(""), "");
                        if (1 === inputChar.length) {
                            var iv = inputValue.split("");
                            iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                        }
                    }
                    return inputValue;
                }
                function analyseChanges(inputValue, buffer, caretPos) {
                    for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl; ) frontPart.push("~");
                    for (;frontBufferPart.length < fpl; ) frontBufferPart.push("~");
                    for (;backPart.length < bpl; ) backPart.unshift("~");
                    for (;backBufferPart.length < bpl; ) backBufferPart.unshift("~");
                    var newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
                    for (i = 0, bl = newBuffer.length; i < bl; i++) switch (placeholder = _validationTests.getPlaceholder.call(inputmask, _positioning.translatePosition.call(inputmask, i)), 
                    action) {
                      case "insertText":
                        oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), 
                        i = bl;
                        break;

                      case "insertReplacementText":
                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                        break;

                      case "deleteContentBackward":
                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                        break;

                      default:
                        newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", 
                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", 
                        data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", 
                        !_positioning.isMask.call(inputmask, _positioning.translatePosition.call(inputmask, i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", 
                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                        break;
                    }
                    return {
                        action: action,
                        data: data,
                        caret: caretPos
                    };
                }
                var input = this, inputValue = input.inputmask._valueGet(!0), buffer = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join(""), caretPos = _positioning.caret.call(inputmask, input, void 0, void 0, !0);
                if (buffer !== inputValue) {
                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                    var changes = analyseChanges(inputValue, buffer, caretPos);
                    switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), 
                    (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask)), 
                    _positioning.caret.call(inputmask, input, caretPos.begin, caretPos.end, !0), changes.action) {
                      case "insertText":
                      case "insertReplacementText":
                        changes.data.forEach(function(entry, ndx) {
                            var keypress = new $.Event("keypress");
                            keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                        }), setTimeout(function() {
                            inputmask.$el.trigger("keyup");
                        }, 0);
                        break;

                      case "deleteContentBackward":
                        var keydown = new $.Event("keydown");
                        keydown.keyCode = _keycode.default.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                        break;

                      default:
                        (0, _inputHandling.applyInputValue)(input, inputValue);
                        break;
                    }
                    e.preventDefault();
                }
            },
            compositionendEvent: function compositionendEvent(e) {
                var inputmask = this.inputmask;
                inputmask.isComposing = !1, inputmask.$el.trigger("input");
            },
            setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                var inputmask = this.inputmask, input = this, value = e && e.detail ? e.detail[0] : argument_1;
                void 0 === value && (value = this.inputmask._valueGet(!0)), (0, _inputHandling.applyInputValue)(this, value), 
                (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && _positioning.caret.call(inputmask, this, e.detail ? e.detail[1] : argument_2);
            },
            focusEvent: function focusEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this, nptValue = this.inputmask._valueGet();
                opts.showMaskOnFocus && nptValue !== _positioning.getBuffer.call(inputmask).join("") && (0, 
                _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask))), 
                !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && -1 !== _positioning.getLastValidPosition.call(inputmask) || EventHandlers.clickEvent.apply(this, [ e, !0 ]), 
                inputmask.undoValue = _positioning.getBuffer.call(inputmask).join("");
            },
            invalidEvent: function invalidEvent(e) {
                this.inputmask.validationEvent = !0;
            },
            mouseleaveEvent: function mouseleaveEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this;
                inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && (0, 
                _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder);
            },
            clickEvent: function clickEvent(e, tabbed) {
                var inputmask = this.inputmask, input = this;
                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                    var newCaretPosition = _positioning.determineNewCaretPosition.call(inputmask, _positioning.caret.call(inputmask, this), tabbed);
                    void 0 !== newCaretPosition && _positioning.caret.call(inputmask, this, newCaretPosition);
                }
            },
            cutEvent: function cutEvent(e) {
                var inputmask = this.inputmask, maskset = inputmask.maskset, input = this, pos = _positioning.caret.call(inputmask, this), clipboardData = window.clipboardData || e.clipboardData, clipData = inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning.getBuffer.call(inputmask).slice(pos.begin, pos.end);
                clipboardData.setData("text", inputmask.isRTL ? clipData.reverse().join("") : clipData.join("")), 
                document.execCommand && document.execCommand("copy"), _validation.handleRemove.call(inputmask, this, _keycode.default.DELETE, pos), 
                (0, _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join(""));
            },
            blurEvent: function blurEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib, $input = $(this), input = this;
                if (this.inputmask) {
                    (0, _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder);
                    var nptValue = this.inputmask._valueGet(), buffer = _positioning.getBuffer.call(inputmask).slice();
                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === _positioning.getLastValidPosition.call(inputmask) && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), 
                    !1 === _validation.isComplete.call(inputmask, buffer) && (setTimeout(function() {
                        $input.trigger("incomplete");
                    }, 0), opts.clearIncomplete && (_positioning.resetMaskSet.call(inputmask), buffer = opts.clearMaskOnLostFocus ? [] : _positioning.getBufferTemplate.call(inputmask).slice())), 
                    (0, _inputHandling.writeBuffer)(this, buffer, void 0, e)), inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), 
                    $input.trigger("change"));
                }
            },
            mouseenterEvent: function mouseenterEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this;
                inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), 
                opts.showMaskOnHover && (0, _inputHandling.HandleNativePlaceholder)(this, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")));
            },
            submitEvent: function submitEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts;
                inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && inputmask.$el.trigger("change"), 
                opts.clearMaskOnLostFocus && -1 === _positioning.getLastValidPosition.call(inputmask) && inputmask._valueGet && inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && inputmask._valueSet(""), 
                opts.clearIncomplete && !1 === _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && inputmask._valueSet(""), 
                opts.removeMaskOnSubmit && (inputmask._valueSet(inputmask.unmaskedvalue(), !0), 
                setTimeout(function() {
                    (0, _inputHandling.writeBuffer)(inputmask.el, _positioning.getBuffer.call(inputmask));
                }, 0));
            },
            resetEvent: function resetEvent() {
                var inputmask = this.inputmask;
                inputmask.refreshValue = !0, setTimeout(function() {
                    (0, _inputHandling.applyInputValue)(inputmask.el, inputmask._valueGet(!0));
                }, 0);
            }
        };
        exports.EventHandlers = EventHandlers;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.iphone = exports.iemobile = exports.mobile = exports.ie = exports.ua = void 0;
        var ua = window.navigator && window.navigator.userAgent || "", ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"), mobile = "ontouchstart" in window, iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
        exports.iphone = iphone, exports.iemobile = iemobile, exports.mobile = mobile, exports.ie = ie, 
        exports.ua = ua;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _extend = _interopRequireDefault(__webpack_require__(13)), _window = _interopRequireDefault(__webpack_require__(6)), _data = _interopRequireDefault(__webpack_require__(17)), _events = __webpack_require__(18);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var document = _window.default.document;
        function DependencyLib(elem) {
            return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (null != elem && elem !== _window.default && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), 
            void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
        }
        DependencyLib.prototype = {
            on: _events.on,
            off: _events.off,
            trigger: _events.trigger
        }, DependencyLib.extend = _extend.default, DependencyLib.data = _data.default, DependencyLib.Event = _events.Event;
        var _default = DependencyLib;
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj;
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
            return object.__proto__;
        } : function(object) {
            return object.constructor.prototype;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.mask = mask, __webpack_require__(10);
        var _keycode = _interopRequireDefault(__webpack_require__(0)), _positioning = __webpack_require__(2), _inputHandling = __webpack_require__(5), _eventruler = __webpack_require__(12), _environment = __webpack_require__(8), _validation = __webpack_require__(4), _eventhandlers = __webpack_require__(7);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function mask() {
            var inputmask = this, opts = this.opts, el = this.el, $ = this.dependencyLib;
            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    var valueGet, valueSet;
                    function patchValhook(type) {
                        if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                return elem.value;
                            }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                return elem.value = value, elem;
                            };
                            $.valHooks[type] = {
                                get: function get(elem) {
                                    if (elem.inputmask) {
                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                        var result = valhookGet(elem);
                                        return -1 !== _positioning.getLastValidPosition.call(inputmask, void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                    }
                                    return valhookGet(elem);
                                },
                                set: function set(elem, value) {
                                    var result = valhookSet(elem, value);
                                    return elem.inputmask && (0, _inputHandling.applyInputValue)(elem, value), result;
                                },
                                inputmaskpatch: !0
                            };
                        }
                    }
                    function getter() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== _positioning.getLastValidPosition.call(inputmask) || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice()).reverse() : _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                    }
                    function setter(value) {
                        valueSet.call(this, value), this.inputmask && (0, _inputHandling.applyInputValue)(this, value);
                    }
                    function installNativeValueSetFallback(npt) {
                        _eventruler.EventRuler.on(npt, "mouseenter", function() {
                            var input = this, value = this.inputmask._valueGet(!0);
                            value !== (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).reverse() : _positioning.getBuffer.call(inputmask)).join("") && (0, 
                            _inputHandling.applyInputValue)(this, value);
                        });
                    }
                    if (!npt.inputmask.__valueGet) {
                        if (!0 !== opts.noValuePatching) {
                            if (Object.getOwnPropertyDescriptor) {
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                    get: getter,
                                    set: setter,
                                    configurable: !0
                                })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                    return this.textContent;
                                }, valueSet = function valueSet(value) {
                                    this.textContent = value;
                                }, Object.defineProperty(npt, "value", {
                                    get: getter,
                                    set: setter,
                                    configurable: !0
                                }));
                            } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                            valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                            npt.__defineSetter__("value", setter));
                            npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                        }
                        npt.inputmask._valueGet = function(overruleRTL) {
                            return inputmask.isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                        }, npt.inputmask._valueSet = function(value, overruleRTL) {
                            valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && inputmask.isRTL ? value.split("").reverse().join("") : value);
                        }, void 0 === valueGet && (valueGet = function valueGet() {
                            return this.value;
                        }, valueSet = function valueSet(value) {
                            this.value = value;
                        }, patchValhook(npt.type), installNativeValueSetFallback(npt));
                    }
                }
                "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(_keycode.default.ENTER);
                var elementType = input.getAttribute("type"), isSupported = "input" === input.tagName.toLowerCase() && opts.supportsInputType.includes(elementType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
                    var el = document.createElement("input");
                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                } else isSupported = "partial";
                return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, 
                isSupported;
            }
            _eventruler.EventRuler.off(el);
            var isSupported = isElementTypeSupported(el, opts);
            if (!1 !== isSupported) {
                inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, 
                -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, 
                el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(el.autocomplete), 
                _environment.iphone && (opts.insertModeVisual = !1), _eventruler.EventRuler.on(el, "submit", _eventhandlers.EventHandlers.submitEvent), 
                _eventruler.EventRuler.on(el, "reset", _eventhandlers.EventHandlers.resetEvent), 
                _eventruler.EventRuler.on(el, "blur", _eventhandlers.EventHandlers.blurEvent), _eventruler.EventRuler.on(el, "focus", _eventhandlers.EventHandlers.focusEvent), 
                _eventruler.EventRuler.on(el, "invalid", _eventhandlers.EventHandlers.invalidEvent), 
                _eventruler.EventRuler.on(el, "click", _eventhandlers.EventHandlers.clickEvent), 
                _eventruler.EventRuler.on(el, "mouseleave", _eventhandlers.EventHandlers.mouseleaveEvent), 
                _eventruler.EventRuler.on(el, "mouseenter", _eventhandlers.EventHandlers.mouseenterEvent), 
                _eventruler.EventRuler.on(el, "paste", _eventhandlers.EventHandlers.pasteEvent), 
                _eventruler.EventRuler.on(el, "cut", _eventhandlers.EventHandlers.cutEvent), _eventruler.EventRuler.on(el, "complete", opts.oncomplete), 
                _eventruler.EventRuler.on(el, "incomplete", opts.onincomplete), _eventruler.EventRuler.on(el, "cleared", opts.oncleared), 
                !0 !== opts.inputEventOnly && (_eventruler.EventRuler.on(el, "keydown", _eventhandlers.EventHandlers.keydownEvent), 
                _eventruler.EventRuler.on(el, "keypress", _eventhandlers.EventHandlers.keypressEvent), 
                _eventruler.EventRuler.on(el, "keyup", _eventhandlers.EventHandlers.keyupEvent)), 
                (_environment.mobile || opts.inputEventOnly) && el.removeAttribute("maxLength"), 
                _eventruler.EventRuler.on(el, "input", _eventhandlers.EventHandlers.inputFallBackEvent), 
                _eventruler.EventRuler.on(el, "compositionend", _eventhandlers.EventHandlers.compositionendEvent)), 
                _eventruler.EventRuler.on(el, "setvalue", _eventhandlers.EventHandlers.setValueEvent), 
                inputmask.undoValue = _positioning.getBufferTemplate.call(inputmask).join("");
                var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                    (0, _inputHandling.applyInputValue)(el, el.inputmask._valueGet(!0), opts);
                    var buffer = _positioning.getBuffer.call(inputmask).slice();
                    !1 === _validation.isComplete.call(inputmask, buffer) && opts.clearIncomplete && _positioning.resetMaskSet.call(inputmask), 
                    opts.clearMaskOnLostFocus && activeElement !== el && (-1 === _positioning.getLastValidPosition.call(inputmask) ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), 
                    (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && (0, 
                    _inputHandling.writeBuffer)(el, buffer), activeElement === el && _positioning.caret.call(inputmask, el, _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask)));
                }
            }
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.EventRuler = void 0;
        var _inputmask = _interopRequireDefault(__webpack_require__(1)), _keycode = _interopRequireDefault(__webpack_require__(0)), _positioning = __webpack_require__(2), _inputHandling = __webpack_require__(5);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var EventRuler = {
            on: function on(input, eventName, eventHandler) {
                var $ = input.inputmask.dependencyLib, ev = function ev(e) {
                    e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                    var that = this, args, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : void 0, $ = inputmask.dependencyLib;
                    if (void 0 === inputmask && "FORM" !== this.nodeName) {
                        var imOpts = $.data(that, "_inputmask_opts");
                        $(that).off(), imOpts && new _inputmask.default(imOpts).mask(that);
                    } else {
                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === _keycode.default.TAB))) {
                            switch (e.type) {
                              case "input":
                                if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, 
                                e.preventDefault();
                                break;

                              case "keydown":
                                inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = inputmask.isComposing = e.keyCode === _keycode.default.KEY_229;
                                break;

                              case "keyup":
                              case "compositionend":
                                inputmask.isComposing && (inputmask.skipInputEvent = !1);
                                break;

                              case "keypress":
                                if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                                inputmask.skipKeyPressEvent = !0;
                                break;

                              case "click":
                              case "focus":
                                return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), 
                                (0, _inputHandling.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")), 
                                setTimeout(function() {
                                    input.focus();
                                }, 3e3)) : (args = arguments, setTimeout(function() {
                                    input.inputmask && eventHandler.apply(that, args);
                                }, 0)), !1;
                            }
                            var returnVal = eventHandler.apply(that, arguments);
                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                        }
                        e.preventDefault();
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                [ "submit", "reset" ].includes(eventName) ? null !== input.form && $(input.form).on(eventName, ev.bind(input)) : $(input).on(eventName, ev);
            },
            off: function off(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var $ = input.inputmask.dependencyLib, events = input.inputmask.events;
                    for (var eventName in event && (events = [], events[event] = input.inputmask.events[event]), 
                    events) {
                        for (var evArr = events[eventName]; 0 < evArr.length; ) {
                            var ev = evArr.pop();
                            [ "submit", "reset" ].includes(eventName) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                        }
                        delete input.inputmask.events[eventName];
                    }
                }
            }
        };
        exports.EventRuler = EventRuler;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj;
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function extend() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
            i++), "object" !== _typeof(target) && "function" != typeof target && (target = {}); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
            copy = options[name], target !== copy && (deep && copy && ("[object Object]" === Object.prototype.toString.call(copy) || (copyIsArray = Array.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, 
            src && Array.isArray(src) ? src : []) : src && "[object Object]" === Object.prototype.toString.call(src) ? src : {}, 
            target[name] = extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
            return target;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = extend;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = _default;
        var escapeRegexRegex = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
        function _default(str) {
            return str.replace(escapeRegexRegex, "\\$1");
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0, __webpack_require__(16), __webpack_require__(22), 
        __webpack_require__(23), __webpack_require__(24);
        var _inputmask2 = _interopRequireDefault(__webpack_require__(1));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var _default = _inputmask2.default;
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        _inputmask.default.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function ipValidator(chrs, maskset, pos, strict, opts) {
            return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
            -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, 
            ipValidatorRegex.test(chrs);
        }
        _inputmask.default.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: !1,
                keepStatic: !1,
                tabThrough: !0
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: ipValidator
                    },
                    j: {
                        validator: ipValidator
                    },
                    k: {
                        validator: ipValidator
                    },
                    l: {
                        validator: ipValidator
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
                }
            }
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _default(owner, key, value) {
            if (void 0 === value) return owner.__data ? owner.__data[key] : null;
            owner.__data = owner.__data || {}, owner.__data[key] = value;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.on = on, exports.off = off, exports.trigger = trigger, exports.Event = void 0;
        var _extend = _interopRequireDefault(__webpack_require__(13)), _window = _interopRequireDefault(__webpack_require__(6)), _inputmask = _interopRequireDefault(__webpack_require__(9)), Event;
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function isValidElement(elem) {
            return elem instanceof Element;
        }
        function on(events, handler) {
            function addEvent(ev, namespace) {
                elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), 
                eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], 
                eventRegistry[ev][namespace].push(handler);
            }
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                addEvent(ev, namespace);
            }
            return this;
        }
        function off(events, handler) {
            var eventRegistry, elem;
            function removeEvent(ev, namespace, handler) {
                if (ev in eventRegistry == !0) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), 
                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
            }
            function resolveNamespace(ev, namespace) {
                var evts = [], hndx, hndL;
                if (0 < ev.length) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                    ev: ev,
                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                    handler: eventRegistry[ev][namespace][hndx]
                }); else evts.push({
                    ev: ev,
                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                    handler: handler
                }); else if (0 < namespace.length) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, 
                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                }); else evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: handler
                });
                return evts;
            }
            if (isValidElement(this[0])) {
                eventRegistry = this[0].eventRegistry, elem = this[0];
                for (var _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
            }
            return this;
        }
        function trigger(events) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                if (void 0 !== document && "global" === namespace) {
                    var evnt, i, params = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: arguments[1]
                    };
                    if (document.createEvent) {
                        try {
                            evnt = new CustomEvent(ev, params);
                        } catch (e) {
                            evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                        }
                        events.type && (0, _extend.default)(evnt, events), elem.dispatchEvent(evnt);
                    } else evnt = document.createEventObject(), evnt.eventType = ev, evnt.detail = arguments[1], 
                    events.type && (0, _extend.default)(evnt, events), elem.fireEvent("on" + evnt.eventType, evnt);
                } else if (void 0 !== eventRegistry[ev]) if (arguments[0] = arguments[0].type ? arguments[0] : _inputmask.default.Event(arguments[0]), 
                arguments[0].detail = arguments.slice(1), "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);
            }
            return this;
        }
        exports.Event = Event, "function" == typeof _window.default.CustomEvent ? exports.Event = Event = _window.default.CustomEvent : (exports.Event = Event = function Event(event, params) {
            params = params || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var evt = document.createEvent("CustomEvent");
            return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
            evt;
        }, Event.prototype = _window.default.Event.prototype);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.generateMaskSet = generateMaskSet, exports.analyseMask = analyseMask;
        var _inputmask = _interopRequireDefault(__webpack_require__(9));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function generateMaskSet(opts, nocache) {
            var ms;
            function generateMask(mask, metadata, opts) {
                var regexMask = !1, masksetDefinition, maskdefKey;
                if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, 
                mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
                0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
                }
                return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, 
                !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: void 0,
                    jitOffset: {}
                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
                masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
                masksetDefinition;
            }
            if ("function" == typeof opts.mask && (opts.mask = opts.mask(opts)), Array.isArray(opts.mask)) {
                if (1 < opts.mask.length) {
                    null === opts.keepStatic && (opts.keepStatic = !0);
                    var altMask = opts.groupmarker[0];
                    return (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function(msk) {
                        1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), 
                        void 0 !== msk.mask && "function" != typeof msk.mask ? altMask += msk.mask : altMask += msk;
                    }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
                }
                opts.mask = opts.mask.pop();
            }
            return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && "function" != typeof opts.mask.mask ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), 
            ms;
        }
        function analyseMask(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, closeRegexGroup = !1;
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function insertTestDefinition(mtoken, element, position) {
                position = void 0 !== position ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    static: !1,
                    optionality: !1,
                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: void 0,
                    nativeDef: element
                }) : (escaped && (element = element[element.length - 1]), element.split("").forEach(function(lmnt, ndx) {
                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                        nativeDef: (escaped ? "'" : "") + lmnt
                    });
                })), escaped = !1; else {
                    var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && Inputmask.prototype.definitions[element];
                    maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                            this.test = maskdef.validator;
                        }() : new RegExp("."),
                        static: maskdef.static || !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element,
                        generated: maskdef.generated
                    }) : (mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                        nativeDef: (escaped ? "'" : "") + element
                    }), escaped = !1);
                }
            }
            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && maskToken.matches.forEach(function(token, ndx) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                    regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), 
                    verifyGroupMarker(token);
                });
            }
            function defaultCase() {
                if (0 < openenings.length) {
                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                    currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                        0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                    }
                } else insertTestDefinition(currentToken, m);
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), 
                    st;
                }
                for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                }
                return maskToken;
            }
            function groupify(matches) {
                var groupToken = new MaskToken(!0);
                return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
            }
            function closeGroup() {
                if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) if (0 < openenings.length) {
                    if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), 
                    currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                        alternator.matches[mndx].alternatorGroup = !1;
                        0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                    }
                } else currentToken.matches.push(openingToken); else defaultCase();
            }
            function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                return lastMatch.isQuantifier && (lastMatch = groupify([ matches.pop(), lastMatch ])), 
                lastMatch;
            }
            for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                if (m = match[0], regexMask) switch (m.charAt(0)) {
                  case "?":
                    m = "{0,1}";
                    break;

                  case "+":
                  case "*":
                    m = "{" + m + "}";
                    break;

                  case "|":
                    if (0 === openenings.length) {
                        var altRegexGroup = groupify(currentToken.matches);
                        altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], 
                        closeRegexGroup = !0;
                    }
                    break;
                }
                if (escaped) defaultCase(); else switch (m.charAt(0)) {
                  case "$":
                  case "^":
                    regexMask || defaultCase();
                    break;

                  case "(?=":
                    break;

                  case "(?!":
                    break;

                  case "(?<=":
                    break;

                  case "(?<!":
                    break;

                  case opts.escapeChar:
                    escaped = !0, regexMask && defaultCase();
                    break;

                  case opts.optionalmarker[1]:
                  case opts.groupmarker[1]:
                    closeGroup();
                    break;

                  case opts.optionalmarker[0]:
                    openenings.push(new MaskToken(!1, !0));
                    break;

                  case opts.groupmarker[0]:
                    openenings.push(new MaskToken(!0));
                    break;

                  case opts.quantifiermarker[0]:
                    var quantifier = new MaskToken(!1, !1, !0);
                    m = m.replace(/[{}]/g, "");
                    var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                    "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                        min: mq0,
                        max: mq1,
                        jit: mqj[1]
                    };
                    var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                    if (match = matches.pop(), match.isAlternator) {
                        matches.push(match), matches = match.matches;
                        var groupToken = new MaskToken(!0), tmpMatch = matches.pop();
                        matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
                    }
                    match.isGroup || (match = groupify([ match ])), matches.push(match), matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    if (0 < openenings.length) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
                    } else lastMatch = groupQuantifier(currentToken.matches);
                    if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                    lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                    openenings.push(alternator), lastMatch.openGroup) {
                        lastMatch.openGroup = !1;
                        var alternatorGroup = new MaskToken(!0);
                        alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            for (closeRegexGroup && closeGroup(); 0 < openenings.length; ) openingToken = openenings.pop(), 
            currentToken.matches.push(openingToken);
            return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _default = {
            9: {
                validator: "[0-9\uff10-\uff19]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
            }
        };
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _default = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: [ "[", "]" ],
            quantifiermarker: [ "{", "}" ],
            groupmarker: [ "(", ")" ],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: function oncomplete() {},
            onincomplete: function onincomplete() {},
            oncleared: function oncleared() {},
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: function onKeyDown() {},
            onBeforeMask: null,
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                return "function" == typeof opts.onBeforeMask ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: function onKeyValidation() {},
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: [ "text", "tel", "url", "password", "search" ],
            ignorables: [ 8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
            usePrototypeDefinitions: !0
        };
        exports.default = _default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1)), _keycode = _interopRequireDefault(__webpack_require__(0)), _escapeRegex = _interopRequireDefault(__webpack_require__(14));
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj;
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var $ = _inputmask.default.dependencyLib, currentYear = new Date().getFullYear(), formatCode = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            hx: [ function(x) {
                return "[0-9]{".concat(x, "}");
            }, Date.prototype.setHours, "hours", function(x) {
                return Date.prototype.getHours;
            } ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            Hx: [ function(x) {
                return "[0-9]{".concat(x, "}");
            }, Date.prototype.setHours, "hours", function(x) {
                return function() {
                    return pad(Date.prototype.getHours.call(this), x);
                };
            } ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2);
            } ],
            s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
            ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
            } ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
            } ],
            t: [ "[ap]" ],
            tt: [ "[ap]m" ],
            T: [ "[AP]" ],
            TT: [ "[AP]M" ],
            Z: [ "" ],
            o: [ "" ],
            S: [ "" ]
        }, formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function formatcode(match) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (dynMatches && void 0 !== dynMatches[0]) {
                var fcode = formatCode[match[0][0] + "x"].slice("");
                return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
            }
            if (formatCode[match[0]]) return formatCode[match[0]];
        }
        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [], dyntokens = [];
                for (var ndx in formatCode) if (/\.*x$/.test(ndx)) {
                    var dynToken = ndx[0] + "\\d+";
                    -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
                } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", 
                opts.tokenizer = new RegExp(opts.tokenizer, "g");
            }
            return opts.tokenizer;
        }
        function prefillYear(dateParts, currentResult, opts) {
            if (dateParts.year !== dateParts.rawyear) {
                var crrntyear = currentYear.toString(), enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""), currentYearPart = crrntyear.slice(0, enteredPart.length), currentYearNextPart = crrntyear.slice(enteredPart.length);
                if (2 === enteredPart.length && enteredPart === currentYearPart) {
                    var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
                    dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime()) && (dateParts.date.setFullYear(currentYear), 
                    dateParts.year = crrntyear, currentResult.insert = [ {
                        pos: currentResult.pos + 1,
                        c: currentYearNextPart[0]
                    }, {
                        pos: currentResult.pos + 2,
                        c: currentYearNextPart[1]
                    } ]);
                }
            }
            return currentResult;
        }
        function isValidDate(dateParts, currentResult, opts) {
            if (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult;
            if ("29" == dateParts.day) {
                var tokenMatch = getTokenMatch(currentResult.pos, opts);
                if ("yyyy" === tokenMatch.targetMatch[0] && currentResult.pos - tokenMatch.targetMatchIndex == 2) return currentResult.remove = currentResult.pos + 1, 
                currentResult;
            }
            return !1;
        }
        function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
            if (!result) return result;
            if (opts.min) {
                if (dateParts.rawyear) {
                    var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""), minYear = opts.min.year.substr(0, rawYear.length), maxYear;
                    if (rawYear < minYear) {
                        var tokenMatch = getTokenMatch(result.pos, opts);
                        if (rawYear = dateParts.rawyear.substr(0, result.pos - tokenMatch.targetMatchIndex + 1), 
                        minYear = opts.min.year.substr(0, rawYear.length), minYear <= rawYear) return result.remove = tokenMatch.targetMatchIndex + rawYear.length, 
                        result;
                        if (rawYear = "yyyy" === tokenMatch.targetMatch[0] ? dateParts.rawyear.substr(1, 1) : dateParts.rawyear.substr(0, 1), 
                        minYear = opts.min.year.substr(2, 1), maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear, 
                        1 === rawYear.length && minYear <= rawYear <= maxYear && !0 !== fromCheckval) return "yyyy" === tokenMatch.targetMatch[0] ? (result.insert = [ {
                            pos: result.pos + 1,
                            c: rawYear,
                            strict: !0
                        } ], result.caret = result.pos + 2, maskset.validPositions[result.pos].input = opts.min.year[1]) : (result.insert = [ {
                            pos: result.pos + 1,
                            c: opts.min.year[1],
                            strict: !0
                        }, {
                            pos: result.pos + 2,
                            c: rawYear,
                            strict: !0
                        } ], result.caret = result.pos + 3, maskset.validPositions[result.pos].input = opts.min.year[0]), 
                        result;
                        result = !1;
                    }
                }
                result && dateParts.year && dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
            }
            return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), 
            result;
        }
        function parse(format, dateObjValue, opts, raw) {
            var mask = "", match, fcode;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) if (void 0 === dateObjValue) if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")"; else switch (match[0]) {
              case "[":
                mask += "(";
                break;

              case "]":
                mask += ")?";
                break;

              default:
                mask += (0, _escapeRegex.default)(match[0]);
            } else if (fcode = formatcode(match)) if (!0 !== raw && fcode[3]) {
                var getFn = fcode[3];
                mask += getFn.call(dateObjValue.date);
            } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0]; else mask += match[0];
            return mask;
        }
        function pad(val, len) {
            for (val = String(val), len = len || 2; val.length < len; ) val = "0" + val;
            return val;
        }
        function analyseMask(maskString, format, opts) {
            var dateObj = {
                date: new Date(1, 0, 1)
            }, targetProp, mask = maskString, match, dateOperation;
            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = value.replace(/[^0-9]/g, "0"), dateObj["raw" + targetProp] = value, 
                void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
            }
            if ("string" == typeof mask) {
                for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) {
                    var dynMatches = new RegExp("\\d+$").exec(match[0]), fcode = dynMatches ? match[0][0] + "x" : match[0], value = void 0;
                    if (dynMatches) {
                        var lastIndex = getTokenizer(opts).lastIndex, tokanMatch = getTokenMatch(match.index, opts);
                        getTokenizer(opts).lastIndex = lastIndex, value = mask.slice(0, mask.indexOf(tokanMatch.nextMatch[0]));
                    } else value = mask.slice(0, fcode.length);
                    Object.prototype.hasOwnProperty.call(formatCode, fcode) && (targetProp = formatCode[fcode][2], 
                    dateOperation = formatCode[fcode][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length);
                }
                return dateObj;
            }
            if (mask && "object" === _typeof(mask) && Object.prototype.hasOwnProperty.call(mask, "date")) return mask;
        }
        function importDate(dateObj, opts) {
            return parse(opts.inputFormat, {
                date: dateObj
            }, opts);
        }
        function getTokenMatch(pos, opts) {
            var calcPos = 0, targetMatch, match, matchLength = 0;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); ) {
                var dynMatches = new RegExp("\\d+$").exec(match[0]);
                if (matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length, calcPos += matchLength, 
                pos <= calcPos) {
                    targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
                    break;
                }
            }
            return {
                targetMatchIndex: calcPos - matchLength,
                nextMatch: match,
                targetMatch: targetMatch
            };
        }
        _inputmask.default.extendAliases({
            datetime: {
                mask: function mask(opts) {
                    return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), 
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, 
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, 
                    opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), 
                    opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), 
                    opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (strict) return !0;
                    if (isNaN(c) && buffer[pos] !== c) {
                        var tokenMatch = getTokenMatch(pos, opts);
                        if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                            var validator = formatCode[tokenMatch.targetMatch[0]][0];
                            if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], 
                            buffer[pos - 1] = "0", {
                                fuzzy: !0,
                                buffer: buffer,
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos + 1
                                },
                                pos: pos + 1
                            };
                        }
                    }
                    return !0;
                },
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
                    if (strict) return !0;
                    var tokenMatch, validator;
                    if (!1 === currentResult) return tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], 
                    new RegExp(validator).test("0" + c)) ? {
                        insert: [ {
                            pos: pos,
                            c: "0"
                        }, {
                            pos: pos + 1,
                            c: c
                        } ],
                        pos: pos + 1
                    } : currentResult;
                    if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), 
                    tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                        validator = formatCode[tokenMatch.targetMatch[0]][0];
                        var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                        !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0");
                    }
                    var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = prefillYear(dateParts, result, opts), 
                    result = isValidDate(dateParts, result, opts), result = isDateInRange(dateParts, result, opts, maskset, fromCheckval)), 
                    pos && result && currentResult.pos !== pos ? {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {
                            start: pos,
                            end: currentResult.pos
                        }
                    } : result;
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var input = this;
                    e.ctrlKey && e.keyCode === _keycode.default.RIGHT && (this.inputmask._valueSet(importDate(new Date(), opts)), 
                    $(this).trigger("setvalue"));
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
                },
                casing: function casing(elem, test, pos, validPositions) {
                    return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), 
                    initialValue;
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric"
            }
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1)), _keycode = _interopRequireDefault(__webpack_require__(0)), _escapeRegex = _interopRequireDefault(__webpack_require__(14));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var $ = _inputmask.default.dependencyLib;
        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) _inputmask.default.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt;
        }
        function alignDigits(buffer, digits, opts, force) {
            if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
                var radixPosition = buffer.indexOf(opts.radixPoint), negationBack = !1;
                opts.negationSymbol.back === buffer[buffer.length - 1] && (negationBack = !0, buffer.length--), 
                -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);
                for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
            }
            return negationBack && buffer.push(opts.negationSymbol.back), buffer;
        }
        function findValidator(symbol, maskset) {
            var posNdx = 0;
            if ("+" === symbol) {
                for (posNdx in maskset.validPositions) ;
                posNdx = parseInt(posNdx);
            }
            for (var tstNdx in maskset.tests) if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
            return posNdx;
        }
        function findValid(symbol, maskset) {
            var ret = -1;
            for (var ndx in maskset.validPositions) {
                var tst = maskset.validPositions[ndx];
                if (tst && tst.match.def === symbol) {
                    ret = parseInt(ndx);
                    break;
                }
            }
            return ret;
        }
        function parseMinMaxOptions(opts) {
            void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp((0, 
            _escapeRegex.default)(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
            null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), 
            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
            opts.parseMinMaxOptions = "done");
        }
        function genMask(opts) {
            opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
            " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), 
            "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
            var decimalDef = "0", radixPointDef = opts.radixPoint;
            !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", 
            opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
            opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, 
            radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, 
            opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, 
            opts.definitions[radixPointDef].static = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, 
            opts.numericInput = !0);
            var mask = "[+]", altMask;
            if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, 
            opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", 
            opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator].static = !0, 
            opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", 
            void 0 !== opts.digits && 0 !== opts.digits) {
                var dq = opts.digits.toString().split(",");
                isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", 
                opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
            }
            return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [ altMask + autoEscape(opts.suffix, opts) + "[-]", mask ]), 
            opts.greedy = !1, parseMinMaxOptions(opts), mask;
        }
        function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
            return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), 
            pos;
        }
        function decimalValidator(chrs, maskset, pos, strict, opts) {
            var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1, result = -1 !== radixPos && new RegExp("[0-9\uff11-\uff19]").test(chrs);
            return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                insert: {
                    pos: radixPos === pos ? radixPos + 1 : radixPos,
                    c: opts.radixPoint
                },
                pos: pos
            } : result;
        }
        function checkForLeadingZeroes(buffer, opts) {
            var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, 
            _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, 
            _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")), number = numberMatches ? numberMatches[2] : "", leadingzeroes = !1;
            return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), 
            !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
        }
        _inputmask.default.extendAliases({
            numeric: {
                mask: genMask,
                _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "999){+|1}";
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: !1,
                step: 1,
                inputType: "text",
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: decimalValidator
                    },
                    1: {
                        validator: decimalValidator,
                        definitionSymbol: "9"
                    },
                    "+": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                        }
                    },
                    "-": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        }
                    }
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                    var pattern;
                    if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                        if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) inserts.push({
                            pos: pos + i,
                            c: pattern[i],
                            strict: !1
                        });
                        return {
                            insert: inserts
                        };
                    }
                    var radixPos = buffer.indexOf(opts.radixPoint), initPos = pos;
                    if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
                        if (!0 !== opts.allowMinus) return !1;
                        var isNegative = !1, front = findValid("+", maskset), back = findValid("-", maskset);
                        return -1 !== front && (isNegative = [ front, back ]), !1 !== isNegative ? {
                            remove: isNegative,
                            caret: initPos - opts.negationSymbol.front.length
                        } : {
                            insert: [ {
                                pos: findValidator("+", maskset),
                                c: opts.negationSymbol.front,
                                fromIsValid: !0
                            }, {
                                pos: findValidator("-", maskset),
                                c: opts.negationSymbol.back,
                                fromIsValid: void 0
                            } ],
                            caret: initPos + opts.negationSymbol.back.length
                        };
                    }
                    if (c === opts.groupSeparator) return {
                        caret: initPos
                    };
                    if (strict) return !0;
                    if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
                        caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                    };
                    if (!1 === opts.__financeInput) if (isSelection) {
                        if (opts.digitsOptional) return {
                            rewritePosition: caretPos.end
                        };
                        if (!opts.digitsOptional) {
                            if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                                insert: {
                                    pos: radixPos + 1,
                                    c: "0",
                                    fromIsValid: !0
                                },
                                rewritePosition: radixPos
                            } : {
                                rewritePosition: radixPos + 1
                            };
                            if (caretPos.begin < radixPos) return {
                                rewritePosition: caretPos.begin - 1
                            };
                        }
                    } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
                        rewritePosition: radixPos
                    };
                    return {
                        rewritePosition: pos
                    };
                },
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                    if (!1 === currentResult) return currentResult;
                    if (strict) return !0;
                    if (null !== opts.min || null !== opts.max) {
                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return !1;
                        if (null !== opts.max && unmasked > opts.max) return !!opts.SetMaxOnOverflow && {
                            refreshFromBuffer: !0,
                            buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                        };
                    }
                    return currentResult;
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp((0, 
                    _escapeRegex.default)(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(_escapeRegex.default.call(this, opts.radixPoint), ".")), 
                    processValue = processValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), 
                    processValue = processValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), 
                    Number(processValue)) : processValue;
                },
                isComplete: function isComplete(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    return maskedValue = maskedValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), 
                    maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), 
                    maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), 
                    maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                    "," === opts.radixPoint && (maskedValue = maskedValue.replace((0, _escapeRegex.default)(opts.radixPoint), ".")), 
                    isFinite(maskedValue);
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    var radixPoint = opts.radixPoint || ",";
                    isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                    var isNagtive = "-" === initialValue.charAt(0) || initialValue.charAt(0) === opts.negationSymbol.front, valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "", forceDigits = 1 < valueParts.length;
                    initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, 
                    "" !== decimalPart || !opts.digitsOptional)) {
                        var digitsFactor = Math.pow(10, digits || 1);
                        initialValue = initialValue.replace((0, _escapeRegex.default)(radixPoint), "."), 
                        isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), 
                        initialValue = initialValue.toString().replace(".", radixPoint);
                    }
                    if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), 
                    null !== opts.min || null !== opts.max) {
                        var numberValue = initialValue.toString().replace(radixPoint, ".");
                        null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
                    }
                    return isNagtive && "-" !== initialValue.charAt(0) && (initialValue = "-" + initialValue), 
                    alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
                },
                onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                    function stripBuffer(buffer, stripRadix) {
                        if (!1 !== opts.__financeInput || stripRadix) {
                            var position = buffer.indexOf(opts.radixPoint);
                            -1 !== position && buffer.splice(position, 1);
                        }
                        if ("" !== opts.groupSeparator) for (;-1 !== (position = buffer.indexOf(opts.groupSeparator)); ) buffer.splice(position, 1);
                        return buffer;
                    }
                    var result, leadingzeroes = checkForLeadingZeroes(buffer, opts);
                    if (leadingzeroes) for (var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0, i = leadingzeroes[0].length - offset; 0 < i; i--) delete this.maskset.validPositions[caretNdx + i], 
                    delete buffer[caretNdx + i];
                    if (e) switch (e.type) {
                      case "blur":
                      case "checkval":
                        if (null !== opts.min) {
                            var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                unmaskAsNumber: !0
                            }));
                            if (null !== opts.min && unmasked < opts.min) return {
                                refreshFromBuffer: !0,
                                buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                            };
                        }
                        if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                            var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, 
                            _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, 
                            _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")), number = nmbrMtchs ? nmbrMtchs[2] : "";
                            0 == number && (result = {
                                refreshFromBuffer: !0,
                                buffer: [ 0 ]
                            });
                        } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), 
                        result = {
                            refreshFromBuffer: !0,
                            buffer: stripBuffer(buffer)
                        }));
                        if (opts.enforceDigitsOnBlur) {
                            result = result || {};
                            var bffr = result && result.buffer || buffer.slice().reverse();
                            result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
                        }
                    }
                    return result;
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var $input = $(this), bffr;
                    if (e.ctrlKey) switch (e.keyCode) {
                      case _keycode.default.UP:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), 
                        $input.trigger("setvalue"), !1;

                      case _keycode.default.DOWN:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), 
                        $input.trigger("setvalue"), !1;
                    }
                    if (!e.shiftKey && (e.keyCode === _keycode.default.DELETE || e.keyCode === _keycode.default.BACKSPACE || e.keyCode === _keycode.default.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                        if (buffer[e.keyCode === _keycode.default.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), 
                        "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), 
                        $input.trigger("setvalue", [ bffr.join(""), caretPos.begin ]), !1;
                        if (!0 === opts._radixDance) {
                            var radixPos = buffer.indexOf(opts.radixPoint);
                            if (opts.digitsOptional) {
                                if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [ bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin ]), 
                                !1;
                            } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === _keycode.default.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== _keycode.default.BACKSPACE && e.keyCode !== _keycode.default.BACKSPACE_SAFARI || caretPos.begin++, 
                            bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), 
                            bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [ bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin ]), 
                            !1;
                        }
                    }
                }
            },
            currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _window = _interopRequireDefault(__webpack_require__(6)), _inputmask = _interopRequireDefault(__webpack_require__(1));
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj;
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && _setPrototypeOf(subClass, superClass);
        }
        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else result = Super.apply(this, arguments);
                return _possibleConstructorReturn(this, result);
            };
        }
        function _possibleConstructorReturn(self, call) {
            return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
        }
        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map() : void 0;
            return _wrapNativeSuper = function _wrapNativeSuper(Class) {
                if (null === Class || !_isNativeFunction(Class)) return Class;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" != typeof _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper);
                }
                function Wrapper() {
                    return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                }
                return Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), _setPrototypeOf(Wrapper, Class);
            }, _wrapNativeSuper(Class);
        }
        function _construct(Parent, args, Class) {
            return _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
                var a = [ null ];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a), instance = new Constructor();
                return Class && _setPrototypeOf(instance, Class.prototype), instance;
            }, _construct.apply(null, arguments);
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (e) {
                return !1;
            }
        }
        function _isNativeFunction(fn) {
            return -1 !== Function.toString.call(fn).indexOf("[native code]");
        }
        function _setPrototypeOf(o, p) {
            return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                return o.__proto__ = p, o;
            }, _setPrototypeOf(o, p);
        }
        function _getPrototypeOf(o) {
            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            }, _getPrototypeOf(o);
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var document = _window.default.document;
        if (document && document.head && document.head.attachShadow && _window.default.customElements && void 0 === _window.default.customElements.get("input-mask")) {
            var InputmaskElement = function(_HTMLElement) {
                _inherits(InputmaskElement, _HTMLElement);
                var _super = _createSuper(InputmaskElement);
                function InputmaskElement() {
                    var _this;
                    _classCallCheck(this, InputmaskElement), _this = _super.call(this);
                    var attributeNames = _this.getAttributeNames(), shadow = _this.attachShadow({
                        mode: "closed"
                    }), input = document.createElement("input");
                    for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
                    var im = new _inputmask.default();
                    return im.dataAttribute = "", im.mask(input), input.inputmask.shadowRoot = shadow, 
                    _this;
                }
                return InputmaskElement;
            }(_wrapNativeSuper(HTMLElement));
            _window.default.customElements.define("input-mask", InputmaskElement);
        }
    } ], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module.default;
        } : function getModuleExports() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 15);
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var modules, installedModules;
});

/***/ }),

/***/ "./node_modules/inputmask/index.js":
/*!*****************************************!*\
  !*** ./node_modules/inputmask/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/inputmask */ "./node_modules/inputmask/dist/inputmask.js");


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!*****************************************************************!*\
  !*** ./src/components sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow-btn/arrow-btn.js": "./src/components/arrow-btn/arrow-btn.js",
	"./arrow-inpt/arrow-inpt.js": "./src/components/arrow-inpt/arrow-inpt.js",
	"./button/_theme_click/button_theme_click.js": "./src/components/button/_theme_click/button_theme_click.js",
	"./button/_theme_enter/button_theme_enter.js": "./src/components/button/_theme_enter/button_theme_enter.js",
	"./button/_theme_registration/button_theme_registration.js": "./src/components/button/_theme_registration/button_theme_registration.js",
	"./button/button.js": "./src/components/button/button.js",
	"./calendar/calendar.js": "./src/components/calendar/calendar.js",
	"./carousel/carousel.js": "./src/components/carousel/carousel.js",
	"./checkbox/checkbox.js": "./src/components/checkbox/checkbox.js",
	"./comment/comment.js": "./src/components/comment/comment.js",
	"./datefield/datefield.js": "./src/components/datefield/datefield.js",
	"./diagram/diagram.js": "./src/components/diagram/diagram.js",
	"./drop-dates/drop-dates.js": "./src/components/drop-dates/drop-dates.js",
	"./dropdown/dropdown.js": "./src/components/dropdown/dropdown.js",
	"./enter-card/enter-card.js": "./src/components/enter-card/enter-card.js",
	"./filter/__expandable-checkbox/filter__expandable-checkbox.js": "./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.js",
	"./filter/__range/filter__range.js": "./src/components/filter/__range/filter__range.js",
	"./filter/filter.js": "./src/components/filter/filter.js",
	"./footer/footer.js": "./src/components/footer/footer.js",
	"./header/header.js": "./src/components/header/header.js",
	"./info-card/__calculations/info-card__calculations.js": "./src/components/info-card/__calculations/info-card__calculations.js",
	"./info-card/info-card.js": "./src/components/info-card/info-card.js",
	"./inpt/inpt.js": "./src/components/inpt/inpt.js",
	"./layout/layout.js": "./src/components/layout/layout.js",
	"./li/li.js": "./src/components/li/li.js",
	"./like/like.js": "./src/components/like/like.js",
	"./logo/logo.js": "./src/components/logo/logo.js",
	"./masked-inpt/masked-inpt.js": "./src/components/masked-inpt/masked-inpt.js",
	"./menu/menu.js": "./src/components/menu/menu.js",
	"./pagination/pagination.js": "./src/components/pagination/pagination.js",
	"./radio/radio.js": "./src/components/radio/radio.js",
	"./rate/rate.js": "./src/components/rate/rate.js",
	"./registration-card/registration-card.js": "./src/components/registration-card/registration-card.js",
	"./rich-checkbox/rich-checkbox.js": "./src/components/rich-checkbox/rich-checkbox.js",
	"./room/room.js": "./src/components/room/room.js",
	"./search-room-card/search-room-card.js": "./src/components/search-room-card/search-room-card.js",
	"./text-with-picture/text-with-picture.js": "./src/components/text-with-picture/text-with-picture.js",
	"./toggle/toggle.js": "./src/components/toggle/toggle.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./src/components/arrow-btn/arrow-btn.css":
/*!************************************************!*\
  !*** ./src/components/arrow-btn/arrow-btn.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/arrow-btn/arrow-btn.js":
/*!***********************************************!*\
  !*** ./src/components/arrow-btn/arrow-btn.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrow_btn_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow-btn.css */ "./src/components/arrow-btn/arrow-btn.css");
/* harmony import */ var _arrow_btn_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arrow_btn_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/arrow-inpt/arrow-inpt.css":
/*!**************************************************!*\
  !*** ./src/components/arrow-inpt/arrow-inpt.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/arrow-inpt/arrow-inpt.js":
/*!*************************************************!*\
  !*** ./src/components/arrow-inpt/arrow-inpt.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrow_inpt_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow-inpt.css */ "./src/components/arrow-inpt/arrow-inpt.css");
/* harmony import */ var _arrow_inpt_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arrow_inpt_css__WEBPACK_IMPORTED_MODULE_0__);

var arrowInpts = document.getElementsByClassName('arrow-inpt');

var _loop = function _loop(i) {
  var inpt = arrowInpts[i].getElementsByClassName('arrow-inpt__field')[0];

  inpt.onfocus = function () {
    arrowInpts[i].classList.add('arrow-inpt_focus_on');
  };

  inpt.onblur = function () {
    arrowInpts[i].classList.remove('arrow-inpt_focus_on');
  };
};

for (var i = 0; i < arrowInpts.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/button/_size_l/button_size_l.css":
/*!*********************************************************!*\
  !*** ./src/components/button/_size_l/button_size_l.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_size_m/button_size_m.css":
/*!*********************************************************!*\
  !*** ./src/components/button/_size_m/button_size_m.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_size_s/button_size_s.css":
/*!*********************************************************!*\
  !*** ./src/components/button/_size_s/button_size_s.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_theme_click/button_theme_click.css":
/*!*******************************************************************!*\
  !*** ./src/components/button/_theme_click/button_theme_click.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_theme_click/button_theme_click.js":
/*!******************************************************************!*\
  !*** ./src/components/button/_theme_click/button_theme_click.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var clickButtons = document.getElementsByClassName('button_theme_click');

function hangClickButtonsHandler() {
  var _loop = function _loop(i) {
    clickButtons[i].addEventListener('click', function () {
      clickButtons[i].classList.add('button_theme_click_clicked');
      setTimeout(function () {
        return clickButtons[i].classList.remove('button_theme_click_clicked');
      }, 290);
    });
  };

  for (var i = 0; i < clickButtons.length; i++) {
    _loop(i);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hangClickButtonsHandler);

/***/ }),

/***/ "./src/components/button/_theme_enter/button_theme_enter.css":
/*!*******************************************************************!*\
  !*** ./src/components/button/_theme_enter/button_theme_enter.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_theme_enter/button_theme_enter.js":
/*!******************************************************************!*\
  !*** ./src/components/button/_theme_enter/button_theme_enter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var enterButtons = document.getElementsByClassName('button_theme_enter');

var _loop = function _loop(i) {
  enterButtons[i].onclick = function () {
    enterButtons[i].classList.add('button_theme_enter_clicked');
    enterButtons[i].getElementsByTagName('a')[0].click();
  };
};

for (var i = 0; i < enterButtons.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/button/_theme_registration/button_theme_registration.css":
/*!*********************************************************************************!*\
  !*** ./src/components/button/_theme_registration/button_theme_registration.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/_theme_registration/button_theme_registration.js":
/*!********************************************************************************!*\
  !*** ./src/components/button/_theme_registration/button_theme_registration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registrationButtons = document.getElementsByClassName('button_theme_registration');

var _loop = function _loop(i) {
  registrationButtons[i].onclick = function () {
    registrationButtons[i].classList.add('button_theme_registration_clicked');
    registrationButtons[i].getElementsByTagName('a')[0].click();
  };
};

for (var i = 0; i < registrationButtons.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_enter_button_theme_enter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_theme_enter/button_theme_enter.css */ "./src/components/button/_theme_enter/button_theme_enter.css");
/* harmony import */ var _theme_enter_button_theme_enter_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_enter_button_theme_enter_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_registration_button_theme_registration_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_theme_registration/button_theme_registration.css */ "./src/components/button/_theme_registration/button_theme_registration.css");
/* harmony import */ var _theme_registration_button_theme_registration_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_registration_button_theme_registration_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_click_button_theme_click_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_theme_click/button_theme_click.css */ "./src/components/button/_theme_click/button_theme_click.css");
/* harmony import */ var _theme_click_button_theme_click_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_click_button_theme_click_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _size_s_button_size_s_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_size_s/button_size_s.css */ "./src/components/button/_size_s/button_size_s.css");
/* harmony import */ var _size_s_button_size_s_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_size_s_button_size_s_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _size_m_button_size_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_size_m/button_size_m.css */ "./src/components/button/_size_m/button_size_m.css");
/* harmony import */ var _size_m_button_size_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_size_m_button_size_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _size_l_button_size_l_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_size_l/button_size_l.css */ "./src/components/button/_size_l/button_size_l.css");
/* harmony import */ var _size_l_button_size_l_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_size_l_button_size_l_css__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/components/calendar/calendar.css":
/*!**********************************************!*\
  !*** ./src/components/calendar/calendar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/calendar/calendar.js":
/*!*********************************************!*\
  !*** ./src/components/calendar/calendar.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.css */ "./src/components/calendar/calendar.css");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calendar_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_theme_click_button_theme_click_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/_theme_click/button_theme_click.js */ "./src/components/button/_theme_click/button_theme_click.js");


var calendars = document.getElementsByClassName('calendar');

var _loop = function _loop(i) {
  if (getComputedStyle(calendars[i]).display == 'none' || calendars[i].style.display == 'none') {
    calendars[i].style.display = 'block';
    calendars[i].style.position = 'absolute';
    calendars[i].style.zIndex = '-10000';
    calendars[i].style.color = 'transparent';
    calendars[i].style.backgroundColor = 'transparent';
    calendars[i].style.border = '0';
    calendars[i].style.outline = '0';
  }

  var altInput = document.createElement('input');
  altInput.type = 'hidden';
  altInput.className = 'calendar__altField';
  calendars[i].after(altInput);
  $(calendars[i]).datepicker({
    keyboardNav: false,
    multipleDatesSeparator: ' - ',
    //minDate: new Date(),
    altField: $(altInput),
    altFieldDateFormat: 'yyyy,m,d',
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    monthsField: 'months',
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    onShow: function onShow() {
      calendarChangeView(i);
    },
    onHide: function onHide(inst, animationCompleted) {
      if (animationCompleted) {
        var hideEvent = new Event("hide");
        calendars[i].dispatchEvent(hideEvent);
      }
    },
    onSelect: function onSelect(formattedDate, date, inst) {
      calendarChangeView(i);
      var event = new Event("input");
      calendars[i].dispatchEvent(event);
      event = new Event("change");
      calendars[i].dispatchEvent(event);
    }
  });
};

for (var i = 0; i < calendars.length; i++) {
  _loop(i);
}

function calendarChangeView(i) {
  var datepickers = document.getElementsByClassName('datepicker');
  var buttons = datepickers[i].getElementsByClassName('datepicker--buttons')[0];
  var datepicker = $(calendars[i]).datepicker().data('datepicker');
  buttons.innerHTML = '<div class="datepicker--button" data-action="clear"></div><button class="button button_theme_click calendar__refresh">Очистить</button><button class="button button_theme_click calendar__submit">Применить</button>';
  Object(_button_theme_click_button_theme_click_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  buttons.getElementsByClassName('calendar__refresh')[0].addEventListener('click', function () {
    var _this = this;

    setTimeout(function () {
      return _this.previousElementSibling.click();
    }, 290);
  });
  buttons.getElementsByClassName('calendar__submit')[0].addEventListener('click', function () {
    datepicker.hide();
  });
}

/***/ }),

/***/ "./src/components/carousel/_active/carousel__circle_active.css":
/*!*********************************************************************!*\
  !*** ./src/components/carousel/_active/carousel__circle_active.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/carousel/carousel.css":
/*!**********************************************!*\
  !*** ./src/components/carousel/carousel.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/carousel/carousel.js":
/*!*********************************************!*\
  !*** ./src/components/carousel/carousel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.css */ "./src/components/carousel/carousel.css");
/* harmony import */ var _carousel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carousel_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _active_carousel_circle_active_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_active/carousel__circle_active.css */ "./src/components/carousel/_active/carousel__circle_active.css");
/* harmony import */ var _active_carousel_circle_active_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_active_carousel_circle_active_css__WEBPACK_IMPORTED_MODULE_1__);


var carousels = document.getElementsByClassName('carousel');

for (var i = 0; i < carousels.length; i++) {
  var carouselArrowRightWrapper = carousels[i].getElementsByClassName('carousel__arrow-right-wrapper')[0],
      carouselArrowLeftWrapper = carousels[i].getElementsByClassName('carousel__arrow-left-wrapper')[0],
      carouselWindow = carousels[i].getElementsByClassName('carousel-window')[0];
}

/***/ }),

/***/ "./src/components/checkbox/checkbox.css":
/*!**********************************************!*\
  !*** ./src/components/checkbox/checkbox.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/checkbox/checkbox.js":
/*!*********************************************!*\
  !*** ./src/components/checkbox/checkbox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.css */ "./src/components/checkbox/checkbox.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkbox_css__WEBPACK_IMPORTED_MODULE_0__);


function hangCheckboxesHandler() {
  var checkboxes = document.getElementsByClassName('checkbox');

  var _loop = function _loop(i) {
    if (checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked) {
      checkboxes[i].classList.add('checkbox_checked');
    } else {
      checkboxes[i].classList.remove('checkbox_checked');
    }

    checkboxes[i].onclick = function () {
      if (checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked) {
        checkboxes[i].classList.add('checkbox_checked');
      } else {
        checkboxes[i].classList.remove('checkbox_checked');
      }

      checkboxes[i].getElementsByClassName('checkbox__hidden')[0].click();
      var event = new Event("change");
      checkboxes[i].dispatchEvent(event);
    };
  };

  for (var i = 0; i < checkboxes.length; i++) {
    _loop(i);
  }
}

hangCheckboxesHandler();
/* harmony default export */ __webpack_exports__["default"] = (hangCheckboxesHandler);

/***/ }),

/***/ "./src/components/comment/comment.css":
/*!********************************************!*\
  !*** ./src/components/comment/comment.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/comment/comment.js":
/*!*******************************************!*\
  !*** ./src/components/comment/comment.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.css */ "./src/components/comment/comment.css");
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_comment_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_murad_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/murad.png */ "./src/components/comment/images/murad.png");
/* harmony import */ var _images_murad_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_murad_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pat.png */ "./src/components/comment/images/pat.png");
/* harmony import */ var _images_pat_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pat_png__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/components/comment/images/murad.png":
/*!*************************************************!*\
  !*** ./src/components/comment/images/murad.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/murad.png";

/***/ }),

/***/ "./src/components/comment/images/pat.png":
/*!***********************************************!*\
  !*** ./src/components/comment/images/pat.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/pat.png";

/***/ }),

/***/ "./src/components/datefield/datefield.css":
/*!************************************************!*\
  !*** ./src/components/datefield/datefield.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/datefield/datefield.js":
/*!***********************************************!*\
  !*** ./src/components/datefield/datefield.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datefield_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datefield.css */ "./src/components/datefield/datefield.css");
/* harmony import */ var _datefield_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_datefield_css__WEBPACK_IMPORTED_MODULE_0__);

var dateFields = document.getElementsByClassName('datefield');

var _loop = function _loop(i) {
  var calendarInpt = dateFields[i].getElementsByClassName('datefield__calendar')[0];
  var datefieldArrow = dateFields[i].getElementsByClassName('datefield__arrow')[0];
  var datefieldValue = dateFields[i].getElementsByClassName('datefield__value')[0];
  var turner = 0;

  dateFields[i].onclick = function () {
    if (turner == 0) {
      calendarInpt.focus();
      turner = 1;
      datefieldArrow.innerHTML = 'keyboard_arrow_up';
    } else {
      calendarInpt.blur();
      turner = 0;
      datefieldArrow.innerHTML = 'keyboard_arrow_down';
    }
  };

  calendarInpt.addEventListener('hide', function () {
    turner = 0;
    datefieldArrow.innerHTML = 'keyboard_arrow_down';
  });

  calendarInpt.oninput = function () {
    datefieldValue.innerHTML = calendarInpt.value;
  };
};

for (var i = 0; i < dateFields.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/diagram/diagram.css":
/*!********************************************!*\
  !*** ./src/components/diagram/diagram.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/diagram/diagram.js":
/*!*******************************************!*\
  !*** ./src/components/diagram/diagram.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diagram_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagram.css */ "./src/components/diagram/diagram.css");
/* harmony import */ var _diagram_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_diagram_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/drop-dates/drop-dates.css":
/*!**************************************************!*\
  !*** ./src/components/drop-dates/drop-dates.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/drop-dates/drop-dates.js":
/*!*************************************************!*\
  !*** ./src/components/drop-dates/drop-dates.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drop_dates_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-dates.css */ "./src/components/drop-dates/drop-dates.css");
/* harmony import */ var _drop_dates_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drop_dates_css__WEBPACK_IMPORTED_MODULE_0__);

var dateDrops = document.getElementsByClassName('drop-dates');

var _loop = function _loop(i) {
  var dropDatesArrivalSwither = dateDrops[i].getElementsByClassName('drop-dates__arrival-switcher')[0];
  var dropDatesDepartureSwither = dateDrops[i].getElementsByClassName('drop-dates__departure-switcher')[0];
  var dropDatesArrivalValue = dateDrops[i].getElementsByClassName('drop-dates__arrival-value')[0];
  var dropDatesDepartureValue = dateDrops[i].getElementsByClassName('drop-dates__departure-value')[0];
  var calendarInpt = dateDrops[i].getElementsByClassName('drop-dates__calendar')[0];
  var dropDatesArrows = dateDrops[i].getElementsByClassName('drop-dates__arrow');
  var datepicker = $(calendarInpt).datepicker().data('datepicker');
  var turner = 0;

  var switchCalendar = function switchCalendar() {
    if (turner == 0) {
      calendarInpt.focus();
      turner = 1;

      for (var j = 0; j < dropDatesArrows.length; j++) {
        dropDatesArrows[j].innerHTML = 'keyboard_arrow_up';
      }
    } else {
      calendarInpt.blur();
      turner = 0;

      for (var _j = 0; _j < dropDatesArrows.length; _j++) {
        dropDatesArrows[_j].innerHTML = 'keyboard_arrow_down';
      }
    }
  };

  dropDatesArrivalSwither.onclick = switchCalendar;
  dropDatesDepartureSwither.onclick = switchCalendar;
  calendarInpt.addEventListener('hide', function () {
    turner = 0;

    for (var j = 0; j < dropDatesArrows.length; j++) {
      dropDatesArrows[j].innerHTML = 'keyboard_arrow_down';
    }
  });

  calendarInpt.oninput = function () {
    var dates = calendarInpt.value.split('-');

    if (calendarInpt.value != '' && dates.length == 1) {
      dropDatesArrivalValue.innerHTML = dates[0];
      dropDatesDepartureValue.innerHTML = 'ДД.ММ.ГГГГ';
    } else if (dates.length > 1) {
      dropDatesArrivalValue.innerHTML = dates[0];
      dropDatesDepartureValue.innerHTML = dates[1];
    } else {
      dropDatesArrivalValue.innerHTML = 'ДД.ММ.ГГГГ';
      dropDatesDepartureValue.innerHTML = 'ДД.ММ.ГГГГ';
    }

    var event = new Event("change");
    dateDrops[i].dispatchEvent(event);
  };
};

for (var i = 0; i < dateDrops.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/dropdown/dropdown.css":
/*!**********************************************!*\
  !*** ./src/components/dropdown/dropdown.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.css */ "./src/components/dropdown/dropdown.css");
/* harmony import */ var _dropdown_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_0__);

var drops = document.getElementsByClassName('dropdown');

var _loop = function _loop(i) {
  var dropSwitcher = drops[i].getElementsByClassName('dropdown__switcher')[0],
      dropArrow = drops[i].getElementsByClassName('dropdown__arrow')[0],
      dropHandler = drops[i].getElementsByClassName('dropdown__handler')[0],
      dropValue = drops[i].getElementsByClassName('dropdown__value')[0],
      dropInputValues = drops[i].getElementsByClassName('dropdown__input-value'),
      dropPluses = drops[i].getElementsByClassName('dropdown__plus'),
      dropMinuses = drops[i].getElementsByClassName('dropdown__minus');
  var dropRefresh = drops[i].getElementsByClassName('button')[0];
  var dropSubmit = drops[i].getElementsByClassName('button')[1];
  var dropTurner = 0,
      dropHandlerValuesArray = [];

  dropSwitcher.onclick = function () {
    if (dropTurner == 0) {
      drops[i].classList.add('dropdown_expanded');
      dropArrow.innerHTML = 'keyboard_arrow_up';
      dropTurner = 1;
    } else {
      drops[i].classList.remove('dropdown_expanded');
      dropArrow.innerHTML = 'keyboard_arrow_down';
      dropTurner = 0;
    }
  };

  for (var j = 0; j < dropInputValues.length; j++) {
    dropHandlerValuesArray.push(parseInt(dropInputValues[j].innerHTML));
    dropHandler.value = JSON.stringify(dropHandlerValuesArray);
  }

  var _loop2 = function _loop2(_j) {
    dropPluses[_j].onclick = function () {
      dropHandlerValuesArray = JSON.parse(dropHandler.value);
      var result = parseInt(dropInputValues[_j].innerHTML) + 1;
      dropInputValues[_j].innerHTML = result;
      dropHandlerValuesArray[_j] = result;
      dropHandler.value = JSON.stringify(dropHandlerValuesArray);

      dropMinuses[_j].classList.remove('dropdown__minus_inactive');

      if (dropHandler.value != '[0,0,0]') {
        drops[i].classList.add('dropdown__refresh_active');
      } else {
        drops[i].classList.remove('dropdown__refresh_active');
      }

      var event = new Event("change");
      drops[i].dispatchEvent(event);
    };
  };

  for (var _j = 0; _j < dropPluses.length; _j++) {
    _loop2(_j);
  }

  var _loop3 = function _loop3(_j2) {
    dropMinuses[_j2].onclick = function () {
      dropHandlerValuesArray = JSON.parse(dropHandler.value);
      var result = parseInt(dropInputValues[_j2].innerHTML) > 0 ? parseInt(dropInputValues[_j2].innerHTML) - 1 : 0;
      dropInputValues[_j2].innerHTML = result;
      dropHandlerValuesArray[_j2] = result;
      dropHandler.value = JSON.stringify(dropHandlerValuesArray);

      if (result == 0) {
        this.classList.add('dropdown__minus_inactive');
      }

      if (dropHandler.value != '[0,0,0]') {
        drops[i].classList.add('dropdown__refresh_active');
      } else {
        drops[i].classList.remove('dropdown__refresh_active');
      }

      var event = new Event("change");
      drops[i].dispatchEvent(event);
    };
  };

  for (var _j2 = 0; _j2 < dropMinuses.length; _j2++) {
    _loop3(_j2);
  }

  dropRefresh.onclick = function () {
    dropHandler.value = '[0,0,0]';

    for (var _j3 = 0; _j3 < dropInputValues.length; _j3++) {
      dropInputValues[_j3].innerHTML = '0';
    }

    drops[i].classList.remove('dropdown__refresh_active');
    var event = new Event("change");
    drops[i].dispatchEvent(event);
  };

  dropSubmit.onclick = function () {
    drops[i].classList.remove('dropdown_expanded');
    dropArrow.innerHTML = 'keyboard_arrow_down';
    dropTurner = 0;
  };
};

for (var i = 0; i < drops.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/enter-card/enter-card.css":
/*!**************************************************!*\
  !*** ./src/components/enter-card/enter-card.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/enter-card/enter-card.js":
/*!*************************************************!*\
  !*** ./src/components/enter-card/enter-card.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enter_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter-card.css */ "./src/components/enter-card/enter-card.css");
/* harmony import */ var _enter_card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_enter_card_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.css":
/*!*************************************************************************************!*\
  !*** ./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.js":
/*!************************************************************************************!*\
  !*** ./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_expandable_checkbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter__expandable-checkbox.css */ "./src/components/filter/__expandable-checkbox/filter__expandable-checkbox.css");
/* harmony import */ var _filter_expandable_checkbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_filter_expandable_checkbox_css__WEBPACK_IMPORTED_MODULE_0__);

var filterExpandableCheckboxes = document.getElementsByClassName('filter__expandable-checkbox');

var _loop = function _loop(i) {
  var filterExpandableCheckboxSwitcher = filterExpandableCheckboxes[i].getElementsByClassName('filter__expandable-checkbox-switcher')[0];
  var filterExpandableCheckboxArrow = filterExpandableCheckboxes[i].getElementsByClassName('filter__expandable-checkbox-arrow')[0];
  var filterExpandableCheckboxSwitcherTurner = 0;

  filterExpandableCheckboxSwitcher.onclick = function () {
    if (filterExpandableCheckboxSwitcherTurner == 0) {
      filterExpandableCheckboxes[i].classList.add('filter__expandable-checkbox_expanded');
      filterExpandableCheckboxArrow.innerHTML = 'keyboard_arrow_up';
      filterExpandableCheckboxSwitcherTurner = 1;
    } else {
      filterExpandableCheckboxes[i].classList.remove('filter__expandable-checkbox_expanded');
      filterExpandableCheckboxArrow.innerHTML = 'keyboard_arrow_down';
      filterExpandableCheckboxSwitcherTurner = 0;
    }
  };
};

for (var i = 0; i < filterExpandableCheckboxes.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/filter/__range/filter__range.css":
/*!*********************************************************!*\
  !*** ./src/components/filter/__range/filter__range.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/filter/__range/filter__range.js":
/*!********************************************************!*\
  !*** ./src/components/filter/__range/filter__range.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_range_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter__range.css */ "./src/components/filter/__range/filter__range.css");
/* harmony import */ var _filter_range_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_filter_range_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/filter/filter.css":
/*!******************************************!*\
  !*** ./src/components/filter/filter.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/filter/filter.js":
/*!*****************************************!*\
  !*** ./src/components/filter/filter.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.css */ "./src/components/filter/filter.css");
/* harmony import */ var _filter_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_filter_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_search_room_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/search-room/data.json */ "./src/pages/search-room/data.json");
var _pages_search_room_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../pages/search-room/data.json */ "./src/pages/search-room/data.json", 1);
/* harmony import */ var _images_room350_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/room350.jpg */ "./src/components/filter/images/room350.jpg");
/* harmony import */ var _images_room350_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_room350_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_room352_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/room352.jpg */ "./src/components/filter/images/room352.jpg");
/* harmony import */ var _images_room352_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_room352_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_room444_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/room444.jpg */ "./src/components/filter/images/room444.jpg");
/* harmony import */ var _images_room444_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_room444_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_room450_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/room450.jpg */ "./src/components/filter/images/room450.jpg");
/* harmony import */ var _images_room450_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_room450_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_room666_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/room666.jpg */ "./src/components/filter/images/room666.jpg");
/* harmony import */ var _images_room666_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_room666_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_room678_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/room678.jpg */ "./src/components/filter/images/room678.jpg");
/* harmony import */ var _images_room678_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_room678_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_room740_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/room740.jpg */ "./src/components/filter/images/room740.jpg");
/* harmony import */ var _images_room740_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_room740_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_room840_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/room840.jpg */ "./src/components/filter/images/room840.jpg");
/* harmony import */ var _images_room840_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_room840_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_room856_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/room856.jpg */ "./src/components/filter/images/room856.jpg");
/* harmony import */ var _images_room856_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_room856_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_room888_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/room888.jpg */ "./src/components/filter/images/room888.jpg");
/* harmony import */ var _images_room888_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_room888_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_room980_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/room980.jpg */ "./src/components/filter/images/room980.jpg");
/* harmony import */ var _images_room980_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_room980_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_room982_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/room982.jpg */ "./src/components/filter/images/room982.jpg");
/* harmony import */ var _images_room982_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_room982_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_sub1Room888_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/sub1Room888.jpg */ "./src/components/filter/images/sub1Room888.jpg");
/* harmony import */ var _images_sub1Room888_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_sub1Room888_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_sub2Room888_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/sub2Room888.jpg */ "./src/components/filter/images/sub2Room888.jpg");
/* harmony import */ var _images_sub2Room888_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_sub2Room888_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pagination/pagination.js */ "./src/components/pagination/pagination.js");
/* harmony import */ var _checkbox_checkbox_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../checkbox/checkbox.js */ "./src/components/checkbox/checkbox.js");
/* harmony import */ var _rich_checkbox_rich_checkbox_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rich-checkbox/rich-checkbox.js */ "./src/components/rich-checkbox/rich-checkbox.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















var filters = document.getElementsByClassName('filter');
var rooms = _pages_search_room_data_json__WEBPACK_IMPORTED_MODULE_1__.rooms.slice();

var _loop = function _loop(i) {
  console.log(localStorage.toxin);
  var localData = getDataFromLocalStorage('toxin');
  var screen = filters[i].getElementsByClassName('filter__result')[0];
  var pagination = filters[i].getElementsByClassName('pagination')[0];
  var roomsOnPage = 12;
  var pagesAmount = Math.ceil(rooms.length / roomsOnPage);
  var filterSmoke = filters[i].getElementsByClassName('filter__smoke')[0];
  var filterPets = filters[i].getElementsByClassName('filter__pets')[0];
  var filterGuests = filters[i].getElementsByClassName('filter__guests')[0];
  var filterWideCorridor = filters[i].getElementsByClassName('filter__wide-corridor')[0];
  var filterSmokeCheckBx = filterSmoke.getElementsByClassName('checkbox__hidden')[0];
  var filterPetsCheckBx = filterPets.getElementsByClassName('checkbox__hidden')[0];
  var filterGuestsCheckBx = filterGuests.getElementsByClassName('checkbox__hidden')[0];
  var filterWideCorridorCheckBx = filterWideCorridor.getElementsByClassName('rich-checkbox__input')[0];
  var dropGuests = filters[i].getElementsByClassName('drop-guests')[0];
  var dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0];
  var dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0];
  var dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus');
  var dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus');
  var dropConveniences = filters[i].getElementsByClassName('drop-conveniences')[0];
  var dropConveniencesHandler = dropConveniences.getElementsByClassName('dropdown__handler')[0];
  var dropConveniencesValue = dropConveniences.getElementsByClassName('dropdown__value')[0];
  var dropConveniencesPluses = dropConveniences.getElementsByClassName('dropdown__plus');
  var dropConveniencesMinuses = dropConveniences.getElementsByClassName('dropdown__minus');
  var calendar = filters[i].getElementsByClassName('calendar')[0];
  var datepicker = $(calendar).datepicker().data('datepicker');
  var dropdownValues = filters[i].getElementsByClassName('drop-guests')[0].getElementsByClassName('dropdown__input-value');
  var calendarAltField = filters[i].getElementsByClassName('calendar__altField')[0];
  var local = localData ? localData : {
    "startDate": "",
    "endDate": "",
    "guestsAmount": "[0,0,0]"
  };
  var checkBoxes = filters[i].getElementsByClassName('checkbox__hidden');
  var richCheckBoxes = filters[i].getElementsByClassName('rich-checkbox__input');

  var createLocalData = function createLocalData(storageName) {
    local.startDate = calendarAltField.value.split('-')[0];
    local.endDate = calendarAltField.value.split('-')[1];
    local.guestsAmount = dropGuestsHandler.value;
    localStorage[storageName] = JSON.stringify(local);
  };

  var showPage = function showPage() {
    var pageNum = +pagination.getElementsByClassName('pagination__page_active')[0].innerHTML;
    var roomsOnPage = 12;
    var start = (pageNum - 1) * roomsOnPage;
    var end = start + roomsOnPage;
    var notes = rooms.slice(start, end);
    screen.innerHTML = '';

    var _iterator = _createForOfIteratorHelper(notes),
        _step;

    try {
      var _loop2 = function _loop2() {
        var note = _step.value;
        var div = document.createElement('div');
        var divHtml = '';
        div.className = 'room';
        var luxury = note.luxury ? 'люкс' : '';
        divHtml = '<div class="carousel">' + '<div class="carousel__window">';

        for (var j = 0; j < note.images.length; j++) {
          divHtml += '<img class="carousel__img" src="' + note.images[j] + '">';
        }

        divHtml += '<a href="room-details.html">' + '</a>' + '</div>' + '<div class="carousel__buttons">' + '<div class="carousel__switcher">';

        for (var _j = 0; _j < note.images.length; _j++) {
          if (_j != 0) {
            divHtml += '<span class="carousel__circle"></span>';
          } else {
            divHtml += '<span class="carousel__circle carousel__circle_active"></span>';
          }
        }

        divHtml += '</div>' + '<div class="carousel__arrow-right-wrapper"><span class="carousel__arrow-right">keyboard_arrow_left</span></div>' + '<div class="carousel__arrow-left-wrapper"><span class="carousel__arrow-left">keyboard_arrow_left</span></div>' + '</div>' + '</div>' + '<div class="room__about-room">' + '<div class="room__info"><span class="room__badge-number">№ </span><span class="room__room-number">' + note.number + '</span><span class="room__room-category"> ' + luxury + '</span>' + '</div>' + '<div class="room__money-for-room"><span class="room__money">' + parseFloat(note.price).toLocaleString('ru-RU') + '</span>₽<span class="room__time"> в сутки</span></div>' + '</div>' + '<div class="room__rate-wrapper">' + '<div class="rate rate_star_' + note.stars + '">' + '<span class="rate__star1"></span>' + '<span class="rate__star2"></span>' + '<span class="rate__star3"></span>' + '<span class="rate__star4"></span>' + '<span class="rate__star5"></span></div>' + '<div class="room__comments-indicator"><span class="room__comments-amount">' + note.reviews + '</span><span> Отзывов</span></div>' + '</div>';
        div.innerHTML = divHtml;
        screen.append(div);

        div.getElementsByClassName('carousel__window')[0].onclick = function () {
          var checkBxs = [];
          var richCheckBxs = [];

          for (var key in note) {
            local[key] = note[key];
          }

          for (var _j2 = 0; _j2 < checkBoxes.length; _j2++) {
            checkBxs.push(checkBoxes[_j2].checked);
          }

          for (var _j3 = 0; _j3 < richCheckBoxes.length; _j3++) {
            richCheckBxs.push(richCheckBoxes[_j3].checked);
          }

          local.checkBxs = checkBxs;
          local.richCheckBxs = richCheckBxs;
          createLocalData('toxin');
          this.getElementsByTagName('a')[0].click();
        };
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setCarouselsHandler();
  };

  var setPagination = function setPagination(pagesAmount) {
    var paginationPages = pagination.getElementsByClassName('pagination__pages')[0];

    if (pagesAmount > 4) {
      paginationPages.innerHTML = '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' + '<span class="pagination__page pagination__page_active">1</span>' + '<span class="pagination__page">2</span>' + '<span class="pagination__page">3</span>' + '<span class="pagination__ellipsis">...</span>' + '<span class="pagination__page-last">' + pagesAmount + '</span>' + '<span class="pagination__arrow-forward">arrow_forward</span>';
    } else if (pagesAmount > 1) {
      paginationPages.innerHTML = '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' + '<span class="pagination__page pagination__page_active">1</span>';
      var j = 1;

      while (j < pagesAmount - 1) {
        paginationPages.innerHTML += '<span class="pagination__page">' + ++j + '</span>';
      }

      paginationPages.innerHTML += '<span class="pagination__page-last">' + pagesAmount + '</span>' + '<span class="pagination__arrow-forward">arrow_forward</span>';
    } else {
      paginationPages.innerHTML = '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' + '<span class="pagination__page-last pagination__page_active">1</span>' + '<span class="pagination__arrow-forward pagination__arrow_hidden">arrow_forward</span>';
    }

    Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
  };

  var setCarouselsHandler = function setCarouselsHandler() {
    var carousels = filters[i].getElementsByClassName('carousel');

    var _loop3 = function _loop3(j) {
      var carouselArrowRightWrapper = carousels[j].getElementsByClassName('carousel__arrow-right-wrapper')[0];
      var carouselArrowLeftWrapper = carousels[j].getElementsByClassName('carousel__arrow-left-wrapper')[0];
      var carouselWindow = carousels[j].getElementsByClassName('carousel__window')[0];
      var carouselImg = carousels[j].getElementsByClassName('carousel__img')[0];
      var carouselCircles = carousels[j].getElementsByClassName('carousel__circle');
      var carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
      var carouselCoef = 0;

      carouselArrowRightWrapper.onclick = function () {
        if (carouselCoef < carousels[j].getElementsByClassName('carousel__img').length - 1) {
          carouselWindow.style.marginLeft = -1 * parseFloat(getComputedStyle(carouselImg).width) * ++carouselCoef + "px";
          carouselCircleActive.classList.remove('carousel__circle_active');
          carouselCircles[carouselCoef].classList.add('carousel__circle_active');
          carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
        }
      };

      carouselArrowLeftWrapper.onclick = function () {
        if (carouselCoef > 0) {
          carouselWindow.style.marginLeft = -1 * parseFloat(getComputedStyle(carouselImg).width) * --carouselCoef + "px";
          carouselCircleActive.classList.remove('carousel__circle_active');
          carouselCircles[carouselCoef].classList.add('carousel__circle_active');
          carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
        }
      };

      var _loop4 = function _loop4(n) {
        carouselCircles[n].onclick = function () {
          carouselCoef = n;
          carouselWindow.style.marginLeft = -1 * parseFloat(getComputedStyle(carouselImg).width) * carouselCoef + "px";
          carouselCircleActive.classList.remove('carousel__circle_active');
          carouselCircles[n].classList.add('carousel__circle_active');
          carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
        };
      };

      for (var n = 0; n < carouselCircles.length; n++) {
        _loop4(n);
      }
    };

    for (var j = 0; j < carousels.length; j++) {
      _loop3(j);
    }
  };

  var setFilters = function setFilters(smoke, pets, guests, wideCorridor, bedRooms, beds, bathRooms) {
    rooms = _pages_search_room_data_json__WEBPACK_IMPORTED_MODULE_1__.rooms.slice();

    if (smoke) {
      for (var j = 0; j < rooms.length; j++) {
        if (!rooms[j].smoke) {
          rooms.splice(j, 1);
          j = -1;
        }
      }
    }

    if (pets) {
      for (var _j4 = 0; _j4 < rooms.length; _j4++) {
        if (!rooms[_j4].pets) {
          rooms.splice(_j4, 1);
          _j4 = -1;
        }
      }
    }

    if (guests) {
      for (var _j5 = 0; _j5 < rooms.length; _j5++) {
        if (!rooms[_j5].guests) {
          rooms.splice(_j5, 1);
          _j5 = -1;
        }
      }
    }

    if (wideCorridor) {
      for (var _j6 = 0; _j6 < rooms.length; _j6++) {
        if (!rooms[_j6].wideCorridor) {
          rooms.splice(_j6, 1);
          _j6 = -1;
        }
      }
    }

    for (var _j7 = 0; _j7 < rooms.length; _j7++) {
      if (rooms[_j7].bedRooms < bedRooms) {
        rooms.splice(_j7, 1);
        _j7 = -1;
      }
    }

    for (var _j8 = 0; _j8 < rooms.length; _j8++) {
      if (rooms[_j8].beds < beds) {
        rooms.splice(_j8, 1);
        _j8 = -1;
      }
    }

    for (var _j9 = 0; _j9 < rooms.length; _j9++) {
      if (rooms[_j9].bathRooms < bathRooms) {
        rooms.splice(_j9, 1);
        _j9 = -1;
      }
    }

    pagesAmount = Math.ceil(rooms.length / roomsOnPage);
    setPagination(pagesAmount);
    Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
    showPage();
  };

  var showValue = function showValue() {
    var adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1];
    var babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

    if (adultsAmount > 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else if (adultsAmount > 0 && babiesAmount == 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
    } else if (adultsAmount == 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else {
      dropGuestsValue.innerHTML = 'Сколько гостей?';
    }
  };

  window.onbeforeunload = function (e) {
    localStorage.toxin = JSON.stringify(local);
  };

  if (localData) {
    if (localData.startDate && !localData.endDate) {
      datepicker.selectDate(new Date(localData.startDate));
    } else if (localData.startDate && localData.endDate) {
      datepicker.selectDate([new Date(localData.startDate), new Date(localData.endDate)]);
    }

    for (var j = 0; j < dropdownValues.length; j++) {
      dropdownValues[j].innerHTML = JSON.parse(localData.guestsAmount)[j];
    }

    for (var _j10 = 0; _j10 < checkBoxes.length; _j10++) {
      if (localData.checkBxs) {
        checkBoxes[_j10].checked = localData.checkBxs[_j10];
      }
    }

    for (var _j11 = 0; _j11 < richCheckBoxes.length; _j11++) {
      if (localData.richCheckBxs) {
        richCheckBoxes[_j11].checked = localData.richCheckBxs[_j11];
      }
    }

    Object(_checkbox_checkbox_js__WEBPACK_IMPORTED_MODULE_17__["default"])();
    Object(_rich_checkbox_rich_checkbox_js__WEBPACK_IMPORTED_MODULE_18__["default"])();
    dropGuestsHandler.value = localData.guestsAmount;
    showValue();
  }

  setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  pagination.onchange = showPage;

  filterSmoke.onchange = function () {
    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  };

  filterPets.onchange = function () {
    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  };

  filterGuests.onchange = function () {
    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  };

  filterWideCorridor.onchange = function () {
    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  };

  dropGuests.onchange = showValue;

  dropConveniences.onchange = function () {
    var bedRoomsAmount = JSON.parse(dropConveniencesHandler.value)[0],
        bedsAmount = JSON.parse(dropConveniencesHandler.value)[1],
        bathRoomsAmount = JSON.parse(dropConveniencesHandler.value)[2];
    var bedRoomsValue = bedRoomsAmount > 0 ? bedRoomsAmount + ' ' + returnWordSuffix(bedRoomsAmount, 'спальня', 'спальни', 'спален') : '';
    var bedsValue = bedsAmount > 0 ? bedsAmount + ' ' + returnWordSuffix(bedsAmount, 'кровать', 'кровати', 'кроватей') : '';
    var bathRoomsValue = bathRoomsAmount > 0 ? bathRoomsAmount + ' ' + returnWordSuffix(bathRoomsAmount, 'ванная комната', 'ванных комнаты', 'ванных комнат') : '';

    if (bedRoomsValue != '' && (bedsValue != '' || bathRoomsValue != '')) {
      bedRoomsValue += ', ';
    }

    if (bedsValue != '' && bathRoomsValue != '') {
      bedsValue += ', ';
    }

    dropConveniencesValue.innerHTML = bedRoomsValue + bedsValue + bathRoomsValue != '' ? bedRoomsValue + bedsValue + bathRoomsValue : 'Какие удобства?';
    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
  };
};

for (var i = 0; i < filters.length; i++) {
  _loop(i);
}

function getDataFromLocalStorage(localStorageKey) {
  var result = null;

  if (localStorage[localStorageKey]) {
    result = JSON.parse(localStorage[localStorageKey]);
    localStorage.removeItem(localStorageKey);
  }

  return result;
}

function returnWordSuffix(amount, one, two, twelve) {
  var string = twelve;

  if (amount < 11 || amount > 20) {
    switch (amount.toString()[amount.toString().length - 1]) {
      case '1':
        string = one;
        break;

      case '2':
        string = two;
        break;

      case '3':
        string = two;
        break;

      case '4':
        string = two;
        break;
    }
  } else {
    string = twelve;
  }

  return string;
}

/***/ }),

/***/ "./src/components/filter/images/room350.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room350.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room350.jpg";

/***/ }),

/***/ "./src/components/filter/images/room352.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room352.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room352.jpg";

/***/ }),

/***/ "./src/components/filter/images/room444.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room444.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room444.jpg";

/***/ }),

/***/ "./src/components/filter/images/room450.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room450.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room450.jpg";

/***/ }),

/***/ "./src/components/filter/images/room666.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room666.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room666.jpg";

/***/ }),

/***/ "./src/components/filter/images/room678.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room678.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room678.jpg";

/***/ }),

/***/ "./src/components/filter/images/room740.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room740.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room740.jpg";

/***/ }),

/***/ "./src/components/filter/images/room840.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room840.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room840.jpg";

/***/ }),

/***/ "./src/components/filter/images/room856.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room856.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room856.jpg";

/***/ }),

/***/ "./src/components/filter/images/room888.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room888.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room888.jpg";

/***/ }),

/***/ "./src/components/filter/images/room980.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room980.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room980.jpg";

/***/ }),

/***/ "./src/components/filter/images/room982.jpg":
/*!**************************************************!*\
  !*** ./src/components/filter/images/room982.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/room982.jpg";

/***/ }),

/***/ "./src/components/filter/images/sub1Room888.jpg":
/*!******************************************************!*\
  !*** ./src/components/filter/images/sub1Room888.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sub1Room888.jpg";

/***/ }),

/***/ "./src/components/filter/images/sub2Room888.jpg":
/*!******************************************************!*\
  !*** ./src/components/filter/images/sub2Room888.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sub2Room888.jpg";

/***/ }),

/***/ "./src/components/footer/__icons/awesome-icons.css":
/*!*********************************************************!*\
  !*** ./src/components/footer/__icons/awesome-icons.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/footer/__icons/footer__icons.css":
/*!*********************************************************!*\
  !*** ./src/components/footer/__icons/footer__icons.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_awesome_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__icons/awesome-icons.css */ "./src/components/footer/__icons/awesome-icons.css");
/* harmony import */ var _icons_awesome_icons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_awesome_icons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_footer_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__icons/footer__icons.css */ "./src/components/footer/__icons/footer__icons.css");
/* harmony import */ var _icons_footer_icons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_footer_icons_css__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/info-card/__calculations/info-card__calculations.css":
/*!*****************************************************************************!*\
  !*** ./src/components/info-card/__calculations/info-card__calculations.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/info-card/__calculations/info-card__calculations.js":
/*!****************************************************************************!*\
  !*** ./src/components/info-card/__calculations/info-card__calculations.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_card_calculations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-card__calculations.css */ "./src/components/info-card/__calculations/info-card__calculations.css");
/* harmony import */ var _info_card_calculations_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_info_card_calculations_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/room-details/room-details.js */ "./src/pages/room-details/room-details.js");


var infoCards = document.getElementsByClassName('info-card');

var _loop = function _loop(i) {
  var infoCardCalculations = infoCards[i].getElementsByClassName('info-card__calculations')[0];
  var infoCardAmountOfDays = infoCards[i].getElementsByClassName('info-card__amount-of-days')[0];
  var infoCardMoneyResult = infoCards[i].getElementsByClassName('info-card__money-result')[0];
  var infoCardTotal = infoCards[i].getElementsByClassName('info-card__total')[0];
  var infoCardMoney = infoCardCalculations.getElementsByClassName('info-card__money')[0];
  var infoCardDiscountResult = infoCardCalculations.getElementsByClassName('info-card__discount-result');
  var infoCardDiscount = infoCardCalculations.getElementsByClassName('info-card__discount')[0];
  var dateDrops = infoCards[i].getElementsByClassName('drop-dates')[0];
  var calendarAltField = infoCards[i].getElementsByClassName('calendar__altField')[0];

  var calculatePrice = function calculatePrice(startDate, endDate) {
    days = startDate && endDate ? Math.ceil(new Date(endDate) - new Date(startDate)) / 86400000 : 1;
    priceOnDays = _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].price * days;
    infoCardAmountOfDays.innerHTML = days;
    infoCardMoneyResult.innerHTML = priceOnDays.toLocaleString('ru-RU');
    infoCardTotal.innerHTML = (_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].price * days - infoCardDiscount.innerHTML + +infoCardDiscountResult[0].innerHTML + +infoCardDiscountResult[1].innerHTML).toLocaleString('ru-RU');
  };

  var days = 0;
  var priceOnDays = 0;

  dateDrops.onchange = function () {
    calculatePrice(calendarAltField.value.split('-')[0], calendarAltField.value.split('-')[1]);
  };

  if (_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    calculatePrice(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].startDate, _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].endDate);
  }
};

for (var i = 0; i < infoCards.length; i++) {
  _loop(i);
}

function getDataFromLocalStorage(localStorageKey) {
  var result = null;

  if (localStorage[localStorageKey]) {
    result = JSON.parse(localStorage[localStorageKey]);
    localStorage.removeItem(localStorageKey);
  }

  return result;
}

/***/ }),

/***/ "./src/components/info-card/info-card.css":
/*!************************************************!*\
  !*** ./src/components/info-card/info-card.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/info-card/info-card.js":
/*!***********************************************!*\
  !*** ./src/components/info-card/info-card.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-card.css */ "./src/components/info-card/info-card.css");
/* harmony import */ var _info_card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_info_card_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/room-details/room-details.js */ "./src/pages/room-details/room-details.js");


var infoCards = document.getElementsByClassName('info-card');

var _loop = function _loop(i) {
  var calendar = infoCards[i].getElementsByClassName('calendar')[0];
  var datepicker = $(calendar).datepicker().data('datepicker');
  var dropdownValues = infoCards[i].getElementsByClassName('drop-guests')[0].getElementsByClassName('dropdown__input-value');
  var dropGuests = infoCards[i].getElementsByClassName('drop-guests')[0];
  var dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0];
  var dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0];
  var dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus');
  var dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus');
  var infoCardRoomNumber = infoCards[i].getElementsByClassName('info-card__room-number')[0];
  var infoCardRoomCategory = infoCards[i].getElementsByClassName('info-card__room-category')[0];
  var infoCardMoney = infoCards[i].getElementsByClassName('info-card__money');

  var showValue = function showValue() {
    var adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1];
    var babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

    if (adultsAmount > 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else if (adultsAmount > 0 && babiesAmount == 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
    } else if (adultsAmount == 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else {
      dropGuestsValue.innerHTML = 'Сколько гостей?';
    }
  };

  if (_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].startDate && !_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].endDate) {
      datepicker.selectDate(new Date(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].startDate));
    } else if (_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].startDate && _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].endDate) {
      datepicker.selectDate([new Date(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].startDate), new Date(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].endDate)]);
    }

    for (var _i = 0; _i < dropdownValues.length; _i++) {
      dropdownValues[_i].innerHTML = JSON.parse(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].guestsAmount)[_i];
    }

    infoCardRoomNumber.innerHTML = _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].number;
    infoCardRoomCategory.innerHTML = _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].luxury ? 'люкс' : '';

    for (var _i2 = 0; _i2 < infoCardMoney.length; _i2++) {
      infoCardMoney[_i2].innerHTML = parseFloat(_pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].price).toLocaleString('ru-RU');
    }

    dropGuestsHandler.value = _pages_room_details_room_details_js__WEBPACK_IMPORTED_MODULE_1__["default"].guestsAmount;
    showValue();
  }

  dropGuests.onchange = showValue;
};

for (var i = 0; i < infoCards.length; i++) {
  _loop(i);
}

function getDataFromLocalStorage(localStorageKey) {
  var result = null;

  if (localStorage[localStorageKey]) {
    result = JSON.parse(localStorage[localStorageKey]);
  }

  return result;
}

function returnWordSuffix(amount, one, two, twelve) {
  var string = twelve;

  if (amount < 11 || amount > 20) {
    switch (amount.toString()[amount.toString().length - 1]) {
      case '1':
        string = one;
        break;

      case '2':
        string = two;
        break;

      case '3':
        string = two;
        break;

      case '4':
        string = two;
        break;
    }
  } else {
    string = twelve;
  }

  return string;
}

/***/ }),

/***/ "./src/components/inpt/inpt.css":
/*!**************************************!*\
  !*** ./src/components/inpt/inpt.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/inpt/inpt.js":
/*!*************************************!*\
  !*** ./src/components/inpt/inpt.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inpt_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inpt.css */ "./src/components/inpt/inpt.css");
/* harmony import */ var _inpt_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inpt_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.scss */ "./src/components/layout/layout.scss");


/***/ }),

/***/ "./src/components/layout/layout.scss":
/*!*******************************************!*\
  !*** ./src/components/layout/layout.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./src/components/li/li.css":
/*!**********************************!*\
  !*** ./src/components/li/li.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/li/li.js":
/*!*********************************!*\
  !*** ./src/components/li/li.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _li_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./li.css */ "./src/components/li/li.css");
/* harmony import */ var _li_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_li_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/like/like.css":
/*!**************************************!*\
  !*** ./src/components/like/like.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/like/like.js":
/*!*************************************!*\
  !*** ./src/components/like/like.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.css */ "./src/components/like/like.css");
/* harmony import */ var _like_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_like_css__WEBPACK_IMPORTED_MODULE_0__);


function setLikesHandler() {
  var likes = document.getElementsByClassName('like');

  var _loop = function _loop(i) {
    likes[i].onclick = function () {
      if (!likes[i].classList.contains('like_liked')) {
        likes[i].classList.add('like_liked');
        likes[i].getElementsByClassName('like__number')[0].innerHTML = +likes[i].getElementsByClassName('like__number')[0].innerHTML + 1;
      } else {
        likes[i].classList.remove('like_liked');
        likes[i].getElementsByClassName('like__number')[0].innerHTML = likes[i].getElementsByClassName('like__number')[0].innerHTML > 0 ? +likes[i].getElementsByClassName('like__number')[0].innerHTML - 1 : 0;
      }
    };
  };

  for (var i = 0; i < likes.length; i++) {
    _loop(i);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setLikesHandler);

/***/ }),

/***/ "./src/components/logo/logo.css":
/*!**************************************!*\
  !*** ./src/components/logo/logo.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.css */ "./src/components/logo/logo.css");
/* harmony import */ var _logo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/masked-inpt/masked-inpt.css":
/*!****************************************************!*\
  !*** ./src/components/masked-inpt/masked-inpt.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/masked-inpt/masked-inpt.js":
/*!***************************************************!*\
  !*** ./src/components/masked-inpt/masked-inpt.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _masked_inpt_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masked-inpt.css */ "./src/components/masked-inpt/masked-inpt.css");
/* harmony import */ var _masked_inpt_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_masked_inpt_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);


var maskedDate = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a("99.99.9999");
maskedDate.mask('.masked-inpt');

/***/ }),

/***/ "./src/components/menu/_open/menu_open.css":
/*!*************************************************!*\
  !*** ./src/components/menu/_open/menu_open.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/components/menu/menu.css");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _open_menu_open_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_open/menu_open.css */ "./src/components/menu/_open/menu_open.css");
/* harmony import */ var _open_menu_open_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_open_menu_open_css__WEBPACK_IMPORTED_MODULE_1__);


var menus = document.getElementsByClassName('menu');

var _loop = function _loop(i) {
  var menuButton = menus[i].getElementsByClassName('menu__button')[0];
  var menuList = menus[i].getElementsByClassName('menu__list')[0];
  var turner = 0;

  menuButton.onclick = function () {
    if (turner == 0) {
      menus[i].classList.add('menu_open');
      turner = 1;
    } else {
      menus[i].classList.remove('menu_open');
      turner = 0;
    }
  };
};

for (var i = 0; i < menus.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/pagination/_active/pagination__page_active.css":
/*!***********************************************************************!*\
  !*** ./src/components/pagination/_active/pagination__page_active.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pagination/pagination.css":
/*!**************************************************!*\
  !*** ./src/components/pagination/pagination.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pagination/pagination.js":
/*!*************************************************!*\
  !*** ./src/components/pagination/pagination.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.css */ "./src/components/pagination/pagination.css");
/* harmony import */ var _pagination_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagination_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _active_pagination_page_active_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_active/pagination__page_active.css */ "./src/components/pagination/_active/pagination__page_active.css");
/* harmony import */ var _active_pagination_page_active_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_active_pagination_page_active_css__WEBPACK_IMPORTED_MODULE_1__);



function hangPaginationHandlers() {
  'use strict';

  var paginations = document.getElementsByClassName('pagination');

  var _loop = function _loop(i) {
    var paginationPages = paginations[i].getElementsByClassName('pagination__page');
    var lastPage = paginations[i].getElementsByClassName('pagination__page-last')[0];
    var activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
    var paginationArrowForward = paginations[i].getElementsByClassName('pagination__arrow-forward')[0];
    var paginationArrowBack = paginations[i].getElementsByClassName('pagination__arrow-back')[0];
    var paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];

    lastPage.onclick = function () {
      if (parseInt(lastPage.innerHTML) > 4) {
        paginationEllipsis.remove();
        activePage.classList.remove('pagination__page_active');
        lastPage.classList.add('pagination__page_active');
        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
        lastPage.previousElementSibling.innerHTML = parseInt(lastPage.innerHTML) - 1;
        lastPage.previousElementSibling.previousElementSibling.innerHTML = parseInt(lastPage.innerHTML) - 2;
        paginationArrowForward.classList.add('pagination__arrow_hidden');
        paginationArrowBack.classList.remove('pagination__arrow_hidden');
        var span = document.createElement('span');
        span.innerHTML = '...';
        span.className = 'pagination__ellipsis';
        lastPage.previousElementSibling.previousElementSibling.before(span);
        paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
        var event = new Event("change");
        paginations[i].dispatchEvent(event);
      } else if (parseInt(lastPage.innerHTML) > 1) {
        activePage.classList.remove('pagination__page_active');
        lastPage.classList.add('pagination__page_active');
        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
        paginationArrowForward.classList.add('pagination__arrow_hidden');
        paginationArrowBack.classList.remove('pagination__arrow_hidden');

        var _event = new Event("change");

        paginations[i].dispatchEvent(_event);
      }
    };

    var _loop2 = function _loop2(j) {
      paginationPages[j].onclick = function () {
        if (parseInt(lastPage.innerHTML) > 4) {
          var span = {};

          switch (paginationPages[j].innerHTML) {
            case '1':
              paginationEllipsis.remove();
              activePage.classList.remove('pagination__page_active');
              paginationPages[j].classList.add('pagination__page_active');
              activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
              paginationPages[j].nextElementSibling.innerHTML = '2';
              paginationPages[j].nextElementSibling.nextElementSibling.innerHTML = '3';
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
              paginationArrowBack.classList.add('pagination__arrow_hidden');
              span = document.createElement('span');
              span.innerHTML = '...';
              span.className = 'pagination__ellipsis';
              paginationPages[j].nextElementSibling.nextElementSibling.after(span);
              paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
              break;

            case '2':
              paginationArrowBack.classList.remove('pagination__arrow_hidden');
              paginationPages[0].innerHTML = '1';
              paginationPages[1].innerHTML = '2';
              paginationPages[2].innerHTML = '3';
              activePage.classList.remove('pagination__page_active');
              paginationPages[1].classList.add('pagination__page_active');
              activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
              break;

            case '3':
              paginationArrowBack.classList.remove('pagination__arrow_hidden');
              paginationPages[0].innerHTML = '2';
              paginationPages[1].innerHTML = '3';
              paginationPages[2].innerHTML = '4';
              activePage.classList.remove('pagination__page_active');
              paginationPages[1].classList.add('pagination__page_active');
              activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
              paginationArrowBack.classList.remove('pagination__arrow_hidden');

              if (parseInt(lastPage.innerHTML) == '5') {
                paginationEllipsis.remove();
                paginationPages[0].innerHTML = '1';
                paginationPages[1].innerHTML = '3';
                paginationPages[2].innerHTML = '4';
                span = document.createElement('span');
                span.innerHTML = '...';
                span.className = 'pagination__ellipsis';
                paginationPages[0].after(span);
                paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
              }

              break;

            case (parseInt(lastPage.innerHTML) - 2).toString():
              paginationEllipsis.remove();
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
              paginationArrowBack.classList.remove('pagination__arrow_hidden');
              paginationPages[0].innerHTML = '1';
              paginationPages[1].innerHTML = parseInt(lastPage.innerHTML) - 2;
              paginationPages[2].innerHTML = parseInt(lastPage.innerHTML) - 1;
              activePage.classList.remove('pagination__page_active');
              paginationPages[1].classList.add('pagination__page_active');
              activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
              span = document.createElement('span');
              span.innerHTML = '...';
              span.className = 'pagination__ellipsis';
              paginationPages[0].after(span);
              paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
              break;

            case (parseInt(lastPage.innerHTML) - 1).toString():
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
              paginationArrowBack.classList.remove('pagination__arrow_hidden');
              activePage.classList.remove('pagination__page_active');
              paginationPages[j].classList.add('pagination__page_active');
              activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
              break;

            default:
              activePage.innerHTML = paginationPages[j].innerHTML;
              activePage.nextElementSibling.innerHTML = parseInt(activePage.innerHTML) + 1;
              activePage.previousElementSibling.innerHTML = parseInt(activePage.innerHTML) - 1;
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
              paginationArrowBack.classList.remove('pagination__arrow_hidden');
              break;
          }
        } else {
          activePage.classList.remove('pagination__page_active');
          paginationPages[j].classList.add('pagination__page_active');
          activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];

          if (paginationPages[j].innerHTML == '1') {
            paginationArrowForward.classList.remove('pagination__arrow_hidden');
            paginationArrowBack.classList.add('pagination__arrow_hidden');
          }
        }

        var event = new Event("change");
        paginations[i].dispatchEvent(event);
      };
    };

    for (var j = 0; j < paginationPages.length; j++) {
      _loop2(j);
    }

    paginationArrowBack.onclick = function () {
      if (parseInt(lastPage.innerHTML) > 4) {
        switch (activePage.innerHTML) {
          case lastPage.innerHTML:
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            paginationArrowForward.classList.remove('pagination__arrow_hidden');
            break;

          case (parseInt(lastPage.innerHTML) - 1).toString():
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;

          case (parseInt(lastPage.innerHTML) - 2).toString():
            paginationEllipsis.remove();
            activePage.innerHTML = parseInt(activePage.innerHTML) - 1;
            activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) - 1;
            var span = document.createElement('span');
            span.className = 'pagination__ellipsis';
            span.innerHTML = '...';
            activePage.nextElementSibling.after(span);
            paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
            activePage.previousElementSibling.innerHTML = activePage.innerHTML - 1;
            break;

          case '2':
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            paginationArrowBack.classList.add('pagination__arrow_hidden');
            break;

          default:
            activePage.innerHTML = parseInt(activePage.innerHTML) - 1;
            activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) - 1;
            activePage.previousElementSibling.innerHTML = parseInt(activePage.previousElementSibling.innerHTML) - 1;
            break;
        }
      } else {
        switch (activePage.innerHTML) {
          case '2':
            paginationArrowBack.classList.add('pagination__arrow_hidden');
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];

            if (parseInt(lastPage.innerHTML) == '2') {
              paginationArrowForward.classList.remove('pagination__arrow_hidden');
            }

            break;

          case lastPage.innerHTML:
            paginationArrowForward.classList.remove('pagination__arrow_hidden');
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;

          default:
            activePage.classList.remove('pagination__page_active');
            activePage.previousElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;
        }
      }

      var event = new Event("change");
      paginations[i].dispatchEvent(event);
    };

    paginationArrowForward.onclick = function () {
      if (parseInt(lastPage.innerHTML) > 4) {
        switch (activePage.innerHTML) {
          case '1':
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            paginationArrowBack.classList.remove('pagination__arrow_hidden');
            break;

          case (parseInt(lastPage.innerHTML) - 3).toString():
            paginationEllipsis.remove();
            activePage.innerHTML = parseInt(activePage.innerHTML) + 1;
            activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) + 1;
            activePage.previousElementSibling.innerHTML = 1;
            var span = document.createElement('span');
            span.innerHTML = '...';
            span.className = 'pagination__ellipsis';
            activePage.before(span);
            paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
            break;

          case (parseInt(lastPage.innerHTML) - 2).toString():
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;

          case (parseInt(lastPage.innerHTML) - 1).toString():
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            paginationArrowForward.classList.add('pagination__arrow_hidden');
            break;

          default:
            activePage.innerHTML = parseInt(activePage.innerHTML) + 1;
            activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) + 1;
            activePage.previousElementSibling.innerHTML = parseInt(activePage.previousElementSibling.innerHTML) + 1;
            break;
        }
      } else {
        switch (activePage.innerHTML) {
          case '1':
            paginationArrowBack.classList.remove('pagination__arrow_hidden');
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];

            if (parseInt(lastPage.innerHTML) == '2') {
              paginationArrowForward.classList.add('pagination__arrow_hidden');
            }

            break;

          case (parseInt(lastPage.innerHTML) - 1).toString():
            paginationArrowForward.classList.add('pagination__arrow_hidden');
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;

          default:
            activePage.classList.remove('pagination__page_active');
            activePage.nextElementSibling.classList.add('pagination__page_active');
            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
            break;
        }
      }

      var event = new Event("change");
      paginations[i].dispatchEvent(event);
    };
  };

  for (var i = 0; i < paginations.length; i++) {
    _loop(i);
  }
}

hangPaginationHandlers();
/* harmony default export */ __webpack_exports__["default"] = (hangPaginationHandlers);

/***/ }),

/***/ "./src/components/radio/_checked/radio_checked.css":
/*!*********************************************************!*\
  !*** ./src/components/radio/_checked/radio_checked.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/radio/radio.css":
/*!****************************************!*\
  !*** ./src/components/radio/radio.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/radio/radio.js":
/*!***************************************!*\
  !*** ./src/components/radio/radio.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.css */ "./src/components/radio/radio.css");
/* harmony import */ var _radio_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_radio_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checked_radio_checked_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_checked/radio_checked.css */ "./src/components/radio/_checked/radio_checked.css");
/* harmony import */ var _checked_radio_checked_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checked_radio_checked_css__WEBPACK_IMPORTED_MODULE_1__);


var radios = document.getElementsByClassName('radio');

var _loop = function _loop(i) {
  radios[i].onclick = function () {
    this.getElementsByClassName('radio__input')[0].click();
    var radioArr = document.getElementsByName(radios[i].getElementsByClassName('radio__input')[0].name);

    for (var j = 0; j < radioArr.length; j++) {
      if (radioArr[j].checked == false) {
        radioArr[j].parentElement.parentElement.parentElement.classList.remove('radio_checked');
      }
    }

    radios[i].classList.add('radio_checked');
    radios[i].getElementsByClassName('radio__input')[0].click();
  };
};

for (var i = 0; i < radios.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/components/rate/_star_1/rate_star_1.css":
/*!*****************************************************!*\
  !*** ./src/components/rate/_star_1/rate_star_1.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/_star_2/rate_star_2.css":
/*!*****************************************************!*\
  !*** ./src/components/rate/_star_2/rate_star_2.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/_star_3/rate_star_3.css":
/*!*****************************************************!*\
  !*** ./src/components/rate/_star_3/rate_star_3.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/_star_4/rate_star_4.css":
/*!*****************************************************!*\
  !*** ./src/components/rate/_star_4/rate_star_4.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/_star_5/rate_star_5.css":
/*!*****************************************************!*\
  !*** ./src/components/rate/_star_5/rate_star_5.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/rate.css":
/*!**************************************!*\
  !*** ./src/components/rate/rate.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rate/rate.js":
/*!*************************************!*\
  !*** ./src/components/rate/rate.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate.css */ "./src/components/rate/rate.css");
/* harmony import */ var _rate_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rate_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _star_1_rate_star_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_star_1/rate_star_1.css */ "./src/components/rate/_star_1/rate_star_1.css");
/* harmony import */ var _star_1_rate_star_1_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_star_1_rate_star_1_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _star_2_rate_star_2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_star_2/rate_star_2.css */ "./src/components/rate/_star_2/rate_star_2.css");
/* harmony import */ var _star_2_rate_star_2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_star_2_rate_star_2_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _star_3_rate_star_3_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_star_3/rate_star_3.css */ "./src/components/rate/_star_3/rate_star_3.css");
/* harmony import */ var _star_3_rate_star_3_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_star_3_rate_star_3_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _star_4_rate_star_4_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_star_4/rate_star_4.css */ "./src/components/rate/_star_4/rate_star_4.css");
/* harmony import */ var _star_4_rate_star_4_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_star_4_rate_star_4_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _star_5_rate_star_5_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_star_5/rate_star_5.css */ "./src/components/rate/_star_5/rate_star_5.css");
/* harmony import */ var _star_5_rate_star_5_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_star_5_rate_star_5_css__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/components/registration-card/registration-card.css":
/*!****************************************************************!*\
  !*** ./src/components/registration-card/registration-card.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/registration-card/registration-card.js":
/*!***************************************************************!*\
  !*** ./src/components/registration-card/registration-card.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-card.css */ "./src/components/registration-card/registration-card.css");
/* harmony import */ var _registration_card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_registration_card_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/rich-checkbox/rich-checkbox.css":
/*!********************************************************!*\
  !*** ./src/components/rich-checkbox/rich-checkbox.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rich-checkbox/rich-checkbox.js":
/*!*******************************************************!*\
  !*** ./src/components/rich-checkbox/rich-checkbox.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rich_checkbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-checkbox.css */ "./src/components/rich-checkbox/rich-checkbox.css");
/* harmony import */ var _rich_checkbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rich_checkbox_css__WEBPACK_IMPORTED_MODULE_0__);

var richCheckboxes = document.getElementsByClassName('rich-checkbox');

function hangRichCheckboxesHandler() {
  var richCheckboxes = document.getElementsByClassName('rich-checkbox');

  var _loop = function _loop(i) {
    if (richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].checked) {
      richCheckboxes[i].classList.add('rich-checkbox_checked');
    } else {
      richCheckboxes[i].classList.remove('rich-checkbox_checked');
    }

    richCheckboxes[i].onclick = function () {
      if (richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].checked) {
        richCheckboxes[i].classList.add('rich-checkbox_checked');
      } else {
        richCheckboxes[i].classList.remove('rich-checkbox_checked');
      }

      richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].click();
      var event = new Event("change");
      richCheckboxes[i].dispatchEvent(event);
    };
  };

  for (var i = 0; i < richCheckboxes.length; i++) {
    _loop(i);
  }
}

hangRichCheckboxesHandler();
/* harmony default export */ __webpack_exports__["default"] = (hangRichCheckboxesHandler);

/***/ }),

/***/ "./src/components/room/room.css":
/*!**************************************!*\
  !*** ./src/components/room/room.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/room/room.js":
/*!*************************************!*\
  !*** ./src/components/room/room.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room.css */ "./src/components/room/room.css");
/* harmony import */ var _room_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_room_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/search-room-card/search-room-card.css":
/*!**************************************************************!*\
  !*** ./src/components/search-room-card/search-room-card.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/search-room-card/search-room-card.js":
/*!*************************************************************!*\
  !*** ./src/components/search-room-card/search-room-card.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_room_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-room-card.css */ "./src/components/search-room-card/search-room-card.css");
/* harmony import */ var _search_room_card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_room_card_css__WEBPACK_IMPORTED_MODULE_0__);

var searchRoomCards = document.getElementsByClassName('search-room-card');

var _loop = function _loop(i) {
  var localData = getDataFromLocalStorage('toxin');
  var dropGuests = searchRoomCards[i].getElementsByClassName('drop-guests')[0];
  var dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0],
      dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0],
      dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus'),
      dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus'),
      dropGuestsInputValues = dropGuests.getElementsByClassName('dropdown__input-value');
  var searchRoomCardLink = searchRoomCards[i].getElementsByClassName('arrow-btn')[0];
  var calendarAltField = searchRoomCards[i].getElementsByClassName('calendar__altField')[0];
  var calendar = searchRoomCards[i].getElementsByClassName('calendar')[0];
  var datepicker = $(calendar).datepicker().data('datepicker');
  var dropdownValues = searchRoomCards[i].getElementsByClassName('drop-guests')[0].getElementsByClassName('dropdown__input-value');
  var local = localData ? localData : {
    "startDate": "",
    "endDate": "",
    "guestsAmount": "[0,0,0]"
  };

  var createLocalData = function createLocalData(storageName) {
    local.startDate = calendarAltField.value.split('-')[0];
    local.endDate = calendarAltField.value.split('-')[1];
    local.guestsAmount = dropGuestsHandler.value;
    localStorage[storageName] = JSON.stringify(local);
  };

  var showValue = function showValue() {
    var adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1];
    var babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

    if (adultsAmount > 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else if (adultsAmount > 0 && babiesAmount == 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
    } else if (adultsAmount == 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else {
      dropGuestsValue.innerHTML = 'Сколько гостей';
    }

    if (dropGuestsHandler.value != '[0,0,0]') {
      dropGuests.classList.add('dropdown__refresh_active');
    } else {
      dropGuests.classList.remove('dropdown__refresh_active');
    }

    for (var j = 0; j < dropGuestsMinuses.length; j++) {
      if (dropGuestsInputValues[j].innerHTML == '0') {
        dropGuestsMinuses[j].classList.add('dropdown__minus_inactive');
      } else {
        dropGuestsMinuses[j].classList.remove('dropdown__minus_inactive');
      }
    }
  };

  window.onbeforeunload = function (e) {
    localStorage.toxin = JSON.stringify(local);
  };

  if (localData) {
    if (localData.startDate && !localData.endDate) {
      datepicker.selectDate(new Date(localData.startDate));
    } else if (localData.startDate && localData.endDate) {
      datepicker.selectDate([new Date(localData.startDate), new Date(localData.endDate)]);
    }

    for (var j = 0; j < dropdownValues.length; j++) {
      dropdownValues[j].innerHTML = JSON.parse(localData.guestsAmount)[j];
    }

    dropGuestsHandler.value = localData.guestsAmount;
    showValue();
  }

  dropGuests.onchange = function () {
    var adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1],
        babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

    if (adultsAmount > 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else if (adultsAmount > 0 && babiesAmount == 0) {
      dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
    } else if (adultsAmount == 0 && babiesAmount > 0) {
      dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
    } else {
      dropGuestsValue.innerHTML = 'Сколько гостей';
    }
  };

  searchRoomCardLink.onclick = function () {
    createLocalData('toxin');
    searchRoomCardLink.getElementsByTagName('a')[0].click();
  };
};

for (var i = 0; i < searchRoomCards.length; i++) {
  _loop(i);
}

function returnWordSuffix(amount, one, two, twelve) {
  var string = twelve;

  if (amount < 11 || amount > 20) {
    switch (amount.toString()[amount.toString().length - 1]) {
      case '1':
        string = one;
        break;

      case '2':
        string = two;
        break;

      case '3':
        string = two;
        break;

      case '4':
        string = two;
        break;
    }
  } else {
    string = twelve;
  }

  return string;
}

function getDataFromLocalStorage(localStorageKey) {
  var result = null;

  if (localStorage[localStorageKey]) {
    result = JSON.parse(localStorage[localStorageKey]);
    localStorage.removeItem(localStorageKey);
  }

  return result;
}

/***/ }),

/***/ "./src/components/text-with-picture/text-with-picture.css":
/*!****************************************************************!*\
  !*** ./src/components/text-with-picture/text-with-picture.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/text-with-picture/text-with-picture.js":
/*!***************************************************************!*\
  !*** ./src/components/text-with-picture/text-with-picture.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_with_picture_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-with-picture.css */ "./src/components/text-with-picture/text-with-picture.css");
/* harmony import */ var _text_with_picture_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_with_picture_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/toggle/_on/toggle_on.css":
/*!*************************************************!*\
  !*** ./src/components/toggle/_on/toggle_on.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/toggle/toggle.css":
/*!******************************************!*\
  !*** ./src/components/toggle/toggle.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/toggle/toggle.js":
/*!*****************************************!*\
  !*** ./src/components/toggle/toggle.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.css */ "./src/components/toggle/toggle.css");
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on_toggle_on_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_on/toggle_on.css */ "./src/components/toggle/_on/toggle_on.css");
/* harmony import */ var _on_toggle_on_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_on_toggle_on_css__WEBPACK_IMPORTED_MODULE_1__);


$('.toggle__btn').click(function () {
  $(this).toggleClass('toggle_on');

  if ($(this).hasClass('toggle_on')) {
    $(this).trigger('on.switch');
  } else {
    $(this).trigger('off.switch');
  }
});
$('.toggle__btn').on('on.switch', function () {
  this.getElementsByClassName('toggle__checkbox')[0].checked = true;
});
$('.toggle__btn').on('off.switch', function () {
  this.getElementsByClassName('toggle__checkbox')[0].checked = false;
});

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/global.css */ "./src/theme/global.css");
/* harmony import */ var _theme_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_global_css__WEBPACK_IMPORTED_MODULE_1__);



function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$")); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1

requireAll(__webpack_require__("./src/pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$"));

/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!************************************************************!*\
  !*** ./src/pages sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index/index.js": "./src/pages/index/index.js",
	"./room-details/room-details.js": "./src/pages/room-details/room-details.js",
	"./search-room/search-room.js": "./src/pages/search-room/search-room.js",
	"./signin/signin.js": "./src/pages/signin/signin.js",
	"./signup/signup.js": "./src/pages/signup/signup.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/pages/room-details/room-details.css":
/*!*************************************************!*\
  !*** ./src/pages/room-details/room-details.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/room-details/room-details.js":
/*!************************************************!*\
  !*** ./src/pages/room-details/room-details.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_details_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details.css */ "./src/pages/room-details/room-details.css");
/* harmony import */ var _room_details_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_room_details_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_like_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/like/like.js */ "./src/components/like/like.js");


var roomDetails = document.getElementsByClassName('room-details')[0];
var localData = '';

if (roomDetails) {
  console.log(localStorage.toxin);
  localData = getDataFromLocalStorage('toxin');
  var local = localData ? localData : {
    "startDate": "",
    "endDate": "",
    "guestsAmount": "[0,0,0]"
  };
  var roomInfo = roomDetails.getElementsByClassName('room-details__info')[0];
  var roomComments = roomDetails.getElementsByClassName('room-details__comments')[0];
  var textsWithPicture = roomDetails.getElementsByClassName('text-with-picture');
  var diagram = roomDetails.getElementsByClassName('diagram')[0];
  var diagramNumber = roomDetails.getElementsByClassName('diagram__number')[0];
  var diagramLabel = roomDetails.getElementsByClassName('diagram__label')[0];
  var diagramSatisfactorily = roomDetails.getElementsByClassName('diagram__satisfactorily')[0];
  var diagramGood = roomDetails.getElementsByClassName('diagram__good')[0];
  var diagramBest = roomDetails.getElementsByClassName('diagram__best')[0];
  var diagramCircles = roomDetails.getElementsByClassName('diagram__circles')[0];
  var roomDetailsCommentsAmount = roomDetails.getElementsByClassName('room-details__comments-amount')[0];

  var createComment = function createComment(name, surname, date, comment, likes, avatar) {
    var div = document.createElement('div');
    var now = new Date();
    date = new Date(date);
    var commentTime = '';
    var timeDifference = now - date;

    if (timeDifference >= 31536000000) {
      timeDifference = Math.floor(timeDifference / 31536000000);
      commentTime = timeDifference == 1 ? 'год назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'год', 'года', 'лет') + ' назад';
    } else if (timeDifference >= 2592000000) {
      timeDifference = Math.floor(timeDifference / 2592000000);
      commentTime = timeDifference == 1 ? 'месяц назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'месяц', 'месяца', 'месяцев') + ' назад';
    } else if (timeDifference >= 604800000) {
      timeDifference = Math.floor(timeDifference / 604800000);
      commentTime = timeDifference == 1 ? 'неделю назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'неделя', 'недели', 'недель') + ' назад';
    } else if (timeDifference >= 86400000) {
      timeDifference = Math.floor(timeDifference / 86400000);
      commentTime = timeDifference == 1 ? 'день назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'день', 'дня', 'дней') + ' назад';
    } else if (timeDifference >= 3600000) {
      timeDifference = Math.floor(timeDifference / 3600000);
      commentTime = timeDifference == 1 ? 'час назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'час', 'часа', 'часов') + ' назад';
    } else if (timeDifference >= 60000) {
      timeDifference = Math.floor(timeDifference / 60000);
      commentTime = timeDifference == 1 ? 'минуту назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'минуту', 'минуты', 'минут') + ' назад';
    } else {
      commentTime = 'только что';
    }

    div.className = 'comment';
    div.innerHTML = '<div class="comment__author-avatar" style=""></div>' + '<div class="comment__author-info">' + '<span class="comment__author-name">' + name + '</span>' + '<span class="comment__author-surname">' + ' ' + surname + '</span><br>' + '<span>' + commentTime + '</span>' + '</div>' + '<div class="like">' + '<span class="like__btn"></span>' + '<span class="like__number">' + likes + '</span>' + '</div>' + '<p class="comment__text">' + comment + '</p>';
    roomComments.append(div);
    Object(_components_like_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    if (avatar) {
      var commentAuthorAvatar = div.getElementsByClassName('comment__author-avatar')[0];
      commentAuthorAvatar.style.backgroundImage = 'url(' + avatar + ')';
    }
  };

  var createRule = function createRule(rule) {
    var bulletListUl = roomDetails.getElementsByClassName('bullet-list__ul')[0];
    var li = document.createElement('li');
    li.className = 'li';
    li.innerHTML = '<span class="li__marker"></span>' + '<span class="li__text">' + rule + '</span>';
    bulletListUl.prepend(li);
  };

  window.onbeforeunload = function (e) {
    localStorage.toxin = JSON.stringify(local);
  };

  if (localData && localData.votes) {
    var votes = localData.votes;
    var votesSum = 0;
    var procent = 0;
    var offset = 25;
    var whiteSegmentSize = 0;
    var strokeDasharrayVal = '';
    var strokeDashoffsetVal = 0;

    for (var key in votes) {
      votesSum = votesSum + +votes[key];
    }

    procent = votesSum / 100;
    strokeDasharrayVal = votes.satisfactorily / procent - 0.5 + ' ' + (100 - votes.satisfactorily / procent + 0.5);
    diagramSatisfactorily.setAttribute('stroke-dasharray', strokeDasharrayVal);
    strokeDashoffsetVal = 100 - (votes.satisfactorily / procent - 0.5) + offset;
    diagramSatisfactorily.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    strokeDasharrayVal = votes.good / procent - 0.5 + ' ' + (100 - votes.good / procent + 0.5);
    strokeDashoffsetVal = 100 - votes.satisfactorily / procent + offset;
    diagramGood.setAttribute('stroke-dasharray', strokeDasharrayVal);
    diagramGood.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent - 0.5) + offset;
    diagramGood.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    diagramGood.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    strokeDasharrayVal = votes.best / procent - 0.5 + ' ' + (100 - votes.best / procent + 0.5);
    strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent) + offset;
    diagramBest.setAttribute('stroke-dasharray', strokeDasharrayVal);
    diagramBest.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent + votes.best / procent - 0.5) + offset;
    diagramBest.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
    diagramBest.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);

    if (votes.bad != 0) {
      diagramCircles.getElementsByClassName('diagram__segment')[0].setAttribute('stroke-width', '1');
    }

    diagramNumber.innerHTML = votesSum;
    diagramLabel.innerHTML = returnWordSuffix(votesSum, 'голос', 'голоса', 'голосов');
  }

  if (localData && localData.cosiness) {
    textsWithPicture[textsWithPicture.length - 1].classList.add('text-with-picture_border-bottom');
    var textWithPicture = document.createElement('div');
    textWithPicture.className = 'text-with-picture';
    textWithPicture.innerHTML = '<span class="text-with-picture__icon">whatshot</span>' + '<div class="text-with-picture__description">' + '<span class="text-with-picture__header">Уют</span>' + '<span>Номер оснащен камином</span>' + '</div>';
    roomInfo.append(textWithPicture);
  }

  if (localData && localData.comments) {
    for (var i = 0; i < localData.comments.length; i++) {
      createComment(localData.comments[i].name, localData.comments[i].surname, localData.comments[i].date, localData.comments[i].comment, localData.comments[i].likes, localData.comments[i].avatar);
    }
  }

  if (localData && !localData.smoke) {
    createRule('Не курить');
  }

  if (localData && !localData.guests) {
    createRule('Без вечеринок и мероприятий');
  }

  if (localData && !localData.pets) {
    createRule('Нельзя с питомцами');
  }

  roomDetailsCommentsAmount.innerHTML = localData.comments.length + ' ' + returnWordSuffix(localData.comments.length, 'отзыв', 'отзыва', 'отзывов');
}

function getDataFromLocalStorage(localStorageKey) {
  var result = null;

  if (localStorage[localStorageKey]) {
    result = JSON.parse(localStorage[localStorageKey]);
    localStorage.removeItem(localStorageKey);
  }

  return result;
}

function returnWordSuffix(amount, one, two, twelve) {
  var string = twelve;

  if (amount < 11 || amount > 20) {
    switch (amount.toString()[amount.toString().length - 1]) {
      case '1':
        string = one;
        break;

      case '2':
        string = two;
        break;

      case '3':
        string = two;
        break;

      case '4':
        string = two;
        break;
    }
  } else {
    string = twelve;
  }

  return string;
}

/* harmony default export */ __webpack_exports__["default"] = (localData);

/***/ }),

/***/ "./src/pages/search-room/data.json":
/*!*****************************************!*\
  !*** ./src/pages/search-room/data.json ***!
  \*****************************************/
/*! exports provided: rooms, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rooms\":[{\"images\":[\"images/room888.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"888\",\"luxury\":true,\"price\":\"9990\",\"stars\":\"5\",\"reviews\":\"145\",\"smoke\":false,\"pets\":false,\"guests\":false,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":false,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2021-01-11 14:00:30\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2021-01-03 17:45:30\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}],\"votes\":{\"best\":\"130\",\"good\":\"65\",\"satisfactorily\":\"65\",\"bad\":\"0\"}},{\"images\":[\"images/room840.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"840\",\"luxury\":false,\"price\":\"9990\",\"stars\":\"4\",\"reviews\":\"65\",\"smoke\":false,\"pets\":false,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}],\"votes\":{\"best\":\"50\",\"good\":\"25\",\"satisfactorily\":\"25\",\"bad\":\"0\"}},{\"images\":[\"images/room980.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"980\",\"luxury\":true,\"price\":\"8500\",\"stars\":\"3\",\"reviews\":\"35\",\"smoke\":false,\"pets\":true,\"guests\":false,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room856.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"856\",\"luxury\":false,\"price\":\"7300\",\"stars\":\"5\",\"reviews\":\"19\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room740.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"740\",\"luxury\":false,\"price\":\"6000\",\"stars\":\"4\",\"reviews\":\"44\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room982.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"982\",\"luxury\":false,\"price\":\"5800\",\"stars\":\"3\",\"reviews\":\"56\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room678.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"678\",\"luxury\":false,\"price\":\"5500\",\"stars\":\"5\",\"reviews\":\"45\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room450.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"450\",\"luxury\":false,\"price\":\"5300\",\"stars\":\"4\",\"reviews\":\"39\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room350.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"350\",\"luxury\":false,\"price\":\"5000\",\"stars\":\"3\",\"reviews\":\"77\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room666.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"666\",\"luxury\":false,\"price\":\"5000\",\"stars\":\"5\",\"reviews\":\"25\",\"smoke\":false,\"pets\":true,\"guests\":true,\"wideCorridor\":false,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020-01-05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020-01-03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room444.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"444\",\"luxury\":false,\"price\":\"5000\",\"stars\":\"3\",\"reviews\":\"15\",\"smoke\":false,\"pets\":false,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]},{\"images\":[\"images/room352.jpg\",\"images/sub1Room888.jpg\",\"images/sub2Room888.jpg\"],\"number\":\"352\",\"luxury\":false,\"price\":\"5000\",\"stars\":\"3\",\"reviews\":\"55\",\"smoke\":true,\"pets\":true,\"guests\":true,\"wideCorridor\":true,\"bedRooms\":2,\"beds\":2,\"bathRooms\":1,\"cosiness\":true,\"comments\":[{\"avatar\":\"images/murad.png\",\"name\":\"Мурад\",\"surname\":\"Сарафанов\",\"date\":\"2020.01.05\",\"comment\":\"Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару &mdash; никто не жаловался из соседей\",\"likes\":12},{\"avatar\":\"images/pat.png\",\"name\":\"Патрисия\",\"surname\":\"Стёклышкова\",\"date\":\"2020.01.03\",\"comment\":\"Обслуживание на высоте! Все аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент\",\"likes\":2}]}]}");

/***/ }),

/***/ "./src/pages/search-room/search-room.css":
/*!***********************************************!*\
  !*** ./src/pages/search-room/search-room.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/search-room/search-room.js":
/*!**********************************************!*\
  !*** ./src/pages/search-room/search-room.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_room_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-room.css */ "./src/pages/search-room/search-room.css");
/* harmony import */ var _search_room_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_room_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/pages/signin/signin.css":
/*!*************************************!*\
  !*** ./src/pages/signin/signin.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/signin/signin.js":
/*!************************************!*\
  !*** ./src/pages/signin/signin.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.css */ "./src/pages/signin/signin.css");
/* harmony import */ var _signin_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signin_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/pages/signup/signup.css":
/*!*************************************!*\
  !*** ./src/pages/signup/signup.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/signup/signup.js":
/*!************************************!*\
  !*** ./src/pages/signup/signup.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.css */ "./src/pages/signup/signup.css");
/* harmony import */ var _signup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signup_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/theme/global.css":
/*!******************************!*\
  !*** ./src/theme/global.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLiooPzNlNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXJyb3ctYnRuL2Fycm93LWJ0bi5jc3M/NDE4YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnJvdy1idG4vYXJyb3ctYnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fycm93LWlucHQvYXJyb3ctaW5wdC5jc3M/ZTFlOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnJvdy1pbnB0L2Fycm93LWlucHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zaXplX2wvYnV0dG9uX3NpemVfbC5jc3M/MWQxMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3NpemVfbS9idXR0b25fc2l6ZV9tLmNzcz8yMTIyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9fc2l6ZV9zL2J1dHRvbl9zaXplX3MuY3NzP2E2ZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL190aGVtZV9jbGljay9idXR0b25fdGhlbWVfY2xpY2suY3NzPzRmNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL190aGVtZV9jbGljay9idXR0b25fdGhlbWVfY2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL190aGVtZV9lbnRlci9idXR0b25fdGhlbWVfZW50ZXIuY3NzPzhlM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL190aGVtZV9lbnRlci9idXR0b25fdGhlbWVfZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL190aGVtZV9yZWdpc3RyYXRpb24vYnV0dG9uX3RoZW1lX3JlZ2lzdHJhdGlvbi5jc3M/NGFiYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3RoZW1lX3JlZ2lzdHJhdGlvbi9idXR0b25fdGhlbWVfcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzM0NTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jc3M/M2Q2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9fYWN0aXZlL2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlLmNzcz9iM2IzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNzcz8xOWY5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNzcz8yNThmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5jc3M/YTM0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWVudC9pbWFnZXMvbXVyYWQucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnQvaW1hZ2VzL3BhdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0ZWZpZWxkL2RhdGVmaWVsZC5jc3M/NzVkNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRlZmllbGQvZGF0ZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jc3M/Zjg5YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcC1kYXRlcy9kcm9wLWRhdGVzLmNzcz83MzdjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3AtZGF0ZXMvZHJvcC1kYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jc3M/NjY4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRlci1jYXJkL2VudGVyLWNhcmQuY3NzPzZjZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50ZXItY2FyZC9lbnRlci1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9fX2V4cGFuZGFibGUtY2hlY2tib3gvZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LmNzcz9kZTgyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9fX2V4cGFuZGFibGUtY2hlY2tib3gvZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9fX3JhbmdlL2ZpbHRlcl9fcmFuZ2UuY3NzPzk0NjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL19fcmFuZ2UvZmlsdGVyX19yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNzcz84MjRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9yb29tMzUwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXIvaW1hZ2VzL3Jvb20zNTIuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9pbWFnZXMvcm9vbTQ0NC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9yb29tNDUwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXIvaW1hZ2VzL3Jvb202NjYuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9pbWFnZXMvcm9vbTY3OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9yb29tNzQwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXIvaW1hZ2VzL3Jvb204NDAuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9pbWFnZXMvcm9vbTg1Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9yb29tODg4LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXIvaW1hZ2VzL3Jvb205ODAuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9pbWFnZXMvcm9vbTk4Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9zdWIxUm9vbTg4OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL2ltYWdlcy9zdWIyUm9vbTg4OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL19faWNvbnMvYXdlc29tZS1pY29ucy5jc3M/ZjdjZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvX19pY29ucy9mb290ZXJfX2ljb25zLmNzcz81MGNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2JlYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9iM2ZkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1jYXJkL19fY2FsY3VsYXRpb25zL2luZm8tY2FyZF9fY2FsY3VsYXRpb25zLmNzcz8xMzU4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tY2FyZC9fX2NhbGN1bGF0aW9ucy9pbmZvLWNhcmRfX2NhbGN1bGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNzcz8yNjgwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tY2FyZC9pbmZvLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdC9pbnB0LmNzcz9lZWNkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHQvaW5wdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuc2Nzcz9hZGQ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpL2xpLmNzcz8yYWI3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpL2xpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpa2UvbGlrZS5jc3M/YmVlMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saWtlL2xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby9sb2dvLmNzcz8zOThhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXNrZWQtaW5wdC9tYXNrZWQtaW5wdC5jc3M/OThlMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXNrZWQtaW5wdC9tYXNrZWQtaW5wdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L19vcGVuL21lbnVfb3Blbi5jc3M/ODlmZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY3NzPzgyYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vX2FjdGl2ZS9wYWdpbmF0aW9uX19wYWdlX2FjdGl2ZS5jc3M/Y2ZmNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY3NzPzE4YTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvL19jaGVja2VkL3JhZGlvX2NoZWNrZWQuY3NzPzI5ZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY3NzP2IwMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0ZS9fc3Rhcl8xL3JhdGVfc3Rhcl8xLmNzcz80YzFjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGUvX3N0YXJfMi9yYXRlX3N0YXJfMi5jc3M/ZDEzYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYXRlL19zdGFyXzMvcmF0ZV9zdGFyXzMuY3NzP2VmOTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0ZS9fc3Rhcl80L3JhdGVfc3Rhcl80LmNzcz8xZDRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGUvX3N0YXJfNS9yYXRlX3N0YXJfNS5jc3M/MTc2NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYXRlL3JhdGUuY3NzPzNlMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0ZS9yYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi1jYXJkL3JlZ2lzdHJhdGlvbi1jYXJkLmNzcz9kNjRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi1jYXJkL3JlZ2lzdHJhdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JpY2gtY2hlY2tib3gvcmljaC1jaGVja2JveC5jc3M/ZTRmYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yaWNoLWNoZWNrYm94L3JpY2gtY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vbS9yb29tLmNzcz85Njc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jvb20vcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuY3NzPzY2NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXJvb20tY2FyZC9zZWFyY2gtcm9vbS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtd2l0aC1waWN0dXJlL3RleHQtd2l0aC1waWN0dXJlLmNzcz8yYzc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtd2l0aC1waWN0dXJlL3RleHQtd2l0aC1waWN0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS9fb24vdG9nZ2xlX29uLmNzcz8xZjg2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuY3NzPzczOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL2ZvbnRzLmNzcz9jMWYxIiwid2VicGFjazovLy8uKigiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4L2luZGV4LmNzcz83MDNkIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcm9vbS1kZXRhaWxzL3Jvb20tZGV0YWlscy5jc3M/ZWZhZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcm9vbS1kZXRhaWxzL3Jvb20tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VhcmNoLXJvb20vc2VhcmNoLXJvb20uY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWFyY2gtcm9vbS9zZWFyY2gtcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbmluL3NpZ25pbi5jc3M/ODJlYyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbmluL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbnVwL3NpZ251cC5jc3M/ODE4MCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbnVwL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvZ2xvYmFsLmNzcz9lYTMzIl0sIm5hbWVzIjpbImFycm93SW5wdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwiaW5wdCIsIm9uZm9jdXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbmJsdXIiLCJyZW1vdmUiLCJsZW5ndGgiLCJjbGlja0J1dHRvbnMiLCJoYW5nQ2xpY2tCdXR0b25zSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZW50ZXJCdXR0b25zIiwib25jbGljayIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xpY2siLCJyZWdpc3RyYXRpb25CdXR0b25zIiwiY2FsZW5kYXJzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJzdHlsZSIsInBvc2l0aW9uIiwiekluZGV4IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwiYWx0SW5wdXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNsYXNzTmFtZSIsImFmdGVyIiwiJCIsImRhdGVwaWNrZXIiLCJrZXlib2FyZE5hdiIsIm11bHRpcGxlRGF0ZXNTZXBhcmF0b3IiLCJhbHRGaWVsZCIsImFsdEZpZWxkRGF0ZUZvcm1hdCIsIm5hdlRpdGxlcyIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsIm1vbnRoc0ZpZWxkIiwicmFuZ2UiLCJjbGVhckJ1dHRvbiIsInByZXZIdG1sIiwibmV4dEh0bWwiLCJvblNob3ciLCJjYWxlbmRhckNoYW5nZVZpZXciLCJvbkhpZGUiLCJpbnN0IiwiYW5pbWF0aW9uQ29tcGxldGVkIiwiaGlkZUV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwib25TZWxlY3QiLCJmb3JtYXR0ZWREYXRlIiwiZGF0ZSIsImV2ZW50IiwiZGF0ZXBpY2tlcnMiLCJidXR0b25zIiwiZGF0YSIsImlubmVySFRNTCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJoaWRlIiwiY2Fyb3VzZWxzIiwiY2Fyb3VzZWxBcnJvd1JpZ2h0V3JhcHBlciIsImNhcm91c2VsQXJyb3dMZWZ0V3JhcHBlciIsImNhcm91c2VsV2luZG93IiwiaGFuZ0NoZWNrYm94ZXNIYW5kbGVyIiwiY2hlY2tib3hlcyIsImNoZWNrZWQiLCJkYXRlRmllbGRzIiwiY2FsZW5kYXJJbnB0IiwiZGF0ZWZpZWxkQXJyb3ciLCJkYXRlZmllbGRWYWx1ZSIsInR1cm5lciIsImZvY3VzIiwiYmx1ciIsIm9uaW5wdXQiLCJ2YWx1ZSIsImRhdGVEcm9wcyIsImRyb3BEYXRlc0Fycml2YWxTd2l0aGVyIiwiZHJvcERhdGVzRGVwYXJ0dXJlU3dpdGhlciIsImRyb3BEYXRlc0Fycml2YWxWYWx1ZSIsImRyb3BEYXRlc0RlcGFydHVyZVZhbHVlIiwiZHJvcERhdGVzQXJyb3dzIiwic3dpdGNoQ2FsZW5kYXIiLCJqIiwiZGF0ZXMiLCJzcGxpdCIsImRyb3BzIiwiZHJvcFN3aXRjaGVyIiwiZHJvcEFycm93IiwiZHJvcEhhbmRsZXIiLCJkcm9wVmFsdWUiLCJkcm9wSW5wdXRWYWx1ZXMiLCJkcm9wUGx1c2VzIiwiZHJvcE1pbnVzZXMiLCJkcm9wUmVmcmVzaCIsImRyb3BTdWJtaXQiLCJkcm9wVHVybmVyIiwiZHJvcEhhbmRsZXJWYWx1ZXNBcnJheSIsInB1c2giLCJwYXJzZUludCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInJlc3VsdCIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveGVzIiwiZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94U3dpdGNoZXIiLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hBcnJvdyIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyVHVybmVyIiwiZmlsdGVycyIsInJvb21zIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwidG94aW4iLCJsb2NhbERhdGEiLCJnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSIsInNjcmVlbiIsInBhZ2luYXRpb24iLCJyb29tc09uUGFnZSIsInBhZ2VzQW1vdW50IiwiTWF0aCIsImNlaWwiLCJmaWx0ZXJTbW9rZSIsImZpbHRlclBldHMiLCJmaWx0ZXJHdWVzdHMiLCJmaWx0ZXJXaWRlQ29ycmlkb3IiLCJmaWx0ZXJTbW9rZUNoZWNrQngiLCJmaWx0ZXJQZXRzQ2hlY2tCeCIsImZpbHRlckd1ZXN0c0NoZWNrQngiLCJmaWx0ZXJXaWRlQ29ycmlkb3JDaGVja0J4IiwiZHJvcEd1ZXN0cyIsImRyb3BHdWVzdHNIYW5kbGVyIiwiZHJvcEd1ZXN0c1ZhbHVlIiwiZHJvcEd1ZXN0c1BsdXNlcyIsImRyb3BHdWVzdHNNaW51c2VzIiwiZHJvcENvbnZlbmllbmNlcyIsImRyb3BDb252ZW5pZW5jZXNIYW5kbGVyIiwiZHJvcENvbnZlbmllbmNlc1ZhbHVlIiwiZHJvcENvbnZlbmllbmNlc1BsdXNlcyIsImRyb3BDb252ZW5pZW5jZXNNaW51c2VzIiwiY2FsZW5kYXIiLCJkcm9wZG93blZhbHVlcyIsImNhbGVuZGFyQWx0RmllbGQiLCJsb2NhbCIsImNoZWNrQm94ZXMiLCJyaWNoQ2hlY2tCb3hlcyIsImNyZWF0ZUxvY2FsRGF0YSIsInN0b3JhZ2VOYW1lIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImd1ZXN0c0Ftb3VudCIsInNob3dQYWdlIiwicGFnZU51bSIsInN0YXJ0IiwiZW5kIiwibm90ZXMiLCJub3RlIiwiZGl2IiwiZGl2SHRtbCIsImx1eHVyeSIsImltYWdlcyIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwic3RhcnMiLCJyZXZpZXdzIiwiYXBwZW5kIiwiY2hlY2tCeHMiLCJyaWNoQ2hlY2tCeHMiLCJrZXkiLCJzZXRDYXJvdXNlbHNIYW5kbGVyIiwic2V0UGFnaW5hdGlvbiIsInBhZ2luYXRpb25QYWdlcyIsImhhbmdQYWdpbmF0aW9uSGFuZGxlcnMiLCJjYXJvdXNlbEltZyIsImNhcm91c2VsQ2lyY2xlcyIsImNhcm91c2VsQ2lyY2xlQWN0aXZlIiwiY2Fyb3VzZWxDb2VmIiwibWFyZ2luTGVmdCIsIndpZHRoIiwibiIsInNldEZpbHRlcnMiLCJzbW9rZSIsInBldHMiLCJndWVzdHMiLCJ3aWRlQ29ycmlkb3IiLCJiZWRSb29tcyIsImJlZHMiLCJiYXRoUm9vbXMiLCJzcGxpY2UiLCJzaG93VmFsdWUiLCJhZHVsdHNBbW91bnQiLCJiYWJpZXNBbW91bnQiLCJyZXR1cm5Xb3JkU3VmZml4Iiwid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJlIiwic2VsZWN0RGF0ZSIsIkRhdGUiLCJoYW5nUmljaENoZWNrYm94ZXNIYW5kbGVyIiwib25jaGFuZ2UiLCJiZWRSb29tc0Ftb3VudCIsImJlZHNBbW91bnQiLCJiYXRoUm9vbXNBbW91bnQiLCJiZWRSb29tc1ZhbHVlIiwiYmVkc1ZhbHVlIiwiYmF0aFJvb21zVmFsdWUiLCJsb2NhbFN0b3JhZ2VLZXkiLCJyZW1vdmVJdGVtIiwiYW1vdW50Iiwib25lIiwidHdvIiwidHdlbHZlIiwic3RyaW5nIiwidG9TdHJpbmciLCJpbmZvQ2FyZHMiLCJpbmZvQ2FyZENhbGN1bGF0aW9ucyIsImluZm9DYXJkQW1vdW50T2ZEYXlzIiwiaW5mb0NhcmRNb25leVJlc3VsdCIsImluZm9DYXJkVG90YWwiLCJpbmZvQ2FyZE1vbmV5IiwiaW5mb0NhcmREaXNjb3VudFJlc3VsdCIsImluZm9DYXJkRGlzY291bnQiLCJjYWxjdWxhdGVQcmljZSIsInByaWNlT25EYXlzIiwiaW5mb0NhcmRSb29tTnVtYmVyIiwiaW5mb0NhcmRSb29tQ2F0ZWdvcnkiLCJzZXRMaWtlc0hhbmRsZXIiLCJsaWtlcyIsImNvbnRhaW5zIiwibWFza2VkRGF0ZSIsIklucHV0bWFzayIsIm1hc2siLCJtZW51cyIsIm1lbnVCdXR0b24iLCJtZW51TGlzdCIsInBhZ2luYXRpb25zIiwibGFzdFBhZ2UiLCJhY3RpdmVQYWdlIiwicGFnaW5hdGlvbkFycm93Rm9yd2FyZCIsInBhZ2luYXRpb25BcnJvd0JhY2siLCJwYWdpbmF0aW9uRWxsaXBzaXMiLCJzcGFuIiwiYmVmb3JlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmFkaW9zIiwicmFkaW9BcnIiLCJnZXRFbGVtZW50c0J5TmFtZSIsIm5hbWUiLCJwYXJlbnRFbGVtZW50IiwicmljaENoZWNrYm94ZXMiLCJzZWFyY2hSb29tQ2FyZHMiLCJkcm9wR3Vlc3RzSW5wdXRWYWx1ZXMiLCJzZWFyY2hSb29tQ2FyZExpbmsiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uIiwicmVxdWlyZUFsbCIsInJlcXVpcmVDb250ZXh0Iiwia2V5cyIsIm1hcCIsInJlcXVpcmUiLCJyb29tRGV0YWlscyIsInJvb21JbmZvIiwicm9vbUNvbW1lbnRzIiwidGV4dHNXaXRoUGljdHVyZSIsImRpYWdyYW0iLCJkaWFncmFtTnVtYmVyIiwiZGlhZ3JhbUxhYmVsIiwiZGlhZ3JhbVNhdGlzZmFjdG9yaWx5IiwiZGlhZ3JhbUdvb2QiLCJkaWFncmFtQmVzdCIsImRpYWdyYW1DaXJjbGVzIiwicm9vbURldGFpbHNDb21tZW50c0Ftb3VudCIsImNyZWF0ZUNvbW1lbnQiLCJzdXJuYW1lIiwiY29tbWVudCIsImF2YXRhciIsIm5vdyIsImNvbW1lbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJmbG9vciIsImNvbW1lbnRBdXRob3JBdmF0YXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjcmVhdGVSdWxlIiwicnVsZSIsImJ1bGxldExpc3RVbCIsImxpIiwicHJlcGVuZCIsInZvdGVzIiwidm90ZXNTdW0iLCJwcm9jZW50Iiwib2Zmc2V0Iiwid2hpdGVTZWdtZW50U2l6ZSIsInN0cm9rZURhc2hhcnJheVZhbCIsInN0cm9rZURhc2hvZmZzZXRWYWwiLCJzYXRpc2ZhY3RvcmlseSIsInNldEF0dHJpYnV0ZSIsImdvb2QiLCJiZXN0IiwiYmFkIiwiY29zaW5lc3MiLCJ0ZXh0V2l0aFBpY3R1cmUiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxZQUFZLGtCQUFrQiwyQkFBMkIsaUJBQWlCLEdBQUcsc0JBQXNCLGtCQUFrQiw4QkFBOEIsR0FBRyxpREFBaUQscUJBQXFCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsa0RBQWtELHNCQUFzQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLEdBQUcsbURBQW1ELHVC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QUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEc7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QTRDQyxNQUE1QyxFQUFvRDtBQUNoRCxNQUFJQyxNQUFNLEdBQUdELE1BQWI7O0FBRUEsTUFBSUgsTUFBTSxHQUFHLEVBQVQsSUFBZUEsTUFBTSxHQUFHLEVBQTVCLEVBQWdDO0FBRTVCLFlBQVFBLE1BQU0sQ0FBQ0ssUUFBUCxHQUFrQkwsTUFBTSxDQUFDSyxRQUFQLEdBQWtCdE4sTUFBbEIsR0FBMkIsQ0FBN0MsQ0FBUjtBQUNJLFdBQUssR0FBTDtBQUNJcU4sY0FBTSxHQUFHSCxHQUFUO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0lHLGNBQU0sR0FBR0YsR0FBVDtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJRSxjQUFNLEdBQUdGLEdBQVQ7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSUUsY0FBTSxHQUFHRixHQUFUO0FBQ0E7QUFaUjtBQWVILEdBakJELE1BaUJPO0FBQ0hFLFVBQU0sR0FBR0QsTUFBVDtBQUNIOztBQUVELFNBQU9DLE1BQVA7QUFDSDs7QUFLY3BHLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoidG94aW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy00MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNDAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy00NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNDUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy01MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy01NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy02MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNjAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy02NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNjUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy03MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNzAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy03NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogNzUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy04MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogODAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy04NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogODUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy05MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogOTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy05NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogOTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xMDAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDEwMDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTEwNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTA1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTEwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxMTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xMTUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDExNTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTEyMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTIwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTI1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxMjUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xMzAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDEzMDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTEzNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTM1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTQwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxNDAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xNDUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDE0NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTE1MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTUwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTU1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxNTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xNjAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDE2MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTE2NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTY1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTcwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxNzAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xNzUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDE3NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTE4MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTgwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMTg1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAxODUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0xOTAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDE5MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTE5NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTk1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjAwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyMDAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yMDUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDIwNTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTIxMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjEwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjE1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyMTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yMjAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDIyMDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTIyNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjI1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjMwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyMzAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yMzUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDIzNTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTI0MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjQwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjQ1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyNDUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yNTAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDI1MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTI1NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjU1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjYwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyNjAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yNjUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDI2NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTI3MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjcwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjc1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyNzUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yODAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDI4MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTI4NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMjg1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMjkwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAyOTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0yOTUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDI5NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTMwMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzAwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzA1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzMDUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zMTAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDMxMDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTMxNTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzE1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzIwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzMjAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zMjUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDMyNTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTMzMDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzMwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzM1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzMzUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zNDAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDM0MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTM0NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzQ1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzUwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzNTAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zNTUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDM1NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTM2MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzYwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzY1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzNjUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zNzAwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDM3MDBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTM3NTAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzc1MHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzgwMC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzODAwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9iYXNpcy0zODUwLmxheW91dF9fY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDM4NTBweDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2Jhc2lzLTM5MDAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzkwMHB4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtMzk1MC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiAzOTUwcHg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9ncm93LTAge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfZ3Jvdy0xIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2dyb3ctMiB7XFxuICBmbGV4LWdyb3c6IDI7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9ncm93LTMge1xcbiAgZmxleC1ncm93OiAzO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfZ3Jvdy00IHtcXG4gIGZsZXgtZ3JvdzogNDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2dyb3ctNSB7XFxuICBmbGV4LWdyb3c6IDU7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9ncm93LTYge1xcbiAgZmxleC1ncm93OiA2O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfZ3Jvdy03IHtcXG4gIGZsZXgtZ3JvdzogNztcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2dyb3ctOCB7XFxuICBmbGV4LWdyb3c6IDg7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9ncm93LTkge1xcbiAgZmxleC1ncm93OiA5O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfc2hyaW5rLTAge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9zaHJpbmstMSB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX3Nocmluay0yIHtcXG4gIGZsZXgtc2hyaW5rOiAyO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfc2hyaW5rLTMge1xcbiAgZmxleC1zaHJpbms6IDM7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9zaHJpbmstNCB7XFxuICBmbGV4LXNocmluazogNDtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX3Nocmluay01IHtcXG4gIGZsZXgtc2hyaW5rOiA1O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfc2hyaW5rLTYge1xcbiAgZmxleC1zaHJpbms6IDY7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9zaHJpbmstNyB7XFxuICBmbGV4LXNocmluazogNztcXG59XFxuLmxheW91dF9fY29udGFpbmVyX3Nocmluay04IHtcXG4gIGZsZXgtc2hyaW5rOiA4O1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfc2hyaW5rLTkge1xcbiAgZmxleC1zaHJpbms6IDk7XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2xlZnQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfcmlnaHQge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9jZW50ZXIge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5sYXlvdXRfX2NvbnRhaW5lcl9jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX2NvbHVtbiA+IC5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiBhdXRvO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfY29sdW1uLXJldmVyc2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfY29sdW1uLXJldmVyc2UgPiAubGF5b3V0X19jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogYXV0bztcXG59XFxuLmxheW91dF9fY29udGFpbmVyX3Jvdy1yZXZlcnNlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuLmxheW91dF9fY29udGFpbmVyX3dyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfd3JhcC1yZXZlcnNlIHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbn1cXG4ubGF5b3V0X19jb250YWluZXJfYmFzaXMtYXV0by5sYXlvdXRfX2NvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiBhdXRvO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLyohXG4gKiBkaXN0L2lucHV0bWFza1xuICogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiAqIENvcHlyaWdodCAoYykgMjAxMCAtIDIwMjAgUm9iaW4gSGVyYm90c1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBWZXJzaW9uOiA1LjAuNS1iZXRhLjBcbiAqL1xuIWZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyBlbHNlIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIGZhY3RvcnkpOyBlbHNlIHtcbiAgICAgICAgdmFyIGEgPSBmYWN0b3J5KCk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gYSkgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuICAgIH1cbn0od2luZG93LCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbW9kdWxlcyA9IFsgZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wiQkFDS1NQQUNFXCI6OCxcIkJBQ0tTUEFDRV9TQUZBUklcIjoxMjcsXCJERUxFVEVcIjo0NixcIkRPV05cIjo0MCxcIkVORFwiOjM1LFwiRU5URVJcIjoxMyxcIkVTQ0FQRVwiOjI3LFwiSE9NRVwiOjM2LFwiSU5TRVJUXCI6NDUsXCJMRUZUXCI6MzcsXCJQQUdFX0RPV05cIjozNCxcIlBBR0VfVVBcIjozMyxcIlJJR0hUXCI6MzksXCJTUEFDRVwiOjMyLFwiVEFCXCI6OSxcIlVQXCI6MzgsXCJYXCI6ODgsXCJDT05UUk9MXCI6MTcsXCJLRVlfMjI5XCI6MjI5fScpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMCwgX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG4gICAgICAgIHZhciBfbWFzayA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLCBfaW5wdXRtYXNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDkpKSwgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2KSksIF9tYXNrTGV4ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KSwgX3ZhbGlkYXRpb25UZXN0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9wb3NpdGlvbmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF92YWxpZGF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgX2lucHV0SGFuZGxpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBfZXZlbnRydWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpLCBfZGVmaW5pdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMjApKSwgX2RlZmF1bHRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKSk7XG4gICAgICAgIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfSwgX3R5cGVvZihvYmopO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9jdW1lbnQgPSBfd2luZG93LmRlZmF1bHQuZG9jdW1lbnQsIGRhdGFLZXkgPSBcIl9pbnB1dG1hc2tfb3B0c1wiO1xuICAgICAgICBmdW5jdGlvbiBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSW5wdXRtYXNrKSkgcmV0dXJuIG5ldyBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKTtcbiAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeUxpYiA9IF9pbnB1dG1hc2suZGVmYXVsdCwgdGhpcy5lbCA9IHZvaWQgMCwgdGhpcy5ldmVudHMgPSB7fSwgdGhpcy5tYXNrc2V0ID0gdm9pZCAwLCBcbiAgICAgICAgICAgICEwICE9PSBpbnRlcm5hbCAmJiAoXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFsaWFzKSA/IG9wdGlvbnMgPSBhbGlhcyA6IChvcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgXG4gICAgICAgICAgICBhbGlhcyAmJiAob3B0aW9ucy5hbGlhcyA9IGFsaWFzKSksIHRoaXMub3B0cyA9IF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKSwgXG4gICAgICAgICAgICB0aGlzLm5vTWFza3NDYWNoZSA9IG9wdGlvbnMgJiYgdm9pZCAwICE9PSBvcHRpb25zLmRlZmluaXRpb25zLCB0aGlzLnVzZXJPcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgXG4gICAgICAgICAgICByZXNvbHZlQWxpYXModGhpcy5vcHRzLmFsaWFzLCBvcHRpb25zLCB0aGlzLm9wdHMpKSwgdGhpcy5yZWZyZXNoVmFsdWUgPSAhMSwgdGhpcy51bmRvVmFsdWUgPSB2b2lkIDAsIFxuICAgICAgICAgICAgdGhpcy4kZWwgPSB2b2lkIDAsIHRoaXMuc2tpcEtleVByZXNzRXZlbnQgPSAhMSwgdGhpcy5za2lwSW5wdXRFdmVudCA9ICExLCB0aGlzLnZhbGlkYXRpb25FdmVudCA9ICExLCBcbiAgICAgICAgICAgIHRoaXMuaWdub3JhYmxlID0gITEsIHRoaXMubWF4TGVuZ3RoLCB0aGlzLm1vdXNlRW50ZXIgPSAhMSwgdGhpcy5vcmlnaW5hbFBsYWNlaG9sZGVyID0gdm9pZCAwLCBcbiAgICAgICAgICAgIHRoaXMuaXNDb21wb3NpbmcgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlQWxpYXMoYWxpYXNTdHIsIG9wdGlvbnMsIG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBhbGlhc0RlZmluaXRpb24gPSBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXNbYWxpYXNTdHJdO1xuICAgICAgICAgICAgcmV0dXJuIGFsaWFzRGVmaW5pdGlvbiA/IChhbGlhc0RlZmluaXRpb24uYWxpYXMgJiYgcmVzb2x2ZUFsaWFzKGFsaWFzRGVmaW5pdGlvbi5hbGlhcywgdm9pZCAwLCBvcHRzKSwgXG4gICAgICAgICAgICBfaW5wdXRtYXNrLmRlZmF1bHQuZXh0ZW5kKCEwLCBvcHRzLCBhbGlhc0RlZmluaXRpb24pLCBfaW5wdXRtYXNrLmRlZmF1bHQuZXh0ZW5kKCEwLCBvcHRzLCBvcHRpb25zKSwgXG4gICAgICAgICAgICAhMCkgOiAobnVsbCA9PT0gb3B0cy5tYXNrICYmIChvcHRzLm1hc2sgPSBhbGlhc1N0ciksICExKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpbXBvcnRBdHRyaWJ1dGVPcHRpb25zKG5wdCwgb3B0cywgdXNlck9wdGlvbnMsIGRhdGFBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGltcG9ydE9wdGlvbihvcHRpb24sIG9wdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ck9wdGlvbiA9IFwiXCIgPT09IGRhdGFBdHRyaWJ1dGUgPyBvcHRpb24gOiBkYXRhQXR0cmlidXRlICsgXCItXCIgKyBvcHRpb247XG4gICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IHZvaWQgMCAhPT0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGEgOiBucHQuZ2V0QXR0cmlidXRlKGF0dHJPcHRpb24pLCBcbiAgICAgICAgICAgICAgICBudWxsICE9PSBvcHRpb25EYXRhICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25EYXRhICYmICgwID09PSBvcHRpb24uaW5kZXhPZihcIm9uXCIpID8gb3B0aW9uRGF0YSA9IF93aW5kb3cuZGVmYXVsdFtvcHRpb25EYXRhXSA6IFwiZmFsc2VcIiA9PT0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGEgPSAhMSA6IFwidHJ1ZVwiID09PSBvcHRpb25EYXRhICYmIChvcHRpb25EYXRhID0gITApKSwgXG4gICAgICAgICAgICAgICAgdXNlck9wdGlvbnNbb3B0aW9uXSA9IG9wdGlvbkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEwID09PSBvcHRzLmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJPcHRpb25zID0gbnB0LmdldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlKSwgb3B0aW9uLCBkYXRhb3B0aW9ucywgb3B0aW9uRGF0YSwgcDtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ck9wdGlvbnMgJiYgXCJcIiAhPT0gYXR0ck9wdGlvbnMgJiYgKGF0dHJPcHRpb25zID0gYXR0ck9wdGlvbnMucmVwbGFjZSgvJy9nLCAnXCInKSwgXG4gICAgICAgICAgICAgICAgZGF0YW9wdGlvbnMgPSBKU09OLnBhcnNlKFwie1wiICsgYXR0ck9wdGlvbnMgKyBcIn1cIikpLCBkYXRhb3B0aW9ucykgZm9yIChwIGluIG9wdGlvbkRhdGEgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgIGRhdGFvcHRpb25zKSBpZiAoXCJhbGlhc1wiID09PSBwLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChvcHRpb24gaW4gaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSksIHVzZXJPcHRpb25zLmFsaWFzICYmIHJlc29sdmVBbGlhcyh1c2VyT3B0aW9ucy5hbGlhcywgdXNlck9wdGlvbnMsIG9wdHMpLCBcbiAgICAgICAgICAgICAgICBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhb3B0aW9ucykgZm9yIChwIGluIG9wdGlvbkRhdGEgPSB2b2lkIDAsIGRhdGFvcHRpb25zKSBpZiAocC50b0xvd2VyQ2FzZSgpID09PSBvcHRpb24udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQoITAsIG9wdHMsIHVzZXJPcHRpb25zKSwgXCJydGxcIiAhPT0gbnB0LmRpciAmJiAhb3B0cy5yaWdodEFsaWduIHx8IChucHQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiKSwgXG4gICAgICAgICAgICBcInJ0bFwiICE9PSBucHQuZGlyICYmICFvcHRzLm51bWVyaWNJbnB1dCB8fCAobnB0LmRpciA9IFwibHRyXCIsIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxuICAgICAgICAgICAgb3B0cy5pc1JUTCA9ICEwKSwgT2JqZWN0LmtleXModXNlck9wdGlvbnMpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgZGF0YUF0dHJpYnV0ZTogXCJkYXRhLWlucHV0bWFza1wiLFxuICAgICAgICAgICAgZGVmYXVsdHM6IF9kZWZhdWx0cy5kZWZhdWx0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IF9kZWZpbml0aW9ucy5kZWZhdWx0LFxuICAgICAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgICAgICBtYXNrc0NhY2hlOiB7fSxcbiAgICAgICAgICAgIGdldCBpc1JUTCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRzLmlzUlRMIHx8IHRoaXMub3B0cy5udW1lcmljSW5wdXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFzazogZnVuY3Rpb24gbWFzayhlbGVtcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICAgICAgZWxlbXMgPSBlbGVtcy5ub2RlTmFtZSA/IFsgZWxlbXMgXSA6IGVsZW1zLCBlbGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlZE9wdHMgPSBfaW5wdXRtYXNrLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdGhhdC5vcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoZWwsIHNjb3BlZE9wdHMsIF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgdGhhdC5kYXRhQXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tzZXQgPSAoMCwgX21hc2tMZXhlci5nZW5lcmF0ZU1hc2tTZXQpKHNjb3BlZE9wdHMsIHRoYXQubm9NYXNrc0NhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gbWFza3NldCAmJiAodm9pZCAwICE9PSBlbC5pbnB1dG1hc2sgJiYgKGVsLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sucmVtb3ZlKCkpLCBlbC5pbnB1dG1hc2sgPSBuZXcgSW5wdXRtYXNrKHZvaWQgMCwgdm9pZCAwLCAhMCksIGVsLmlucHV0bWFzay5vcHRzID0gc2NvcGVkT3B0cywgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2subm9NYXNrc0NhY2hlID0gdGhhdC5ub01hc2tzQ2FjaGUsIGVsLmlucHV0bWFzay51c2VyT3B0aW9ucyA9IF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2suZWwgPSBlbCwgZWwuaW5wdXRtYXNrLiRlbCA9ICgwLCBfaW5wdXRtYXNrLmRlZmF1bHQpKGVsKSwgZWwuaW5wdXRtYXNrLm1hc2tzZXQgPSBtYXNrc2V0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pbnB1dG1hc2suZGVmYXVsdC5kYXRhKGVsLCBkYXRhS2V5LCB0aGF0LnVzZXJPcHRpb25zKSwgX21hc2subWFzay5jYWxsKGVsLmlucHV0bWFzaykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIGVsZW1zICYmIGVsZW1zWzBdICYmIGVsZW1zWzBdLmlucHV0bWFzayB8fCB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gb3B0aW9uKG9wdGlvbnMsIG5vcmVtYXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIG9wdGlvbnMgPyB0aGlzLm9wdHNbb3B0aW9uc10gOiBcIm9iamVjdFwiID09PSBfdHlwZW9mKG9wdGlvbnMpID8gKF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQodGhpcy51c2VyT3B0aW9ucywgb3B0aW9ucyksIFxuICAgICAgICAgICAgICAgIHRoaXMuZWwgJiYgITAgIT09IG5vcmVtYXNrICYmIHRoaXMubWFzayh0aGlzLmVsKSwgdGhpcykgOiB2b2lkIDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5tYXNrZWR2YWx1ZTogZnVuY3Rpb24gdW5tYXNrZWR2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIF9tYXNrTGV4ZXIuZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSB0aGlzLmVsIHx8IHZvaWQgMCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQnVmZmVyID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlTWFzayAmJiB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgdmFsdWUsIHRoaXMub3B0cykgfHwgdmFsdWUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBfaW5wdXRIYW5kbGluZy5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITEsICExLCB2YWx1ZUJ1ZmZlciksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUgJiYgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUuY2FsbCh0aGlzLCB2b2lkIDAsIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzKSwgMCwgdGhpcy5vcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pbnB1dEhhbmRsaW5nLnVubWFza2VkdmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgICAgICAgICBfaW5wdXRtYXNrLmRlZmF1bHQuZGF0YSh0aGlzLmVsLCBkYXRhS2V5LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN2ID0gdGhpcy5vcHRzLmF1dG9Vbm1hc2sgPyAoMCwgX2lucHV0SGFuZGxpbmcudW5tYXNrZWR2YWx1ZSkodGhpcy5lbCkgOiB0aGlzLl92YWx1ZUdldCh0aGlzLm9wdHMuYXV0b1VubWFzayksIHZhbHVlUHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgIGN2ICE9PSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKS5qb2luKFwiXCIpID8gdGhpcy5fdmFsdWVTZXQoY3YsIHRoaXMub3B0cy5hdXRvVW5tYXNrKSA6IHRoaXMuX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vZmYodGhpcy5lbCksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKHZhbHVlUHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmVsKSwgXCJ2YWx1ZVwiKSwgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHkgJiYgdGhpcy5fX3ZhbHVlR2V0ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVsLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogdGhpcy5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB0aGlzLl9fdmFsdWVTZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0pKSA6IGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgdGhpcy5lbC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgdGhpcy5fX3ZhbHVlR2V0ICYmICh0aGlzLmVsLl9fZGVmaW5lR2V0dGVyX18oXCJ2YWx1ZVwiLCB0aGlzLl9fdmFsdWVHZXQpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlU2V0KSksIHRoaXMuZWwuaW5wdXRtYXNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRlbXB0eW1hc2s6IGZ1bmN0aW9uIGdldGVtcHR5bWFzaygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBfbWFza0xleGVyLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgIF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzTWFza2VkVmFsdWU6IGZ1bmN0aW9uIGhhc01hc2tlZFZhbHVlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5vcHRzLmF1dG9Vbm1hc2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24gaXNDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBfbWFza0xleGVyLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgIF92YWxpZGF0aW9uLmlzQ29tcGxldGUuY2FsbCh0aGlzLCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldG1ldGFkYXRhOiBmdW5jdGlvbiBnZXRtZXRhZGF0YSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBfbWFza0xleGVyLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5tYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFza1RhcmdldCA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIDAsICExKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0Lm1ldGFkYXRhLmZvckVhY2goZnVuY3Rpb24obXRkdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG10ZHQubWFzayAhPT0gbWFza1RhcmdldCB8fCAobWFza1RhcmdldCA9IG10ZHQsICExKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIG1hc2tUYXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQubWV0YWRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIF9tYXNrTGV4ZXIuZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQnVmZmVyID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlTWFzayAmJiB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgdmFsdWUsIHRoaXMub3B0cykgfHwgdmFsdWUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBfaW5wdXRIYW5kbGluZy5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCB2YWx1ZUJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHZhbHVlID0gdGhpcy5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYnVmZmVyID0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKHRoaXMpLCBybCA9IF9wb3NpdGlvbmluZy5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKHRoaXMpLCBsbWliID0gYnVmZmVyLmxlbmd0aCAtIDE7IHJsIDwgbG1pYiAmJiAhX3Bvc2l0aW9uaW5nLmlzTWFzay5jYWxsKHRoaXMsIGxtaWIpOyBsbWliLS0pIDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnNwbGljZShybCwgbG1pYiArIDEgLSBybCksIF92YWxpZGF0aW9uLmlzQ29tcGxldGUuY2FsbCh0aGlzLCBidWZmZXIpICYmIHZhbHVlID09PSAodGhpcy5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgX21hc2tMZXhlci5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUJ1ZmZlciA9IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgJiYgdGhpcy5vcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIHZhbHVlLCB0aGlzLm9wdHMpIHx8IHZhbHVlKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBfaW5wdXRIYW5kbGluZy5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCB2YWx1ZUJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhID8ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLmdldG1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICB9IDogZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbCAmJiAoMCwgX2lucHV0bWFzay5kZWZhdWx0KSh0aGlzLmVsKS50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyB2YWx1ZSBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmFseXNlTWFzazogX21hc2tMZXhlci5hbmFseXNlTWFza1xuICAgICAgICB9LCBJbnB1dG1hc2suZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfaW5wdXRtYXNrLmRlZmF1bHQuZXh0ZW5kKCEwLCBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgX2lucHV0bWFzay5kZWZhdWx0LmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9ucywgZGVmaW5pdGlvbik7XG4gICAgICAgIH0sIElucHV0bWFzay5leHRlbmRBbGlhc2VzID0gZnVuY3Rpb24oYWxpYXMpIHtcbiAgICAgICAgICAgIF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmQoITAsIElucHV0bWFzay5wcm90b3R5cGUuYWxpYXNlcywgYWxpYXMpO1xuICAgICAgICB9LCBJbnB1dG1hc2suZm9ybWF0ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgbWV0YWRhdGEpO1xuICAgICAgICB9LCBJbnB1dG1hc2sudW5tYXNrID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykudW5tYXNrZWR2YWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sIElucHV0bWFzay5pc1ZhbGlkID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykuaXNWYWxpZCh2YWx1ZSk7XG4gICAgICAgIH0sIElucHV0bWFzay5yZW1vdmUgPSBmdW5jdGlvbihlbGVtcykge1xuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsIGVsZW1zLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sgJiYgZWwuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIElucHV0bWFzay5zZXRWYWx1ZSA9IGZ1bmN0aW9uKGVsZW1zLCB2YWx1ZSkge1xuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsIGVsZW1zLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sgPyBlbC5pbnB1dG1hc2suc2V0VmFsdWUodmFsdWUpIDogKDAsIF9pbnB1dG1hc2suZGVmYXVsdCkoZWwpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIHZhbHVlIF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIElucHV0bWFzay5kZXBlbmRlbmN5TGliID0gX2lucHV0bWFzay5kZWZhdWx0LCBfd2luZG93LmRlZmF1bHQuSW5wdXRtYXNrID0gSW5wdXRtYXNrO1xuICAgICAgICB2YXIgX2RlZmF1bHQgPSBJbnB1dG1hc2s7XG4gICAgICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuY2FyZXQgPSBjYXJldCwgZXhwb3J0cy5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbiA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uLCBcbiAgICAgICAgZXhwb3J0cy5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uID0gZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbiwgZXhwb3J0cy5nZXRCdWZmZXIgPSBnZXRCdWZmZXIsIFxuICAgICAgICBleHBvcnRzLmdldEJ1ZmZlclRlbXBsYXRlID0gZ2V0QnVmZmVyVGVtcGxhdGUsIGV4cG9ydHMuZ2V0TGFzdFZhbGlkUG9zaXRpb24gPSBnZXRMYXN0VmFsaWRQb3NpdGlvbiwgXG4gICAgICAgIGV4cG9ydHMuaXNNYXNrID0gaXNNYXNrLCBleHBvcnRzLnJlc2V0TWFza1NldCA9IHJlc2V0TWFza1NldCwgZXhwb3J0cy5zZWVrTmV4dCA9IHNlZWtOZXh0LCBcbiAgICAgICAgZXhwb3J0cy5zZWVrUHJldmlvdXMgPSBzZWVrUHJldmlvdXMsIGV4cG9ydHMudHJhbnNsYXRlUG9zaXRpb24gPSB0cmFuc2xhdGVQb3NpdGlvbjtcbiAgICAgICAgdmFyIF92YWxpZGF0aW9uVGVzdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLCBfdmFsaWRhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNCksIF9tYXNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG4gICAgICAgIGZ1bmN0aW9uIGNhcmV0KGlucHV0LCBiZWdpbiwgZW5kLCBub3RyYW5zbGF0ZSwgaXNEZWxldGUpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBvcHRzID0gdGhpcy5vcHRzLCByYW5nZTtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGJlZ2luKSByZXR1cm4gXCJzZWxlY3Rpb25TdGFydFwiIGluIGlucHV0ICYmIFwic2VsZWN0aW9uRW5kXCIgaW4gaW5wdXQgPyAoYmVnaW4gPSBpbnB1dC5zZWxlY3Rpb25TdGFydCwgXG4gICAgICAgICAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQpIDogd2luZG93LmdldFNlbGVjdGlvbiA/IChyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLCBcbiAgICAgICAgICAgIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLnBhcmVudE5vZGUgIT09IGlucHV0ICYmIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICE9PSBpbnB1dCB8fCAoYmVnaW4gPSByYW5nZS5zdGFydE9mZnNldCwgXG4gICAgICAgICAgICBlbmQgPSByYW5nZS5lbmRPZmZzZXQpKSA6IGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UgJiYgKHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCksIFxuICAgICAgICAgICAgYmVnaW4gPSAwIC0gcmFuZ2UuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC1pbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICBlbmQgPSBiZWdpbiArIHJhbmdlLnRleHQubGVuZ3RoKSwge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBub3RyYW5zbGF0ZSA/IGJlZ2luIDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbCh0aGlzLCBiZWdpbiksXG4gICAgICAgICAgICAgICAgZW5kOiBub3RyYW5zbGF0ZSA/IGVuZCA6IHRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwodGhpcywgZW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGJlZ2luKSAmJiAoZW5kID0gdGhpcy5pc1JUTCA/IGJlZ2luWzBdIDogYmVnaW5bMV0sIGJlZ2luID0gdGhpcy5pc1JUTCA/IGJlZ2luWzFdIDogYmVnaW5bMF0pLCBcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gYmVnaW4uYmVnaW4gJiYgKGVuZCA9IHRoaXMuaXNSVEwgPyBiZWdpbi5iZWdpbiA6IGJlZ2luLmVuZCwgYmVnaW4gPSB0aGlzLmlzUlRMID8gYmVnaW4uZW5kIDogYmVnaW4uYmVnaW4pLCBcbiAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGJlZ2luKSB7XG4gICAgICAgICAgICAgICAgYmVnaW4gPSBub3RyYW5zbGF0ZSA/IGJlZ2luIDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbCh0aGlzLCBiZWdpbiksIGVuZCA9IG5vdHJhbnNsYXRlID8gZW5kIDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbCh0aGlzLCBlbmQpLCBcbiAgICAgICAgICAgICAgICBlbmQgPSBcIm51bWJlclwiID09IHR5cGVvZiBlbmQgPyBlbmQgOiBiZWdpbjtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQ2FsYyA9IHBhcnNlSW50KCgoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUgPyAoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoaW5wdXQsIG51bGwpIDogaW5wdXQuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBlbmQ7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnNjcm9sbExlZnQgPSBzY3JvbGxDYWxjID4gaW5wdXQuc2Nyb2xsV2lkdGggPyBzY3JvbGxDYWxjIDogMCwgaW5wdXQuaW5wdXRtYXNrLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICAgICAgfSwgb3B0cy5pbnNlcnRNb2RlVmlzdWFsICYmICExID09PSBvcHRzLmluc2VydE1vZGUgJiYgYmVnaW4gPT09IGVuZCAmJiAoaXNEZWxldGUgfHwgZW5kKyspLCBcbiAgICAgICAgICAgICAgICBpbnB1dCA9PT0gKGlucHV0LmlucHV0bWFzay5zaGFkb3dSb290IHx8IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50KSBpZiAoXCJzZXRTZWxlY3Rpb25SYW5nZVwiIGluIGlucHV0KSBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShiZWdpbiwgZW5kKTsgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCB2b2lkIDAgPT09IGlucHV0LmZpcnN0Q2hpbGQgfHwgbnVsbCA9PT0gaW5wdXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoaW5wdXQuZmlyc3RDaGlsZCwgYmVnaW4gPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gYmVnaW4gOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChpbnB1dC5maXJzdENoaWxkLCBlbmQgPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gZW5kIDogaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSghMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKSwgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY3JlYXRlVGV4dFJhbmdlICYmIChyYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpLCByYW5nZS5jb2xsYXBzZSghMCksIFxuICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSwgcmFuZ2Uuc2VsZWN0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKHJldHVybkRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LCAkID0gdGhpcy5kZXBlbmRlbmN5TGliLCBidWZmZXIgPSBfdmFsaWRhdGlvblRlc3RzLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICEwLCBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHRoaXMpLCAhMCwgITApLCBibCA9IGJ1ZmZlci5sZW5ndGgsIHBvcywgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzKSwgcG9zaXRpb25zID0ge30sIGx2VGVzdCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmR4SW50bHpyID0gdm9pZCAwICE9PSBsdlRlc3QgPyBsdlRlc3QubG9jYXRvci5zbGljZSgpIDogdm9pZCAwLCB0ZXN0UG9zO1xuICAgICAgICAgICAgZm9yIChwb3MgPSBsdnAgKyAxOyBwb3MgPCBidWZmZXIubGVuZ3RoOyBwb3MrKykgdGVzdFBvcyA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdFRlbXBsYXRlLmNhbGwodGhpcywgcG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpLCBcbiAgICAgICAgICAgIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCBwb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdFBvcyk7XG4gICAgICAgICAgICB2YXIgbHZUZXN0QWx0ID0gbHZUZXN0ICYmIHZvaWQgMCAhPT0gbHZUZXN0LmFsdGVybmF0aW9uID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSA6IHZvaWQgMDtcbiAgICAgICAgICAgIGZvciAocG9zID0gYmwgLSAxOyBsdnAgPCBwb3MgJiYgKHRlc3RQb3MgPSBwb3NpdGlvbnNbcG9zXSwgKHRlc3RQb3MubWF0Y2gub3B0aW9uYWxpdHkgfHwgdGVzdFBvcy5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgdGVzdFBvcy5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCBsdlRlc3RBbHQgJiYgKGx2VGVzdEFsdCAhPT0gcG9zaXRpb25zW3Bvc10ubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dICYmIDEgIT0gdGVzdFBvcy5tYXRjaC5zdGF0aWMgfHwgITAgPT09IHRlc3RQb3MubWF0Y2guc3RhdGljICYmIHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dICYmIF92YWxpZGF0aW9uLmNoZWNrQWx0ZXJuYXRpb25NYXRjaC5jYWxsKHRoaXMsIHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCBsdlRlc3RBbHQudG9TdHJpbmcoKS5zcGxpdChcIixcIikpICYmIFwiXCIgIT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdHMuY2FsbCh0aGlzLCBwb3MpWzBdLmRlZikpICYmIGJ1ZmZlcltwb3NdID09PSBfdmFsaWRhdGlvblRlc3RzLmdldFBsYWNlaG9sZGVyLmNhbGwodGhpcywgcG9zLCB0ZXN0UG9zLm1hdGNoKSk7IHBvcy0tKSBibC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRlZmluaXRpb24gPyB7XG4gICAgICAgICAgICAgICAgbDogYmwsXG4gICAgICAgICAgICAgICAgZGVmOiBwb3NpdGlvbnNbYmxdID8gcG9zaXRpb25zW2JsXS5tYXRjaCA6IHZvaWQgMFxuICAgICAgICAgICAgfSA6IGJsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRldGVybWluZU5ld0NhcmV0UG9zaXRpb24oc2VsZWN0ZWRDYXJldCwgdGFiYmVkKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgbWFza3NldCA9IHRoaXMubWFza3NldCwgb3B0cyA9IHRoaXMub3B0cztcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvUmFkaXhGb2N1cyhjbGlja1Bvcykge1xuICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgMCAhPT0gb3B0cy5kaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZwcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHZwc1tjbGlja1Bvc10gfHwgdnBzW2NsaWNrUG9zXS5pbnB1dCA9PT0gX3ZhbGlkYXRpb25UZXN0cy5nZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgY2xpY2tQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tQb3MgPCBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgLTEpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gcmFkaXhQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2cCBpbiB2cHMpIGlmICh2cHNbdnBdICYmIHJhZGl4UG9zIDwgdnAgJiYgdnBzW3ZwXS5pbnB1dCAhPT0gX3ZhbGlkYXRpb25UZXN0cy5nZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgdnApKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWJiZWQgJiYgKGlucHV0bWFzay5pc1JUTCA/IHNlbGVjdGVkQ2FyZXQuZW5kID0gc2VsZWN0ZWRDYXJldC5iZWdpbiA6IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWxlY3RlZENhcmV0LmVuZCksIFxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZ25vcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luID0gc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwicmFkaXhGb2N1c1wiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9SYWRpeEZvY3VzKHNlbGVjdGVkQ2FyZXQuYmVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIikuaW5kZXhPZihvcHRzLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luID0gb3B0cy5udW1lcmljSW5wdXQgPyBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgcmFkaXhQb3MpIDogcmFkaXhQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4sIGx2Y2xpY2tQb3NpdGlvbiA9IGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCBjbGlja1Bvc2l0aW9uLCAhMCksIGxhc3RQb3NpdGlvbiA9IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCAtMSAhPT0gbHZjbGlja1Bvc2l0aW9uIHx8IGlzTWFzay5jYWxsKGlucHV0bWFzaywgMCkgPyBsdmNsaWNrUG9zaXRpb24gOiAtMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1Bvc2l0aW9uIDw9IGxhc3RQb3NpdGlvbikgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luID0gaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBjbGlja1Bvc2l0aW9uLCAhMSwgITApID8gY2xpY2tQb3NpdGlvbiA6IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBjbGlja1Bvc2l0aW9uKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbHZwID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tsdmNsaWNrUG9zaXRpb25dLCB0dCA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdFRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrLCBsYXN0UG9zaXRpb24sIGx2cCA/IGx2cC5tYXRjaC5sb2NhdG9yIDogdm9pZCAwLCBsdnApLCBwbGFjZWhvbGRlciA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0UGxhY2Vob2xkZXIuY2FsbChpbnB1dG1hc2ssIGxhc3RQb3NpdGlvbiwgdHQubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IHBsYWNlaG9sZGVyICYmIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaylbbGFzdFBvc2l0aW9uXSAhPT0gcGxhY2Vob2xkZXIgJiYgITAgIT09IHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdHQubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzay5jYWxsKGlucHV0bWFzaywgbGFzdFBvc2l0aW9uLCBvcHRzLmtlZXBTdGF0aWMsICEwKSAmJiB0dC5tYXRjaC5kZWYgPT09IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1BvcyA9IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBsYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZXdQb3MgPD0gY2xpY2tQb3NpdGlvbiB8fCBjbGlja1Bvc2l0aW9uID09PSBsYXN0UG9zaXRpb24pICYmIChsYXN0UG9zaXRpb24gPSBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luID0gbGFzdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENhcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlcihub0NhY2hlKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgbWFza3NldCA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IG1hc2tzZXQuYnVmZmVyICYmICEwICE9PSBub0NhY2hlIHx8IChtYXNrc2V0LmJ1ZmZlciA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcyksICEwKSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IG1hc2tzZXQuX2J1ZmZlciAmJiAobWFza3NldC5fYnVmZmVyID0gbWFza3NldC5idWZmZXIuc2xpY2UoKSkpLCBtYXNrc2V0LmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJUZW1wbGF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gbWFza3NldC5fYnVmZmVyICYmIChtYXNrc2V0Ll9idWZmZXIgPSBfdmFsaWRhdGlvblRlc3RzLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICExLCAxKSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IG1hc2tzZXQuYnVmZmVyICYmIChtYXNrc2V0LmJ1ZmZlciA9IG1hc2tzZXQuX2J1ZmZlci5zbGljZSgpKSksIG1hc2tzZXQuX2J1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbG9zZXN0VG8sIHN0cmljdCwgdmFsaWRQb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LCBiZWZvcmUgPSAtMSwgYWZ0ZXIgPSAtMSwgdmFsaWRzID0gdmFsaWRQb3NpdGlvbnMgfHwgbWFza3NldC52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIHBvc05keCBpbiB2b2lkIDAgPT09IGNsb3Nlc3RUbyAmJiAoY2xvc2VzdFRvID0gLTEpLCB2YWxpZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHNOZHggPSBwYXJzZUludChwb3NOZHgpO1xuICAgICAgICAgICAgICAgIHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCAhMCAhPT0gdmFsaWRzW3BzTmR4XS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHBzTmR4IDw9IGNsb3Nlc3RUbyAmJiAoYmVmb3JlID0gcHNOZHgpLCBcbiAgICAgICAgICAgICAgICBjbG9zZXN0VG8gPD0gcHNOZHggJiYgKGFmdGVyID0gcHNOZHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMSA9PT0gYmVmb3JlIHx8IGJlZm9yZSA9PSBjbG9zZXN0VG8gPyBhZnRlciA6IC0xID09IGFmdGVyID8gYmVmb3JlIDogY2xvc2VzdFRvIC0gYmVmb3JlIDwgYWZ0ZXIgLSBjbG9zZXN0VG8gPyBiZWZvcmUgOiBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc01hc2socG9zLCBzdHJpY3QsIGZ1enp5KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgbWFza3NldCA9IHRoaXMubWFza3NldCwgdGVzdCA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdFRlbXBsYXRlLmNhbGwodGhpcywgcG9zKS5tYXRjaDtcbiAgICAgICAgICAgIGlmIChcIlwiID09PSB0ZXN0LmRlZiAmJiAodGVzdCA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKHRoaXMsIHBvcykubWF0Y2gpLCBcbiAgICAgICAgICAgICEwICE9PSB0ZXN0LnN0YXRpYykgcmV0dXJuIHRlc3QuZm47XG4gICAgICAgICAgICBpZiAoITAgPT09IGZ1enp5ICYmIHZvaWQgMCAhPT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICYmICEwICE9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uZ2VuZXJhdGVkSW5wdXQpIHJldHVybiAhMDtcbiAgICAgICAgICAgIGlmICghMCAhPT0gc3RyaWN0ICYmIC0xIDwgcG9zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1enp5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdHMuY2FsbCh0aGlzLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHMubGVuZ3RoID4gMSArIChcIlwiID09PSB0ZXN0c1t0ZXN0cy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGVtcGxhdGUgPSBfdmFsaWRhdGlvblRlc3RzLmRldGVybWluZVRlc3RUZW1wbGF0ZS5jYWxsKHRoaXMsIHBvcywgX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0cy5jYWxsKHRoaXMsIHBvcykpLCB0ZXN0UGxhY2VIb2xkZXIgPSBfdmFsaWRhdGlvblRlc3RzLmdldFBsYWNlaG9sZGVyLmNhbGwodGhpcywgcG9zLCB0ZXN0VGVtcGxhdGUubWF0Y2gpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0VGVtcGxhdGUubWF0Y2guZGVmICE9PSB0ZXN0UGxhY2VIb2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVzZXRNYXNrU2V0KHNvZnQpIHtcbiAgICAgICAgICAgIHZhciBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgbWFza3NldC5idWZmZXIgPSB2b2lkIDAsICEwICE9PSBzb2Z0ICYmIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zID0ge30sIG1hc2tzZXQucCA9IDApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlZWtOZXh0KHBvcywgbmV3QmxvY2ssIGZ1enp5KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcztcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZnV6enkgJiYgKGZ1enp5ID0gITApO1xuICAgICAgICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSBwb3MgKyAxOyBcIlwiICE9PSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCBwb3NpdGlvbikubWF0Y2guZGVmICYmICghMCA9PT0gbmV3QmxvY2sgJiYgKCEwICE9PSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCBwb3NpdGlvbikubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzay5jYWxsKHRoaXMsIHBvc2l0aW9uLCB2b2lkIDAsICEwKSkgfHwgITAgIT09IG5ld0Jsb2NrICYmICFpc01hc2suY2FsbCh0aGlzLCBwb3NpdGlvbiwgdm9pZCAwLCBmdXp6eSkpOyApIHBvc2l0aW9uKys7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2Vla1ByZXZpb3VzKHBvcywgbmV3QmxvY2spIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBwb3NpdGlvbiA9IHBvcyAtIDE7XG4gICAgICAgICAgICBpZiAocG9zIDw9IDApIHJldHVybiAwO1xuICAgICAgICAgICAgZm9yICg7MCA8IHBvc2l0aW9uICYmICghMCA9PT0gbmV3QmxvY2sgJiYgKCEwICE9PSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCBwb3NpdGlvbikubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzay5jYWxsKHRoaXMsIHBvc2l0aW9uLCB2b2lkIDAsICEwKSkgfHwgITAgIT09IG5ld0Jsb2NrICYmICFpc01hc2suY2FsbCh0aGlzLCBwb3NpdGlvbiwgdm9pZCAwLCAhMCkpOyApIHBvc2l0aW9uLS07XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNsYXRlUG9zaXRpb24ocG9zKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgb3B0cyA9IHRoaXMub3B0cywgZWwgPSB0aGlzLmVsO1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzUlRMIHx8IFwibnVtYmVyXCIgIT0gdHlwZW9mIHBvcyB8fCBvcHRzLmdyZWVkeSAmJiBcIlwiID09PSBvcHRzLnBsYWNlaG9sZGVyIHx8ICFlbCB8fCAocG9zID0gdGhpcy5fdmFsdWVHZXQoKS5sZW5ndGggLSBwb3MpLCBcbiAgICAgICAgICAgIHBvcztcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gZ2V0TG9jYXRvcih0c3QsIGFsaWduKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRvciA9IChudWxsICE9IHRzdC5hbHRlcm5hdGlvbiA/IHRzdC5tbG9jW2dldERlY2lzaW9uVGFrZXIodHN0KV0gOiB0c3QubG9jYXRvcikuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmIChcIlwiICE9PSBsb2NhdG9yKSBmb3IgKDtsb2NhdG9yLmxlbmd0aCA8IGFsaWduOyApIGxvY2F0b3IgKz0gXCIwXCI7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXREZWNpc2lvblRha2VyKHRzdCkge1xuICAgICAgICAgICAgdmFyIGRlY2lzaW9uVGFrZXIgPSB0c3QubG9jYXRvclt0c3QuYWx0ZXJuYXRpb25dO1xuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGRlY2lzaW9uVGFrZXIgJiYgMCA8IGRlY2lzaW9uVGFrZXIubGVuZ3RoICYmIChkZWNpc2lvblRha2VyID0gZGVjaXNpb25UYWtlci5zcGxpdChcIixcIilbMF0pLCBcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gZGVjaXNpb25UYWtlciA/IGRlY2lzaW9uVGFrZXIudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0LCByZXR1cm5QTCkge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG9wdHMgPSB0aGlzLm9wdHMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICBpZiAodGVzdCA9IHRlc3QgfHwgZ2V0VGVzdC5jYWxsKHRoaXMsIHBvcykubWF0Y2gsIHZvaWQgMCAhPT0gdGVzdC5wbGFjZWhvbGRlciB8fCAhMCA9PT0gcmV0dXJuUEwpIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRlc3QucGxhY2Vob2xkZXIgPyB0ZXN0LnBsYWNlaG9sZGVyKG9wdHMpIDogdGVzdC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIGlmICghMCAhPT0gdGVzdC5zdGF0aWMpIHJldHVybiBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdChwb3MgJSBvcHRzLnBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoLTEgPCBwb3MgJiYgdm9pZCAwID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdHMgPSBnZXRUZXN0cy5jYWxsKHRoaXMsIHBvcyksIHN0YXRpY0FsdGVybmF0aW9ucyA9IFtdLCBwcmV2VGVzdDtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHMubGVuZ3RoID4gMSArIChcIlwiID09PSB0ZXN0c1t0ZXN0cy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCkpIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIGlmIChcIlwiICE9PSB0ZXN0c1tpXS5tYXRjaC5kZWYgJiYgITAgIT09IHRlc3RzW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKCEwID09PSB0ZXN0c1tpXS5tYXRjaC5zdGF0aWMgfHwgdm9pZCAwID09PSBwcmV2VGVzdCB8fCAhMSAhPT0gdGVzdHNbaV0ubWF0Y2guZm4udGVzdChwcmV2VGVzdC5tYXRjaC5kZWYsIG1hc2tzZXQsIHBvcywgITAsIG9wdHMpKSAmJiAoc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pLCBcbiAgICAgICAgICAgICAgICAhMCA9PT0gdGVzdHNbaV0ubWF0Y2guc3RhdGljICYmIChwcmV2VGVzdCA9IHRlc3RzW2ldKSwgMSA8IHN0YXRpY0FsdGVybmF0aW9ucy5sZW5ndGggJiYgL1swLTlhLWJBLVpdLy50ZXN0KHN0YXRpY0FsdGVybmF0aW9uc1swXS5tYXRjaC5kZWYpKSkgcmV0dXJuIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KHBvcyAlIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXN0LmRlZjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRNYXNrVGVtcGxhdGUoYmFzZU9uSW5wdXQsIG1pbmltYWxQb3MsIGluY2x1ZGVNb2RlLCBub0ppdCwgY2xlYXJPcHRpb25hbFRhaWwpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBvcHRzID0gdGhpcy5vcHRzLCBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LCBncmVlZHkgPSBvcHRzLmdyZWVkeTtcbiAgICAgICAgICAgIGNsZWFyT3B0aW9uYWxUYWlsICYmIChvcHRzLmdyZWVkeSA9ICExKSwgbWluaW1hbFBvcyA9IG1pbmltYWxQb3MgfHwgMDtcbiAgICAgICAgICAgIHZhciBtYXNrVGVtcGxhdGUgPSBbXSwgbmR4SW50bHpyLCBwb3MgPSAwLCB0ZXN0LCB0ZXN0UG9zLCBqaXRSZW5kZXJTdGF0aWM7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSBiYXNlT25JbnB1dCAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10pIHRlc3RQb3MgPSBjbGVhck9wdGlvbmFsVGFpbCAmJiAhMCA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZvaWQgMCA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgKyAxXSAmJiAoITAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5nZW5lcmF0ZWRJbnB1dCB8fCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQgPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIDAgPCBwb3MpID8gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwodGhpcywgcG9zLCBnZXRUZXN0cy5jYWxsKHRoaXMsIHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSkgOiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10sIFxuICAgICAgICAgICAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgbWFza1RlbXBsYXRlLnB1c2goITAgPT09IGluY2x1ZGVNb2RlID8gdGVzdFBvcy5pbnB1dCA6ICExID09PSBpbmNsdWRlTW9kZSA/IHRlc3QubmF0aXZlRGVmIDogZ2V0UGxhY2Vob2xkZXIuY2FsbCh0aGlzLCBwb3MsIHRlc3QpKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUuY2FsbCh0aGlzLCBwb3MsIG5keEludGx6ciwgcG9zIC0gMSksIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBcbiAgICAgICAgICAgICAgICAgICAgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqaXRNYXNraW5nID0gITAgIT09IG5vSml0ICYmICghMSAhPT0gb3B0cy5qaXRNYXNraW5nID8gb3B0cy5qaXRNYXNraW5nIDogdGVzdC5qaXQpO1xuICAgICAgICAgICAgICAgICAgICBqaXRSZW5kZXJTdGF0aWMgPSBqaXRSZW5kZXJTdGF0aWMgJiYgdGVzdC5zdGF0aWMgJiYgdGVzdC5kZWYgIT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgbnVsbCA9PT0gdGVzdC5mbiB8fCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdICYmIHRlc3Quc3RhdGljICYmIHRlc3QuZGVmICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIG51bGwgPT09IHRlc3QuZm4sIFxuICAgICAgICAgICAgICAgICAgICBqaXRSZW5kZXJTdGF0aWMgfHwgITEgPT09IGppdE1hc2tpbmcgfHwgdm9pZCAwID09PSBqaXRNYXNraW5nIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGppdE1hc2tpbmcgJiYgaXNGaW5pdGUoaml0TWFza2luZykgJiYgcG9zIDwgaml0TWFza2luZyA/IG1hc2tUZW1wbGF0ZS5wdXNoKCExID09PSBpbmNsdWRlTW9kZSA/IHRlc3QubmF0aXZlRGVmIDogZ2V0UGxhY2Vob2xkZXIuY2FsbCh0aGlzLCBwb3MsIHRlc3QpKSA6IGppdFJlbmRlclN0YXRpYyA9ICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgIH0gd2hpbGUgKCh2b2lkIDAgPT09IHRoaXMubWF4TGVuZ3RoIHx8IHBvcyA8IHRoaXMubWF4TGVuZ3RoKSAmJiAoITAgIT09IHRlc3Quc3RhdGljIHx8IFwiXCIgIT09IHRlc3QuZGVmKSB8fCBwb3MgPCBtaW5pbWFsUG9zKTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiID09PSBtYXNrVGVtcGxhdGVbbWFza1RlbXBsYXRlLmxlbmd0aCAtIDFdICYmIG1hc2tUZW1wbGF0ZS5wb3AoKSwgITEgPT09IGluY2x1ZGVNb2RlICYmIHZvaWQgMCAhPT0gbWFza3NldC5tYXNrTGVuZ3RoIHx8IChtYXNrc2V0Lm1hc2tMZW5ndGggPSBwb3MgLSAxKSwgXG4gICAgICAgICAgICBvcHRzLmdyZWVkeSA9IGdyZWVkeSwgbWFza1RlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSB8fCBkZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbCh0aGlzLCBwb3MsIGdldFRlc3RzLmNhbGwodGhpcywgcG9zLCBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IG5keEludGx6ciwgdHN0UHMpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXRlcm1pbmVUZXN0VGVtcGxhdGUocG9zLCB0ZXN0cykge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgICAgICAgICBwb3MgPSAwIDwgcG9zID8gcG9zIC0gMSA6IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBhbHRUZXN0ID0gZ2V0VGVzdC5jYWxsKHRoaXMsIHBvcyksIHRhcmdldExvY2F0b3IgPSBnZXRMb2NhdG9yKGFsdFRlc3QpLCB0c3RMb2NhdG9yLCBjbG9zZXN0LCBiZXN0TWF0Y2gsIG5keCA9IDA7IG5keCA8IHRlc3RzLmxlbmd0aDsgbmR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHN0ID0gdGVzdHNbbmR4XTtcbiAgICAgICAgICAgICAgICB0c3RMb2NhdG9yID0gZ2V0TG9jYXRvcih0c3QsIHRhcmdldExvY2F0b3IubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0c3RMb2NhdG9yIC0gdGFyZ2V0TG9jYXRvcik7XG4gICAgICAgICAgICAgICAgKHZvaWQgMCA9PT0gY2xvc2VzdCB8fCBcIlwiICE9PSB0c3RMb2NhdG9yICYmIGRpc3RhbmNlIDwgY2xvc2VzdCB8fCBiZXN0TWF0Y2ggJiYgIW9wdHMuZ3JlZWR5ICYmIGJlc3RNYXRjaC5tYXRjaC5vcHRpb25hbGl0eSAmJiBcIm1hc3RlclwiID09PSBiZXN0TWF0Y2gubWF0Y2gubmV3QmxvY2tNYXJrZXIgJiYgKCF0c3QubWF0Y2gub3B0aW9uYWxpdHkgfHwgIXRzdC5tYXRjaC5uZXdCbG9ja01hcmtlcikgfHwgYmVzdE1hdGNoICYmIGJlc3RNYXRjaC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgIXRzdC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIpICYmIChjbG9zZXN0ID0gZGlzdGFuY2UsIFxuICAgICAgICAgICAgICAgIGJlc3RNYXRjaCA9IHRzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRlc3QocG9zLCB0ZXN0cykge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICByZXR1cm4gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdID8gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdIDogKHRlc3RzIHx8IGdldFRlc3RzLmNhbGwodGhpcywgcG9zKSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgbWFza3NldCA9IHRoaXMubWFza3NldCwgb3B0cyA9IHRoaXMub3B0cywgZWwgPSB0aGlzLmVsLCBtYXNrVG9rZW5zID0gbWFza3NldC5tYXNrVG9rZW4sIHRlc3RQb3MgPSBuZHhJbnRsenIgPyB0c3RQcyA6IDAsIG5keEluaXRpYWxpemVyID0gbmR4SW50bHpyID8gbmR4SW50bHpyLnNsaWNlKCkgOiBbIDAgXSwgbWF0Y2hlcyA9IFtdLCBpbnNlcnRTdG9wID0gITEsIGxhdGVzdE1hdGNoLCBjYWNoZURlcGVuZGVuY3kgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW4sIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hdGNoKG1hdGNoLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdE1hdGNoID0gMCA9PT0gdG9rZW5Hcm91cC5tYXRjaGVzLmluZGV4T2YobGF0ZXN0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2ggfHwgdG9rZW5Hcm91cC5tYXRjaGVzLmV2ZXJ5KGZ1bmN0aW9uKG1hdGNoLCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITAgPT09IG1hdGNoLmlzUXVhbnRpZmllciA/IGZpcnN0TWF0Y2ggPSBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXAubWF0Y2hlc1tuZHggLSAxXSkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWF0Y2gsIFwibWF0Y2hlc1wiKSAmJiAoZmlyc3RNYXRjaCA9IGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgbWF0Y2gpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZpcnN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZmlyc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgsIHRhcmdldEFsdGVybmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVzdE1hdGNoLCBpbmRleFBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWFza3NldC50ZXN0c1twb3NdIHx8IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSkgJiYgKG1hc2tzZXQudGVzdHNbcG9zXSB8fCBbIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSBdKS5ldmVyeShmdW5jdGlvbihsbW50LCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG1udC5tbG9jW2FsdGVybmF0ZU5keF0pIHJldHVybiBiZXN0TWF0Y2ggPSBsbW50LCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRpb24gPSB2b2lkIDAgIT09IHRhcmdldEFsdGVybmF0aW9uID8gdGFyZ2V0QWx0ZXJuYXRpb24gOiBsbW50LmFsdGVybmF0aW9uLCBuZHhQb3MgPSB2b2lkIDAgIT09IGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gPyBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRlcm5hdGVOZHgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2b2lkIDAgPT09IGluZGV4UG9zIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJiAtMSAhPT0gbmR4UG9zICYmIChiZXN0TWF0Y2ggPSBsbW50LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcyksICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGJlc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZXN0TWF0Y2hBbHRJbmRleCA9IGJlc3RNYXRjaC5sb2NhdG9yW2Jlc3RNYXRjaC5hbHRlcm5hdGlvbl0sIGxvY2F0b3IgPSBiZXN0TWF0Y2gubWxvY1thbHRlcm5hdGVOZHhdIHx8IGJlc3RNYXRjaC5tbG9jW2Jlc3RNYXRjaEFsdEluZGV4XSB8fCBiZXN0TWF0Y2gubG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRvci5zbGljZSgodm9pZCAwICE9PSB0YXJnZXRBbHRlcm5hdGlvbiA/IHRhcmdldEFsdGVybmF0aW9uIDogYmVzdE1hdGNoLmFsdGVybmF0aW9uKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gdGFyZ2V0QWx0ZXJuYXRpb24gPyByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3Vic2V0T2Yoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV4cGFuZChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXhwYW5kZWQgPSBbXSwgc3RhcnQgPSAtMSwgZW5kLCBpID0gMCwgbCA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbDsgaSsrKSBpZiAoXCItXCIgPT09IHBhdHRlcm4uY2hhckF0KGkpKSBmb3IgKGVuZCA9IHBhdHRlcm4uY2hhckNvZGVBdChpICsgMSk7ICsrc3RhcnQgPCBlbmQ7ICkgZXhwYW5kZWQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0KSk7IGVsc2Ugc3RhcnQgPSBwYXR0ZXJuLmNoYXJDb2RlQXQoaSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkLnB1c2gocGF0dGVybi5jaGFyQXQoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBhbmRlZC5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXRjaC5kZWYgPT09IHRhcmdldC5tYXRjaC5uYXRpdmVEZWYgfHwgISghKG9wdHMucmVnZXggfHwgc291cmNlLm1hdGNoLmZuIGluc3RhbmNlb2YgUmVnRXhwICYmIHRhcmdldC5tYXRjaC5mbiBpbnN0YW5jZW9mIFJlZ0V4cCkgfHwgITAgPT09IHNvdXJjZS5tYXRjaC5zdGF0aWMgfHwgITAgPT09IHRhcmdldC5tYXRjaC5zdGF0aWMpICYmIC0xICE9PSBleHBhbmQodGFyZ2V0Lm1hdGNoLmZuLnRvU3RyaW5nKCkucmVwbGFjZSgvW1tcXF0vXS9nLCBcIlwiKSkuaW5kZXhPZihleHBhbmQoc291cmNlLm1hdGNoLmZuLnRvU3RyaW5nKCkucmVwbGFjZSgvW1tcXF0vXS9nLCBcIlwiKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXRpY0Nhbk1hdGNoRGVmaW5pdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwID09PSBzb3VyY2UubWF0Y2guc3RhdGljICYmICEwICE9PSB0YXJnZXQubWF0Y2guc3RhdGljICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYsIG1hc2tzZXQsIHBvcywgITEsIG9wdHMsICExKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRNZXJnZUxvY2F0b3JzKHRhcmdldE1hdGNoLCBhbHRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uTmR4ID0gdGFyZ2V0TWF0Y2guYWx0ZXJuYXRpb24sIHNob3VsZE1lcmdlID0gdm9pZCAwID09PSBhbHRNYXRjaCB8fCBhbHRlcm5hdGlvbk5keCA9PT0gYWx0TWF0Y2guYWx0ZXJuYXRpb24gJiYgLTEgPT09IHRhcmdldE1hdGNoLmxvY2F0b3JbYWx0ZXJuYXRpb25OZHhdLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdGVybmF0aW9uTmR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZE1lcmdlICYmIGFsdGVybmF0aW9uTmR4ID4gYWx0TWF0Y2guYWx0ZXJuYXRpb24pIGZvciAodmFyIGkgPSBhbHRNYXRjaC5hbHRlcm5hdGlvbjsgaSA8IGFsdGVybmF0aW9uTmR4OyBpKyspIGlmICh0YXJnZXRNYXRjaC5sb2NhdG9yW2ldICE9PSBhbHRNYXRjaC5sb2NhdG9yW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpb25OZHggPSBpLCBzaG91bGRNZXJnZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZE1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2gubWxvYyA9IHRhcmdldE1hdGNoLm1sb2MgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY05keCA9IHRhcmdldE1hdGNoLmxvY2F0b3JbYWx0ZXJuYXRpb25OZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGxvY05keCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbG9jTmR4ICYmIChsb2NOZHggPSBsb2NOZHguc3BsaXQoXCIsXCIpWzBdKSwgdm9pZCAwID09PSB0YXJnZXRNYXRjaC5tbG9jW2xvY05keF0gJiYgKHRhcmdldE1hdGNoLm1sb2NbbG9jTmR4XSA9IHRhcmdldE1hdGNoLmxvY2F0b3Iuc2xpY2UoKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGFsdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gYWx0TWF0Y2gubWxvYykgXCJzdHJpbmdcIiA9PSB0eXBlb2YgbmR4ICYmIChuZHggPSBuZHguc3BsaXQoXCIsXCIpWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHRhcmdldE1hdGNoLm1sb2NbbmR4XSAmJiAodGFyZ2V0TWF0Y2gubWxvY1tuZHhdID0gYWx0TWF0Y2gubWxvY1tuZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1hdGNoLmxvY2F0b3JbYWx0ZXJuYXRpb25OZHhdID0gT2JqZWN0LmtleXModGFyZ2V0TWF0Y2gubWxvYykuam9pbihcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNYXRjaC5hbHRlcm5hdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc1NhbWVMZXZlbCh0YXJnZXRNYXRjaCwgYWx0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRNYXRjaC5sb2NhdG9yLmxlbmd0aCAhPT0gYWx0TWF0Y2gubG9jYXRvci5sZW5ndGgpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGxvY05keCA9IHRhcmdldE1hdGNoLmFsdGVybmF0aW9uICsgMTsgbG9jTmR4IDwgdGFyZ2V0TWF0Y2gubG9jYXRvci5sZW5ndGg7IGxvY05keCsrKSBpZiAodGFyZ2V0TWF0Y2gubG9jYXRvcltsb2NOZHhdICE9PSBhbHRNYXRjaC5sb2NhdG9yW2xvY05keF0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdFBvcyA+IHBvcyArIG9wdHMuX21heFRlc3RQb3MpIHRocm93IFwiSW5wdXRtYXNrOiBUaGVyZSBpcyBwcm9iYWJseSBhbiBlcnJvciBpbiB5b3VyIG1hc2sgZGVmaW5pdGlvbiBvciBpbiB0aGUgY29kZS4gQ3JlYXRlIGFuIGlzc3VlIG9uIGdpdGh1YiB3aXRoIGFuIGV4YW1wbGUgb2YgdGhlIG1hc2sgeW91IGFyZSB1c2luZy4gXCIgKyBtYXNrc2V0Lm1hc2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgdm9pZCAwID09PSBtYXRjaC5tYXRjaGVzKSByZXR1cm4gbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGxvb3BOZHgucmV2ZXJzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sb2M6IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pLCAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gbWF0Y2gubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmlzR3JvdXAgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbbWFza1Rva2VuLm1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxXSwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsVG9rZW4gPSBtYXRjaCwgbXRjaHNOZHggPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXRjaCwgbmR4SW5pdGlhbGl6ZXIsIGxvb3BOZHgsIHF1YW50aWZpZXJSZWN1cnNlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbihtdGNoLCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10Y2hzTmR4IDw9IG5keCAmJiAobXRjaC5tYXRjaC5vcHRpb25hbGl0eSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGxhdGVzdE1hdGNoID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLm1hdGNoLCB2b2lkIDAgIT09IHF1YW50aWZpZXJSZWN1cnNlIHx8ICFpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIG9wdGlvbmFsVG9rZW4pKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFN0b3AgPSAhMCwgdGVzdFBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzQWx0ZXJuYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLCBtYWx0ZXJuYXRlTWF0Y2hlcyA9IFtdLCBtYWx0TWF0Y2hlcywgY3VycmVudE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKCksIGxvb3BOZHhDbnQgPSBsb29wTmR4Lmxlbmd0aCwgYWx0SW5kZXggPSAwIDwgbmR4SW5pdGlhbGl6ZXIubGVuZ3RoID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gYWx0SW5kZXggfHwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgYWx0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSB0ZXN0UG9zLCBuZHhJbml0aWFsaXplckNsb25lID0gbmR4SW5pdGlhbGl6ZXIuc2xpY2UoKSwgYWx0SW5kZXhBcnIgPSBbXSwgYW1uZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCkgYWx0SW5kZXhBcnIgPSBhbHRJbmRleC5zcGxpdChcIixcIik7IGVsc2UgZm9yIChhbW5keCA9IDA7IGFtbmR4IDwgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlcy5sZW5ndGg7IGFtbmR4KyspIGFsdEluZGV4QXJyLnB1c2goYW1uZHgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IG1hc2tzZXQuZXhjbHVkZXNbcG9zXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYWx0SW5kZXhBcnJDbG9uZSA9IGFsdEluZGV4QXJyLnNsaWNlKCksIGkgPSAwLCBleGwgPSBtYXNrc2V0LmV4Y2x1ZGVzW3Bvc10ubGVuZ3RoOyBpIDwgZXhsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhjbHVkZVNldCA9IG1hc2tzZXQuZXhjbHVkZXNbcG9zXVtpXS50b1N0cmluZygpLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wTmR4Lmxlbmd0aCA9PSBleGNsdWRlU2V0WzFdICYmIGFsdEluZGV4QXJyLnNwbGljZShhbHRJbmRleEFyci5pbmRleE9mKGV4Y2x1ZGVTZXRbMF0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT09IGFsdEluZGV4QXJyLmxlbmd0aCAmJiAoZGVsZXRlIG1hc2tzZXQuZXhjbHVkZXNbcG9zXSwgYWx0SW5kZXhBcnIgPSBhbHRJbmRleEFyckNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoITAgPT09IG9wdHMua2VlcFN0YXRpYyB8fCBpc0Zpbml0ZShwYXJzZUludChvcHRzLmtlZXBTdGF0aWMpKSAmJiBjdXJyZW50UG9zID49IG9wdHMua2VlcFN0YXRpYykgJiYgKGFsdEluZGV4QXJyID0gYWx0SW5kZXhBcnIuc2xpY2UoMCwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1bk1hdGNoZWRBbHRlcm5hdGlvbiA9ICExLCBuZHggPSAwOyBuZHggPCBhbHRJbmRleEFyci5sZW5ndGg7IG5keCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW5keCA9IHBhcnNlSW50KGFsdEluZGV4QXJyW25keF0pLCBtYXRjaGVzID0gW10sIG5keEluaXRpYWxpemVyID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYWx0SW5kZXggJiYgcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fCBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1thbW5keF0gJiYgaGFuZGxlTWF0Y2goYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1thbW5keF0sIFsgYW1uZHggXS5jb25jYXQobG9vcE5keCksIHF1YW50aWZpZXJSZWN1cnNlKSA/IG1hdGNoID0gITAgOiAwID09PSBuZHggJiYgKHVuTWF0Y2hlZEFsdGVybmF0aW9uID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCB0ZXN0UG9zID0gY3VycmVudFBvcywgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MSA9IDA7IG5keDEgPCBtYWx0TWF0Y2hlcy5sZW5ndGg7IG5keDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaCA9IG1hbHRNYXRjaGVzW25keDFdLCBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5tYXRjaC5qaXQgPSBhbHRNYXRjaC5tYXRjaC5qaXQgfHwgdW5NYXRjaGVkQWx0ZXJuYXRpb24sIGFsdE1hdGNoLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24gfHwgbG9vcE5keENudCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVyZ2VMb2NhdG9ycyhhbHRNYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MiA9IDA7IG5keDIgPCBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGg7IG5keDIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0TWF0Y2gyID0gbWFsdGVybmF0ZU1hdGNoZXNbbmR4Ml07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBhbHRJbmRleCB8fCB2b2lkIDAgIT09IGFsdE1hdGNoLmFsdGVybmF0aW9uICYmIGFsdEluZGV4QXJyLmluY2x1ZGVzKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWx0TWF0Y2gubWF0Y2gubmF0aXZlRGVmID09PSBhbHRNYXRjaDIubWF0Y2gubmF0aXZlRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoID0gITAsIHNldE1lcmdlTG9jYXRvcnMoYWx0TWF0Y2gyLCBhbHRNYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzZXRPZihhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lcmdlTG9jYXRvcnMoYWx0TWF0Y2gsIGFsdE1hdGNoMikgJiYgKGRyb3BNYXRjaCA9ICEwLCBtYWx0ZXJuYXRlTWF0Y2hlcy5zcGxpY2UobWFsdGVybmF0ZU1hdGNoZXMuaW5kZXhPZihhbHRNYXRjaDIpLCAwLCBhbHRNYXRjaCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3Vic2V0T2YoYWx0TWF0Y2gyLCBhbHRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXJnZUxvY2F0b3JzKGFsdE1hdGNoMiwgYWx0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRpY0Nhbk1hdGNoRGVmaW5pdGlvbihhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2FtZUxldmVsKGFsdE1hdGNoLCBhbHRNYXRjaDIpIHx8IHZvaWQgMCAhPT0gZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zLmtlZXBTdGF0aWMgPyBzZXRNZXJnZUxvY2F0b3JzKGFsdE1hdGNoLCBhbHRNYXRjaDIpICYmIChkcm9wTWF0Y2ggPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuc3BsaWNlKG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSwgMCwgYWx0TWF0Y2gpKSA6IG9wdHMua2VlcFN0YXRpYyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCB8fCBtYWx0ZXJuYXRlTWF0Y2hlcy5wdXNoKGFsdE1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gY3VycmVudE1hdGNoZXMuY29uY2F0KG1hbHRlcm5hdGVNYXRjaGVzKSwgdGVzdFBvcyA9IHBvcywgaW5zZXJ0U3RvcCA9IDAgPCBtYXRjaGVzLmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gMCA8IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCwgbmR4SW5pdGlhbGl6ZXIgPSBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG1hdGNoID0gaGFuZGxlTWF0Y2goYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1thbHRJbmRleF0gfHwgbWFza1Rva2VuLm1hdGNoZXNbYWx0SW5kZXhdLCBbIGFsdEluZGV4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzUXVhbnRpZmllciAmJiBxdWFudGlmaWVyUmVjdXJzZSAhPT0gbWFza1Rva2VuLm1hdGNoZXNbbWFza1Rva2VuLm1hdGNoZXMuaW5kZXhPZihtYXRjaCkgLSAxXSkgZm9yICh2YXIgcXQgPSBtYXRjaCwgcW5keCA9IDAgPCBuZHhJbml0aWFsaXplci5sZW5ndGggPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogMDsgcW5keCA8IChpc05hTihxdC5xdWFudGlmaWVyLm1heCkgPyBxbmR4ICsgMSA6IHF0LnF1YW50aWZpZXIubWF4KSAmJiB0ZXN0UG9zIDw9IHBvczsgcW5keCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuR3JvdXAgPSBtYXNrVG9rZW4ubWF0Y2hlc1ttYXNrVG9rZW4ubWF0Y2hlcy5pbmRleE9mKHF0KSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IGhhbmRsZU1hdGNoKHRva2VuR3JvdXAsIFsgcW5keCBdLmNvbmNhdChsb29wTmR4KSwgdG9rZW5Hcm91cCksIG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+PSBxdC5xdWFudGlmaWVyLm1pbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdE1hdGNoLmppdCA9IChxbmR4IHx8IDEpICogdG9rZW5Hcm91cC5tYXRjaGVzLmluZGV4T2YobGF0ZXN0TWF0Y2gpID49IHF0LnF1YW50aWZpZXIuaml0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFN0b3AgPSAhMCwgdGVzdFBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXRlc3RNYXRjaC5qaXQgJiYgKG1hc2tzZXQuaml0T2Zmc2V0W3Bvc10gPSB0b2tlbkdyb3VwLm1hdGNoZXMubGVuZ3RoIC0gdG9rZW5Hcm91cC5tYXRjaGVzLmluZGV4T2YobGF0ZXN0TWF0Y2gpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXRjaCwgbmR4SW5pdGlhbGl6ZXIsIGxvb3BOZHgsIHF1YW50aWZpZXJSZWN1cnNlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdGVzdFBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0bmR4ID0gMCA8IG5keEluaXRpYWxpemVyLmxlbmd0aCA/IG5keEluaXRpYWxpemVyLnNoaWZ0KCkgOiAwOyB0bmR4IDwgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoOyB0bmR4KyspIGlmICghMCAhPT0gbWFza1Rva2VuLm1hdGNoZXNbdG5keF0uaXNRdWFudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGhhbmRsZU1hdGNoKG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLCBbIHRuZHggXS5jb25jYXQobG9vcE5keCksIHF1YW50aWZpZXJSZWN1cnNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIHRlc3RQb3MgPT09IHBvcykgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zIDwgdGVzdFBvcykgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gbWVyZ2VMb2NhdG9ycyhwb3MsIHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0b3IgPSBbXSwgYWx0ZXJuYXRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGVzdHMpIHx8ICh0ZXN0cyA9IFsgdGVzdHMgXSksIDAgPCB0ZXN0cy5sZW5ndGggJiYgKHZvaWQgMCA9PT0gdGVzdHNbMF0uYWx0ZXJuYXRpb24gfHwgITAgPT09IG9wdHMua2VlcFN0YXRpYyA/IChsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrLCBwb3MsIHRlc3RzLnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgMCA9PT0gbG9jYXRvci5sZW5ndGggJiYgKGxvY2F0b3IgPSB0ZXN0c1swXS5sb2NhdG9yLnNsaWNlKCkpKSA6IHRlc3RzLmZvckVhY2goZnVuY3Rpb24odHN0KSB7XG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IHRzdC5kZWYgJiYgKDAgPT09IGxvY2F0b3IubGVuZ3RoID8gKGFsdGVybmF0aW9uID0gdHN0LmFsdGVybmF0aW9uLCBsb2NhdG9yID0gdHN0LmxvY2F0b3Iuc2xpY2UoKSkgOiB0c3QubG9jYXRvclthbHRlcm5hdGlvbl0gJiYgLTEgPT09IGxvY2F0b3JbYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZih0c3QubG9jYXRvclthbHRlcm5hdGlvbl0pICYmIChsb2NhdG9yW2FsdGVybmF0aW9uXSArPSBcIixcIiArIHRzdC5sb2NhdG9yW2FsdGVybmF0aW9uXSkpO1xuICAgICAgICAgICAgICAgIH0pKSwgbG9jYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgtMSA8IHBvcyAmJiAodm9pZCAwID09PSBpbnB1dG1hc2subWF4TGVuZ3RoIHx8IHBvcyA8IGlucHV0bWFzay5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gbmR4SW50bHpyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByZXZpb3VzUG9zID0gcG9zIC0gMSwgdGVzdDsgdm9pZCAwID09PSAodGVzdCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHJldmlvdXNQb3NdIHx8IG1hc2tzZXQudGVzdHNbcHJldmlvdXNQb3NdKSAmJiAtMSA8IHByZXZpb3VzUG9zOyApIHByZXZpb3VzUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdGVzdCAmJiAtMSA8IHByZXZpb3VzUG9zICYmIChuZHhJbml0aWFsaXplciA9IG1lcmdlTG9jYXRvcnMocHJldmlvdXNQb3MsIHRlc3QpLCBcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW5pdGlhbGl6ZXIuam9pbihcIlwiKSwgdGVzdFBvcyA9IHByZXZpb3VzUG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tzZXQudGVzdHNbcG9zXSAmJiBtYXNrc2V0LnRlc3RzW3Bvc11bMF0uY2QgPT09IGNhY2hlRGVwZW5kZW5jeSkgcmV0dXJuIG1hc2tzZXQudGVzdHNbcG9zXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtdG5keCA9IG5keEluaXRpYWxpemVyLnNoaWZ0KCk7IG10bmR4IDwgbWFza1Rva2Vucy5sZW5ndGg7IG10bmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWFza1Rva2Vuc1ttdG5keF0sIG5keEluaXRpYWxpemVyLCBbIG10bmR4IF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgdGVzdFBvcyA9PT0gcG9zIHx8IHBvcyA8IHRlc3RQb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwICE9PSBtYXRjaGVzLmxlbmd0aCAmJiAhaW5zZXJ0U3RvcCB8fCBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgIGZuOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9jYXRvcjogW10sXG4gICAgICAgICAgICAgICAgbWxvYzoge30sXG4gICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxuICAgICAgICAgICAgfSksIHZvaWQgMCAhPT0gbmR4SW50bHpyICYmIG1hc2tzZXQudGVzdHNbcG9zXSA/ICQuZXh0ZW5kKCEwLCBbXSwgbWF0Y2hlcykgOiAobWFza3NldC50ZXN0c1twb3NdID0gJC5leHRlbmQoITAsIFtdLCBtYXRjaGVzKSwgXG4gICAgICAgICAgICBtYXNrc2V0LnRlc3RzW3Bvc10pO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLmRldGVybWluZVRlc3RUZW1wbGF0ZSA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSwgZXhwb3J0cy5nZXREZWNpc2lvblRha2VyID0gZ2V0RGVjaXNpb25UYWtlciwgXG4gICAgICAgIGV4cG9ydHMuZ2V0TWFza1RlbXBsYXRlID0gZ2V0TWFza1RlbXBsYXRlLCBleHBvcnRzLmdldFBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIsIFxuICAgICAgICBleHBvcnRzLmdldFRlc3QgPSBnZXRUZXN0LCBleHBvcnRzLmdldFRlc3RzID0gZ2V0VGVzdHMsIGV4cG9ydHMuZ2V0VGVzdFRlbXBsYXRlID0gZ2V0VGVzdFRlbXBsYXRlO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlLCBleHBvcnRzLmNoZWNrQWx0ZXJuYXRpb25NYXRjaCA9IGNoZWNrQWx0ZXJuYXRpb25NYXRjaCwgXG4gICAgICAgIGV4cG9ydHMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGUsIGV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQsIGV4cG9ydHMucmVmcmVzaEZyb21CdWZmZXIgPSByZWZyZXNoRnJvbUJ1ZmZlciwgXG4gICAgICAgIGV4cG9ydHMucmV2YWxpZGF0ZU1hc2sgPSByZXZhbGlkYXRlTWFzaywgZXhwb3J0cy5oYW5kbGVSZW1vdmUgPSBoYW5kbGVSZW1vdmU7XG4gICAgICAgIHZhciBfdmFsaWRhdGlvblRlc3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKSwgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfcG9zaXRpb25pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfZXZlbnRoYW5kbGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhbHRlcm5hdGUobWFza1BvcywgYywgc3RyaWN0LCBmcm9tSXNWYWxpZCwgckFsdFBvcywgc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgb3B0cyA9IHRoaXMub3B0cywgbWFza3NldCA9IHRoaXMubWFza3NldCwgdmFsaWRQc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zKSwgdHN0Q2xvbmUgPSAkLmV4dGVuZCghMCwge30sIG1hc2tzZXQudGVzdHMpLCBsYXN0QWx0LCBhbHRlcm5hdGlvbiwgaXNWYWxpZFJzbHQgPSAhMSwgcmV0dXJuUnNsdCA9ICExLCBhbHRQb3MsIHByZXZBbHRQb3MsIGksIHZhbGlkUG9zLCBkZWNpc2lvblBvcywgbEFsdFBvcyA9IHZvaWQgMCAhPT0gckFsdFBvcyA/IHJBbHRQb3MgOiBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzKSwgbmV4dFBvcywgaW5wdXQsIGJlZ2luLCBlbmQ7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIChiZWdpbiA9IHNlbGVjdGlvbi5iZWdpbiwgZW5kID0gc2VsZWN0aW9uLmVuZCwgc2VsZWN0aW9uLmJlZ2luID4gc2VsZWN0aW9uLmVuZCAmJiAoYmVnaW4gPSBzZWxlY3Rpb24uZW5kLCBcbiAgICAgICAgICAgIGVuZCA9IHNlbGVjdGlvbi5iZWdpbikpLCAtMSA9PT0gbEFsdFBvcyAmJiB2b2lkIDAgPT09IHJBbHRQb3MpIGxhc3RBbHQgPSAwLCBwcmV2QWx0UG9zID0gX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0LmNhbGwodGhpcywgbGFzdEFsdCksIFxuICAgICAgICAgICAgYWx0ZXJuYXRpb24gPSBwcmV2QWx0UG9zLmFsdGVybmF0aW9uOyBlbHNlIGZvciAoOzAgPD0gbEFsdFBvczsgbEFsdFBvcy0tKSBpZiAoYWx0UG9zID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tsQWx0UG9zXSwgXG4gICAgICAgICAgICBhbHRQb3MgJiYgdm9pZCAwICE9PSBhbHRQb3MuYWx0ZXJuYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldkFsdFBvcyAmJiBwcmV2QWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXSAhPT0gYWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgbGFzdEFsdCA9IGxBbHRQb3MsIGFsdGVybmF0aW9uID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XS5hbHRlcm5hdGlvbiwgcHJldkFsdFBvcyA9IGFsdFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGFsdGVybmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KSwgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc10gPSBtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXSB8fCBbXSwgXG4gICAgICAgICAgICAgICAgITAgIT09IG1hc2tQb3MgJiYgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc10ucHVzaCgoMCwgX3ZhbGlkYXRpb25UZXN0cy5nZXREZWNpc2lvblRha2VyKShwcmV2QWx0UG9zKSArIFwiOlwiICsgcHJldkFsdFBvcy5hbHRlcm5hdGlvbik7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkSW5wdXRzID0gW10sIHJlc3VsdFBvcyA9IC0xO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGRlY2lzaW9uUG9zOyBpIDwgX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcywgdm9pZCAwLCAhMCkgKyAxOyBpKyspIC0xID09PSByZXN1bHRQb3MgJiYgbWFza1BvcyA8PSBpICYmIHZvaWQgMCAhPT0gYyAmJiAodmFsaWRJbnB1dHMucHVzaChjKSwgXG4gICAgICAgICAgICAgICAgcmVzdWx0UG9zID0gdmFsaWRJbnB1dHMubGVuZ3RoIC0gMSksIHZhbGlkUG9zID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tpXSwgdmFsaWRQb3MgJiYgITAgIT09IHZhbGlkUG9zLmdlbmVyYXRlZElucHV0ICYmICh2b2lkIDAgPT09IHNlbGVjdGlvbiB8fCBpIDwgYmVnaW4gfHwgZW5kIDw9IGkpICYmIHZhbGlkSW5wdXRzLnB1c2godmFsaWRQb3MuaW5wdXQpLCBcbiAgICAgICAgICAgICAgICBkZWxldGUgbWFza3NldC52YWxpZFBvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBmb3IgKC0xID09PSByZXN1bHRQb3MgJiYgdm9pZCAwICE9PSBjICYmICh2YWxpZElucHV0cy5wdXNoKGMpLCByZXN1bHRQb3MgPSB2YWxpZElucHV0cy5sZW5ndGggLSAxKTsgdm9pZCAwICE9PSBtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXSAmJiBtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXS5sZW5ndGggPCAxMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobWFza3NldC50ZXN0cyA9IHt9LCBfcG9zaXRpb25pbmcucmVzZXRNYXNrU2V0LmNhbGwodGhpcywgITApLCBpc1ZhbGlkUnNsdCA9ICEwLCBcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7IGkgPCB2YWxpZElucHV0cy5sZW5ndGggJiYgKG5leHRQb3MgPSBpc1ZhbGlkUnNsdC5jYXJldCB8fCBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzLCB2b2lkIDAsICEwKSArIDEsIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHZhbGlkSW5wdXRzW2ldLCBpc1ZhbGlkUnNsdCA9IGlzVmFsaWQuY2FsbCh0aGlzLCBuZXh0UG9zLCBpbnB1dCwgITEsIGZyb21Jc1ZhbGlkLCAhMCkpOyBpKyspIGkgPT09IHJlc3VsdFBvcyAmJiAocmV0dXJuUnNsdCA9IGlzVmFsaWRSc2x0KSwgXG4gICAgICAgICAgICAgICAgICAgIDEgPT0gbWFza1BvcyAmJiBpc1ZhbGlkUnNsdCAmJiAocmV0dXJuUnNsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zOiBpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFJzbHQpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Bvc2l0aW9uaW5nLnJlc2V0TWFza1NldC5jYWxsKHRoaXMpLCBwcmV2QWx0UG9zID0gX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0LmNhbGwodGhpcywgZGVjaXNpb25Qb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgbWFza3NldC52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRQc0Nsb25lKSwgbWFza3NldC50ZXN0cyA9ICQuZXh0ZW5kKCEwLCB7fSwgdHN0Q2xvbmUpLCBcbiAgICAgICAgICAgICAgICAgICAgIW1hc2tzZXQuZXhjbHVkZXNbZGVjaXNpb25Qb3NdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Sc2x0ID0gYWx0ZXJuYXRlLmNhbGwodGhpcywgbWFza1BvcywgYywgc3RyaWN0LCBmcm9tSXNWYWxpZCwgZGVjaXNpb25Qb3MgLSAxLCBzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2lzaW9uVGFrZXIgPSAoMCwgX3ZhbGlkYXRpb25UZXN0cy5nZXREZWNpc2lvblRha2VyKShwcmV2QWx0UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXS5pbmRleE9mKGRlY2lzaW9uVGFrZXIgKyBcIjpcIiArIHByZXZBbHRQb3MuYWx0ZXJuYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Sc2x0ID0gYWx0ZXJuYXRlLmNhbGwodGhpcywgbWFza1BvcywgYywgc3RyaWN0LCBmcm9tSXNWYWxpZCwgZGVjaXNpb25Qb3MgLSAxLCBzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXS5wdXNoKGRlY2lzaW9uVGFrZXIgKyBcIjpcIiArIHByZXZBbHRQb3MuYWx0ZXJuYXRpb24pLCBcbiAgICAgICAgICAgICAgICAgICAgaSA9IGRlY2lzaW9uUG9zOyBpIDwgX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcywgdm9pZCAwLCAhMCkgKyAxOyBpKyspIGRlbGV0ZSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXR1cm5Sc2x0ICYmICExID09PSBvcHRzLmtlZXBTdGF0aWMgfHwgZGVsZXRlIG1hc2tzZXQuZXhjbHVkZXNbZGVjaXNpb25Qb3NdLCBcbiAgICAgICAgICAgIHJldHVyblJzbHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FzaW5nKGVsZW0sIHRlc3QsIHBvcykge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB0aGlzLm9wdHMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMuY2FzaW5nIHx8IHRlc3QuY2FzaW5nKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgICAgICB2YXIgcG9zQmVmb3JlID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgLSAxXTtcbiAgICAgICAgICAgICAgICBlbGVtID0gMCA9PT0gcG9zIHx8IHBvc0JlZm9yZSAmJiBwb3NCZWZvcmUuaW5wdXQgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoX2tleWNvZGUuZGVmYXVsdC5TUEFDRSkgPyBlbGVtLnRvVXBwZXJDYXNlKCkgOiBlbGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBvcHRzLmNhc2luZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChtYXNrc2V0LnZhbGlkUG9zaXRpb25zKSwgZWxlbSA9IG9wdHMuY2FzaW5nLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQWx0ZXJuYXRpb25NYXRjaChhbHRBcnIxLCBhbHRBcnIyLCBuYSkge1xuICAgICAgICAgICAgZm9yICh2YXIgb3B0cyA9IHRoaXMub3B0cywgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksIGlzTWF0Y2ggPSAhMSwgbmFBcnIgPSB2b2lkIDAgIT09IG5hID8gbmEuc3BsaXQoXCIsXCIpIDogW10sIG5hTmR4LCBpID0gMDsgaSA8IG5hQXJyLmxlbmd0aDsgaSsrKSAtMSAhPT0gKG5hTmR4ID0gYWx0QXJyMS5pbmRleE9mKG5hQXJyW2ldKSkgJiYgYWx0QXJyMS5zcGxpY2UobmFOZHgsIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgYWxuZHggPSAwOyBhbG5keCA8IGFsdEFycjEubGVuZ3RoOyBhbG5keCsrKSBpZiAoYWx0QXJyQy5pbmNsdWRlcyhhbHRBcnIxW2FsbmR4XSkpIHtcbiAgICAgICAgICAgICAgICBpc01hdGNoID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNNYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmUoaW5wdXQsIGssIHBvcywgc3RyaWN0LCBmcm9tSXNWYWxpZCkge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQsIG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgICAgICAgICBpZiAoKG9wdHMubnVtZXJpY0lucHV0IHx8IHRoaXMuaXNSVEwpICYmIChrID09PSBfa2V5Y29kZS5kZWZhdWx0LkJBQ0tTUEFDRSA/IGsgPSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSA6IGsgPT09IF9rZXljb2RlLmRlZmF1bHQuREVMRVRFICYmIChrID0gX2tleWNvZGUuZGVmYXVsdC5CQUNLU1BBQ0UpLCBcbiAgICAgICAgICAgIHRoaXMuaXNSVEwpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlbmQgPSBwb3MuZW5kO1xuICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBwb3MuYmVnaW4sIHBvcy5iZWdpbiA9IHBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbHZwID0gX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcywgdm9pZCAwLCAhMCksIG9mZnNldDtcbiAgICAgICAgICAgIGlmIChwb3MuZW5kID49IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzKS5sZW5ndGggJiYgbHZwID49IHBvcy5lbmQgJiYgKHBvcy5lbmQgPSBsdnAgKyAxKSwgXG4gICAgICAgICAgICBrID09PSBfa2V5Y29kZS5kZWZhdWx0LkJBQ0tTUEFDRSA/IHBvcy5lbmQgLSBwb3MuYmVnaW4gPCAxICYmIChwb3MuYmVnaW4gPSBfcG9zaXRpb25pbmcuc2Vla1ByZXZpb3VzLmNhbGwodGhpcywgcG9zLmJlZ2luKSkgOiBrID09PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSAmJiBwb3MuYmVnaW4gPT09IHBvcy5lbmQgJiYgKHBvcy5lbmQgPSBfcG9zaXRpb25pbmcuaXNNYXNrLmNhbGwodGhpcywgcG9zLmVuZCwgITAsICEwKSA/IHBvcy5lbmQgKyAxIDogX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwodGhpcywgcG9zLmVuZCkgKyAxKSwgXG4gICAgICAgICAgICAhMSAhPT0gKG9mZnNldCA9IHJldmFsaWRhdGVNYXNrLmNhbGwodGhpcywgcG9zKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoITAgIT09IHN0cmljdCAmJiAhMSAhPT0gb3B0cy5rZWVwU3RhdGljIHx8IG51bGwgIT09IG9wdHMucmVnZXggJiYgLTEgIT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKHRoaXMsIHBvcy5iZWdpbikubWF0Y2guZGVmLmluZGV4T2YoXCJ8XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhbHRlcm5hdGUuY2FsbCh0aGlzLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSB2b2lkIDAgIT09IHJlc3VsdC5jYXJldCA/IHJlc3VsdC5jYXJldCA6IHJlc3VsdC5wb3MgPyBfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbCh0aGlzLCByZXN1bHQucG9zLmJlZ2luID8gcmVzdWx0LnBvcy5iZWdpbiA6IHJlc3VsdC5wb3MpIDogX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcywgLTEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChrICE9PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSB8fCBwb3MuYmVnaW4gPiBuZXdQb3MpICYmIHBvcy5iZWdpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAhMCAhPT0gc3RyaWN0ICYmIChtYXNrc2V0LnAgPSBrID09PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSA/IHBvcy5iZWdpbiArIG9mZnNldCA6IHBvcy5iZWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNDb21wbGV0ZShidWZmZXIpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLCBvcHRzID0gdGhpcy5vcHRzLCBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb3B0cy5pc0NvbXBsZXRlKSByZXR1cm4gb3B0cy5pc0NvbXBsZXRlKGJ1ZmZlciwgb3B0cyk7XG4gICAgICAgICAgICBpZiAoXCIqXCIgIT09IG9wdHMucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlID0gITEsIGxycCA9IF9wb3NpdGlvbmluZy5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKHRoaXMsICEwKSwgYW1sID0gX3Bvc2l0aW9uaW5nLnNlZWtQcmV2aW91cy5jYWxsKHRoaXMsIGxycC5sKTtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBscnAuZGVmIHx8IGxycC5kZWYubmV3QmxvY2tNYXJrZXIgfHwgbHJwLmRlZi5vcHRpb25hbGl0eSB8fCBscnAuZGVmLm9wdGlvbmFsUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhbWw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QgPSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3RUZW1wbGF0ZS5jYWxsKHRoaXMsIGkpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSB0ZXN0LnN0YXRpYyAmJiB2b2lkIDAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbaV0gJiYgITAgIT09IHRlc3Qub3B0aW9uYWxpdHkgJiYgITAgIT09IHRlc3Qub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB0ZXN0LnN0YXRpYyAmJiBidWZmZXJbaV0gIT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0UGxhY2Vob2xkZXIuY2FsbCh0aGlzLCBpLCB0ZXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQocG9zLCBjLCBzdHJpY3QsIGZyb21Jc1ZhbGlkLCBmcm9tQWx0ZXJuYXRlLCB2YWxpZGF0ZU9ubHksIGZyb21DaGVja3ZhbCkge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsICQgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIG9wdHMgPSB0aGlzLm9wdHMsIGVsID0gaW5wdXRtYXNrLmVsLCBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQ7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1NlbGVjdGlvbihwb3NPYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRtYXNrLmlzUlRMID8gMSA8IHBvc09iai5iZWdpbiAtIHBvc09iai5lbmQgfHwgcG9zT2JqLmJlZ2luIC0gcG9zT2JqLmVuZCA9PSAxIDogMSA8IHBvc09iai5lbmQgLSBwb3NPYmouYmVnaW4gfHwgcG9zT2JqLmVuZCAtIHBvc09iai5iZWdpbiA9PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaWN0ID0gITAgPT09IHN0cmljdDtcbiAgICAgICAgICAgIHZhciBtYXNrUG9zID0gcG9zO1xuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0NvbW1hbmRPYmplY3QoY29tbWFuZE9iaikge1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGNvbW1hbmRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gY29tbWFuZE9iai5yZW1vdmUgJiYgKEFycmF5LmlzQXJyYXkoY29tbWFuZE9iai5yZW1vdmUpIHx8IChjb21tYW5kT2JqLnJlbW92ZSA9IFsgY29tbWFuZE9iai5yZW1vdmUgXSksIFxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kT2JqLnJlbW92ZS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnBvcyAtIGEucG9zO1xuICAgICAgICAgICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGxtbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGVNYXNrLmNhbGwoaW5wdXRtYXNrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGxtbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBsbW50ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBjb21tYW5kT2JqLnJlbW92ZSA9IHZvaWQgMCksIHZvaWQgMCAhPT0gY29tbWFuZE9iai5pbnNlcnQgJiYgKEFycmF5LmlzQXJyYXkoY29tbWFuZE9iai5pbnNlcnQpIHx8IChjb21tYW5kT2JqLmluc2VydCA9IFsgY29tbWFuZE9iai5pbnNlcnQgXSksIFxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kT2JqLmluc2VydC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnBvcyAtIGIucG9zO1xuICAgICAgICAgICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGxtbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGxtbnQuYyAmJiBpc1ZhbGlkLmNhbGwoaW5wdXRtYXNrLCBsbW50LnBvcywgbG1udC5jLCB2b2lkIDAgPT09IGxtbnQuc3RyaWN0IHx8IGxtbnQuc3RyaWN0LCB2b2lkIDAgIT09IGxtbnQuZnJvbUlzVmFsaWQgPyBsbW50LmZyb21Jc1ZhbGlkIDogZnJvbUlzVmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KSwgY29tbWFuZE9iai5pbnNlcnQgPSB2b2lkIDApLCBjb21tYW5kT2JqLnJlZnJlc2hGcm9tQnVmZmVyICYmIGNvbW1hbmRPYmouYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IGNvbW1hbmRPYmoucmVmcmVzaEZyb21CdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlci5jYWxsKGlucHV0bWFzaywgITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIGNvbW1hbmRPYmouYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kT2JqLnJlZnJlc2hGcm9tQnVmZmVyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gY29tbWFuZE9iai5yZXdyaXRlUG9zaXRpb24gJiYgKG1hc2tQb3MgPSBjb21tYW5kT2JqLnJld3JpdGVQb3NpdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRPYmogPSAhMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tYW5kT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX2lzVmFsaWQocG9zaXRpb24sIGMsIHN0cmljdCkge1xuICAgICAgICAgICAgICAgIHZhciByc2x0ID0gITE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdHMuY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uKS5ldmVyeShmdW5jdGlvbih0c3QsIG5keCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IHRzdC5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2ssICEwKSwgcnNsdCA9IG51bGwgIT0gdGVzdC5mbiA/IHRlc3QuZm4udGVzdChjLCBtYXNrc2V0LCBwb3NpdGlvbiwgc3RyaWN0LCBvcHRzLCBpc1NlbGVjdGlvbihwb3MpKSA6IChjID09PSB0ZXN0LmRlZiB8fCBjID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpICYmIFwiXCIgIT09IHRlc3QuZGVmICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGM6IF92YWxpZGF0aW9uVGVzdHMuZ2V0UGxhY2Vob2xkZXIuY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uLCB0ZXN0LCAhMCkgfHwgdGVzdC5kZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0sICExID09PSByc2x0KSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdm9pZCAwICE9PSByc2x0LmMgPyByc2x0LmMgOiBjLCB2YWxpZGF0ZWRQb3MgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0gPSBlbGVtID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgJiYgITAgPT09IHRlc3Quc3RhdGljID8gX3ZhbGlkYXRpb25UZXN0cy5nZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgcG9zaXRpb24sIHRlc3QsICEwKSB8fCB0ZXN0LmRlZiA6IGVsZW0sIFxuICAgICAgICAgICAgICAgICAgICByc2x0ID0gcHJvY2Vzc0NvbW1hbmRPYmplY3QocnNsdCksICEwICE9PSByc2x0ICYmIHZvaWQgMCAhPT0gcnNsdC5wb3MgJiYgcnNsdC5wb3MgIT09IHBvc2l0aW9uICYmICh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcyksIFxuICAgICAgICAgICAgICAgICAgICAhMCAhPT0gcnNsdCAmJiB2b2lkIDAgPT09IHJzbHQucG9zICYmIHZvaWQgMCA9PT0gcnNsdC5jIHx8ICExID09PSByZXZhbGlkYXRlTWFzay5jYWxsKGlucHV0bWFzaywgcG9zLCAkLmV4dGVuZCh7fSwgdHN0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2FzaW5nLmNhbGwoaW5wdXRtYXNrLCBlbGVtLCB0ZXN0LCB2YWxpZGF0ZWRQb3MpXG4gICAgICAgICAgICAgICAgICAgIH0pLCBmcm9tSXNWYWxpZCwgdmFsaWRhdGVkUG9zKSAmJiAocnNsdCA9ICExKSwgITE7XG4gICAgICAgICAgICAgICAgfSksIHJzbHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDAgIT09IHBvcy5iZWdpbiAmJiAobWFza1BvcyA9IGlucHV0bWFzay5pc1JUTCA/IHBvcy5lbmQgOiBwb3MuYmVnaW4pO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICEwLCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKCEwLCB7fSwgbWFza3NldC52YWxpZFBvc2l0aW9ucyk7XG4gICAgICAgICAgICBpZiAoITEgPT09IG9wdHMua2VlcFN0YXRpYyAmJiB2b2lkIDAgIT09IG1hc2tzZXQuZXhjbHVkZXNbbWFza1Bvc10gJiYgITAgIT09IGZyb21BbHRlcm5hdGUgJiYgITAgIT09IGZyb21Jc1ZhbGlkKSBmb3IgKHZhciBpID0gbWFza1BvczsgaSA8IChpbnB1dG1hc2suaXNSVEwgPyBwb3MuYmVnaW4gOiBwb3MuZW5kKTsgaSsrKSB2b2lkIDAgIT09IG1hc2tzZXQuZXhjbHVkZXNbaV0gJiYgKG1hc2tzZXQuZXhjbHVkZXNbaV0gPSB2b2lkIDAsIFxuICAgICAgICAgICAgZGVsZXRlIG1hc2tzZXQudGVzdHNbaV0pO1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb3B0cy5wcmVWYWxpZGF0aW9uICYmICEwICE9PSBmcm9tSXNWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5ICYmIChyZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24uY2FsbChlbCwgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksIG1hc2tQb3MsIGMsIGlzU2VsZWN0aW9uKHBvcyksIG9wdHMsIG1hc2tzZXQsIHBvcywgc3RyaWN0IHx8IGZyb21BbHRlcm5hdGUpLCBcbiAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3NDb21tYW5kT2JqZWN0KHJlc3VsdCkpLCAhMCA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaW5wdXRtYXNrLm1heExlbmd0aCB8fCBtYXNrUG9zIDwgaW5wdXRtYXNrLm1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gX2lzVmFsaWQobWFza1BvcywgYywgc3RyaWN0KSwgKCFzdHJpY3QgfHwgITAgPT09IGZyb21Jc1ZhbGlkKSAmJiAhMSA9PT0gcmVzdWx0ICYmICEwICE9PSB2YWxpZGF0ZU9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UG9zVmFsaWQgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW21hc2tQb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UG9zVmFsaWQgfHwgITAgIT09IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5zdGF0aWMgfHwgY3VycmVudFBvc1ZhbGlkLm1hdGNoLmRlZiAhPT0gYyAmJiBjICE9PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5pbnNlcnRNb2RlIHx8IHZvaWQgMCA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIG1hc2tQb3MpXSB8fCBwb3MuZW5kID4gbWFza1Bvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2tpcCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFza3NldC5qaXRPZmZzZXRbbWFza1Bvc10gJiYgdm9pZCAwID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW19wb3NpdGlvbmluZy5zZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgbWFza1BvcyldICYmIChyZXN1bHQgPSBpc1ZhbGlkLmNhbGwoaW5wdXRtYXNrLCBtYXNrUG9zICsgbWFza3NldC5qaXRPZmZzZXRbbWFza1Bvc10sIGMsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExICE9PSByZXN1bHQgJiYgKCEwICE9PSBmcm9tQWx0ZXJuYXRlICYmIChyZXN1bHQuY2FyZXQgPSBtYXNrUG9zKSwgc2tpcCA9ICEwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MuZW5kID4gbWFza1BvcyAmJiAobWFza3NldC52YWxpZFBvc2l0aW9uc1ttYXNrUG9zXSA9IHZvaWQgMCksICFza2lwICYmICFfcG9zaXRpb25pbmcuaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBtYXNrUG9zLCBvcHRzLmtlZXBTdGF0aWMgJiYgMCA9PT0gbWFza1BvcykpIGZvciAodmFyIG5Qb3MgPSBtYXNrUG9zICsgMSwgc25Qb3MgPSBfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIG1hc2tQb3MsICExLCAwICE9PSBtYXNrUG9zKTsgblBvcyA8PSBzblBvczsgblBvcysrKSBpZiAocmVzdWx0ID0gX2lzVmFsaWQoblBvcywgYywgc3RyaWN0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExICE9PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRyYWNrYmFja1Bvc2l0aW9ucy5jYWxsKGlucHV0bWFzaywgbWFza1Bvcywgdm9pZCAwICE9PSByZXN1bHQucG9zID8gcmVzdWx0LnBvcyA6IG5Qb3MpIHx8IHJlc3VsdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrUG9zID0gblBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBtYXNrUG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXN1bHQgPSAhMTtcbiAgICAgICAgICAgICAgICAhMSAhPT0gcmVzdWx0IHx8ICFvcHRzLmtlZXBTdGF0aWMgfHwgIWlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spKSAmJiAwICE9PSBtYXNrUG9zIHx8IHN0cmljdCB8fCAhMCA9PT0gZnJvbUFsdGVybmF0ZSA/IGlzU2VsZWN0aW9uKHBvcykgJiYgbWFza3NldC50ZXN0c1ttYXNrUG9zXSAmJiAxIDwgbWFza3NldC50ZXN0c1ttYXNrUG9zXS5sZW5ndGggJiYgb3B0cy5rZWVwU3RhdGljICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21BbHRlcm5hdGUgJiYgKHJlc3VsdCA9IGFsdGVybmF0ZS5jYWxsKGlucHV0bWFzaywgITApKSA6IHJlc3VsdCA9IGFsdGVybmF0ZS5jYWxsKGlucHV0bWFzaywgbWFza1BvcywgYywgc3RyaWN0LCBmcm9tSXNWYWxpZCwgdm9pZCAwLCBwb3MpLCBcbiAgICAgICAgICAgICAgICAhMCA9PT0gcmVzdWx0ICYmIChyZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvczogbWFza1Bvc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb3B0cy5wb3N0VmFsaWRhdGlvbiAmJiAhMCAhPT0gZnJvbUlzVmFsaWQgJiYgITAgIT09IHZhbGlkYXRlT25seSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3N0UmVzdWx0ID0gb3B0cy5wb3N0VmFsaWRhdGlvbi5jYWxsKGVsLCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrLCAhMCksIHZvaWQgMCAhPT0gcG9zLmJlZ2luID8gaW5wdXRtYXNrLmlzUlRMID8gcG9zLmVuZCA6IHBvcy5iZWdpbiA6IHBvcywgYywgcmVzdWx0LCBvcHRzLCBtYXNrc2V0LCBzdHJpY3QsIGZyb21DaGVja3ZhbCk7XG4gICAgICAgICAgICAgICAgdm9pZCAwICE9PSBwb3N0UmVzdWx0ICYmIChyZXN1bHQgPSAhMCA9PT0gcG9zdFJlc3VsdCA/IHJlc3VsdCA6IHBvc3RSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICYmIHZvaWQgMCA9PT0gcmVzdWx0LnBvcyAmJiAocmVzdWx0LnBvcyA9IG1hc2tQb3MpLCAhMSA9PT0gcmVzdWx0IHx8ICEwID09PSB2YWxpZGF0ZU9ubHkgPyAoX3Bvc2l0aW9uaW5nLnJlc2V0TWFza1NldC5jYWxsKGlucHV0bWFzaywgITApLCBcbiAgICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHBvc2l0aW9uc0Nsb25lKSkgOiB0cmFja2JhY2tQb3NpdGlvbnMuY2FsbChpbnB1dG1hc2ssIHZvaWQgMCwgbWFza1BvcywgITApO1xuICAgICAgICAgICAgdmFyIGVuZFJlc3VsdCA9IHByb2Nlc3NDb21tYW5kT2JqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gZW5kUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvcywgdGVzdERlZmluaXRpb24sIG9wdHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlucHV0bWFzayA9IHRoaXMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQsIHZhbGlkID0gITEsIHRlc3RzID0gX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0cy5jYWxsKHRoaXMsIHBvcyksIHRuZHggPSAwOyB0bmR4IDwgdGVzdHMubGVuZ3RoOyB0bmR4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHNbdG5keF0ubWF0Y2ggJiYgKCEodGVzdHNbdG5keF0ubWF0Y2gubmF0aXZlRGVmICE9PSB0ZXN0RGVmaW5pdGlvbi5tYXRjaFtvcHRzLnNoaWZ0UG9zaXRpb25zID8gXCJkZWZcIiA6IFwibmF0aXZlRGVmXCJdIHx8IG9wdHMuc2hpZnRQb3NpdGlvbnMgJiYgdGVzdERlZmluaXRpb24ubWF0Y2guc3RhdGljKSB8fCB0ZXN0c1t0bmR4XS5tYXRjaC5uYXRpdmVEZWYgPT09IHRlc3REZWZpbml0aW9uLm1hdGNoLm5hdGl2ZURlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1t0bmR4XS5tYXRjaCAmJiB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IHRlc3REZWZpbml0aW9uLm1hdGNoLm5hdGl2ZURlZikge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExID09PSB2YWxpZCAmJiB2b2lkIDAgIT09IG1hc2tzZXQuaml0T2Zmc2V0W3Bvc10gJiYgKHZhbGlkID0gcG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24uY2FsbCh0aGlzLCBwb3MgKyBtYXNrc2V0LmppdE9mZnNldFtwb3NdLCB0ZXN0RGVmaW5pdGlvbiwgb3B0cykpLCBcbiAgICAgICAgICAgIHZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hGcm9tQnVmZmVyKHN0YXJ0LCBlbmQsIGJ1ZmZlcikge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQsIG9wdHMgPSB0aGlzLm9wdHMsICQgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIGVsID0gdGhpcy5lbCwgaSwgcCwgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciwgYmZmciA9IHRoaXMuaXNSVEwgPyBidWZmZXIuc2xpY2UoKS5yZXZlcnNlKCkgOiBidWZmZXI7XG4gICAgICAgICAgICBpZiAob3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIiwgITAgPT09IHN0YXJ0KSBfcG9zaXRpb25pbmcucmVzZXRNYXNrU2V0LmNhbGwodGhpcyksIFxuICAgICAgICAgICAgbWFza3NldC50ZXN0cyA9IHt9LCBzdGFydCA9IDAsIGVuZCA9IGJ1ZmZlci5sZW5ndGgsIHAgPSBfcG9zaXRpb25pbmcuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgICAgIH0sICExKS5iZWdpbjsgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgZGVsZXRlIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgcCA9IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGJmZnJbaV0udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApLCB0aGlzLmlnbm9yYWJsZSA9ICExO1xuICAgICAgICAgICAgICAgIHZhciB2YWxSZXN1bHQgPSBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChlbCwga2V5cHJlc3MsICEwLCAhMSwgITEsIHApO1xuICAgICAgICAgICAgICAgICExICE9PSB2YWxSZXN1bHQgJiYgKHAgPSB2YWxSZXN1bHQuZm9yd2FyZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdHJhY2tiYWNrUG9zaXRpb25zKG9yaWdpbmFsUG9zLCBuZXdQb3MsIGZpbGxPbmx5KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgbWFza3NldCA9IHRoaXMubWFza3NldCwgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG9yaWdpbmFsUG9zKSBmb3IgKG9yaWdpbmFsUG9zID0gbmV3UG9zIC0gMTsgMCA8IG9yaWdpbmFsUG9zICYmICFtYXNrc2V0LnZhbGlkUG9zaXRpb25zW29yaWdpbmFsUG9zXTsgb3JpZ2luYWxQb3MtLSkgO1xuICAgICAgICAgICAgZm9yICh2YXIgcHMgPSBvcmlnaW5hbFBvczsgcHMgPCBuZXdQb3M7IHBzKyspIGlmICh2b2lkIDAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHNdICYmICFfcG9zaXRpb25pbmcuaXNNYXNrLmNhbGwodGhpcywgcHMsICEwKSkge1xuICAgICAgICAgICAgICAgIHZhciB2cCA9IDAgPT0gcHMgPyBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCBwcykgOiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3BzIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKHZwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdHMuY2FsbCh0aGlzLCBwcykuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIHRlc3RzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmVzdE1hdGNoID0gX3ZhbGlkYXRpb25UZXN0cy5kZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbCh0aGlzLCBwcywgdGVzdHMpLCBucDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaCAmJiAoITAgIT09IGJlc3RNYXRjaC5tYXRjaC5qaXQgfHwgXCJtYXN0ZXJcIiA9PT0gYmVzdE1hdGNoLm1hdGNoLm5ld0Jsb2NrTWFya2VyICYmIChucCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHMgKyAxXSkgJiYgITAgPT09IG5wLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKGJlc3RNYXRjaCA9ICQuZXh0ZW5kKHt9LCBiZXN0TWF0Y2gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBfdmFsaWRhdGlvblRlc3RzLmdldFBsYWNlaG9sZGVyLmNhbGwodGhpcywgcHMsIGJlc3RNYXRjaC5tYXRjaCwgITApIHx8IGJlc3RNYXRjaC5tYXRjaC5kZWZcbiAgICAgICAgICAgICAgICAgICAgfSksIGJlc3RNYXRjaC5nZW5lcmF0ZWRJbnB1dCA9ICEwLCByZXZhbGlkYXRlTWFzay5jYWxsKHRoaXMsIHBzLCBiZXN0TWF0Y2gsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICEwICE9PSBmaWxsT25seSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdnBJbnB1dCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbmV3UG9zXS5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW25ld1Bvc10gPSB2b2lkIDAsIGlzVmFsaWQuY2FsbCh0aGlzLCBuZXdQb3MsIGN2cElucHV0LCAhMCwgITApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJldmFsaWRhdGVNYXNrKHBvcywgdmFsaWRUZXN0LCBmcm9tSXNWYWxpZCwgdmFsaWRhdGVkUG9zKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcywgbWFza3NldCA9IHRoaXMubWFza3NldCwgb3B0cyA9IHRoaXMub3B0cywgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIElzRW5jbG9zZWRTdGF0aWMocG9zLCB2YWxpZHMsIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBwb3NNYXRjaCA9IHZhbGlkc1twb3NdO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHBvc01hdGNoIHx8ICEwICE9PSBwb3NNYXRjaC5tYXRjaC5zdGF0aWMgfHwgITAgPT09IHBvc01hdGNoLm1hdGNoLm9wdGlvbmFsaXR5IHx8IHZvaWQgMCAhPT0gdmFsaWRzWzBdICYmIHZvaWQgMCAhPT0gdmFsaWRzWzBdLmFsdGVybmF0aW9uKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZNYXRjaCA9IHNlbGVjdGlvbi5iZWdpbiA8PSBwb3MgLSAxID8gdmFsaWRzW3BvcyAtIDFdICYmICEwID09PSB2YWxpZHNbcG9zIC0gMV0ubWF0Y2guc3RhdGljICYmIHZhbGlkc1twb3MgLSAxXSA6IHZhbGlkc1twb3MgLSAxXSwgbmV4dE1hdGNoID0gc2VsZWN0aW9uLmVuZCA+IHBvcyArIDEgPyB2YWxpZHNbcG9zICsgMV0gJiYgITAgPT09IHZhbGlkc1twb3MgKyAxXS5tYXRjaC5zdGF0aWMgJiYgdmFsaWRzW3BvcyArIDFdIDogdmFsaWRzW3BvcyArIDFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2TWF0Y2ggJiYgbmV4dE1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IDAsIGJlZ2luID0gdm9pZCAwICE9PSBwb3MuYmVnaW4gPyBwb3MuYmVnaW4gOiBwb3MsIGVuZCA9IHZvaWQgMCAhPT0gcG9zLmVuZCA/IHBvcy5lbmQgOiBwb3M7XG4gICAgICAgICAgICBpZiAocG9zLmJlZ2luID4gcG9zLmVuZCAmJiAoYmVnaW4gPSBwb3MuZW5kLCBlbmQgPSBwb3MuYmVnaW4pLCB2YWxpZGF0ZWRQb3MgPSB2b2lkIDAgIT09IHZhbGlkYXRlZFBvcyA/IHZhbGlkYXRlZFBvcyA6IGJlZ2luLCBcbiAgICAgICAgICAgIGJlZ2luICE9PSBlbmQgfHwgb3B0cy5pbnNlcnRNb2RlICYmIHZvaWQgMCAhPT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1t2YWxpZGF0ZWRQb3NdICYmIHZvaWQgMCA9PT0gZnJvbUlzVmFsaWQgfHwgdm9pZCAwID09PSB2YWxpZFRlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25zQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMpLCBsdnAgPSBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzLCB2b2lkIDAsICEwKSwgaTtcbiAgICAgICAgICAgICAgICBmb3IgKG1hc2tzZXQucCA9IGJlZ2luLCBpID0gbHZwOyBiZWdpbiA8PSBpOyBpLS0pIGRlbGV0ZSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHZhbGlkVGVzdCAmJiBkZWxldGUgbWFza3NldC50ZXN0c1tpICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gITAsIGogPSB2YWxpZGF0ZWRQb3MsIHBvc01hdGNoID0gaiwgdCwgY2FuTWF0Y2g7XG4gICAgICAgICAgICAgICAgZm9yICh2YWxpZFRlc3QgJiYgKG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdmFsaWRhdGVkUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KSwgXG4gICAgICAgICAgICAgICAgcG9zTWF0Y2grKywgaisrKSwgaSA9IHZhbGlkVGVzdCA/IGVuZCA6IGVuZCAtIDE7IGkgPD0gbHZwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gKHQgPSBwb3NpdGlvbnNDbG9uZVtpXSkgJiYgITAgIT09IHQuZ2VuZXJhdGVkSW5wdXQgJiYgKGVuZCA8PSBpIHx8IGJlZ2luIDw9IGkgJiYgSXNFbmNsb3NlZFN0YXRpYyhpLCBwb3NpdGlvbnNDbG9uZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgICAgICAgICAgICAgfSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtcIlwiICE9PSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCBwb3NNYXRjaCkubWF0Y2guZGVmOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IChjYW5NYXRjaCA9IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uLmNhbGwodGhpcywgcG9zTWF0Y2gsIHQsIG9wdHMpKSB8fCBcIitcIiA9PT0gdC5tYXRjaC5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgPT09IHQubWF0Y2guZGVmICYmIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbCh0aGlzLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpc1ZhbGlkLmNhbGwodGhpcywgcG9zTWF0Y2gsIHQuaW5wdXQsIFwiK1wiICE9PSB0Lm1hdGNoLmRlZiwgXCIrXCIgIT09IHQubWF0Y2guZGVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkID0gITEgIT09IHJlc3VsdCwgaiA9IChyZXN1bHQucG9zIHx8IHBvc01hdGNoKSArIDEsICF2YWxpZCAmJiBjYW5NYXRjaCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHZhbGlkID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdmFsaWRUZXN0ICYmIHQubWF0Y2guc3RhdGljICYmIGkgPT09IHBvcy5iZWdpbiAmJiBvZmZzZXQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQgJiYgcG9zTWF0Y2ggPiBtYXNrc2V0Lm1hc2tMZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc01hdGNoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiID09IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKHRoaXMsIHBvc01hdGNoKS5tYXRjaC5kZWYgJiYgKHZhbGlkID0gITEpLCBwb3NNYXRjaCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHJldHVybiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSksIF9wb3NpdGlvbmluZy5yZXNldE1hc2tTZXQuY2FsbCh0aGlzLCAhMCksIFxuICAgICAgICAgICAgICAgICExO1xuICAgICAgICAgICAgfSBlbHNlIHZhbGlkVGVzdCAmJiBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbCh0aGlzLCB2YWxpZGF0ZWRQb3MpLm1hdGNoLmNkID09PSB2YWxpZFRlc3QubWF0Y2guY2QgJiYgKG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdmFsaWRhdGVkUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KSk7XG4gICAgICAgICAgICByZXR1cm4gX3Bvc2l0aW9uaW5nLnJlc2V0TWFza1NldC5jYWxsKHRoaXMsICEwKSwgb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5hcHBseUlucHV0VmFsdWUgPSBhcHBseUlucHV0VmFsdWUsIGV4cG9ydHMuY2xlYXJPcHRpb25hbFRhaWwgPSBjbGVhck9wdGlvbmFsVGFpbCwgXG4gICAgICAgIGV4cG9ydHMuY2hlY2tWYWwgPSBjaGVja1ZhbCwgZXhwb3J0cy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlciA9IEhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyLCBcbiAgICAgICAgZXhwb3J0cy51bm1hc2tlZHZhbHVlID0gdW5tYXNrZWR2YWx1ZSwgZXhwb3J0cy53cml0ZUJ1ZmZlciA9IHdyaXRlQnVmZmVyO1xuICAgICAgICB2YXIgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfdmFsaWRhdGlvblRlc3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKSwgX3Bvc2l0aW9uaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX3ZhbGlkYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCBfZW52aXJvbm1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfZXZlbnRoYW5kbGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhcHBseUlucHV0VmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gaW5wdXQgPyBpbnB1dC5pbnB1dG1hc2sgOiB0aGlzLCBvcHRzID0gaW5wdXRtYXNrLm9wdHM7XG4gICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlID0gITEsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb3B0cy5vbkJlZm9yZU1hc2sgJiYgKHZhbHVlID0gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlLCBvcHRzKSB8fCB2YWx1ZSksIFxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpLCBjaGVja1ZhbChpbnB1dCwgITAsICExLCB2YWx1ZSksIGlucHV0bWFzay51bmRvVmFsdWUgPSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpLCBcbiAgICAgICAgICAgIChvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IG9wdHMuY2xlYXJJbmNvbXBsZXRlKSAmJiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSAmJiAtMSA9PT0gX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrKSAmJiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlU2V0KFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXM7XG4gICAgICAgICAgICBidWZmZXIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIHRlbXBsYXRlID0gX3ZhbGlkYXRpb25UZXN0cy5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgMCwgITAsIHZvaWQgMCwgITApLCBsbW50OyB2b2lkIDAgIT09IChsbW50ID0gdGVtcGxhdGUuc2hpZnQoKSk7ICkgYnVmZmVyLnB1c2gobG1udCk7XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGlucHV0LCB3cml0ZU91dCwgc3RyaWN0LCBucHR2bCwgaW5pdGlhdGluZ0V2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gaW5wdXQgPyBpbnB1dC5pbnB1dG1hc2sgOiB0aGlzLCBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQsIG9wdHMgPSBpbnB1dG1hc2sub3B0cywgJCA9IGlucHV0bWFzay5kZXBlbmRlbmN5TGliLCBpbnB1dFZhbHVlID0gbnB0dmwuc2xpY2UoKSwgY2hhckNvZGVzID0gXCJcIiwgaW5pdGlhbE5keCA9IC0xLCByZXN1bHQgPSB2b2lkIDAsIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBsYXRlTWF0Y2gobmR4LCBjaGFyQ29kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXRUZW1wbGF0ZSA9IF92YWxpZGF0aW9uVGVzdHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwoaW5wdXRtYXNrLCAhMCwgMCkuc2xpY2UobmR4LCBfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIG5keCkpLmpvaW4oXCJcIikucmVwbGFjZSgvJy9nLCBcIlwiKSwgY2hhckNvZGVOZHggPSB0YXJnZXRUZW1wbGF0ZS5pbmRleE9mKGNoYXJDb2Rlcyk7IDAgPCBjaGFyQ29kZU5keCAmJiBcIiBcIiA9PT0gdGFyZ2V0VGVtcGxhdGVbY2hhckNvZGVOZHggLSAxXTsgKSBjaGFyQ29kZU5keC0tO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IDAgPT09IGNoYXJDb2RlTmR4ICYmICFfcG9zaXRpb25pbmcuaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBuZHgpICYmIChfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCkubWF0Y2gubmF0aXZlRGVmID09PSBjaGFyQ29kZXMuY2hhckF0KDApIHx8ICEwID09PSBfdmFsaWRhdGlvblRlc3RzLmdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCkubWF0Y2guc3RhdGljICYmIF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgbmR4KS5tYXRjaC5uYXRpdmVEZWYgPT09IFwiJ1wiICsgY2hhckNvZGVzLmNoYXJBdCgwKSB8fCBcIiBcIiA9PT0gX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBuZHgpLm1hdGNoLm5hdGl2ZURlZiAmJiAoX3ZhbGlkYXRpb25UZXN0cy5nZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBuZHggKyAxKS5tYXRjaC5uYXRpdmVEZWYgPT09IGNoYXJDb2Rlcy5jaGFyQXQoMCkgfHwgITAgPT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgbmR4ICsgMSkubWF0Y2guc3RhdGljICYmIF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgbmR4ICsgMSkubWF0Y2gubmF0aXZlRGVmID09PSBcIidcIiArIGNoYXJDb2Rlcy5jaGFyQXQoMCkpKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoICYmIDAgPCBjaGFyQ29kZU5keCAmJiAhX3Bvc2l0aW9uaW5nLmlzTWFzay5jYWxsKGlucHV0bWFzaywgbmR4LCAhMSwgITApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0UG9zID0gX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBuZHgpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2suY2FyZXRQb3MuYmVnaW4gPCBuZXh0UG9zICYmIChpbnB1dG1hc2suY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbmV4dFBvc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIiwgX3Bvc2l0aW9uaW5nLnJlc2V0TWFza1NldC5jYWxsKGlucHV0bWFzayksIFxuICAgICAgICAgICAgbWFza3NldC50ZXN0cyA9IHt9LCBpbml0aWFsTmR4ID0gb3B0cy5yYWRpeFBvaW50ID8gX3Bvc2l0aW9uaW5nLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgICAgIH0pLmJlZ2luIDogMCwgbWFza3NldC5wID0gaW5pdGlhbE5keCwgaW5wdXRtYXNrLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBpbml0aWFsTmR4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN0YXRpY01hdGNoZXMgPSBbXSwgcHJldkNhcmV0UG9zID0gaW5wdXRtYXNrLmNhcmV0UG9zO1xuICAgICAgICAgICAgaWYgKGlucHV0VmFsdWUuZm9yRWFjaChmdW5jdGlvbihjaGFyQ29kZSwgbmR4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gY2hhckNvZGUpIGlmICh2b2lkIDAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbmR4XSAmJiBpbnB1dFZhbHVlW25keF0gPT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0UGxhY2Vob2xkZXIuY2FsbChpbnB1dG1hc2ssIG5keCkgJiYgX3Bvc2l0aW9uaW5nLmlzTWFzay5jYWxsKGlucHV0bWFzaywgbmR4LCAhMCkgJiYgITEgPT09IF92YWxpZGF0aW9uLmlzVmFsaWQuY2FsbChpbnB1dG1hc2ssIG5keCwgaW5wdXRWYWx1ZVtuZHhdLCAhMCwgdm9pZCAwLCB2b2lkIDAsICEwKSkgbWFza3NldC5wKys7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcIl9jaGVja3ZhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAga2V5cHJlc3Mud2hpY2ggPSBjaGFyQ29kZS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCksIGNoYXJDb2RlcyArPSBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IF9wb3NpdGlvbmluZy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIGlzVGVtcGxhdGVNYXRjaChpbml0aWFsTmR4LCBjaGFyQ29kZXMpID8gcmVzdWx0ID0gX2V2ZW50aGFuZGxlcnMuRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQgfHwgaW5wdXRtYXNrLCBrZXlwcmVzcywgITAsICExLCBzdHJpY3QsIGx2cCArIDEpIDogKHJlc3VsdCA9IF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0IHx8IGlucHV0bWFzaywga2V5cHJlc3MsICEwLCAhMSwgc3RyaWN0LCBpbnB1dG1hc2suY2FyZXRQb3MuYmVnaW4pLCBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIChpbml0aWFsTmR4ID0gaW5wdXRtYXNrLmNhcmV0UG9zLmJlZ2luICsgMSwgY2hhckNvZGVzID0gXCJcIikpLCByZXN1bHQgPyAodm9pZCAwICE9PSByZXN1bHQucG9zICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10gJiYgITAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10ubWF0Y2guc3RhdGljICYmIHZvaWQgMCA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tyZXN1bHQucG9zXS5hbHRlcm5hdGlvbiAmJiAoc3RhdGljTWF0Y2hlcy5wdXNoKHJlc3VsdC5wb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRtYXNrLmlzUlRMIHx8IChyZXN1bHQuZm9yd2FyZFBvc2l0aW9uID0gcmVzdWx0LnBvcyArIDEpKSwgd3JpdGVCdWZmZXIuY2FsbChpbnB1dG1hc2ssIHZvaWQgMCwgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sIGtleXByZXNzLCAhMSksIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2suY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogcmVzdWx0LmZvcndhcmRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcmVzdWx0LmZvcndhcmRQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICB9LCBwcmV2Q2FyZXRQb3MgPSBpbnB1dG1hc2suY2FyZXRQb3MpIDogaW5wdXRtYXNrLmNhcmV0UG9zID0gcHJldkNhcmV0UG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCAwIDwgc3RhdGljTWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc25keCwgdmFsaWRQb3MsIG5leHRWYWxpZCA9IF9wb3NpdGlvbmluZy5zZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgLTEsIHZvaWQgMCwgITEpO1xuICAgICAgICAgICAgICAgIGlmICghX3ZhbGlkYXRpb24uaXNDb21wbGV0ZS5jYWxsKGlucHV0bWFzaywgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpICYmIHN0YXRpY01hdGNoZXMubGVuZ3RoIDw9IG5leHRWYWxpZCB8fCBfdmFsaWRhdGlvbi5pc0NvbXBsZXRlLmNhbGwoaW5wdXRtYXNrLCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSkgJiYgMCA8IHN0YXRpY01hdGNoZXMubGVuZ3RoICYmIHN0YXRpY01hdGNoZXMubGVuZ3RoICE9PSBuZXh0VmFsaWQgJiYgMCA9PT0gc3RhdGljTWF0Y2hlc1swXSkgZm9yICh2YXIgbmV4dFNuZHggPSBuZXh0VmFsaWQ7IHZvaWQgMCAhPT0gKHNuZHggPSBzdGF0aWNNYXRjaGVzLnNoaWZ0KCkpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJfY2hlY2t2YWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZFBvcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbc25keF0sIHZhbGlkUG9zLmdlbmVyYXRlZElucHV0ID0gITAsIGtleXByZXNzLndoaWNoID0gdmFsaWRQb3MuaW5wdXQuY2hhckNvZGVBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICExLCBzdHJpY3QsIG5leHRTbmR4KSwgXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCAmJiB2b2lkIDAgIT09IHJlc3VsdC5wb3MgJiYgcmVzdWx0LnBvcyAhPT0gc25keCAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Jlc3VsdC5wb3NdICYmICEwID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Jlc3VsdC5wb3NdLm1hdGNoLnN0YXRpYykgc3RhdGljTWF0Y2hlcy5wdXNoKHJlc3VsdC5wb3MpOyBlbHNlIGlmICghcmVzdWx0KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNuZHgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cml0ZU91dCAmJiB3cml0ZUJ1ZmZlci5jYWxsKGlucHV0bWFzaywgaW5wdXQsIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLCByZXN1bHQgPyByZXN1bHQuZm9yd2FyZFBvc2l0aW9uIDogaW5wdXRtYXNrLmNhcmV0UG9zLmJlZ2luLCBpbml0aWF0aW5nRXZlbnQgfHwgbmV3ICQuRXZlbnQoXCJjaGVja3ZhbFwiKSwgaW5pdGlhdGluZ0V2ZW50ICYmIFwiaW5wdXRcIiA9PT0gaW5pdGlhdGluZ0V2ZW50LnR5cGUgJiYgaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSksIFxuICAgICAgICAgICAgb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcihucHQsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gbnB0ID8gbnB0LmlucHV0bWFzayA6IHRoaXM7XG4gICAgICAgICAgICBpZiAoX2Vudmlyb25tZW50LmllKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IHZhbHVlICYmIChucHQucGxhY2Vob2xkZXIgIT09IHZhbHVlIHx8IFwiXCIgPT09IG5wdC5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKCksIG5wdFZhbHVlID0gbnB0LmlucHV0bWFzay5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5wdFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IF9wb3NpdGlvbmluZy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gbHZwICYmIG5wdFZhbHVlID09PSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIikgPyBidWZmZXIgPSBbXSA6IC0xICE9PSBsdnAgJiYgY2xlYXJPcHRpb25hbFRhaWwuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIobnB0LCBidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIG5wdC5wbGFjZWhvbGRlciAhPT0gdmFsdWUgJiYgKG5wdC5wbGFjZWhvbGRlciA9IHZhbHVlLCBcIlwiID09PSBucHQucGxhY2Vob2xkZXIgJiYgbnB0LnJlbW92ZUF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1bm1hc2tlZHZhbHVlKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gaW5wdXQgPyBpbnB1dC5pbnB1dG1hc2sgOiB0aGlzLCBvcHRzID0gaW5wdXRtYXNrLm9wdHMsIG1hc2tzZXQgPSBpbnB1dG1hc2subWFza3NldDtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGlucHV0LmlucHV0bWFzaykgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIGFwcGx5SW5wdXRWYWx1ZShpbnB1dCwgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVtVmFsdWUgPSBbXSwgdnBzID0gbWFza3NldC52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIHBuZHggaW4gdnBzKSB2cHNbcG5keF0gJiYgdnBzW3BuZHhdLm1hdGNoICYmICgxICE9IHZwc1twbmR4XS5tYXRjaC5zdGF0aWMgfHwgQXJyYXkuaXNBcnJheShtYXNrc2V0Lm1ldGFkYXRhKSAmJiAhMCAhPT0gdnBzW3BuZHhdLmdlbmVyYXRlZElucHV0KSAmJiB1bVZhbHVlLnB1c2godnBzW3BuZHhdLmlucHV0KTtcbiAgICAgICAgICAgIHZhciB1bm1hc2tlZFZhbHVlID0gMCA9PT0gdW1WYWx1ZS5sZW5ndGggPyBcIlwiIDogKGlucHV0bWFzay5pc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG9wdHMub25Vbk1hc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVmFsdWUgPSAoaW5wdXRtYXNrLmlzUlRMID8gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuc2xpY2UoKS5yZXZlcnNlKCkgOiBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB1bm1hc2tlZFZhbHVlID0gb3B0cy5vblVuTWFzay5jYWxsKGlucHV0bWFzaywgYnVmZmVyVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVubWFza2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlciwgY2FyZXRQb3MsIGV2ZW50LCB0cmlnZ2VyRXZlbnRzKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gaW5wdXQgPyBpbnB1dC5pbnB1dG1hc2sgOiB0aGlzLCBvcHRzID0gaW5wdXRtYXNrLm9wdHMsICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG9wdHMub25CZWZvcmVXcml0ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcHRzLm9uQmVmb3JlV3JpdGUuY2FsbChpbnB1dG1hc2ssIGV2ZW50LCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbGlkYXRpb24ucmVmcmVzaEZyb21CdWZmZXIuY2FsbChpbnB1dG1hc2ssICEwID09PSByZWZyZXNoID8gcmVmcmVzaCA6IHJlZnJlc2guc3RhcnQsIHJlZnJlc2guZW5kLCByZXN1bHQuYnVmZmVyIHx8IGJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaywgITApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gY2FyZXRQb3MgJiYgKGNhcmV0UG9zID0gdm9pZCAwICE9PSByZXN1bHQuY2FyZXQgPyByZXN1bHQuY2FyZXQgOiBjYXJldFBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaW5wdXQgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVTZXQoYnVmZmVyLmpvaW4oXCJcIikpLCB2b2lkIDAgPT09IGNhcmV0UG9zIHx8IHZvaWQgMCAhPT0gZXZlbnQgJiYgXCJibHVyXCIgPT09IGV2ZW50LnR5cGUgfHwgX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgY2FyZXRQb3MsIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAgIT09IGV2ZW50ICYmIFwia2V5ZG93blwiID09PSBldmVudC50eXBlICYmIChldmVudC5rZXlDb2RlID09PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSB8fCBldmVudC5rZXlDb2RlID09PSBfa2V5Y29kZS5kZWZhdWx0LkJBQ0tTUEFDRSkpLCBcbiAgICAgICAgICAgICEwID09PSB0cmlnZ2VyRXZlbnRzKSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKGlucHV0KSwgbnB0VmFsID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5za2lwSW5wdXRFdmVudCA9ICEwLCAkaW5wdXQudHJpZ2dlcihcImlucHV0XCIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBucHRWYWwgPT09IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSA/ICRpbnB1dC50cmlnZ2VyKFwiY2xlYXJlZFwiKSA6ICEwID09PSBfdmFsaWRhdGlvbi5pc0NvbXBsZXRlLmNhbGwoaW5wdXRtYXNrLCBidWZmZXIpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBfZGVmYXVsdCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IG5ldyAoZXZhbChcInJlcXVpcmUoJ2pzZG9tJykuSlNET01cIikpKFwiXCIpLndpbmRvdztcbiAgICAgICAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5FdmVudEhhbmRsZXJzID0gdm9pZCAwO1xuICAgICAgICB2YXIgX3Bvc2l0aW9uaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfZW52aXJvbm1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfdmFsaWRhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNCksIF9pbnB1dEhhbmRsaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgX3ZhbGlkYXRpb25UZXN0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24ga2V5ZG93bkV2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssIG9wdHMgPSBpbnB1dG1hc2sub3B0cywgJCA9IGlucHV0bWFzay5kZXBlbmRlbmN5TGliLCBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQsIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLmtleUNvZGUsIHBvcyA9IF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQpLCBrZFJlc3VsdCA9IG9wdHMub25LZXlEb3duLmNhbGwodGhpcywgZSwgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksIHBvcywgb3B0cyk7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0ga2RSZXN1bHQpIHJldHVybiBrZFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gX2tleWNvZGUuZGVmYXVsdC5CQUNLU1BBQ0UgfHwgayA9PT0gX2tleWNvZGUuZGVmYXVsdC5ERUxFVEUgfHwgX2Vudmlyb25tZW50LmlwaG9uZSAmJiBrID09PSBfa2V5Y29kZS5kZWZhdWx0LkJBQ0tTUEFDRV9TQUZBUkkgfHwgZS5jdHJsS2V5ICYmIGsgPT09IF9rZXljb2RlLmRlZmF1bHQuWCAmJiAhKFwib25jdXRcIiBpbiBpbnB1dCkpIGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgX3ZhbGlkYXRpb24uaGFuZGxlUmVtb3ZlLmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgaywgcG9zKSwgKDAsIF9pbnB1dEhhbmRsaW5nLndyaXRlQnVmZmVyKShpbnB1dCwgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaywgITApLCBtYXNrc2V0LnAsIGUsIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSk7IGVsc2UgaWYgKGsgPT09IF9rZXljb2RlLmRlZmF1bHQuRU5EIHx8IGsgPT09IF9rZXljb2RlLmRlZmF1bHQuUEFHRV9ET1dOKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spKTtcbiAgICAgICAgICAgICAgICAgICAgX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IGNhcmV0UG9zLCBjYXJldFBvcywgITApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID09PSBfa2V5Y29kZS5kZWZhdWx0LkhPTUUgJiYgIWUuc2hpZnRLZXkgfHwgayA9PT0gX2tleWNvZGUuZGVmYXVsdC5QQUdFX1VQID8gKGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgMCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IDAsICEwKSkgOiAob3B0cy51bmRvT25Fc2NhcGUgJiYgayA9PT0gX2tleWNvZGUuZGVmYXVsdC5FU0NBUEUgfHwgOTAgPT09IGsgJiYgZS5jdHJsS2V5KSAmJiAhMCAhPT0gZS5hbHRLZXkgPyAoKDAsIFxuICAgICAgICAgICAgICAgIF9pbnB1dEhhbmRsaW5nLmNoZWNrVmFsKShpbnB1dCwgITAsICExLCBpbnB1dG1hc2sudW5kb1ZhbHVlLnNwbGl0KFwiXCIpKSwgJGlucHV0LnRyaWdnZXIoXCJjbGlja1wiKSkgOiAhMCA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGsgPT09IF9rZXljb2RlLmRlZmF1bHQuVEFCID8gITAgPT09IGUuc2hpZnRLZXkgPyAocG9zLmVuZCA9IF9wb3NpdGlvbmluZy5zZWVrUHJldmlvdXMuY2FsbChpbnB1dG1hc2ssIHBvcy5lbmQsICEwKSwgXG4gICAgICAgICAgICAgICAgITAgPT09IF92YWxpZGF0aW9uVGVzdHMuZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgcG9zLmVuZCAtIDEpLm1hdGNoLnN0YXRpYyAmJiBwb3MuZW5kLS0sIFxuICAgICAgICAgICAgICAgIHBvcy5iZWdpbiA9IF9wb3NpdGlvbmluZy5zZWVrUHJldmlvdXMuY2FsbChpbnB1dG1hc2ssIHBvcy5lbmQsICEwKSwgMCA8PSBwb3MuYmVnaW4gJiYgMCA8IHBvcy5lbmQgJiYgKGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgcG9zLmJlZ2luLCBwb3MuZW5kKSkpIDogKHBvcy5iZWdpbiA9IF9wb3NpdGlvbmluZy5zZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgcG9zLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIHBvcy5iZWdpbiwgITApLCBwb3MuZW5kIDwgbWFza3NldC5tYXNrTGVuZ3RoICYmIHBvcy5lbmQtLSwgXG4gICAgICAgICAgICAgICAgcG9zLmJlZ2luIDw9IG1hc2tzZXQubWFza0xlbmd0aCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBfcG9zaXRpb25pbmcuY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0LCBwb3MuYmVnaW4sIHBvcy5lbmQpKSkgOiBlLnNoaWZ0S2V5IHx8IG9wdHMuaW5zZXJ0TW9kZVZpc3VhbCAmJiAhMSA9PT0gb3B0cy5pbnNlcnRNb2RlICYmIChrID09PSBfa2V5Y29kZS5kZWZhdWx0LlJJR0hUID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQsIGNhcmV0UG9zLmJlZ2luKTtcbiAgICAgICAgICAgICAgICB9LCAwKSA6IGsgPT09IF9rZXljb2RlLmRlZmF1bHQuTEVGVCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3NfYmVnaW4gPSBfcG9zaXRpb25pbmcudHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGlucHV0LmlucHV0bWFzay5jYXJldFBvcy5iZWdpbiksIGNhcmV0UG9zX2VuZCA9IF9wb3NpdGlvbmluZy50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgaW5wdXQuaW5wdXRtYXNrLmNhcmV0UG9zLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0bWFzay5pc1JUTCA/IF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQsIGNhcmV0UG9zX2JlZ2luICsgKGNhcmV0UG9zX2JlZ2luID09PSBtYXNrc2V0Lm1hc2tMZW5ndGggPyAwIDogMSkpIDogX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgY2FyZXRQb3NfYmVnaW4gLSAoMCA9PT0gY2FyZXRQb3NfYmVnaW4gPyAwIDogMSkpO1xuICAgICAgICAgICAgICAgIH0sIDApKTtcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2suaWdub3JhYmxlID0gb3B0cy5pZ25vcmFibGVzLmluY2x1ZGVzKGspO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleXByZXNzRXZlbnQ6IGZ1bmN0aW9uIGtleXByZXNzRXZlbnQoZSwgY2hlY2t2YWwsIHdyaXRlT3V0LCBzdHJpY3QsIG5keCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzayB8fCB0aGlzLCBvcHRzID0gaW5wdXRtYXNrLm9wdHMsICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYiwgbWFza3NldCA9IGlucHV0bWFzay5tYXNrc2V0LCBpbnB1dCA9IGlucHV0bWFzay5lbCwgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLndoaWNoIHx8IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlO1xuICAgICAgICAgICAgICAgIGlmICghKCEwID09PSBjaGVja3ZhbCB8fCBlLmN0cmxLZXkgJiYgZS5hbHRLZXkpICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGlucHV0bWFzay5pZ25vcmFibGUpKSByZXR1cm4gayA9PT0gX2tleWNvZGUuZGVmYXVsdC5FTlRFUiAmJiBpbnB1dG1hc2sudW5kb1ZhbHVlICE9PSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpICYmIChpbnB1dG1hc2sudW5kb1ZhbHVlID0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfSwgMCkpLCBpbnB1dG1hc2suc2tpcElucHV0RXZlbnQgPSAhMCwgITA7XG4gICAgICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICAgICAgNDQgIT09IGsgJiYgNDYgIT09IGsgfHwgMyAhPT0gZS5sb2NhdGlvbiB8fCBcIlwiID09PSBvcHRzLnJhZGl4UG9pbnQgfHwgKGsgPSBvcHRzLnJhZGl4UG9pbnQuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBjaGVja3ZhbCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBuZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG5keFxuICAgICAgICAgICAgICAgICAgICB9IDogX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCksIGZvcndhcmRQb3NpdGlvbiwgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayk7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tzZXQud3JpdGVPdXRCdWZmZXIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbFJlc3VsdCA9IF92YWxpZGF0aW9uLmlzVmFsaWQuY2FsbChpbnB1dG1hc2ssIHBvcywgYywgc3RyaWN0LCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBjaGVja3ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gdmFsUmVzdWx0ICYmIChfcG9zaXRpb25pbmcucmVzZXRNYXNrU2V0LmNhbGwoaW5wdXRtYXNrLCAhMCksIGZvcndhcmRQb3NpdGlvbiA9IHZvaWQgMCAhPT0gdmFsUmVzdWx0LmNhcmV0ID8gdmFsUmVzdWx0LmNhcmV0IDogX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCB2YWxSZXN1bHQucG9zLmJlZ2luID8gdmFsUmVzdWx0LnBvcy5iZWdpbiA6IHZhbFJlc3VsdC5wb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgbWFza3NldC5wID0gZm9yd2FyZFBvc2l0aW9uKSwgZm9yd2FyZFBvc2l0aW9uID0gb3B0cy5udW1lcmljSW5wdXQgJiYgdm9pZCAwID09PSB2YWxSZXN1bHQuY2FyZXQgPyBfcG9zaXRpb25pbmcuc2Vla1ByZXZpb3VzLmNhbGwoaW5wdXRtYXNrLCBmb3J3YXJkUG9zaXRpb24pIDogZm9yd2FyZFBvc2l0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgITEgIT09IHdyaXRlT3V0ICYmIChzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5vbktleVZhbGlkYXRpb24uY2FsbChpbnB1dCwgaywgdmFsUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIG1hc2tzZXQud3JpdGVPdXRCdWZmZXIgJiYgITEgIT09IHZhbFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfaW5wdXRIYW5kbGluZy53cml0ZUJ1ZmZlcikoaW5wdXQsIGJ1ZmZlciwgZm9yd2FyZFBvc2l0aW9uLCBlLCAhMCAhPT0gY2hlY2t2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KCksIGNoZWNrdmFsKSByZXR1cm4gITEgIT09IHZhbFJlc3VsdCAmJiAodmFsUmVzdWx0LmZvcndhcmRQb3NpdGlvbiA9IGZvcndhcmRQb3NpdGlvbiksIFxuICAgICAgICAgICAgICAgICAgICB2YWxSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleXVwRXZlbnQ6IGZ1bmN0aW9uIGtleXVwRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaztcbiAgICAgICAgICAgICAgICAhaW5wdXRtYXNrLmlzQ29tcG9zaW5nIHx8IGUua2V5Q29kZSAhPT0gX2tleWNvZGUuZGVmYXVsdC5LRVlfMjI5ICYmIGUua2V5Q29kZSAhPT0gX2tleWNvZGUuZGVmYXVsdC5FTlRFUiB8fCBpbnB1dG1hc2suJGVsLnRyaWdnZXIoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXN0ZUV2ZW50OiBmdW5jdGlvbiBwYXN0ZUV2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssIG9wdHMgPSBpbnB1dG1hc2sub3B0cywgaW5wdXQgPSB0aGlzLCBpbnB1dFZhbHVlID0gaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIGNhcmV0UG9zID0gX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCB0aGlzKSwgdGVtcFZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0bWFzay5pc1JUTCAmJiAodGVtcFZhbHVlID0gY2FyZXRQb3MuZW5kLCBjYXJldFBvcy5lbmQgPSBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuYmVnaW4gPSB0ZW1wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUJlZm9yZUNhcmV0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCB2YWx1ZUFmdGVyQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5lbmQsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVCZWZvcmVDYXJldCA9PSAoaW5wdXRtYXNrLmlzUlRMID8gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykpLnNsaWNlKDAsIGNhcmV0UG9zLmJlZ2luKS5qb2luKFwiXCIpICYmICh2YWx1ZUJlZm9yZUNhcmV0ID0gXCJcIiksIFxuICAgICAgICAgICAgICAgIHZhbHVlQWZ0ZXJDYXJldCA9PSAoaW5wdXRtYXNrLmlzUlRMID8gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykpLnNsaWNlKGNhcmV0UG9zLmVuZCkuam9pbihcIlwiKSAmJiAodmFsdWVBZnRlckNhcmV0ID0gXCJcIiksIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY2xpcGJvYXJkRGF0YSB8fCAhZS5jbGlwYm9hcmREYXRhLmdldERhdGEpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQgKyBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBvcHRzLm9uQmVmb3JlUGFzdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3RlVmFsdWUgPSBvcHRzLm9uQmVmb3JlUGFzdGUuY2FsbChpbnB1dG1hc2ssIGlucHV0VmFsdWUsIG9wdHMpLCAhMSA9PT0gcGFzdGVWYWx1ZSkgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVWYWx1ZSA9IHBhc3RlVmFsdWUgfHwgaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfaW5wdXRIYW5kbGluZy5jaGVja1ZhbCkodGhpcywgITAsICExLCBwYXN0ZVZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIiksIGUpLCBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRGYWxsQmFja0V2ZW50OiBmdW5jdGlvbiBpbnB1dEZhbGxCYWNrRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaywgb3B0cyA9IGlucHV0bWFzay5vcHRzLCAkID0gaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaWVNb2JpbGVIYW5kbGVyKGlucHV0LCBpbnB1dFZhbHVlLCBjYXJldFBvcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2Vudmlyb25tZW50LmllbW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRDaGFyID0gaW5wdXRWYWx1ZS5yZXBsYWNlKF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIiksIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IGlucHV0Q2hhci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXYgPSBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2LnNwbGljZShjYXJldFBvcy5iZWdpbiwgMCwgaW5wdXRDaGFyKSwgaW5wdXRWYWx1ZSA9IGl2LmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFuYWx5c2VDaGFuZ2VzKGlucHV0VmFsdWUsIGJ1ZmZlciwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZnJvbnRQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLnNwbGl0KFwiXCIpLCBiYWNrUGFydCA9IGlucHV0VmFsdWUuc3Vic3RyKGNhcmV0UG9zLmJlZ2luKS5zcGxpdChcIlwiKSwgZnJvbnRCdWZmZXJQYXJ0ID0gYnVmZmVyLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbikuc3BsaXQoXCJcIiksIGJhY2tCdWZmZXJQYXJ0ID0gYnVmZmVyLnN1YnN0cihjYXJldFBvcy5iZWdpbikuc3BsaXQoXCJcIiksIGZwbCA9IGZyb250UGFydC5sZW5ndGggPj0gZnJvbnRCdWZmZXJQYXJ0Lmxlbmd0aCA/IGZyb250UGFydC5sZW5ndGggOiBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoLCBicGwgPSBiYWNrUGFydC5sZW5ndGggPj0gYmFja0J1ZmZlclBhcnQubGVuZ3RoID8gYmFja1BhcnQubGVuZ3RoIDogYmFja0J1ZmZlclBhcnQubGVuZ3RoLCBibCwgaSwgYWN0aW9uID0gXCJcIiwgZGF0YSA9IFtdLCBtYXJrZXIgPSBcIn5cIiwgcGxhY2Vob2xkZXI7IGZyb250UGFydC5sZW5ndGggPCBmcGw7ICkgZnJvbnRQYXJ0LnB1c2goXCJ+XCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtmcm9udEJ1ZmZlclBhcnQubGVuZ3RoIDwgZnBsOyApIGZyb250QnVmZmVyUGFydC5wdXNoKFwiflwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7YmFja1BhcnQubGVuZ3RoIDwgYnBsOyApIGJhY2tQYXJ0LnVuc2hpZnQoXCJ+XCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtiYWNrQnVmZmVyUGFydC5sZW5ndGggPCBicGw7ICkgYmFja0J1ZmZlclBhcnQudW5zaGlmdChcIn5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdCdWZmZXIgPSBmcm9udFBhcnQuY29uY2F0KGJhY2tQYXJ0KSwgb2xkQnVmZmVyID0gZnJvbnRCdWZmZXJQYXJ0LmNvbmNhdChiYWNrQnVmZmVyUGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGJsID0gbmV3QnVmZmVyLmxlbmd0aDsgaSA8IGJsOyBpKyspIHN3aXRjaCAocGxhY2Vob2xkZXIgPSBfdmFsaWRhdGlvblRlc3RzLmdldFBsYWNlaG9sZGVyLmNhbGwoaW5wdXRtYXNrLCBfcG9zaXRpb25pbmcudHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGkpKSwgXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRCdWZmZXJbaSAtIDFdID09PSBuZXdCdWZmZXJbaV0gJiYgY2FyZXRQb3MuYmVnaW4gPT0gbmV3QnVmZmVyLmxlbmd0aCAtIDEgJiYgZGF0YS5wdXNoKG5ld0J1ZmZlcltpXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIn5cIiA9PT0gbmV3QnVmZmVyW2ldID8gY2FyZXRQb3MuZW5kKysgOiBpID0gYmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb250ZW50QmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiflwiID09PSBuZXdCdWZmZXJbaV0gPyBjYXJldFBvcy5lbmQrKyA6IGkgPSBibDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0J1ZmZlcltpXSAhPT0gb2xkQnVmZmVyW2ldICYmIChcIn5cIiAhPT0gbmV3QnVmZmVyW2kgKyAxXSAmJiBuZXdCdWZmZXJbaSArIDFdICE9PSBwbGFjZWhvbGRlciAmJiB2b2lkIDAgIT09IG5ld0J1ZmZlcltpICsgMV0gfHwgKG9sZEJ1ZmZlcltpXSAhPT0gcGxhY2Vob2xkZXIgfHwgXCJ+XCIgIT09IG9sZEJ1ZmZlcltpICsgMV0pICYmIFwiflwiICE9PSBvbGRCdWZmZXJbaV0gPyBcIn5cIiA9PT0gb2xkQnVmZmVyW2kgKyAxXSAmJiBvbGRCdWZmZXJbaV0gPT09IG5ld0J1ZmZlcltpICsgMV0gPyAoYWN0aW9uID0gXCJpbnNlcnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0J1ZmZlcltpXSksIGNhcmV0UG9zLmJlZ2luLS0sIGNhcmV0UG9zLmVuZC0tKSA6IG5ld0J1ZmZlcltpXSAhPT0gcGxhY2Vob2xkZXIgJiYgXCJ+XCIgIT09IG5ld0J1ZmZlcltpXSAmJiAoXCJ+XCIgPT09IG5ld0J1ZmZlcltpICsgMV0gfHwgb2xkQnVmZmVyW2ldICE9PSBuZXdCdWZmZXJbaV0gJiYgb2xkQnVmZmVyW2kgKyAxXSA9PT0gbmV3QnVmZmVyW2kgKyAxXSkgPyAoYWN0aW9uID0gXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3QnVmZmVyW2ldKSwgY2FyZXRQb3MuYmVnaW4tLSkgOiBcIn5cIiA9PT0gbmV3QnVmZmVyW2ldID8gKGFjdGlvbiA9IFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIV9wb3NpdGlvbmluZy5pc01hc2suY2FsbChpbnB1dG1hc2ssIF9wb3NpdGlvbmluZy50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgaSksICEwKSAmJiBvbGRCdWZmZXJbaV0gIT09IG9wdHMucmFkaXhQb2ludCB8fCBjYXJldFBvcy5lbmQrKykgOiBpID0gYmwgOiAoYWN0aW9uID0gXCJpbnNlcnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0J1ZmZlcltpXSksIGNhcmV0UG9zLmJlZ2luLS0sIGNhcmV0UG9zLmVuZC0tKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNhcmV0UG9zXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsIGlucHV0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSwgYnVmZmVyID0gKGlucHV0bWFzay5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpIDogX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpLmpvaW4oXCJcIiksIGNhcmV0UG9zID0gX3Bvc2l0aW9uaW5nLmNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgdm9pZCAwLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSBpZU1vYmlsZUhhbmRsZXIoaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSBhbmFseXNlQ2hhbmdlcyhpbnB1dFZhbHVlLCBidWZmZXIsIGNhcmV0UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgoaW5wdXQuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgZG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0ICYmIGlucHV0LmZvY3VzKCksIFxuICAgICAgICAgICAgICAgICAgICAoMCwgX2lucHV0SGFuZGxpbmcud3JpdGVCdWZmZXIpKGlucHV0LCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSksIFxuICAgICAgICAgICAgICAgICAgICBfcG9zaXRpb25pbmcuY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0LCBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuZW5kLCAhMCksIGNoYW5nZXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgbmR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGVudHJ5LmNoYXJDb2RlQXQoMCksIGlucHV0bWFzay5pZ25vcmFibGUgPSAhMSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFzay4kZWwudHJpZ2dlcihcImtleXVwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb250ZW50QmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlkb3duID0gbmV3ICQuRXZlbnQoXCJrZXlkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bi5rZXlDb2RlID0gX2tleWNvZGUuZGVmYXVsdC5CQUNLU1BBQ0UsIEV2ZW50SGFuZGxlcnMua2V5ZG93bkV2ZW50LmNhbGwoaW5wdXQsIGtleWRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9pbnB1dEhhbmRsaW5nLmFwcGx5SW5wdXRWYWx1ZSkoaW5wdXQsIGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb3NpdGlvbmVuZEV2ZW50OiBmdW5jdGlvbiBjb21wb3NpdGlvbmVuZEV2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2s7XG4gICAgICAgICAgICAgICAgaW5wdXRtYXNrLmlzQ29tcG9zaW5nID0gITEsIGlucHV0bWFzay4kZWwudHJpZ2dlcihcImlucHV0XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uIHNldFZhbHVlRXZlbnQoZSwgYXJndW1lbnRfMSwgYXJndW1lbnRfMikge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaywgaW5wdXQgPSB0aGlzLCB2YWx1ZSA9IGUgJiYgZS5kZXRhaWwgPyBlLmRldGFpbFswXSA6IGFyZ3VtZW50XzE7XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSB2YWx1ZSAmJiAodmFsdWUgPSB0aGlzLmlucHV0bWFzay5fdmFsdWVHZXQoITApKSwgKDAsIF9pbnB1dEhhbmRsaW5nLmFwcGx5SW5wdXRWYWx1ZSkodGhpcywgdmFsdWUpLCBcbiAgICAgICAgICAgICAgICAoZS5kZXRhaWwgJiYgdm9pZCAwICE9PSBlLmRldGFpbFsxXSB8fCB2b2lkIDAgIT09IGFyZ3VtZW50XzIpICYmIF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgdGhpcywgZS5kZXRhaWwgPyBlLmRldGFpbFsxXSA6IGFyZ3VtZW50XzIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzRXZlbnQ6IGZ1bmN0aW9uIGZvY3VzRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaywgb3B0cyA9IGlucHV0bWFzay5vcHRzLCBpbnB1dCA9IHRoaXMsIG5wdFZhbHVlID0gdGhpcy5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgbnB0VmFsdWUgIT09IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIikgJiYgKDAsIFxuICAgICAgICAgICAgICAgIF9pbnB1dEhhbmRsaW5nLndyaXRlQnVmZmVyKSh0aGlzLCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSwgX3Bvc2l0aW9uaW5nLnNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spKSksIFxuICAgICAgICAgICAgICAgICEwICE9PSBvcHRzLnBvc2l0aW9uQ2FyZXRPblRhYiB8fCAhMSAhPT0gaW5wdXRtYXNrLm1vdXNlRW50ZXIgfHwgX3ZhbGlkYXRpb24uaXNDb21wbGV0ZS5jYWxsKGlucHV0bWFzaywgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpICYmIC0xICE9PSBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spIHx8IEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudC5hcHBseSh0aGlzLCBbIGUsICEwIF0pLCBcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2sudW5kb1ZhbHVlID0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnZhbGlkRXZlbnQ6IGZ1bmN0aW9uIGludmFsaWRFdmVudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dG1hc2sudmFsaWRhdGlvbkV2ZW50ID0gITA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VsZWF2ZUV2ZW50OiBmdW5jdGlvbiBtb3VzZWxlYXZlRXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLCBvcHRzID0gaW5wdXRtYXNrLm9wdHMsIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2subW91c2VFbnRlciA9ICExLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmICh0aGlzLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PSB0aGlzICYmICgwLCBcbiAgICAgICAgICAgICAgICBfaW5wdXRIYW5kbGluZy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikodGhpcywgaW5wdXRtYXNrLm9yaWdpbmFsUGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrRXZlbnQ6IGZ1bmN0aW9uIGNsaWNrRXZlbnQoZSwgdGFiYmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLCBpbnB1dCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdDYXJldFBvc2l0aW9uID0gX3Bvc2l0aW9uaW5nLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgdGhpcyksIHRhYmJlZCk7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gbmV3Q2FyZXRQb3NpdGlvbiAmJiBfcG9zaXRpb25pbmcuY2FyZXQuY2FsbChpbnB1dG1hc2ssIHRoaXMsIG5ld0NhcmV0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXRFdmVudDogZnVuY3Rpb24gY3V0RXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaywgbWFza3NldCA9IGlucHV0bWFzay5tYXNrc2V0LCBpbnB1dCA9IHRoaXMsIHBvcyA9IF9wb3NpdGlvbmluZy5jYXJldC5jYWxsKGlucHV0bWFzaywgdGhpcyksIGNsaXBib2FyZERhdGEgPSB3aW5kb3cuY2xpcGJvYXJkRGF0YSB8fCBlLmNsaXBib2FyZERhdGEsIGNsaXBEYXRhID0gaW5wdXRtYXNrLmlzUlRMID8gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuc2xpY2UocG9zLmVuZCwgcG9zLmJlZ2luKSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKHBvcy5iZWdpbiwgcG9zLmVuZCk7XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkRGF0YS5zZXREYXRhKFwidGV4dFwiLCBpbnB1dG1hc2suaXNSVEwgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGNsaXBEYXRhLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCAmJiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksIF92YWxpZGF0aW9uLmhhbmRsZVJlbW92ZS5jYWxsKGlucHV0bWFzaywgdGhpcywgX2tleWNvZGUuZGVmYXVsdC5ERUxFVEUsIHBvcyksIFxuICAgICAgICAgICAgICAgICgwLCBfaW5wdXRIYW5kbGluZy53cml0ZUJ1ZmZlcikodGhpcywgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksIG1hc2tzZXQucCwgZSwgaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbiBibHVyRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaywgb3B0cyA9IGlucHV0bWFzay5vcHRzLCAkID0gaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsICRpbnB1dCA9ICQodGhpcyksIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dG1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9pbnB1dEhhbmRsaW5nLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKSh0aGlzLCBpbnB1dG1hc2sub3JpZ2luYWxQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBucHRWYWx1ZSA9IHRoaXMuaW5wdXRtYXNrLl92YWx1ZUdldCgpLCBidWZmZXIgPSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBucHRWYWx1ZSAmJiAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiAoLTEgPT09IF9wb3NpdGlvbmluZy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaykgJiYgbnB0VmFsdWUgPT09IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSA/IGJ1ZmZlciA9IFtdIDogX2lucHV0SGFuZGxpbmcuY2xlYXJPcHRpb25hbFRhaWwuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlcikpLCBcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IF92YWxpZGF0aW9uLmlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlcikgJiYgKHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImluY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApLCBvcHRzLmNsZWFySW5jb21wbGV0ZSAmJiAoX3Bvc2l0aW9uaW5nLnJlc2V0TWFza1NldC5jYWxsKGlucHV0bWFzayksIGJ1ZmZlciA9IG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyBbXSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuc2xpY2UoKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9pbnB1dEhhbmRsaW5nLndyaXRlQnVmZmVyKSh0aGlzLCBidWZmZXIsIHZvaWQgMCwgZSkpLCBpbnB1dG1hc2sudW5kb1ZhbHVlICE9PSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpICYmIChpbnB1dG1hc2sudW5kb1ZhbHVlID0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbiBtb3VzZWVudGVyRXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLCBvcHRzID0gaW5wdXRtYXNrLm9wdHMsIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2subW91c2VFbnRlciA9ICEwLCAodGhpcy5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBkb2N1bWVudCkuYWN0aXZlRWxlbWVudCAhPT0gdGhpcyAmJiAobnVsbCA9PSBpbnB1dG1hc2sub3JpZ2luYWxQbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyICE9PSBpbnB1dG1hc2sub3JpZ2luYWxQbGFjZWhvbGRlciAmJiAoaW5wdXRtYXNrLm9yaWdpbmFsUGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uSG92ZXIgJiYgKDAsIF9pbnB1dEhhbmRsaW5nLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKSh0aGlzLCAoaW5wdXRtYXNrLmlzUlRMID8gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykpLmpvaW4oXCJcIikpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRFdmVudDogZnVuY3Rpb24gc3VibWl0RXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLCBvcHRzID0gaW5wdXRtYXNrLm9wdHM7XG4gICAgICAgICAgICAgICAgaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSAmJiBpbnB1dG1hc2suJGVsLnRyaWdnZXIoXCJjaGFuZ2VcIiksIFxuICAgICAgICAgICAgICAgIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgLTEgPT09IF9wb3NpdGlvbmluZy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaykgJiYgaW5wdXRtYXNrLl92YWx1ZUdldCAmJiBpbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSAmJiBpbnB1dG1hc2suX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBvcHRzLmNsZWFySW5jb21wbGV0ZSAmJiAhMSA9PT0gX3ZhbGlkYXRpb24uaXNDb21wbGV0ZS5jYWxsKGlucHV0bWFzaywgX3Bvc2l0aW9uaW5nLmdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpICYmIGlucHV0bWFzay5fdmFsdWVTZXQoXCJcIiksIFxuICAgICAgICAgICAgICAgIG9wdHMucmVtb3ZlTWFza09uU3VibWl0ICYmIChpbnB1dG1hc2suX3ZhbHVlU2V0KGlucHV0bWFzay51bm1hc2tlZHZhbHVlKCksICEwKSwgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9pbnB1dEhhbmRsaW5nLndyaXRlQnVmZmVyKShpbnB1dG1hc2suZWwsIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spKTtcbiAgICAgICAgICAgICAgICB9LCAwKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXRFdmVudDogZnVuY3Rpb24gcmVzZXRFdmVudCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2s7XG4gICAgICAgICAgICAgICAgaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX2lucHV0SGFuZGxpbmcuYXBwbHlJbnB1dFZhbHVlKShpbnB1dG1hc2suZWwsIGlucHV0bWFzay5fdmFsdWVHZXQoITApKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZXhwb3J0cy5FdmVudEhhbmRsZXJzID0gRXZlbnRIYW5kbGVycztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLmlwaG9uZSA9IGV4cG9ydHMuaWVtb2JpbGUgPSBleHBvcnRzLm1vYmlsZSA9IGV4cG9ydHMuaWUgPSBleHBvcnRzLnVhID0gdm9pZCAwO1xuICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8IFwiXCIsIGllID0gMCA8IHVhLmluZGV4T2YoXCJNU0lFIFwiKSB8fCAwIDwgdWEuaW5kZXhPZihcIlRyaWRlbnQvXCIpLCBtb2JpbGUgPSBcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdywgaWVtb2JpbGUgPSAvaWVtb2JpbGUvaS50ZXN0KHVhKSwgaXBob25lID0gL2lwaG9uZS9pLnRlc3QodWEpICYmICFpZW1vYmlsZTtcbiAgICAgICAgZXhwb3J0cy5pcGhvbmUgPSBpcGhvbmUsIGV4cG9ydHMuaWVtb2JpbGUgPSBpZW1vYmlsZSwgZXhwb3J0cy5tb2JpbGUgPSBtb2JpbGUsIGV4cG9ydHMuaWUgPSBpZSwgXG4gICAgICAgIGV4cG9ydHMudWEgPSB1YTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBfZXh0ZW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSksIF93aW5kb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oNikpLCBfZGF0YSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygxNykpLCBfZXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9jdW1lbnQgPSBfd2luZG93LmRlZmF1bHQuZG9jdW1lbnQ7XG4gICAgICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lMaWIoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gZWxlbSA6IHRoaXMgaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gdm9pZCAobnVsbCAhPSBlbGVtICYmIGVsZW0gIT09IF93aW5kb3cuZGVmYXVsdCAmJiAodGhpc1swXSA9IGVsZW0ubm9kZU5hbWUgPyBlbGVtIDogdm9pZCAwICE9PSBlbGVtWzBdICYmIGVsZW1bMF0ubm9kZU5hbWUgPyBlbGVtWzBdIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSwgXG4gICAgICAgICAgICB2b2lkIDAgIT09IHRoaXNbMF0gJiYgbnVsbCAhPT0gdGhpc1swXSAmJiAodGhpc1swXS5ldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5IHx8IHt9KSkpIDogbmV3IERlcGVuZGVuY3lMaWIoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgICAgRGVwZW5kZW5jeUxpYi5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICBvbjogX2V2ZW50cy5vbixcbiAgICAgICAgICAgIG9mZjogX2V2ZW50cy5vZmYsXG4gICAgICAgICAgICB0cmlnZ2VyOiBfZXZlbnRzLnRyaWdnZXJcbiAgICAgICAgfSwgRGVwZW5kZW5jeUxpYi5leHRlbmQgPSBfZXh0ZW5kLmRlZmF1bHQsIERlcGVuZGVuY3lMaWIuZGF0YSA9IF9kYXRhLmRlZmF1bHQsIERlcGVuZGVuY3lMaWIuRXZlbnQgPSBfZXZlbnRzLkV2ZW50O1xuICAgICAgICB2YXIgX2RlZmF1bHQgPSBEZXBlbmRlbmN5TGliO1xuICAgICAgICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfSwgX3R5cGVvZihvYmopO1xuICAgICAgICB9XG4gICAgICAgIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBcIm9iamVjdFwiID09PSBfdHlwZW9mKFwidGVzdFwiLl9fcHJvdG9fXykgPyBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuX19wcm90b19fO1xuICAgICAgICB9IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5tYXNrID0gbWFzaywgX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG4gICAgICAgIHZhciBfa2V5Y29kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygwKSksIF9wb3NpdGlvbmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF9pbnB1dEhhbmRsaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgX2V2ZW50cnVsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKSwgX2Vudmlyb25tZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KSwgX3ZhbGlkYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCBfZXZlbnRoYW5kbGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXNrKCkge1xuICAgICAgICAgICAgdmFyIGlucHV0bWFzayA9IHRoaXMsIG9wdHMgPSB0aGlzLm9wdHMsIGVsID0gdGhpcy5lbCwgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRWxlbWVudFR5cGVTdXBwb3J0ZWQoaW5wdXQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwYXRjaFZhbHVlUHJvcGVydHkobnB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZUdldCwgdmFsdWVTZXQ7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHBhdGNoVmFsaG9vayh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC52YWxIb29rcyAmJiAodm9pZCAwID09PSAkLnZhbEhvb2tzW3R5cGVdIHx8ICEwICE9PSAkLnZhbEhvb2tzW3R5cGVdLmlucHV0bWFza3BhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxob29rR2V0ID0gJC52YWxIb29rc1t0eXBlXSAmJiAkLnZhbEhvb2tzW3R5cGVdLmdldCA/ICQudmFsSG9va3NbdHlwZV0uZ2V0IDogZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWxob29rU2V0ID0gJC52YWxIb29rc1t0eXBlXSAmJiAkLnZhbEhvb2tzW3R5cGVdLnNldCA/ICQudmFsSG9va3NbdHlwZV0uc2V0IDogZnVuY3Rpb24oZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udmFsdWUgPSB2YWx1ZSwgZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQudmFsSG9va3NbdHlwZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlucHV0bWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2spIHJldHVybiBlbGVtLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIHZvaWQgMCwgdm9pZCAwLCBlbGVtLmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/IHJlc3VsdCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaG9va0dldChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWxob29rU2V0KGVsZW0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmlucHV0bWFzayAmJiAoMCwgX2lucHV0SGFuZGxpbmcuYXBwbHlJbnB1dFZhbHVlKShlbGVtLCB2YWx1ZSksIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtYXNrcGF0Y2g6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sgPyB0aGlzLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPyB0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAtMSAhPT0gX3Bvc2l0aW9uaW5nLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/ICh0aGlzLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0aGlzICYmIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyAoaW5wdXRtYXNrLmlzUlRMID8gX2lucHV0SGFuZGxpbmcuY2xlYXJPcHRpb25hbFRhaWwuY2FsbChpbnB1dG1hc2ssIF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKCkpLnJldmVyc2UoKSA6IF9pbnB1dEhhbmRsaW5nLmNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoaW5wdXRtYXNrLCBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpKSkuam9pbihcIlwiKSA6IHZhbHVlR2V0LmNhbGwodGhpcykgOiBcIlwiIDogdmFsdWVHZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcywgdmFsdWUpLCB0aGlzLmlucHV0bWFzayAmJiAoMCwgX2lucHV0SGFuZGxpbmcuYXBwbHlJbnB1dFZhbHVlKSh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zdGFsbE5hdGl2ZVZhbHVlU2V0RmFsbGJhY2sobnB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKG5wdCwgXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsIHZhbHVlID0gdGhpcy5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAhPT0gKGlucHV0bWFzay5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnJldmVyc2UoKSA6IF9wb3NpdGlvbmluZy5nZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spKS5qb2luKFwiXCIpICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW5wdXRIYW5kbGluZy5hcHBseUlucHV0VmFsdWUpKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbnB0LmlucHV0bWFzay5fX3ZhbHVlR2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMubm9WYWx1ZVBhdGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcGVydHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihucHQpLCBcInZhbHVlXCIpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5ICYmIHZhbHVlUHJvcGVydHkuZ2V0ICYmIHZhbHVlUHJvcGVydHkuc2V0ID8gKHZhbHVlR2V0ID0gdmFsdWVQcm9wZXJ0eS5nZXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldCA9IHZhbHVlUHJvcGVydHkuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSA6IFwiaW5wdXRcIiAhPT0gbnB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiAodmFsdWVHZXQgPSBmdW5jdGlvbiB2YWx1ZUdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZVNldCA9IGZ1bmN0aW9uIHZhbHVlU2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIG5wdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgKHZhbHVlR2V0ID0gbnB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQgPSBucHQuX19sb29rdXBTZXR0ZXJfXyhcInZhbHVlXCIpLCBucHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGdldHRlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgc2V0dGVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0LmlucHV0bWFzay5fX3ZhbHVlR2V0ID0gdmFsdWVHZXQsIG5wdC5pbnB1dG1hc2suX192YWx1ZVNldCA9IHZhbHVlU2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnB0LmlucHV0bWFzay5fdmFsdWVHZXQgPSBmdW5jdGlvbihvdmVycnVsZVJUTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dG1hc2suaXNSVEwgJiYgITAgIT09IG92ZXJydWxlUlRMID8gdmFsdWVHZXQuY2FsbCh0aGlzLmVsKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHZhbHVlR2V0LmNhbGwodGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBucHQuaW5wdXRtYXNrLl92YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlLCBvdmVycnVsZVJUTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcy5lbCwgbnVsbCA9PSB2YWx1ZSA/IFwiXCIgOiAhMCAhPT0gb3ZlcnJ1bGVSVEwgJiYgaW5wdXRtYXNrLmlzUlRMID8gdmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB2b2lkIDAgPT09IHZhbHVlR2V0ICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uIHZhbHVlR2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTZXQgPSBmdW5jdGlvbiB2YWx1ZVNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBhdGNoVmFsaG9vayhucHQudHlwZSksIGluc3RhbGxOYXRpdmVWYWx1ZVNldEZhbGxiYWNrKG5wdCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFwidGV4dGFyZWFcIiAhPT0gaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICYmIG9wdHMuaWdub3JhYmxlcy5wdXNoKF9rZXljb2RlLmRlZmF1bHQuRU5URVIpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VHlwZSA9IGlucHV0LmdldEF0dHJpYnV0ZShcInR5cGVcIiksIGlzU3VwcG9ydGVkID0gXCJpbnB1dFwiID09PSBpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgJiYgb3B0cy5zdXBwb3J0c0lucHV0VHlwZS5pbmNsdWRlcyhlbGVtZW50VHlwZSkgfHwgaW5wdXQuaXNDb250ZW50RWRpdGFibGUgfHwgXCJ0ZXh0YXJlYVwiID09PSBpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkgaWYgKFwiaW5wdXRcIiA9PT0gaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGVtZW50VHlwZSksIGlzU3VwcG9ydGVkID0gXCJ0ZXh0XCIgPT09IGVsLnR5cGUsIGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaXNTdXBwb3J0ZWQgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gITEgIT09IGlzU3VwcG9ydGVkID8gcGF0Y2hWYWx1ZVByb3BlcnR5KGlucHV0KSA6IGlucHV0LmlucHV0bWFzayA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9mZihlbCk7XG4gICAgICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSBpc0VsZW1lbnRUeXBlU3VwcG9ydGVkKGVsLCBvcHRzKTtcbiAgICAgICAgICAgIGlmICghMSAhPT0gaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2sub3JpZ2luYWxQbGFjZWhvbGRlciA9IGVsLnBsYWNlaG9sZGVyLCBpbnB1dG1hc2subWF4TGVuZ3RoID0gdm9pZCAwICE9PSBlbCA/IGVsLm1heExlbmd0aCA6IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgLTEgPT09IGlucHV0bWFzay5tYXhMZW5ndGggJiYgKGlucHV0bWFzay5tYXhMZW5ndGggPSB2b2lkIDApLCBcImlucHV0TW9kZVwiIGluIGVsICYmIG51bGwgPT09IGVsLmdldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiKSAmJiAoZWwuaW5wdXRNb2RlID0gb3B0cy5pbnB1dG1vZGUsIFxuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCBvcHRzLmlucHV0bW9kZSkpLCAhMCA9PT0gaXNTdXBwb3J0ZWQgJiYgKG9wdHMuc2hvd01hc2tPbkZvY3VzID0gb3B0cy5zaG93TWFza09uRm9jdXMgJiYgLTEgPT09IFsgXCJjYy1udW1iZXJcIiwgXCJjYy1leHBcIiBdLmluZGV4T2YoZWwuYXV0b2NvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgX2Vudmlyb25tZW50LmlwaG9uZSAmJiAob3B0cy5pbnNlcnRNb2RlVmlzdWFsID0gITEpLCBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcInN1Ym1pdFwiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLnN1Ym1pdEV2ZW50KSwgXG4gICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJyZXNldFwiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLnJlc2V0RXZlbnQpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImJsdXJcIiwgX2V2ZW50aGFuZGxlcnMuRXZlbnRIYW5kbGVycy5ibHVyRXZlbnQpLCBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImZvY3VzXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMuZm9jdXNFdmVudCksIFxuICAgICAgICAgICAgICAgIF9ldmVudHJ1bGVyLkV2ZW50UnVsZXIub24oZWwsIFwiaW52YWxpZFwiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLmludmFsaWRFdmVudCksIFxuICAgICAgICAgICAgICAgIF9ldmVudHJ1bGVyLkV2ZW50UnVsZXIub24oZWwsIFwiY2xpY2tcIiwgX2V2ZW50aGFuZGxlcnMuRXZlbnRIYW5kbGVycy5jbGlja0V2ZW50KSwgXG4gICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWxlYXZlXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMubW91c2VsZWF2ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWVudGVyXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgXG4gICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJwYXN0ZVwiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImN1dFwiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLmN1dEV2ZW50KSwgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJjb21wbGV0ZVwiLCBvcHRzLm9uY29tcGxldGUpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImluY29tcGxldGVcIiwgb3B0cy5vbmluY29tcGxldGUpLCBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImNsZWFyZWRcIiwgb3B0cy5vbmNsZWFyZWQpLCBcbiAgICAgICAgICAgICAgICAhMCAhPT0gb3B0cy5pbnB1dEV2ZW50T25seSAmJiAoX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJrZXlkb3duXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMua2V5ZG93bkV2ZW50KSwgXG4gICAgICAgICAgICAgICAgX2V2ZW50cnVsZXIuRXZlbnRSdWxlci5vbihlbCwgXCJrZXlwcmVzc1wiLCBfZXZlbnRoYW5kbGVycy5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImtleXVwXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMua2V5dXBFdmVudCkpLCBcbiAgICAgICAgICAgICAgICAoX2Vudmlyb25tZW50Lm1vYmlsZSB8fCBvcHRzLmlucHV0RXZlbnRPbmx5KSAmJiBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIiksIFxuICAgICAgICAgICAgICAgIF9ldmVudHJ1bGVyLkV2ZW50UnVsZXIub24oZWwsIFwiaW5wdXRcIiwgX2V2ZW50aGFuZGxlcnMuRXZlbnRIYW5kbGVycy5pbnB1dEZhbGxCYWNrRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uZW5kXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMuY29tcG9zaXRpb25lbmRFdmVudCkpLCBcbiAgICAgICAgICAgICAgICBfZXZlbnRydWxlci5FdmVudFJ1bGVyLm9uKGVsLCBcInNldHZhbHVlXCIsIF9ldmVudGhhbmRsZXJzLkV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudCksIFxuICAgICAgICAgICAgICAgIGlucHV0bWFzay51bmRvVmFsdWUgPSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSAoZWwuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgZG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApIHx8ICExID09PSBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IGFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBfaW5wdXRIYW5kbGluZy5hcHBseUlucHV0VmFsdWUpKGVsLCBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAhMSA9PT0gX3ZhbGlkYXRpb24uaXNDb21wbGV0ZS5jYWxsKGlucHV0bWFzaywgYnVmZmVyKSAmJiBvcHRzLmNsZWFySW5jb21wbGV0ZSAmJiBfcG9zaXRpb25pbmcucmVzZXRNYXNrU2V0LmNhbGwoaW5wdXRtYXNrKSwgXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgYWN0aXZlRWxlbWVudCAhPT0gZWwgJiYgKC0xID09PSBfcG9zaXRpb25pbmcuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spID8gYnVmZmVyID0gW10gOiBfaW5wdXRIYW5kbGluZy5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKGlucHV0bWFzaywgYnVmZmVyKSksIFxuICAgICAgICAgICAgICAgICAgICAoITEgPT09IG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgfHwgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgYWN0aXZlRWxlbWVudCA9PT0gZWwgfHwgXCJcIiAhPT0gZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgX2lucHV0SGFuZGxpbmcud3JpdGVCdWZmZXIpKGVsLCBidWZmZXIpLCBhY3RpdmVFbGVtZW50ID09PSBlbCAmJiBfcG9zaXRpb25pbmcuY2FyZXQuY2FsbChpbnB1dG1hc2ssIGVsLCBfcG9zaXRpb25pbmcuc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIF9wb3NpdGlvbmluZy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaykpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLkV2ZW50UnVsZXIgPSB2b2lkIDA7XG4gICAgICAgIHZhciBfaW5wdXRtYXNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSwgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfcG9zaXRpb25pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfaW5wdXRIYW5kbGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgRXZlbnRSdWxlciA9IHtcbiAgICAgICAgICAgIG9uOiBmdW5jdGlvbiBvbihpbnB1dCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCA9IGlucHV0LmlucHV0bWFzay5kZXBlbmRlbmN5TGliLCBldiA9IGZ1bmN0aW9uIGV2KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50ICYmIChlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGUsIGFyZ3VtZW50c1swXSA9IGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsIGFyZ3MsIGlucHV0bWFzayA9IHRoYXQuaW5wdXRtYXNrLCBvcHRzID0gaW5wdXRtYXNrID8gaW5wdXRtYXNrLm9wdHMgOiB2b2lkIDAsICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaW5wdXRtYXNrICYmIFwiRk9STVwiICE9PSB0aGlzLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1PcHRzID0gJC5kYXRhKHRoYXQsIFwiX2lucHV0bWFza19vcHRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGF0KS5vZmYoKSwgaW1PcHRzICYmIG5ldyBfaW5wdXRtYXNrLmRlZmF1bHQoaW1PcHRzKS5tYXNrKHRoYXQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic2V0dmFsdWVcIiA9PT0gZS50eXBlIHx8IFwiRk9STVwiID09PSB0aGlzLm5vZGVOYW1lIHx8ICEodGhhdC5kaXNhYmxlZCB8fCB0aGF0LnJlYWRPbmx5ICYmICEoXCJrZXlkb3duXCIgPT09IGUudHlwZSAmJiBlLmN0cmxLZXkgJiYgNjcgPT09IGUua2V5Q29kZSB8fCAhMSA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGUua2V5Q29kZSA9PT0gX2tleWNvZGUuZGVmYXVsdC5UQUIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5wdXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBpbnB1dG1hc2suc2tpcElucHV0RXZlbnQgfHwgZS5pbnB1dFR5cGUgJiYgXCJpbnNlcnRDb21wb3NpdGlvblRleHRcIiA9PT0gZS5pbnB1dFR5cGUpIHJldHVybiBpbnB1dG1hc2suc2tpcElucHV0RXZlbnQgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFzay5za2lwS2V5UHJlc3NFdmVudCA9ICExLCBpbnB1dG1hc2suc2tpcElucHV0RXZlbnQgPSBpbnB1dG1hc2suaXNDb21wb3NpbmcgPSBlLmtleUNvZGUgPT09IF9rZXljb2RlLmRlZmF1bHQuS0VZXzIyOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJrZXl1cFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFzay5pc0NvbXBvc2luZyAmJiAoaW5wdXRtYXNrLnNraXBJbnB1dEV2ZW50ID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaW5wdXRtYXNrLnNraXBLZXlQcmVzc0V2ZW50KSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2suc2tpcEtleVByZXNzRXZlbnQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dG1hc2sudmFsaWRhdGlvbkV2ZW50ID8gKGlucHV0bWFzay52YWxpZGF0aW9uRXZlbnQgPSAhMSwgaW5wdXQuYmx1cigpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9pbnB1dEhhbmRsaW5nLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShpbnB1dCwgKGlucHV0bWFzay5pc1JUTCA/IF9wb3NpdGlvbmluZy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuc2xpY2UoKS5yZXZlcnNlKCkgOiBfcG9zaXRpb25pbmcuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spKS5qb2luKFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzZTMpKSA6IChhcmdzID0gYXJndW1lbnRzLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrICYmIGV2ZW50SGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCkpLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbCA9IGV2ZW50SGFuZGxlci5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSA9PT0gcmV0dXJuVmFsICYmIChlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKCkpLCByZXR1cm5WYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXSA9IGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXSB8fCBbXSwgaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZXYpLCBcbiAgICAgICAgICAgICAgICBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdLmluY2x1ZGVzKGV2ZW50TmFtZSkgPyBudWxsICE9PSBpbnB1dC5mb3JtICYmICQoaW5wdXQuZm9ybSkub24oZXZlbnROYW1lLCBldi5iaW5kKGlucHV0KSkgOiAkKGlucHV0KS5vbihldmVudE5hbWUsIGV2KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmY6IGZ1bmN0aW9uIG9mZihpbnB1dCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQgPSBpbnB1dC5pbnB1dG1hc2suZGVwZW5kZW5jeUxpYiwgZXZlbnRzID0gaW5wdXQuaW5wdXRtYXNrLmV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZlbnROYW1lIGluIGV2ZW50ICYmIChldmVudHMgPSBbXSwgZXZlbnRzW2V2ZW50XSA9IGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnRdKSwgXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZBcnIgPSBldmVudHNbZXZlbnROYW1lXTsgMCA8IGV2QXJyLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZBcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIgXS5pbmNsdWRlcyhldmVudE5hbWUpID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9mZihldmVudE5hbWUsIGV2KSA6ICQoaW5wdXQpLm9mZihldmVudE5hbWUsIGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGV4cG9ydHMuRXZlbnRSdWxlciA9IEV2ZW50UnVsZXI7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgICAgICAgIH0sIF90eXBlb2Yob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsIHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSwgaSA9IDEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZXAgPSAhMTtcbiAgICAgICAgICAgIGZvciAoXCJib29sZWFuXCIgPT0gdHlwZW9mIHRhcmdldCAmJiAoZGVlcCA9IHRhcmdldCwgdGFyZ2V0ID0gYXJndW1lbnRzW2ldIHx8IHt9LCBcbiAgICAgICAgICAgIGkrKyksIFwib2JqZWN0XCIgIT09IF90eXBlb2YodGFyZ2V0KSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHRhcmdldCAmJiAodGFyZ2V0ID0ge30pOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChudWxsICE9IChvcHRpb25zID0gYXJndW1lbnRzW2ldKSkgZm9yIChuYW1lIGluIG9wdGlvbnMpIHNyYyA9IHRhcmdldFtuYW1lXSwgXG4gICAgICAgICAgICBjb3B5ID0gb3B0aW9uc1tuYW1lXSwgdGFyZ2V0ICE9PSBjb3B5ICYmIChkZWVwICYmIGNvcHkgJiYgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGNvcHkpKSkgPyAoY2xvbmUgPSBjb3B5SXNBcnJheSA/IChjb3B5SXNBcnJheSA9ICExLCBcbiAgICAgICAgICAgIHNyYyAmJiBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbXSkgOiBzcmMgJiYgXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNyYykgPyBzcmMgOiB7fSwgXG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpKSA6IHZvaWQgMCAhPT0gY29weSAmJiAodGFyZ2V0W25hbWVdID0gY29weSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5kZWZhdWx0ID0gZXh0ZW5kO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICAgICAgICB2YXIgZXNjYXBlUmVnZXhSZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXFwiICsgWyBcIi9cIiwgXCIuXCIsIFwiKlwiLCBcIitcIiwgXCI/XCIsIFwifFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIlxcXFxcIiwgXCIkXCIsIFwiXlwiIF0uam9pbihcInxcXFxcXCIpICsgXCIpXCIsIFwiZ2ltXCIpO1xuICAgICAgICBmdW5jdGlvbiBfZGVmYXVsdChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZShlc2NhcGVSZWdleFJlZ2V4LCBcIlxcXFwkMVwiKTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMCwgX193ZWJwYWNrX3JlcXVpcmVfXygxNiksIF9fd2VicGFja19yZXF1aXJlX18oMjIpLCBcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXygyMyksIF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuICAgICAgICB2YXIgX2lucHV0bWFzazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMSkpO1xuICAgICAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9kZWZhdWx0ID0gX2lucHV0bWFzazIuZGVmYXVsdDtcbiAgICAgICAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX2lucHV0bWFzayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygxKSk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBfaW5wdXRtYXNrLmRlZmF1bHQuZXh0ZW5kRGVmaW5pdGlvbnMoe1xuICAgICAgICAgICAgQToge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCImXCI6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLUZhLWZdXCIsXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpcFZhbGlkYXRvclJlZ2V4ID0gbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIik7XG4gICAgICAgIGZ1bmN0aW9uIGlwVmFsaWRhdG9yKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hycyA9IC0xIDwgcG9zIC0gMSAmJiBcIi5cIiAhPT0gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPyAoY2hycyA9IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdICsgY2hycywgXG4gICAgICAgICAgICAtMSA8IHBvcyAtIDIgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDJdID8gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gKyBjaHJzIDogXCIwXCIgKyBjaHJzKSA6IFwiMDBcIiArIGNocnMsIFxuICAgICAgICAgICAgaXBWYWxpZGF0b3JSZWdleC50ZXN0KGNocnMpO1xuICAgICAgICB9XG4gICAgICAgIF9pbnB1dG1hc2suZGVmYXVsdC5leHRlbmRBbGlhc2VzKHtcbiAgICAgICAgICAgIGNzc3VuaXQ6IHtcbiAgICAgICAgICAgICAgICByZWdleDogXCJbKy1dP1swLTldK1xcXFwuPyhbMC05XSspPyhweHxlbXxyZW18ZXh8JXxpbnxjbXxtbXxwdHxwYylcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiBcIihodHRwcz98ZnRwKTovLy4qXCIsXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICAgICAga2VlcFN0YXRpYzogITEsXG4gICAgICAgICAgICAgICAgdGFiVGhyb3VnaDogITBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpcDoge1xuICAgICAgICAgICAgICAgIG1hc2s6IFwiaVtpW2ldXS5qW2pbal1dLmtba1trXV0ubFtsW2xdXVwiLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogaXBWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgajoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBpcFZhbGlkYXRvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGlwVmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogaXBWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uIG9uVW5NYXNrKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIG1hc2s6IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLFxuICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCIsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVQYXN0ZTogZnVuY3Rpb24gb25CZWZvcmVQYXN0ZShwYXN0ZWRWYWx1ZSwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzdGVkVmFsdWUgPSBwYXN0ZWRWYWx1ZS50b0xvd2VyQ2FzZSgpLCBwYXN0ZWRWYWx1ZS5yZXBsYWNlKFwibWFpbHRvOlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTEtXFx1ZmYxOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNSEjJCUmJyorLz0/Xl9ge3x9fi1dXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16LV1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24gb25Vbk1hc2sobWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImVtYWlsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWM6IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBcIiMjOiMjOiMjOiMjOiMjOiMjXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aW46IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBcIlZ7MTN9OXs0fVwiLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIFY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1ISi1OUFItWmEtaGotbnByLXpcXFxcZF1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITAsXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzc246IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjk5OS05OS05OTk5XCIsXG4gICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uIHBvc3RWYWxpZGF0aW9uKGJ1ZmZlciwgcG9zLCBjLCBjdXJyZW50UmVzdWx0LCBvcHRzLCBtYXNrc2V0LCBzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC9eKD8hMjE5LTA5LTk5OTl8MDc4LTA1LTExMjApKD8hNjY2fDAwMHw5LnsyfSkuezN9LSg/ITAwKS57Mn0tKD8hMHs0fSkuezR9JC8udGVzdChidWZmZXIuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9kZWZhdWx0KG93bmVyLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB2YWx1ZSkgcmV0dXJuIG93bmVyLl9fZGF0YSA/IG93bmVyLl9fZGF0YVtrZXldIDogbnVsbDtcbiAgICAgICAgICAgIG93bmVyLl9fZGF0YSA9IG93bmVyLl9fZGF0YSB8fCB7fSwgb3duZXIuX19kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5vbiA9IG9uLCBleHBvcnRzLm9mZiA9IG9mZiwgZXhwb3J0cy50cmlnZ2VyID0gdHJpZ2dlciwgZXhwb3J0cy5FdmVudCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIF9leHRlbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMTMpKSwgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2KSksIF9pbnB1dG1hc2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oOSkpLCBFdmVudDtcbiAgICAgICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50KGV2LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgPyBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGhhbmRsZXIsICExKSA6IGVsZW0uYXR0YWNoRXZlbnQgJiYgZWxlbS5hdHRhY2hFdmVudChcIm9uXCIgKyBldiwgaGFuZGxlciksIFxuICAgICAgICAgICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdID0gZXZlbnRSZWdpc3RyeVtldl0gfHwge30sIGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0gPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdIHx8IFtdLCBcbiAgICAgICAgICAgICAgICBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQodGhpc1swXSkpIGZvciAodmFyIGV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIGVsZW0gPSB0aGlzWzBdLCBfZXZlbnRzID0gZXZlbnRzLnNwbGl0KFwiIFwiKSwgZW5keCA9IDA7IGVuZHggPCBfZXZlbnRzLmxlbmd0aDsgZW5keCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgZXYgPSBuc0V2ZW50WzBdLCBuYW1lc3BhY2UgPSBuc0V2ZW50WzFdIHx8IFwiZ2xvYmFsXCI7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoZXYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRSZWdpc3RyeSwgZWxlbTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGV2LCBuYW1lc3BhY2UsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgaW4gZXZlbnRSZWdpc3RyeSA9PSAhMCkgaWYgKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgaGFuZGxlciwgITEpIDogZWxlbS5kZXRhY2hFdmVudCAmJiBlbGVtLmRldGFjaEV2ZW50KFwib25cIiArIGV2LCBoYW5kbGVyKSwgXG4gICAgICAgICAgICAgICAgXCJnbG9iYWxcIiA9PT0gbmFtZXNwYWNlKSBmb3IgKHZhciBubXNwIGluIGV2ZW50UmVnaXN0cnlbZXZdKSBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXS5zcGxpY2UoZXZlbnRSZWdpc3RyeVtldl1bbm1zcF0uaW5kZXhPZihoYW5kbGVyKSwgMSk7IGVsc2UgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5zcGxpY2UoZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5pbmRleE9mKGhhbmRsZXIpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc29sdmVOYW1lc3BhY2UoZXYsIG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciBldnRzID0gW10sIGhuZHgsIGhuZEw7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCBldi5sZW5ndGgpIGlmICh2b2lkIDAgPT09IGhhbmRsZXIpIGZvciAoaG5keCA9IDAsIGhuZEwgPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSAmJiAwIDwgbmFtZXNwYWNlLmxlbmd0aCA/IG5hbWVzcGFjZSA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV1baG5keF1cbiAgICAgICAgICAgICAgICB9KTsgZWxzZSBldnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBldjogZXYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlICYmIDAgPCBuYW1lc3BhY2UubGVuZ3RoID8gbmFtZXNwYWNlIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmICgwIDwgbmFtZXNwYWNlLmxlbmd0aCkgZm9yICh2YXIgZXZOZHggaW4gZXZlbnRSZWdpc3RyeSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2TmR4XSkgaWYgKG5tc3AgPT09IG5hbWVzcGFjZSkgaWYgKHZvaWQgMCA9PT0gaGFuZGxlcikgZm9yIChobmR4ID0gMCwgXG4gICAgICAgICAgICAgICAgaG5kTCA9IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdW2huZHhdXG4gICAgICAgICAgICAgICAgfSk7IGVsc2UgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZ0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIGVsZW0gPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9ldmVudHMgPSBldmVudHMuc3BsaXQoXCIgXCIpLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIGZvciAodmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgb2ZmRXZlbnRzID0gcmVzb2x2ZU5hbWVzcGFjZShuc0V2ZW50WzBdLCBuc0V2ZW50WzFdKSwgaSA9IDAsIG9mZkV2ZW50c0wgPSBvZmZFdmVudHMubGVuZ3RoOyBpIDwgb2ZmRXZlbnRzTDsgaSsrKSByZW1vdmVFdmVudChvZmZFdmVudHNbaV0uZXYsIG9mZkV2ZW50c1tpXS5uYW1lc3BhY2UsIG9mZkV2ZW50c1tpXS5oYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQodGhpc1swXSkpIGZvciAodmFyIGV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIGVsZW0gPSB0aGlzWzBdLCBfZXZlbnRzID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZXZlbnRzID8gZXZlbnRzLnNwbGl0KFwiIFwiKSA6IFsgZXZlbnRzLnR5cGUgXSwgZW5keCA9IDA7IGVuZHggPCBfZXZlbnRzLmxlbmd0aDsgZW5keCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgZXYgPSBuc0V2ZW50WzBdLCBuYW1lc3BhY2UgPSBuc0V2ZW50WzFdIHx8IFwiZ2xvYmFsXCI7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZG9jdW1lbnQgJiYgXCJnbG9iYWxcIiA9PT0gbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldm50LCBpLCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2bnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXYsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksIGV2bnQuaW5pdEN1c3RvbUV2ZW50KGV2LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnR5cGUgJiYgKDAsIF9leHRlbmQuZGVmYXVsdCkoZXZudCwgZXZlbnRzKSwgZWxlbS5kaXNwYXRjaEV2ZW50KGV2bnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksIGV2bnQuZXZlbnRUeXBlID0gZXYsIGV2bnQuZGV0YWlsID0gYXJndW1lbnRzWzFdLCBcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnR5cGUgJiYgKDAsIF9leHRlbmQuZGVmYXVsdCkoZXZudCwgZXZlbnRzKSwgZWxlbS5maXJlRXZlbnQoXCJvblwiICsgZXZudC5ldmVudFR5cGUsIGV2bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSBldmVudFJlZ2lzdHJ5W2V2XSkgaWYgKGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXS50eXBlID8gYXJndW1lbnRzWzBdIDogX2lucHV0bWFzay5kZWZhdWx0LkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXS5kZXRhaWwgPSBhcmd1bWVudHMuc2xpY2UoMSksIFwiZ2xvYmFsXCIgPT09IG5hbWVzcGFjZSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2XSkgZm9yIChpID0gMDsgaSA8IGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXVtpXS5hcHBseShlbGVtLCBhcmd1bWVudHMpOyBlbHNlIGZvciAoaSA9IDA7IGkgPCBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdW2ldLmFwcGx5KGVsZW0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLkV2ZW50ID0gRXZlbnQsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX3dpbmRvdy5kZWZhdWx0LkN1c3RvbUV2ZW50ID8gZXhwb3J0cy5FdmVudCA9IEV2ZW50ID0gX3dpbmRvdy5kZWZhdWx0LkN1c3RvbUV2ZW50IDogKGV4cG9ydHMuRXZlbnQgPSBFdmVudCA9IGZ1bmN0aW9uIEV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITEsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB2b2lkIDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpLCBcbiAgICAgICAgICAgIGV2dDtcbiAgICAgICAgfSwgRXZlbnQucHJvdG90eXBlID0gX3dpbmRvdy5kZWZhdWx0LkV2ZW50LnByb3RvdHlwZSk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgZXhwb3J0cy5nZW5lcmF0ZU1hc2tTZXQgPSBnZW5lcmF0ZU1hc2tTZXQsIGV4cG9ydHMuYW5hbHlzZU1hc2sgPSBhbmFseXNlTWFzaztcbiAgICAgICAgdmFyIF9pbnB1dG1hc2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oOSkpO1xuICAgICAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVNYXNrU2V0KG9wdHMsIG5vY2FjaGUpIHtcbiAgICAgICAgICAgIHZhciBtcztcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFzayhtYXNrLCBtZXRhZGF0YSwgb3B0cykge1xuICAgICAgICAgICAgICAgIHZhciByZWdleE1hc2sgPSAhMSwgbWFza3NldERlZmluaXRpb24sIG1hc2tkZWZLZXk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG1hc2sgJiYgXCJcIiAhPT0gbWFzayB8fCAocmVnZXhNYXNrID0gbnVsbCAhPT0gb3B0cy5yZWdleCwgbWFzayA9IHJlZ2V4TWFzayA/IChtYXNrID0gb3B0cy5yZWdleCwgXG4gICAgICAgICAgICAgICAgbWFzay5yZXBsYWNlKC9eKFxcXikoLiopKFxcJCkkLywgXCIkMlwiKSkgOiAocmVnZXhNYXNrID0gITAsIFwiLipcIikpLCAxID09PSBtYXNrLmxlbmd0aCAmJiAhMSA9PT0gb3B0cy5ncmVlZHkgJiYgMCAhPT0gb3B0cy5yZXBlYXQgJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgMCA8IG9wdHMucmVwZWF0IHx8IFwiKlwiID09PSBvcHRzLnJlcGVhdCB8fCBcIitcIiA9PT0gb3B0cy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcGVhdFN0YXJ0ID0gXCIqXCIgPT09IG9wdHMucmVwZWF0ID8gMCA6IFwiK1wiID09PSBvcHRzLnJlcGVhdCA/IDEgOiBvcHRzLnJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IG9wdHMuZ3JvdXBtYXJrZXJbMF0gKyBtYXNrICsgb3B0cy5ncm91cG1hcmtlclsxXSArIG9wdHMucXVhbnRpZmllcm1hcmtlclswXSArIHJlcGVhdFN0YXJ0ICsgXCIsXCIgKyBvcHRzLnJlcGVhdCArIG9wdHMucXVhbnRpZmllcm1hcmtlclsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tkZWZLZXkgPSByZWdleE1hc2sgPyBcInJlZ2V4X1wiICsgb3B0cy5yZWdleCA6IG9wdHMubnVtZXJpY0lucHV0ID8gbWFzay5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IG1hc2ssIFxuICAgICAgICAgICAgICAgICExICE9PSBvcHRzLmtlZXBTdGF0aWMgJiYgKG1hc2tkZWZLZXkgPSBcImtzX1wiICsgbWFza2RlZktleSksIHZvaWQgMCA9PT0gSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldIHx8ICEwID09PSBub2NhY2hlID8gKG1hc2tzZXREZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW46IElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2sobWFzaywgcmVnZXhNYXNrLCBvcHRzKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBfYnVmZmVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICB0ZXN0czoge30sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGppdE9mZnNldDoge31cbiAgICAgICAgICAgICAgICB9LCAhMCAhPT0gbm9jYWNoZSAmJiAoSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldID0gbWFza3NldERlZmluaXRpb24sIFxuICAgICAgICAgICAgICAgIG1hc2tzZXREZWZpbml0aW9uID0gX2lucHV0bWFzay5kZWZhdWx0LmV4dGVuZCghMCwge30sIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSkpKSA6IG1hc2tzZXREZWZpbml0aW9uID0gX2lucHV0bWFzay5kZWZhdWx0LmV4dGVuZCghMCwge30sIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSksIFxuICAgICAgICAgICAgICAgIG1hc2tzZXREZWZpbml0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb3B0cy5tYXNrICYmIChvcHRzLm1hc2sgPSBvcHRzLm1hc2sob3B0cykpLCBBcnJheS5pc0FycmF5KG9wdHMubWFzaykpIHtcbiAgICAgICAgICAgICAgICBpZiAoMSA8IG9wdHMubWFzay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gb3B0cy5rZWVwU3RhdGljICYmIChvcHRzLmtlZXBTdGF0aWMgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXNrID0gb3B0cy5ncm91cG1hcmtlclswXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChvcHRzLmlzUlRMID8gb3B0cy5tYXNrLnJldmVyc2UoKSA6IG9wdHMubWFzaykuZm9yRWFjaChmdW5jdGlvbihtc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgPCBhbHRNYXNrLmxlbmd0aCAmJiAoYWx0TWFzayArPSBvcHRzLmdyb3VwbWFya2VyWzFdICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlclswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBtc2subWFzayAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIG1zay5tYXNrID8gYWx0TWFzayArPSBtc2subWFzayA6IGFsdE1hc2sgKz0gbXNrO1xuICAgICAgICAgICAgICAgICAgICB9KSwgYWx0TWFzayArPSBvcHRzLmdyb3VwbWFya2VyWzFdLCBnZW5lcmF0ZU1hc2soYWx0TWFzaywgb3B0cy5tYXNrLCBvcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5tYXNrID0gb3B0cy5tYXNrLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGwgPT09IG9wdHMua2VlcFN0YXRpYyAmJiAob3B0cy5rZWVwU3RhdGljID0gITEpLCBtcyA9IG9wdHMubWFzayAmJiB2b2lkIDAgIT09IG9wdHMubWFzay5tYXNrICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb3B0cy5tYXNrLm1hc2sgPyBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLm1hc2ssIG9wdHMubWFzaywgb3B0cykgOiBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLCBvcHRzLm1hc2ssIG9wdHMpLCBcbiAgICAgICAgICAgIG1zO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFuYWx5c2VNYXNrKG1hc2ssIHJlZ2V4TWFzaywgb3B0cykge1xuICAgICAgICAgICAgdmFyIHRva2VuaXplciA9IC8oPzpbPyorXXxcXHtbMC05KypdKyg/OixbMC05KypdKik/KD86XFx8WzAtOSsqXSopP1xcfSl8W14uPyorXiR7W10oKXxcXFxcXSt8Li9nLCByZWdleFRva2VuaXplciA9IC9cXFtcXF4/XT8oPzpbXlxcXFxcXF1dK3xcXFxcW1xcU1xcc10/KSpdP3xcXFxcKD86MCg/OlswLTNdWzAtN117MCwyfXxbNC03XVswLTddPyk/fFsxLTldWzAtOV0qfHhbMC05QS1GYS1mXXsyfXx1WzAtOUEtRmEtZl17NH18Y1tBLVphLXpdfFtcXFNcXHNdPyl8XFwoKD86XFw/Wzo9IV0/KT98KD86Wz8qK118XFx7WzAtOV0rKD86LFswLTldKik/XFx9KVxcPz98W14uPyorXiR7WygpfFxcXFxdK3wuL2csIGVzY2FwZWQgPSAhMSwgY3VycmVudFRva2VuID0gbmV3IE1hc2tUb2tlbigpLCBtYXRjaCwgbSwgb3BlbmVuaW5ncyA9IFtdLCBtYXNrVG9rZW5zID0gW10sIG9wZW5pbmdUb2tlbiwgY3VycmVudE9wZW5pbmdUb2tlbiwgYWx0ZXJuYXRvciwgbGFzdE1hdGNoLCBjbG9zZVJlZ2V4R3JvdXAgPSAhMTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIE1hc2tUb2tlbihpc0dyb3VwLCBpc09wdGlvbmFsLCBpc1F1YW50aWZpZXIsIGlzQWx0ZXJuYXRvcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IFtdLCB0aGlzLm9wZW5Hcm91cCA9IGlzR3JvdXAgfHwgITEsIHRoaXMuYWx0ZXJuYXRvckdyb3VwID0gITEsIHRoaXMuaXNHcm91cCA9IGlzR3JvdXAgfHwgITEsIFxuICAgICAgICAgICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IGlzT3B0aW9uYWwgfHwgITEsIHRoaXMuaXNRdWFudGlmaWVyID0gaXNRdWFudGlmaWVyIHx8ICExLCB0aGlzLmlzQWx0ZXJuYXRvciA9IGlzQWx0ZXJuYXRvciB8fCAhMSwgXG4gICAgICAgICAgICAgICAgdGhpcy5xdWFudGlmaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpbnNlcnRUZXN0RGVmaW5pdGlvbihtdG9rZW4sIGVsZW1lbnQsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB2b2lkIDAgIT09IHBvc2l0aW9uID8gcG9zaXRpb24gOiBtdG9rZW4ubWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZNYXRjaCA9IG10b2tlbi5tYXRjaGVzW3Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4TWFzaykgMCA9PT0gZWxlbWVudC5pbmRleE9mKFwiW1wiKSB8fCBlc2NhcGVkICYmIC9cXFxcZHxcXFxcc3xcXFxcd10vaS50ZXN0KGVsZW1lbnQpIHx8IFwiLlwiID09PSBlbGVtZW50ID8gbXRva2VuLm1hdGNoZXMuc3BsaWNlKHBvc2l0aW9uKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgZm46IG5ldyBSZWdFeHAoZWxlbWVudCwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IHByZXZNYXRjaCA/IFwibWFzdGVyXCIgOiBwcmV2TWF0Y2guZGVmICE9PSBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRlZjogZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgfSkgOiAoZXNjYXBlZCAmJiAoZWxlbWVudCA9IGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAxXSksIGVsZW1lbnQuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbihsbW50LCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXSwgbXRva2VuLm1hdGNoZXMuc3BsaWNlKHBvc2l0aW9uKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBsbW50KSA/IG5ldyBSZWdFeHAoXCJbXCIgKyAob3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQpICsgXCJdXCIsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gcHJldk1hdGNoID8gXCJtYXN0ZXJcIiA6IHByZXZNYXRjaC5kZWYgIT09IGxtbnQgJiYgITAgIT09IHByZXZNYXRjaC5zdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWY6IG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBsbW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCAhPT0gb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sID8gbG1udCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogKGVzY2FwZWQgPyBcIidcIiA6IFwiXCIpICsgbG1udFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSksIGVzY2FwZWQgPSAhMTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrZGVmID0gb3B0cy5kZWZpbml0aW9ucyAmJiBvcHRzLmRlZmluaXRpb25zW2VsZW1lbnRdIHx8IG9wdHMudXNlUHJvdG90eXBlRGVmaW5pdGlvbnMgJiYgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9uc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgbWFza2RlZiAmJiAhZXNjYXBlZCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogbWFza2RlZi52YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiBtYXNrZGVmLnZhbGlkYXRvciA/IG5ldyBSZWdFeHAobWFza2RlZi52YWxpZGF0b3IsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG5ldyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3QgPSBtYXNrZGVmLnZhbGlkYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiBtYXNrZGVmLnN0YXRpYyB8fCAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IHByZXZNYXRjaCA/IFwibWFzdGVyXCIgOiBwcmV2TWF0Y2guZGVmICE9PSAobWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBtYXNrZGVmLmNhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWFza2RlZi5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZDogbWFza2RlZi5nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgfSkgOiAobXRva2VuLm1hdGNoZXMuc3BsaWNlKHBvc2l0aW9uKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSA/IG5ldyBSZWdFeHAoXCJbXCIgKyAob3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQpICsgXCJdXCIsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gcHJldk1hdGNoID8gXCJtYXN0ZXJcIiA6IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgITAgIT09IHByZXZNYXRjaC5zdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWY6IG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCAhPT0gb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sID8gZWxlbWVudCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogKGVzY2FwZWQgPyBcIidcIiA6IFwiXCIpICsgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB9KSwgZXNjYXBlZCA9ICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgbWFza1Rva2VuLm1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbih0b2tlbiwgbmR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgKHZvaWQgMCA9PT0gbmV4dFRva2VuIHx8IHZvaWQgMCA9PT0gbmV4dFRva2VuLm1hdGNoZXMgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXJbMF0sIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyWzFdKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5R3JvdXBNYXJrZXIodG9rZW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZGVmYXVsdENhc2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCBvcGVuZW5pbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgaW5zZXJ0VGVzdERlZmluaXRpb24oY3VycmVudE9wZW5pbmdUb2tlbiwgbSksIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLmlzQWx0ZXJuYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IGFsdGVybmF0b3IubWF0Y2hlcy5sZW5ndGg7IG1uZHgrKykgYWx0ZXJuYXRvci5tYXRjaGVzW21uZHhdLmlzR3JvdXAgJiYgKGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgMCA8IG9wZW5lbmluZ3MubGVuZ3RoID8gKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcikpIDogY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpbnNlcnRUZXN0RGVmaW5pdGlvbihjdXJyZW50VG9rZW4sIG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlU3RhdGljKHN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlclswXSA/IHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlclsxXSA6IHN0ID09PSBvcHRzLm9wdGlvbmFsbWFya2VyWzFdID8gc3QgPSBvcHRzLm9wdGlvbmFsbWFya2VyWzBdIDogc3QgPT09IG9wdHMuZ3JvdXBtYXJrZXJbMF0gPyBzdCA9IG9wdHMuZ3JvdXBtYXJrZXJbMV0gOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlclsxXSAmJiAoc3QgPSBvcHRzLmdyb3VwbWFya2VyWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgIHN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXRjaCBpbiBtYXNrVG9rZW4ubWF0Y2hlcyA9IG1hc2tUb2tlbi5tYXRjaGVzLnJldmVyc2UoKSwgbWFza1Rva2VuLm1hdGNoZXMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFza1Rva2VuLm1hdGNoZXMsIG1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW50TWF0Y2ggPSBwYXJzZUludChtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0uaXNRdWFudGlmaWVyICYmIG1hc2tUb2tlbi5tYXRjaGVzW2ludE1hdGNoICsgMV0gJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXS5pc0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXQgPSBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlcy5zcGxpY2UobWF0Y2gsIDEpLCBtYXNrVG9rZW4ubWF0Y2hlcy5zcGxpY2UoaW50TWF0Y2ggKyAxLCAwLCBxdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0ubWF0Y2hlcyA/IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSA9IHJldmVyc2VUb2tlbnMobWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKSA6IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSA9IHJldmVyc2VTdGF0aWMobWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdyb3VwaWZ5KG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXBUb2tlbiA9IG5ldyBNYXNrVG9rZW4oITApO1xuICAgICAgICAgICAgICAgIHJldHVybiBncm91cFRva2VuLm9wZW5Hcm91cCA9ICExLCBncm91cFRva2VuLm1hdGNoZXMgPSBtYXRjaGVzLCBncm91cFRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VHcm91cCgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmluZ1Rva2VuID0gb3BlbmVuaW5ncy5wb3AoKSwgb3BlbmluZ1Rva2VuLm9wZW5Hcm91cCA9ICExLCB2b2lkIDAgIT09IG9wZW5pbmdUb2tlbikgaWYgKDAgPCBvcGVuZW5pbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKSwgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4uaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yID0gb3BlbmVuaW5ncy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG1uZHggPSAwOyBtbmR4IDwgYWx0ZXJuYXRvci5tYXRjaGVzLmxlbmd0aDsgbW5keCsrKSBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uaXNHcm91cCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5hbHRlcm5hdG9yR3JvdXAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgPCBvcGVuZW5pbmdzLmxlbmd0aCA/IChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpKSA6IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pOyBlbHNlIGRlZmF1bHRDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBncm91cFF1YW50aWZpZXIobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0TWF0Y2ggPSBtYXRjaGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0TWF0Y2guaXNRdWFudGlmaWVyICYmIChsYXN0TWF0Y2ggPSBncm91cGlmeShbIG1hdGNoZXMucG9wKCksIGxhc3RNYXRjaCBdKSksIFxuICAgICAgICAgICAgICAgIGxhc3RNYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAocmVnZXhNYXNrICYmIChvcHRzLm9wdGlvbmFsbWFya2VyWzBdID0gdm9pZCAwLCBvcHRzLm9wdGlvbmFsbWFya2VyWzFdID0gdm9pZCAwKTsgbWF0Y2ggPSByZWdleE1hc2sgPyByZWdleFRva2VuaXplci5leGVjKG1hc2spIDogdG9rZW5pemVyLmV4ZWMobWFzayk7ICkge1xuICAgICAgICAgICAgICAgIGlmIChtID0gbWF0Y2hbMF0sIHJlZ2V4TWFzaykgc3dpdGNoIChtLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIj9cIjpcbiAgICAgICAgICAgICAgICAgICAgbSA9IFwiezAsMX1cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICAgICAgICAgICAgICBtID0gXCJ7XCIgKyBtICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwifFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gb3BlbmVuaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRSZWdleEdyb3VwID0gZ3JvdXBpZnkoY3VycmVudFRva2VuLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0UmVnZXhHcm91cC5vcGVuR3JvdXAgPSAhMCwgb3BlbmVuaW5ncy5wdXNoKGFsdFJlZ2V4R3JvdXApLCBjdXJyZW50VG9rZW4ubWF0Y2hlcyA9IFtdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmVnZXhHcm91cCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXNjYXBlZCkgZGVmYXVsdENhc2UoKTsgZWxzZSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiJFwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcIl5cIjpcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhNYXNrIHx8IGRlZmF1bHRDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiKD89XCI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiKD8hXCI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiKD88PVwiOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIig/PCFcIjpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5lc2NhcGVDaGFyOlxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gITAsIHJlZ2V4TWFzayAmJiBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyWzFdOlxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyWzFdOlxuICAgICAgICAgICAgICAgICAgICBjbG9zZUdyb3VwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMub3B0aW9uYWxtYXJrZXJbMF06XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lbmluZ3MucHVzaChuZXcgTWFza1Rva2VuKCExLCAhMCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLnF1YW50aWZpZXJtYXJrZXJbMF06XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWFudGlmaWVyID0gbmV3IE1hc2tUb2tlbighMSwgITEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IG0ucmVwbGFjZSgvW3t9XS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1xaiA9IG0uc3BsaXQoXCJ8XCIpLCBtcSA9IG1xalswXS5zcGxpdChcIixcIiksIG1xMCA9IGlzTmFOKG1xWzBdKSA/IG1xWzBdIDogcGFyc2VJbnQobXFbMF0pLCBtcTEgPSAxID09PSBtcS5sZW5ndGggPyBtcTAgOiBpc05hTihtcVsxXSkgPyBtcVsxXSA6IHBhcnNlSW50KG1xWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgXCIqXCIgIT09IG1xMCAmJiBcIitcIiAhPT0gbXEwIHx8IChtcTAgPSBcIipcIiA9PT0gbXExID8gMCA6IDEpLCBxdWFudGlmaWVyLnF1YW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IG1xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbXExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaml0OiBtcWpbMV1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAwIDwgb3BlbmVuaW5ncy5sZW5ndGggPyBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0ubWF0Y2hlcyA6IGN1cnJlbnRUb2tlbi5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSBtYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCksIG1hdGNoZXMgPSBtYXRjaC5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKCEwKSwgdG1wTWF0Y2ggPSBtYXRjaGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGdyb3VwVG9rZW4pLCBtYXRjaGVzID0gZ3JvdXBUb2tlbi5tYXRjaGVzLCBtYXRjaCA9IHRtcE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoLmlzR3JvdXAgfHwgKG1hdGNoID0gZ3JvdXBpZnkoWyBtYXRjaCBdKSksIG1hdGNoZXMucHVzaChtYXRjaCksIG1hdGNoZXMucHVzaChxdWFudGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5hbHRlcm5hdG9ybWFya2VyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IG9wZW5lbmluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YlRva2VuID0gY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzW2N1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNYXRjaCA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ub3Blbkdyb3VwICYmICh2b2lkIDAgPT09IHN1YlRva2VuLm1hdGNoZXMgfHwgITEgPT09IHN1YlRva2VuLmlzR3JvdXAgJiYgITEgPT09IHN1YlRva2VuLmlzQWx0ZXJuYXRvcikgPyBvcGVuZW5pbmdzLnBvcCgpIDogZ3JvdXBRdWFudGlmaWVyKGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBsYXN0TWF0Y2ggPSBncm91cFF1YW50aWZpZXIoY3VycmVudFRva2VuLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE1hdGNoLmlzQWx0ZXJuYXRvcikgb3BlbmVuaW5ncy5wdXNoKGxhc3RNYXRjaCk7IGVsc2UgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPyAoYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2guYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYWx0ZXJuYXRvciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMSwgITApLCBhbHRlcm5hdG9yLm1hdGNoZXMucHVzaChsYXN0TWF0Y2gpLCBcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3IpLCBsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2gub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yR3JvdXAuYWx0ZXJuYXRvckdyb3VwID0gITAsIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY2xvc2VSZWdleEdyb3VwICYmIGNsb3NlR3JvdXAoKTsgMCA8IG9wZW5lbmluZ3MubGVuZ3RoOyApIG9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3MucG9wKCksIFxuICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIDAgPCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5sZW5ndGggJiYgKHZlcmlmeUdyb3VwTWFya2VyKGN1cnJlbnRUb2tlbiksIG1hc2tUb2tlbnMucHVzaChjdXJyZW50VG9rZW4pKSwgXG4gICAgICAgICAgICAob3B0cy5udW1lcmljSW5wdXQgfHwgb3B0cy5pc1JUTCkgJiYgcmV2ZXJzZVRva2VucyhtYXNrVG9rZW5zWzBdKSwgbWFza1Rva2VucztcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIF9kZWZhdWx0ID0ge1xuICAgICAgICAgICAgOToge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMC1cXHVmZjE5XVwiLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTAtXFx1ZmYxOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBfZGVmYXVsdCA9IHtcbiAgICAgICAgICAgIF9tYXhUZXN0UG9zOiA1MDAsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJfXCIsXG4gICAgICAgICAgICBvcHRpb25hbG1hcmtlcjogWyBcIltcIiwgXCJdXCIgXSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJtYXJrZXI6IFsgXCJ7XCIsIFwifVwiIF0sXG4gICAgICAgICAgICBncm91cG1hcmtlcjogWyBcIihcIiwgXCIpXCIgXSxcbiAgICAgICAgICAgIGFsdGVybmF0b3JtYXJrZXI6IFwifFwiLFxuICAgICAgICAgICAgZXNjYXBlQ2hhcjogXCJcXFxcXCIsXG4gICAgICAgICAgICBtYXNrOiBudWxsLFxuICAgICAgICAgICAgcmVnZXg6IG51bGwsXG4gICAgICAgICAgICBvbmNvbXBsZXRlOiBmdW5jdGlvbiBvbmNvbXBsZXRlKCkge30sXG4gICAgICAgICAgICBvbmluY29tcGxldGU6IGZ1bmN0aW9uIG9uaW5jb21wbGV0ZSgpIHt9LFxuICAgICAgICAgICAgb25jbGVhcmVkOiBmdW5jdGlvbiBvbmNsZWFyZWQoKSB7fSxcbiAgICAgICAgICAgIHJlcGVhdDogMCxcbiAgICAgICAgICAgIGdyZWVkeTogITEsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgIHJlbW92ZU1hc2tPblN1Ym1pdDogITEsXG4gICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITAsXG4gICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcbiAgICAgICAgICAgIGluc2VydE1vZGVWaXN1YWw6ICEwLFxuICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMSxcbiAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fSxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uIG9uQmVmb3JlUGFzdGUocGFzdGVkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBvcHRzLm9uQmVmb3JlTWFzayA/IG9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgcGFzdGVkVmFsdWUsIG9wdHMpIDogcGFzdGVkVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogbnVsbCxcbiAgICAgICAgICAgIG9uVW5NYXNrOiBudWxsLFxuICAgICAgICAgICAgc2hvd01hc2tPbkZvY3VzOiAhMCxcbiAgICAgICAgICAgIHNob3dNYXNrT25Ib3ZlcjogITAsXG4gICAgICAgICAgICBvbktleVZhbGlkYXRpb246IGZ1bmN0aW9uIG9uS2V5VmFsaWRhdGlvbigpIHt9LFxuICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCIgXCIsXG4gICAgICAgICAgICBudW1lcmljSW5wdXQ6ICExLFxuICAgICAgICAgICAgcmlnaHRBbGlnbjogITEsXG4gICAgICAgICAgICB1bmRvT25Fc2NhcGU6ICEwLFxuICAgICAgICAgICAgcmFkaXhQb2ludDogXCJcIixcbiAgICAgICAgICAgIF9yYWRpeERhbmNlOiAhMSxcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXG4gICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcbiAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInVybFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCIgXSxcbiAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgOCwgOSwgMTksIDI3LCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQ1LCA0NiwgOTMsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsIDEyMSwgMTIyLCAxMjMsIDAsIDIyOSBdLFxuICAgICAgICAgICAgaXNDb21wbGV0ZTogbnVsbCxcbiAgICAgICAgICAgIHByZVZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHN0YXRpY0RlZmluaXRpb25TeW1ib2w6IHZvaWQgMCxcbiAgICAgICAgICAgIGppdE1hc2tpbmc6ICExLFxuICAgICAgICAgICAgbnVsbGFibGU6ICEwLFxuICAgICAgICAgICAgaW5wdXRFdmVudE9ubHk6ICExLFxuICAgICAgICAgICAgbm9WYWx1ZVBhdGNoaW5nOiAhMSxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcImx2cFwiLFxuICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgaW5wdXRtb2RlOiBcInRleHRcIixcbiAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMCxcbiAgICAgICAgICAgIHNoaWZ0UG9zaXRpb25zOiAhMCxcbiAgICAgICAgICAgIHVzZVByb3RvdHlwZURlZmluaXRpb25zOiAhMFxuICAgICAgICB9O1xuICAgICAgICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBfaW5wdXRtYXNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSwgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfZXNjYXBlUmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMTQpKTtcbiAgICAgICAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICAgICAgICB9LCBfdHlwZW9mKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciAkID0gX2lucHV0bWFzay5kZWZhdWx0LmRlcGVuZGVuY3lMaWIsIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBmb3JtYXRDb2RlID0ge1xuICAgICAgICAgICAgZDogWyBcIlsxLTldfFsxMl1bMC05XXwzWzAxXVwiLCBEYXRlLnByb3RvdHlwZS5zZXREYXRlLCBcImRheVwiLCBEYXRlLnByb3RvdHlwZS5nZXREYXRlIF0sXG4gICAgICAgICAgICBkZDogWyBcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0RGF0ZSwgXCJkYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXREYXRlLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgZGRkOiBbIFwiXCIgXSxcbiAgICAgICAgICAgIGRkZGQ6IFsgXCJcIiBdLFxuICAgICAgICAgICAgbTogWyBcIlsxLTldfDFbMDEyXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNb250aCwgXCJtb250aFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGguY2FsbCh0aGlzKSArIDE7XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBtbTogWyBcIjBbMS05XXwxWzAxMl1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TW9udGgsIFwibW9udGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXRNb250aC5jYWxsKHRoaXMpICsgMSwgMik7XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBtbW06IFsgXCJcIiBdLFxuICAgICAgICAgICAgbW1tbTogWyBcIlwiIF0sXG4gICAgICAgICAgICB5eTogWyBcIlswLTldezJ9XCIsIERhdGUucHJvdG90eXBlLnNldEZ1bGxZZWFyLCBcInllYXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXRGdWxsWWVhci5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgIHl5eXk6IFsgXCJbMC05XXs0fVwiLCBEYXRlLnByb3RvdHlwZS5zZXRGdWxsWWVhciwgXCJ5ZWFyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWQoRGF0ZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIuY2FsbCh0aGlzKSwgNCk7XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBoOiBbIFwiWzEtOV18MVswLTJdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIERhdGUucHJvdG90eXBlLmdldEhvdXJzIF0sXG4gICAgICAgICAgICBoaDogWyBcIjBbMS05XXwxWzAtMl1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXRIb3Vycy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgIGh4OiBbIGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XXtcIi5jb25jYXQoeCwgXCJ9XCIpO1xuICAgICAgICAgICAgfSwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRIb3VycztcbiAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgIEg6IFsgXCIxP1swLTldfDJbMC0zXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRIb3VycyBdLFxuICAgICAgICAgICAgSEg6IFsgXCIwWzAtOV18MVswLTldfDJbMC0zXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFkKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgSHg6IFsgZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTlde1wiLmNvbmNhdCh4LCBcIn1cIik7XG4gICAgICAgICAgICB9LCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIHgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBNOiBbIFwiWzEtNV0/WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcywgXCJtaW51dGVzXCIsIERhdGUucHJvdG90eXBlLmdldE1pbnV0ZXMgXSxcbiAgICAgICAgICAgIE1NOiBbIFwiMFswLTldfDFbMC05XXwyWzAtOV18M1swLTldfDRbMC05XXw1WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcywgXCJtaW51dGVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWQoRGF0ZS5wcm90b3R5cGUuZ2V0TWludXRlcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgIHM6IFsgXCJbMS01XT9bMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLCBcInNlY29uZHNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0U2Vjb25kcyBdLFxuICAgICAgICAgICAgc3M6IFsgXCIwWzAtOV18MVswLTldfDJbMC05XXwzWzAtOV18NFswLTldfDVbMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLCBcInNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXRTZWNvbmRzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgbDogWyBcIlswLTldezN9XCIsIERhdGUucHJvdG90eXBlLnNldE1pbGxpc2Vjb25kcywgXCJtaWxsaXNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZChEYXRlLnByb3RvdHlwZS5nZXRNaWxsaXNlY29uZHMuY2FsbCh0aGlzKSwgMyk7XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBMOiBbIFwiWzAtOV17Mn1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWlsbGlzZWNvbmRzLCBcIm1pbGxpc2Vjb25kc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFkKERhdGUucHJvdG90eXBlLmdldE1pbGxpc2Vjb25kcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgIHQ6IFsgXCJbYXBdXCIgXSxcbiAgICAgICAgICAgIHR0OiBbIFwiW2FwXW1cIiBdLFxuICAgICAgICAgICAgVDogWyBcIltBUF1cIiBdLFxuICAgICAgICAgICAgVFQ6IFsgXCJbQVBdTVwiIF0sXG4gICAgICAgICAgICBaOiBbIFwiXCIgXSxcbiAgICAgICAgICAgIG86IFsgXCJcIiBdLFxuICAgICAgICAgICAgUzogWyBcIlwiIF1cbiAgICAgICAgfSwgZm9ybWF0QWxpYXMgPSB7XG4gICAgICAgICAgICBpc29EYXRlOiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIGlzb1RpbWU6IFwiSEg6TU06c3NcIixcbiAgICAgICAgICAgIGlzb0RhdGVUaW1lOiBcInl5eXktbW0tZGQnVCdISDpNTTpzc1wiLFxuICAgICAgICAgICAgaXNvVXRjRGF0ZVRpbWU6IFwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiXG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdGNvZGUobWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBkeW5NYXRjaGVzID0gbmV3IFJlZ0V4cChcIlxcXFxkKyRcIikuZXhlYyhtYXRjaFswXSk7XG4gICAgICAgICAgICBpZiAoZHluTWF0Y2hlcyAmJiB2b2lkIDAgIT09IGR5bk1hdGNoZXNbMF0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZmNvZGUgPSBmb3JtYXRDb2RlW21hdGNoWzBdWzBdICsgXCJ4XCJdLnNsaWNlKFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmY29kZVswXSA9IGZjb2RlWzBdKGR5bk1hdGNoZXNbMF0pLCBmY29kZVszXSA9IGZjb2RlWzNdKGR5bk1hdGNoZXNbMF0pLCBmY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb3JtYXRDb2RlW21hdGNoWzBdXSkgcmV0dXJuIGZvcm1hdENvZGVbbWF0Y2hbMF1dO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRva2VuaXplcihvcHRzKSB7XG4gICAgICAgICAgICBpZiAoIW9wdHMudG9rZW5pemVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IFtdLCBkeW50b2tlbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gZm9ybWF0Q29kZSkgaWYgKC9cXC4qeCQvLnRlc3QobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHluVG9rZW4gPSBuZHhbMF0gKyBcIlxcXFxkK1wiO1xuICAgICAgICAgICAgICAgICAgICAtMSA9PT0gZHludG9rZW5zLmluZGV4T2YoZHluVG9rZW4pICYmIGR5bnRva2Vucy5wdXNoKGR5blRva2VuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgLTEgPT09IHRva2Vucy5pbmRleE9mKG5keFswXSkgJiYgdG9rZW5zLnB1c2gobmR4WzBdKTtcbiAgICAgICAgICAgICAgICBvcHRzLnRva2VuaXplciA9IFwiKFwiICsgKDAgPCBkeW50b2tlbnMubGVuZ3RoID8gZHludG9rZW5zLmpvaW4oXCJ8XCIpICsgXCJ8XCIgOiBcIlwiKSArIHRva2Vucy5qb2luKFwiK3xcIikgKyBcIikrP3wuXCIsIFxuICAgICAgICAgICAgICAgIG9wdHMudG9rZW5pemVyID0gbmV3IFJlZ0V4cChvcHRzLnRva2VuaXplciwgXCJnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdHMudG9rZW5pemVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByZWZpbGxZZWFyKGRhdGVQYXJ0cywgY3VycmVudFJlc3VsdCwgb3B0cykge1xuICAgICAgICAgICAgaWYgKGRhdGVQYXJ0cy55ZWFyICE9PSBkYXRlUGFydHMucmF3eWVhcikge1xuICAgICAgICAgICAgICAgIHZhciBjcnJudHllYXIgPSBjdXJyZW50WWVhci50b1N0cmluZygpLCBlbnRlcmVkUGFydCA9IGRhdGVQYXJ0cy5yYXd5ZWFyLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSwgY3VycmVudFllYXJQYXJ0ID0gY3JybnR5ZWFyLnNsaWNlKDAsIGVudGVyZWRQYXJ0Lmxlbmd0aCksIGN1cnJlbnRZZWFyTmV4dFBhcnQgPSBjcnJudHllYXIuc2xpY2UoZW50ZXJlZFBhcnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoMiA9PT0gZW50ZXJlZFBhcnQubGVuZ3RoICYmIGVudGVyZWRQYXJ0ID09PSBjdXJyZW50WWVhclBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5Q3VycmVudFllYXIgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgZGF0ZVBhcnRzLm1vbnRoIC0gMSwgZGF0ZVBhcnRzLmRheSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXJ0cy5kYXkgPT0gZW50cnlDdXJyZW50WWVhci5nZXREYXRlKCkgJiYgKCFvcHRzLm1heCB8fCBvcHRzLm1heC5kYXRlLmdldFRpbWUoKSA+PSBlbnRyeUN1cnJlbnRZZWFyLmdldFRpbWUoKSkgJiYgKGRhdGVQYXJ0cy5kYXRlLnNldEZ1bGxZZWFyKGN1cnJlbnRZZWFyKSwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXJ0cy55ZWFyID0gY3JybnR5ZWFyLCBjdXJyZW50UmVzdWx0Lmluc2VydCA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBjdXJyZW50UmVzdWx0LnBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjOiBjdXJyZW50WWVhck5leHRQYXJ0WzBdXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogY3VycmVudFJlc3VsdC5wb3MgKyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYzogY3VycmVudFllYXJOZXh0UGFydFsxXVxuICAgICAgICAgICAgICAgICAgICB9IF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGVQYXJ0cywgY3VycmVudFJlc3VsdCwgb3B0cykge1xuICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShkYXRlUGFydHMucmF3ZGF5KSB8fCBcIjI5XCIgPT0gZGF0ZVBhcnRzLmRheSAmJiAhaXNGaW5pdGUoZGF0ZVBhcnRzLnJhd3llYXIpIHx8IG5ldyBEYXRlKGRhdGVQYXJ0cy5kYXRlLmdldEZ1bGxZZWFyKCksIGlzRmluaXRlKGRhdGVQYXJ0cy5yYXdtb250aCkgPyBkYXRlUGFydHMubW9udGggOiBkYXRlUGFydHMuZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpID49IGRhdGVQYXJ0cy5kYXkpIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgaWYgKFwiMjlcIiA9PSBkYXRlUGFydHMuZGF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VuTWF0Y2ggPSBnZXRUb2tlbk1hdGNoKGN1cnJlbnRSZXN1bHQucG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ5eXl5XCIgPT09IHRva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF0gJiYgY3VycmVudFJlc3VsdC5wb3MgLSB0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggPT0gMikgcmV0dXJuIGN1cnJlbnRSZXN1bHQucmVtb3ZlID0gY3VycmVudFJlc3VsdC5wb3MgKyAxLCBcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZVBhcnRzLCByZXN1bHQsIG9wdHMsIG1hc2tzZXQsIGZyb21DaGVja3ZhbCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICBpZiAob3B0cy5taW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZVBhcnRzLnJhd3llYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhd1llYXIgPSBkYXRlUGFydHMucmF3eWVhci5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIiksIG1pblllYXIgPSBvcHRzLm1pbi55ZWFyLnN1YnN0cigwLCByYXdZZWFyLmxlbmd0aCksIG1heFllYXI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdZZWFyIDwgbWluWWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuTWF0Y2ggPSBnZXRUb2tlbk1hdGNoKHJlc3VsdC5wb3MsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhd1llYXIgPSBkYXRlUGFydHMucmF3eWVhci5zdWJzdHIoMCwgcmVzdWx0LnBvcyAtIHRva2VuTWF0Y2gudGFyZ2V0TWF0Y2hJbmRleCArIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblllYXIgPSBvcHRzLm1pbi55ZWFyLnN1YnN0cigwLCByYXdZZWFyLmxlbmd0aCksIG1pblllYXIgPD0gcmF3WWVhcikgcmV0dXJuIHJlc3VsdC5yZW1vdmUgPSB0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggKyByYXdZZWFyLmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmF3WWVhciA9IFwieXl5eVwiID09PSB0b2tlbk1hdGNoLnRhcmdldE1hdGNoWzBdID8gZGF0ZVBhcnRzLnJhd3llYXIuc3Vic3RyKDEsIDEpIDogZGF0ZVBhcnRzLnJhd3llYXIuc3Vic3RyKDAsIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblllYXIgPSBvcHRzLm1pbi55ZWFyLnN1YnN0cigyLCAxKSwgbWF4WWVhciA9IG9wdHMubWF4ID8gb3B0cy5tYXgueWVhci5zdWJzdHIoMiwgMSkgOiByYXdZZWFyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgPT09IHJhd1llYXIubGVuZ3RoICYmIG1pblllYXIgPD0gcmF3WWVhciA8PSBtYXhZZWFyICYmICEwICE9PSBmcm9tQ2hlY2t2YWwpIHJldHVybiBcInl5eXlcIiA9PT0gdG9rZW5NYXRjaC50YXJnZXRNYXRjaFswXSA/IChyZXN1bHQuaW5zZXJ0ID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiByZXN1bHQucG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiByYXdZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmljdDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXSwgcmVzdWx0LmNhcmV0ID0gcmVzdWx0LnBvcyArIDIsIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10uaW5wdXQgPSBvcHRzLm1pbi55ZWFyWzFdKSA6IChyZXN1bHQuaW5zZXJ0ID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiByZXN1bHQucG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvcHRzLm1pbi55ZWFyWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmljdDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHJlc3VsdC5wb3MgKyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IHJhd1llYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaWN0OiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBdLCByZXN1bHQuY2FyZXQgPSByZXN1bHQucG9zICsgMywgbWFza3NldC52YWxpZFBvc2l0aW9uc1tyZXN1bHQucG9zXS5pbnB1dCA9IG9wdHMubWluLnllYXJbMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCAmJiBkYXRlUGFydHMueWVhciAmJiBkYXRlUGFydHMueWVhciA9PT0gZGF0ZVBhcnRzLnJhd3llYXIgJiYgb3B0cy5taW4uZGF0ZS5nZXRUaW1lKCkgPT0gb3B0cy5taW4uZGF0ZS5nZXRUaW1lKCkgJiYgKHJlc3VsdCA9IG9wdHMubWluLmRhdGUuZ2V0VGltZSgpIDw9IGRhdGVQYXJ0cy5kYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICYmIG9wdHMubWF4ICYmIG9wdHMubWF4LmRhdGUuZ2V0VGltZSgpID09IG9wdHMubWF4LmRhdGUuZ2V0VGltZSgpICYmIChyZXN1bHQgPSBvcHRzLm1heC5kYXRlLmdldFRpbWUoKSA+PSBkYXRlUGFydHMuZGF0ZS5nZXRUaW1lKCkpLCBcbiAgICAgICAgICAgIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZShmb3JtYXQsIGRhdGVPYmpWYWx1ZSwgb3B0cywgcmF3KSB7XG4gICAgICAgICAgICB2YXIgbWFzayA9IFwiXCIsIG1hdGNoLCBmY29kZTtcbiAgICAgICAgICAgIGZvciAoZ2V0VG9rZW5pemVyKG9wdHMpLmxhc3RJbmRleCA9IDA7IG1hdGNoID0gZ2V0VG9rZW5pemVyKG9wdHMpLmV4ZWMoZm9ybWF0KTsgKSBpZiAodm9pZCAwID09PSBkYXRlT2JqVmFsdWUpIGlmIChmY29kZSA9IGZvcm1hdGNvZGUobWF0Y2gpKSBtYXNrICs9IFwiKFwiICsgZmNvZGVbMF0gKyBcIilcIjsgZWxzZSBzd2l0Y2ggKG1hdGNoWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJbXCI6XG4gICAgICAgICAgICAgICAgbWFzayArPSBcIihcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwiXVwiOlxuICAgICAgICAgICAgICAgIG1hc2sgKz0gXCIpP1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbWFzayArPSAoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG1hdGNoWzBdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmNvZGUgPSBmb3JtYXRjb2RlKG1hdGNoKSkgaWYgKCEwICE9PSByYXcgJiYgZmNvZGVbM10pIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0Rm4gPSBmY29kZVszXTtcbiAgICAgICAgICAgICAgICBtYXNrICs9IGdldEZuLmNhbGwoZGF0ZU9ialZhbHVlLmRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGZjb2RlWzJdID8gbWFzayArPSBkYXRlT2JqVmFsdWVbXCJyYXdcIiArIGZjb2RlWzJdXSA6IG1hc2sgKz0gbWF0Y2hbMF07IGVsc2UgbWFzayArPSBtYXRjaFswXTtcbiAgICAgICAgICAgIHJldHVybiBtYXNrO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhZCh2YWwsIGxlbikge1xuICAgICAgICAgICAgZm9yICh2YWwgPSBTdHJpbmcodmFsKSwgbGVuID0gbGVuIHx8IDI7IHZhbC5sZW5ndGggPCBsZW47ICkgdmFsID0gXCIwXCIgKyB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFuYWx5c2VNYXNrKG1hc2tTdHJpbmcsIGZvcm1hdCwgb3B0cykge1xuICAgICAgICAgICAgdmFyIGRhdGVPYmogPSB7XG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoMSwgMCwgMSlcbiAgICAgICAgICAgIH0sIHRhcmdldFByb3AsIG1hc2sgPSBtYXNrU3RyaW5nLCBtYXRjaCwgZGF0ZU9wZXJhdGlvbjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbHVlKGRhdGVPYmosIHZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9ialt0YXJnZXRQcm9wXSA9IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCBcIjBcIiksIGRhdGVPYmpbXCJyYXdcIiArIHRhcmdldFByb3BdID0gdmFsdWUsIFxuICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZGF0ZU9wZXJhdGlvbiAmJiBkYXRlT3BlcmF0aW9uLmNhbGwoZGF0ZU9iai5kYXRlLCBcIm1vbnRoXCIgPT0gdGFyZ2V0UHJvcCA/IHBhcnNlSW50KGRhdGVPYmpbdGFyZ2V0UHJvcF0pIC0gMSA6IGRhdGVPYmpbdGFyZ2V0UHJvcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG1hc2spIHtcbiAgICAgICAgICAgICAgICBmb3IgKGdldFRva2VuaXplcihvcHRzKS5sYXN0SW5kZXggPSAwOyBtYXRjaCA9IGdldFRva2VuaXplcihvcHRzKS5leGVjKGZvcm1hdCk7ICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHluTWF0Y2hlcyA9IG5ldyBSZWdFeHAoXCJcXFxcZCskXCIpLmV4ZWMobWF0Y2hbMF0pLCBmY29kZSA9IGR5bk1hdGNoZXMgPyBtYXRjaFswXVswXSArIFwieFwiIDogbWF0Y2hbMF0sIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHluTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IGdldFRva2VuaXplcihvcHRzKS5sYXN0SW5kZXgsIHRva2FuTWF0Y2ggPSBnZXRUb2tlbk1hdGNoKG1hdGNoLmluZGV4LCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRva2VuaXplcihvcHRzKS5sYXN0SW5kZXggPSBsYXN0SW5kZXgsIHZhbHVlID0gbWFzay5zbGljZSgwLCBtYXNrLmluZGV4T2YodG9rYW5NYXRjaC5uZXh0TWF0Y2hbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHZhbHVlID0gbWFzay5zbGljZSgwLCBmY29kZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9ybWF0Q29kZSwgZmNvZGUpICYmICh0YXJnZXRQcm9wID0gZm9ybWF0Q29kZVtmY29kZV1bMl0sIFxuICAgICAgICAgICAgICAgICAgICBkYXRlT3BlcmF0aW9uID0gZm9ybWF0Q29kZVtmY29kZV1bMV0sIHNldFZhbHVlKGRhdGVPYmosIHZhbHVlLCBvcHRzKSksIG1hc2sgPSBtYXNrLnNsaWNlKHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hc2sgJiYgXCJvYmplY3RcIiA9PT0gX3R5cGVvZihtYXNrKSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFzaywgXCJkYXRlXCIpKSByZXR1cm4gbWFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpbXBvcnREYXRlKGRhdGVPYmosIG9wdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZShvcHRzLmlucHV0Rm9ybWF0LCB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZU9ialxuICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9rZW5NYXRjaChwb3MsIG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBjYWxjUG9zID0gMCwgdGFyZ2V0TWF0Y2gsIG1hdGNoLCBtYXRjaExlbmd0aCA9IDA7XG4gICAgICAgICAgICBmb3IgKGdldFRva2VuaXplcihvcHRzKS5sYXN0SW5kZXggPSAwOyBtYXRjaCA9IGdldFRva2VuaXplcihvcHRzKS5leGVjKG9wdHMuaW5wdXRGb3JtYXQpOyApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHluTWF0Y2hlcyA9IG5ldyBSZWdFeHAoXCJcXFxcZCskXCIpLmV4ZWMobWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaExlbmd0aCA9IGR5bk1hdGNoZXMgPyBwYXJzZUludChkeW5NYXRjaGVzWzBdKSA6IG1hdGNoWzBdLmxlbmd0aCwgY2FsY1BvcyArPSBtYXRjaExlbmd0aCwgXG4gICAgICAgICAgICAgICAgcG9zIDw9IGNhbGNQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2ggPSBtYXRjaCwgbWF0Y2ggPSBnZXRUb2tlbml6ZXIob3B0cykuZXhlYyhvcHRzLmlucHV0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRNYXRjaEluZGV4OiBjYWxjUG9zIC0gbWF0Y2hMZW5ndGgsXG4gICAgICAgICAgICAgICAgbmV4dE1hdGNoOiBtYXRjaCxcbiAgICAgICAgICAgICAgICB0YXJnZXRNYXRjaDogdGFyZ2V0TWF0Y2hcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgX2lucHV0bWFzay5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbiBtYXNrKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMubnVtZXJpY0lucHV0ID0gITEsIGZvcm1hdENvZGUuUyA9IG9wdHMuaTE4bi5vcmRpbmFsU3VmZml4LmpvaW4oXCJ8XCIpLCBcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnB1dEZvcm1hdCA9IGZvcm1hdEFsaWFzW29wdHMuaW5wdXRGb3JtYXRdIHx8IG9wdHMuaW5wdXRGb3JtYXQsIG9wdHMuZGlzcGxheUZvcm1hdCA9IGZvcm1hdEFsaWFzW29wdHMuZGlzcGxheUZvcm1hdF0gfHwgb3B0cy5kaXNwbGF5Rm9ybWF0IHx8IG9wdHMuaW5wdXRGb3JtYXQsIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLm91dHB1dEZvcm1hdCA9IGZvcm1hdEFsaWFzW29wdHMub3V0cHV0Rm9ybWF0XSB8fCBvcHRzLm91dHB1dEZvcm1hdCB8fCBvcHRzLmlucHV0Rm9ybWF0LCBcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5wbGFjZWhvbGRlciA9IFwiXCIgIT09IG9wdHMucGxhY2Vob2xkZXIgPyBvcHRzLnBsYWNlaG9sZGVyIDogb3B0cy5pbnB1dEZvcm1hdC5yZXBsYWNlKC9bW1xcXV0vLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgIG9wdHMucmVnZXggPSBwYXJzZShvcHRzLmlucHV0Rm9ybWF0LCB2b2lkIDAsIG9wdHMpLCBvcHRzLm1pbiA9IGFuYWx5c2VNYXNrKG9wdHMubWluLCBvcHRzLmlucHV0Rm9ybWF0LCBvcHRzKSwgXG4gICAgICAgICAgICAgICAgICAgIG9wdHMubWF4ID0gYW5hbHlzZU1hc2sob3B0cy5tYXgsIG9wdHMuaW5wdXRGb3JtYXQsIG9wdHMpLCBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRGb3JtYXQ6IFwiaXNvRGF0ZVRpbWVcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0OiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0Rm9ybWF0OiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heDogbnVsbCxcbiAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICAgICAgZGF5TmFtZXM6IFsgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiIF0sXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IFsgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIiwgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF0sXG4gICAgICAgICAgICAgICAgICAgIG9yZGluYWxTdWZmaXg6IFsgXCJzdFwiLCBcIm5kXCIsIFwicmRcIiwgXCJ0aFwiIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IGZ1bmN0aW9uIHByZVZhbGlkYXRpb24oYnVmZmVyLCBwb3MsIGMsIGlzU2VsZWN0aW9uLCBvcHRzLCBtYXNrc2V0LCBjYXJldFBvcywgc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpY3QpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGMpICYmIGJ1ZmZlcltwb3NdICE9PSBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5NYXRjaCA9IGdldFRva2VuTWF0Y2gocG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbk1hdGNoLm5leHRNYXRjaCAmJiB0b2tlbk1hdGNoLm5leHRNYXRjaFswXSA9PT0gYyAmJiAxIDwgdG9rZW5NYXRjaC50YXJnZXRNYXRjaFswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gZm9ybWF0Q29kZVt0b2tlbk1hdGNoLnRhcmdldE1hdGNoWzBdXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cCh2YWxpZGF0b3IpLnRlc3QoXCIwXCIgKyBidWZmZXJbcG9zIC0gMV0pKSByZXR1cm4gYnVmZmVyW3Bvc10gPSBidWZmZXJbcG9zIC0gMV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1enp5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcG9zIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbiBwb3N0VmFsaWRhdGlvbihidWZmZXIsIHBvcywgYywgY3VycmVudFJlc3VsdCwgb3B0cywgbWFza3NldCwgc3RyaWN0LCBmcm9tQ2hlY2t2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmljdCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5NYXRjaCwgdmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGN1cnJlbnRSZXN1bHQpIHJldHVybiB0b2tlbk1hdGNoID0gZ2V0VG9rZW5NYXRjaChwb3MgKyAxLCBvcHRzKSwgdG9rZW5NYXRjaC50YXJnZXRNYXRjaCAmJiB0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggPT09IHBvcyAmJiAxIDwgdG9rZW5NYXRjaC50YXJnZXRNYXRjaFswXS5sZW5ndGggJiYgdm9pZCAwICE9PSBmb3JtYXRDb2RlW3Rva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF1dICYmICh2YWxpZGF0b3IgPSBmb3JtYXRDb2RlW3Rva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF1dWzBdLCBcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh2YWxpZGF0b3IpLnRlc3QoXCIwXCIgKyBjKSkgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zICsgMVxuICAgICAgICAgICAgICAgICAgICB9IDogY3VycmVudFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXN1bHQuZnV6enkgJiYgKGJ1ZmZlciA9IGN1cnJlbnRSZXN1bHQuYnVmZmVyLCBwb3MgPSBjdXJyZW50UmVzdWx0LnBvcyksIFxuICAgICAgICAgICAgICAgICAgICB0b2tlbk1hdGNoID0gZ2V0VG9rZW5NYXRjaChwb3MsIG9wdHMpLCB0b2tlbk1hdGNoLnRhcmdldE1hdGNoICYmIHRva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF0gJiYgdm9pZCAwICE9PSBmb3JtYXRDb2RlW3Rva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBmb3JtYXRDb2RlW3Rva2VuTWF0Y2gudGFyZ2V0TWF0Y2hbMF1dWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBidWZmZXIuc2xpY2UodG9rZW5NYXRjaC50YXJnZXRNYXRjaEluZGV4LCB0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggKyB0b2tlbk1hdGNoLnRhcmdldE1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAhMSA9PT0gbmV3IFJlZ0V4cCh2YWxpZGF0b3IpLnRlc3QocGFydC5qb2luKFwiXCIpKSAmJiAyID09PSB0b2tlbk1hdGNoLnRhcmdldE1hdGNoWzBdLmxlbmd0aCAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Rva2VuTWF0Y2gudGFyZ2V0TWF0Y2hJbmRleF0gJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1t0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggKyAxXSAmJiAobWFza3NldC52YWxpZFBvc2l0aW9uc1t0b2tlbk1hdGNoLnRhcmdldE1hdGNoSW5kZXggKyAxXS5pbnB1dCA9IFwiMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY3VycmVudFJlc3VsdCwgZGF0ZVBhcnRzID0gYW5hbHlzZU1hc2soYnVmZmVyLmpvaW4oXCJcIiksIG9wdHMuaW5wdXRGb3JtYXQsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICYmIGRhdGVQYXJ0cy5kYXRlLmdldFRpbWUoKSA9PSBkYXRlUGFydHMuZGF0ZS5nZXRUaW1lKCkgJiYgKHJlc3VsdCA9IHByZWZpbGxZZWFyKGRhdGVQYXJ0cywgcmVzdWx0LCBvcHRzKSwgXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWREYXRlKGRhdGVQYXJ0cywgcmVzdWx0LCBvcHRzKSwgcmVzdWx0ID0gaXNEYXRlSW5SYW5nZShkYXRlUGFydHMsIHJlc3VsdCwgb3B0cywgbWFza3NldCwgZnJvbUNoZWNrdmFsKSksIFxuICAgICAgICAgICAgICAgICAgICBwb3MgJiYgcmVzdWx0ICYmIGN1cnJlbnRSZXN1bHQucG9zICE9PSBwb3MgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHBhcnNlKG9wdHMuaW5wdXRGb3JtYXQsIGRhdGVQYXJ0cywgb3B0cykuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBjdXJyZW50UmVzdWx0LnBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IDogcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSBfa2V5Y29kZS5kZWZhdWx0LlJJR0hUICYmICh0aGlzLmlucHV0bWFzay5fdmFsdWVTZXQoaW1wb3J0RGF0ZShuZXcgRGF0ZSgpLCBvcHRzKSksIFxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24gb25Vbk1hc2sobWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVubWFza2VkVmFsdWUgPyBwYXJzZShvcHRzLm91dHB1dEZvcm1hdCwgYW5hbHlzZU1hc2sobWFza2VkVmFsdWUsIG9wdHMuaW5wdXRGb3JtYXQsIG9wdHMpLCBvcHRzLCAhMCkgOiB1bm1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBmdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zLCB2YWxpZFBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCA9PSB0ZXN0Lm5hdGl2ZURlZi5pbmRleE9mKFwiW2FwXVwiKSA/IGVsZW0udG9Mb3dlckNhc2UoKSA6IDAgPT0gdGVzdC5uYXRpdmVEZWYuaW5kZXhPZihcIltBUF1cIikgPyBlbGVtLnRvVXBwZXJDYXNlKCkgOiBlbGVtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBmdW5jdGlvbiBvbkJlZm9yZU1hc2soaW5pdGlhbFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgRGF0ZV1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGluaXRpYWxWYWx1ZSkgJiYgKGluaXRpYWxWYWx1ZSA9IGltcG9ydERhdGUoaW5pdGlhbFZhbHVlLCBvcHRzKSksIFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcbiAgICAgICAgICAgICAgICBzaGlmdFBvc2l0aW9uczogITEsXG4gICAgICAgICAgICAgICAga2VlcFN0YXRpYzogITEsXG4gICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBfaW5wdXRtYXNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSwgX2tleWNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMCkpLCBfZXNjYXBlUmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMTQpKTtcbiAgICAgICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciAkID0gX2lucHV0bWFzay5kZWZhdWx0LmRlcGVuZGVuY3lMaWI7XG4gICAgICAgIGZ1bmN0aW9uIGF1dG9Fc2NhcGUodHh0LCBvcHRzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlc2NhcGVkVHh0ID0gXCJcIiwgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpKyspIF9pbnB1dG1hc2suZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5kZWZpbml0aW9uc1t0eHQuY2hhckF0KGkpXSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyWzBdID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMub3B0aW9uYWxtYXJrZXJbMV0gPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5xdWFudGlmaWVybWFya2VyWzBdID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMucXVhbnRpZmllcm1hcmtlclsxXSA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLmdyb3VwbWFya2VyWzBdID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXJbMV0gPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5hbHRlcm5hdG9ybWFya2VyID09PSB0eHQuY2hhckF0KGkpID8gZXNjYXBlZFR4dCArPSBcIlxcXFxcIiArIHR4dC5jaGFyQXQoaSkgOiBlc2NhcGVkVHh0ICs9IHR4dC5jaGFyQXQoaSk7XG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlZFR4dDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhbGlnbkRpZ2l0cyhidWZmZXIsIGRpZ2l0cywgb3B0cywgZm9yY2UpIHtcbiAgICAgICAgICAgIGlmICgwIDwgYnVmZmVyLmxlbmd0aCAmJiAwIDwgZGlnaXRzICYmICghb3B0cy5kaWdpdHNPcHRpb25hbCB8fCBmb3JjZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3NpdGlvbiA9IGJ1ZmZlci5pbmRleE9mKG9wdHMucmFkaXhQb2ludCksIG5lZ2F0aW9uQmFjayA9ICExO1xuICAgICAgICAgICAgICAgIG9wdHMubmVnYXRpb25TeW1ib2wuYmFjayA9PT0gYnVmZmVyW2J1ZmZlci5sZW5ndGggLSAxXSAmJiAobmVnYXRpb25CYWNrID0gITAsIGJ1ZmZlci5sZW5ndGgtLSksIFxuICAgICAgICAgICAgICAgIC0xID09PSByYWRpeFBvc2l0aW9uICYmIChidWZmZXIucHVzaChvcHRzLnJhZGl4UG9pbnQpLCByYWRpeFBvc2l0aW9uID0gYnVmZmVyLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGRpZ2l0czsgaSsrKSBpc0Zpbml0ZShidWZmZXJbcmFkaXhQb3NpdGlvbiArIGldKSB8fCAoYnVmZmVyW3JhZGl4UG9zaXRpb24gKyBpXSA9IFwiMFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZWdhdGlvbkJhY2sgJiYgYnVmZmVyLnB1c2gob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSwgYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRWYWxpZGF0b3Ioc3ltYm9sLCBtYXNrc2V0KSB7XG4gICAgICAgICAgICB2YXIgcG9zTmR4ID0gMDtcbiAgICAgICAgICAgIGlmIChcIitcIiA9PT0gc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgZm9yIChwb3NOZHggaW4gbWFza3NldC52YWxpZFBvc2l0aW9ucykgO1xuICAgICAgICAgICAgICAgIHBvc05keCA9IHBhcnNlSW50KHBvc05keCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciB0c3ROZHggaW4gbWFza3NldC50ZXN0cykgaWYgKHRzdE5keCA9IHBhcnNlSW50KHRzdE5keCksIHBvc05keCA8PSB0c3ROZHgpIGZvciAodmFyIG5keCA9IDAsIG5keGwgPSBtYXNrc2V0LnRlc3RzW3RzdE5keF0ubGVuZ3RoOyBuZHggPCBuZHhsOyBuZHgrKykgaWYgKCh2b2lkIDAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdHN0TmR4XSB8fCBcIi1cIiA9PT0gc3ltYm9sKSAmJiBtYXNrc2V0LnRlc3RzW3RzdE5keF1bbmR4XS5tYXRjaC5kZWYgPT09IHN5bWJvbCkgcmV0dXJuIHRzdE5keCArICh2b2lkIDAgIT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdHN0TmR4XSAmJiBcIi1cIiAhPT0gc3ltYm9sID8gMSA6IDApO1xuICAgICAgICAgICAgcmV0dXJuIHBvc05keDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmaW5kVmFsaWQoc3ltYm9sLCBtYXNrc2V0KSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gbWFza3NldC52YWxpZFBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciB0c3QgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW25keF07XG4gICAgICAgICAgICAgICAgaWYgKHRzdCAmJiB0c3QubWF0Y2guZGVmID09PSBzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gcGFyc2VJbnQobmR4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZU1pbk1heE9wdGlvbnMob3B0cykge1xuICAgICAgICAgICAgdm9pZCAwID09PSBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyAmJiAobnVsbCAhPT0gb3B0cy5taW4gJiYgKG9wdHMubWluID0gb3B0cy5taW4udG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgIG9wdHMubWluID0gaXNGaW5pdGUob3B0cy5taW4pID8gcGFyc2VGbG9hdChvcHRzLm1pbikgOiBOYU4sIGlzTmFOKG9wdHMubWluKSAmJiAob3B0cy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5tYXggJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIF9lc2NhcGVSZWdleC5kZWZhdWx0KShvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1heCA9IG9wdHMubWF4LnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgIG9wdHMubWF4ID0gaXNGaW5pdGUob3B0cy5tYXgpID8gcGFyc2VGbG9hdChvcHRzLm1heCkgOiBOYU4sIGlzTmFOKG9wdHMubWF4KSAmJiAob3B0cy5tYXggPSBOdW1iZXIuTUFYX1ZBTFVFKSksIFxuICAgICAgICAgICAgb3B0cy5wYXJzZU1pbk1heE9wdGlvbnMgPSBcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuTWFzayhvcHRzKSB7XG4gICAgICAgICAgICBvcHRzLnJlcGVhdCA9IDAsIG9wdHMuZ3JvdXBTZXBhcmF0b3IgPT09IG9wdHMucmFkaXhQb2ludCAmJiBvcHRzLmRpZ2l0cyAmJiBcIjBcIiAhPT0gb3B0cy5kaWdpdHMgJiYgKFwiLlwiID09PSBvcHRzLnJhZGl4UG9pbnQgPyBvcHRzLmdyb3VwU2VwYXJhdG9yID0gXCIsXCIgOiBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLlwiIDogb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiXCIpLCBcbiAgICAgICAgICAgIFwiIFwiID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIChvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSB2b2lkIDApLCAxIDwgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGggJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSksIFxuICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gb3B0cy5wbGFjZWhvbGRlciAmJiAob3B0cy5wb3NpdGlvbkNhcmV0T25DbGljayA9IFwibHZwXCIpO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxEZWYgPSBcIjBcIiwgcmFkaXhQb2ludERlZiA9IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICEwID09PSBvcHRzLm51bWVyaWNJbnB1dCAmJiB2b2lkIDAgPT09IG9wdHMuX19maW5hbmNlSW5wdXQgPyAoZGVjaW1hbERlZiA9IFwiMVwiLCBcbiAgICAgICAgICAgIG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgIG9wdHMuZGlnaXRzT3B0aW9uYWwgPSAhMSwgaXNOYU4ob3B0cy5kaWdpdHMpICYmIChvcHRzLmRpZ2l0cyA9IDIpLCBvcHRzLl9yYWRpeERhbmNlID0gITEsIFxuICAgICAgICAgICAgcmFkaXhQb2ludERlZiA9IFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgPyBcIj9cIiA6IFwiIVwiLCBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgdm9pZCAwID09PSBvcHRzLmRlZmluaXRpb25zW3JhZGl4UG9pbnREZWZdICYmIChvcHRzLmRlZmluaXRpb25zW3JhZGl4UG9pbnREZWZdID0ge30sIFxuICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9uc1tyYWRpeFBvaW50RGVmXS52YWxpZGF0b3IgPSBcIltcIiArIG9wdHMucmFkaXhQb2ludCArIFwiXVwiLCBvcHRzLmRlZmluaXRpb25zW3JhZGl4UG9pbnREZWZdLnBsYWNlaG9sZGVyID0gb3B0cy5yYWRpeFBvaW50LCBcbiAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbcmFkaXhQb2ludERlZl0uc3RhdGljID0gITAsIG9wdHMuZGVmaW5pdGlvbnNbcmFkaXhQb2ludERlZl0uZ2VuZXJhdGVkID0gITApKSA6IChvcHRzLl9fZmluYW5jZUlucHV0ID0gITEsIFxuICAgICAgICAgICAgb3B0cy5udW1lcmljSW5wdXQgPSAhMCk7XG4gICAgICAgICAgICB2YXIgbWFzayA9IFwiWytdXCIsIGFsdE1hc2s7XG4gICAgICAgICAgICBpZiAobWFzayArPSBhdXRvRXNjYXBlKG9wdHMucHJlZml4LCBvcHRzKSwgXCJcIiAhPT0gb3B0cy5ncm91cFNlcGFyYXRvciA/ICh2b2lkIDAgPT09IG9wdHMuZGVmaW5pdGlvbnNbb3B0cy5ncm91cFNlcGFyYXRvcl0gJiYgKG9wdHMuZGVmaW5pdGlvbnNbb3B0cy5ncm91cFNlcGFyYXRvcl0gPSB7fSwgXG4gICAgICAgICAgICBvcHRzLmRlZmluaXRpb25zW29wdHMuZ3JvdXBTZXBhcmF0b3JdLnZhbGlkYXRvciA9IFwiW1wiICsgb3B0cy5ncm91cFNlcGFyYXRvciArIFwiXVwiLCBcbiAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbb3B0cy5ncm91cFNlcGFyYXRvcl0ucGxhY2Vob2xkZXIgPSBvcHRzLmdyb3VwU2VwYXJhdG9yLCBvcHRzLmRlZmluaXRpb25zW29wdHMuZ3JvdXBTZXBhcmF0b3JdLnN0YXRpYyA9ICEwLCBcbiAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbb3B0cy5ncm91cFNlcGFyYXRvcl0uZ2VuZXJhdGVkID0gITApLCBtYXNrICs9IG9wdHMuX21hc2sob3B0cykpIDogbWFzayArPSBcIjl7K31cIiwgXG4gICAgICAgICAgICB2b2lkIDAgIT09IG9wdHMuZGlnaXRzICYmIDAgIT09IG9wdHMuZGlnaXRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRxID0gb3B0cy5kaWdpdHMudG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgaXNGaW5pdGUoZHFbMF0pICYmIGRxWzFdICYmIGlzRmluaXRlKGRxWzFdKSA/IG1hc2sgKz0gcmFkaXhQb2ludERlZiArIGRlY2ltYWxEZWYgKyBcIntcIiArIG9wdHMuZGlnaXRzICsgXCJ9XCIgOiAoaXNOYU4ob3B0cy5kaWdpdHMpIHx8IDAgPCBwYXJzZUludChvcHRzLmRpZ2l0cykpICYmIChvcHRzLmRpZ2l0c09wdGlvbmFsID8gKGFsdE1hc2sgPSBtYXNrICsgcmFkaXhQb2ludERlZiArIGRlY2ltYWxEZWYgKyBcInswLFwiICsgb3B0cy5kaWdpdHMgKyBcIn1cIiwgXG4gICAgICAgICAgICAgICAgb3B0cy5rZWVwU3RhdGljID0gITApIDogbWFzayArPSByYWRpeFBvaW50RGVmICsgZGVjaW1hbERlZiArIFwie1wiICsgb3B0cy5kaWdpdHMgKyBcIn1cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFzayArPSBhdXRvRXNjYXBlKG9wdHMuc3VmZml4LCBvcHRzKSwgbWFzayArPSBcIlstXVwiLCBhbHRNYXNrICYmIChtYXNrID0gWyBhbHRNYXNrICsgYXV0b0VzY2FwZShvcHRzLnN1ZmZpeCwgb3B0cykgKyBcIlstXVwiLCBtYXNrIF0pLCBcbiAgICAgICAgICAgIG9wdHMuZ3JlZWR5ID0gITEsIHBhcnNlTWluTWF4T3B0aW9ucyhvcHRzKSwgbWFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5uZGxlUmFkaXhEYW5jZShwb3MsIGMsIHJhZGl4UG9zLCBtYXNrc2V0LCBvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0cy5fcmFkaXhEYW5jZSAmJiBvcHRzLm51bWVyaWNJbnB1dCAmJiBjICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgcG9zIDw9IHJhZGl4UG9zICYmICgwIDwgcmFkaXhQb3MgfHwgYyA9PSBvcHRzLnJhZGl4UG9pbnQpICYmICh2b2lkIDAgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gfHwgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgLSAxXS5pbnB1dCAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSAmJiAocG9zIC09IDEpLCBcbiAgICAgICAgICAgIHBvcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZWNpbWFsVmFsaWRhdG9yKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBtYXNrc2V0LmJ1ZmZlciA/IG1hc2tzZXQuYnVmZmVyLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSA6IC0xLCByZXN1bHQgPSAtMSAhPT0gcmFkaXhQb3MgJiYgbmV3IFJlZ0V4cChcIlswLTlcXHVmZjExLVxcdWZmMTldXCIpLnRlc3QoY2hycyk7XG4gICAgICAgICAgICByZXR1cm4gb3B0cy5fcmFkaXhEYW5jZSAmJiByZXN1bHQgJiYgbnVsbCA9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3JhZGl4UG9zXSA/IHtcbiAgICAgICAgICAgICAgICBpbnNlcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zOiByYWRpeFBvcyA9PT0gcG9zID8gcmFkaXhQb3MgKyAxIDogcmFkaXhQb3MsXG4gICAgICAgICAgICAgICAgICAgIGM6IG9wdHMucmFkaXhQb2ludFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgIH0gOiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tGb3JMZWFkaW5nWmVyb2VzKGJ1ZmZlciwgb3B0cykge1xuICAgICAgICAgICAgdmFyIG51bWJlck1hdGNoZXMgPSBuZXcgUmVnRXhwKFwiKF5cIiArIChcIlwiICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ID8gKDAsIF9lc2NhcGVSZWdleC5kZWZhdWx0KShvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiP1wiIDogXCJcIikgKyAoMCwgXG4gICAgICAgICAgICBfZXNjYXBlUmVnZXguZGVmYXVsdCkob3B0cy5wcmVmaXgpICsgXCIpKC4qKShcIiArICgwLCBfZXNjYXBlUmVnZXguZGVmYXVsdCkob3B0cy5zdWZmaXgpICsgKFwiXCIgIT0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrID8gKDAsIFxuICAgICAgICAgICAgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIj9cIiA6IFwiXCIpICsgXCIkKVwiKS5leGVjKGJ1ZmZlci5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpKSwgbnVtYmVyID0gbnVtYmVyTWF0Y2hlcyA/IG51bWJlck1hdGNoZXNbMl0gOiBcIlwiLCBsZWFkaW5nemVyb2VzID0gITE7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICYmIChudW1iZXIgPSBudW1iZXIuc3BsaXQob3B0cy5yYWRpeFBvaW50LmNoYXJBdCgwKSlbMF0sIGxlYWRpbmd6ZXJvZXMgPSBuZXcgUmVnRXhwKFwiXlswXCIgKyBvcHRzLmdyb3VwU2VwYXJhdG9yICsgXCJdKlwiKS5leGVjKG51bWJlcikpLCBcbiAgICAgICAgICAgICEoIWxlYWRpbmd6ZXJvZXMgfHwgISgxIDwgbGVhZGluZ3plcm9lc1swXS5sZW5ndGggfHwgMCA8IGxlYWRpbmd6ZXJvZXNbMF0ubGVuZ3RoICYmIGxlYWRpbmd6ZXJvZXNbMF0ubGVuZ3RoIDwgbnVtYmVyLmxlbmd0aCkpICYmIGxlYWRpbmd6ZXJvZXM7XG4gICAgICAgIH1cbiAgICAgICAgX2lucHV0bWFzay5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgbnVtZXJpYzoge1xuICAgICAgICAgICAgICAgIG1hc2s6IGdlbk1hc2ssXG4gICAgICAgICAgICAgICAgX21hc2s6IGZ1bmN0aW9uIF9tYXNrKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgb3B0cy5ncm91cFNlcGFyYXRvciArIFwiOTk5KXsrfDF9XCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaWdpdHM6IFwiKlwiLFxuICAgICAgICAgICAgICAgIGRpZ2l0c09wdGlvbmFsOiAhMCxcbiAgICAgICAgICAgICAgICBlbmZvcmNlRGlnaXRzT25CbHVyOiAhMSxcbiAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJyYWRpeEZvY3VzXCIsXG4gICAgICAgICAgICAgICAgX3JhZGl4RGFuY2U6ICEwLFxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICEwLFxuICAgICAgICAgICAgICAgIG5lZ2F0aW9uU3ltYm9sOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICAgICAgYmFjazogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4OiBudWxsLFxuICAgICAgICAgICAgICAgIFNldE1heE9uT3ZlcmZsb3c6ICExLFxuICAgICAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITEsXG4gICAgICAgICAgICAgICAgcm91bmRpbmdGTjogTWF0aC5yb3VuZCxcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0czoge1xuICAgICAgICAgICAgICAgICAgICBrOiBcIjAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBtOiBcIjAwMDAwMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICByaWdodEFsaWduOiAhMCxcbiAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcbiAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZGVjaW1hbFZhbGlkYXRvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGRlY2ltYWxWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIjlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5hbGxvd01pbnVzICYmIChcIi1cIiA9PT0gY2hycyB8fCBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IGZ1bmN0aW9uIHByZVZhbGlkYXRpb24oYnVmZmVyLCBwb3MsIGMsIGlzU2VsZWN0aW9uLCBvcHRzLCBtYXNrc2V0LCBjYXJldFBvcywgc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gb3B0cy5fX2ZpbmFuY2VJbnB1dCAmJiBjID09PSBvcHRzLnJhZGl4UG9pbnQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm47XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuID0gb3B0cy5zaG9ydGN1dHMgJiYgb3B0cy5zaG9ydGN1dHNbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxIDwgcGF0dGVybi5sZW5ndGgpIGZvciAodmFyIGluc2VydHMgPSBbXSwgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSBpbnNlcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBwYXR0ZXJuW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmljdDogITFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IGluc2VydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4UG9zID0gYnVmZmVyLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSwgaW5pdFBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9IGhhbm5kbGVSYWRpeERhbmNlKHBvcywgYywgcmFkaXhQb3MsIG1hc2tzZXQsIG9wdHMpLCBcIi1cIiA9PT0gYyB8fCBjID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMuYWxsb3dNaW51cykgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSAhMSwgZnJvbnQgPSBmaW5kVmFsaWQoXCIrXCIsIG1hc2tzZXQpLCBiYWNrID0gZmluZFZhbGlkKFwiLVwiLCBtYXNrc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gZnJvbnQgJiYgKGlzTmVnYXRpdmUgPSBbIGZyb250LCBiYWNrIF0pLCAhMSAhPT0gaXNOZWdhdGl2ZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IGlzTmVnYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGluaXRQb3MgLSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGZpbmRWYWxpZGF0b3IoXCIrXCIsIG1hc2tzZXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogZmluZFZhbGlkYXRvcihcIi1cIiwgbWFza3NldCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUlzVmFsaWQ6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogaW5pdFBvcyArIG9wdHMubmVnYXRpb25TeW1ib2wuYmFjay5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogaW5pdFBvc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaWN0KSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gcmFkaXhQb3MgJiYgITAgPT09IG9wdHMuX3JhZGl4RGFuY2UgJiYgITEgPT09IGlzU2VsZWN0aW9uICYmIGMgPT09IG9wdHMucmFkaXhQb2ludCAmJiB2b2lkIDAgIT09IG9wdHMuZGlnaXRzICYmIChpc05hTihvcHRzLmRpZ2l0cykgfHwgMCA8IHBhcnNlSW50KG9wdHMuZGlnaXRzKSkgJiYgcmFkaXhQb3MgIT09IHBvcykgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBvcHRzLl9yYWRpeERhbmNlICYmIHBvcyA9PT0gcmFkaXhQb3MgLSAxID8gcmFkaXhQb3MgKyAxIDogcmFkaXhQb3NcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBvcHRzLl9fZmluYW5jZUlucHV0KSBpZiAoaXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmRpZ2l0c09wdGlvbmFsKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogY2FyZXRQb3MuZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLmRpZ2l0c09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zLmJlZ2luID4gcmFkaXhQb3MgJiYgY2FyZXRQb3MuZW5kIDw9IHJhZGl4UG9zKSByZXR1cm4gYyA9PT0gb3B0cy5yYWRpeFBvaW50ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcmFkaXhQb3MgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiByYWRpeFBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogcmFkaXhQb3MgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZXRQb3MuYmVnaW4gPCByYWRpeFBvcykgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBjYXJldFBvcy5iZWdpbiAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiAhb3B0cy5zaG93TWFza09uRm9jdXMgJiYgIW9wdHMuZGlnaXRzT3B0aW9uYWwgJiYgMCA8IG9wdHMuZGlnaXRzICYmIFwiXCIgPT09IHRoaXMuaW5wdXRtYXNrLl9fdmFsdWVHZXQuY2FsbCh0aGlzKSkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogcmFkaXhQb3NcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogcG9zXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24gcG9zdFZhbGlkYXRpb24oYnVmZmVyLCBwb3MsIGMsIGN1cnJlbnRSZXN1bHQsIG9wdHMsIG1hc2tzZXQsIHN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGN1cnJlbnRSZXN1bHQpIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaWN0KSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBvcHRzLm1pbiB8fCBudWxsICE9PSBvcHRzLm1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVubWFza2VkID0gb3B0cy5vblVuTWFzayhidWZmZXIuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSwgdm9pZCAwLCAkLmV4dGVuZCh7fSwgb3B0cywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG9wdHMubWluICYmIHVubWFza2VkIDwgb3B0cy5taW4gJiYgKHVubWFza2VkLnRvU3RyaW5nKCkubGVuZ3RoID4gb3B0cy5taW4udG9TdHJpbmcoKS5sZW5ndGggfHwgdW5tYXNrZWQgPCAwKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG9wdHMubWF4ICYmIHVubWFza2VkID4gb3B0cy5tYXgpIHJldHVybiAhIW9wdHMuU2V0TWF4T25PdmVyZmxvdyAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYWxpZ25EaWdpdHMob3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpLnNwbGl0KFwiXCIpLCBvcHRzLmRpZ2l0cywgb3B0cykucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uIG9uVW5NYXNrKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSB1bm1hc2tlZFZhbHVlICYmICEwID09PSBvcHRzLm51bGxhYmxlKSByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2Uob3B0cy5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2Uob3B0cy5zdWZmaXgsIFwiXCIpLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcIlwiICE9PSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgb3B0cy51bm1hc2tBc051bWJlciA/IChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgLTEgIT09IHByb2Nlc3NWYWx1ZS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCkgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKF9lc2NhcGVSZWdleC5kZWZhdWx0LmNhbGwodGhpcywgb3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyAoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpKSwgXCItXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIiRcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3NWYWx1ZSkpIDogcHJvY2Vzc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24gaXNDb21wbGV0ZShidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tlZFZhbHVlID0gKG9wdHMubnVtZXJpY0lucHV0ID8gYnVmZmVyLnNsaWNlKCkucmV2ZXJzZSgpIDogYnVmZmVyKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFza2VkVmFsdWUgPSBtYXNrZWRWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyAoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpKSwgXCItXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgbWFza2VkVmFsdWUgPSBtYXNrZWRWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIF9lc2NhcGVSZWdleC5kZWZhdWx0KShvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgIG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIiksIG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnN1ZmZpeCwgXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICBtYXNrZWRWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMuZ3JvdXBTZXBhcmF0b3IpICsgXCIoWzAtOV17M30pXCIsIFwiZ1wiKSwgXCIkMVwiKSwgXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZSgoMCwgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMucmFkaXhQb2ludCksIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShtYXNrZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IGZ1bmN0aW9uIG9uQmVmb3JlTWFzayhpbml0aWFsVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4UG9pbnQgPSBvcHRzLnJhZGl4UG9pbnQgfHwgXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKG9wdHMuZGlnaXRzKSAmJiAob3B0cy5kaWdpdHMgPSBwYXJzZUludChvcHRzLmRpZ2l0cykpLCBcIm51bWJlclwiICE9IHR5cGVvZiBpbml0aWFsVmFsdWUgJiYgXCJudW1iZXJcIiAhPT0gb3B0cy5pbnB1dFR5cGUgfHwgXCJcIiA9PT0gcmFkaXhQb2ludCB8fCAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgcmFkaXhQb2ludCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOYWd0aXZlID0gXCItXCIgPT09IGluaXRpYWxWYWx1ZS5jaGFyQXQoMCkgfHwgaW5pdGlhbFZhbHVlLmNoYXJBdCgwKSA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCwgdmFsdWVQYXJ0cyA9IGluaXRpYWxWYWx1ZS5zcGxpdChyYWRpeFBvaW50KSwgaW50ZWdlclBhcnQgPSB2YWx1ZVBhcnRzWzBdLnJlcGxhY2UoL1teXFwtMC05XS9nLCBcIlwiKSwgZGVjaW1hbFBhcnQgPSAxIDwgdmFsdWVQYXJ0cy5sZW5ndGggPyB2YWx1ZVBhcnRzWzFdLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSA6IFwiXCIsIGZvcmNlRGlnaXRzID0gMSA8IHZhbHVlUGFydHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbnRlZ2VyUGFydCArIChcIlwiICE9PSBkZWNpbWFsUGFydCA/IHJhZGl4UG9pbnQgKyBkZWNpbWFsUGFydCA6IGRlY2ltYWxQYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZ2l0cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSByYWRpeFBvaW50ICYmIChkaWdpdHMgPSBvcHRzLmRpZ2l0c09wdGlvbmFsID8gb3B0cy5kaWdpdHMgPCBkZWNpbWFsUGFydC5sZW5ndGggPyBvcHRzLmRpZ2l0cyA6IGRlY2ltYWxQYXJ0Lmxlbmd0aCA6IG9wdHMuZGlnaXRzLCBcbiAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gZGVjaW1hbFBhcnQgfHwgIW9wdHMuZGlnaXRzT3B0aW9uYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIGRpZ2l0cyB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKCgwLCBfZXNjYXBlUmVnZXguZGVmYXVsdCkocmFkaXhQb2ludCksIFwiLlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGluaXRpYWxWYWx1ZSkpIHx8IChpbml0aWFsVmFsdWUgPSAob3B0cy5yb3VuZGluZ0ZOKHBhcnNlRmxvYXQoaW5pdGlhbFZhbHVlKSAqIGRpZ2l0c0ZhY3RvcikgLyBkaWdpdHNGYWN0b3IpLnRvRml4ZWQoZGlnaXRzKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgcmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IG9wdHMuZGlnaXRzICYmIC0xICE9PSBpbml0aWFsVmFsdWUuaW5kZXhPZihyYWRpeFBvaW50KSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihyYWRpeFBvaW50KSkpLCBcbiAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5taW4gfHwgbnVsbCAhPT0gb3B0cy5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJWYWx1ZSA9IGluaXRpYWxWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UocmFkaXhQb2ludCwgXCIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5taW4gJiYgbnVtYmVyVmFsdWUgPCBvcHRzLm1pbiA/IGluaXRpYWxWYWx1ZSA9IG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgcmFkaXhQb2ludCkgOiBudWxsICE9PSBvcHRzLm1heCAmJiBudW1iZXJWYWx1ZSA+IG9wdHMubWF4ICYmIChpbml0aWFsVmFsdWUgPSBvcHRzLm1heC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIHJhZGl4UG9pbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNOYWd0aXZlICYmIFwiLVwiICE9PSBpbml0aWFsVmFsdWUuY2hhckF0KDApICYmIChpbml0aWFsVmFsdWUgPSBcIi1cIiArIGluaXRpYWxWYWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkRpZ2l0cyhpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIlwiKSwgZGlnaXRzLCBvcHRzLCBmb3JjZURpZ2l0cykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IGZ1bmN0aW9uIG9uQmVmb3JlV3JpdGUoZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcEJ1ZmZlcihidWZmZXIsIHN0cmlwUmFkaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gb3B0cy5fX2ZpbmFuY2VJbnB1dCB8fCBzdHJpcFJhZGl4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gYnVmZmVyLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSAhPT0gcG9zaXRpb24gJiYgYnVmZmVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gb3B0cy5ncm91cFNlcGFyYXRvcikgZm9yICg7LTEgIT09IChwb3NpdGlvbiA9IGJ1ZmZlci5pbmRleE9mKG9wdHMuZ3JvdXBTZXBhcmF0b3IpKTsgKSBidWZmZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCwgbGVhZGluZ3plcm9lcyA9IGNoZWNrRm9yTGVhZGluZ1plcm9lcyhidWZmZXIsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVhZGluZ3plcm9lcykgZm9yICh2YXIgY2FyZXROZHggPSBidWZmZXIuam9pbihcIlwiKS5sYXN0SW5kZXhPZihsZWFkaW5nemVyb2VzWzBdLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKSAtIChsZWFkaW5nemVyb2VzWzBdID09IGxlYWRpbmd6ZXJvZXMuaW5wdXQgPyAwIDogMSksIG9mZnNldCA9IGxlYWRpbmd6ZXJvZXNbMF0gPT0gbGVhZGluZ3plcm9lcy5pbnB1dCA/IDEgOiAwLCBpID0gbGVhZGluZ3plcm9lc1swXS5sZW5ndGggLSBvZmZzZXQ7IDAgPCBpOyBpLS0pIGRlbGV0ZSB0aGlzLm1hc2tzZXQudmFsaWRQb3NpdGlvbnNbY2FyZXROZHggKyBpXSwgXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBidWZmZXJbY2FyZXROZHggKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJsdXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBvcHRzLm1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZCA9IG9wdHMub25Vbk1hc2soYnVmZmVyLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIiksIHZvaWQgMCwgJC5leHRlbmQoe30sIG9wdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBvcHRzLm1pbiAmJiB1bm1hc2tlZCA8IG9wdHMubWluKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYWxpZ25EaWdpdHMob3B0cy5taW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpLnNwbGl0KFwiXCIpLCBvcHRzLmRpZ2l0cywgb3B0cykucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJbYnVmZmVyLmxlbmd0aCAtIDFdID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5tYnJNdGNocyA9IG5ldyBSZWdFeHAoXCIoXlwiICsgKFwiXCIgIT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCA/ICgwLCBfZXNjYXBlUmVnZXguZGVmYXVsdCkob3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgKyBcIj9cIiA6IFwiXCIpICsgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lc2NhcGVSZWdleC5kZWZhdWx0KShvcHRzLnByZWZpeCkgKyBcIikoLiopKFwiICsgKDAsIF9lc2NhcGVSZWdleC5kZWZhdWx0KShvcHRzLnN1ZmZpeCkgKyAoXCJcIiAhPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgPyAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2VzY2FwZVJlZ2V4LmRlZmF1bHQpKG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIj9cIiA6IFwiXCIpICsgXCIkKVwiKS5leGVjKHN0cmlwQnVmZmVyKGJ1ZmZlci5zbGljZSgpLCAhMCkucmV2ZXJzZSgpLmpvaW4oXCJcIikpLCBudW1iZXIgPSBubWJyTXRjaHMgPyBubWJyTXRjaHNbMl0gOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gbnVtYmVyICYmIChyZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBbIDAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBidWZmZXJbMF0gPT09IG9wdHMucmFkaXhQb2ludCAmJiAocmVzdWx0ICYmIHJlc3VsdC5idWZmZXIgPyByZXN1bHQuYnVmZmVyLnNoaWZ0KCkgOiAoYnVmZmVyLnNoaWZ0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHN0cmlwQnVmZmVyKGJ1ZmZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuZm9yY2VEaWdpdHNPbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJmZnIgPSByZXN1bHQgJiYgcmVzdWx0LmJ1ZmZlciB8fCBidWZmZXIuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyID0gITAsIHJlc3VsdC5idWZmZXIgPSBhbGlnbkRpZ2l0cyhiZmZyLCBvcHRzLmRpZ2l0cywgb3B0cywgITApLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKSwgYmZmcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIF9rZXljb2RlLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSArIHBhcnNlSW50KG9wdHMuc3RlcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBfa2V5Y29kZS5kZWZhdWx0LkRPV046XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSAtIHBhcnNlSW50KG9wdHMuc3RlcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSAmJiAoZS5rZXlDb2RlID09PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSB8fCBlLmtleUNvZGUgPT09IF9rZXljb2RlLmRlZmF1bHQuQkFDS1NQQUNFIHx8IGUua2V5Q29kZSA9PT0gX2tleWNvZGUuZGVmYXVsdC5CQUNLU1BBQ0VfU0FGQVJJKSAmJiBjYXJldFBvcy5iZWdpbiAhPT0gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcltlLmtleUNvZGUgPT09IF9rZXljb2RlLmRlZmF1bHQuREVMRVRFID8gY2FyZXRQb3MuYmVnaW4gLSAxIDogY2FyZXRQb3MuZW5kXSA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuIGJmZnIgPSBidWZmZXIuc2xpY2UoKS5yZXZlcnNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBiZmZyLnNoaWZ0KCksIFwiXCIgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjayAmJiBiZmZyLnBvcCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBiZmZyLmpvaW4oXCJcIiksIGNhcmV0UG9zLmJlZ2luIF0pLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gb3B0cy5fcmFkaXhEYW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9IGJ1ZmZlci5pbmRleE9mKG9wdHMucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuZGlnaXRzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHJhZGl4UG9zKSByZXR1cm4gYmZmciA9IGJ1ZmZlci5zbGljZSgpLnJldmVyc2UoKSwgYmZmci5wb3AoKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGJmZnIuam9pbihcIlwiKSwgY2FyZXRQb3MuYmVnaW4gPj0gYmZmci5sZW5ndGggPyBiZmZyLmxlbmd0aCA6IGNhcmV0UG9zLmJlZ2luIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgtMSAhPT0gcmFkaXhQb3MgJiYgKGNhcmV0UG9zLmJlZ2luIDwgcmFkaXhQb3MgfHwgY2FyZXRQb3MuZW5kIDwgcmFkaXhQb3MgfHwgZS5rZXlDb2RlID09PSBfa2V5Y29kZS5kZWZhdWx0LkRFTEVURSAmJiBjYXJldFBvcy5iZWdpbiA9PT0gcmFkaXhQb3MpKSByZXR1cm4gY2FyZXRQb3MuYmVnaW4gIT09IGNhcmV0UG9zLmVuZCB8fCBlLmtleUNvZGUgIT09IF9rZXljb2RlLmRlZmF1bHQuQkFDS1NQQUNFICYmIGUua2V5Q29kZSAhPT0gX2tleWNvZGUuZGVmYXVsdC5CQUNLU1BBQ0VfU0FGQVJJIHx8IGNhcmV0UG9zLmJlZ2luKyssIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJmZnIgPSBidWZmZXIuc2xpY2UoKS5yZXZlcnNlKCksIGJmZnIuc3BsaWNlKGJmZnIubGVuZ3RoIC0gY2FyZXRQb3MuYmVnaW4sIGNhcmV0UG9zLmJlZ2luIC0gY2FyZXRQb3MuZW5kICsgMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJmZnIgPSBhbGlnbkRpZ2l0cyhiZmZyLCBvcHRzLmRpZ2l0cywgb3B0cykuam9pbihcIlwiKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGJmZnIsIGNhcmV0UG9zLmJlZ2luID49IGJmZnIubGVuZ3RoID8gcmFkaXhQb3MgKyAxIDogY2FyZXRQb3MuYmVnaW4gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgIGRpZ2l0c09wdGlvbmFsOiAhMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlY2ltYWw6IHtcbiAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlZ2VyOiB7XG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgIGRpZ2l0czogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHtcbiAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgICAgICBhbGxvd01pbnVzOiAhMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGlhbm5zOiB7XG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgIF9tYXNrOiBmdW5jdGlvbiBfbWFzayhvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIG9wdHMuZ3JvdXBTZXBhcmF0b3IgKyBcIjk5KXsqfDF9KFwiICsgb3B0cy5ncm91cFNlcGFyYXRvciArIFwiOTk5KXsxfDF9XCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCIsXCIsXG4gICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2KSksIF9pbnB1dG1hc2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMSkpO1xuICAgICAgICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgICAgICAgIH0sIF90eXBlb2Yob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHN1cGVyQ2xhc3MgJiYgbnVsbCAhPT0gc3VwZXJDbGFzcykgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgc3VwZXJDbGFzcyAmJiBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gICAgICAgICAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gIWNhbGwgfHwgXCJvYmplY3RcIiAhPT0gX3R5cGVvZihjYWxsKSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGNhbGwgPyBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIDogY2FsbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHNlbGYpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICAgICAgICAgIHZhciBfY2FjaGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1hcCA/IG5ldyBNYXAoKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBDbGFzcyB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG4gICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgQ2xhc3MpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgX2NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgICAgICAgICAgIH0sIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdCA6IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gWyBudWxsIF07XG4gICAgICAgICAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKSwgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2xhc3MgJiYgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpLCBpbnN0YW5jZTtcbiAgICAgICAgICAgIH0sIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7XG4gICAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExO1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uKCkge30pKSwgXG4gICAgICAgICAgICAgICAgITA7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gLTEgIT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8uX19wcm90b19fID0gcCwgbztcbiAgICAgICAgICAgIH0sIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICAgICAgICAgIH0sIF9nZXRQcm90b3R5cGVPZihvKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvY3VtZW50ID0gX3dpbmRvdy5kZWZhdWx0LmRvY3VtZW50O1xuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGVhZCAmJiBkb2N1bWVudC5oZWFkLmF0dGFjaFNoYWRvdyAmJiBfd2luZG93LmRlZmF1bHQuY3VzdG9tRWxlbWVudHMgJiYgdm9pZCAwID09PSBfd2luZG93LmRlZmF1bHQuY3VzdG9tRWxlbWVudHMuZ2V0KFwiaW5wdXQtbWFza1wiKSkge1xuICAgICAgICAgICAgdmFyIElucHV0bWFza0VsZW1lbnQgPSBmdW5jdGlvbihfSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBfaW5oZXJpdHMoSW5wdXRtYXNrRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElucHV0bWFza0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIElucHV0bWFza0VsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcztcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0bWFza0VsZW1lbnQpLCBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZXMgPSBfdGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLCBzaGFkb3cgPSBfdGhpcy5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJjbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICB9KSwgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4gaW5wdXQudHlwZSA9IFwidGV4dFwiLCBzaGFkb3cuYXBwZW5kQ2hpbGQoaW5wdXQpLCBhdHRyaWJ1dGVOYW1lcykgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0dHJpYnV0ZU5hbWVzLCBhdHRyKSAmJiBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZXNbYXR0cl0sIF90aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lc1thdHRyXSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW0gPSBuZXcgX2lucHV0bWFzay5kZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbS5kYXRhQXR0cmlidXRlID0gXCJcIiwgaW0ubWFzayhpbnB1dCksIGlucHV0LmlucHV0bWFzay5zaGFkb3dSb290ID0gc2hhZG93LCBcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2tFbGVtZW50O1xuICAgICAgICAgICAgfShfd3JhcE5hdGl2ZVN1cGVyKEhUTUxFbGVtZW50KSk7XG4gICAgICAgICAgICBfd2luZG93LmRlZmF1bHQuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaW5wdXQtbWFza1wiLCBJbnB1dG1hc2tFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0gXSwgaW5zdGFsbGVkTW9kdWxlcyA9IHt9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzLCBcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogZ2V0dGVyXG4gICAgICAgIH0pO1xuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiAgICAgICAgaWYgKDEgJiBtb2RlICYmICh2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpKSwgOCAmIG1vZGUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgaWYgKDQgJiBtb2RlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIHZhbHVlICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgaWYgKF9fd2VicGFja19yZXF1aXJlX18ucihucyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pLCAyICYgbW9kZSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiB2YWx1ZSkgZm9yICh2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVba2V5XTtcbiAgICAgICAgfS5iaW5kKG51bGwsIGtleSkpO1xuICAgICAgICByZXR1cm4gbnM7XG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiBnZXREZWZhdWx0KCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICB9IDogZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCBcImFcIiwgZ2V0dGVyKSwgZ2V0dGVyO1xuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcbiAgICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAgIGk6IG1vZHVsZUlkLFxuICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyksIFxuICAgICAgICBtb2R1bGUubCA9ICEwLCBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgdmFyIG1vZHVsZXMsIGluc3RhbGxlZE1vZHVsZXM7XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJyb3ctYnRuL2Fycm93LWJ0bi5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvYXJyb3ctYnRuL2Fycm93LWJ0bi5qc1wiLFxuXHRcIi4vYXJyb3ctaW5wdC9hcnJvdy1pbnB0LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9hcnJvdy1pbnB0L2Fycm93LWlucHQuanNcIixcblx0XCIuL2J1dHRvbi9fdGhlbWVfY2xpY2svYnV0dG9uX3RoZW1lX2NsaWNrLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3RoZW1lX2NsaWNrL2J1dHRvbl90aGVtZV9jbGljay5qc1wiLFxuXHRcIi4vYnV0dG9uL190aGVtZV9lbnRlci9idXR0b25fdGhlbWVfZW50ZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9fdGhlbWVfZW50ZXIvYnV0dG9uX3RoZW1lX2VudGVyLmpzXCIsXG5cdFwiLi9idXR0b24vX3RoZW1lX3JlZ2lzdHJhdGlvbi9idXR0b25fdGhlbWVfcmVnaXN0cmF0aW9uLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3RoZW1lX3JlZ2lzdHJhdGlvbi9idXR0b25fdGhlbWVfcmVnaXN0cmF0aW9uLmpzXCIsXG5cdFwiLi9idXR0b24vYnV0dG9uLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzXCIsXG5cdFwiLi9jYWxlbmRhci9jYWxlbmRhci5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuanNcIixcblx0XCIuL2Nhcm91c2VsL2Nhcm91c2VsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5qc1wiLFxuXHRcIi4vY2hlY2tib3gvY2hlY2tib3guanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmpzXCIsXG5cdFwiLi9jb21tZW50L2NvbW1lbnQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5qc1wiLFxuXHRcIi4vZGF0ZWZpZWxkL2RhdGVmaWVsZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZGF0ZWZpZWxkL2RhdGVmaWVsZC5qc1wiLFxuXHRcIi4vZGlhZ3JhbS9kaWFncmFtLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uanNcIixcblx0XCIuL2Ryb3AtZGF0ZXMvZHJvcC1kYXRlcy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZHJvcC1kYXRlcy9kcm9wLWRhdGVzLmpzXCIsXG5cdFwiLi9kcm9wZG93bi9kcm9wZG93bi5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uanNcIixcblx0XCIuL2VudGVyLWNhcmQvZW50ZXItY2FyZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZW50ZXItY2FyZC9lbnRlci1jYXJkLmpzXCIsXG5cdFwiLi9maWx0ZXIvX19leHBhbmRhYmxlLWNoZWNrYm94L2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZmlsdGVyL19fZXhwYW5kYWJsZS1jaGVja2JveC9maWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3guanNcIixcblx0XCIuL2ZpbHRlci9fX3JhbmdlL2ZpbHRlcl9fcmFuZ2UuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2ZpbHRlci9fX3JhbmdlL2ZpbHRlcl9fcmFuZ2UuanNcIixcblx0XCIuL2ZpbHRlci9maWx0ZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuanNcIixcblx0XCIuL2Zvb3Rlci9mb290ZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanNcIixcblx0XCIuL2hlYWRlci9oZWFkZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanNcIixcblx0XCIuL2luZm8tY2FyZC9fX2NhbGN1bGF0aW9ucy9pbmZvLWNhcmRfX2NhbGN1bGF0aW9ucy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvaW5mby1jYXJkL19fY2FsY3VsYXRpb25zL2luZm8tY2FyZF9fY2FsY3VsYXRpb25zLmpzXCIsXG5cdFwiLi9pbmZvLWNhcmQvaW5mby1jYXJkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmpzXCIsXG5cdFwiLi9pbnB0L2lucHQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2lucHQvaW5wdC5qc1wiLFxuXHRcIi4vbGF5b3V0L2xheW91dC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qc1wiLFxuXHRcIi4vbGkvbGkuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2xpL2xpLmpzXCIsXG5cdFwiLi9saWtlL2xpa2UuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2xpa2UvbGlrZS5qc1wiLFxuXHRcIi4vbG9nby9sb2dvLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uanNcIixcblx0XCIuL21hc2tlZC1pbnB0L21hc2tlZC1pbnB0LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9tYXNrZWQtaW5wdC9tYXNrZWQtaW5wdC5qc1wiLFxuXHRcIi4vbWVudS9tZW51LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanNcIixcblx0XCIuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzXCIsXG5cdFwiLi9yYWRpby9yYWRpby5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uanNcIixcblx0XCIuL3JhdGUvcmF0ZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvcmF0ZS9yYXRlLmpzXCIsXG5cdFwiLi9yZWdpc3RyYXRpb24tY2FyZC9yZWdpc3RyYXRpb24tY2FyZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLWNhcmQvcmVnaXN0cmF0aW9uLWNhcmQuanNcIixcblx0XCIuL3JpY2gtY2hlY2tib3gvcmljaC1jaGVja2JveC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvcmljaC1jaGVja2JveC9yaWNoLWNoZWNrYm94LmpzXCIsXG5cdFwiLi9yb29tL3Jvb20uanNcIjogXCIuL3NyYy9jb21wb25lbnRzL3Jvb20vcm9vbS5qc1wiLFxuXHRcIi4vc2VhcmNoLXJvb20tY2FyZC9zZWFyY2gtcm9vbS1jYXJkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuanNcIixcblx0XCIuL3RleHQtd2l0aC1waWN0dXJlL3RleHQtd2l0aC1waWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy90ZXh0LXdpdGgtcGljdHVyZS90ZXh0LXdpdGgtcGljdHVyZS5qc1wiLFxuXHRcIi4vdG9nZ2xlL3RvZ2dsZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvKD8hLiooPzpfX3Rlc3RzX18pKS4qXFxcXC4oanN4PykkXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9hcnJvdy1idG4uY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Fycm93LWlucHQuY3NzJztcclxuXHJcbmNvbnN0IGFycm93SW5wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnJvdy1pbnB0Jyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFycm93SW5wdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGlucHQgPSBhcnJvd0lucHRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fycm93LWlucHRfX2ZpZWxkJylbMF07XHJcbiAgICBpbnB0Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBhcnJvd0lucHRzW2ldLmNsYXNzTGlzdC5hZGQoJ2Fycm93LWlucHRfZm9jdXNfb24nKTtcclxuICAgIH1cclxuICAgIGlucHQub25ibHVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyb3dJbnB0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy1pbnB0X2ZvY3VzX29uJyk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBjbGlja0J1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b25fdGhlbWVfY2xpY2snKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5nQ2xpY2tCdXR0b25zSGFuZGxlcigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2tCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2xpY2tCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGlja0J1dHRvbnNbaV0uY2xhc3NMaXN0LmFkZCgnYnV0dG9uX3RoZW1lX2NsaWNrX2NsaWNrZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjbGlja0J1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX3RoZW1lX2NsaWNrX2NsaWNrZWQnKSwgMjkwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZ0NsaWNrQnV0dG9uc0hhbmRsZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IGVudGVyQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbl90aGVtZV9lbnRlcicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRlckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGVudGVyQnV0dG9uc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZW50ZXJCdXR0b25zW2ldLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl90aGVtZV9lbnRlcl9jbGlja2VkJyk7XHJcbiAgICAgICAgZW50ZXJCdXR0b25zW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uY2xpY2soKTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b25fdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbkJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHJlZ2lzdHJhdGlvbkJ1dHRvbnNbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbkJ1dHRvbnNbaV0uY2xhc3NMaXN0LmFkZCgnYnV0dG9uX3RoZW1lX3JlZ2lzdHJhdGlvbl9jbGlja2VkJyk7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uQnV0dG9uc1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYnV0dG9uLmNzcyc7XHJcbmltcG9ydCAnLi9fdGhlbWVfZW50ZXIvYnV0dG9uX3RoZW1lX2VudGVyLmNzcyc7XHJcbmltcG9ydCAnLi9fdGhlbWVfcmVnaXN0cmF0aW9uL2J1dHRvbl90aGVtZV9yZWdpc3RyYXRpb24uY3NzJztcclxuaW1wb3J0ICcuL190aGVtZV9jbGljay9idXR0b25fdGhlbWVfY2xpY2suY3NzJztcclxuaW1wb3J0ICcuL19zaXplX3MvYnV0dG9uX3NpemVfcy5jc3MnO1xyXG5pbXBvcnQgJy4vX3NpemVfbS9idXR0b25fc2l6ZV9tLmNzcyc7XHJcbmltcG9ydCAnLi9fc2l6ZV9sL2J1dHRvbl9zaXplX2wuY3NzJztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2NhbGVuZGFyLmNzcyc7XHJcbmltcG9ydCBoYW5nQ2xpY2tCdXR0b25zSGFuZGxlciBmcm9tICcuLi9idXR0b24vX3RoZW1lX2NsaWNrL2J1dHRvbl90aGVtZV9jbGljay5qcyc7XHJcblxyXG5jb25zdCBjYWxlbmRhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxlbmRhcicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGNhbGVuZGFyc1tpXSkuZGlzcGxheSA9PSAnbm9uZScgfHwgY2FsZW5kYXJzW2ldLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgY2FsZW5kYXJzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGNhbGVuZGFyc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgY2FsZW5kYXJzW2ldLnN0eWxlLnpJbmRleCA9ICctMTAwMDAnO1xyXG4gICAgICAgIGNhbGVuZGFyc1tpXS5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgY2FsZW5kYXJzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgY2FsZW5kYXJzW2ldLnN0eWxlLmJvcmRlciA9ICcwJztcclxuICAgICAgICBjYWxlbmRhcnNbaV0uc3R5bGUub3V0bGluZSA9ICcwJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgYWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgYWx0SW5wdXQudHlwZSA9ICdoaWRkZW4nO1xyXG4gICAgYWx0SW5wdXQuY2xhc3NOYW1lID0gJ2NhbGVuZGFyX19hbHRGaWVsZCc7XHJcbiAgICBjYWxlbmRhcnNbaV0uYWZ0ZXIoYWx0SW5wdXQpO1xyXG4gICAgXHJcbiAgICAkKGNhbGVuZGFyc1tpXSkuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAga2V5Ym9hcmROYXY6IGZhbHNlLFxyXG4gICAgICAgIG11bHRpcGxlRGF0ZXNTZXBhcmF0b3I6ICcgLSAnLFxyXG4gICAgICAgIC8vbWluRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBhbHRGaWVsZDogJChhbHRJbnB1dCksXHJcbiAgICAgICAgYWx0RmllbGREYXRlRm9ybWF0OiAneXl5eSxtLGQnLFxyXG4gICAgICAgIG5hdlRpdGxlczoge1xyXG4gICAgICAgICAgICBkYXlzOiAnTU0geXl5eScsXHJcbiAgICAgICAgICAgIG1vbnRoczogJ3l5eXknLFxyXG4gICAgICAgICAgICB5ZWFyczogJ3l5eXkxIC0geXl5eTInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb250aHNGaWVsZDogJ21vbnRocycsXHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJCdXR0b246IHRydWUsXHJcbiAgICAgICAgcHJldkh0bWw6ICdhcnJvd19iYWNrJyxcclxuICAgICAgICBuZXh0SHRtbDogJ2Fycm93X2ZvcndhcmQnLFxyXG4gICAgICAgIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYWxlbmRhckNoYW5nZVZpZXcoaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhpZGU6IGZ1bmN0aW9uKGluc3QsIGFuaW1hdGlvbkNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25Db21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoaWRlRXZlbnQgPSBuZXcgRXZlbnQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJzW2ldLmRpc3BhdGNoRXZlbnQoaGlkZUV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGZvcm1hdHRlZERhdGUsIGRhdGUsIGluc3QpIHtcclxuICAgICAgICAgICAgY2FsZW5kYXJDaGFuZ2VWaWV3KGkpO1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY2FsZW5kYXJzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudCA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgY2FsZW5kYXJzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsZW5kYXJDaGFuZ2VWaWV3KGkpIHtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZXBpY2tlcicpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRhdGVwaWNrZXJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVwaWNrZXItLWJ1dHRvbnMnKVswXTtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSAkKGNhbGVuZGFyc1tpXSkuZGF0ZXBpY2tlcigpLmRhdGEoJ2RhdGVwaWNrZXInKTtcclxuXHJcbiAgICBidXR0b25zLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tYnV0dG9uXCIgZGF0YS1hY3Rpb249XCJjbGVhclwiPjwvZGl2PjxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uX3RoZW1lX2NsaWNrIGNhbGVuZGFyX19yZWZyZXNoXCI+0J7Rh9C40YHRgtC40YLRjDwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uX3RoZW1lX2NsaWNrIGNhbGVuZGFyX19zdWJtaXRcIj7Qn9GA0LjQvNC10L3QuNGC0Yw8L2J1dHRvbj4nO1xyXG4gICAgaGFuZ0NsaWNrQnV0dG9uc0hhbmRsZXIoKTtcclxuICAgIGJ1dHRvbnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsZW5kYXJfX3JlZnJlc2gnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCksIDI5MCk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsZW5kYXJfX3N1Ym1pdCcpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZGF0ZXBpY2tlci5oaWRlKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY2Fyb3VzZWwuY3NzJztcclxuaW1wb3J0ICcuL19hY3RpdmUvY2Fyb3VzZWxfX2NpcmNsZV9hY3RpdmUuY3NzJztcclxuXHJcbmNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2Vscy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxBcnJvd1JpZ2h0V3JhcHBlciA9IGNhcm91c2Vsc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9fYXJyb3ctcmlnaHQtd3JhcHBlcicpWzBdLFxyXG4gICAgICAgICAgY2Fyb3VzZWxBcnJvd0xlZnRXcmFwcGVyID0gY2Fyb3VzZWxzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19hcnJvdy1sZWZ0LXdyYXBwZXInKVswXSxcclxuICAgICAgICAgIGNhcm91c2VsV2luZG93ID0gY2Fyb3VzZWxzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsLXdpbmRvdycpWzBdO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2NoZWNrYm94LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBoYW5nQ2hlY2tib3hlc0hhbmRsZXIoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrYm94X19oaWRkZW4nKVswXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNbaV0uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfY2hlY2tlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3hfY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja2JveGVzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrYm94X19oaWRkZW4nKVswXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94X2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94ZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3hfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3hfX2hpZGRlbicpWzBdLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc1tpXS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaGFuZ0NoZWNrYm94ZXNIYW5kbGVyKCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmdDaGVja2JveGVzSGFuZGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2NvbW1lbnQuY3NzJztcclxuaW1wb3J0IG11cmFkIGZyb20gJy4vaW1hZ2VzL211cmFkLnBuZyc7XHJcbmltcG9ydCBwYXQgZnJvbSAnLi9pbWFnZXMvcGF0LnBuZyc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL211cmFkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9wYXQucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2RhdGVmaWVsZC5jc3MnO1xyXG5cclxuY29uc3QgZGF0ZUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVmaWVsZCcpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjYWxlbmRhcklucHQgPSBkYXRlRmllbGRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVmaWVsZF9fY2FsZW5kYXInKVswXTtcclxuICAgIGNvbnN0IGRhdGVmaWVsZEFycm93ID0gZGF0ZUZpZWxkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlZmllbGRfX2Fycm93JylbMF07XHJcbiAgICBjb25zdCBkYXRlZmllbGRWYWx1ZSA9IGRhdGVGaWVsZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZWZpZWxkX192YWx1ZScpWzBdO1xyXG4gICAgbGV0IHR1cm5lciA9IDA7XHJcblxyXG5cclxuICAgIGRhdGVGaWVsZHNbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHVybmVyID09IDApIHtcclxuICAgICAgICAgICAgY2FsZW5kYXJJbnB0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHR1cm5lciA9IDE7XHJcbiAgICAgICAgICAgIGRhdGVmaWVsZEFycm93LmlubmVySFRNTCA9ICdrZXlib2FyZF9hcnJvd191cCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsZW5kYXJJbnB0LmJsdXIoKTtcclxuICAgICAgICAgICAgdHVybmVyID0gMDtcclxuICAgICAgICAgICAgZGF0ZWZpZWxkQXJyb3cuaW5uZXJIVE1MID0gJ2tleWJvYXJkX2Fycm93X2Rvd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxlbmRhcklucHQuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0dXJuZXIgPSAwO1xyXG4gICAgICAgIGRhdGVmaWVsZEFycm93LmlubmVySFRNTCA9ICdrZXlib2FyZF9hcnJvd19kb3duJztcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjYWxlbmRhcklucHQub25pbnB1dCA9IGZ1bmN0aW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgZGF0ZWZpZWxkVmFsdWUuaW5uZXJIVE1MID0gY2FsZW5kYXJJbnB0LnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9kaWFncmFtLmNzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9kcm9wLWRhdGVzLmNzc1wiO1xyXG5cclxuY29uc3QgZGF0ZURyb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlcycpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlRHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRyb3BEYXRlc0Fycml2YWxTd2l0aGVyID0gZGF0ZURyb3BzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3AtZGF0ZXNfX2Fycml2YWwtc3dpdGNoZXInKVswXTtcclxuICAgIGNvbnN0IGRyb3BEYXRlc0RlcGFydHVyZVN3aXRoZXIgPSBkYXRlRHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlc19fZGVwYXJ0dXJlLXN3aXRjaGVyJylbMF07XHJcbiAgICBjb25zdCBkcm9wRGF0ZXNBcnJpdmFsVmFsdWUgPSBkYXRlRHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlc19fYXJyaXZhbC12YWx1ZScpWzBdO1xyXG4gICAgY29uc3QgZHJvcERhdGVzRGVwYXJ0dXJlVmFsdWUgPSBkYXRlRHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlc19fZGVwYXJ0dXJlLXZhbHVlJylbMF07XHJcbiAgICBjb25zdCBjYWxlbmRhcklucHQgPSBkYXRlRHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlc19fY2FsZW5kYXInKVswXTtcclxuICAgIGNvbnN0IGRyb3BEYXRlc0Fycm93cyA9IGRhdGVEcm9wc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wLWRhdGVzX19hcnJvdycpO1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9ICQoY2FsZW5kYXJJbnB0KS5kYXRlcGlja2VyKCkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG4gICAgbGV0IHR1cm5lciA9IDA7XHJcbiAgICBjb25zdCBzd2l0Y2hDYWxlbmRhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0dXJuZXIgPT0gMCkge1xyXG4gICAgICAgICAgICBjYWxlbmRhcklucHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgdHVybmVyID0gMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wRGF0ZXNBcnJvd3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRyb3BEYXRlc0Fycm93c1tqXS5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfdXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsZW5kYXJJbnB0LmJsdXIoKTtcclxuICAgICAgICAgICAgdHVybmVyID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wRGF0ZXNBcnJvd3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRyb3BEYXRlc0Fycm93c1tqXS5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBkcm9wRGF0ZXNBcnJpdmFsU3dpdGhlci5vbmNsaWNrID0gc3dpdGNoQ2FsZW5kYXI7XHJcbiAgICBkcm9wRGF0ZXNEZXBhcnR1cmVTd2l0aGVyLm9uY2xpY2sgPSBzd2l0Y2hDYWxlbmRhcjtcclxuICAgIFxyXG4gICAgY2FsZW5kYXJJbnB0LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0dXJuZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZHJvcERhdGVzQXJyb3dzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wRGF0ZXNBcnJvd3Nbal0uaW5uZXJIVE1MID0gJ2tleWJvYXJkX2Fycm93X2Rvd24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY2FsZW5kYXJJbnB0Lm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IGNhbGVuZGFySW5wdC52YWx1ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYWxlbmRhcklucHQudmFsdWUgIT0gJycgJiYgZGF0ZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgZHJvcERhdGVzQXJyaXZhbFZhbHVlLmlubmVySFRNTCA9IGRhdGVzWzBdO1xyXG4gICAgICAgICAgICBkcm9wRGF0ZXNEZXBhcnR1cmVWYWx1ZS5pbm5lckhUTUwgPSAn0JTQlC7QnNCcLtCT0JPQk9CTJztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZHJvcERhdGVzQXJyaXZhbFZhbHVlLmlubmVySFRNTCA9IGRhdGVzWzBdO1xyXG4gICAgICAgICAgICBkcm9wRGF0ZXNEZXBhcnR1cmVWYWx1ZS5pbm5lckhUTUwgPSBkYXRlc1sxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcm9wRGF0ZXNBcnJpdmFsVmFsdWUuaW5uZXJIVE1MID0gJ9CU0JQu0JzQnC7Qk9CT0JPQkyc7XHJcbiAgICAgICAgICAgIGRyb3BEYXRlc0RlcGFydHVyZVZhbHVlLmlubmVySFRNTCA9ICfQlNCULtCc0Jwu0JPQk9CT0JMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgZGF0ZURyb3BzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9kcm9wZG93bi5jc3NcIjtcclxuXHJcbmNvbnN0IGRyb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24nKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRyb3BTd2l0Y2hlciA9IGRyb3BzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19zd2l0Y2hlcicpWzBdLFxyXG4gICAgICAgIGRyb3BBcnJvdyA9IGRyb3BzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19hcnJvdycpWzBdLFxyXG4gICAgICAgIGRyb3BIYW5kbGVyID0gZHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX2hhbmRsZXInKVswXSxcclxuICAgICAgICBkcm9wVmFsdWUgPSBkcm9wc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9fdmFsdWUnKVswXSxcclxuICAgICAgICBkcm9wSW5wdXRWYWx1ZXMgPSBkcm9wc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9faW5wdXQtdmFsdWUnKSxcclxuICAgICAgICBkcm9wUGx1c2VzID0gZHJvcHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX3BsdXMnKSxcclxuICAgICAgICBkcm9wTWludXNlcyA9IGRyb3BzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19taW51cycpO1xyXG4gICAgY29uc3QgZHJvcFJlZnJlc2ggPSBkcm9wc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKVswXTtcclxuICAgIGNvbnN0IGRyb3BTdWJtaXQgPSBkcm9wc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKVsxXTtcclxuICAgIGxldCBkcm9wVHVybmVyID0gMCxcclxuICAgICAgICBkcm9wSGFuZGxlclZhbHVlc0FycmF5ID0gW107XHJcbiAgICBcclxuICAgIGRyb3BTd2l0Y2hlci5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGRyb3BUdXJuZXIgPT0gMCkge1xyXG4gICAgICAgICAgICBkcm9wc1tpXS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICBkcm9wQXJyb3cuaW5uZXJIVE1MID0gJ2tleWJvYXJkX2Fycm93X3VwJztcclxuICAgICAgICAgICAgZHJvcFR1cm5lciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHJvcHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgZHJvcEFycm93LmlubmVySFRNTCA9ICdrZXlib2FyZF9hcnJvd19kb3duJztcclxuICAgICAgICAgICAgZHJvcFR1cm5lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRyb3BJbnB1dFZhbHVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGRyb3BIYW5kbGVyVmFsdWVzQXJyYXkucHVzaChwYXJzZUludChkcm9wSW5wdXRWYWx1ZXNbal0uaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgZHJvcEhhbmRsZXIudmFsdWUgPSBKU09OLnN0cmluZ2lmeShkcm9wSGFuZGxlclZhbHVlc0FycmF5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wUGx1c2VzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgZHJvcFBsdXNlc1tqXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRyb3BIYW5kbGVyVmFsdWVzQXJyYXkgPSBKU09OLnBhcnNlKGRyb3BIYW5kbGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGFyc2VJbnQoZHJvcElucHV0VmFsdWVzW2pdLmlubmVySFRNTCkgKyAxO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZHJvcElucHV0VmFsdWVzW2pdLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgZHJvcEhhbmRsZXJWYWx1ZXNBcnJheVtqXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgZHJvcEhhbmRsZXIudmFsdWUgPSBKU09OLnN0cmluZ2lmeShkcm9wSGFuZGxlclZhbHVlc0FycmF5KTtcclxuICAgICAgICAgICAgZHJvcE1pbnVzZXNbal0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX21pbnVzX2luYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChkcm9wSGFuZGxlci52YWx1ZSAhPSAnWzAsMCwwXScpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BzW2ldLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19yZWZyZXNoX2FjdGl2ZScpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRyb3BzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19yZWZyZXNoX2FjdGl2ZScpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIGRyb3BzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wTWludXNlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGRyb3BNaW51c2VzW2pdLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZHJvcEhhbmRsZXJWYWx1ZXNBcnJheSA9IEpTT04ucGFyc2UoZHJvcEhhbmRsZXIudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZUludChkcm9wSW5wdXRWYWx1ZXNbal0uaW5uZXJIVE1MKSA+IDAgPyBwYXJzZUludChkcm9wSW5wdXRWYWx1ZXNbal0uaW5uZXJIVE1MKSAtIDEgOiAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZHJvcElucHV0VmFsdWVzW2pdLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgZHJvcEhhbmRsZXJWYWx1ZXNBcnJheVtqXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgZHJvcEhhbmRsZXIudmFsdWUgPSBKU09OLnN0cmluZ2lmeShkcm9wSGFuZGxlclZhbHVlc0FycmF5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fbWludXNfaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRyb3BIYW5kbGVyLnZhbHVlICE9ICdbMCwwLDBdJykge1xyXG4gICAgICAgICAgICAgICAgZHJvcHNbaV0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX3JlZnJlc2hfYWN0aXZlJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZHJvcHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3JlZnJlc2hfYWN0aXZlJyk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgZHJvcHNbaV0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcm9wUmVmcmVzaC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZHJvcEhhbmRsZXIudmFsdWUgPSAnWzAsMCwwXSc7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wSW5wdXRWYWx1ZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgZHJvcElucHV0VmFsdWVzW2pdLmlubmVySFRNTCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvcHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3JlZnJlc2hfYWN0aXZlJyk7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgIGRyb3BzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcm9wU3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkcm9wc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9leHBhbmRlZCcpO1xyXG4gICAgICAgIGRyb3BBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgZHJvcFR1cm5lciA9IDA7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZW50ZXItY2FyZC5jc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9maWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3guY3NzJztcclxuXHJcbmNvbnN0IGZpbHRlckV4cGFuZGFibGVDaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94Jyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckV4cGFuZGFibGVDaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlciA9IGZpbHRlckV4cGFuZGFibGVDaGVja2JveGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1zd2l0Y2hlcicpWzBdO1xyXG4gICAgY29uc3QgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QXJyb3cgPSBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hlc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYXJyb3cnKVswXTtcclxuICAgIGxldCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlclR1cm5lciA9IDA7XHJcblxyXG4gICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94U3dpdGNoZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94U3dpdGNoZXJUdXJuZXIgPT0gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hlc1tpXS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3hfZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QXJyb3cuaW5uZXJIVE1MID0gJ2tleWJvYXJkX2Fycm93X3VwJztcclxuICAgICAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94U3dpdGNoZXJUdXJuZXIgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveF9leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyVHVybmVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2ZpbHRlcl9fcmFuZ2UuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZmlsdGVyLmNzcyc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3BhZ2VzL3NlYXJjaC1yb29tL2RhdGEuanNvbic7XHJcbmltcG9ydCByb29tMzUwIGZyb20gJy4vaW1hZ2VzL3Jvb20zNTAuanBnJztcclxuaW1wb3J0IHJvb20zNTIgZnJvbSAnLi9pbWFnZXMvcm9vbTM1Mi5qcGcnO1xyXG5pbXBvcnQgcm9vbTQ0NCBmcm9tICcuL2ltYWdlcy9yb29tNDQ0LmpwZyc7XHJcbmltcG9ydCByb29tNDUwIGZyb20gJy4vaW1hZ2VzL3Jvb200NTAuanBnJztcclxuaW1wb3J0IHJvb202NjYgZnJvbSAnLi9pbWFnZXMvcm9vbTY2Ni5qcGcnO1xyXG5pbXBvcnQgcm9vbTY3OCBmcm9tICcuL2ltYWdlcy9yb29tNjc4LmpwZyc7XHJcbmltcG9ydCByb29tNzQwIGZyb20gJy4vaW1hZ2VzL3Jvb203NDAuanBnJztcclxuaW1wb3J0IHJvb204NDAgZnJvbSAnLi9pbWFnZXMvcm9vbTg0MC5qcGcnO1xyXG5pbXBvcnQgcm9vbTg1NiBmcm9tICcuL2ltYWdlcy9yb29tODU2LmpwZyc7XHJcbmltcG9ydCByb29tODg4IGZyb20gJy4vaW1hZ2VzL3Jvb204ODguanBnJztcclxuaW1wb3J0IHJvb205ODAgZnJvbSAnLi9pbWFnZXMvcm9vbTk4MC5qcGcnO1xyXG5pbXBvcnQgcm9vbTk4MiBmcm9tICcuL2ltYWdlcy9yb29tOTgyLmpwZyc7XHJcbmltcG9ydCBzdWIxUm9vbTg4OCBmcm9tICcuL2ltYWdlcy9zdWIxUm9vbTg4OC5qcGcnO1xyXG5pbXBvcnQgc3ViMlJvb204ODggZnJvbSAnLi9pbWFnZXMvc3ViMlJvb204ODguanBnJztcclxuaW1wb3J0IGhhbmdQYWdpbmF0aW9uSGFuZGxlcnMgZnJvbSAnLi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzJztcclxuaW1wb3J0IGhhbmdDaGVja2JveGVzSGFuZGxlciBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5qcyc7XHJcbmltcG9ydCBoYW5nUmljaENoZWNrYm94ZXNIYW5kbGVyIGZyb20gJy4uL3JpY2gtY2hlY2tib3gvcmljaC1jaGVja2JveC5qcyc7XHJcblxyXG5jb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyJyk7XHJcbmxldCByb29tcyA9IGRhdGEucm9vbXMuc2xpY2UoKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLnRveGluKTtcclxuICAgIFxyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3RveGluJyk7XHJcbiAgICBjb25zdCBzY3JlZW4gPSBmaWx0ZXJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fcmVzdWx0JylbMF07XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uJylbMF07XHJcbiAgICBjb25zdCByb29tc09uUGFnZSA9IDEyO1xyXG4gICAgbGV0IHBhZ2VzQW1vdW50ID0gTWF0aC5jZWlsKHJvb21zLmxlbmd0aCAvIHJvb21zT25QYWdlKTtcclxuICAgIGNvbnN0IGZpbHRlclNtb2tlID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX3Ntb2tlJylbMF07XHJcbiAgICBjb25zdCBmaWx0ZXJQZXRzID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX3BldHMnKVswXTtcclxuICAgIGNvbnN0IGZpbHRlckd1ZXN0cyA9IGZpbHRlcnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19ndWVzdHMnKVswXTtcclxuICAgIGNvbnN0IGZpbHRlcldpZGVDb3JyaWRvciA9IGZpbHRlcnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX193aWRlLWNvcnJpZG9yJylbMF07XHJcbiAgICBjb25zdCBmaWx0ZXJTbW9rZUNoZWNrQnggPSBmaWx0ZXJTbW9rZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveF9faGlkZGVuJylbMF07XHJcbiAgICBjb25zdCBmaWx0ZXJQZXRzQ2hlY2tCeCA9IGZpbHRlclBldHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3hfX2hpZGRlbicpWzBdO1xyXG4gICAgY29uc3QgZmlsdGVyR3Vlc3RzQ2hlY2tCeCA9IGZpbHRlckd1ZXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveF9faGlkZGVuJylbMF07XHJcbiAgICBjb25zdCBmaWx0ZXJXaWRlQ29ycmlkb3JDaGVja0J4ID0gZmlsdGVyV2lkZUNvcnJpZG9yLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JpY2gtY2hlY2tib3hfX2lucHV0JylbMF07XHJcbiAgICBjb25zdCBkcm9wR3Vlc3RzID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wLWd1ZXN0cycpWzBdO1xyXG4gICAgbGV0IGRyb3BHdWVzdHNIYW5kbGVyID0gZHJvcEd1ZXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9faGFuZGxlcicpWzBdO1xyXG4gICAgY29uc3QgZHJvcEd1ZXN0c1ZhbHVlID0gZHJvcEd1ZXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9fdmFsdWUnKVswXTtcclxuICAgIGNvbnN0IGRyb3BHdWVzdHNQbHVzZXMgPSBkcm9wR3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19wbHVzJyk7XHJcbiAgICBjb25zdCBkcm9wR3Vlc3RzTWludXNlcyA9IGRyb3BHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX21pbnVzJyk7XHJcbiAgICBjb25zdCBkcm9wQ29udmVuaWVuY2VzID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wLWNvbnZlbmllbmNlcycpWzBdO1xyXG4gICAgY29uc3QgZHJvcENvbnZlbmllbmNlc0hhbmRsZXIgPSBkcm9wQ29udmVuaWVuY2VzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19oYW5kbGVyJylbMF07XHJcbiAgICBjb25zdCBkcm9wQ29udmVuaWVuY2VzVmFsdWUgPSBkcm9wQ29udmVuaWVuY2VzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX192YWx1ZScpWzBdO1xyXG4gICAgY29uc3QgZHJvcENvbnZlbmllbmNlc1BsdXNlcyA9IGRyb3BDb252ZW5pZW5jZXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX3BsdXMnKTtcclxuICAgIGNvbnN0IGRyb3BDb252ZW5pZW5jZXNNaW51c2VzID0gZHJvcENvbnZlbmllbmNlcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9fbWludXMnKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxlbmRhcicpWzBdO1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9ICQoY2FsZW5kYXIpLmRhdGVwaWNrZXIoKS5kYXRhKCdkYXRlcGlja2VyJyk7XHJcbiAgICBjb25zdCBkcm9wZG93blZhbHVlcyA9IGZpbHRlcnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1ndWVzdHMnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9faW5wdXQtdmFsdWUnKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyQWx0RmllbGQgPSBmaWx0ZXJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGVuZGFyX19hbHRGaWVsZCcpWzBdO1xyXG4gICAgbGV0IGxvY2FsID0gbG9jYWxEYXRhID8gbG9jYWxEYXRhIDoge1wic3RhcnREYXRlXCI6IFwiXCIsIFwiZW5kRGF0ZVwiOiBcIlwiLCBcImd1ZXN0c0Ftb3VudFwiOiBcIlswLDAsMF1cIn07XHJcbiAgICBjb25zdCBjaGVja0JveGVzID0gZmlsdGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveF9faGlkZGVuJyk7XHJcbiAgICBjb25zdCByaWNoQ2hlY2tCb3hlcyA9IGZpbHRlcnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmljaC1jaGVja2JveF9faW5wdXQnKTtcclxuICAgIGNvbnN0IGNyZWF0ZUxvY2FsRGF0YSA9IGZ1bmN0aW9uKHN0b3JhZ2VOYW1lKSB7ICAgICAgICBcclxuICAgICAgICBsb2NhbC5zdGFydERhdGUgPSBjYWxlbmRhckFsdEZpZWxkLnZhbHVlLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgbG9jYWwuZW5kRGF0ZSA9IGNhbGVuZGFyQWx0RmllbGQudmFsdWUuc3BsaXQoJy0nKVsxXTtcclxuICAgICAgICBsb2NhbC5ndWVzdHNBbW91bnQgPSBkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Vbc3RvcmFnZU5hbWVdID0gSlNPTi5zdHJpbmdpZnkobG9jYWwpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3dQYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBwYWdlTnVtID0gK3BhZ2luYXRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgY29uc3Qgcm9vbXNPblBhZ2UgPSAxMjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAocGFnZU51bSAtIDEpICogcm9vbXNPblBhZ2U7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyByb29tc09uUGFnZTtcclxuICAgICAgICBjb25zdCBub3RlcyA9IHJvb21zLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBub3RlIG9mIG5vdGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsZXQgZGl2SHRtbCA9ICcnO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ3Jvb20nO1xyXG4gICAgICAgICAgICBsZXQgbHV4dXJ5ID0gbm90ZS5sdXh1cnkgPyAn0LvRjtC60YEnIDogJyc7XHJcbiAgICAgICAgICAgIGRpdkh0bWwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXJvdXNlbFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fd2luZG93XCI+JztcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3RlLmltYWdlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZGl2SHRtbCArPSAnPGltZyBjbGFzcz1cImNhcm91c2VsX19pbWdcIiBzcmM9XCInICsgbm90ZS5pbWFnZXNbal0gKyAnXCI+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZIdG1sICs9XHJcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cInJvb20tZGV0YWlscy5odG1sXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9hPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fYnV0dG9uc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fc3dpdGNoZXJcIj4nO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vdGUuaW1hZ2VzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2SHRtbCArPSAnPHNwYW4gY2xhc3M9XCJjYXJvdXNlbF9fY2lyY2xlXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkh0bWwgKz0gJzxzcGFuIGNsYXNzPVwiY2Fyb3VzZWxfX2NpcmNsZSBjYXJvdXNlbF9fY2lyY2xlX2FjdGl2ZVwiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdkh0bWwgKz1cclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2Fycm93LXJpZ2h0LXdyYXBwZXJcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsX19hcnJvdy1yaWdodFwiPmtleWJvYXJkX2Fycm93X2xlZnQ8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNhcm91c2VsX19hcnJvdy1sZWZ0LXdyYXBwZXJcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsX19hcnJvdy1sZWZ0XCI+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicm9vbV9fYWJvdXQtcm9vbVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyb29tX19pbmZvXCI+PHNwYW4gY2xhc3M9XCJyb29tX19iYWRnZS1udW1iZXJcIj7ihJYgPC9zcGFuPjxzcGFuIGNsYXNzPVwicm9vbV9fcm9vbS1udW1iZXJcIj4nICsgbm90ZS5udW1iZXIgKyAnPC9zcGFuPjxzcGFuIGNsYXNzPVwicm9vbV9fcm9vbS1jYXRlZ29yeVwiPiAnICsgbHV4dXJ5ICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicm9vbV9fbW9uZXktZm9yLXJvb21cIj48c3BhbiBjbGFzcz1cInJvb21fX21vbmV5XCI+JyArIHBhcnNlRmxvYXQobm90ZS5wcmljZSkudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJykgKyAnPC9zcGFuPuKCvTxzcGFuIGNsYXNzPVwicm9vbV9fdGltZVwiPiDQsiDRgdGD0YLQutC4PC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyb29tX19yYXRlLXdyYXBwZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmF0ZSByYXRlX3N0YXJfJyArIG5vdGUuc3RhcnMgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJyYXRlX19zdGFyMVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInJhdGVfX3N0YXIyXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwicmF0ZV9fc3RhcjNcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJyYXRlX19zdGFyNFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInJhdGVfX3N0YXI1XCI+PC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyb29tX19jb21tZW50cy1pbmRpY2F0b3JcIj48c3BhbiBjbGFzcz1cInJvb21fX2NvbW1lbnRzLWFtb3VudFwiPicgKyBub3RlLnJldmlld3MgKyAnPC9zcGFuPjxzcGFuPiDQntGC0LfRi9Cy0L7Qsjwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gZGl2SHRtbDtcclxuICAgICAgICAgICAgc2NyZWVuLmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICBkaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfX3dpbmRvdycpWzBdLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQnhzID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCByaWNoQ2hlY2tCeHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5vdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFtrZXldID0gbm90ZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hlY2tCb3hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQnhzLnB1c2goY2hlY2tCb3hlc1tqXS5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmljaENoZWNrQm94ZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByaWNoQ2hlY2tCeHMucHVzaChyaWNoQ2hlY2tCb3hlc1tqXS5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsLmNoZWNrQnhzID0gY2hlY2tCeHM7XHJcbiAgICAgICAgICAgICAgICBsb2NhbC5yaWNoQ2hlY2tCeHMgPSByaWNoQ2hlY2tCeHM7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbERhdGEoJ3RveGluJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDYXJvdXNlbHNIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0UGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChwYWdlc0Ftb3VudCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25QYWdlcyA9IHBhZ2luYXRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZXMnKVswXTtcclxuXHJcbiAgICAgICAgaWYgKHBhZ2VzQW1vdW50ID4gNCkge1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXMuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX2Fycm93LWJhY2sgcGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuXCI+YXJyb3dfYmFjazwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2UgcGFnaW5hdGlvbl9fcGFnZV9hY3RpdmVcIj4xPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnZVwiPjI8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdlXCI+Mzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX2VsbGlwc2lzXCI+Li4uPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnZS1sYXN0XCI+JyArIHBhZ2VzQW1vdW50ICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX2Fycm93LWZvcndhcmRcIj5hcnJvd19mb3J3YXJkPC9zcGFuPic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYWdlc0Ftb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX19hcnJvdy1iYWNrIHBhZ2luYXRpb25fX2Fycm93X2hpZGRlblwiPmFycm93X2JhY2s8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdlIHBhZ2luYXRpb25fX3BhZ2VfYWN0aXZlXCI+MTwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBsZXQgaiA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChqIDwgcGFnZXNBbW91bnQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXMuaW5uZXJIVE1MICs9ICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2VcIj4nICsgKCsraikgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzLmlubmVySFRNTCArPVxyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnZS1sYXN0XCI+JyArIHBhZ2VzQW1vdW50ICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25fX2Fycm93LWZvcndhcmRcIj5hcnJvd19mb3J3YXJkPC9zcGFuPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX19hcnJvdy1iYWNrIHBhZ2luYXRpb25fX2Fycm93X2hpZGRlblwiPmFycm93X2JhY2s8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdlLWxhc3QgcGFnaW5hdGlvbl9fcGFnZV9hY3RpdmVcIj4xPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9fYXJyb3ctZm9yd2FyZCBwYWdpbmF0aW9uX19hcnJvd19oaWRkZW5cIj5hcnJvd19mb3J3YXJkPC9zcGFuPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmdQYWdpbmF0aW9uSGFuZGxlcnMoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRDYXJvdXNlbHNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VscyA9IGZpbHRlcnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWwnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYXJvdXNlbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2Fyb3VzZWxBcnJvd1JpZ2h0V3JhcHBlciA9IGNhcm91c2Vsc1tqXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9fYXJyb3ctcmlnaHQtd3JhcHBlcicpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJvdXNlbEFycm93TGVmdFdyYXBwZXIgPSBjYXJvdXNlbHNbal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfX2Fycm93LWxlZnQtd3JhcHBlcicpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJvdXNlbFdpbmRvdyA9IGNhcm91c2Vsc1tqXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9fd2luZG93JylbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcm91c2VsSW1nID0gY2Fyb3VzZWxzW2pdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19pbWcnKVswXTtcclxuICAgICAgICAgICAgY29uc3QgY2Fyb3VzZWxDaXJjbGVzID0gY2Fyb3VzZWxzW2pdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19jaXJjbGUnKTtcclxuICAgICAgICAgICAgbGV0IGNhcm91c2VsQ2lyY2xlQWN0aXZlID0gY2Fyb3VzZWxzW2pdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlJylbMF07XHJcbiAgICAgICAgICAgIGxldCBjYXJvdXNlbENvZWYgPSAwO1xyXG5cclxuICAgICAgICAgICAgY2Fyb3VzZWxBcnJvd1JpZ2h0V3JhcHBlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcm91c2VsQ29lZiA8IGNhcm91c2Vsc1tqXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9faW1nJykubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsV2luZG93LnN0eWxlLm1hcmdpbkxlZnQgPSAoLTEpICogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGNhcm91c2VsSW1nKS53aWR0aCkgKiAoKytjYXJvdXNlbENvZWYpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsQ2lyY2xlQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDaXJjbGVzW2Nhcm91c2VsQ29lZl0uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX2NpcmNsZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbENpcmNsZUFjdGl2ZSA9IGNhcm91c2Vsc1tqXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9fY2lyY2xlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcm91c2VsQXJyb3dMZWZ0V3JhcHBlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcm91c2VsQ29lZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbFdpbmRvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gKC0xKSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbEltZykud2lkdGgpICogKC0tY2Fyb3VzZWxDb2VmKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbENpcmNsZUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fY2lyY2xlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsQ2lyY2xlc1tjYXJvdXNlbENvZWZdLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDaXJjbGVBY3RpdmUgPSBjYXJvdXNlbHNbal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfX2NpcmNsZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGNhcm91c2VsQ2lyY2xlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxDaXJjbGVzW25dLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDb2VmID0gbjtcclxuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbFdpbmRvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gKC0xKSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbEltZykud2lkdGgpICogY2Fyb3VzZWxDb2VmICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsQ2lyY2xlQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDaXJjbGVzW25dLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19jaXJjbGVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxDaXJjbGVBY3RpdmUgPSBjYXJvdXNlbHNbal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfX2NpcmNsZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRGaWx0ZXJzID0gZnVuY3Rpb24gKHNtb2tlLCBwZXRzLCBndWVzdHMsIHdpZGVDb3JyaWRvciwgYmVkUm9vbXMsIGJlZHMsIGJhdGhSb29tcykge1xyXG4gICAgICAgIHJvb21zID0gZGF0YS5yb29tcy5zbGljZSgpO1xyXG5cclxuICAgICAgICBpZiAoc21va2UpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb29tcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb29tc1tqXS5zbW9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb21zLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBldHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb29tcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb29tc1tqXS5wZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbXMuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3Vlc3RzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm9vbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghcm9vbXNbal0uZ3Vlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbXMuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2lkZUNvcnJpZG9yKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm9vbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghcm9vbXNbal0ud2lkZUNvcnJpZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbXMuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvb21zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb29tc1tqXS5iZWRSb29tcyA8IGJlZFJvb21zKSB7XHJcbiAgICAgICAgICAgICAgICByb29tcy5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICBqID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb29tcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAocm9vbXNbal0uYmVkcyA8IGJlZHMpIHtcclxuICAgICAgICAgICAgICAgIHJvb21zLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvb21zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb29tc1tqXS5iYXRoUm9vbXMgPCBiYXRoUm9vbXMpIHtcclxuICAgICAgICAgICAgICAgIHJvb21zLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlc0Ftb3VudCA9IE1hdGguY2VpbChyb29tcy5sZW5ndGggLyByb29tc09uUGFnZSk7XHJcbiAgICAgICAgc2V0UGFnaW5hdGlvbihwYWdlc0Ftb3VudCk7XHJcbiAgICAgICAgaGFuZ1BhZ2luYXRpb25IYW5kbGVycygpO1xyXG4gICAgICAgIHNob3dQYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvd1ZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGFkdWx0c0Ftb3VudCA9IEpTT04ucGFyc2UoZHJvcEd1ZXN0c0hhbmRsZXIudmFsdWUpWzBdICsgSlNPTi5wYXJzZShkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSlbMV07XHJcbiAgICAgICAgY29uc3QgYmFiaWVzQW1vdW50ID0gSlNPTi5wYXJzZShkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSlbMl07XHJcblxyXG4gICAgICAgIGlmIChhZHVsdHNBbW91bnQgPiAwICYmIGJhYmllc0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZHJvcEd1ZXN0c1ZhbHVlLmlubmVySFRNTCA9IGFkdWx0c0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYWR1bHRzQW1vdW50LCAn0LPQvtGB0YLRjCcsICfQs9C+0YHRgtGPJywgJ9Cz0L7RgdGC0LXQuScpICsgJywgJyArIGJhYmllc0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYmFiaWVzQW1vdW50LCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWR1bHRzQW1vdW50ID4gMCAmJiBiYWJpZXNBbW91bnQgPT0gMCkge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzVmFsdWUuaW5uZXJIVE1MID0gYWR1bHRzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChhZHVsdHNBbW91bnQsICfQs9C+0YHRgtGMJywgJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZHVsdHNBbW91bnQgPT0gMCAmJiBiYWJpZXNBbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSBiYWJpZXNBbW91bnQgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KGJhYmllc0Ftb3VudCwgJ9C80LvQsNC00LXQvdC10YYnLCAn0LzQu9Cw0LTQtdC90YbQsCcsICfQvNC70LDQtNC10L3RhtC10LInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzVmFsdWUuaW5uZXJIVE1MID0gJ9Ch0LrQvtC70YzQutC+INCz0L7RgdGC0LXQuT8nO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UudG94aW4gPSBKU09OLnN0cmluZ2lmeShsb2NhbCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAobG9jYWxEYXRhKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsRGF0YS5zdGFydERhdGUgJiYgIWxvY2FsRGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGVwaWNrZXIuc2VsZWN0RGF0ZShuZXcgRGF0ZShsb2NhbERhdGEuc3RhcnREYXRlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbERhdGEuc3RhcnREYXRlICYmIGxvY2FsRGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGVwaWNrZXIuc2VsZWN0RGF0ZShbbmV3IERhdGUobG9jYWxEYXRhLnN0YXJ0RGF0ZSksIG5ldyBEYXRlKGxvY2FsRGF0YS5lbmREYXRlKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRyb3Bkb3duVmFsdWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVzW2pdLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmd1ZXN0c0Ftb3VudClbal07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hlY2tCb3hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxEYXRhLmNoZWNrQnhzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0JveGVzW2pdLmNoZWNrZWQgPSBsb2NhbERhdGEuY2hlY2tCeHNbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByaWNoQ2hlY2tCb3hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxEYXRhLnJpY2hDaGVja0J4cykge1xyXG4gICAgICAgICAgICAgICAgcmljaENoZWNrQm94ZXNbal0uY2hlY2tlZCA9IGxvY2FsRGF0YS5yaWNoQ2hlY2tCeHNbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZ0NoZWNrYm94ZXNIYW5kbGVyKCk7XHJcbiAgICAgICAgaGFuZ1JpY2hDaGVja2JveGVzSGFuZGxlcigpO1xyXG4gICAgICAgIGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlID0gbG9jYWxEYXRhLmd1ZXN0c0Ftb3VudDtcclxuICAgICAgICBzaG93VmFsdWUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBzZXRGaWx0ZXJzKGZpbHRlclNtb2tlQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJQZXRzQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJHdWVzdHNDaGVja0J4LmNoZWNrZWQsIGZpbHRlcldpZGVDb3JyaWRvckNoZWNrQnguY2hlY2tlZCwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMF0sIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzFdLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsyXSk7XHJcbiAgICBwYWdpbmF0aW9uLm9uY2hhbmdlID0gc2hvd1BhZ2U7XHJcblxyXG4gICAgZmlsdGVyU21va2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0RmlsdGVycyhmaWx0ZXJTbW9rZUNoZWNrQnguY2hlY2tlZCwgZmlsdGVyUGV0c0NoZWNrQnguY2hlY2tlZCwgZmlsdGVyR3Vlc3RzQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJXaWRlQ29ycmlkb3JDaGVja0J4LmNoZWNrZWQsIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzBdLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsxXSwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMl0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyUGV0cy5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRGaWx0ZXJzKGZpbHRlclNtb2tlQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJQZXRzQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJHdWVzdHNDaGVja0J4LmNoZWNrZWQsIGZpbHRlcldpZGVDb3JyaWRvckNoZWNrQnguY2hlY2tlZCwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMF0sIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzFdLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsyXSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJHdWVzdHMub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0RmlsdGVycyhmaWx0ZXJTbW9rZUNoZWNrQnguY2hlY2tlZCwgZmlsdGVyUGV0c0NoZWNrQnguY2hlY2tlZCwgZmlsdGVyR3Vlc3RzQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJXaWRlQ29ycmlkb3JDaGVja0J4LmNoZWNrZWQsIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzBdLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsxXSwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMl0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyV2lkZUNvcnJpZG9yLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldEZpbHRlcnMoZmlsdGVyU21va2VDaGVja0J4LmNoZWNrZWQsIGZpbHRlclBldHNDaGVja0J4LmNoZWNrZWQsIGZpbHRlckd1ZXN0c0NoZWNrQnguY2hlY2tlZCwgZmlsdGVyV2lkZUNvcnJpZG9yQ2hlY2tCeC5jaGVja2VkLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVswXSwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMV0sIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wR3Vlc3RzLm9uY2hhbmdlID0gc2hvd1ZhbHVlO1xyXG5cclxuICAgIGRyb3BDb252ZW5pZW5jZXMub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmVkUm9vbXNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVswXSxcclxuICAgICAgICAgICAgYmVkc0Ftb3VudCA9IEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzFdLFxyXG4gICAgICAgICAgICBiYXRoUm9vbXNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsyXTtcclxuXHJcbiAgICAgICAgbGV0IGJlZFJvb21zVmFsdWUgPSBiZWRSb29tc0Ftb3VudCA+IDAgPyBiZWRSb29tc0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYmVkUm9vbXNBbW91bnQsICfRgdC/0LDQu9GM0L3RjycsICfRgdC/0LDQu9GM0L3QuCcsICfRgdC/0LDQu9C10L0nKSA6ICcnO1xyXG4gICAgICAgIGxldCBiZWRzVmFsdWUgPSBiZWRzQW1vdW50ID4gMCA/IGJlZHNBbW91bnQgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KGJlZHNBbW91bnQsICfQutGA0L7QstCw0YLRjCcsICfQutGA0L7QstCw0YLQuCcsICfQutGA0L7QstCw0YLQtdC5JykgOiAnJztcclxuICAgICAgICBsZXQgYmF0aFJvb21zVmFsdWUgPSBiYXRoUm9vbXNBbW91bnQgPiAwID8gYmF0aFJvb21zQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChiYXRoUm9vbXNBbW91bnQsICfQstCw0L3QvdCw0Y8g0LrQvtC80L3QsNGC0LAnLCAn0LLQsNC90L3Ri9GFINC60L7QvNC90LDRgtGLJywgJ9Cy0LDQvdC90YvRhSDQutC+0LzQvdCw0YInKSA6ICcnO1xyXG5cclxuICAgICAgICBpZiAoYmVkUm9vbXNWYWx1ZSAhPSAnJyAmJiAoYmVkc1ZhbHVlICE9ICcnIHx8IGJhdGhSb29tc1ZhbHVlICE9ICcnKSkge1xyXG4gICAgICAgICAgICBiZWRSb29tc1ZhbHVlICs9ICcsICc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiZWRzVmFsdWUgIT0gJycgJiYgYmF0aFJvb21zVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgYmVkc1ZhbHVlICs9ICcsICc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkcm9wQ29udmVuaWVuY2VzVmFsdWUuaW5uZXJIVE1MID0gKGJlZFJvb21zVmFsdWUgKyBiZWRzVmFsdWUgKyBiYXRoUm9vbXNWYWx1ZSkgIT0gJycgPyBiZWRSb29tc1ZhbHVlICsgYmVkc1ZhbHVlICsgYmF0aFJvb21zVmFsdWUgOiAn0JrQsNC60LjQtSDRg9C00L7QsdGB0YLQstCwPyc7XHJcbiAgICAgICAgc2V0RmlsdGVycyhmaWx0ZXJTbW9rZUNoZWNrQnguY2hlY2tlZCwgZmlsdGVyUGV0c0NoZWNrQnguY2hlY2tlZCwgZmlsdGVyR3Vlc3RzQ2hlY2tCeC5jaGVja2VkLCBmaWx0ZXJXaWRlQ29ycmlkb3JDaGVja0J4LmNoZWNrZWQsIEpTT04ucGFyc2UoZHJvcENvbnZlbmllbmNlc0hhbmRsZXIudmFsdWUpWzBdLCBKU09OLnBhcnNlKGRyb3BDb252ZW5pZW5jZXNIYW5kbGVyLnZhbHVlKVsxXSwgSlNPTi5wYXJzZShkcm9wQ29udmVuaWVuY2VzSGFuZGxlci52YWx1ZSlbMl0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZVtsb2NhbFN0b3JhZ2VLZXldKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbbG9jYWxTdG9yYWdlS2V5XSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybldvcmRTdWZmaXgoYW1vdW50LCBvbmUsIHR3bywgdHdlbHZlKSB7XHJcbiAgICBsZXQgc3RyaW5nID0gdHdlbHZlO1xyXG5cclxuICAgIGlmIChhbW91bnQgPCAxMSB8fCBhbW91bnQgPiAyMCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFtb3VudC50b1N0cmluZygpW2Ftb3VudC50b1N0cmluZygpLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gb25lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyaW5nID0gdHdlbHZlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb20zNTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb20zNTIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb200NDQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb200NTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb202NjYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb202NzguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb203NDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb204NDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb204NTYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb204ODguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb205ODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Jvb205ODIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3N1YjFSb29tODg4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zdWIyUm9vbTg4OC5qcGdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XHJcbmltcG9ydCAnLi9fX2ljb25zL2F3ZXNvbWUtaWNvbnMuY3NzJztcclxuaW1wb3J0ICcuL19faWNvbnMvZm9vdGVyX19pY29ucy5jc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9oZWFkZXIuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vaW5mby1jYXJkX19jYWxjdWxhdGlvbnMuY3NzJztcclxuaW1wb3J0IGxvY2FsRGF0YSBmcm9tICcuLi8uLi8uLi9wYWdlcy9yb29tLWRldGFpbHMvcm9vbS1kZXRhaWxzLmpzJztcclxuXHJcbmNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZCcpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvQ2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGluZm9DYXJkQ2FsY3VsYXRpb25zID0gaW5mb0NhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZF9fY2FsY3VsYXRpb25zJylbMF07XHJcbiAgICBjb25zdCBpbmZvQ2FyZEFtb3VudE9mRGF5cyA9IGluZm9DYXJkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLWNhcmRfX2Ftb3VudC1vZi1kYXlzJylbMF07XHJcbiAgICBjb25zdCBpbmZvQ2FyZE1vbmV5UmVzdWx0ID0gaW5mb0NhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZF9fbW9uZXktcmVzdWx0JylbMF07XHJcbiAgICBjb25zdCBpbmZvQ2FyZFRvdGFsID0gaW5mb0NhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZF9fdG90YWwnKVswXTtcclxuICAgIGNvbnN0IGluZm9DYXJkTW9uZXkgPSBpbmZvQ2FyZENhbGN1bGF0aW9ucy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLWNhcmRfX21vbmV5JylbMF07XHJcbiAgICBjb25zdCBpbmZvQ2FyZERpc2NvdW50UmVzdWx0ID0gaW5mb0NhcmRDYWxjdWxhdGlvbnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5mby1jYXJkX19kaXNjb3VudC1yZXN1bHQnKTtcclxuICAgIGNvbnN0IGluZm9DYXJkRGlzY291bnQgPSBpbmZvQ2FyZENhbGN1bGF0aW9ucy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLWNhcmRfX2Rpc2NvdW50JylbMF07XHJcbiAgICBjb25zdCBkYXRlRHJvcHMgPSBpbmZvQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1kYXRlcycpWzBdO1xyXG4gICAgY29uc3QgY2FsZW5kYXJBbHRGaWVsZCA9IGluZm9DYXJkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxlbmRhcl9fYWx0RmllbGQnKVswXTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNlID0gZnVuY3Rpb24oc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICAgICAgZGF5cyA9IChzdGFydERhdGUgJiYgZW5kRGF0ZSkgPyBNYXRoLmNlaWwoKG5ldyBEYXRlKGVuZERhdGUpIC0gbmV3IERhdGUoc3RhcnREYXRlKSkpIC8gODY0MDAwMDAgOiAxO1xyXG4gICAgICAgIHByaWNlT25EYXlzID0gbG9jYWxEYXRhLnByaWNlICogZGF5cztcclxuICAgICAgICBpbmZvQ2FyZEFtb3VudE9mRGF5cy5pbm5lckhUTUwgPSBkYXlzO1xyXG4gICAgICAgIGluZm9DYXJkTW9uZXlSZXN1bHQuaW5uZXJIVE1MID0gKHByaWNlT25EYXlzKS50b0xvY2FsZVN0cmluZygncnUtUlUnKTtcclxuICAgICAgICBpbmZvQ2FyZFRvdGFsLmlubmVySFRNTCA9IChsb2NhbERhdGEucHJpY2UgKiBkYXlzIC0gaW5mb0NhcmREaXNjb3VudC5pbm5lckhUTUwgKyAoK2luZm9DYXJkRGlzY291bnRSZXN1bHRbMF0uaW5uZXJIVE1MKSArICgraW5mb0NhcmREaXNjb3VudFJlc3VsdFsxXS5pbm5lckhUTUwpKS50b0xvY2FsZVN0cmluZygncnUtUlUnKTtcclxuICAgIH07XHJcbiAgICBsZXQgZGF5cyA9IDA7XHJcbiAgICBsZXQgcHJpY2VPbkRheXMgPSAwO1xyXG5cclxuICAgIGRhdGVEcm9wcy5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjdWxhdGVQcmljZShjYWxlbmRhckFsdEZpZWxkLnZhbHVlLnNwbGl0KCctJylbMF0sIGNhbGVuZGFyQWx0RmllbGQudmFsdWUuc3BsaXQoJy0nKVsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsRGF0YSkge1xyXG4gICAgICAgIGNhbGN1bGF0ZVByaWNlKGxvY2FsRGF0YS5zdGFydERhdGUsIGxvY2FsRGF0YS5lbmREYXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2VbbG9jYWxTdG9yYWdlS2V5XSkge1xyXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2xvY2FsU3RvcmFnZUtleV0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2luZm8tY2FyZC5jc3MnO1xyXG5pbXBvcnQgbG9jYWxEYXRhIGZyb20gJy4uLy4uL3BhZ2VzL3Jvb20tZGV0YWlscy9yb29tLWRldGFpbHMuanMnO1xyXG5cclxuY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5mby1jYXJkJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGluZm9DYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBpbmZvQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsZW5kYXInKVswXTtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSAkKGNhbGVuZGFyKS5kYXRlcGlja2VyKCkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG4gICAgY29uc3QgZHJvcGRvd25WYWx1ZXMgPSBpbmZvQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1ndWVzdHMnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9faW5wdXQtdmFsdWUnKTtcclxuICAgIGNvbnN0IGRyb3BHdWVzdHMgPSBpbmZvQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1ndWVzdHMnKVswXTtcclxuICAgIGxldCBkcm9wR3Vlc3RzSGFuZGxlciA9IGRyb3BHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX2hhbmRsZXInKVswXTtcclxuICAgIGNvbnN0IGRyb3BHdWVzdHNWYWx1ZSA9IGRyb3BHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX3ZhbHVlJylbMF07XHJcbiAgICBjb25zdCBkcm9wR3Vlc3RzUGx1c2VzID0gZHJvcEd1ZXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9fcGx1cycpO1xyXG4gICAgY29uc3QgZHJvcEd1ZXN0c01pbnVzZXMgPSBkcm9wR3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19taW51cycpO1xyXG4gICAgY29uc3QgaW5mb0NhcmRSb29tTnVtYmVyID0gaW5mb0NhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZF9fcm9vbS1udW1iZXInKVswXTtcclxuICAgIGNvbnN0IGluZm9DYXJkUm9vbUNhdGVnb3J5ID0gaW5mb0NhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tY2FyZF9fcm9vbS1jYXRlZ29yeScpWzBdO1xyXG4gICAgY29uc3QgaW5mb0NhcmRNb25leSA9IGluZm9DYXJkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLWNhcmRfX21vbmV5Jyk7XHJcbiAgICBjb25zdCBzaG93VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYWR1bHRzQW1vdW50ID0gSlNPTi5wYXJzZShkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSlbMF0gKyBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVsxXTtcclxuICAgICAgICBjb25zdCBiYWJpZXNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVsyXTtcclxuXHJcbiAgICAgICAgaWYgKGFkdWx0c0Ftb3VudCA+IDAgJiYgYmFiaWVzQW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzVmFsdWUuaW5uZXJIVE1MID0gYWR1bHRzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChhZHVsdHNBbW91bnQsICfQs9C+0YHRgtGMJywgJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5JykgKyAnLCAnICsgYmFiaWVzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChiYWJpZXNBbW91bnQsICfQvNC70LDQtNC10L3QtdGGJywgJ9C80LvQsNC00LXQvdGG0LAnLCAn0LzQu9Cw0LTQtdC90YbQtdCyJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZHVsdHNBbW91bnQgPiAwICYmIGJhYmllc0Ftb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSBhZHVsdHNBbW91bnQgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KGFkdWx0c0Ftb3VudCwgJ9Cz0L7RgdGC0YwnLCAn0LPQvtGB0YLRjycsICfQs9C+0YHRgtC10LknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFkdWx0c0Ftb3VudCA9PSAwICYmIGJhYmllc0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZHJvcEd1ZXN0c1ZhbHVlLmlubmVySFRNTCA9IGJhYmllc0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYmFiaWVzQW1vdW50LCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5Pyc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAobG9jYWxEYXRhKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsRGF0YS5zdGFydERhdGUgJiYgIWxvY2FsRGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGVwaWNrZXIuc2VsZWN0RGF0ZShuZXcgRGF0ZShsb2NhbERhdGEuc3RhcnREYXRlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbERhdGEuc3RhcnREYXRlICYmIGxvY2FsRGF0YS5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGVwaWNrZXIuc2VsZWN0RGF0ZShbbmV3IERhdGUobG9jYWxEYXRhLnN0YXJ0RGF0ZSksIG5ldyBEYXRlKGxvY2FsRGF0YS5lbmREYXRlKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3Bkb3duVmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVzW2ldLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmd1ZXN0c0Ftb3VudClbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm9DYXJkUm9vbU51bWJlci5pbm5lckhUTUwgPSBsb2NhbERhdGEubnVtYmVyO1xyXG4gICAgICAgIGluZm9DYXJkUm9vbUNhdGVnb3J5LmlubmVySFRNTCA9IGxvY2FsRGF0YS5sdXh1cnkgPyAn0LvRjtC60YEnIDogJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvQ2FyZE1vbmV5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGluZm9DYXJkTW9uZXlbaV0uaW5uZXJIVE1MID0gcGFyc2VGbG9hdChsb2NhbERhdGEucHJpY2UpLnRvTG9jYWxlU3RyaW5nKCdydS1SVScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSA9IGxvY2FsRGF0YS5ndWVzdHNBbW91bnQ7XHJcbiAgICAgICAgc2hvd1ZhbHVlKCk7XHJcbiAgICB9XHJcbiAgICBkcm9wR3Vlc3RzLm9uY2hhbmdlID0gc2hvd1ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZVtsb2NhbFN0b3JhZ2VLZXldKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbbG9jYWxTdG9yYWdlS2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5Xb3JkU3VmZml4KGFtb3VudCwgb25lLCB0d28sIHR3ZWx2ZSkge1xyXG4gICAgbGV0IHN0cmluZyA9IHR3ZWx2ZTtcclxuXHJcbiAgICBpZiAoYW1vdW50IDwgMTEgfHwgYW1vdW50ID4gMjApIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhbW91bnQudG9TdHJpbmcoKVthbW91bnQudG9TdHJpbmcoKS5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHN0cmluZyA9IG9uZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHR3bztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHR3bztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHR3bztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cmluZyA9IHR3ZWx2ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2lucHQuY3NzJzsiLCJpbXBvcnQgJy4vbGF5b3V0LnNjc3MnIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vbGkuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2xpa2UuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRMaWtlc0hhbmRsZXIoKSB7XHJcbiAgICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpa2UnKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaWtlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpa2VzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWtlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpa2VfbGlrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbGlrZXNbaV0uY2xhc3NMaXN0LmFkZCgnbGlrZV9saWtlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGlrZXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlrZV9fbnVtYmVyJylbMF0uaW5uZXJIVE1MID0gK2xpa2VzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpa2VfX251bWJlcicpWzBdLmlubmVySFRNTCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaWtlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlX2xpa2VkJyk7XHJcbiAgICAgICAgICAgICAgICBsaWtlc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWtlX19udW1iZXInKVswXS5pbm5lckhUTUwgPSBsaWtlc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWtlX19udW1iZXInKVswXS5pbm5lckhUTUwgPiAwID8gK2xpa2VzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpa2VfX251bWJlcicpWzBdLmlubmVySFRNTCAtIDEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRMaWtlc0hhbmRsZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2xvZ28uY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vbWFza2VkLWlucHQuY3NzJztcclxuaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XHJcblxyXG5cclxuY29uc3QgbWFza2VkRGF0ZSA9IG5ldyBJbnB1dG1hc2soXCI5OS45OS45OTk5XCIpO1xyXG5tYXNrZWREYXRlLm1hc2soJy5tYXNrZWQtaW5wdCcpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vbWVudS5jc3MnO1xyXG5pbXBvcnQgJy4vX29wZW4vbWVudV9vcGVuLmNzcyc7XHJcblxyXG5jb25zdCBtZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUnKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBtZW51c1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51X19idXR0b24nKVswXTtcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gbWVudXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudV9fbGlzdCcpWzBdO1xyXG4gICAgbGV0IHR1cm5lciA9IDA7XHJcbiAgICBcclxuICAgIG1lbnVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0dXJuZXIgPT0gMCkge1xyXG4gICAgICAgICAgICBtZW51c1tpXS5jbGFzc0xpc3QuYWRkKCdtZW51X29wZW4nKTtcclxuICAgICAgICAgICAgdHVybmVyID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X29wZW4nKTtcclxuICAgICAgICAgICAgdHVybmVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vcGFnaW5hdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4vX2FjdGl2ZS9wYWdpbmF0aW9uX19wYWdlX2FjdGl2ZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gaGFuZ1BhZ2luYXRpb25IYW5kbGVycygpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgY29uc3QgcGFnaW5hdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uJyk7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnaW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcGFnaW5hdGlvblBhZ2VzID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZScpO1xyXG4gICAgICAgIGxldCBsYXN0UGFnZSA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX3BhZ2UtbGFzdCcpWzBdO1xyXG4gICAgICAgIGxldCBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICBsZXQgcGFnaW5hdGlvbkFycm93Rm9yd2FyZCA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX2Fycm93LWZvcndhcmQnKVswXTtcclxuICAgICAgICBsZXQgcGFnaW5hdGlvbkFycm93QmFjayA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX2Fycm93LWJhY2snKVswXTtcclxuICAgICAgICBsZXQgcGFnaW5hdGlvbkVsbGlwc2lzID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fZWxsaXBzaXMnKVswXTtcclxuXHJcbiAgICAgICAgbGFzdFBhZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgPiA0KSB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBsYXN0UGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJylbMF07XHJcbiAgICAgICAgICAgICAgICBsYXN0UGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGFzdFBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgLSAyO1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93Rm9yd2FyZC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnLi4uJztcclxuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ3BhZ2luYXRpb25fX2VsbGlwc2lzJztcclxuICAgICAgICAgICAgICAgIGxhc3RQYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5iZWZvcmUoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19lbGxpcHNpcycpWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbnNbaV0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGxhc3RQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbnNbaV0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFnaW5hdGlvblBhZ2VzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25QYWdlc1tqXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW4gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhZ2luYXRpb25QYWdlc1tqXS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbal0uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzW2pdLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAnMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbal0ubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAnMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dGb3J3YXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93QmFjay5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAncGFnaW5hdGlvbl9fZWxsaXBzaXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzW2pdLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuYWZ0ZXIoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19lbGxpcHNpcycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMF0uaW5uZXJIVE1MID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzWzFdLmlubmVySFRNTCA9ICcyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QYWdlc1syXS5pbm5lckhUTUwgPSAnMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMV0uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMF0uaW5uZXJIVE1MID0gJzInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzWzFdLmlubmVySFRNTCA9ICczJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QYWdlc1syXS5pbm5lckhUTUwgPSAnNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMV0uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93Rm9yd2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSA9PSAnNScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzWzBdLmlubmVySFRNTCA9ICcxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMV0uaW5uZXJIVE1MID0gJzMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QYWdlc1syXS5pbm5lckhUTUwgPSAnNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ3BhZ2luYXRpb25fX2VsbGlwc2lzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMF0uYWZ0ZXIoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkVsbGlwc2lzID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fZWxsaXBzaXMnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSAtIDIpLnRvU3RyaW5nKCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dGb3J3YXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93QmFjay5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QYWdlc1swXS5pbm5lckhUTUwgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMV0uaW5uZXJIVE1MID0gcGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMl0uaW5uZXJIVE1MID0gcGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMV0uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJy4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uX19lbGxpcHNpcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUGFnZXNbMF0uYWZ0ZXIoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19lbGxpcHNpcycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIChwYXJzZUludChsYXN0UGFnZS5pbm5lckhUTUwpIC0gMSkudG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzW2pdLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaW5uZXJIVE1MID0gcGFnaW5hdGlvblBhZ2VzW2pdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHBhcnNlSW50KGFjdGl2ZVBhZ2UuaW5uZXJIVE1MKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcGFyc2VJbnQoYWN0aXZlUGFnZS5pbm5lckhUTUwpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblBhZ2VzW2pdLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2luYXRpb25QYWdlc1tqXS5pbm5lckhUTUwgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbnNbaV0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2sub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgPiA0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGl2ZVBhZ2UuaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0UGFnZS5pbm5lckhUTUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dGb3J3YXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIChwYXJzZUludChsYXN0UGFnZS5pbm5lckhUTUwpIC0gMSkudG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIChwYXJzZUludChsYXN0UGFnZS5pbm5lckhUTUwpIC0gMikudG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkVsbGlwc2lzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmlubmVySFRNTCA9IHBhcnNlSW50KGFjdGl2ZVBhZ2UuaW5uZXJIVE1MKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHBhcnNlSW50KGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uX19lbGxpcHNpcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJy4uLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmFmdGVyKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19lbGxpcHNpcycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYWN0aXZlUGFnZS5pbm5lckhUTUwgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dCYWNrLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5pbm5lckhUTUwgPSBwYXJzZUludChhY3RpdmVQYWdlLmlubmVySFRNTCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBwYXJzZUludChhY3RpdmVQYWdlLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHBhcnNlSW50KGFjdGl2ZVBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGl2ZVBhZ2UuaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0JhY2suY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFBhZ2UuaW5uZXJIVE1MOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dGb3J3YXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25zW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFnaW5hdGlvbkFycm93Rm9yd2FyZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSA+IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aXZlUGFnZS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93QmFjay5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgLSAzKS50b1N0cmluZygpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaW5uZXJIVE1MID0gcGFyc2VJbnQoYWN0aXZlUGFnZS5pbm5lckhUTUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcGFyc2VJbnQoYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uX19lbGxpcHNpcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuYmVmb3JlKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRWxsaXBzaXMgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19lbGxpcHNpcycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSAtIDIpLnRvU3RyaW5nKCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHBhZ2luYXRpb25zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIChwYXJzZUludChsYXN0UGFnZS5pbm5lckhUTUwpIC0gMSkudG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkFycm93Rm9yd2FyZC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19hcnJvd19oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaW5uZXJIVE1MID0gcGFyc2VJbnQoYWN0aXZlUGFnZS5pbm5lckhUTUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcGFyc2VJbnQoYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBwYXJzZUludChhY3RpdmVQYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3RpdmVQYWdlLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobGFzdFBhZ2UuaW5uZXJIVE1MKSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25BcnJvd0ZvcndhcmQuY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9fYXJyb3dfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKHBhcnNlSW50KGxhc3RQYWdlLmlubmVySFRNTCkgLSAxKS50b1N0cmluZygpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQXJyb3dGb3J3YXJkLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX2Fycm93X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb25fX3BhZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdpbmF0aW9uc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uX19wYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0gcGFnaW5hdGlvbnNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnaW5hdGlvbl9fcGFnZV9hY3RpdmUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uc1tpXS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5oYW5nUGFnaW5hdGlvbkhhbmRsZXJzKCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5nUGFnaW5hdGlvbkhhbmRsZXJzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9yYWRpby5jc3MnO1xyXG5pbXBvcnQgJy4vX2NoZWNrZWQvcmFkaW9fY2hlY2tlZC5jc3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyYWRpbycpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgcmFkaW9zW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyYWRpb19faW5wdXQnKVswXS5jbGljaygpO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocmFkaW9zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JhZGlvX19pbnB1dCcpWzBdLm5hbWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYWRpb0Fyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAocmFkaW9BcnJbal0uY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmFkaW9BcnJbal0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmFkaW9fY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJhZGlvc1tpXS5jbGFzc0xpc3QuYWRkKCdyYWRpb19jaGVja2VkJyk7XHJcbiAgICAgICAgcmFkaW9zW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JhZGlvX19pbnB1dCcpWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL3JhdGUuY3NzJztcclxuaW1wb3J0ICcuL19zdGFyXzEvcmF0ZV9zdGFyXzEuY3NzJztcclxuaW1wb3J0ICcuL19zdGFyXzIvcmF0ZV9zdGFyXzIuY3NzJztcclxuaW1wb3J0ICcuL19zdGFyXzMvcmF0ZV9zdGFyXzMuY3NzJztcclxuaW1wb3J0ICcuL19zdGFyXzQvcmF0ZV9zdGFyXzQuY3NzJztcclxuaW1wb3J0ICcuL19zdGFyXzUvcmF0ZV9zdGFyXzUuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vcmVnaXN0cmF0aW9uLWNhcmQuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vcmljaC1jaGVja2JveC5jc3MnO1xyXG5cclxuY29uc3QgcmljaENoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyaWNoLWNoZWNrYm94Jyk7XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZ1JpY2hDaGVja2JveGVzSGFuZGxlcigpIHtcclxuICAgIGNvbnN0IHJpY2hDaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmljaC1jaGVja2JveCcpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpY2hDaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHJpY2hDaGVja2JveGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JpY2gtY2hlY2tib3hfX2lucHV0JylbMF0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICByaWNoQ2hlY2tib3hlc1tpXS5jbGFzc0xpc3QuYWRkKCdyaWNoLWNoZWNrYm94X2NoZWNrZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaWNoQ2hlY2tib3hlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyaWNoLWNoZWNrYm94X2NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmljaENoZWNrYm94ZXNbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJpY2hDaGVja2JveGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JpY2gtY2hlY2tib3hfX2lucHV0JylbMF0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmljaENoZWNrYm94ZXNbaV0uY2xhc3NMaXN0LmFkZCgncmljaC1jaGVja2JveF9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByaWNoQ2hlY2tib3hlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyaWNoLWNoZWNrYm94X2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByaWNoQ2hlY2tib3hlc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyaWNoLWNoZWNrYm94X19pbnB1dCcpWzBdLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgcmljaENoZWNrYm94ZXNbaV0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmhhbmdSaWNoQ2hlY2tib3hlc0hhbmRsZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmdSaWNoQ2hlY2tib3hlc0hhbmRsZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL3Jvb20uY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3NlYXJjaC1yb29tLWNhcmQuY3NzXCI7XHJcblxyXG5jb25zdCBzZWFyY2hSb29tQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFJvb21DYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3RveGluJyk7XHJcbiAgICBjb25zdCBkcm9wR3Vlc3RzID0gc2VhcmNoUm9vbUNhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3AtZ3Vlc3RzJylbMF07XHJcbiAgICBjb25zdCBkcm9wR3Vlc3RzSGFuZGxlciA9IGRyb3BHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX2hhbmRsZXInKVswXSxcclxuICAgICAgICBkcm9wR3Vlc3RzVmFsdWUgPSBkcm9wR3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX192YWx1ZScpWzBdLFxyXG4gICAgICAgIGRyb3BHdWVzdHNQbHVzZXMgPSBkcm9wR3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19wbHVzJyksXHJcbiAgICAgICAgZHJvcEd1ZXN0c01pbnVzZXMgPSBkcm9wR3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19taW51cycpLFxyXG4gICAgICAgIGRyb3BHdWVzdHNJbnB1dFZhbHVlcyA9IGRyb3BHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd25fX2lucHV0LXZhbHVlJyk7XHJcbiAgICBjb25zdCBzZWFyY2hSb29tQ2FyZExpbmsgPSBzZWFyY2hSb29tQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXJyb3ctYnRuJylbMF07XHJcbiAgICBjb25zdCBjYWxlbmRhckFsdEZpZWxkID0gc2VhcmNoUm9vbUNhcmRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGVuZGFyX19hbHRGaWVsZCcpWzBdO1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBzZWFyY2hSb29tQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsZW5kYXInKVswXTtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSAkKGNhbGVuZGFyKS5kYXRlcGlja2VyKCkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG4gICAgY29uc3QgZHJvcGRvd25WYWx1ZXMgPSBzZWFyY2hSb29tQ2FyZHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcC1ndWVzdHMnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9faW5wdXQtdmFsdWUnKTtcclxuICAgIGxldCBsb2NhbCA9IGxvY2FsRGF0YSA/IGxvY2FsRGF0YSA6IHtcclxuICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZW5kRGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZ3Vlc3RzQW1vdW50XCI6IFwiWzAsMCwwXVwiXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlTG9jYWxEYXRhID0gZnVuY3Rpb24gKHN0b3JhZ2VOYW1lKSB7XHJcbiAgICAgICAgbG9jYWwuc3RhcnREYXRlID0gY2FsZW5kYXJBbHRGaWVsZC52YWx1ZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIGxvY2FsLmVuZERhdGUgPSBjYWxlbmRhckFsdEZpZWxkLnZhbHVlLnNwbGl0KCctJylbMV07XHJcbiAgICAgICAgbG9jYWwuZ3Vlc3RzQW1vdW50ID0gZHJvcEd1ZXN0c0hhbmRsZXIudmFsdWU7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlW3N0b3JhZ2VOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGxvY2FsKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG93VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYWR1bHRzQW1vdW50ID0gSlNPTi5wYXJzZShkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSlbMF0gKyBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVsxXTtcclxuICAgICAgICBjb25zdCBiYWJpZXNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVsyXTtcclxuXHJcbiAgICAgICAgaWYgKGFkdWx0c0Ftb3VudCA+IDAgJiYgYmFiaWVzQW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzVmFsdWUuaW5uZXJIVE1MID0gYWR1bHRzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChhZHVsdHNBbW91bnQsICfQs9C+0YHRgtGMJywgJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5JykgKyAnLCAnICsgYmFiaWVzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChiYWJpZXNBbW91bnQsICfQvNC70LDQtNC10L3QtdGGJywgJ9C80LvQsNC00LXQvdGG0LAnLCAn0LzQu9Cw0LTQtdC90YbQtdCyJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZHVsdHNBbW91bnQgPiAwICYmIGJhYmllc0Ftb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSBhZHVsdHNBbW91bnQgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KGFkdWx0c0Ftb3VudCwgJ9Cz0L7RgdGC0YwnLCAn0LPQvtGB0YLRjycsICfQs9C+0YHRgtC10LknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFkdWx0c0Ftb3VudCA9PSAwICYmIGJhYmllc0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZHJvcEd1ZXN0c1ZhbHVlLmlubmVySFRNTCA9IGJhYmllc0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYmFiaWVzQW1vdW50LCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlICE9ICdbMCwwLDBdJykge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19yZWZyZXNoX2FjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHMuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3JlZnJlc2hfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZHJvcEd1ZXN0c01pbnVzZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGRyb3BHdWVzdHNJbnB1dFZhbHVlc1tqXS5pbm5lckhUTUwgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wR3Vlc3RzTWludXNlc1tqXS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fbWludXNfaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRyb3BHdWVzdHNNaW51c2VzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19taW51c19pbmFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS50b3hpbiA9IEpTT04uc3RyaW5naWZ5KGxvY2FsKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2FsRGF0YSkge1xyXG4gICAgICAgIGlmIChsb2NhbERhdGEuc3RhcnREYXRlICYmICFsb2NhbERhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlcGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUobG9jYWxEYXRhLnN0YXJ0RGF0ZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxEYXRhLnN0YXJ0RGF0ZSAmJiBsb2NhbERhdGEuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlcGlja2VyLnNlbGVjdERhdGUoW25ldyBEYXRlKGxvY2FsRGF0YS5zdGFydERhdGUpLCBuZXcgRGF0ZShsb2NhbERhdGEuZW5kRGF0ZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcm9wZG93blZhbHVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBkcm9wZG93blZhbHVlc1tqXS5pbm5lckhUTUwgPSBKU09OLnBhcnNlKGxvY2FsRGF0YS5ndWVzdHNBbW91bnQpW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcm9wR3Vlc3RzSGFuZGxlci52YWx1ZSA9IGxvY2FsRGF0YS5ndWVzdHNBbW91bnQ7XHJcbiAgICAgICAgc2hvd1ZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcEd1ZXN0cy5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBhZHVsdHNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVswXSArIEpTT04ucGFyc2UoZHJvcEd1ZXN0c0hhbmRsZXIudmFsdWUpWzFdLFxyXG4gICAgICAgICAgICBiYWJpZXNBbW91bnQgPSBKU09OLnBhcnNlKGRyb3BHdWVzdHNIYW5kbGVyLnZhbHVlKVsyXTtcclxuXHJcbiAgICAgICAgaWYgKGFkdWx0c0Ftb3VudCA+IDAgJiYgYmFiaWVzQW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBkcm9wR3Vlc3RzVmFsdWUuaW5uZXJIVE1MID0gYWR1bHRzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChhZHVsdHNBbW91bnQsICfQs9C+0YHRgtGMJywgJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5JykgKyAnLCAnICsgYmFiaWVzQW1vdW50ICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeChiYWJpZXNBbW91bnQsICfQvNC70LDQtNC10L3QtdGGJywgJ9C80LvQsNC00LXQvdGG0LAnLCAn0LzQu9Cw0LTQtdC90YbQtdCyJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZHVsdHNBbW91bnQgPiAwICYmIGJhYmllc0Ftb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSBhZHVsdHNBbW91bnQgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KGFkdWx0c0Ftb3VudCwgJ9Cz0L7RgdGC0YwnLCAn0LPQvtGB0YLRjycsICfQs9C+0YHRgtC10LknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFkdWx0c0Ftb3VudCA9PSAwICYmIGJhYmllc0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZHJvcEd1ZXN0c1ZhbHVlLmlubmVySFRNTCA9IGJhYmllc0Ftb3VudCArICcgJyArIHJldHVybldvcmRTdWZmaXgoYmFiaWVzQW1vdW50LCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRyb3BHdWVzdHNWYWx1ZS5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoUm9vbUNhcmRMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3JlYXRlTG9jYWxEYXRhKCd0b3hpbicpO1xyXG4gICAgICAgIHNlYXJjaFJvb21DYXJkTGluay5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybldvcmRTdWZmaXgoYW1vdW50LCBvbmUsIHR3bywgdHdlbHZlKSB7XHJcbiAgICBsZXQgc3RyaW5nID0gdHdlbHZlO1xyXG5cclxuICAgIGlmIChhbW91bnQgPCAxMSB8fCBhbW91bnQgPiAyMCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFtb3VudC50b1N0cmluZygpW2Ftb3VudC50b1N0cmluZygpLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gb25lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyaW5nID0gdHdlbHZlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlW2xvY2FsU3RvcmFnZUtleV0pIHtcclxuICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtsb2NhbFN0b3JhZ2VLZXldKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vdGV4dC13aXRoLXBpY3R1cmUuY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vdG9nZ2xlLmNzcyc7XHJcbmltcG9ydCAnLi9fb24vdG9nZ2xlX29uLmNzcyc7XHJcblxyXG4kKCcudG9nZ2xlX19idG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlX29uJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndG9nZ2xlX29uJykpIHtcclxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29uLnN3aXRjaCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29mZi5zd2l0Y2gnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcudG9nZ2xlX19idG4nKS5vbignb24uc3dpdGNoJywgZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlX19jaGVja2JveCcpWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG59KTtcclxuJCgnLnRvZ2dsZV9fYnRuJykub24oJ29mZi5zd2l0Y2gnLCBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGVfX2NoZWNrYm94JylbMF0uY2hlY2tlZCA9IGZhbHNlO1xyXG59KTsiLCJpbXBvcnQgJy4vZm9udHMvZm9udHMuY3NzJztcclxuaW1wb3J0ICcuL3RoZW1lL2dsb2JhbC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gcmVxdWlyZUFsbChyZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVDb250ZXh0LmtleXMoKS5tYXAocmVxdWlyZUNvbnRleHQpO1xyXG59XHJcblxyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi9jb21wb25lbnRzJywgdHJ1ZSwgL15cXC5cXC8oPyEuKig/Ol9fdGVzdHNfXykpLipcXC4oanN4PykkLykpOyAgLy8gcGF0dGVybiB0byB0YWtlIGVhY2ggLmpzKHgpIGZpbGVzIGV4Y2VwdCBvZiB0aGUgb25lcyB3aXRoIF9fdGVzdHNfXyBkaXJlY3RvcnkgaHR0cHM6Ly9yZWdleDEwMS5jb20vci9KOE5XVGovMVxyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi9wYWdlcycsIHRydWUsIC9eXFwuXFwvKD8hLiooPzpfX3Rlc3RzX18pKS4qXFwuKGpzeD8pJC8pKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2luZGV4L2luZGV4LmpzXCI6IFwiLi9zcmMvcGFnZXMvaW5kZXgvaW5kZXguanNcIixcblx0XCIuL3Jvb20tZGV0YWlscy9yb29tLWRldGFpbHMuanNcIjogXCIuL3NyYy9wYWdlcy9yb29tLWRldGFpbHMvcm9vbS1kZXRhaWxzLmpzXCIsXG5cdFwiLi9zZWFyY2gtcm9vbS9zZWFyY2gtcm9vbS5qc1wiOiBcIi4vc3JjL3BhZ2VzL3NlYXJjaC1yb29tL3NlYXJjaC1yb29tLmpzXCIsXG5cdFwiLi9zaWduaW4vc2lnbmluLmpzXCI6IFwiLi9zcmMvcGFnZXMvc2lnbmluL3NpZ25pbi5qc1wiLFxuXHRcIi4vc2lnbnVwL3NpZ251cC5qc1wiOiBcIi4vc3JjL3BhZ2VzL3NpZ251cC9zaWdudXAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvcGFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8oPyEuKig/Ol9fdGVzdHNfXykpLipcXFxcLihqc3g/KSRcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vcm9vbS1kZXRhaWxzLmNzcyc7XHJcbmltcG9ydCBzZXRMaWtlc0hhbmRsZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saWtlL2xpa2UuanMnO1xyXG5cclxuY29uc3Qgcm9vbURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyb29tLWRldGFpbHMnKVswXTtcclxubGV0IGxvY2FsRGF0YSA9ICcnO1xyXG5pZiAocm9vbURldGFpbHMpIHtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS50b3hpbik7XHJcblxyXG4gICAgbG9jYWxEYXRhID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3RveGluJyk7XHJcbiAgICBsZXQgbG9jYWwgPSBsb2NhbERhdGEgPyBsb2NhbERhdGEgOiB7XHJcbiAgICAgICAgXCJzdGFydERhdGVcIjogXCJcIixcclxuICAgICAgICBcImVuZERhdGVcIjogXCJcIixcclxuICAgICAgICBcImd1ZXN0c0Ftb3VudFwiOiBcIlswLDAsMF1cIlxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJvb21JbmZvID0gcm9vbURldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncm9vbS1kZXRhaWxzX19pbmZvJylbMF07XHJcbiAgICBjb25zdCByb29tQ29tbWVudHMgPSByb29tRGV0YWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyb29tLWRldGFpbHNfX2NvbW1lbnRzJylbMF07XHJcbiAgICBjb25zdCB0ZXh0c1dpdGhQaWN0dXJlID0gcm9vbURldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dC13aXRoLXBpY3R1cmUnKTtcclxuICAgIGNvbnN0IGRpYWdyYW0gPSByb29tRGV0YWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFncmFtJylbMF07XHJcbiAgICBjb25zdCBkaWFncmFtTnVtYmVyID0gcm9vbURldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhZ3JhbV9fbnVtYmVyJylbMF07XHJcbiAgICBjb25zdCBkaWFncmFtTGFiZWwgPSByb29tRGV0YWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFncmFtX19sYWJlbCcpWzBdO1xyXG4gICAgY29uc3QgZGlhZ3JhbVNhdGlzZmFjdG9yaWx5ID0gcm9vbURldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhZ3JhbV9fc2F0aXNmYWN0b3JpbHknKVswXTtcclxuICAgIGNvbnN0IGRpYWdyYW1Hb29kID0gcm9vbURldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhZ3JhbV9fZ29vZCcpWzBdO1xyXG4gICAgY29uc3QgZGlhZ3JhbUJlc3QgPSByb29tRGV0YWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFncmFtX19iZXN0JylbMF07XHJcbiAgICBjb25zdCBkaWFncmFtQ2lyY2xlcyA9IHJvb21EZXRhaWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RpYWdyYW1fX2NpcmNsZXMnKVswXTtcclxuICAgIGNvbnN0IHJvb21EZXRhaWxzQ29tbWVudHNBbW91bnQgPSByb29tRGV0YWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyb29tLWRldGFpbHNfX2NvbW1lbnRzLWFtb3VudCcpWzBdO1xyXG4gICAgY29uc3QgY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uIChuYW1lLCBzdXJuYW1lLCBkYXRlLCBjb21tZW50LCBsaWtlcywgYXZhdGFyKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbGV0IGNvbW1lbnRUaW1lID0gJyc7XHJcbiAgICAgICAgbGV0IHRpbWVEaWZmZXJlbmNlID0gbm93IC0gZGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVEaWZmZXJlbmNlID49IDMxNTM2MDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIDMxNTM2MDAwMDAwKTtcclxuICAgICAgICAgICAgY29tbWVudFRpbWUgPSB0aW1lRGlmZmVyZW5jZSA9PSAxID8gJ9Cz0L7QtCDQvdCw0LfQsNC0JyA6IHRpbWVEaWZmZXJlbmNlICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeCh0aW1lRGlmZmVyZW5jZSwgJ9Cz0L7QtCcsICfQs9C+0LTQsCcsICfQu9C10YInKSArICcg0L3QsNC30LDQtCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lRGlmZmVyZW5jZSA+PSAyNTkyMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIDI1OTIwMDAwMDApO1xyXG4gICAgICAgICAgICBjb21tZW50VGltZSA9IHRpbWVEaWZmZXJlbmNlID09IDEgPyAn0LzQtdGB0Y/RhiDQvdCw0LfQsNC0JyA6IHRpbWVEaWZmZXJlbmNlICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeCh0aW1lRGlmZmVyZW5jZSwgJ9C80LXRgdGP0YYnLCAn0LzQtdGB0Y/RhtCwJywgJ9C80LXRgdGP0YbQtdCyJykgKyAnINC90LDQt9Cw0LQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZURpZmZlcmVuY2UgPj0gNjA0ODAwMDAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIDYwNDgwMDAwMCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRUaW1lID0gdGltZURpZmZlcmVuY2UgPT0gMSA/ICfQvdC10LTQtdC70Y4g0L3QsNC30LDQtCcgOiB0aW1lRGlmZmVyZW5jZSArICcgJyArIHJldHVybldvcmRTdWZmaXgodGltZURpZmZlcmVuY2UsICfQvdC10LTQtdC70Y8nLCAn0L3QtdC00LXQu9C4JywgJ9C90LXQtNC10LvRjCcpICsgJyDQvdCw0LfQsNC0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVEaWZmZXJlbmNlID49IDg2NDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIDg2NDAwMDAwKTtcclxuICAgICAgICAgICAgY29tbWVudFRpbWUgPSB0aW1lRGlmZmVyZW5jZSA9PSAxID8gJ9C00LXQvdGMINC90LDQt9Cw0LQnIDogdGltZURpZmZlcmVuY2UgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KHRpbWVEaWZmZXJlbmNlLCAn0LTQtdC90YwnLCAn0LTQvdGPJywgJ9C00L3QtdC5JykgKyAnINC90LDQt9Cw0LQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZURpZmZlcmVuY2UgPj0gMzYwMDAwMCkge1xyXG4gICAgICAgICAgICB0aW1lRGlmZmVyZW5jZSA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2UgLyAzNjAwMDAwKTtcclxuICAgICAgICAgICAgY29tbWVudFRpbWUgPSB0aW1lRGlmZmVyZW5jZSA9PSAxID8gJ9GH0LDRgSDQvdCw0LfQsNC0JyA6IHRpbWVEaWZmZXJlbmNlICsgJyAnICsgcmV0dXJuV29yZFN1ZmZpeCh0aW1lRGlmZmVyZW5jZSwgJ9GH0LDRgScsICfRh9Cw0YHQsCcsICfRh9Cw0YHQvtCyJykgKyAnINC90LDQt9Cw0LQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZURpZmZlcmVuY2UgPj0gNjAwMDApIHtcclxuICAgICAgICAgICAgdGltZURpZmZlcmVuY2UgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gNjAwMDApO1xyXG4gICAgICAgICAgICBjb21tZW50VGltZSA9IHRpbWVEaWZmZXJlbmNlID09IDEgPyAn0LzQuNC90YPRgtGDINC90LDQt9Cw0LQnIDogdGltZURpZmZlcmVuY2UgKyAnICcgKyByZXR1cm5Xb3JkU3VmZml4KHRpbWVEaWZmZXJlbmNlLCAn0LzQuNC90YPRgtGDJywgJ9C80LjQvdGD0YLRiycsICfQvNC40L3Rg9GCJykgKyAnINC90LDQt9Cw0LQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRUaW1lID0gJ9GC0L7Qu9GM0LrQviDRh9GC0L4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdjb21tZW50JztcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb21tZW50X19hdXRob3ItYXZhdGFyXCIgc3R5bGU9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb21tZW50X19hdXRob3ItaW5mb1wiPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJjb21tZW50X19hdXRob3ItbmFtZVwiPicgKyBuYW1lICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiY29tbWVudF9fYXV0aG9yLXN1cm5hbWVcIj4nICsgJyAnICsgc3VybmFtZSArICc8L3NwYW4+PGJyPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4+JyArIGNvbW1lbnRUaW1lICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxpa2VcIj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGlrZV9fYnRuXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJsaWtlX19udW1iZXJcIj4nICsgbGlrZXMgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8cCBjbGFzcz1cImNvbW1lbnRfX3RleHRcIj4nICsgY29tbWVudCArICc8L3A+JztcclxuICAgICAgICByb29tQ29tbWVudHMuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgc2V0TGlrZXNIYW5kbGVyKCk7XHJcbiAgICAgICAgaWYgKGF2YXRhcikge1xyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50QXV0aG9yQXZhdGFyID0gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1lbnRfX2F1dGhvci1hdmF0YXInKVswXTtcclxuICAgICAgICAgICAgY29tbWVudEF1dGhvckF2YXRhci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBhdmF0YXIgKyAnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1bGxldExpc3RVbCA9IHJvb21EZXRhaWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1bGxldC1saXN0X191bCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5jbGFzc05hbWUgPSAnbGknO1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImxpX19tYXJrZXJcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImxpX190ZXh0XCI+JyArIHJ1bGUgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgYnVsbGV0TGlzdFVsLnByZXBlbmQobGkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS50b3hpbiA9IEpTT04uc3RyaW5naWZ5KGxvY2FsKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChsb2NhbERhdGEgJiYgbG9jYWxEYXRhLnZvdGVzKSB7XHJcbiAgICAgICAgY29uc3Qgdm90ZXMgPSBsb2NhbERhdGEudm90ZXM7XHJcbiAgICAgICAgbGV0IHZvdGVzU3VtID0gMDtcclxuICAgICAgICBsZXQgcHJvY2VudCA9IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMjU7XHJcbiAgICAgICAgbGV0IHdoaXRlU2VnbWVudFNpemUgPSAwO1xyXG4gICAgICAgIGxldCBzdHJva2VEYXNoYXJyYXlWYWwgPSAnJztcclxuICAgICAgICBsZXQgc3Ryb2tlRGFzaG9mZnNldFZhbCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2b3Rlcykge1xyXG4gICAgICAgICAgICB2b3Rlc1N1bSA9IHZvdGVzU3VtICsgKCt2b3Rlc1trZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2NlbnQgPSB2b3Rlc1N1bSAvIDEwMDtcclxuXHJcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5VmFsID0gKHZvdGVzLnNhdGlzZmFjdG9yaWx5IC8gcHJvY2VudCAtIDAuNSkgKyAnICcgKyAoMTAwIC0gdm90ZXMuc2F0aXNmYWN0b3JpbHkgLyBwcm9jZW50ICsgMC41KTtcclxuICAgICAgICBkaWFncmFtU2F0aXNmYWN0b3JpbHkuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgc3Ryb2tlRGFzaGFycmF5VmFsKTtcclxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0VmFsID0gMTAwIC0gKHZvdGVzLnNhdGlzZmFjdG9yaWx5IC8gcHJvY2VudCAtIDAuNSkgKyBvZmZzZXQ7XHJcbiAgICAgICAgZGlhZ3JhbVNhdGlzZmFjdG9yaWx5Lm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0Jywgc3Ryb2tlRGFzaG9mZnNldFZhbCk7XHJcblxyXG4gICAgICAgIHN0cm9rZURhc2hhcnJheVZhbCA9ICh2b3Rlcy5nb29kIC8gcHJvY2VudCAtIDAuNSkgKyAnICcgKyAoMTAwIC0gdm90ZXMuZ29vZCAvIHByb2NlbnQgKyAwLjUpO1xyXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXRWYWwgPSAxMDAgLSB2b3Rlcy5zYXRpc2ZhY3RvcmlseSAvIHByb2NlbnQgKyBvZmZzZXQ7XHJcbiAgICAgICAgZGlhZ3JhbUdvb2Quc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgc3Ryb2tlRGFzaGFycmF5VmFsKTtcclxuICAgICAgICBkaWFncmFtR29vZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0Jywgc3Ryb2tlRGFzaG9mZnNldFZhbCk7XHJcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldFZhbCA9IDEwMCAtICh2b3Rlcy5zYXRpc2ZhY3RvcmlseSAvIHByb2NlbnQgKyB2b3Rlcy5nb29kIC8gcHJvY2VudCAtIDAuNSkgKyBvZmZzZXQ7XHJcbiAgICAgICAgZGlhZ3JhbUdvb2QubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBzdHJva2VEYXNob2Zmc2V0VmFsKTtcclxuICAgICAgICBkaWFncmFtR29vZC5uZXh0RWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIHN0cm9rZURhc2hvZmZzZXRWYWwpO1xyXG5cclxuICAgICAgICBzdHJva2VEYXNoYXJyYXlWYWwgPSAodm90ZXMuYmVzdCAvIHByb2NlbnQgLSAwLjUpICsgJyAnICsgKDEwMCAtIHZvdGVzLmJlc3QgLyBwcm9jZW50ICsgMC41KTtcclxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0VmFsID0gMTAwIC0gKHZvdGVzLnNhdGlzZmFjdG9yaWx5IC8gcHJvY2VudCArIHZvdGVzLmdvb2QgLyBwcm9jZW50KSArIG9mZnNldDtcclxuICAgICAgICBkaWFncmFtQmVzdC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBzdHJva2VEYXNoYXJyYXlWYWwpO1xyXG4gICAgICAgIGRpYWdyYW1CZXN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBzdHJva2VEYXNob2Zmc2V0VmFsKTtcclxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0VmFsID0gMTAwIC0gKHZvdGVzLnNhdGlzZmFjdG9yaWx5IC8gcHJvY2VudCArIHZvdGVzLmdvb2QgLyBwcm9jZW50ICsgdm90ZXMuYmVzdCAvIHByb2NlbnQgLSAwLjUpICsgb2Zmc2V0O1xyXG4gICAgICAgIGRpYWdyYW1CZXN0Lm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0Jywgc3Ryb2tlRGFzaG9mZnNldFZhbCk7XHJcbiAgICAgICAgZGlhZ3JhbUJlc3QubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBzdHJva2VEYXNob2Zmc2V0VmFsKTtcclxuXHJcbiAgICAgICAgaWYgKHZvdGVzLmJhZCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGRpYWdyYW1DaXJjbGVzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RpYWdyYW1fX3NlZ21lbnQnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpYWdyYW1OdW1iZXIuaW5uZXJIVE1MID0gdm90ZXNTdW07XHJcbiAgICAgICAgZGlhZ3JhbUxhYmVsLmlubmVySFRNTCA9IHJldHVybldvcmRTdWZmaXgodm90ZXNTdW0sICfQs9C+0LvQvtGBJywgJ9Cz0L7Qu9C+0YHQsCcsICfQs9C+0LvQvtGB0L7QsicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbERhdGEgJiYgbG9jYWxEYXRhLmNvc2luZXNzKSB7XHJcbiAgICAgICAgdGV4dHNXaXRoUGljdHVyZVt0ZXh0c1dpdGhQaWN0dXJlLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ3RleHQtd2l0aC1waWN0dXJlX2JvcmRlci1ib3R0b20nKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFdpdGhQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dFdpdGhQaWN0dXJlLmNsYXNzTmFtZSA9ICd0ZXh0LXdpdGgtcGljdHVyZSc7XHJcbiAgICAgICAgdGV4dFdpdGhQaWN0dXJlLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtd2l0aC1waWN0dXJlX19pY29uXCI+d2hhdHNob3Q8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGV4dC13aXRoLXBpY3R1cmVfX2Rlc2NyaXB0aW9uXCI+JyArXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtd2l0aC1waWN0dXJlX19oZWFkZXJcIj7Qo9GO0YI8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8c3Bhbj7QndC+0LzQtdGAINC+0YHQvdCw0YnQtdC9INC60LDQvNC40L3QvtC8PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByb29tSW5mby5hcHBlbmQodGV4dFdpdGhQaWN0dXJlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGxvY2FsRGF0YSAmJiBsb2NhbERhdGEuY29tbWVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsRGF0YS5jb21tZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVDb21tZW50KGxvY2FsRGF0YS5jb21tZW50c1tpXS5uYW1lLCBsb2NhbERhdGEuY29tbWVudHNbaV0uc3VybmFtZSwgbG9jYWxEYXRhLmNvbW1lbnRzW2ldLmRhdGUsIGxvY2FsRGF0YS5jb21tZW50c1tpXS5jb21tZW50LCBsb2NhbERhdGEuY29tbWVudHNbaV0ubGlrZXMsIGxvY2FsRGF0YS5jb21tZW50c1tpXS5hdmF0YXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb2NhbERhdGEgJiYgIWxvY2FsRGF0YS5zbW9rZSkge1xyXG4gICAgICAgIGNyZWF0ZVJ1bGUoJ9Cd0LUg0LrRg9GA0LjRgtGMJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxEYXRhICYmICFsb2NhbERhdGEuZ3Vlc3RzKSB7XHJcbiAgICAgICAgY3JlYXRlUnVsZSgn0JHQtdC3INCy0LXRh9C10YDQuNC90L7QuiDQuCDQvNC10YDQvtC/0YDQuNGP0YLQuNC5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxEYXRhICYmICFsb2NhbERhdGEucGV0cykge1xyXG4gICAgICAgIGNyZWF0ZVJ1bGUoJ9Cd0LXQu9GM0LfRjyDRgSDQv9C40YLQvtC80YbQsNC80LgnKTtcclxuICAgIH1cclxuICAgIHJvb21EZXRhaWxzQ29tbWVudHNBbW91bnQuaW5uZXJIVE1MID0gbG9jYWxEYXRhLmNvbW1lbnRzLmxlbmd0aCArICcgJyArIHJldHVybldvcmRTdWZmaXgobG9jYWxEYXRhLmNvbW1lbnRzLmxlbmd0aCwgJ9C+0YLQt9GL0LInLCAn0L7RgtC30YvQstCwJywgJ9C+0YLQt9GL0LLQvtCyJyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlW2xvY2FsU3RvcmFnZUtleV0pIHtcclxuICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtsb2NhbFN0b3JhZ2VLZXldKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuV29yZFN1ZmZpeChhbW91bnQsIG9uZSwgdHdvLCB0d2VsdmUpIHtcclxuICAgIGxldCBzdHJpbmcgPSB0d2VsdmU7XHJcblxyXG4gICAgaWYgKGFtb3VudCA8IDExIHx8IGFtb3VudCA+IDIwKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYW1vdW50LnRvU3RyaW5nKClbYW1vdW50LnRvU3RyaW5nKCkubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBvbmU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSB0d287XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSB0d287XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSB0d287XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJpbmcgPSB0d2VsdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9jYWxEYXRhO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vc2VhcmNoLXJvb20uY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vc2lnbmluLmNzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL3NpZ251cC5jc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=