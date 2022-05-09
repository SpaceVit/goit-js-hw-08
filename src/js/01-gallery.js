import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
const galleryItemsList = makeGalleryItems(galleryItems);

function makeGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
          <img
            class="gallery__image"
            src='${preview}'
            alt='${description}'
          />
        </a>
      </div>`;
    })
    .join('');
}

galleryContainerEl.innerHTML = galleryItemsList;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
