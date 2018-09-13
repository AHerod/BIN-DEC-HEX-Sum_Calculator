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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/BinaryCalculator.js":
/*!********************************!*\
  !*** ./js/BinaryCalculator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.BinaryCalculator = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Calculator2 = __webpack_require__(/*! ./Calculator */ \"./js/Calculator.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BinaryCalculator = function (_Calculator) {\n    _inherits(BinaryCalculator, _Calculator);\n\n    function BinaryCalculator(settings) {\n        _classCallCheck(this, BinaryCalculator);\n\n        var _this = _possibleConstructorReturn(this, (BinaryCalculator.__proto__ || Object.getPrototypeOf(BinaryCalculator)).call(this, settings));\n\n        console.log(_this.getName());\n        return _this;\n    }\n\n    /* Method add numbers in two array\n    *  @param {array} numberX First number\n    *  @param {array} numberY Second number\n    *  @return {array}\n    */\n\n\n    _createClass(BinaryCalculator, [{\n        key: \"add\",\n        value: function add(numberX, numberY) {\n            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];\n            for (var i = numberX.length - 1; i >= 0; i--) {\n                var carryBit = numberX[i] + numberY[i] + result[i];\n                if (carryBit === 2) {\n                    result[i] = 0;\n                    result[i - 1] = 1;\n                } else if (carryBit === 3) {\n                    result[i] = 1;\n                    result[i - 1] = 1;\n                } else {\n                    result[i] = carryBit;\n                }\n            }\n            return result;\n        }\n\n        /* Method changing number\n        *  @param {jQuery element} root Parent element\n        */\n\n    }, {\n        key: \"changeNumber\",\n        value: function changeNumber(root) {\n            var _this2 = this;\n\n            var activeElement = root.find('.active');\n            activeElement.removeClass(\"active\");\n            activeElement.siblings().addClass(\"active\");\n            root.children(\":first-child\").slideToggle(function () {\n                _this2.checkNumber();\n                _this2.updateResult();\n            });\n        }\n\n        /* Method changing Result\n        */\n\n    }, {\n        key: \"updateResult\",\n        value: function updateResult() {\n            var root = this.$calculatorDOMElement;\n            var $resultNumber = root.children(\".group-number\").children(\".result-bit\");\n            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {\n                var valueResult = parseInt($resultNumber.eq(j).find(\".active\").text());\n                if (this.resultNumberArray[i] != valueResult) {\n                    var activeElement = $resultNumber.eq(j).find(\".active\").removeClass(\"active\");\n                    activeElement.siblings().addClass(\"active\");\n                    $resultNumber.eq(j).children(\":first-child\").slideToggle();\n                }\n            }\n        }\n    }]);\n\n    return BinaryCalculator;\n}(_Calculator2.Calculator);\n\nexports.BinaryCalculator = BinaryCalculator;\n\n//# sourceURL=webpack:///./js/BinaryCalculator.js?");

/***/ }),

/***/ "./js/Calculator.js":
/*!**************************!*\
  !*** ./js/Calculator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* abstract */var Calculator = function () {\n    function Calculator(selectorName) {\n        _classCallCheck(this, Calculator);\n\n        this.name = selectorName;\n        this.$calculatorDOMElement = $(selectorName);\n\n        this.firstNumberArray = [];\n        this.secondNumberArray = [];\n        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];\n        this.initEvents();\n    }\n\n    /* Abstract method add numbers in two array\n    *  @param {array} numberX First number\n    *  @param {array} numberY Second number\n    *  @return {array}\n    */\n\n\n    _createClass(Calculator, [{\n        key: \"add\",\n        value: function add(numberX, numberY) {\n            console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\n            return [0, 0, 0, 0, 0, 0, 0, 0];\n        }\n\n        /* Abstract method changing number\n        *  @param {jQuery element} root Parent element\n        */\n\n    }, {\n        key: \"changeNumber\",\n        value: function changeNumber(root) {\n            console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\n        }\n\n        /* Abstract method changing Result\n        */\n\n    }, {\n        key: \"updateResult\",\n        value: function updateResult() {\n            console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\n        }\n\n        /* Get the name of calculator selector\n        *  @return {string}\n        */\n\n    }, {\n        key: \"getName\",\n        value: function getName() {\n            return \"Hello I am \" + this.name;\n        }\n\n        /* Check what number is set in both numbers and add\n        *  @return {string}\n        */\n\n    }, {\n        key: \"checkNumber\",\n        value: function checkNumber() {\n            var root = this.$calculatorDOMElement;\n            var $firstNumber = root.children(\".group-number\").children(\"label:first-child\");\n            var $secondNumber = root.children(\".group-number\").children(\"label:nth-child(2)\");\n            var $resultNumber = root.children(\".group-number\").children(\".result-bit\");\n\n            for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {\n                this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());\n                this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());\n                this.resultNumberArray[i] = parseInt($resultNumber.eq(j).find('.active').text());\n            }\n            this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);\n        }\n\n        /* Set event click on number\n        */\n\n    }, {\n        key: \"initEvents\",\n        value: function initEvents() {\n            var _this = this;\n\n            this.$calculatorDOMElement.find(\".display-number\").on('click', function (event) {\n                var parentLabel = $(event.target).parent(\".display-number\");\n                _this.changeNumber(parentLabel);\n            });\n        }\n    }]);\n\n    return Calculator;\n}();\n\nexports.Calculator = Calculator;\n\n//# sourceURL=webpack:///./js/Calculator.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _BinaryCalculator = __webpack_require__(/*! ./BinaryCalculator */ \"./js/BinaryCalculator.js\");\n\n__webpack_require__(/*! ./style.scss */ \"./js/style.scss\");\n\n$(document).ready(function () {\n    var bitCalc = new _BinaryCalculator.BinaryCalculator(\".binary-calculator\");\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/style.scss":
/*!***********************!*\
  !*** ./js/style.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:12)\\nYou may need an appropriate loader to handle this file type.\\n| // fonts\\n> $font-number: Arial;\\n| $font-text: Tahoma;\\n| \");\n\n//# sourceURL=webpack:///./js/style.scss?");

/***/ })

/******/ });