import "./like.css";

function setLikesHandler() {
    const likes = document.getElementsByClassName('like');
    
    for (let i = 0; i < likes.length; i++) {
        likes[i].onclick = function() {
            if (!likes[i].classList.contains('like_liked')) {
                likes[i].classList.add('like_liked');
                likes[i].getElementsByClassName('like__number')[0].innerHTML = +likes[i].getElementsByClassName('like__number')[0].innerHTML + 1;
            } else {
                likes[i].classList.remove('like_liked');
                likes[i].getElementsByClassName('like__number')[0].innerHTML = likes[i].getElementsByClassName('like__number')[0].innerHTML > 0 ? +likes[i].getElementsByClassName('like__number')[0].innerHTML - 1 : 0;
            }
        }
    }
}




export default setLikesHandler;