import axios from "axios";
import express from "express";
import { createReviewsRequestConfig } from "../utils/placesApiUtils.js";

const router = express.Router();

// @route   POST api/reviews
// @desc    Fetch locations based on provided location name
router.route("/:id").post(async (req, finalRes) => {
  console.log(req.params.id);
  const config = createReviewsRequestConfig(req.params.id);
  axios(config)
    .then((res) => {
      let all = {};
      const placeData = res.data.result;

      // There should be a call to AI that will return how long the video should be
      const videoLength = Math.floor(22 + ((Math.random() * 10) % 10));
      // There should be a call to AI that will return the most adequate style
      const style = "light";
      // There should be a call to AI that will return the most adequate reviews
      const reviews = placeData.reviews;
      // There should be a call to AI that will return the most adequate photos
      const photos = [];

      const enableGoogleReviews = true;

      const processedReviews = reviews
        ? reviews
            .map((review) => {
              return {
                rating: review.rating,
                text: review.text,
              };
            })
            .slice(0, 11)
            .filter((review) => review.rating > 3)
        : [];
      all.reviews = { google: processedReviews };
      all.vidLength = videoLength;
      all.companyName = placeData.name;
      all.enableGoogleReviews = enableGoogleReviews;
      all.vidStyle = style;
      all.photos = photos;

      finalRes.status(200).json(all);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
