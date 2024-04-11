// import { fetchImages } from './js/pixabay-api.js';
// import { renderImages } from './js/render-functions.js';

// const btnSubmit = document.querySelector('[type="submit"]');
// const gallaryEl = document.querySelector('.gallary');
const formEl = document.querySelector('.form-search');


formEl.addEventListener('submit', event => { 
    event.preventDefault();
    const form = event.target.elements;;
    console.log(event);
})



// const API_KEY = '43330031-9673f4a92262d12e3841226eb';

// const searchParams = new URLSearchParams ({
//     key: API_KEY,
//     q: `${}`,
//     image_type: photo,
//     orientation: horizontal,
//     safesearch: true
// });


// btnSubmit.addEventListener('click',
//     fetch(`https://pixabay.com/api/?${searchParams}`)
//         .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(img => renderImages(img))
//     .catch(error => console.log(error))
// );


// console.log(searchParams);
