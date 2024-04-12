import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function renderImages(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
              <img 
                class="gallery-image" 
                src="${webformatURL}"
                alt="${tags}"
                width = "1000"
                height = "800"
              />
          </a>
          <div class="gallery-desc">
            <ul class="gallery-desc-list">
              <li class="gallery-desc-item">
                <p>Likes</p>
                <p>${likes}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Views</p>
                <p>${views}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Comments</p>
                <p>${comments}</p>
              </li>
              <li class="gallery-desc-item">
                <p>Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
}
lightbox.refresh();