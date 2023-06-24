/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst image = document.querySelector('.slide');\r\nconst dot_one = document.querySelector('.dot_one');\r\nconst dot_two = document.querySelector('.dot_two');\r\nconst dot_three = document.querySelector('.dot_three');\r\n\r\nlet slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\nfunction currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n  }\r\n\r\nfunction showSlides(n) {\r\n    let slides = image;\r\n    if (n > slides.length) {\r\n      slideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n        slideIndex = slides.length;\r\n    }\r\n \r\n    for (let slide of slides) {\r\n        slide.style.display = \"none\";\r\n    }\r\n    slides[slideIndex - 1].style.display = \"flex\";    \r\n  }\r\n var timer = 0;\r\n makeTimer(); //Создаем интервал \r\n function makeTimer(){\r\n    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание\r\n    timer = setInterval(function(){\r\n      slideIndex++;\r\n      showSlides(slideIndex);\r\n    },5000);\r\n  }\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://book_store/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;