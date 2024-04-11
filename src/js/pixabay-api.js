import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const API_KEY = 43330031-9673f4a92262d12e3841226eb;

const searchParams = new URLSearchParams({
    key: API_KEY,
    // q:,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
});

function fetchImages() {
    return
    fetch(`https://pixabay.com/api/?${searchParams}`)
        .then(response => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json();
        })
};


