import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getPhotos(inputValue) {
    if (inputValue === '') {
        iziToast.show({
            title: 'My friend',
            message: 'Field must be filled',
            color: 'green', // blue, red, green, yellow
            imageWidth: 1000,
            timeout: 2000,
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            imageWidth: 100,
        });
    };

    const API_KEY = '43330031-9673f4a92262d12e3841226eb';
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9
    });

    return fetch(`https://pixabay.com/api/?${searchParams}`, {
        headers: {
            Accept: "application/json",
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
