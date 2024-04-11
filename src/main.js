import { fetchImages } from './js/pixabay-api.js';
import { renderUsers } from './js/render-functions.js';

const btnSubmit = document.querySelector('[type="submit"]');
const gallaryEl = document.querySelector('.gallary');

const API_KEY = '43330031-9673f4a92262d12e3841226eb';

const searchParams = new URLSearchParams({
    key: API_KEY,
    // q:,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
});


btnSubmit.addEventListener('click', 
    fetchImages()
        .then(img => renderImages(img))
        .catch(error => console.log(error))
);

console.log(API_KEY);
console.log(btnSubmit);
console.log(gallaryEl);
