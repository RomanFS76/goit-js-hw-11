import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnSubmit = document.querySelector('type[submit]');
const gallaryEl = document.querySelector('.gallary');

console.log();

const API_KEY = 43330031-9673f4a92262d12e3841226eb;

const searchParams = new URLSearchParams({
    key: API_KEY,
    // q:,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
});

btnSubmit.addEventListener('click', () => {
    fetchImages()
        .then((img) => renderImages(img))
        .catch((error) => console.log(error));
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

function renderUsers(arr) {
    const markup = img
    .map((img) => {
        return

        })
        .join("");
        userList.insertAdjacentHTML("beforeend", markup);
}
