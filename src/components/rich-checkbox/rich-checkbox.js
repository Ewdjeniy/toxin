import './rich-checkbox.css';

const richCheckboxes = document.getElementsByClassName('rich-checkbox');


function hangRichCheckboxesHandler() {
    const richCheckboxes = document.getElementsByClassName('rich-checkbox');
    
    for (let i = 0; i < richCheckboxes.length; i++) {
        if (richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].checked) {
            richCheckboxes[i].classList.add('rich-checkbox_checked');
        } else {
            richCheckboxes[i].classList.remove('rich-checkbox_checked');
        }
        richCheckboxes[i].onclick = function () {
            if (richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].checked) {
                richCheckboxes[i].classList.add('rich-checkbox_checked');
            } else {
                richCheckboxes[i].classList.remove('rich-checkbox_checked');
            }
            richCheckboxes[i].getElementsByClassName('rich-checkbox__input')[0].click();
            let event = new Event("change");
            richCheckboxes[i].dispatchEvent(event);
        }
    }
}
hangRichCheckboxesHandler();




export default hangRichCheckboxesHandler;