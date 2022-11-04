import { apiKey } from "../constants/placesApiConstants.js";

export const createReviewsRequestConfig = (placeId) => {
    const reviewsRequestConfig = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`,
        headers: {},
    };
    return reviewsRequestConfig
}

export const createPlacesRequestConfig = (name) => {
    const processedName = name
    const placesRequestConfig = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${processedName}&key=${apiKey}`,
        headers: { }
      };
    return placesRequestConfig
}