import './pagination.css';
import './_active/pagination__page_active.css';

function hangPaginationHandlers() {
    'use strict';
    
    const paginations = document.getElementsByClassName('pagination');


    for (let i = 0; i < paginations.length; i++) {
        let paginationPages = paginations[i].getElementsByClassName('pagination__page');
        let lastPage = paginations[i].getElementsByClassName('pagination__page-last')[0];
        let activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
        let paginationArrowForward = paginations[i].getElementsByClassName('pagination__arrow-forward')[0];
        let paginationArrowBack = paginations[i].getElementsByClassName('pagination__arrow-back')[0];
        let paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];

        lastPage.onclick = function () {
            if (parseInt(lastPage.innerHTML) > 4) {
                paginationEllipsis.remove();
                activePage.classList.remove('pagination__page_active');
                lastPage.classList.add('pagination__page_active');
                activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                lastPage.previousElementSibling.innerHTML = parseInt(lastPage.innerHTML) - 1;
                lastPage.previousElementSibling.previousElementSibling.innerHTML = parseInt(lastPage.innerHTML) - 2;
                paginationArrowForward.classList.add('pagination__arrow_hidden');
                paginationArrowBack.classList.remove('pagination__arrow_hidden');
                const span = document.createElement('span');
                span.innerHTML = '...';
                span.className = 'pagination__ellipsis';
                lastPage.previousElementSibling.previousElementSibling.before(span);
                paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                let event = new Event("change");
                paginations[i].dispatchEvent(event);
            } else if (parseInt(lastPage.innerHTML) > 1) {
                activePage.classList.remove('pagination__page_active');
                lastPage.classList.add('pagination__page_active');
                activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                paginationArrowForward.classList.add('pagination__arrow_hidden');
                paginationArrowBack.classList.remove('pagination__arrow_hidden');
                let event = new Event("change");
                paginations[i].dispatchEvent(event);
            }
        }

        for (let j = 0; j < paginationPages.length; j++) {
            paginationPages[j].onclick = function () {
                if (parseInt(lastPage.innerHTML) > 4) {
                    let span = {};
                    switch (paginationPages[j].innerHTML) {
                        case '1':
                            paginationEllipsis.remove();
                            activePage.classList.remove('pagination__page_active');
                            paginationPages[j].classList.add('pagination__page_active');
                            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                            paginationPages[j].nextElementSibling.innerHTML = '2';
                            paginationPages[j].nextElementSibling.nextElementSibling.innerHTML = '3';
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                            paginationArrowBack.classList.add('pagination__arrow_hidden');
                            span = document.createElement('span');
                            span.innerHTML = '...';
                            span.className = 'pagination__ellipsis';
                            paginationPages[j].nextElementSibling.nextElementSibling.after(span);
                            paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                            break;

                        case '2':
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            paginationPages[0].innerHTML = '1';
                            paginationPages[1].innerHTML = '2';
                            paginationPages[2].innerHTML = '3';
                            activePage.classList.remove('pagination__page_active');
                            paginationPages[1].classList.add('pagination__page_active');
                            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                            break;

                        case '3':
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            paginationPages[0].innerHTML = '2';
                            paginationPages[1].innerHTML = '3';
                            paginationPages[2].innerHTML = '4';
                            activePage.classList.remove('pagination__page_active');
                            paginationPages[1].classList.add('pagination__page_active');
                            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            if (parseInt(lastPage.innerHTML) == '5') {
                                paginationEllipsis.remove();
                                paginationPages[0].innerHTML = '1';
                                paginationPages[1].innerHTML = '3';
                                paginationPages[2].innerHTML = '4';
                                span = document.createElement('span');
                                span.innerHTML = '...';
                                span.className = 'pagination__ellipsis';
                                paginationPages[0].after(span);
                                paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                            }
                            break;

                        case (parseInt(lastPage.innerHTML) - 2).toString():
                            paginationEllipsis.remove();
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            paginationPages[0].innerHTML = '1';
                            paginationPages[1].innerHTML = parseInt(lastPage.innerHTML) - 2;
                            paginationPages[2].innerHTML = parseInt(lastPage.innerHTML) - 1;
                            activePage.classList.remove('pagination__page_active');
                            paginationPages[1].classList.add('pagination__page_active');
                            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                            span = document.createElement('span');
                            span.innerHTML = '...';
                            span.className = 'pagination__ellipsis';
                            paginationPages[0].after(span);
                            paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                            break;

                        case (parseInt(lastPage.innerHTML) - 1).toString():
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            activePage.classList.remove('pagination__page_active');
                            paginationPages[j].classList.add('pagination__page_active');
                            activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                            break;

                        default:
                            activePage.innerHTML = paginationPages[j].innerHTML;
                            activePage.nextElementSibling.innerHTML = parseInt(activePage.innerHTML) + 1;
                            activePage.previousElementSibling.innerHTML = parseInt(activePage.innerHTML) - 1;
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                            paginationArrowBack.classList.remove('pagination__arrow_hidden');
                            break;
                    }
                } else {
                    activePage.classList.remove('pagination__page_active');
                    paginationPages[j].classList.add('pagination__page_active');
                    activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                    if (paginationPages[j].innerHTML == '1') {
                        paginationArrowForward.classList.remove('pagination__arrow_hidden');
                        paginationArrowBack.classList.add('pagination__arrow_hidden');
                    }
                }
                let event = new Event("change");
                paginations[i].dispatchEvent(event);
            }
        }

        paginationArrowBack.onclick = function () {
            if (parseInt(lastPage.innerHTML) > 4) {
                switch (activePage.innerHTML) {
                    case lastPage.innerHTML:
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        paginationArrowForward.classList.remove('pagination__arrow_hidden');
                        break;
                    case (parseInt(lastPage.innerHTML) - 1).toString():
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;

                    case (parseInt(lastPage.innerHTML) - 2).toString():
                        paginationEllipsis.remove();
                        activePage.innerHTML = parseInt(activePage.innerHTML) - 1;
                        activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) - 1;
                        const span = document.createElement('span');
                        span.className = 'pagination__ellipsis';
                        span.innerHTML = '...';
                        activePage.nextElementSibling.after(span);
                        paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                        activePage.previousElementSibling.innerHTML = activePage.innerHTML - 1;
                        break;

                    case '2':
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        paginationArrowBack.classList.add('pagination__arrow_hidden');
                        break;

                    default:
                        activePage.innerHTML = parseInt(activePage.innerHTML) - 1;
                        activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) - 1;
                        activePage.previousElementSibling.innerHTML = parseInt(activePage.previousElementSibling.innerHTML) - 1;
                        break;
                }
            } else {
                switch (activePage.innerHTML) {
                    case '2':
                        paginationArrowBack.classList.add('pagination__arrow_hidden');
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        if (parseInt(lastPage.innerHTML) == '2') {
                            paginationArrowForward.classList.remove('pagination__arrow_hidden');
                        }
                        break;

                    case lastPage.innerHTML:
                        paginationArrowForward.classList.remove('pagination__arrow_hidden');
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;

                    default:
                        activePage.classList.remove('pagination__page_active');
                        activePage.previousElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;
                }
            }
            let event = new Event("change");
            paginations[i].dispatchEvent(event);
        }

        paginationArrowForward.onclick = function () {
            if (parseInt(lastPage.innerHTML) > 4) {
                switch (activePage.innerHTML) {
                    case '1':
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        paginationArrowBack.classList.remove('pagination__arrow_hidden');
                        break;

                    case (parseInt(lastPage.innerHTML) - 3).toString():
                        paginationEllipsis.remove();
                        activePage.innerHTML = parseInt(activePage.innerHTML) + 1;
                        activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) + 1;
                        activePage.previousElementSibling.innerHTML = 1;
                        const span = document.createElement('span');
                        span.innerHTML = '...';
                        span.className = 'pagination__ellipsis';
                        activePage.before(span);
                        paginationEllipsis = paginations[i].getElementsByClassName('pagination__ellipsis')[0];
                        break;

                    case (parseInt(lastPage.innerHTML) - 2).toString():
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;

                    case (parseInt(lastPage.innerHTML) - 1).toString():
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        paginationArrowForward.classList.add('pagination__arrow_hidden');
                        break;

                    default:
                        activePage.innerHTML = parseInt(activePage.innerHTML) + 1;
                        activePage.nextElementSibling.innerHTML = parseInt(activePage.nextElementSibling.innerHTML) + 1;
                        activePage.previousElementSibling.innerHTML = parseInt(activePage.previousElementSibling.innerHTML) + 1;
                        break;
                }
            } else {
                switch (activePage.innerHTML) {
                    case '1':
                        paginationArrowBack.classList.remove('pagination__arrow_hidden');
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        if (parseInt(lastPage.innerHTML) == '2') {
                            paginationArrowForward.classList.add('pagination__arrow_hidden');
                        }
                        break;

                    case (parseInt(lastPage.innerHTML) - 1).toString():
                        paginationArrowForward.classList.add('pagination__arrow_hidden');
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;

                    default:
                        activePage.classList.remove('pagination__page_active');
                        activePage.nextElementSibling.classList.add('pagination__page_active');
                        activePage = paginations[i].getElementsByClassName('pagination__page_active')[0];
                        break;
                }
            }
            let event = new Event("change");
            paginations[i].dispatchEvent(event);
        }
    }
    
}
hangPaginationHandlers();




export default hangPaginationHandlers;