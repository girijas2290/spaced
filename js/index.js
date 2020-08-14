import Search from './models/Search';
import Spacecraft from './models/Spacecraft';
import * as searchView from './views/searchView';
import * as spacecraftView from './views/spaceView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * 
 */
const state = {};

/** 
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});




/**
 * Space controller
 */
const controlSpacecraft = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        spacecraftView.clearSpace();
        renderLoader(elements.space);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new space object
        state.spacecraft = new Spacecraft(id);
        window.r=state.spacecraft;
        try {
            // Get recipe data and parse ingredients
            await state.spacecraft.getSpacecraft();
            
            // Render recipe
            clearLoader();
            spacecraftView.renderSpacecraft1(
                state.spacecraft
            );

            // Render the existing likes
    //state.likes.likes.forEach(like => likesView.renderLike(like));

        } catch (err) {
            console.log(err);
            alert('Error processing space mission!');
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlSpacecraft));



// // Restore liked recipes on page load
// window.addEventListener('load', () => {
//     state.likes = new Likes();
    
//     // Restore likes
//     state.likes.readStorage();

//     // Toggle like menu button
//     likesView.toggleLikeMenu(state.likes.getNumLikes());

//     // Render the existing likes
//     state.likes.likes.forEach(like => likesView.renderLike(like));
// });
window.addEventListener('load', e => {
    e.preventDefault();
    controlSearch();
});
