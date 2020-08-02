const filterExpandableCheckbox = document.getElementsByClassName('filter__expandable-checkbox')[0];
const filterExpandableCheckboxSwitcher = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-switcher')[0];
const filterExpandableCheckboxCheckboxes = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-checkboxes')[0];

const filterExpandableCheckboxBoxes = filterExpandableCheckbox.getElementsByClassName('filter__checkbox-box');
const filterExpandableCheckboxBreakfast = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-breakfast')[0];
const filterExpandableCheckboxTable = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-table')[0];
const filterExpandableCheckboxChair = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-chair')[0];
const filterExpandableCheckboxBed = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-bed')[0];
const filterExpandableCheckboxTv = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-tv')[0];
const filterExpandableCheckboxShampoo = filterExpandableCheckbox.getElementsByClassName('filter__expandable-checkbox-shampoo')[0];
let filterExpandableCheckboxSwitcherTurner = 0;



filterExpandableCheckboxSwitcher.onclick = function() {
    if (filterExpandableCheckboxSwitcherTurner == 0) {
        filterExpandableCheckboxCheckboxes.classList.add('filter__guests_expanded');
        filterExpandableCheckboxSwitcherTurner = 1;
    } else {
        filterExpandableCheckboxCheckboxes.classList.remove('filter__guests_expanded');
        filterExpandableCheckboxSwitcherTurner = 0;
    }
}

filterExpandableCheckboxBreakfast.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked) {
        filterExpandableCheckboxBreakfast.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked = false;
    } else {
        filterExpandableCheckboxBreakfast.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxBreakfast.checked = true;
    }
}


filterExpandableCheckboxChair.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked) {
        filterExpandableCheckboxChair.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked = false;
    } else {
        filterExpandableCheckboxChair.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxChair.checked = true;
    }
}


filterExpandableCheckboxBed.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked) {
        filterExpandableCheckboxBed.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked = false;
    } else {
        filterExpandableCheckboxBed.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxBed.checked = true;
    }
}


filterExpandableCheckboxTv.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked) {
        filterExpandableCheckboxTv.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked = false;
    } else {
        filterExpandableCheckboxTv.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxTv.checked = true;
    }
}


filterExpandableCheckboxShampoo.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked) {
        filterExpandableCheckboxShampoo.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked = false;
    } else {
        filterExpandableCheckboxShampoo.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxShampoo.checked = true;
    }
}


filterExpandableCheckboxTable.onclick = function () {
    if (filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked) {
        filterExpandableCheckboxTable.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.remove('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked = false;
    } else {
        filterExpandableCheckboxTable.getElementsByClassName('filter__expandable-checkbox-box')[0].classList.add('filter_checked');
        filterExpandableCheckboxForm.filterExpandableCheckboxTable.checked = true;
    }
}