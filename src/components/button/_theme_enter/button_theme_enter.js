const enterButtons = document.getElementsByClassName('button_theme_enter');

for (let i = 0; i < enterButtons.length; i++) {
    enterButtons[i].onclick = function() {
        enterButtons[i].classList.add('button_theme_enter_clicked');
        enterButtons[i].getElementsByTagName('a')[0].click();
    }
}