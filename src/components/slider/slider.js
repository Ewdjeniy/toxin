import './toxin-slider/slider.bundle.js';
import './toxin-slider/slider.css';
import './slider.css';

const sliders = document.getElementsByClassName('slider');

for (let i = 0; i < sliders.length; i++) {
    
    const sliderInpt = sliders[i].getElementsByClassName('slider__input')[0];
    const sliderIndicator = sliders[i].getElementsByClassName('slider__indicator')[0];
    
    sliderInpt.oninput = () => {
        const diapason = [+sliderInpt.value.split(' - ')[0], +sliderInpt.value.split(' - ')[1]];
    
        sliderIndicator.innerHTML = diapason[0].toLocaleString('ru-RU') + '&#8381' + ' - ' + diapason[1].toLocaleString('ru-RU') + '&#8381';
    }
    
    $(sliderInpt).toxinSlider({
        extraClass: 'slider__toxin-slider',
        start: 0,
        end: 17000,
        step: 100,
        current: [5000, 10000],
        scaleValues: false,
        scaleValuesAmount: 0,
        direction: 'x',
        range: true,
        tip: false,
        separator: ' - '
    });
    
    const diapason = [+sliderInpt.value.split(' - ')[0], +sliderInpt.value.split(' - ')[1]];
    
    sliderIndicator.innerHTML = diapason[0].toLocaleString('ru-RU') + '&#8381' + ' - ' + diapason[1].toLocaleString('ru-RU') + '&#8381';
}