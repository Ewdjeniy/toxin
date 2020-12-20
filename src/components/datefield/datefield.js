import './datefield.css';

const dateFields = document.getElementsByClassName('datefield');

for (let i = 0; i < dateFields.length; i++) {
    const calendarInpt = dateFields[i].getElementsByClassName('datefield__calendar')[0];
    const datefieldArrow = dateFields[i].getElementsByClassName('datefield__arrow')[0];
    const datefieldValue = dateFields[i].getElementsByClassName('datefield__value')[0];
    let turner = 0;


    dateFields[i].onclick = function () {
        if (turner == 0) {
            calendarInpt.focus();
            turner = 1;
            datefieldArrow.innerHTML = 'keyboard_arrow_up';
        } else {
            calendarInpt.blur();
            turner = 0;
            datefieldArrow.innerHTML = 'keyboard_arrow_down';
        }
    }

    calendarInpt.addEventListener('hide', function () {
        turner = 0;
        datefieldArrow.innerHTML = 'keyboard_arrow_down';
    });
    
    calendarInpt.oninput = function() {        
        datefieldValue.innerHTML = calendarInpt.value;
    }
}
