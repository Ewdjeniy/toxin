import "./search-room-card.css";

const searchRoomCards = document.getElementsByClassName('search-room-card');

for (let i = 0; i < searchRoomCards.length; i++) {
    const dropGuests = searchRoomCards[i].getElementsByClassName('drop-guests')[0];
    const dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0],
        dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0],
        dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus'),
        dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus');
    const searchRoomCardLink = searchRoomCards[i].getElementsByClassName('arrow-btn')[0];
    const calendarAltField = searchRoomCards[i].getElementsByClassName('calendar__altField')[0];
    let data = {"startDate": "null", "endDate": "null", "guestsAmount": "[0,0,0]"};
    
    dropGuests.onchange = function () {
        const adultsAmount = JSON.parse(dropGuestsHandler.value)[0] + JSON.parse(dropGuestsHandler.value)[1],
            babiesAmount = JSON.parse(dropGuestsHandler.value)[2];

        if (adultsAmount > 0 && babiesAmount > 0) {
            dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей') + ', ' + babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
        } else if (adultsAmount > 0 && babiesAmount == 0) {
            dropGuestsValue.innerHTML = adultsAmount + ' ' + returnWordSuffix(adultsAmount, 'гость', 'гостя', 'гостей');
        } else if (adultsAmount == 0 && babiesAmount > 0) {
            dropGuestsValue.innerHTML = babiesAmount + ' ' + returnWordSuffix(babiesAmount, 'младенец', 'младенца', 'младенцев');
        } else {
            dropGuestsValue.innerHTML = 'Сколько гостей?';
        }
    }
    
    searchRoomCardLink.onclick = function() {
        data.startDate = calendarAltField.value.split('-')[0];
        data.endDate = calendarAltField.value.split('-')[1];
        data.guestsAmount = dropGuestsHandler.value;
        localStorage.toxin = JSON.stringify(data);
        searchRoomCardLink.getElementsByTagName('a')[0].click();
    }
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
