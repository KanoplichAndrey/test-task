/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/font-awesome/css/font-awesome.min.css":
/*!***************************************************!*\
  !*** ./src/font-awesome/css/font-awesome.min.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/font-awesome/css/font-awesome.min.css?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/scss/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _src_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/font-awesome/css/font-awesome.min.css */ \"./src/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var _nameValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nameValid */ \"./src/nameValid.js\");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit */ \"./src/submit.js\");\n/* harmony import */ var _sendData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendData */ \"./src/sendData.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_nameValid__WEBPACK_IMPORTED_MODULE_2__.nameValid;\r\nwindow.addEventListener('load', function () {\r\n  _sendData__WEBPACK_IMPORTED_MODULE_4__.sendData;\r\n  _submit__WEBPACK_IMPORTED_MODULE_3__.submit;\r\n});\r\n\n\n//# sourceURL=webpack://webpack_example/./src/app.js?");

/***/ }),

/***/ "./src/nameValid.js":
/*!**************************!*\
  !*** ./src/nameValid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"nameValid\": () => (/* binding */ nameValid)\n/* harmony export */ });\nconst form = document.getElementById( \"info\" )\r\nfunction nameValid (a) {\r\n    let name = form.elements.name;\r\n    let nameValue = name.value;\r\n\r\n     if (nameValue == \"\" || isNaN(nameValue)) {\r\n        document.getElementById(\"numberError\").innerHTML = \"Введите ваш номер!\";\r\n        numberError.style.color = \"red\";\r\n        if (a) name.focus();\r\n        return false;\r\n    }\r\n    else{\r\n        document.getElementById(\"numberError\").innerHTML = \"\";\r\n        return true;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_example/./src/nameValid.js?");

/***/ }),

/***/ "./src/sendData.js":
/*!*************************!*\
  !*** ./src/sendData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\n/* harmony import */ var _nameValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nameValid */ \"./src/nameValid.js\");\n// import { Resolver } from 'webpack';\r\n\r\n\r\n     \r\n\r\nfunction sendData() {\r\n    \r\n    const XHR = new XMLHttpRequest();\r\n    const FD = new FormData( _nameValid__WEBPACK_IMPORTED_MODULE_0__.form );\r\n\r\n    \r\n    XHR.addEventListener( \"load\", function(event) {\r\n    alert('вашы данные успешно отправлены'),     \r\n         _nameValid__WEBPACK_IMPORTED_MODULE_0__.form.innerHTML = '<h2>спасибо за заявку!</h2>'\r\n         _nameValid__WEBPACK_IMPORTED_MODULE_0__.form.style.color=\"red\";\r\n    \r\n    } );\r\n    \r\n    XHR.addEventListener( \"error\", function( event ) {\r\n    alert( 'Oops! Something went wrong.' );\r\n    } );\r\n    \r\n    XHR.open( \"POST\", \"https://httpbin.org/post\" );\r\n    XHR.send( FD );\r\n    }\r\n\n\n//# sourceURL=webpack://webpack_example/./src/sendData.js?");

/***/ }),

/***/ "./src/submit.js":
/*!***********************!*\
  !*** ./src/submit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _nameValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nameValid */ \"./src/nameValid.js\");\n/* harmony import */ var _sendData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendData */ \"./src/sendData.js\");\n// export const form = document.getElementById( \"info\" )\r\n\r\n\r\n\r\nconst submit = _nameValid__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('submit', function (event) {\r\n  event.preventDefault();\r\n  let b = true;\r\n  b = (0,_nameValid__WEBPACK_IMPORTED_MODULE_0__.nameValid)(b) && b;\r\n\r\n  if (b) {\r\n    (0,_sendData__WEBPACK_IMPORTED_MODULE_1__.sendData)();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://webpack_example/./src/submit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;