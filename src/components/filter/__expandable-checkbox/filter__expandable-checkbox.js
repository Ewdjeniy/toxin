const filterExpandableCheckboxes = document.getElementsByClassName('filter__expandable-checkbox');

for (let i = 0; i < filterExpandableCheckboxes.length; i++) {
    const filterExpandableCheckboxSwitcher = filterExpandableCheckboxes[i].getElementsByClassName('filter__expandable-checkbox-switcher')[0];
    const filterExpandableCheckboxArrow = filterExpandableCheckboxes[i].getElementsByClassName('filter__expandable-checkbox-arrow')[0];
    let filterExpandableCheckboxSwitcherTurner = 0;

    filterExpandableCheckboxSwitcher.onclick = function () {
        if (filterExpandableCheckboxSwitcherTurner == 0) {
            filterExpandableCheckboxes[i].classList.add('filter__expandable-checkbox_expanded');
            filterExpandableCheckboxArrow.innerHTML = 'keyboard_arrow_up';
            filterExpandableCheckboxSwitcherTurner = 1;
        } else {
            filterExpandableCheckboxes[i].classList.remove('filter__expandable-checkbox_expanded');
            filterExpandableCheckboxArrow.innerHTML = 'keyboard_arrow_down';
            filterExpandableCheckboxSwitcherTurner = 0;
        }
    }
}
