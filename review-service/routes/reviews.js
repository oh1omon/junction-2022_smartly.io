import axios from "axios";
import express from "express";
import { createReviewsRequestConfig } from "../utils/placesApiUtils.js";


const router = express.Router();

const temp_place_id = "ChIJN1t_tDeuEmsRUsoyG83frY4";

// @route   POST api/reviews
// @desc    Fetch locations based on provided location name
router.route("/").post(async (req, finalRes) => {
    const config = createReviewsRequestConfig(temp_place_id);
    axios(config)
      .then((res) => {
          const placeData = res.data.result
          const reviews = placeData.reviews
          const processedReviews = reviews.map(review => {
              return {
                  rating: review.rating,
                  text: review.text,
              }
          }).slice(0, 11).filter(review => review.rating > 3)
          finalRes.status(200).json(processedReviews)
      })
      .catch((error) => {
        console.log(error);
      })
  });

  export default router

