import './checkbox.css';

const checkboxes = document.getElementsByClassName('checkbox');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
        if (checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked) {
            checkboxes[i].classList.remove('checkbox_checked');
            checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked = false;
        } else {
            checkboxes[i].classList.add('checkbox_checked');
            checkboxes[i].getElementsByClassName('checkbox__hidden')[0].checked = true;
        }
        let event = new Event("change");
        checkboxes[i].dispatchEvent(event);
    }
}
