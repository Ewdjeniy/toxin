import "./drop-dates.css";

const dateDrops = document.getElementsByClassName('drop-dates');

for (let i = 0; i < dateDrops.length; i++) {
    const dropDatesArrivalSwither = dateDrops[i].getElementsByClassName('drop-dates__arrival-switcher')[0];
    const dropDatesDepartureSwither = dateDrops[i].getElementsByClassName('drop-dates__departure-switcher')[0];
    const dropDatesArrivalValue = dateDrops[i].getElementsByClassName('drop-dates__arrival-value')[0];
    const dropDatesDepartureValue = dateDrops[i].getElementsByClassName('drop-dates__departure-value')[0];
    const calendarInpt = dateDrops[i].getElementsByClassName('drop-dates__calendar')[0];
    const dropDatesArrows = dateDrops[i].getElementsByClassName('drop-dates__arrow');
    const datepicker = $(calendarInpt).datepicker().data('datepicker');
    let turner = 0;
    const switchCalendar = function() {
        if (turner == 0) {
            calendarInpt.focus();
            turner = 1;
            for (let j = 0; j < dropDatesArrows.length; j++) {
                dropDatesArrows[j].innerHTML = 'keyboard_arrow_up';
            }
        } else {
            calendarInpt.blur();
            turner = 0;
            for (let j = 0; j < dropDatesArrows.length; j++) {
                dropDatesArrows[j].innerHTML = 'keyboard_arrow_down';
            }
        }
    };
    
    dropDatesArrivalSwither.onclick = switchCalendar;
    dropDatesDepartureSwither.onclick = switchCalendar;
    
    calendarInpt.addEventListener('hide', function() {
        turner = 0;
        for (let j = 0; j < dropDatesArrows.length; j++) {
                dropDatesArrows[j].innerHTML = 'keyboard_arrow_down';
            }
    });
    
    calendarInpt.oninput = function() {
        const dates = calendarInpt.value.split('-');
        
        if (calendarInpt.value != '' && dates.length == 1) {
            dropDatesArrivalValue.innerHTML = dates[0];
            dropDatesDepartureValue.innerHTML = 'ДД.ММ.ГГГГ';
        } else if (dates.length > 1) {
            dropDatesArrivalValue.innerHTML = dates[0];
            dropDatesDepartureValue.innerHTML = dates[1];
        } else {
            dropDatesArrivalValue.innerHTML = 'ДД.ММ.ГГГГ';
            dropDatesDepartureValue.innerHTML = 'ДД.ММ.ГГГГ';
        }
    }
}