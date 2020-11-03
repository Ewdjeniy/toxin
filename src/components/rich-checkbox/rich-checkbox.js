const richCheckboxes = document.getElementsByClassName('rich-checkbox');

for (let i = 0; i < richCheckboxes.length; i++) {
    richCheckboxes[i].onclick = function () {
        const richCheckboxInput = richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0];

        if (richCheckboxInput.checked) {
            richCheckboxes[i].classList.remove('rich-checkbox_checked');
            richCheckboxInput.checked = false;
        } else {
            richCheckboxes[i].classList.add('rich-checkbox_checked');
            richCheckboxInput.checked = true;
        }
    }
}
