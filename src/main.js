import { fetchImages } from './js/pixabay-api';
import { renderUsers } from './js/render-functions';

const btnSubmit = document.querySelector('type[submit]');
const gallaryEl = document.querySelector('.gallary');


btnSubmit.addEventListener('click', () => {
    fetchImages()
        .then(img => renderImages(img))
        .catch(error => console.log(error));
});