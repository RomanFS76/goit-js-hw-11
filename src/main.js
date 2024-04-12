import { getPhotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';


const formEl = document.querySelector('.form-search');


formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;

    getPhotos(inputValue)
        .then(data => renderImages(data))
        .catch(error => console.log(error));
    
    formEl.reset();
});

