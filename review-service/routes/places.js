import axios from "axios";
import express from "express";
import { createPlacesRequestConfig } from "../utils/placesApiUtils.js";

const router = express.Router();

const temp_place_id = "Taco Bell";

// @route   POST api/places
// @desc    Fetch locations based on provided location name
router.route("/").post(async (req, finalRes) => {
  const config = createPlacesRequestConfig(temp_place_id);
  axios(config)
    .then((res) => {
      const places = res.data.results.slice(0, 6)
      finalRes.status(200).json(places)
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
