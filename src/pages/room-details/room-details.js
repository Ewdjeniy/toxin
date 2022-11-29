import './room-details.css';
import setLikesHandler from '../../components/like/like.js';

let localData = '';
let local = '';
const roomPictures = document.getElementsByClassName('room-pictures')[0];
const roomDetails = document.getElementsByClassName('room-details')[0];

if (roomPictures || roomDetails) {
    localData = localStorage.toxin ? JSON.parse(localStorage.toxin) : false;
    local = localData ? localData : {
        "startDate": "",
        "endDate": "",
        "guestsAmount": "[0,0,0]"
    };
}

if (roomPictures) {
    const roomImgs = roomPictures.getElementsByTagName('img');
    
    if (localData && localData.images) {
        for (let j = 0; j < roomImgs.length; j++) {
            roomImgs[j].src = localData.images[j];
        }
    }
}

if (roomDetails) {
    const roomInfo = roomDetails.getElementsByClassName('room-details__info')[0];
    const roomComments = roomDetails.getElementsByClassName('room-details__comments')[0];
    const textsWithPicture = roomDetails.getElementsByClassName('text-with-picture');
    const diagram = roomDetails.getElementsByClassName('diagram')[0];
    const diagramNumber = roomDetails.getElementsByClassName('diagram__number')[0];
    const diagramLabel = roomDetails.getElementsByClassName('diagram__label')[0];
    const diagramSatisfactorily = roomDetails.getElementsByClassName('diagram__satisfactorily')[0];
    const diagramGood = roomDetails.getElementsByClassName('diagram__good')[0];
    const diagramBest = roomDetails.getElementsByClassName('diagram__best')[0];
    const diagramCircles = roomDetails.getElementsByClassName('diagram__circles')[0];
    const roomDetailsCommentsAmount = roomDetails.getElementsByClassName('room-details__comments-amount')[0];
    const createComment = function (name, surname, date, comment, likes, avatar) {
        const div = document.createElement('div');
        const now = new Date();
        date = new Date(date);
        let commentTime = '';
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
            '<div class="comment__author-avatar" style=""></div>' +
            '<div class="comment__author-info">' +
            '<span class="comment__author-name">' + name + '</span>' +
            '<span class="comment__author-surname">' + ' ' + surname + '</span><br>' +
            '<span>' + commentTime + '</span>' +
            '</div>' +
            '<div class="like">' +
            '<span class="like__btn"></span>' +
            '<span class="like__number">' + likes + '</span>' +
            '</div>' +
            '<p class="comment__text">' + comment + '</p>';
        roomComments.append(div);
        setLikesHandler();
        if (avatar) {
            const commentAuthorAvatar = div.getElementsByClassName('comment__author-avatar')[0];
            commentAuthorAvatar.style.backgroundImage = 'url(' + avatar + ')';
        }
    };
    const createRule = function (rule) {
        const bulletListUl = roomDetails.getElementsByClassName('bullet-list__ul')[0];
        const li = document.createElement('li');
        li.className = 'li';
        li.innerHTML =
            '<span class="li__marker"></span>' +
            '<span class="li__text">' + rule + '</span>';
        bulletListUl.prepend(li);
    };
    
    if (localData && localData.votes) {
        const votes = localData.votes;
        let votesSum = 0;
        let procent = 0;
        const offset = 25;
        let whiteSegmentSize = 0;
        let strokeDasharrayVal = '';
        let strokeDashoffsetVal = 0;

        for (let key in votes) {
            votesSum = votesSum + (+votes[key]);
        }

        procent = votesSum / 100;

        strokeDasharrayVal = (votes.satisfactorily / procent - 0.5) + ' ' + (100 - votes.satisfactorily / procent + 0.5);
        diagramSatisfactorily.setAttribute('stroke-dasharray', strokeDasharrayVal);
        strokeDashoffsetVal = 100 - (votes.satisfactorily / procent - 0.5) + offset;
        diagramSatisfactorily.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);

        strokeDasharrayVal = (votes.good / procent - 0.5) + ' ' + (100 - votes.good / procent + 0.5);
        strokeDashoffsetVal = 100 - votes.satisfactorily / procent + offset;
        diagramGood.setAttribute('stroke-dasharray', strokeDasharrayVal);
        diagramGood.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
        strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent - 0.5) + offset;
        diagramGood.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
        diagramGood.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);

        strokeDasharrayVal = (votes.best / procent - 0.5) + ' ' + (100 - votes.best / procent + 0.5);
        strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent) + offset;
        diagramBest.setAttribute('stroke-dasharray', strokeDasharrayVal);
        diagramBest.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
        strokeDashoffsetVal = 100 - (votes.satisfactorily / procent + votes.good / procent + votes.best / procent - 0.5) + offset;
        diagramBest.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);
        diagramBest.nextElementSibling.setAttribute('stroke-dashoffset', strokeDashoffsetVal);

        if (votes.bad != 0) {
            diagramCircles.getElementsByClassName('diagram__segment')[0].setAttribute('stroke-width', '1');
        }
        
        diagramNumber.innerHTML = votesSum;
        diagramLabel.innerHTML = returnWordSuffix(votesSum, 'голос', 'голоса', 'голосов');
    }

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
    
    if (localData && localData.comments) {
        for (let i = 0; i < localData.comments.length; i++) {
            createComment(localData.comments[i].name, localData.comments[i].surname, localData.comments[i].date, localData.comments[i].comment, localData.comments[i].likes, localData.comments[i].avatar);
        }
        roomDetailsCommentsAmount.innerHTML = localData.comments.length + ' ' + returnWordSuffix(localData.comments.length, 'отзыв', 'отзыва', 'отзывов');
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
