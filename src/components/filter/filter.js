import './filter.css';
import data from './data.json';
import room350 from './images/room350.jpg';
import room352 from './images/room352.jpg';
import room444 from './images/room444.jpg';
import room450 from './images/room450.jpg';
import room666 from './images/room666.jpg';
import room678 from './images/room678.jpg';
import room740 from './images/room740.jpg';
import room840 from './images/room840.jpg';
import room856 from './images/room856.jpg';
import room888 from './images/room888.jpg';
import room980 from './images/room980.jpg';
import room982 from './images/room982.jpg';
import sub1Room888 from './images/sub1Room888.jpg';
import sub2Room888 from './images/sub2Room888.jpg';
import hangPaginationHandlers from '../pagination/pagination.js';

const filters = document.getElementsByClassName('filter');
const localData = getDataFromLocalStorage('toxin');
let rooms = data.rooms.slice();

for (let i = 0; i < filters.length; i++) {
    const screen = filters[i].getElementsByClassName('filter__result')[0];
    const pagination = filters[i].getElementsByClassName('pagination')[0];
    const roomsOnPage = 12;
    let pagesAmount = Math.ceil(rooms.length / roomsOnPage);
    const filterSmoke = filters[i].getElementsByClassName('filter__smoke')[0];
    const filterPets = filters[i].getElementsByClassName('filter__pets')[0];
    const filterGuests = filters[i].getElementsByClassName('filter__guests')[0];
    const filterWideCorridor = filters[i].getElementsByClassName('filter__wide-corridor')[0];
    const filterSmokeCheckBx = filterSmoke.getElementsByClassName('checkbox__hidden')[0];
    const filterPetsCheckBx = filterPets.getElementsByClassName('checkbox__hidden')[0];
    const filterGuestsCheckBx = filterGuests.getElementsByClassName('checkbox__hidden')[0];
    const filterWideCorridorCheckBx = filterWideCorridor.getElementsByClassName('rich-checkbox__input')[0];
    const dropGuests = filters[i].getElementsByClassName('drop-guests')[0];
    let dropGuestsHandler = dropGuests.getElementsByClassName('dropdown__handler')[0];
    const dropGuestsValue = dropGuests.getElementsByClassName('dropdown__value')[0];
    const dropGuestsPluses = dropGuests.getElementsByClassName('dropdown__plus');
    const dropGuestsMinuses = dropGuests.getElementsByClassName('dropdown__minus');
    const dropConveniences = filters[i].getElementsByClassName('drop-conveniences')[0];
    const dropConveniencesHandler = dropConveniences.getElementsByClassName('dropdown__handler')[0];
    const dropConveniencesValue = dropConveniences.getElementsByClassName('dropdown__value')[0];
    const dropConveniencesPluses = dropConveniences.getElementsByClassName('dropdown__plus');
    const dropConveniencesMinuses = dropConveniences.getElementsByClassName('dropdown__minus');
    const calendar = filters[i].getElementsByClassName('calendar')[0];
    const datepicker = $(calendar).datepicker().data('datepicker');
    const dropdownValues = filters[i].getElementsByClassName('drop-guests')[0].getElementsByClassName('dropdown__input-value');
    let local = {"startDate": "null", "endDate": "null", "guestsAmount": "[0,0,0]"};
    const calendarAltField = filters[i].getElementsByClassName('calendar__altField')[0];
    const showPage = function () {

        const pageNum = +pagination.getElementsByClassName('pagination__page_active')[0].innerHTML;
        const roomsOnPage = 12;

        const start = (pageNum - 1) * roomsOnPage;
        const end = start + roomsOnPage;
        const notes = rooms.slice(start, end);
        screen.innerHTML = '';
        for (let note of notes) {
            const div = document.createElement('div');
            let divHtml = '';
            div.className = 'room';
            let luxury = note.luxury ? 'люкс' : '';
            divHtml =
                '<div class="carousel">' +
                '<div class="carousel__window">';
            for (let j = 0; j < note.images.length; j++) {
                divHtml += '<img class="carousel__img" src="' + note.images[j] + '">';
            }
            divHtml +=
                '<a href="room-details.html">' +
                '</a>' +
                '</div>' +
                '<div class="carousel__buttons">' +
                '<div class="carousel__switcher">';
            for (let j = 0; j < note.images.length; j++) {
                if (j != 0) {
                    divHtml += '<span class="carousel__circle"></span>';
                } else {
                    divHtml += '<span class="carousel__circle carousel__circle_active"></span>';
                }
            }
            divHtml +=
                '</div>' +
                '<div class="carousel__arrow-right-wrapper"><span class="carousel__arrow-right">keyboard_arrow_left</span></div>' +
                '<div class="carousel__arrow-left-wrapper"><span class="carousel__arrow-left">keyboard_arrow_left</span></div>' +
                '</div>' +
                '</div>' +
                '<div class="room__about-room">' +
                '<div class="room__info"><span class="room__badge-number">№ </span><span class="room__room-number">' + note.number + '</span><span class="room__room-category"> ' + luxury + '</span>' +
                '</div>' +
                '<div class="room__money-for-room"><span class="room__money">' + parseFloat(note.price).toLocaleString('ru-RU') + '</span>₽<span class="room__time"> в сутки</span></div>' +
                '</div>' +
                '<div class="room__rate-wrapper">' +
                '<div class="rate rate_star_' + note.stars + '">' +
                '<span class="rate__star1"></span>' +
                '<span class="rate__star2"></span>' +
                '<span class="rate__star3"></span>' +
                '<span class="rate__star4"></span>' +
                '<span class="rate__star5"></span></div>' +
                '<div class="room__comments-indicator"><span class="room__comments-amount">' + note.reviews + '</span><span> Отзывов</span></div>' +
                '</div>';
            div.innerHTML = divHtml;
            screen.append(div);
            div.getElementsByClassName('carousel__window')[0].onclick = function() {
                local.startDate = calendarAltField.value.split('-')[0];
                local.endDate = calendarAltField.value.split('-')[1];
                local.guestsAmount = dropGuestsHandler.value;
                for (let key in note) {
                    local[key] = note[key]; 
                } 
                localStorage.toxin = JSON.stringify(local);
                this.getElementsByTagName('a')[0].click();
            }
        }
        setCarouselsHandler();
    };
    const setPagination = function (pagesAmount) {
        const paginationPages = pagination.getElementsByClassName('pagination__pages')[0];

        if (pagesAmount > 4) {
            paginationPages.innerHTML =
                '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' +
                '<span class="pagination__page pagination__page_active">1</span>' +
                '<span class="pagination__page">2</span>' +
                '<span class="pagination__page">3</span>' +
                '<span class="pagination__ellipsis">...</span>' +
                '<span class="pagination__page-last">' + pagesAmount + '</span>' +
                '<span class="pagination__arrow-forward">arrow_forward</span>';
        } else if (pagesAmount > 1) {
            paginationPages.innerHTML =
                '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' +
                '<span class="pagination__page pagination__page_active">1</span>';
            let j = 1;
            while (j < pagesAmount - 1) {
                paginationPages.innerHTML += '<span class="pagination__page">' + (++j) + '</span>';
            }
            paginationPages.innerHTML +=
                '<span class="pagination__page-last">' + pagesAmount + '</span>' +
                '<span class="pagination__arrow-forward">arrow_forward</span>';
        } else {
            paginationPages.innerHTML =
                '<span class="pagination__arrow-back pagination__arrow_hidden">arrow_back</span>' +
                '<span class="pagination__page-last pagination__page_active">1</span>' +
                '<span class="pagination__arrow-forward pagination__arrow_hidden">arrow_forward</span>';
        }
        hangPaginationHandlers();
    };
    const setCarouselsHandler = function () {
        const carousels = filters[i].getElementsByClassName('carousel');

        for (let j = 0; j < carousels.length; j++) {
            const carouselArrowRightWrapper = carousels[j].getElementsByClassName('carousel__arrow-right-wrapper')[0];
            const carouselArrowLeftWrapper = carousels[j].getElementsByClassName('carousel__arrow-left-wrapper')[0];
            const carouselWindow = carousels[j].getElementsByClassName('carousel__window')[0];
            const carouselImg = carousels[j].getElementsByClassName('carousel__img')[0];
            const carouselCircles = carousels[j].getElementsByClassName('carousel__circle');
            let carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
            let carouselCoef = 0;

            carouselArrowRightWrapper.onclick = function () {
                if (carouselCoef < carousels[j].getElementsByClassName('carousel__img').length - 1) {
                    carouselWindow.style.marginLeft = (-1) * parseFloat(getComputedStyle(carouselImg).width) * (++carouselCoef) + "px";
                    carouselCircleActive.classList.remove('carousel__circle_active');
                    carouselCircles[carouselCoef].classList.add('carousel__circle_active');
                    carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
                }
            }
            carouselArrowLeftWrapper.onclick = function () {
                if (carouselCoef > 0) {
                    carouselWindow.style.marginLeft = (-1) * parseFloat(getComputedStyle(carouselImg).width) * (--carouselCoef) + "px";
                    carouselCircleActive.classList.remove('carousel__circle_active');
                    carouselCircles[carouselCoef].classList.add('carousel__circle_active');
                    carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
                }
            }
            for (let n = 0; n < carouselCircles.length; n++) {
                carouselCircles[n].onclick = function () {
                    carouselCoef = n;
                    carouselWindow.style.marginLeft = (-1) * parseFloat(getComputedStyle(carouselImg).width) * carouselCoef + "px";
                    carouselCircleActive.classList.remove('carousel__circle_active');
                    carouselCircles[n].classList.add('carousel__circle_active');
                    carouselCircleActive = carousels[j].getElementsByClassName('carousel__circle_active')[0];
                }
            }
        }
    };
    const setFilters = function (smoke, pets, guests, wideCorridor, bedRooms, beds, bathRooms) {
        rooms = data.rooms.slice();

        if (smoke) {
            for (let j = 0; j < rooms.length; j++) {
                if (!rooms[j].smoke) {
                    rooms.splice(j, 1);
                    j = -1;
                }
            }
        }
        if (pets) {
            for (let j = 0; j < rooms.length; j++) {
                if (!rooms[j].pets) {
                    rooms.splice(j, 1);
                    j = -1;
                }
            }
        }
        if (guests) {
            for (let j = 0; j < rooms.length; j++) {
                if (!rooms[j].guests) {
                    rooms.splice(j, 1);
                    j = -1;
                }
            }
        }
        if (wideCorridor) {
            for (let j = 0; j < rooms.length; j++) {
                if (!rooms[j].wideCorridor) {
                    rooms.splice(j, 1);
                    j = -1;
                }
            }
        }
        for (let j = 0; j < rooms.length; j++) {
            if (rooms[j].bedRooms < bedRooms) {
                rooms.splice(j, 1);
                j = -1;
            }
        }
        for (let j = 0; j < rooms.length; j++) {
            if (rooms[j].beds < beds) {
                rooms.splice(j, 1);
                j = -1;
            }
        }
        for (let j = 0; j < rooms.length; j++) {
            if (rooms[j].bathRooms < bathRooms) {
                rooms.splice(j, 1);
                j = -1;
            }
        }
        pagesAmount = Math.ceil(rooms.length / roomsOnPage);
        setPagination(pagesAmount);
        hangPaginationHandlers();
        showPage();
    };

    setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    pagination.onchange = showPage;

    filterSmoke.onchange = function () {
        setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    }
    filterPets.onchange = function () {
        setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    }
    filterGuests.onchange = function () {
        setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    }
    filterWideCorridor.onchange = function () {
        setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    }

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
        for (let j = 0; j < dropdownValues.length; j++) {
            dropdownValues[j].innerHTML = JSON.parse(localData.guestsAmount)[j];
        }
        dropGuestsHandler.value = localData.guestsAmount;
        showValue();
    }

    dropGuests.onchange = showValue;

    dropConveniences.onchange = function () {
        const bedRoomsAmount = JSON.parse(dropConveniencesHandler.value)[0],
            bedsAmount = JSON.parse(dropConveniencesHandler.value)[1],
            bathRoomsAmount = JSON.parse(dropConveniencesHandler.value)[2];

        let bedRoomsValue = bedRoomsAmount > 0 ? bedRoomsAmount + ' ' + returnWordSuffix(bedRoomsAmount, 'спальня', 'спальни', 'спален') : '';
        let bedsValue = bedsAmount > 0 ? bedsAmount + ' ' + returnWordSuffix(bedsAmount, 'кровать', 'кровати', 'кроватей') : '';
        let bathRoomsValue = bathRoomsAmount > 0 ? bathRoomsAmount + ' ' + returnWordSuffix(bathRoomsAmount, 'ванная комната', 'ванных комнаты', 'ванных комнат') : '';

        if (bedRoomsValue != '' && (bedsValue != '' || bathRoomsValue != '')) {
            bedRoomsValue += ', ';
        }
        if (bedsValue != '' && bathRoomsValue != '') {
            bedsValue += ', ';
        }

        dropConveniencesValue.innerHTML = (bedRoomsValue + bedsValue + bathRoomsValue) != '' ? bedRoomsValue + bedsValue + bathRoomsValue : 'Какие удобства?';
        setFilters(filterSmokeCheckBx.checked, filterPetsCheckBx.checked, filterGuestsCheckBx.checked, filterWideCorridorCheckBx.checked, JSON.parse(dropConveniencesHandler.value)[0], JSON.parse(dropConveniencesHandler.value)[1], JSON.parse(dropConveniencesHandler.value)[2]);
    }
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
