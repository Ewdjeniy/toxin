const dropsBeds = document.getElementsByClassName('drop-beds');

for (let i = 0; i < dropsBeds.length; i++) {
    const dropBedsSwitcher = dropsBeds[i].getElementsByClassName('drop-beds__switcher')[0],
        dropBedsArrow = dropsBeds[i].getElementsByClassName('drop-beds__arrow')[0],

        dropBedsAdultsValue = dropsBeds[i].getElementsByClassName('drop-beds__adults-value')[0],
        dropBedsAdultsNumbers = dropsBeds[i].getElementsByClassName('drop-beds__adults-number'),
        dropBedsAdultsPluses = dropsBeds[i].getElementsByClassName('drop-beds__adults-plus'),
        dropBedsAdultsMinuses = dropsBeds[i].getElementsByClassName('drop-beds__adults-minus'),

        dropBedsBabiesValue = dropsBeds[i].getElementsByClassName('drop-beds__babies-value')[0],
        dropBedsBabiesNumber = dropsBeds[i].getElementsByClassName('drop-beds__babies-number')[0],
        dropBedsBabiesPlus = dropsBeds[i].getElementsByClassName('drop-beds__babies-plus')[0],
        dropBedsBabiesMinus = dropsBeds[i].getElementsByClassName('drop-beds__babies-minus')[0],

        dropBedsComma = dropsBeds[i].getElementsByClassName('drop-beds__comma')[0],
        dropBedsRefresh = dropsBeds[i].getElementsByClassName('drop-beds__refresh')[0],
          dropBedsSubmit = dropsBeds[i].getElementsByClassName('drop-beds__submit')[0];
    let dropBedsTurner = 0;

    dropBedsSwitcher.onclick = function () {
        if (dropBedsTurner == 0) {
            dropsBeds[i].classList.add('drop-beds_expanded');
            dropBedsArrow.innerHTML = 'keyboard_arrow_up';
            dropBedsTurner = 1;
        } else {
            dropsBeds[i].classList.remove('drop-beds_expanded');
            dropBedsArrow.innerHTML = 'keyboard_arrow_down';
            dropBedsTurner = 0;
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//    for (let j = 0; j < dropBedsAdultsPluses.length; j++) {
//        dropBedsAdultsPluses[j].onclick = function () {
//
//            const inputValue = onChangeDropdown(dropBedsAdultsNumbers[j], 'plus', 'гость', 'гостя', 'гостей');
//
//            dropBedsAdultsValue.innerHTML = inputValue;
//            dropBedsRefresh.classList.add('drop-beds__refresh_active');
//            if (dropBedsBabiesValue.innerHTML != '') {
//                dropBedsComma.style.display = 'inline';
//            }
//        }
//    }
//
//    for (let j = 0; j < dropBedsAdultsMinuses.length; j++) {
//        dropBedsAdultsMinuses[j].onclick = function () {
//
//            const inputValue = onChangeDropdown(dropBedsAdultsNumbers[j], 'minus', 'гость', 'гостя', 'гостей');
//
//            if (parseInt(inputValue)) {
//                dropBedsAdultsValue.innerHTML = inputValue;
//                dropBedsRefresh.classList.add('drop-beds__refresh_active');
//                if (dropBedsBabiesValue.innerHTML != '') {
//                    dropBedsComma.style.display = 'inline';
//                }
//            } else if (dropBedsBabiesValue.innerHTML == '') {
//                dropBedsAdultsValue.innerHTML = 'Сколько гостей';
//                dropBedsComma.style.display = 'none';
//                dropBedsRefresh.classList.remove('drop-beds__refresh_active');
//            } else {
//                dropBedsComma.style.display = 'none';
//                dropBedsAdultsValue.innerHTML = '';
//            }
//        }
//    }
//
//    dropBedsBabiesPlus.onclick = function () {
//        const inputValue = onChangeDropdown(dropBedsBabiesNumber, 'plus', 'младенец', 'младенца', 'младенцев');
//
//        if (dropBedsAdultsValue.innerHTML == 'Сколько гостей' || dropBedsAdultsValue.innerHTML == '') {
//            dropBedsAdultsValue.innerHTML = '';
//            dropBedsBabiesValue.innerHTML = inputValue;
//            dropBedsRefresh.classList.add('drop-beds__refresh_active');
//        } else {
//            dropBedsBabiesValue.innerHTML = inputValue;
//            dropBedsComma.style.display = 'inline';
//        }
//
//    }
//
//    dropBedsBabiesMinus.onclick = function () {
//
//        const inputValue = onChangeDropdown(dropBedsBabiesNumber, 'minus', 'младенец', 'младенца', 'младенцев');
//
//        if (parseInt(inputValue)) {
//            if (dropBedsAdultsValue.innerHTML == 'Сколько гостей' || dropBedsAdultsValue.innerHTML == '') {
//                dropBedsAdultsValue.innerHTML = '';
//                dropBedsBabiesValue.innerHTML = inputValue;
//                dropBedsRefresh.classList.add('drop-beds__refresh_active');
//            } else {
//                dropBedsBabiesValue.innerHTML = inputValue;
//                dropBedsComma.style.display = 'inline';
//            }
//        } else {
//            dropBedsBabiesValue.innerHTML = '';
//            if (dropBedsAdultsValue.innerHTML == '') {
//                dropBedsAdultsValue.innerHTML = 'Сколько гостей';
//                dropBedsRefresh.classList.remove('drop-beds__refresh_active');
//            } else {
//                dropBedsComma.style.display = 'none';
//            }
//        }
//    }
//
//    dropBedsRefresh.onclick = function () {
//        for (let j = 0; j < dropBedsAdultsNumbers.length; j++) {
//            dropBedsAdultsNumbers[j].innerHTML = 0;
//        }
//        dropBedsBabiesNumber.innerHTML = 0;
//        dropBedsBabiesValue.innerHTML = '';
//        dropBedsComma.style.display = 'none';
//        dropBedsAdultsValue.innerHTML = 'Сколько гостей';
//        dropBedsRefresh.classList.remove('drop-beds__refresh_active');
//    }
//
//    dropBedsSubmit.onclick = function () {
//        dropsBeds[i].classList.remove('drop-beds_expanded');
//        dropBedsArrow.innerHTML = 'keyboard_arrow_down';
//        dropBedsTurner = 0;
//    }
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
