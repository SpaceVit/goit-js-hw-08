import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

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
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </div>`;
    })
    .join('');
}

galleryContainerEl.innerHTML = galleryItemsList;

galleryContainerEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
