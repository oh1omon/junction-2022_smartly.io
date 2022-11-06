import axios from "axios";
import express from "express";
import { createPhotosRequestConfig, createRenderRequestConfig, createReviewsRequestConfig } from "../utils/placesApiUtils.js";

const router = express.Router();

// @route   POST api/video
// @desc    Create a video based on properties provided by user
router.route("/").post(async (req, finalRes) => {
    const { title, placeId } = req.body
    const config = createReviewsRequestConfig(placeId);
    axios(config)
    .then((res) => {
        const placeData = res.data.result;
        const address = placeData.address_components[1].long_name + " " + placeData.address_components[0].long_name + ", " + placeData.address_components[2].long_name
        const reviews = placeData.reviews.map((review) => {
            return {
              rating: review.rating,
              text: review.text,
            };
          })
          .filter((review) => review.rating > 3 && review.text.length < 70)
          .slice(0, 3)
        const photoReferences = placeData.photos.map(photo => photo.photo_reference).slice(0, 4)
        let photos = []
        let counter = 0
        photoReferences.forEach(ref => {
            let photoUrl
            const photosConfig = createPhotosRequestConfig(ref);
            axios.get(photosConfig).then(res => {
                photoUrl = res.request._redirectable._options.href
                photos.push(photoUrl)
            })
            .then(() => {
                counter++
            })
            .then(() => {
                if (counter === photoReferences.length) {
                    const data = {
                        reviews,
                        address,
                        title,
                        photos
                    }
                    const renderReqestConfig = createRenderRequestConfig()
                    axios.post(renderReqestConfig, data).then(resRender => finalRes.status(200).send(resRender.data))
                }
            })
        })
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
