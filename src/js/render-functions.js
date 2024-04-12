import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(arr) {
  const markup = img
    .map(({webformatURL, largeImageURL ,tags , likes ,views ,comments ,downloads}) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
              <img 
                class="gallery-image" 
                src="${preview}"
                alt="${tags}" 
              />
          </a>
        </li>
    `
    )
    .join('');
  
  userList.insertAdjacentHTML('beforeend', markup());

  const lightbox =  new SimpleLightbox('.gallery a', {
    /* options */
  });
  lightbox.refresh();
}
