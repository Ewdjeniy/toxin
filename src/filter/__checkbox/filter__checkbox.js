const filterCheckbox = document.getElementsByClassName('filter__checkbox')[0],
    filterCheckboxBoxes = filterCheckbox.getElementsByClassName('filter__checkbox-box'),
    filterCheckboxSmoke = filterCheckbox.getElementsByClassName('filter__checkbox-smoke')[0],
    filterCheckboxPets = filterCheckbox.getElementsByClassName('filter__checkbox-pets')[0],
    filterCheckboxGuests = filterCheckbox.getElementsByClassName('filter__checkbox-guests')[0];


filterCheckboxSmoke.onclick = function () {
    if (filterCheckboxForm.filterCheckboxSmoke.checked) {
        filterCheckboxSmoke.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
        filterCheckboxForm.filterCheckboxSmoke.checked = false;
    } else {
        filterCheckboxSmoke.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
        filterCheckboxForm.filterCheckboxSmoke.checked = true;
    }
}

filterCheckboxPets.onclick = function () {
    if (filterCheckboxForm.filterCheckboxPets.checked) {
        filterCheckboxPets.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
        filterCheckboxForm.filterCheckboxPets.checked = false;
    } else {
        filterCheckboxPets.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
        filterCheckboxForm.filterCheckboxPets.checked = true;
    }
}

filterCheckboxGuests.onclick = function () {
    if (filterCheckboxForm.filterCheckboxGuests.checked) {
        filterCheckboxGuests.getElementsByClassName('filter__checkbox-box')[0].classList.remove('filter_checked');
        filterCheckboxForm.filterCheckboxGuests.checked = false;
    } else {
        filterCheckboxGuests.getElementsByClassName('filter__checkbox-box')[0].classList.add('filter_checked');
        filterCheckboxForm.filterCheckboxGuests.checked = true;
    }
}
