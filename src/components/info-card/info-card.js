import './info-card.css';

const localData = getDataFromLocalStorage('toxin');
const infoCards = document.getElementsByClassName('info-card');

for (let i = 0; i < infoCards.length; i++) {
    const calendar = infoCards[i].getElementsByClassName('calendar')[0];
    const datepicker = $(calendar).datepicker().data('datepicker');
    const dropdownValues = infoCards[i].getElementsByClassName('drop-guests')[0].getElementsByClassName('dropdown__input-value');
    const dropGuests = infoCards[i].getElementsByClassName('drop-guests')[0];
    let dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0];
    const dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0];
    const dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus');
    const dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus');
    const infoCardRoomNumber = infoCards[i].getElementsByClassName('info-card__room-number')[0];
    const infoCardRoomCategory = infoCards[i].getElementsByClassName('info-card__room-category')[0];
    const infoCardMoney = infoCards[i].getElementsByClassName('info-card__money');
    const showValue = function () {
        const adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1];
        const babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

        if (adultsAmount > 0 && babiesAmount > 0) {
            dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
        } else if (adultsAmount > 0 && babiesAmount == 0) {
            dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
        } else if (adultsAmount == 0 && babiesAmount > 0) {
            dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
        } else {
            dropGuestsValue.innerHTML = 'Сколько гостей?';
        }
    };
    
    
    if (localData) {
        if (localData.startDate && !localData.endDate) {
            datepicker.selectDate(new Date(localData.startDate));
        } else if (localData.startDate && localData.endDate) {
            datepicker.selectDate([new Date(localData.startDate), new Date(localData.endDate)]);
        }
        for (let i = 0; i < dropdownValues.length; i++) {
            dropdownValues[i].innerHTML = JSON.parse(localData.guestsAmount)[i];
        }
        infoCardRoomNumber.innerHTML = localData.number;
        infoCardRoomCategory.innerHTML = localData.luxury ? 'люкс' : '';
        for (let i = 0; i < infoCardMoney.length; i++) {
            infoCardMoney[i].innerHTML = parseFloat(localData.price).toLocaleString('ru-RU');
        }
        dropGuestsHandler.value = localData.guestsAmount;
        showValue();
    }
    dropGuests.onchange = showValue;
}

function getDataFromLocalStorage(localStorageKey) {
    let result = null;
    if (localStorage[localStorageKey]) {
        result = JSON.parse(localStorage[localStorageKey]);
    }
    return result;
}

function returnWordSuffix(amount, one, two, twelve) {
    let string = twelve;

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

    return string;
}



export default localData;