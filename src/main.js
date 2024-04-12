import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';


const formEl = document.querySelector('.form-search');
const gallaryEl = document.querySelector('.gallary');


formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;

    getPhotos(inputValue)
        .then(data => { 
            if (inputValue === '') { 
                iziToast.show({
                    message: 'Field must be filled!',
                    color: 'green', // blue, red, green, yellow
                    position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    timeout: 2000,
                });
                return;
            }
            ;
            gallaryEl.insertAdjacentHTML('beforeend',renderImages(data.hits));
        })
        .catch(error => console.log(error));
        
        formEl.reset();
});

