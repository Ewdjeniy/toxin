import './checkbox.css';

function hangCheckboxesHandler() {
    const checkboxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked) {
            checkboxes[i].classList.add('checkbox_checked');
        } else {
            checkboxes[i].classList.remove('checkbox_checked');
        }
        checkboxes[i].onclick = function () {
            if (checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked) {
                checkboxes[i].classList.add('checkbox_checked');
            } else {
                checkboxes[i].classList.remove('checkbox_checked');
            }
            checkboxes[i].getElementsByClassName('checkbox__hidden')[0].click();
            let event = new Event("change");
            checkboxes[i].dispatchEvent(event);
        }
    }
}
hangCheckboxesHandler();



export default hangCheckboxesHandler;
