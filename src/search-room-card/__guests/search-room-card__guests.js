const searchRoomCardGuestsGuests = document.getElementsByClassName('search-room-card__guests')[0],
    searchRoomCardGuestsDropdownSwitcher = searchRoomCardGuests.getElementsByClassName('search-room-card__guests-switcher')[0],

    searchRoomCardGuestsDropdownGuests = searchRoomCardGuests.getElementsByClassName('search-room-card__dropdown-guests')[0],
    searchRoomCardGuestsDropdownGuestsArrow = searchRoomCardGuests.getElementsByClassName('search-room-card__guests-arrow')[0],

    searchRoomCardGuestsAdultsPluses = searchRoomCardGuests.getElementsByClassName('search-room-card__adults-plus'),
    searchRoomCardGuestsAdultsMinuses = searchRoomCardGuests.getElementsByClassName('search-room-card__adults-minus'),
    searchRoomCardGuestsAdultsValue = searchRoomCardGuests.getElementsByClassName('search-room-card__adults-value')[0],
    searchRoomCardGuestsAdultsNumbers = searchRoomCardGuests.getElementsByClassName('search-room-card__adults-number'),

    searchRoomCardGuestsBabiesPluse = searchRoomCardGuests.getElementsByClassName('search-room-card__babies-plus')[0],
    searchRoomCardGuestsBabiesMinuse = searchRoomCardGuests.getElementsByClassName('search-room-card__babies-minus')[0],
    searchRoomCardGuestsBabiesValue = searchRoomCardGuests.getElementsByClassName('search-room-card__babies-value')[0],
    searchRoomCardGuestsBabiesNumber = searchRoomCardGuests.getElementsByClassName('search-room-card__babies-number')[0],


    searchRoomCardGuestsSubmit = searchRoomCardGuests.getElementsByClassName('search-room-card__submit')[0],
    searchRoomCardGuestsRefresh = searchRoomCardGuests.getElementsByClassName('search-room-card__refresh')[0];

let searchRoomCardGuestsTurner = 0;

searchRoomCardGuestsDropdownSwitcher.onclick = function () {
    if (searchRoomCardGuestsTurner == 0) {
        searchRoomCardGuestsDropdownGuests.classList.add('search-room-card__guests_expanded');
        searchRoomCardGuestsDropdownGuestsArrow.innerHTML = 'keyboard_arrow_up';
        searchRoomCardGuestsTurner = 1;
    } else {
        searchRoomCardGuestsDropdownGuests.classList.remove('search-room-card__guests_expanded');
        searchRoomCardGuestsDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
        searchRoomCardGuestsTurner = 0;
    }
}

for (let i = 0; i < searchRoomCardGuestsAdultsPluses.length; i++) {
    searchRoomCardGuestsAdultsPluses[i].onclick = function () {

        const inputValue = onChangeDropdown(searchRoomCardGuestsAdultsNumbers[i], 'plus', 'гость', 'гостя', 'гостей');

        searchRoomCardGuestsAdultsValue.innerHTML = inputValue;
        searchRoomCardGuestsRefresh.classList.add('search-room-card__refresh_active');
        if (searchRoomCardGuestsBabiesValue.innerHTML != '' && searchRoomCardGuestsBabiesValue.innerHTML.indexOf(',') == -1) {
            searchRoomCardGuestsBabiesValue.innerHTML = ', ' + searchRoomCardGuestsBabiesValue.innerHTML;
        }
    }
}

for (let i = 0; i < searchRoomCardGuestsAdultsMinuses.length; i++) {
    searchRoomCardGuestsAdultsMinuses[i].onclick = function () {

        const inputValue = onChangeDropdown(searchRoomCardGuestsAdultsNumbers[i], 'minus', 'гость', 'гостя', 'гостей');

        if (parseInt(inputValue)) {
            searchRoomCardGuestsAdultsValue.innerHTML = inputValue;
            searchRoomCardGuestsRefresh.classList.add('search-room-card__refresh_active');
            if (searchRoomCardGuestsBabiesValue.innerHTML != '' && searchRoomCardGuestsBabiesValue.innerHTML.indexOf(',') == -1) {
                searchRoomCardGuestsBabiesValue.innerHTML = ', ' + searchRoomCardGuestsBabiesValue.innerHTML;
            }
        } else if (searchRoomCardGuestsBabiesValue.innerHTML == '') {
            searchRoomCardGuestsAdultsValue.innerHTML = 'Сколько гостей';
            searchRoomCardGuestsRefresh.classList.remove('search-room-card__refresh_active');
        } else {
            searchRoomCardGuestsAdultsValue.innerHTML = '';
            searchRoomCardGuestsBabiesValue.innerHTML = searchRoomCardGuestsBabiesValue.innerHTML.split(',')[1];
        }
    }
}

searchRoomCardGuestsBabiesPluse.onclick = function () {
    const inputValue = onChangeDropdown(searchRoomCardGuestsBabiesNumber, 'plus', 'младенец', 'младенца', 'младенцев');

    if (searchRoomCardGuestsAdultsValue.innerHTML == 'Сколько гостей' || searchRoomCardGuestsAdultsValue.innerHTML == '') {

        searchRoomCardGuestsAdultsValue.innerHTML = '';
        searchRoomCardGuestsBabiesValue.innerHTML = inputValue;
        searchRoomCardGuestsRefresh.classList.add('search-room-card__refresh_active');
    } else {
        searchRoomCardGuestsBabiesValue.innerHTML = ', ' + inputValue;
    }

}

searchRoomCardGuestsBabiesMinuse.onclick = function () {

    const inputValue = onChangeDropdown(searchRoomCardGuestsBabiesNumber, 'minus', 'младенец', 'младенца', 'младенцев');

    if (parseInt(inputValue)) {
        if (searchRoomCardGuestsAdultsValue.innerHTML == 'Сколько гостей') {

            searchRoomCardGuestsAdultsValue.innerHTML = '';
            searchRoomCardGuestsBabiesValue.innerHTML = inputValue;
            searchRoomCardGuestsRefresh.classList.add('search-room-card__refresh_active');
        } else if (searchRoomCardGuestsAdultsValue.innerHTML == '') {
            searchRoomCardGuestsBabiesValue.innerHTML = inputValue;
        } else {
            searchRoomCardGuestsBabiesValue.innerHTML = ', ' + inputValue;
        }
    } else {
        searchRoomCardGuestsBabiesValue.innerHTML = '';
        if (searchRoomCardGuestsAdultsValue == '') {
            searchRoomCardGuestsAdultsValue == 'Сколько гостей';
            searchRoomCardGuestsRefresh.classList.remove('search-room-card__refresh_active');
        }
    }
}

searchRoomCardGuestsRefresh.onclick = function () {
    for (let i = 0; i < searchRoomCardGuestsAdultsNumbers.length; i++) {
        searchRoomCardGuestsAdultsNumbers[i].innerHTML = 0;
        searchRoomCardGuestsBabiesNumber.innerHTML = 0;
    }
    searchRoomCardGuestsBabiesValue.innerHTML = '';
    searchRoomCardGuestsAdultsValue.innerHTML = 'Сколько гостей';
    searchRoomCardGuestsRefresh.classList.remove('search-room-card__refresh_active');
}

searchRoomCardGuestsSubmit.onclick = function () {
    searchRoomCardGuestsDropdownGuests.classList.remove('search-room-card__guests_expanded');
    searchRoomCardGuestsDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
    searchRoomCardGuestsTurner = 0;
}






function onChangeDropdown(numberEl, sign, one, two, twelve) {
    'use strict';

    const numbers = document.getElementsByClassName(numberEl.className);
    let number = parseInt(numberEl.innerHTML),
        amount = 0,
        string = twelve;

    if (sign == 'plus') {
        numberEl.innerHTML = ++number;
    } else if (sign = 'minus' && number > 0) {
        numberEl.innerHTML = --number;
    }

    for (let i = 0; i < numbers.length; i++) {
        amount += parseInt(numbers[i].innerHTML);
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
