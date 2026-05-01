import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
  	captionDelay: 250
});

function createGallery(images) {
    gallery.innerHTML = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <li class="gallery-item">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" />
                </a>
                <p>Likes: ${likes}</p>
                <p>Views: ${views}</p>
                <p>Comments: ${comments}</p>
                <p>Downloads: ${downloads}</p>
            </li>
        `
    }).join("");

    lightbox.refresh();
}

function clearGallery() {
    gallery.innerHTML = "";
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader };