import { getPhotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const btnSubmit = document.querySelector('[type="submit"]');
const formEl = document.querySelector('.form-search');


formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;

    getPhotos(inputValue)
        .then(data => renderImages(data))
        .catch(error => console.log(error));
    
    formEl.reset();
});

