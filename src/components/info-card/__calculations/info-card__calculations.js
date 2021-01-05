import './info-card__calculations.css';
import localData from '../info-card.js';

const infoCards = document.getElementsByClassName('info-card');

for (let i = 0; i < infoCards.length; i++) {
    const infoCardCalculations = infoCards[i].getElementsByClassName('info-card__calculations')[0];
    const infoCardAmountOfDays = infoCards[i].getElementsByClassName('info-card__amount-of-days')[0];
    const infoCardMoneyResult = infoCards[i].getElementsByClassName('info-card__money-result')[0];
    const infoCardTotal = infoCards[i].getElementsByClassName('info-card__total')[0];
    const infoCardMoney = infoCardCalculations.getElementsByClassName('info-card__money')[0];
    const infoCardDiscountResult = infoCardCalculations.getElementsByClassName('info-card__discount-result');
    const infoCardDiscount = infoCardCalculations.getElementsByClassName('info-card__discount')[0];
    let days = 0;

    if (localData) {
        if (localData.startDate && localData.endDate) {
            days = Math.ceil((new Date(localData.endDate) - new Date(localData.startDate))) / 86400000;
            infoCardAmountOfDays.innerHTML = days;
            infoCardMoneyResult.innerHTML = localData.price * days;
            alert(+infoCardDiscount.innerHTML);
            infoCardTotal.innerHTML = (localData.price * days - infoCardDiscount.innerHTML + (+infoCardDiscountResult[0].innerHTML) + (+infoCardDiscountResult[1].innerHTML)).toLocaleString('ru-RU');
        }
    }
}
