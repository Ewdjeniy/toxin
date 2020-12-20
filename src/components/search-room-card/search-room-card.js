import "./search-room-card.css";

const dropsGuests = document.getElementsByClassName('drop-guests');
const searchRoomCard = document.getElementsByClassName('search-room-card')[0];
const searchRoomCardLink = searchRoomCard.getElementsByClassName('arrow-btn')[0];

searchRoomCardLink.onclick = function() {
    localStorage.toxin = 'test';
}

for (let i = 0; i < dropsGuests.length; i++) {
    const dropGuestsHandler = dropsGuests[i].getElementsByClassName('dropdown__handler')[0],
        dropGuestsValue = dropsGuests[i].getElementsByClassName('dropdown__value')[0],
        dropGuestsPluses = dropsGuests[i].getElementsByClassName('dropdown__plus'),
        dropGuestsMinuses = dropsGuests[i].getElementsByClassName('dropdown__minus');

    dropsGuests[i].onchange = function () {
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
