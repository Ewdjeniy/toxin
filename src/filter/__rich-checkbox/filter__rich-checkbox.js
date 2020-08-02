const filterRichCheckbox = document.getElementsByClassName('filter__rich-checkbox')[0],
    filterCorridorTrs = filterRichCheckbox.getElementsByClassName('filter__corridor-tr'),
    filterHelperTrs = filterRichCheckbox.getElementsByClassName('filter__helper-tr'),
    filterRichCheckboxCorridor = filterRichCheckbox.getElementsByClassName('filter__rich-checkbox-corridor')[0],
    filterRichCheckboxHelper = filterRichCheckbox.getElementsByClassName('filter__rich-checkbox-helper')[0];



for (let i = 0; i < filterCorridorTrs.length; i++) {
    filterCorridorTrs[i].onclick = function () {
        if (filterCorridorTrs[i].getElementsByClassName('filter__rich-checkbox-corridor')[0]) {
            if (filterRichCheckboxForm.filterRichCheckboxCorridor.checked) {
                filterRichCheckboxCorridor.classList.remove('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxCorridor.checked = false;
            } else {
                filterRichCheckboxCorridor.classList.add('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxCorridor.checked = true;
            }
        } else if (filterCorridorTrs[i].previousElementSibling.getElementsByClassName('filter__rich-checkbox-corridor')[0]) {
            if (filterRichCheckboxForm.filterRichCheckboxCorridor.checked) {
                filterRichCheckboxCorridor.classList.remove('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxCorridor.checked = false;
            } else {
                filterRichCheckboxCorridor.classList.add('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxCorridor.checked = true;
            }
        }
    }
}

for (let i = 0; i < filterHelperTrs.length; i++) {
    filterHelperTrs[i].onclick = function () {
        if (filterHelperTrs[i].getElementsByClassName('filter__rich-checkbox-helper')[0]) {
            if (filterRichCheckboxForm.filterRichCheckboxHelper.checked) {
                filterRichCheckboxHelper.classList.remove('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxHelper.checked = false;
            } else {
                filterRichCheckboxHelper.classList.add('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxHelper.checked = true;
            }
        } else if (filterHelperTrs[i].previousElementSibling.getElementsByClassName('filter__rich-checkbox-helper')[0]) {
            if (filterRichCheckboxForm.filterRichCheckboxHelper.checked) {
                filterRichCheckboxHelper.classList.remove('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxHelper.checked = false;
            } else {
                filterRichCheckboxHelper.classList.add('filter_checked');
                filterRichCheckboxForm.filterRichCheckboxHelper.checked = true;
            }
        }
    }
}
