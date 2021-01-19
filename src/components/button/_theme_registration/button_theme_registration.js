const registrationButtons = document.getElementsByClassName('button_theme_registration');

for (let i = 0; i < registrationButtons.length; i++) {
    registrationButtons[i].onclick = function() {
        registrationButtons[i].getElementsByTagName('a')[0].click();
    }
}