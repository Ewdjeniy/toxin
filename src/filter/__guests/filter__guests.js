const filter = document.getElementsByClassName('filter')[0],
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

let filterTurner = 0;

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
}

for (let i = 0; i < filterAdultsPluses.length; i++) {
    filterAdultsPluses[i].onclick = function () {

        const inputValue = onChangeDropdown(filterAdultsNumbers[i], 'plus', 'гость', 'гостя', 'гостей');

        filterAdultsValue.innerHTML = inputValue;
        filterRefresh.classList.add('filter__refresh_active');
        if (filterBabiesValue.innerHTML != '' && filterBabiesValue.innerHTML.indexOf(',') == -1) {
            filterBabiesValue.innerHTML = ', ' + filterBabiesValue.innerHTML;
        }
    }
}

for (let i = 0; i < filterAdultsMinuses.length; i++) {
    filterAdultsMinuses[i].onclick = function () {

        const inputValue = onChangeDropdown(filterAdultsNumbers[i], 'minus', 'гость', 'гостя', 'гостей');

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
    }
}

filterBabiesPluse.onclick = function () {
    const inputValue = onChangeDropdown(filterBabiesNumber, 'plus', 'младенец', 'младенца', 'младенцев');

    if (filterAdultsValue.innerHTML == 'Сколько гостей' || filterAdultsValue.innerHTML == '') {

        filterAdultsValue.innerHTML = '';
        filterBabiesValue.innerHTML = inputValue;
        filterRefresh.classList.add('filter__refresh_active');
    } else {
        filterBabiesValue.innerHTML = ', ' + inputValue;
    }

}

filterBabiesMinuse.onclick = function () {

    const inputValue = onChangeDropdown(filterBabiesNumber, 'minus', 'младенец', 'младенца', 'младенцев');

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
}

filterRefresh.onclick = function () {
    for (let i = 0; i < filterAdultsNumbers.length; i++) {
        filterAdultsNumbers[i].innerHTML = 0;
        filterBabiesNumber.innerHTML = 0;
    }
    filterBabiesValue.innerHTML = '';
    filterAdultsValue.innerHTML = 'Сколько гостей';
    filterRefresh.classList.remove('filter__refresh_active');
}

filterSubmit.onclick = function () {
    filterDropdownGuests.classList.remove('filter__guests_expanded');
    filterDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
    filterTurner = 0;
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
