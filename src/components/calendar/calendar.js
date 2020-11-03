const calendars = document.getElementsByClassName('calendar');
//new Date(year, month, date, hours, minutes, seconds, ms)
var ths = new Date(2019, 7, 9, 2, 3, 4, 567);

for (let i = 0; i < calendars.length; i++) {
    $(calendars[i]).datepicker({
        //inline: true,
        keyboardNav: false,
        offset: 10,
        moveToOtherMonthsOnSelect: false,
        moveToOtherYearsOnSelect: false,
        multipleDatesSeparator: ' - ',
        minDate: new Date(),
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
        onSelect: function(formattedDate, date, inst) {
            activateButtons(i, date.length);
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