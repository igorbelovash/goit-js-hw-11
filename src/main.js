import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = event.target.elements["search-text"].value.trim();
    if (!query) {
        return;
    }

    clearGallery();
    showLoader();
    getImagesByQuery(query)
        .then(({ hits }) => {
            if (hits.length > 0) {
                createGallery(hits);
            }
            else {
                iziToast.show({
                    color: '#EF4040',
                    messageColor: '#FAFAFB',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    maxWidth: '322px'
                });
            }
        })
        .catch(error => {
            iziToast.show({
                    color: '#EF4040',
                    messageColor: '#FAFAFB',
                    message: `${error.message}`,
                    maxWidth: '322px'
                });
        })
        .finally(() => {
            event.target.reset();
            hideLoader();
        })
}