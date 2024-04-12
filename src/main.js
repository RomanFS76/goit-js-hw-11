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
            };
            // if(data.hits)
            console.log(Object.keys(data.hits).length);
            console.log(data.hits);
            if (Object.keys(data.hits).length === 0) {
               iziToast.show({
                 message:'Sorry, there are no images matching your search query. Please try again!',
                 color: 'blue', // blue, red, green, yellow
                 position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                 timeout: 2000,
               });

                }
            
            gallaryEl.insertAdjacentHTML('beforeend',renderImages(data.hits));
        })
        .catch(error => console.log(error));
        formEl.reset();
});

