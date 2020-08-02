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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filter/__checkbox/filter__checkbox.js":
/*!***************************************************!*\
  !*** ./src/filter/__checkbox/filter__checkbox.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var filterCheckbox = document.getElementsByClassName('filter__checkbox')[0],
    filterCheckboxBoxes = filterCheckbox.getElementsByClassName('filter__checkbox-box'),
    filterCheckboxSmoke = filterCheckbox.getElementsByClassName('filter__checkbox-smoke')[0],
    filterCheckboxPets = filterCheckbox.getElementsByClassName('filter__checkbox-pets')[0],
    filterCheckboxGuests = filterCheckbox.getElementsByClassName('filter__checkbox-guests')[0];

filterCheckboxSmoke.onclick = function () {
  if (filterCheckboxForm.filterCheckboxSmoke.checked) {
    filterCheckboxSmoke.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
    filterCheckboxForm.filterCheckboxSmoke.checked = false;
  } else {
    filterCheckboxSmoke.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
    filterCheckboxForm.filterCheckboxSmoke.checked = true;
  }
};

filterCheckboxPets.onclick = function () {
  if (filterCheckboxForm.filterCheckboxPets.checked) {
    filterCheckboxPets.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
    filterCheckboxForm.filterCheckboxPets.checked = false;
  } else {
    filterCheckboxPets.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
    filterCheckboxForm.filterCheckboxPets.checked = true;
  }
};

filterCheckboxGuests.onclick = function () {
  if (filterCheckboxForm.filterCheckboxGuests.checked) {
    filterCheckboxGuests.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
    filterCheckboxForm.filterCheckboxGuests.checked = false;
  } else {
    filterCheckboxGuests.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
    filterCheckboxForm.filterCheckboxGuests.checked = true;
  }
};

/***/ }),

/***/ "./src/filter/__expandable-checkbox/filter__expandable-checkbox.js":
/*!*************************************************************************!*\
  !*** ./src/filter/__expandable-checkbox/filter__expandable-checkbox.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var filterExpandableCheckbox = document.getElementsByClassName('filter__expandable-checkbox')[0];
var filterExpandableCheckboxSwitcher = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-switcher')[0];
var filterExpandableCheckboxCheckboxes = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-checkboxes')[0];
var filterExpandableCheckboxBoxes = filterExpandableCheckbox.getElementsByClassName('filter__checkbox-box');
var filterExpandableCheckboxBreakfast = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-breakfast')[0];
var filterExpandableCheckboxTable = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-table')[0];
var filterExpandableCheckboxChair = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-chair')[0];
var filterExpandableCheckboxBed = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-bed')[0];
var filterExpandableCheckboxTv = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-tv')[0];
var filterExpandableCheckboxShampoo = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-shampoo')[0];
var filterExpandableCheckboxSwitcherTurner = 0;

filterExpandableCheckboxSwitcher.onclick = function () {
  if (filterExpandableCheckboxSwitcherTurner == 0) {
    filterExpandableCheckboxCheckboxes.classList.add('filter__guests_expanded');
    filterExpandableCheckboxSwitcherTurner = 1;
  } else {
    filterExpandableCheckboxCheckboxes.classList.remove('filter__guests_expanded');
    filterExpandableCheckboxSwitcherTurner = 0;
  }
};

filterExpandableCheckboxBreakfast.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked) {
    filterExpandableCheckboxBreakfast.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked = false;
  } else {
    filterExpandableCheckboxBreakfast.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked = true;
  }
};

filterExpandableCheckboxChair.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked) {
    filterExpandableCheckboxChair.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked = false;
  } else {
    filterExpandableCheckboxChair.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked = true;
  }
};

filterExpandableCheckboxBed.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked) {
    filterExpandableCheckboxBed.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked = false;
  } else {
    filterExpandableCheckboxBed.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked = true;
  }
};

filterExpandableCheckboxTv.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked) {
    filterExpandableCheckboxTv.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked = false;
  } else {
    filterExpandableCheckboxTv.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked = true;
  }
};

filterExpandableCheckboxShampoo.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked) {
    filterExpandableCheckboxShampoo.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked = false;
  } else {
    filterExpandableCheckboxShampoo.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked = true;
  }
};

filterExpandableCheckboxTable.onclick = function () {
  if (filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked) {
    filterExpandableCheckboxTable.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked = false;
  } else {
    filterExpandableCheckboxTable.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
    filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked = true;
  }
};

/***/ }),

/***/ "./src/filter/__guests/filter__guests.js":
/*!***********************************************!*\
  !*** ./src/filter/__guests/filter__guests.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = document.getElementsByClassName('filter')[0],
    filterDropdownSwitcher = filter.getElementsByClassName('filter__guests-switcher')[0],
    filterDropdownGuests = filter.getElementsByClassName('filter__dropdown-guests')[0],
    filterDropdownGuestsArrow = filter.getElementsByClassName('filter__guests-arrow')[0],
    filterAdultsPluses = filter.getElementsByClassName('filter__adults-plus'),
    filterAdultsMinuses = filter.getElementsByClassName('filter__adults-minus'),
    filterAdultsValue = filter.getElementsByClassName('filter__adults-value')[0],
    filterAdultsNumbers = filter.getElementsByClassName('filter__adults-number'),
    filterBabiesPluse = filter.getElementsByClassName('filter__babies-plus')[0],
    filterBabiesMinuse = filter.getElementsByClassName('filter__babies-minus')[0],
    filterBabiesValue = filter.getElementsByClassName('filter__babies-value')[0],
    filterBabiesNumber = filter.getElementsByClassName('filter__babies-number')[0],
    filterSubmit = filter.getElementsByClassName('filter__submit')[0],
    filterRefresh = filter.getElementsByClassName('filter__refresh')[0];
var filterTurner = 0;

filterDropdownSwitcher.onclick = function () {
  if (filterTurner == 0) {
    filterDropdownGuests.classList.add('filter__guests_expanded');
    filterDropdownGuestsArrow.innerHTML = 'keyboard_arrow_up';
    filterTurner = 1;
  } else {
    filterDropdownGuests.classList.remove('filter__guests_expanded');
    filterDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
    filterTurner = 0;
  }
};

var _loop = function _loop(i) {
  filterAdultsPluses[i].onclick = function () {
    var inputValue = onChangeDropdown(filterAdultsNumbers[i], 'plus', 'гость', 'гостя', 'гостей');
    filterAdultsValue.innerHTML = inputValue;
    filterRefresh.classList.add('filter__refresh_active');

    if (filterBabiesValue.innerHTML != '' && filterBabiesValue.innerHTML.indexOf(',') == -1) {
      filterBabiesValue.innerHTML = ', ' + filterBabiesValue.innerHTML;
    }
  };
};

for (var i = 0; i < filterAdultsPluses.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  filterAdultsMinuses[_i].onclick = function () {
    var inputValue = onChangeDropdown(filterAdultsNumbers[_i], 'minus', 'гость', 'гостя', 'гостей');

    if (parseInt(inputValue)) {
      filterAdultsValue.innerHTML = inputValue;
      filterRefresh.classList.add('filter__refresh_active');

      if (filterBabiesValue.innerHTML != '' && filterBabiesValue.innerHTML.indexOf(',') == -1) {
        filterBabiesValue.innerHTML = ', ' + filterBabiesValue.innerHTML;
      }
    } else if (filterBabiesValue.innerHTML == '') {
      filterAdultsValue.innerHTML = 'Сколько гостей';
      filterRefresh.classList.remove('filter__refresh_active');
    } else {
      filterAdultsValue.innerHTML = '';
      filterBabiesValue.innerHTML = filterBabiesValue.innerHTML.split(',')[1];
    }
  };
};

for (var _i = 0; _i < filterAdultsMinuses.length; _i++) {
  _loop2(_i);
}

filterBabiesPluse.onclick = function () {
  var inputValue = onChangeDropdown(filterBabiesNumber, 'plus', 'младенец', 'младенца', 'младенцев');

  if (filterAdultsValue.innerHTML == 'Сколько гостей' || filterAdultsValue.innerHTML == '') {
    filterAdultsValue.innerHTML = '';
    filterBabiesValue.innerHTML = inputValue;
    filterRefresh.classList.add('filter__refresh_active');
  } else {
    filterBabiesValue.innerHTML = ', ' + inputValue;
  }
};

filterBabiesMinuse.onclick = function () {
  var inputValue = onChangeDropdown(filterBabiesNumber, 'minus', 'младенец', 'младенца', 'младенцев');

  if (parseInt(inputValue)) {
    if (filterAdultsValue.innerHTML == 'Сколько гостей') {
      filterAdultsValue.innerHTML = '';
      filterBabiesValue.innerHTML = inputValue;
      filterRefresh.classList.add('filter__refresh_active');
    } else if (filterAdultsValue.innerHTML == '') {
      filterBabiesValue.innerHTML = inputValue;
    } else {
      filterBabiesValue.innerHTML = ', ' + inputValue;
    }
  } else {
    filterBabiesValue.innerHTML = '';

    if (filterAdultsValue == '') {
      filterAdultsValue == 'Сколько гостей';
      filterRefresh.classList.remove('filter__refresh_active');
    }
  }
};

filterRefresh.onclick = function () {
  for (var _i2 = 0; _i2 < filterAdultsNumbers.length; _i2++) {
    filterAdultsNumbers[_i2].innerHTML = 0;
    filterBabiesNumber.innerHTML = 0;
  }

  filterBabiesValue.innerHTML = '';
  filterAdultsValue.innerHTML = 'Сколько гостей';
  filterRefresh.classList.remove('filter__refresh_active');
};

filterSubmit.onclick = function () {
  filterDropdownGuests.classList.remove('filter__guests_expanded');
  filterDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
  filterTurner = 0;
};

function onChangeDropdown(numberEl, sign, one, two, twelve) {
  'use strict';

  var numbers = document.getElementsByClassName(numberEl.className);
  var number = parseInt(numberEl.innerHTML),
      amount = 0,
      string = twelve;

  if (sign == 'plus') {
    numberEl.innerHTML = ++number;
  } else if (sign =  true && number > 0) {
    numberEl.innerHTML = --number;
  }

  for (var _i3 = 0; _i3 < numbers.length; _i3++) {
    amount += parseInt(numbers[_i3].innerHTML);
  }

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

  return amount + ' ' + string;
}

/***/ }),

/***/ "./src/filter/__rich-checkbox/filter__rich-checkbox.js":
/*!*************************************************************!*\
  !*** ./src/filter/__rich-checkbox/filter__rich-checkbox.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var filterRichCheckbox = document.getElementsByClassName('filter__rich-checkbox')[0],
    filterCorridorTrs = filterRichCheckbox.getElementsByClassName('filter__corridor-tr'),
    filterHelperTrs = filterRichCheckbox.getElementsByClassName('filter__helper-tr'),
    filterRichCheckboxCorridor = filterRichCheckbox.getElementsByClassName('filter__rich-checkbox-corridor')[0],
    filterRichCheckboxHelper = filterRichCheckbox.getElementsByClassName('filter__rich-checkbox-helper')[0];

var _loop = function _loop(i) {
  filterCorridorTrs[i].onclick = function () {
    if (filterCorridorTrs[i].getElementsByClassName('filter__rich-checkbox-corridor')[0]) {
      if (filterRichCheckboxForm.filterRichCheckboxCorridor.checked) {
        filterRichCheckboxCorridor.classList.remove('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxCorridor.checked = false;
      } else {
        filterRichCheckboxCorridor.classList.add('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxCorridor.checked = true;
      }
    } else if (filterCorridorTrs[i].previousElementSibling.getElementsByClassName('filter__rich-checkbox-corridor')[0]) {
      if (filterRichCheckboxForm.filterRichCheckboxCorridor.checked) {
        filterRichCheckboxCorridor.classList.remove('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxCorridor.checked = false;
      } else {
        filterRichCheckboxCorridor.classList.add('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxCorridor.checked = true;
      }
    }
  };
};

for (var i = 0; i < filterCorridorTrs.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  filterHelperTrs[_i].onclick = function () {
    if (filterHelperTrs[_i].getElementsByClassName('filter__rich-checkbox-helper')[0]) {
      if (filterRichCheckboxForm.filterRichCheckboxHelper.checked) {
        filterRichCheckboxHelper.classList.remove('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxHelper.checked = false;
      } else {
        filterRichCheckboxHelper.classList.add('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxHelper.checked = true;
      }
    } else if (filterHelperTrs[_i].previousElementSibling.getElementsByClassName('filter__rich-checkbox-helper')[0]) {
      if (filterRichCheckboxForm.filterRichCheckboxHelper.checked) {
        filterRichCheckboxHelper.classList.remove('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxHelper.checked = false;
      } else {
        filterRichCheckboxHelper.classList.add('filter_checked');
        filterRichCheckboxForm.filterRichCheckboxHelper.checked = true;
      }
    }
  };
};

for (var _i = 0; _i < filterHelperTrs.length; _i++) {
  _loop2(_i);
}

/***/ }),

/***/ "./src/filter/filter.js":
/*!******************************!*\
  !*** ./src/filter/filter.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guests_filter_guests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__guests/filter__guests.js */ "./src/filter/__guests/filter__guests.js");
/* harmony import */ var _guests_filter_guests_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_guests_filter_guests_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_filter_checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__checkbox/filter__checkbox.js */ "./src/filter/__checkbox/filter__checkbox.js");
/* harmony import */ var _checkbox_filter_checkbox_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkbox_filter_checkbox_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rich_checkbox_filter_rich_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__rich-checkbox/filter__rich-checkbox.js */ "./src/filter/__rich-checkbox/filter__rich-checkbox.js");
/* harmony import */ var _rich_checkbox_filter_rich_checkbox_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rich_checkbox_filter_rich_checkbox_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _expandable_checkbox_filter_expandable_checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__expandable-checkbox/filter__expandable-checkbox.js */ "./src/filter/__expandable-checkbox/filter__expandable-checkbox.js");
/* harmony import */ var _expandable_checkbox_filter_expandable_checkbox_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_expandable_checkbox_filter_expandable_checkbox_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.css */ "./src/root.css");
/* harmony import */ var _root_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_root_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filter_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter.js */ "./src/filter/filter.js");

 //import './search-room-card/search-room-card.js';


var header = document.getElementsByClassName('header')[0],
    logo = header.getElementsByClassName('header__logo')[0],
    headerButtons = header.getElementsByClassName('header__buttons')[0],
    headerEnterButton = header.getElementsByClassName('header__enter')[0],
    headerRegistrationButton = header.getElementsByClassName('header__registration')[0],
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

/***/ "./src/root.css":
/*!**********************!*\
  !*** ./src/root.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9fX2NoZWNrYm94L2ZpbHRlcl9fY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9fX2V4cGFuZGFibGUtY2hlY2tib3gvZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXIvX19ndWVzdHMvZmlsdGVyX19ndWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9fX3JpY2gtY2hlY2tib3gvZmlsdGVyX19yaWNoLWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9mb250cy5jc3M/YzFmMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvb3QuY3NzP2RmZjIiXSwibmFtZXMiOlsiZmlsdGVyQ2hlY2tib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmaWx0ZXJDaGVja2JveEJveGVzIiwiZmlsdGVyQ2hlY2tib3hTbW9rZSIsImZpbHRlckNoZWNrYm94UGV0cyIsImZpbHRlckNoZWNrYm94R3Vlc3RzIiwib25jbGljayIsImZpbHRlckNoZWNrYm94Rm9ybSIsImNoZWNrZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3giLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlciIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveENoZWNrYm94ZXMiLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCb3hlcyIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveEJyZWFrZmFzdCIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveFRhYmxlIiwiZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hhaXIiLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCZWQiLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUdiIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveFNoYW1wb28iLCJmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlclR1cm5lciIsImZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0iLCJmaWx0ZXIiLCJmaWx0ZXJEcm9wZG93blN3aXRjaGVyIiwiZmlsdGVyRHJvcGRvd25HdWVzdHMiLCJmaWx0ZXJEcm9wZG93bkd1ZXN0c0Fycm93IiwiZmlsdGVyQWR1bHRzUGx1c2VzIiwiZmlsdGVyQWR1bHRzTWludXNlcyIsImZpbHRlckFkdWx0c1ZhbHVlIiwiZmlsdGVyQWR1bHRzTnVtYmVycyIsImZpbHRlckJhYmllc1BsdXNlIiwiZmlsdGVyQmFiaWVzTWludXNlIiwiZmlsdGVyQmFiaWVzVmFsdWUiLCJmaWx0ZXJCYWJpZXNOdW1iZXIiLCJmaWx0ZXJTdWJtaXQiLCJmaWx0ZXJSZWZyZXNoIiwiZmlsdGVyVHVybmVyIiwiaW5uZXJIVE1MIiwiaSIsImlucHV0VmFsdWUiLCJvbkNoYW5nZURyb3Bkb3duIiwiaW5kZXhPZiIsImxlbmd0aCIsInBhcnNlSW50Iiwic3BsaXQiLCJudW1iZXJFbCIsInNpZ24iLCJvbmUiLCJ0d28iLCJ0d2VsdmUiLCJudW1iZXJzIiwiY2xhc3NOYW1lIiwibnVtYmVyIiwiYW1vdW50Iiwic3RyaW5nIiwidG9TdHJpbmciLCJmaWx0ZXJSaWNoQ2hlY2tib3giLCJmaWx0ZXJDb3JyaWRvclRycyIsImZpbHRlckhlbHBlclRycyIsImZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yIiwiZmlsdGVyUmljaENoZWNrYm94SGVscGVyIiwiZmlsdGVyUmljaENoZWNrYm94Rm9ybSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJoZWFkZXIiLCJsb2dvIiwiaGVhZGVyQnV0dG9ucyIsImhlYWRlckVudGVyQnV0dG9uIiwiaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uIiwiY29udGVudCIsInNlYXJjaFJvb21DYXJkIiwiY29udGVudFNwYW4iLCJlbnRlckNhcmQiLCJoZWFkZXJFbnRlckJ1dHRvblR1cm5lciIsImhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxrQkFBaEMsRUFBb0QsQ0FBcEQsQ0FBdkI7QUFBQSxJQUNJQyxtQkFBbUIsR0FBR0gsY0FBYyxDQUFDRSxzQkFBZixDQUFzQyxzQkFBdEMsQ0FEMUI7QUFBQSxJQUVJRSxtQkFBbUIsR0FBR0osY0FBYyxDQUFDRSxzQkFBZixDQUFzQyx3QkFBdEMsRUFBZ0UsQ0FBaEUsQ0FGMUI7QUFBQSxJQUdJRyxrQkFBa0IsR0FBR0wsY0FBYyxDQUFDRSxzQkFBZixDQUFzQyx1QkFBdEMsRUFBK0QsQ0FBL0QsQ0FIekI7QUFBQSxJQUlJSSxvQkFBb0IsR0FB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RCxpQkFBYSxDQUFDMUQsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEIsb0NBQTVCO0FBQ0ErRCwyQkFBdUIsR0FBRyxDQUExQjtBQUNBQyxrQ0FBOEIsR0FBRyxDQUFqQztBQUNILEdBUkQsTUFRTztBQUNITCxXQUFPLENBQUM3RCxTQUFSLENBQWtCQyxNQUFsQixDQUF5Qiw0QkFBekI7QUFDQTRELFdBQU8sQ0FBQzdELFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLHFCQUF6QjtBQUNBNEQsV0FBTyxDQUFDN0QsU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0Isc0JBQXRCO0FBQ0F3RCxpQkFBYSxDQUFDMUQsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0Isb0NBQS9CO0FBQ0F5RCxpQkFBYSxDQUFDMUQsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsNkJBQS9CO0FBQ0FnRSwyQkFBdUIsR0FBRyxDQUExQjtBQUNBQyxrQ0FBOEIsR0FBRyxDQUFqQztBQUNIO0FBQ0osQ0FsQkQ7O0FBb0JBVCxJQUFJLENBQUM1RCxPQUFMLEdBQWUsWUFBWTtBQUN2QmdFLFNBQU8sQ0FBQzdELFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLDRCQUF6QjtBQUNBNEQsU0FBTyxDQUFDN0QsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIscUJBQXpCO0FBQ0E0RCxTQUFPLENBQUM3RCxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixzQkFBdEI7QUFDQXdELGVBQWEsQ0FBQzFELFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLG9DQUEvQjtBQUNBeUQsZUFBYSxDQUFDMUQsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsNkJBQS9CO0FBQ0FnRSx5QkFBdUIsR0FBRyxDQUExQjtBQUNBQyxnQ0FBOEIsR0FBRyxDQUFqQztBQUNILENBUkQsQzs7Ozs7Ozs7Ozs7QUM1REEsdUMiLCJmaWxlIjoidG94aW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBmaWx0ZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gnKVswXSxcclxuICAgIGZpbHRlckNoZWNrYm94Qm94ZXMgPSBmaWx0ZXJDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2NoZWNrYm94LWJveCcpLFxyXG4gICAgZmlsdGVyQ2hlY2tib3hTbW9rZSA9IGZpbHRlckNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtc21va2UnKVswXSxcclxuICAgIGZpbHRlckNoZWNrYm94UGV0cyA9IGZpbHRlckNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtcGV0cycpWzBdLFxyXG4gICAgZmlsdGVyQ2hlY2tib3hHdWVzdHMgPSBmaWx0ZXJDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2NoZWNrYm94LWd1ZXN0cycpWzBdO1xyXG5cclxuXHJcbmZpbHRlckNoZWNrYm94U21va2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmaWx0ZXJDaGVja2JveEZvcm0uZmlsdGVyQ2hlY2tib3hTbW9rZS5jaGVja2VkKSB7XHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hTbW9rZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2NoZWNrYm94LWJveCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hGb3JtLmZpbHRlckNoZWNrYm94U21va2UuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJDaGVja2JveFNtb2tlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJDaGVja2JveEZvcm0uZmlsdGVyQ2hlY2tib3hTbW9rZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyQ2hlY2tib3hQZXRzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZmlsdGVyQ2hlY2tib3hGb3JtLmZpbHRlckNoZWNrYm94UGV0cy5jaGVja2VkKSB7XHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hQZXRzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJDaGVja2JveEZvcm0uZmlsdGVyQ2hlY2tib3hQZXRzLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hQZXRzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJDaGVja2JveEZvcm0uZmlsdGVyQ2hlY2tib3hQZXRzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5maWx0ZXJDaGVja2JveEd1ZXN0cy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGZpbHRlckNoZWNrYm94Rm9ybS5maWx0ZXJDaGVja2JveEd1ZXN0cy5jaGVja2VkKSB7XHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hHdWVzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19jaGVja2JveC1ib3gnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgIGZpbHRlckNoZWNrYm94Rm9ybS5maWx0ZXJDaGVja2JveEd1ZXN0cy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlckNoZWNrYm94R3Vlc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJDaGVja2JveEZvcm0uZmlsdGVyQ2hlY2tib3hHdWVzdHMuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94JylbMF07XHJcbmNvbnN0IGZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyID0gZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1zd2l0Y2hlcicpWzBdO1xyXG5jb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hDaGVja2JveGVzID0gZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1jaGVja2JveGVzJylbMF07XHJcblxyXG5jb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCb3hlcyA9IGZpbHRlckV4cGFuZGFibGVDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2NoZWNrYm94LWJveCcpO1xyXG5jb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCcmVha2Zhc3QgPSBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LWJyZWFrZmFzdCcpWzBdO1xyXG5jb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUYWJsZSA9IGZpbHRlckV4cGFuZGFibGVDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtdGFibGUnKVswXTtcclxuY29uc3QgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hhaXIgPSBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LWNoYWlyJylbMF07XHJcbmNvbnN0IGZpbHRlckV4cGFuZGFibGVDaGVja2JveEJlZCA9IGZpbHRlckV4cGFuZGFibGVDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYmVkJylbMF07XHJcbmNvbnN0IGZpbHRlckV4cGFuZGFibGVDaGVja2JveFR2ID0gZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC10dicpWzBdO1xyXG5jb25zdCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTaGFtcG9vID0gZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1zaGFtcG9vJylbMF07XHJcbmxldCBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlclR1cm5lciA9IDA7XHJcblxyXG5cclxuXHJcbmZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTd2l0Y2hlclR1cm5lciA9PSAwKSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hlY2tib3hlcy5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfX2d1ZXN0c19leHBhbmRlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyVHVybmVyID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hlY2tib3hlcy5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfX2d1ZXN0c19leHBhbmRlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveFN3aXRjaGVyVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QnJlYWtmYXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Rm9ybS5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCcmVha2Zhc3QuY2hlY2tlZCkge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEJyZWFrZmFzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveEJyZWFrZmFzdC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEJyZWFrZmFzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveEJyZWFrZmFzdC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZpbHRlckV4cGFuZGFibGVDaGVja2JveENoYWlyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Rm9ybS5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hDaGFpci5jaGVja2VkKSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hhaXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LWJveCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Rm9ybS5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hDaGFpci5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveENoYWlyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1ib3gnKVswXS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0uZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Q2hhaXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hCZWQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveEJlZC5jaGVja2VkKSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QmVkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1ib3gnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0uZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QmVkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QmVkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1ib3gnKVswXS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0uZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94QmVkLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94VHYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveFR2LmNoZWNrZWQpIHtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveFR2LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94VHYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LWJveCcpWzBdLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Rm9ybS5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUdi5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZpbHRlckV4cGFuZGFibGVDaGVja2JveFNoYW1wb28ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveFNoYW1wb28uY2hlY2tlZCkge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveFNoYW1wb28uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19leHBhbmRhYmxlLWNoZWNrYm94LWJveCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94Rm9ybS5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hTaGFtcG9vLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94U2hhbXBvby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveFNoYW1wb28uY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5maWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUYWJsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0uZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94VGFibGUuY2hlY2tlZCkge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveFRhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZXhwYW5kYWJsZS1jaGVja2JveC1ib3gnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGFibGVDaGVja2JveEZvcm0uZmlsdGVyRXhwYW5kYWJsZUNoZWNrYm94VGFibGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hUYWJsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3gtYm94JylbMF0uY2xhc3NMaXN0LmFkZCgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICBmaWx0ZXJFeHBhbmRhYmxlQ2hlY2tib3hGb3JtLmZpbHRlckV4cGFuZGFibGVDaGVja2JveFRhYmxlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyJylbMF0sXHJcbiAgICBmaWx0ZXJEcm9wZG93blN3aXRjaGVyID0gZmlsdGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fZ3Vlc3RzLXN3aXRjaGVyJylbMF0sXHJcblxyXG4gICAgZmlsdGVyRHJvcGRvd25HdWVzdHMgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19kcm9wZG93bi1ndWVzdHMnKVswXSxcclxuICAgIGZpbHRlckRyb3Bkb3duR3Vlc3RzQXJyb3cgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19ndWVzdHMtYXJyb3cnKVswXSxcclxuXHJcbiAgICBmaWx0ZXJBZHVsdHNQbHVzZXMgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19hZHVsdHMtcGx1cycpLFxyXG4gICAgZmlsdGVyQWR1bHRzTWludXNlcyA9IGZpbHRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2FkdWx0cy1taW51cycpLFxyXG4gICAgZmlsdGVyQWR1bHRzVmFsdWUgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19hZHVsdHMtdmFsdWUnKVswXSxcclxuICAgIGZpbHRlckFkdWx0c051bWJlcnMgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19hZHVsdHMtbnVtYmVyJyksXHJcblxyXG4gICAgZmlsdGVyQmFiaWVzUGx1c2UgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19iYWJpZXMtcGx1cycpWzBdLFxyXG4gICAgZmlsdGVyQmFiaWVzTWludXNlID0gZmlsdGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fYmFiaWVzLW1pbnVzJylbMF0sXHJcbiAgICBmaWx0ZXJCYWJpZXNWYWx1ZSA9IGZpbHRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX2JhYmllcy12YWx1ZScpWzBdLFxyXG4gICAgZmlsdGVyQmFiaWVzTnVtYmVyID0gZmlsdGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fYmFiaWVzLW51bWJlcicpWzBdLFxyXG5cclxuXHJcbiAgICBmaWx0ZXJTdWJtaXQgPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19zdWJtaXQnKVswXSxcclxuICAgIGZpbHRlclJlZnJlc2ggPSBmaWx0ZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19yZWZyZXNoJylbMF07XHJcblxyXG5sZXQgZmlsdGVyVHVybmVyID0gMDtcclxuXHJcbmZpbHRlckRyb3Bkb3duU3dpdGNoZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmaWx0ZXJUdXJuZXIgPT0gMCkge1xyXG4gICAgICAgIGZpbHRlckRyb3Bkb3duR3Vlc3RzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9fZ3Vlc3RzX2V4cGFuZGVkJyk7XHJcbiAgICAgICAgZmlsdGVyRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfdXAnO1xyXG4gICAgICAgIGZpbHRlclR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlckRyb3Bkb3duR3Vlc3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9fZ3Vlc3RzX2V4cGFuZGVkJyk7XHJcbiAgICAgICAgZmlsdGVyRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICAgICAgZmlsdGVyVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJBZHVsdHNQbHVzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZpbHRlckFkdWx0c1BsdXNlc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gb25DaGFuZ2VEcm9wZG93bihmaWx0ZXJBZHVsdHNOdW1iZXJzW2ldLCAncGx1cycsICfQs9C+0YHRgtGMJywgJ9Cz0L7RgdGC0Y8nLCAn0LPQvtGB0YLQtdC5Jyk7XHJcblxyXG4gICAgICAgIGZpbHRlckFkdWx0c1ZhbHVlLmlubmVySFRNTCA9IGlucHV0VmFsdWU7XHJcbiAgICAgICAgZmlsdGVyUmVmcmVzaC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfX3JlZnJlc2hfYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCAhPSAnJyAmJiBmaWx0ZXJCYWJpZXNWYWx1ZS5pbm5lckhUTUwuaW5kZXhPZignLCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9ICcsICcgKyBmaWx0ZXJCYWJpZXNWYWx1ZS5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckFkdWx0c01pbnVzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZpbHRlckFkdWx0c01pbnVzZXNbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IG9uQ2hhbmdlRHJvcGRvd24oZmlsdGVyQWR1bHRzTnVtYmVyc1tpXSwgJ21pbnVzJywgJ9Cz0L7RgdGC0YwnLCAn0LPQvtGB0YLRjycsICfQs9C+0YHRgtC10LknKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckFkdWx0c1ZhbHVlLmlubmVySFRNTCA9IGlucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIGZpbHRlclJlZnJlc2guY2xhc3NMaXN0LmFkZCgnZmlsdGVyX19yZWZyZXNoX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyQmFiaWVzVmFsdWUuaW5uZXJIVE1MICE9ICcnICYmIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTC5pbmRleE9mKCcsJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9ICcsICcgKyBmaWx0ZXJCYWJpZXNWYWx1ZS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9PSAnJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJBZHVsdHNWYWx1ZS5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LPQvtGB0YLQtdC5JztcclxuICAgICAgICAgICAgZmlsdGVyUmVmcmVzaC5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfX3JlZnJlc2hfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyQWR1bHRzVmFsdWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9IGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTC5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyQmFiaWVzUGx1c2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBvbkNoYW5nZURyb3Bkb3duKGZpbHRlckJhYmllc051bWJlciwgJ3BsdXMnLCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG5cclxuICAgIGlmIChmaWx0ZXJBZHVsdHNWYWx1ZS5pbm5lckhUTUwgPT0gJ9Ch0LrQvtC70YzQutC+INCz0L7RgdGC0LXQuScgfHwgZmlsdGVyQWR1bHRzVmFsdWUuaW5uZXJIVE1MID09ICcnKSB7XHJcblxyXG4gICAgICAgIGZpbHRlckFkdWx0c1ZhbHVlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9IGlucHV0VmFsdWU7XHJcbiAgICAgICAgZmlsdGVyUmVmcmVzaC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfX3JlZnJlc2hfYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9ICcsICcgKyBpbnB1dFZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZmlsdGVyQmFiaWVzTWludXNlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IG9uQ2hhbmdlRHJvcGRvd24oZmlsdGVyQmFiaWVzTnVtYmVyLCAnbWludXMnLCAn0LzQu9Cw0LTQtdC90LXRhicsICfQvNC70LDQtNC10L3RhtCwJywgJ9C80LvQsNC00LXQvdGG0LXQsicpO1xyXG5cclxuICAgIGlmIChwYXJzZUludChpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGlmIChmaWx0ZXJBZHVsdHNWYWx1ZS5pbm5lckhUTUwgPT0gJ9Ch0LrQvtC70YzQutC+INCz0L7RgdGC0LXQuScpIHtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlckFkdWx0c1ZhbHVlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBmaWx0ZXJCYWJpZXNWYWx1ZS5pbm5lckhUTUwgPSBpbnB1dFZhbHVlO1xyXG4gICAgICAgICAgICBmaWx0ZXJSZWZyZXNoLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9fcmVmcmVzaF9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckFkdWx0c1ZhbHVlLmlubmVySFRNTCA9PSAnJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJCYWJpZXNWYWx1ZS5pbm5lckhUTUwgPSBpbnB1dFZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9ICcsICcgKyBpbnB1dFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyQmFiaWVzVmFsdWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgaWYgKGZpbHRlckFkdWx0c1ZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckFkdWx0c1ZhbHVlID09ICfQodC60L7Qu9GM0LrQviDQs9C+0YHRgtC10LknO1xyXG4gICAgICAgICAgICBmaWx0ZXJSZWZyZXNoLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9fcmVmcmVzaF9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZpbHRlclJlZnJlc2gub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQWR1bHRzTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZpbHRlckFkdWx0c051bWJlcnNbaV0uaW5uZXJIVE1MID0gMDtcclxuICAgICAgICBmaWx0ZXJCYWJpZXNOdW1iZXIuaW5uZXJIVE1MID0gMDtcclxuICAgIH1cclxuICAgIGZpbHRlckJhYmllc1ZhbHVlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZmlsdGVyQWR1bHRzVmFsdWUuaW5uZXJIVE1MID0gJ9Ch0LrQvtC70YzQutC+INCz0L7RgdGC0LXQuSc7XHJcbiAgICBmaWx0ZXJSZWZyZXNoLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9fcmVmcmVzaF9hY3RpdmUnKTtcclxufVxyXG5cclxuZmlsdGVyU3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaWx0ZXJEcm9wZG93bkd1ZXN0cy5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfX2d1ZXN0c19leHBhbmRlZCcpO1xyXG4gICAgZmlsdGVyRHJvcGRvd25HdWVzdHNBcnJvdy5pbm5lckhUTUwgPSAna2V5Ym9hcmRfYXJyb3dfZG93bic7XHJcbiAgICBmaWx0ZXJUdXJuZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uQ2hhbmdlRHJvcGRvd24obnVtYmVyRWwsIHNpZ24sIG9uZSwgdHdvLCB0d2VsdmUpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShudW1iZXJFbC5jbGFzc05hbWUpO1xyXG4gICAgbGV0IG51bWJlciA9IHBhcnNlSW50KG51bWJlckVsLmlubmVySFRNTCksXHJcbiAgICAgICAgYW1vdW50ID0gMCxcclxuICAgICAgICBzdHJpbmcgPSB0d2VsdmU7XHJcblxyXG4gICAgaWYgKHNpZ24gPT0gJ3BsdXMnKSB7XHJcbiAgICAgICAgbnVtYmVyRWwuaW5uZXJIVE1MID0gKytudW1iZXI7XHJcbiAgICB9IGVsc2UgaWYgKHNpZ24gPSAnbWludXMnICYmIG51bWJlciA+IDApIHtcclxuICAgICAgICBudW1iZXJFbC5pbm5lckhUTUwgPSAtLW51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhbW91bnQgKz0gcGFyc2VJbnQobnVtYmVyc1tpXS5pbm5lckhUTUwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbW91bnQgPCAxMSB8fCBhbW91bnQgPiAyMCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFtb3VudC50b1N0cmluZygpW2Ftb3VudC50b1N0cmluZygpLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gb25lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdHdvO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyaW5nID0gdHdlbHZlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhbW91bnQgKyAnICcgKyBzdHJpbmc7XHJcblxyXG59XHJcbiIsImNvbnN0IGZpbHRlclJpY2hDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fcmljaC1jaGVja2JveCcpWzBdLFxyXG4gICAgZmlsdGVyQ29ycmlkb3JUcnMgPSBmaWx0ZXJSaWNoQ2hlY2tib3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19jb3JyaWRvci10cicpLFxyXG4gICAgZmlsdGVySGVscGVyVHJzID0gZmlsdGVyUmljaENoZWNrYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9faGVscGVyLXRyJyksXHJcbiAgICBmaWx0ZXJSaWNoQ2hlY2tib3hDb3JyaWRvciA9IGZpbHRlclJpY2hDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX3JpY2gtY2hlY2tib3gtY29ycmlkb3InKVswXSxcclxuICAgIGZpbHRlclJpY2hDaGVja2JveEhlbHBlciA9IGZpbHRlclJpY2hDaGVja2JveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX3JpY2gtY2hlY2tib3gtaGVscGVyJylbMF07XHJcblxyXG5cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQ29ycmlkb3JUcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZpbHRlckNvcnJpZG9yVHJzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlckNvcnJpZG9yVHJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fcmljaC1jaGVja2JveC1jb3JyaWRvcicpWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJDb3JyaWRvclRyc1tpXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlcl9fcmljaC1jaGVja2JveC1jb3JyaWRvcicpWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveENvcnJpZG9yLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckhlbHBlclRycy5sZW5ndGg7IGkrKykge1xyXG4gICAgZmlsdGVySGVscGVyVHJzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlckhlbHBlclRyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWx0ZXJfX3JpY2gtY2hlY2tib3gtaGVscGVyJylbMF0pIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlclJpY2hDaGVja2JveEZvcm0uZmlsdGVyUmljaENoZWNrYm94SGVscGVyLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveEhlbHBlci5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyUmljaENoZWNrYm94Rm9ybS5maWx0ZXJSaWNoQ2hlY2tib3hIZWxwZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyUmljaENoZWNrYm94SGVscGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcl9jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveEhlbHBlci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVySGVscGVyVHJzW2ldLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsdGVyX19yaWNoLWNoZWNrYm94LWhlbHBlcicpWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJSaWNoQ2hlY2tib3hGb3JtLmZpbHRlclJpY2hDaGVja2JveEhlbHBlci5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJSaWNoQ2hlY2tib3hIZWxwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveEZvcm0uZmlsdGVyUmljaENoZWNrYm94SGVscGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclJpY2hDaGVja2JveEhlbHBlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyUmljaENoZWNrYm94Rm9ybS5maWx0ZXJSaWNoQ2hlY2tib3hIZWxwZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL19fZ3Vlc3RzL2ZpbHRlcl9fZ3Vlc3RzLmpzJztcclxuaW1wb3J0ICcuL19fY2hlY2tib3gvZmlsdGVyX19jaGVja2JveC5qcyc7XHJcbmltcG9ydCAnLi9fX3JpY2gtY2hlY2tib3gvZmlsdGVyX19yaWNoLWNoZWNrYm94LmpzJztcclxuaW1wb3J0ICcuL19fZXhwYW5kYWJsZS1jaGVja2JveC9maWx0ZXJfX2V4cGFuZGFibGUtY2hlY2tib3guanMnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9mb250cy9mb250cy5jc3MnO1xyXG5pbXBvcnQgJy4vcm9vdC5jc3MnO1xyXG4vL2ltcG9ydCAnLi9zZWFyY2gtcm9vbS1jYXJkL3NlYXJjaC1yb29tLWNhcmQuanMnO1xyXG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlci5qcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXSxcclxuICAgIGxvZ28gPSBoZWFkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19sb2dvJylbMF0sXHJcbiAgICBoZWFkZXJCdXR0b25zID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fYnV0dG9ucycpWzBdLFxyXG4gICAgaGVhZGVyRW50ZXJCdXR0b24gPSBoZWFkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19lbnRlcicpWzBdLFxyXG4gICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uID0gaGVhZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fcmVnaXN0cmF0aW9uJylbMF0sXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdLFxyXG4gICAgc2VhcmNoUm9vbUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcm9vbS1jYXJkJylbMF0sXHJcbiAgICBjb250ZW50U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRfX3NwYW4nKVswXSxcclxuICAgIGVudGVyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VudGVyLWNhcmQnKVswXTtcclxubGV0IGhlYWRlckVudGVyQnV0dG9uVHVybmVyID0gMCxcclxuICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDA7XHJcblxyXG5oZWFkZXJFbnRlckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGhlYWRlckVudGVyQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudF90aGVtZV9lbnRlcicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID09IDApIHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyRW50ZXJCdXR0b25UdXJuZXIgPSAwO1xyXG4gICAgICAgIGhlYWRlclJlZ2lzdHJhdGlvbkJ1dHRvblR1cm5lciA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF90aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1dHRvbnNfdGhlbWVfZW50ZXInKTtcclxuICAgICAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICAgICAgaGVhZGVyUmVnaXN0cmF0aW9uQnV0dG9uVHVybmVyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxubG9nby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X3RoZW1lX2VudGVyJyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfdGhlbWVfc2VhcmNoJyk7XHJcbiAgICBoZWFkZXJCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnV0dG9uc190aGVtZV9yZWdpc3RyYXRpb24nKTtcclxuICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXR0b25zX3RoZW1lX2VudGVyJyk7XHJcbiAgICBoZWFkZXJFbnRlckJ1dHRvblR1cm5lciA9IDA7XHJcbiAgICBoZWFkZXJSZWdpc3RyYXRpb25CdXR0b25UdXJuZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=