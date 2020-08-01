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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/landing/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/landing/fonts/fonts.css":
/*!*************************************!*\
  !*** ./src/landing/fonts/fonts.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/landing/index.js":
/*!******************************!*\
  !*** ./src/landing/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/landing/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.css */ "./src/landing/root.css");
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_root_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_room_card_search_room_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-room-card/search-room-card.js */ "./src/landing/search-room-card/search-room-card.js");



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

/***/ "./src/landing/root.css":
/*!******************************!*\
  !*** ./src/landing/root.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/landing/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js":
/*!*********************************************************************************************************!*\
  !*** ./src/landing/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js ***!
  \*********************************************************************************************************/
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

/***/ "./src/landing/search-room-card/search-room-card.js":
/*!**********************************************************!*\
  !*** ./src/landing/search-room-card/search-room-card.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__dropdown-guests-field/search-room-card__dropdown-guests-field.js */ "./src/landing/search-room-card/__dropdown-guests-field/search-room-card__dropdown-guests-field.js");
/* harmony import */ var _dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_guests_field_search_room_card_dropdown_guests_field_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmRpbmcvZm9udHMvZm9udHMuY3NzPzUyN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmRpbmcvcm9vdC5jc3M/ODExNiIsIndlYnBhY2s6Ly8vLi9zcmMvbGFuZGluZy9zZWFyY2gtcm9vbS1jYXJkL19fZHJvcGRvd24tZ3Vlc3RzLWZpZWxkL3NlYXJjaC1yb29tLWNhcmRfX2Ryb3Bkb3duLWd1ZXN0cy1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFuZGluZy9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuanMiXSwibmFtZXMiOlsiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibG9nbyIsImhlYWRlckJ1dHRvbnMiLCJoZWFkZXJFbnRlckJ1dHRvbiIsImhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvbiIsImNvbnRlbnQiLCJzZWFyY2hSb29tQ2FyZCIsImNvbnRlbnRTcGFuIiwiZW50ZXJDYXJkIiwiaGVhZGVyRW50ZXJCdXR0b25UdXJuZXIiLCJoZWFkZXJSZWdpc3RyYXRpb25CdXR0b25UdXJuZXIiLCJvbmNsaWNrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2VhcmNoUm9vbUNhcmREcm9wZG93blN3aXRjaGVyIiwic2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0cyIsInNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHNBcnJvdyIsInNlYXJjaFJvb21DYXJkUGx1c2VzIiwic2VhcmNoUm9vbUNhcmRNaW51c2VzIiwic2VhcmNoUm9vbUNhcmRHdWVzdHMiLCJzZWFyY2hSb29tQ2FyZE51bWJlcnMiLCJzZWFyY2hSb29tQ2FyZFN1Ym1pdCIsInNlYXJjaFJvb21DYXJkUmVmcmVzaCIsInNlYXJjaFJvb21DYXJkVHVybmVyIiwiaW5uZXJI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QWdCQSxFQUFDLEdBQUdQLHFCQUFxQixDQUFDWSxNQUExQyxFQUFrREwsRUFBQyxFQUFuRCxFQUF1RDtBQUFBLFNBQTlDQSxFQUE4QztBQWlCdEQ7O0FBRURILHFCQUFxQixDQUFDWixPQUF0QixHQUFnQyxZQUFZO0FBQ3hDLE9BQUssSUFBSW1CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULHFCQUFxQixDQUFDVSxNQUExQyxFQUFrREQsQ0FBQyxFQUFuRCxFQUF1RDtBQUNuRFQseUJBQXFCLENBQUNTLENBQUQsQ0FBckIsQ0FBeUJMLFNBQXpCLEdBQXFDLENBQXJDO0FBQ0g7O0FBQ0RMLHNCQUFvQixDQUFDSyxTQUFyQixHQUFpQyxnQkFBakM7QUFDQUYsdUJBQXFCLENBQUNYLFNBQXRCLENBQWdDQyxNQUFoQyxDQUF1QyxrQ0FBdkM7QUFDSCxDQU5EOztBQVFBUyxvQkFBb0IsQ0FBQ1gsT0FBckIsR0FBK0IsWUFBWTtBQUN2Q0ssOEJBQTRCLENBQUNKLFNBQTdCLENBQXVDQyxNQUF2QyxDQUE4Qyw0Q0FBOUM7QUFDQUksbUNBQWlDLENBQUNRLFNBQWxDLEdBQThDLHFCQUE5QztBQUNBRCxzQkFBb0IsR0FBRyxDQUF2QjtBQUNILENBSkQsQzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQSIsImZpbGUiOiJ0b3hpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sYW5kaW5nL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2ZvbnRzL2ZvbnRzLmNzcyc7XHJcbmltcG9ydCAnLi9yb290LmNzcyc7XHJcbmltcG9ydCAnLi9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuanMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF0sXHJcbiAgICBsb2dvID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbG9nbycpWzBdLFxyXG4gICAgaGVhZGVyQnV0dG9ucyA9IGhlYWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX2J1dHRvbnMnKVswXSxcclxuICAgIGhlYWRlckVudGVyQnV0dG9uID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fZW50ZXItYnV0dG9uJylbMF0sXHJcbiAgICBoZWFkZXJSZWdpc3RyYXRpb25CdXR0b24gPSBoZWFkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19yZWdpc3RyYXRpb24tYnV0dG9uJylbMF0sXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdLFxyXG4gICAgc2VhcmNoUm9vbUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkJylbMF0sXHJcbiAgICBjb250ZW50U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRfX3NwYW4nKVswXSxcclxuICAgIGVudGVyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VudGVyLWNhcmQnKVswXTtcclxubGV0IGhlYWRlckVudGVyQnV0dG9uVHVybmVyID0gMCxcclxuICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDA7XHJcblxyXG5oZWFkZXJFbnRlckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGhlYWRlckVudGVyQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudF90aGVtZV9lbnRlcicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyRW50ZXJCdXR0b25UdXJuZXIgPSAwO1xyXG4gICAgICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxubG9nby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICBoZWFkZXJCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnV0dG9uc190aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICBoZWFkZXJSZWdpc3RyYXRpb25CdXR0b25UdXJuZXIgPSAwO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHNlYXJjaFJvb21DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZCcpWzBdLFxyXG4gICAgc2VhcmNoUm9vbUNhcmREcm9wZG93blN3aXRjaGVyID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzLXN3aXRjaGVyJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzQXJyb3cgPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19kcm9wZG93bi1ndWVzdHMtYXJyb3cnKVswXSxcclxuICAgIHNlYXJjaFJvb21DYXJkUGx1c2VzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fcGx1cycpLFxyXG4gICAgc2VhcmNoUm9vbUNhcmRNaW51c2VzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fbWludXMnKSxcclxuICAgIHNlYXJjaFJvb21DYXJkR3Vlc3RzID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fZ3Vlc3RzJylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZE51bWJlcnMgPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19udW1iZXInKSxcclxuICAgIHNlYXJjaFJvb21DYXJkU3VibWl0ID0gc2VhcmNoUm9vbUNhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJvb20tY2FyZF9fc3VibWl0JylbMF0sXHJcbiAgICBzZWFyY2hSb29tQ2FyZFJlZnJlc2ggPSBzZWFyY2hSb29tQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoJylbMF07XHJcblxyXG5sZXQgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAwO1xyXG5cclxuc2VhcmNoUm9vbUNhcmREcm9wZG93blN3aXRjaGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc2VhcmNoUm9vbUNhcmRUdXJuZXIgPT0gMCkge1xyXG4gICAgICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJvb20tY2FyZF9fZHJvcGRvd24tZ3Vlc3RzX2V4cGFuZGVkJyk7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0c0Fycm93LmlubmVySFRNTCA9ICdrZXlib2FyZF9hcnJvd191cCc7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZWFyY2hSb29tQ2FyZERyb3Bkb3duR3Vlc3RzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1yb29tLWNhcmRfX2Ryb3Bkb3duLWd1ZXN0c19leHBhbmRlZCcpO1xyXG4gICAgICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRUdXJuZXIgPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFJvb21DYXJkUGx1c2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzZWFyY2hSb29tQ2FyZFBsdXNlc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgICBsZXQgZ3Vlc3RzQW1vdW50ID0gMDtcclxuXHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmROdW1iZXJzW2ldLmlubmVySFRNTCA9ICsrbnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGd1ZXN0c0Ftb3VudCArPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbal0uaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmRHdWVzdHMuaW5uZXJIVE1MID0gZ3Vlc3RzQW1vdW50ICsgJyDQs9C+0YHRgtGPJztcclxuICAgICAgICBzZWFyY2hSb29tQ2FyZFJlZnJlc2guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJvb20tY2FyZF9fcmVmcmVzaF9hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hSb29tQ2FyZE1pbnVzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNlYXJjaFJvb21DYXJkTWludXNlc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgICBsZXQgZ3Vlc3RzQW1vdW50ID0gMDtcclxuICAgICAgICBpZiAobnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICBzZWFyY2hSb29tQ2FyZE51bWJlcnNbaV0uaW5uZXJIVE1MID0gLS1udW1iZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBndWVzdHNBbW91bnQgKz0gcGFyc2VJbnQoc2VhcmNoUm9vbUNhcmROdW1iZXJzW2pdLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGd1ZXN0c0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJvb21DYXJkR3Vlc3RzLmlubmVySFRNTCA9IGd1ZXN0c0Ftb3VudCArICcg0LPQvtGB0YLRjyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSb29tQ2FyZEd1ZXN0cy5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJvb21DYXJkUmVmcmVzaC5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5zZWFyY2hSb29tQ2FyZFJlZnJlc2gub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoUm9vbUNhcmROdW1iZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgc2VhcmNoUm9vbUNhcmROdW1iZXJzW2pdLmlubmVySFRNTCA9IDA7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hSb29tQ2FyZEd1ZXN0cy5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgIHNlYXJjaFJvb21DYXJkUmVmcmVzaC5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19yZWZyZXNoX2FjdGl2ZScpO1xyXG59XHJcblxyXG5zZWFyY2hSb29tQ2FyZFN1Ym1pdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2VhcmNoUm9vbUNhcmREcm9wZG93bkd1ZXN0cy5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtcm9vbS1jYXJkX19kcm9wZG93bi1ndWVzdHNfZXhwYW5kZWQnKTtcclxuICAgIHNlYXJjaFJvb21DYXJkRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICBzZWFyY2hSb29tQ2FyZFR1cm5lciA9IDA7XHJcbn1cclxuIiwiaW1wb3J0ICcuL19fZHJvcGRvd24tZ3Vlc3RzLWZpZWxkL3NlYXJjaC1yb29tLWNhcmRfX2Ryb3Bkb3duLWd1ZXN0cy1maWVsZC5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==