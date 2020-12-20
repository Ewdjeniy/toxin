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
    }
    
    for (let j = 0; j < dropPluses.length; j++) {
        dropPluses[j].addEventListener('click', function() {
            const result = parseInt(dropInputValues[j].innerHTML) + 1;
            
            dropInputValues[j].innerHTML = result;
            dropHandlerValuesArray[j] = result;
            dropHandler.value = JSON.stringify(dropHandlerValuesArray);
            let event = new Event("change");
            drops[i].dispatchEvent(event);
        });
    }
    
    for (let j = 0; j < dropMinuses.length; j++) {
        dropMinuses[j].addEventListener('click', function() {
            const result = parseInt(dropInputValues[j].innerHTML) > 0 ? parseInt(dropInputValues[j].innerHTML) - 1 : 0;
            
            dropInputValues[j].innerHTML = result;
            dropHandlerValuesArray[j] = result;
            dropHandler.value = JSON.stringify(dropHandlerValuesArray);
            let event = new Event("change");
            drops[i].dispatchEvent(event);
        });
    }
}