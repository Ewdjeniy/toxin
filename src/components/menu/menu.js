import './menu.css';
import './_open/menu_open.css';

const menus = document.getElementsByClassName('menu');

for (let i = 0; i < menus.length; i++) {
    const menuButton = menus[i].getElementsByClassName('menu__button')[0];
    const menuList = menus[i].getElementsByClassName('menu__list')[0];
    let turner = 0;
    
    menuButton.onclick = function() {
        if (turner == 0) {
            menus[i].classList.add('menu_open');
            turner = 1;
        } else {
            menus[i].classList.remove('menu_open');
            turner = 0;
        }
    }
}