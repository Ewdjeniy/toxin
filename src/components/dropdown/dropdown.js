import "./dropdown.css";

const drops = document.getElementsByClassName('dropdown');

for (let i = 0; i < drops.length; i++) {
    const dropSwitcher = drops[i].getElementsByClassName('dropdown__switcher')[0],
        dropArrow = drops[i].getElementsByClassName('dropdown__arrow')[0],
        dropHandler = drops[i].getElementsByClassName('dropdown__handler')[0],
        dropValue = drops[i].getElementsByClassName('dropdown__value')[0],
        dropInputValues = drops[i].getElementsByClassName('dropdown__input-value'),
        dropPluses = drops[i].getElementsByClassName('dropdown__plus'),
        dropMinuses = drops[i].getElementsByClassName('dropdown__minus');
    const dropRefresh = drops[i].getElementsByClassName('button')[0];
    const dropSubmit = drops[i].getElementsByClassName('button')[1];
    let dropTurner = 0,
        dropHandlerValuesArray = [];
    
    dropSwitcher.onclick = function() {
        if (dropTurner == 0) {
            drops[i].classList.add('dropdown_expanded');
            dropArrow.innerHTML = 'keyboard_arrow_up';
            dropTurner = 1;
        } else {
            drops[i].classList.remove('dropdown_expanded');
            dropArrow.innerHTML = 'keyboard_arrow_down';
            dropTurner = 0;
        }
    }
    
    for (let j = 0; j < dropInputValues.length; j++) {
        dropHandlerValuesArray.push(parseInt(dropInputValues[j].innerHTML));
        dropHandler.value = JSON.stringify(dropHandlerValuesArray);
    }
    
    for (let j = 0; j < dropPluses.length; j++) {
        dropPluses[j].onclick = function() {
            dropHandlerValuesArray = JSON.parse(dropHandler.value);
            const result = parseInt(dropInputValues[j].innerHTML) + 1;
            
            dropInputValues[j].innerHTML = result;
            dropHandlerValuesArray[j] = result;
            dropHandler.value = JSON.stringify(dropHandlerValuesArray);
            dropMinuses[j].classList.remove('dropdown__minus_inactive');
            if (dropHandler.value != '[0,0,0]') {
                drops[i].classList.add('dropdown__refresh_active'); 
            } else {
                drops[i].classList.remove('dropdown__refresh_active'); 
            }
            let event = new Event("change");
            drops[i].dispatchEvent(event);
        }
    }
    
    for (let j = 0; j < dropMinuses.length; j++) {
        dropMinuses[j].onclick = function() {
            dropHandlerValuesArray = JSON.parse(dropHandler.value);
            const result = parseInt(dropInputValues[j].innerHTML) > 0 ? parseInt(dropInputValues[j].innerHTML) - 1 : 0;
            
            dropInputValues[j].innerHTML = result;
            dropHandlerValuesArray[j] = result;
            dropHandler.value = JSON.stringify(dropHandlerValuesArray);
            
            if (result == 0) {
                this.classList.add('dropdown__minus_inactive');
            }
            
            if (dropHandler.value != '[0,0,0]') {
                drops[i].classList.add('dropdown__refresh_active'); 
            } else {
                drops[i].classList.remove('dropdown__refresh_active'); 
            }
            let event = new Event("change");
            drops[i].dispatchEvent(event);
        }
    }
    
    dropRefresh.onclick = function() {
        dropHandler.value = '[0,0,0]';
        for (let j = 0; j < dropInputValues.length; j++) {
            dropInputValues[j].innerHTML = '0';
        }
        drops[i].classList.remove('dropdown__refresh_active');
        let event = new Event("change");
        drops[i].dispatchEvent(event);
    }
    
    dropSubmit.onclick = function() {
        drops[i].classList.remove('dropdown_expanded');
        dropArrow.innerHTML = 'keyboard_arrow_down';
        dropTurner = 0;
    }
}