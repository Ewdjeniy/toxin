import './filter.css';

const dropsConveniences = document.getElementsByClassName('drop-conveniences');

const test = localStorage.toxin;
localStorage.removeItem('toxin');

for (let i = 0; i < dropsConveniences.length; i++) {
    const dropConveniencesHandler = dropsConveniences[i].getElementsByClassName('dropdown__handler')[0],
        dropConveniencesValue = dropsConveniences[i].getElementsByClassName('dropdown__value')[0],
        dropConveniencesPluses = dropsConveniences[i].getElementsByClassName('dropdown__plus'),
        dropConveniencesMinuses = dropsConveniences[i].getElementsByClassName('dropdown__minus');

    dropsConveniences[i].onchange = function () {
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
