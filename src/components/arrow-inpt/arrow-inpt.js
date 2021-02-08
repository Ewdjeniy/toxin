import './arrow-inpt.css';

const arrowInpts = document.getElementsByClassName('arrow-inpt');

for (let i = 0; i < arrowInpts.length; i++) {
    const inpt = arrowInpts[i].getElementsByClassName('arrow-inpt__field')[0];
    inpt.onfocus = function() {
        arrowInpts[i].classList.add('arrow-inpt_focus_on');
    }
    inpt.onblur = function() {
        arrowInpts[i].classList.remove('arrow-inpt_focus_on');
    }
}