import './toggle.css';
import './_on/toggle_on.css';

$('.toggle__btn').click(function(){
    $(this).toggleClass('toggle_on');
    if ($(this).hasClass('toggle_on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

$('.toggle__btn').on('on.switch', function(){
    this.getElementsByClassName('toggle__checkbox')[0].checked = true;
});
$('.toggle__btn').on('off.switch', function(){
    this.getElementsByClassName('toggle__checkbox')[0].checked = false;
});