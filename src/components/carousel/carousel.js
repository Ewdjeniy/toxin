import './carousel.css';
import './_active/carousel__circle_active.css';

const carousels = document.getElementsByClassName('carousel');

for (let i = 0; i < carousels.length; i++) {
    const carouselArrowRightWrapper = carousels[i].getElementsByClassName('carousel__arrow-right-wrapper')[0],
          carouselArrowLeftWrapper = carousels[i].getElementsByClassName('carousel__arrow-left-wrapper')[0],
          carouselWindow = carousels[i].getElementsByClassName('carousel-window')[0];
    
    carouselArrowRightWrapper.onclick = function() {
        alert('hi');
    }
    carouselArrowLeftWrapper.onclick = function() {
        alert('hi');
    }
}