const searchRoomCard = document.getElementsByClassName('search-room-card')[0],
    searchRoomCardDropdownSwitcher = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests-switcher')[0],
    searchRoomCardDropdownGuests = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests')[0],
    searchRoomCardDropdownGuestsArrow = searchRoomCard.getElementsByClassName('search-room-card__dropdown-guests-arrow')[0],
    searchRoomCardPluses = searchRoomCard.getElementsByClassName('search-room-card__plus'),
    searchRoomCardMinuses = searchRoomCard.getElementsByClassName('search-room-card__minus'),
    searchRoomCardGuests = searchRoomCard.getElementsByClassName('search-room-card__guests')[0],
    searchRoomCardNumbers = searchRoomCard.getElementsByClassName('search-room-card__number'),
    searchRoomCardSubmit = searchRoomCard.getElementsByClassName('search-room-card__submit')[0],
    searchRoomCardRefresh = searchRoomCard.getElementsByClassName('search-room-card__refresh')[0];

let searchRoomCardTurner = 0;

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
}

for (let i = 0; i < searchRoomCardPluses.length; i++) {
    searchRoomCardPluses[i].onclick = function () {
        let number = parseInt(searchRoomCardNumbers[i].innerHTML);
        let guestsAmount = 0;

        searchRoomCardNumbers[i].innerHTML = ++number;
        for (let j = 0; j < searchRoomCardNumbers.length; j++) {
            guestsAmount += parseInt(searchRoomCardNumbers[j].innerHTML);
        }
        searchRoomCardGuests.innerHTML = guestsAmount + ' гостя';
        searchRoomCardRefresh.classList.add('search-room-card__refresh_active');
    }
}

for (let i = 0; i < searchRoomCardMinuses.length; i++) {
    searchRoomCardMinuses[i].onclick = function () {
        let number = parseInt(searchRoomCardNumbers[i].innerHTML);
        let guestsAmount = 0;
        if (number > 0) {
            searchRoomCardNumbers[i].innerHTML = --number;
            for (let j = 0; j < searchRoomCardNumbers.length; j++) {
                guestsAmount += parseInt(searchRoomCardNumbers[j].innerHTML);
            }
            if (guestsAmount > 0) {
                searchRoomCardGuests.innerHTML = guestsAmount + ' гостя';
            } else {
                searchRoomCardGuests.innerHTML = 'Сколько гостей';
                searchRoomCardRefresh.classList.remove('search-room-card__refresh_active');
            }
        }
    }
}

searchRoomCardRefresh.onclick = function () {
    for (let j = 0; j < searchRoomCardNumbers.length; j++) {
        searchRoomCardNumbers[j].innerHTML = 0;
    }
    searchRoomCardGuests.innerHTML = 'Сколько гостей';
    searchRoomCardRefresh.classList.remove('search-room-card__refresh_active');
}

searchRoomCardSubmit.onclick = function () {
    searchRoomCardDropdownGuests.classList.remove('search-room-card__dropdown-guests_expanded');
    searchRoomCardDropdownGuestsArrow.innerHTML = 'keyboard_arrow_down';
    searchRoomCardTurner = 0;
}
