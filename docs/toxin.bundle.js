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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index/fonts/fonts.css":
/*!***********************************!*\
  !*** ./src/index/fonts/fonts.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/index/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.css */ "./src/index/root.css");
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_root_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_room_card_search_room_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-room-card/search-room-card.js */ "./src/index/search-room-card/search-room-card.js");



var header = document.getElementsByClassName('header')[0],
    logo = header.getElementsByClassName('header__logo')[0],
    headerButtons = header.getElementsByClassName('header__buttons')[0],
    headerEnterButton = header.getElementsByClassName('header__enter-button')[0],
    headerRegistrationButton = header.getElementsByClassName('header__registration-button')[0],
    content = document.getElementsByClassName('content')[0],
    searchRoomCard = document.getElementsByClassName('search-room-card')[0],
    contentSpan = document.getElementsByClassName('content__span')[0],
    enterCard = document.getElementsByClassName('enter-card')[0];
var headerEnterButtonTurner = 0,
    headerRegistrationButtonTurner = 0;

headerEnterButton.onclick = function () {
  if (headerEnterButtonTurner == 0) {
    content.classList.remove('content_theme_search');
    content.classList.remove('content_theme_registration');
    content.classList.add('content_theme_enter');
    headerButtons.classList.remove('header__buttons_theme_registration');
    headerButtons.classList.add('header__buttons_theme_enter');
    headerRegistrationButtonTurner = 0;
    headerEnterButtonTurner = 1;
  } else {
    content.classList.remove('content_theme_registration');
    content.classList.remove('content_theme_enter');
    content.classList.add('content_theme_search');
    headerButtons.classList.remove('header__buttons_theme_registration');
    headerButtons.classList.remove('header__buttons_theme_enter');
    headerEnterButtonTurner = 0;
    headerRegistrationButtonTurner = 0;
  }
};

headerRegistrationButton.onclick = function () {
  if (headerRegistrationButtonTurner == 0) {
    content.classList.remove('content_theme_search');
    content.classList.remove('content_theme_enter');
    content.classList.add('content_theme_registration');
    headerButtons.classList.remove('header__buttons_theme_enter');
    headerButtons.classList.add('header__buttons_theme_registration');
    headerEnterButtonTurner = 0;
    headerRegistrationButtonTurner = 1;
  } else {
    content.classList.remove('content_theme_registration');
    content.classList.remove('content_theme_enter');
    content.classList.add('content_theme_search');
    headerButtons.classList.remove('header__buttons_theme_registration');
    headerButtons.classList.remove('header__buttons_theme_enter');
    headerEnterButtonTurner = 0;
    headerRegistrationButtonTurner = 0;
  }
};

logo.onclick = function () {
  content.classList.remove('content_theme_registration');
  content.classList.remove('content_theme_enter');
  content.classList.add('content_theme_search');
  headerButtons.classList.remove('header__buttons_theme_registration');
  headerButtons.classList.remove('header__buttons_theme_enter');
  headerEnterButtonTurner = 0;
  headerRegistrationButtonTurner = 0;
};

/***/ }),

/***/ "./src/index/root.css":
/*!****************************!*\
  !*** ./src/index/root.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js":
/*!*******************************************************************************************************!*\
  !*** ./src/index/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var searchRoomCard = document.getElementsByClassName('search-room-card')[0],
    searchRoomCardDropdownSwitcher = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests-switcher')[0],
    searchRoomCardDropdownGuests = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests')[0],
    searchRoomCardDropdownGuestsArrow = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests-arrow')[0],
    searchRoomCardPluses = searchRoomCard.getElementsByClassName('search-room-card__plus'),
    searchRoomCardMinuses = searchRoomCard.getElementsByClassName('search-room-card__minus'),
    searchRoomCardGuests = searchRoomCard.getElementsByClassName('search-room-card__guests')[0],
    searchRoomCardNumbers = searchRoomCard.getElementsByClassName('search-room-card__number'),
    searchRoomCardSubmit = searchRoomCard.getElementsByClassName('search-room-card__submit')[0],
    searchRoomCardRefresh = searchRoomCard.getElementsByClassName('search-room-card__refresh')[0];
var searchRoomCardTurner = 0;

searchRoomCardDropdownSwitcher.onclick = function () {
  if (searchRoomCardTurner == 0) {
    searchRoomCardDropdownGuests.classList.add('search-room-card__dropdown-guests_expanded');
    searchRoomCardDropdownGuestsArrow.innerHTML = 'keyboard_arrow_up';
    searchRoomCardTurner = 1;
  } else {
    searchRoomCardDropdownGuests.classList.remove('search-room-card__dropdown-guests_expanded');
    searchRoomCardDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
    searchRoomCardTurner = 0;
  }
};

var _loop = function _loop(i) {
  searchRoomCardPluses[i].onclick = function () {
    var number = parseInt(searchRoomCardNumbers[i].innerHTML);
    var guestsAmount = 0;
    searchRoomCardNumbers[i].innerHTML = ++number;

    for (var j = 0; j < searchRoomCardNumbers.length; j++) {
      guestsAmount += parseInt(searchRoomCardNumbers[j].innerHTML);
    }

    searchRoomCardGuests.innerHTML = guestsAmount + ' гостя';
    searchRoomCardRefresh.classList.add('search-room-card__refresh_active');
  };
};

for (var i = 0; i < searchRoomCardPluses.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  searchRoomCardMinuses[_i].onclick = function () {
    var number = parseInt(searchRoomCardNumbers[_i].innerHTML);
    var guestsAmount = 0;

    if (number > 0) {
      searchRoomCardNumbers[_i].innerHTML = --number;

      for (var j = 0; j < searchRoomCardNumbers.length; j++) {
        guestsAmount += parseInt(searchRoomCardNumbers[j].innerHTML);
      }

      if (guestsAmount > 0) {
        searchRoomCardGuests.innerHTML = guestsAmount + ' гостя';
      } else {
        searchRoomCardGuests.innerHTML = 'Сколько гостей';
        searchRoomCardRefresh.classList.remove('search-room-card__refresh_active');
      }
    }
  };
};

for (var _i = 0; _i < searchRoomCardMinuses.length; _i++) {
  _loop2(_i);
}

searchRoomCardRefresh.onclick = function () {
  for (var j = 0; j < searchRoomCardNumbers.length; j++) {
    searchRoomCardNumbers[j].innerHTML = 0;
  }

  searchRoomCardGuests.innerHTML = 'Сколько гостей';
  searchRoomCardRefresh.classList.remove('search-room-card__refresh_active');
};

searchRoomCardSubmit.onclick = function () {
  searchRoomCardDropdownGuests.classList.remove('search-room-card__dropdown-guests_expanded');
  searchRoomCardDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
  searchRoomCardTurner = 0;
};

/***/ }),

/***/ "./src/index/search-room-card/search-room-card.js":
/*!********************************************************!*\
  !*** ./src/index/search-room-card/search-room-card.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__dropdown-guests-field/search-room-card__dropdown-guests-field.js */ "./src/index/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js");
/* harmony import */ var _dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4L2ZvbnRzL2ZvbnRzLmNzcz84MzhhIiwid2VicGFjazovLy8uL3NyYy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvcm9vdC5jc3M/N2JlYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvc2VhcmNoLXJvb20tY2FyZC9fX2Ryb3Bkb3duLWd1ZXN0cy1maWVsZC9zZWFyY2gtcm9vbS1jYXJkX19kcm9wZG93bi1ndWVzdHMtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4L3NlYXJjaC1yb29tLWNhcmQvc2VhcmNoLXJvb20tY2FyZC5qcyJdLCJuYW1lcyI6WyJoZWFkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsb2dvIiwiaGVhZGVyQnV0dG9ucyIsImhlYWRlckVudGVyQnV0dG9uIiwiaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uIiwiY29udGVudCIsInNlYXJjaFJvb21DYXJkIiwiY29udGVudFNwYW4iLCJlbnRlckNhcmQiLCJoZWFkZXJFbnRlckJ1dHRvblR1cm5lciIsImhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZWFyY2hSb29tQ2FyZERyb3Bkb3duU3dpdGNoZXIiLCJzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzIiwic2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0c0Fycm93Iiwic2VhcmNoUm9vbUNhcmRQbHVzZXMiLCJzZWFyY2hSb29tQ2FyZE1pbnVzZXMiLCJzZWFyY2hSb29tQ2FyZEd1ZXN0cyIsInNlYXJjaFJvb21DYXJkTnVtYmVycyIsInNlYXJjaFJvb21DYXJkU3VibWl0Iiwic2VhcmNoUm9vbUNhcmRSZWZyZXNoIiwic2VhcmNoUm9vbUNhcmRUdXJuZXIiLCJpbm5lckhUTUwiLCJpIiwi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R0FBR1AscUJBQXFCLENBQUNZLE1BQTFDLEVBQWtETCxFQUFDLEVBQW5ELEVBQXVEO0FBQUEsU0FBOUNBLEVBQThDO0FBaUJ0RDs7QUFFREgscUJBQXFCLENBQUNaLE9BQXRCLEdBQWdDLFlBQVk7QUFDeEMsT0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QscUJBQXFCLENBQUNVLE1BQTFDLEVBQWtERCxDQUFDLEVBQW5ELEVBQXVEO0FBQ25EVCx5QkFBcUIsQ0FBQ1MsQ0FBRCxDQUFyQixDQUF5QkwsU0FBekIsR0FBcUMsQ0FBckM7QUFDSDs7QUFDREwsc0JBQW9CLENBQUNLLFNBQXJCLEdBQWlDLGdCQUFqQztBQUNBRix1QkFBcUIsQ0FBQ1gsU0FBdEIsQ0FBZ0NDLE1BQWhDLENBQXVDLGtDQUF2QztBQUNILENBTkQ7O0FBUUFTLG9CQUFvQixDQUFDWCxPQUFyQixHQUErQixZQUFZO0FBQ3ZDSyw4QkFBNEIsQ0FBQ0osU0FBN0IsQ0FBdUNDLE1BQXZDLENBQThDLDRDQUE5QztBQUNBSSxtQ0FBaUMsQ0FBQ1EsU0FBbEMsR0FBOEMscUJBQTlDO0FBQ0FELHNCQUFvQixHQUFHLENBQXZCO0FBQ0gsQ0FKRCxDOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBIiwiZmlsZSI6InRveGluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4L2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2ZvbnRzL2ZvbnRzLmNzcyc7XHJcbmltcG9ydCAnLi9yb290LmNzcyc7XHJcbmltcG9ydCAnLi9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuanMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF0sXHJcbiAgICBsb2dvID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbG9nbycpWzBdLFxyXG4gICAgaGVhZGVyQnV0dG9ucyA9IGhlYWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX2J1dHRvbnMnKVswXSxcclxuICAgIGhlYWRlckVudGVyQnV0dG9uID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fZW50ZXItYnV0dG9uJylbMF0sXHJcbiAgICBoZWFkZXJSZWdpc3RyYXRpb25CdXR0b24gPSBoZWFkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19yZWdpc3RyYXRpb24tYnV0dG9uJylbMF0sXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdLFxyXG4gICAgc2VhcmNoUm9vbUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkJylbMF0sXHJcbiAgICBjb250ZW50U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRfX3NwYW4nKVswXSxcclxuICAgIGVudGVyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VudGVyLWNhcmQnKVswXTtcclxubGV0IGhlYWRlckVudGVyQnV0dG9uVHVybmVyID0gMCxcclxuICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDA7XHJcblxyXG5oZWFkZXJFbnRlckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGhlYWRlckVudGVyQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudF90aGVtZV9lbnRlcicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyRW50ZXJCdXR0b25UdXJuZXIgPSAwO1xyXG4gICAgICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxubG9nby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICBoZWFkZXJCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnV0dG9uc190aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICBoZWFkZXJSZWdpc3RyYXRpb25CdXR0b25UdXJuZXIgPSAwO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHNlYXJjaFJvb21DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZCcpWzBdLFxyXG4gICAgc2VhcmNoUm9vbUNhcmREcm9wZG93blN3aXRjaGVyID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzLXN3aXRjaGVyJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzQXJyb3cgPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19kcm9wZG93bi1ndWVzdHMtYXJyb3cnKVswXSxcclxuICAgIHNlYXJjaFJvb21DYXJkUGx1c2VzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fcGx1cycpLFxyXG4gICAgc2VhcmNoUm9vbUNhcmRNaW51c2VzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fbWludXMnKSxcclxuICAgIHNlYXJjaFJvb21DYXJkR3Vlc3RzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZ3Vlc3RzJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZE51bWJlcnMgPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19udW1iZXInKSxcclxuICAgIHNlYXJjaFJvb21DYXJkU3VibWl0ID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fc3VibWl0JylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZFJlZnJlc2ggPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoJylbMF07XHJcblxyXG5sZXQgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAwO1xyXG5cclxuc2VhcmNoUm9vbUNhcmREcm9wZG93blN3aXRjaGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc2VhcmNoUm9vbUNhcmRUdXJuZXIgPT0gMCkge1xyXG4gICAgICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzX2V4cGFuZGVkJyk7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0c0Fycm93LmlubmVySFRNTCA9ICdrZXlib2FyZF9hcnJvd191cCc7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1yb29tLWNhcmRfX2Ryb3Bkb3duLWd1ZXN0c19leHBhbmRlZCcpO1xyXG4gICAgICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFJvb21DYXJkUGx1c2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzZWFyY2hSb29tQ2FyZFBsdXNlc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgICBsZXQgZ3Vlc3RzQW1vdW50ID0gMDtcclxuXHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmROdW1iZXJzW2ldLmlubmVySFRNTCA9ICsrbnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGd1ZXN0c0Ftb3VudCArPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbal0uaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRHdWVzdHMuaW5uZXJIVE1MID0gZ3Vlc3RzQW1vdW50ICsgJyDQs9C+0YHRgtGPJztcclxuICAgICAgICBzZWFyY2hSb29tQ2FyZFJlZnJlc2guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJvb20tY2FyZF9fcmVmcmVzaF9hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hSb29tQ2FyZE1pbnVzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNlYXJjaFJvb21DYXJkTWludXNlc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgICBsZXQgZ3Vlc3RzQW1vdW50ID0gMDtcclxuICAgICAgICBpZiAobnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICBzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MID0gLS1udW1iZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBndWVzdHNBbW91bnQgKz0gcGFyc2VJbnQoc2VhcmNoUm9vbUNhcmROdW1iZXJzW2pdLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGd1ZXN0c0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJvb21DYXJkR3Vlc3RzLmlubmVySFRNTCA9IGd1ZXN0c0Ftb3VudCArICcg0LPQvtGB0YLRjyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSb29tQ2FyZEd1ZXN0cy5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJvb21DYXJkUmVmcmVzaC5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5zZWFyY2hSb29tQ2FyZFJlZnJlc2gub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmROdW1iZXJzW2pdLmlubmVySFRNTCA9IDA7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hSb29tQ2FyZEd1ZXN0cy5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgIHNlYXJjaFJvb21DYXJkUmVmcmVzaC5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoX2FjdGl2ZScpO1xyXG59XHJcblxyXG5zZWFyY2hSb29tQ2FyZFN1Ym1pdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0cy5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19kcm9wZG93bi1ndWVzdHNfZXhwYW5kZWQnKTtcclxuICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICBzZWFyY2hSb29tQ2FyZFR1cm5lciA9IDA7XHJcbn1cclxuIiwiaW1wb3J0ICcuL19fZHJvcGRvd24tZ3Vlc3RzLWZpZWxkL3NlYXJjaC1yb29tLWNhcmRfX2Ryb3Bkb3duLWd1ZXN0cy1maWVsZC5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==