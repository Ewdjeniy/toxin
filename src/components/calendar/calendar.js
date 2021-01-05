import './calendar.css';

const calendars = document.getElementsByClassName('calendar');

for (let i = 0; i < calendars.length; i++) {
    if (getComputedStyle(calendars[i]).display == 'none' || calendars[i].style.display == 'none') {
        calendars[i].style.display = 'block';
        calendars[i].style.position = 'absolute';
        calendars[i].style.zIndex = '-10000';
        calendars[i].style.color = 'transparent';
        calendars[i].style.backgroundColor = 'transparent';
        calendars[i].style.border = '0';
        calendars[i].style.outline = '0';
    }
    
    const altInput = document.createElement('input');
    altInput.type = 'hidden';
    altInput.className = 'calendar__altField';
    calendars[i].after(altInput);
    
    $(calendars[i]).datepicker({
        keyboardNav: false,
        multipleDatesSeparator: ' - ',
        minDate: new Date(),
        altField: $(altInput),
        altFieldDateFormat: 'yyyy,m,d',
        navTitles: {
            days: 'MM yyyy',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        monthsField: 'months',
        
        
        range: true,
        clearButton: true,
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        onShow: function () {
            calendarChangeView(i);
        },
        onHide: function(inst, animationCompleted){
            if (animationCompleted) {
                let hideEvent = new Event("hide");
                calendars[i].dispatchEvent(hideEvent);
            }
        },
        onSelect: function(formattedDate, date, inst) {
            calendarChangeView(i);
            activateButtons(i, date.length);
            let event = new Event("input");
            calendars[i].dispatchEvent(event);
            event = new Event("change");
            calendars[i].dispatchEvent(event);
        },
    });
}

function calendarChangeView(i) {
    const datepickers = document.getElementsByClassName('datepicker');
    const buttons = datepickers[i].getElementsByClassName('datepicker--buttons')[0];

    buttons.innerHTML = '<div class="datepicker--button calendar__refresh" data-action="clear">Очистить</div><div class="calendar__submit">Применить</div>';
}

function activateButtons(i, length) {
    const datepickers = document.getElementsByClassName('datepicker');
    const buttons = datepickers[i].getElementsByClassName('datepicker--buttons')[0],
          refreshButton = datepickers[i].getElementsByClassName('calendar__refresh')[0],
          submitButton = datepickers[i].getElementsByClassName('calendar__submit')[0];
    
    if (length == 0) {
        refreshButton.classList.remove('datepicker__button_active');
        submitButton.classList.remove('datepicker__button_active');
    } else if (length == 1) {
        refreshButton.classList.add('datepicker__button_active');
        submitButton.classList.remove('datepicker__button_active');
    } else {
        refreshButton.classList.add('datepicker__button_active');
        submitButton.classList.add('datepicker__button_active');
    }
}