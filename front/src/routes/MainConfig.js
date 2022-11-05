import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopNotification from "../components/TopNotification";
import VideoProps from "../components/configs/VideoProps";
import ReviewsProps from "../components/configs/ReviewsProps";
import PhotoProps from "../components/configs/PhotoProps";

export default function MainConfig() {
  return (
    <>
      <TopNotification />
      <Box width={"86%"} mx={"auto"} marginTop={10} sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <VideoProps header={"Video properties"} />
          <ReviewsProps header={"Reviews properties"} />
          <PhotoProps header={"Photo properties"} />
        </Grid>
      </Box>
    </>
  );
}
