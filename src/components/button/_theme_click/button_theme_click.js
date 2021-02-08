const clickButtons = document.getElementsByClassName('button_theme_click');


function hangClickButtonsHandler() {
    for (let i = 0; i < clickButtons.length; i++) {
        clickButtons[i].addEventListener('click', function () {
            clickButtons[i].classList.add('button_theme_click_clicked');
            setTimeout(() => clickButtons[i].classList.remove('button_theme_click_clicked'), 290);
        });
    }
}

export default hangClickButtonsHandler;
