import axios from "axios";

const API_KEY = "55663277-19ff75ff764545e0f4b912e24";

export default function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: `${query}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(({ data }) => {
        return data;
    })
}