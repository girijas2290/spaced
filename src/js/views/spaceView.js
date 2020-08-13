import { elements } from './base';

export const clearSpace = () => {
    elements.space.innerHTML = '';
};

export const renderSpacecraft1 = (space) => {
    const markup = `
        
<div class="card-container">
    <div class="card">
            <div class="card__header">
                <div class="card__picture">
                    <img
                        src="${space.links.mission_patch_small}"
                        alt="${space.mission_name}"
                        class="card__picture-img"
                    />
                </div>

                <h3 class="heading-tertirary">
                <span>${space.mission_name}</span>
                </h3>
            </div>

            <div class="card__details">
                
                <div class="card__data">
                <span>Name:${space.mission_name}/span>
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
</div>

    `;
    elements.space.insertAdjacentHTML('afterbegin', markup);
};

