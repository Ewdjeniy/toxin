import './room-details.css';
import setLikesHandler from '../../components/like/like.js';

const roomDetails = document.getElementsByClassName('room-details')[0];
let localData = '';
if (roomDetails) {
    console.log(localStorage.toxin);
    
    localData = getDataFromLocalStorage('toxin');
    let local = localData ? localData : {"startDate": "", "endDate": "", "guestsAmount": "[0,0,0]"};
    const roomInfo = roomDetails.getElementsByClassName('room-details__info')[0];
    const roomComments = roomDetails.getElementsByClassName('room-details__comments')[0];
    const textsWithPicture = roomDetails.getElementsByClassName('text-with-picture');
    const createComment = function(name, surname, date, comment, likes, avatar) {
        const div = document.createElement('div');
        const now = new Date();
        date = new Date(date);
        let  commentTime = '';
        let timeDifference = now - date;
        
        if (timeDifference >= 31536000000) {
            timeDifference = Math.floor(timeDifference / 31536000000);
            commentTime = timeDifference == 1 ? 'год назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'год', 'года', 'лет') + ' назад';
        } else if (timeDifference >= 2592000000) {
            timeDifference = Math.floor(timeDifference / 2592000000);
            commentTime = timeDifference == 1 ? 'месяц назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'месяц', 'месяца', 'месяцев') + ' назад';
        } else if (timeDifference >= 604800000) {
            timeDifference = Math.floor(timeDifference / 604800000);
            commentTime = timeDifference == 1 ? 'неделю назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'неделя', 'недели', 'недель') + ' назад';
        } else if (timeDifference >= 86400000) {
            timeDifference = Math.floor(timeDifference / 86400000);
            commentTime = timeDifference == 1 ? 'день назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'день', 'дня', 'дней') + ' назад';
        } else if (timeDifference >= 3600000) {
            timeDifference = Math.floor(timeDifference / 3600000);
            commentTime = timeDifference == 1 ? 'час назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'час', 'часа', 'часов') + ' назад';
        } else if (timeDifference >= 60000) {
            timeDifference = Math.floor(timeDifference / 60000);
            commentTime = timeDifference == 1 ? 'минуту назад' : timeDifference + ' ' + returnWordSuffix(timeDifference, 'минуту', 'минуты', 'минут') + ' назад';
        } else {
            commentTime = 'только что';
        }
        
        div.className = 'comment';
        div.innerHTML = 
            '<div class="comment__author-avatar" style=""></div>'+
            '<div class="comment__author-info">'+
                '<span class="comment__author-name">'+ name +'</span>'+
                '<span class="comment__author-surname">'+ ' ' +surname +'</span><br>'+
                '<span>'+ commentTime +'</span>'+
            '</div>'+
            '<div class="like">'+
                '<span class="like__btn"></span>'+
                '<span class="like__number">'+ likes +'</span>'+
            '</div>'+
            '<p class="comment__text">'+ comment +'</p>';
        roomComments.append(div);
        setLikesHandler();
        if (avatar) {
            const commentAuthorAvatar = div.getElementsByClassName('comment__author-avatar')[0];
            commentAuthorAvatar.style.backgroundImage = 'url(' + avatar + ')';
        }
    };
    const createRule = function(rule) {
        const bulletListUl = roomDetails.getElementsByClassName('bullet-list__ul')[0];
        const li = document.createElement('li');
        li.className = 'li';
        li.innerHTML = 
            '<span class="li__marker"></span>'+
            '<span class="li__text">'+ rule +'</span>';
        bulletListUl.prepend(li);
    };

    window.onbeforeunload = function(e) {
        localStorage.toxin = JSON.stringify(local);
    };
    
    if (localData && localData.cosiness) {
        textsWithPicture[textsWithPicture.length - 1].classList.add('text-with-picture_border-bottom');

        const textWithPicture = document.createElement('div');
        textWithPicture.className = 'text-with-picture';
        textWithPicture.innerHTML =
            '<span class="text-with-picture__icon">whatshot</span>' +
            '<div class="text-with-picture__description">' +
            '<span class="text-with-picture__header">Уют</span>' +
            '<span>Номер оснащен камином</span>' +
            '</div>';
        roomInfo.append(textWithPicture);
    }
    for (let i = 0; i < localData.comments.length; i++) {
        createComment(localData.comments[i].name, localData.comments[i].surname, localData.comments[i].date, localData.comments[i].comment, localData.comments[i].likes, localData.comments[i].avatar);
    }
    
    if (localData && !localData.smoke) {
        createRule('Не курить');
    }
    if (localData && !localData.guests) {
        createRule('Без вечеринок и мероприятий');
    }
    if (localData && !localData.pets) {
        createRule('Нельзя с питомцами');
    }
}




function getDataFromLocalStorage(localStorageKey) {
    let result = null;
    if (localStorage[localStorageKey]) {
        result = JSON.parse(localStorage[localStorageKey]);
        localStorage.removeItem(localStorageKey);
    }
    return result;
}

function returnWordSuffix(amount, one, two, twelve) {
    let string = twelve;

    if (amount < 11 || amount > 20) {

        switch (amount.toString()[amount.toString().length - 1]) {
            case '1':
                string = one;
                break;
            case '2':
                string = two;
                break;
            case '3':
                string = two;
                break;
            case '4':
                string = two;
                break;

        }
    } else {
        string = twelve;
    }

    return string;
}




export default localData;