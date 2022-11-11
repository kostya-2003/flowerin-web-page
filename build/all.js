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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav */ \"./src/js/modules/nav.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/js/modules/contact.js\");\n/* harmony import */ var _modules_backToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backToTop */ \"./src/js/modules/backToTop.js\");\n\n\n\n\n(0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_backToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://group-work-4/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/backToTop.js":
/*!*************************************!*\
  !*** ./src/js/modules/backToTop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const backToTop = document.querySelector(\"#backToTop\");\r\n    window.addEventListener(\"scroll\", () => {\r\n         window.scrollY > 300 ? backToTop.style.display = \"block\" : backToTop.style.display = \"none\";\r\n    })\r\n   \r\n}\n\n//# sourceURL=webpack://group-work-4/./src/js/modules/backToTop.js?");

/***/ }),

/***/ "./src/js/modules/contact.js":
/*!***********************************!*\
  !*** ./src/js/modules/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const form = document.getElementById(\"my-form\");\r\n    const name = document.getElementById(\"name\");\r\n    const surname = document.getElementById(\"surname\");\r\n    const mail = document.getElementById(\"mail\");\r\n    const tel = document.getElementById(\"tel\");\r\n    const message = document.getElementById(\"message\")\r\n\r\n    form.addEventListener(\"submit\", (event) =>{\r\n        event.preventDefault();\r\n        const status = document.getElementById(\"my-form-status\");\r\n        const data = new FormData();\r\n        data.append('Our WebSite', 'flowersstudio.com');\r\n        data.append('Messages', `Name: ${name.value}\\n Lastname: ${surname.value}\\n Email: ${mail.value}\\n Telephone: ${tel.value}\\n Message: ${message.value}`);\r\n        fetch(event.target.action, {\r\n            method: form.method,\r\n            body: data,\r\n            headers: {\r\n                'Accept': 'application/json'\r\n            }\r\n        }).then(response => {\r\n            if (response.ok) {\r\n                status.innerHTML = \"Thank you for your application!\";\r\n                form.reset()\r\n            } else {\r\n                response.json().then(data => {\r\n                    if (Object.hasOwn(data, 'errors')) {\r\n                        status.innerHTML = data[\"errors\"].map(error => error[\"message\"]).join(\", \")\r\n                    } else {\r\n                        status.innerHTML = \"There was a problem submitting the form\"\r\n                    }\r\n                })\r\n            }\r\n        }).catch(error => {\r\n            status.innerHTML = \"There was a problem submitting the form\"\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack://group-work-4/./src/js/modules/contact.js?");

/***/ }),

/***/ "./src/js/modules/nav.js":
/*!*******************************!*\
  !*** ./src/js/modules/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const hamburgerBtn = document.querySelector(\".favDiv\");\r\n    const menuBar = document.querySelector(\"#menuBar\");\r\n    const closeBtn = document.querySelector(\".closeMenu\")\r\n    hamburgerBtn.addEventListener(\"click\", () => {\r\n        menuBar.classList.add(\"active\")\r\n    });\r\n    closeBtn.addEventListener(\"click\", () => {\r\n        menuBar.classList.remove(\"active\")\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://group-work-4/./src/js/modules/nav.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;