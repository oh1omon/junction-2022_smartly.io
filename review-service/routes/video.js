import axios from "axios";
import express from "express";
import { createPhotosRequestConfig, createRenderRequestConfig, createReviewsRequestConfig } from "../utils/placesApiUtils.js";

const router = express.Router();
const id = 'ChIJN1t_tDeuEmsRUsoyG83frY4'

// @route   POST api/video
// @desc    Create a video based on properties provided by user
router.route("/").post(async (req, finalRes) => {
    const { title, placeId } = req.body
    const config = createReviewsRequestConfig(id);
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
          .slice(0, 11)
          .filter((review) => review.rating > 3)
        const photoReferences = placeData.photos.map(photo => photo.photo_reference).slice(0, 5)
        let photos = []
        let counter = 0
        photoReferences.forEach(ref => {
            let photoUrl
            const photosConfig = createPhotosRequestConfig(ref);
            axios.get(photosConfig).then(res => {
                photoUrl = res.request._redirectable._options.href
                photos.push(photoUrl)
            }).then(() => {
                counter++
            }).then(() => {
                if (counter === photoReferences.length) {
                    const data = {
                        reviews,
                        address,
                        title,
                        photos
                    }
                    const renderReqestConfig = createRenderRequestConfig()
                    axios.post(renderReqestConfig, data).then(res => finalRes.status(200).send(res.data))
                }
            })
        })
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
