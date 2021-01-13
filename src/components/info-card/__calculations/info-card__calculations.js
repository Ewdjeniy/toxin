import './info-card__calculations.css';
import localData from '../../../pages/room-details/room-details.js';

const infoCards = document.getElementsByClassName('info-card');

for (let i = 0; i < infoCards.length; i++) {
    const infoCardCalculations = infoCards[i].getElementsByClassName('info-card__calculations')[0];
    const infoCardAmountOfDays = infoCards[i].getElementsByClassName('info-card__amount-of-days')[0];
    const infoCardMoneyResult = infoCards[i].getElementsByClassName('info-card__money-result')[0];
    const infoCardTotal = infoCards[i].getElementsByClassName('info-card__total')[0];
    const infoCardMoney = infoCardCalculations.getElementsByClassName('info-card__money')[0];
    const infoCardDiscountResult = infoCardCalculations.getElementsByClassName('info-card__discount-result');
    const infoCardDiscount = infoCardCalculations.getElementsByClassName('info-card__discount')[0];
    const dateDrops = infoCards[i].getElementsByClassName('drop-dates')[0];
    const calendarAltField = infoCards[i].getElementsByClassName('calendar__altField')[0];
    const calculatePrice = function(startDate, endDate) {
        days = (startDate && endDate) ? Math.ceil((new Date(endDate) - new Date(startDate))) / 86400000 : 1;
        priceOnDays = localData.price * days;
        infoCardAmountOfDays.innerHTML = days;
        infoCardMoneyResult.innerHTML = (priceOnDays).toLocaleString('ru-RU');
        infoCardTotal.innerHTML = (localData.price * days - infoCardDiscount.innerHTML + (+infoCardDiscountResult[0].innerHTML) + (+infoCardDiscountResult[1].innerHTML)).toLocaleString('ru-RU');
    };
    let days = 0;
    let priceOnDays = 0;

    dateDrops.onchange = function () {
        calculatePrice(calendarAltField.value.split('-')[0], calendarAltField.value.split('-')[1]);
    }

    if (localData) {
        calculatePrice(localData.startDate, localData.endDate);
    }
}

function getDataFromLocalStorage(localStorageKey) {
    let result = null;
    if (localStorage[localStorageKey]) {
        result = JSON.parse(localStorage[localStorageKey]);
        localStorage.removeItem(localStorageKey);
    }
    return result;
}