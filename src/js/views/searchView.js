import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

const renderSpacecraft = space => {
    const markup = `
    
    <div class="card">
            <div class="card__header">
                <div class="card__picture">
                <div class="card__picture-overlay">&nbsp;</div>
                    <img
                        src="${space.links.mission_patch_small}"
                        alt="${space.mission_name}"
                        class="card__picture-img"
                    />
                </div>

                <h3 class="card__sub-heading">
                <span>${space.mission_name}#${space.flight_number}</span>
                </h3>
            </div>

            <div class="card__details">
                
                <div class="card__data">
                <span>Name:${space.mission_name}</span>
                </div>
                <div class="card__data">
                
                <span>Flight number:${space.flight_number}</span>
                </div>
                <div class="card__data">
                <span>Launch_year:${space.launch_year}</span>
                </div>
                <div class="card__data">
                <span>launch_success:${space.launch_success}</span>
                </div>
            </div>
    </div>


    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (space, page = 1, resPerPage = 10) => {
    // render results of currente page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    space.slice(start, end).forEach(renderSpacecraft);

    // render pagination buttons
    renderButtons(page, space.length, resPerPage);
};
