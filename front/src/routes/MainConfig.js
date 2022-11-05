import { useState } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopNotification from "../components/TopNotification";
import VideoProps from "../components/configs/VideoProps";
import ReviewsProps from "../components/configs/ReviewsProps";
import PhotoProps from "../components/configs/PhotoProps";
import TopSection from "../components/TopSection";

export default function MainConfig() {
  return (
    <>
      <TopNotification />
      <TopSection />
      <Box width={"86%"} mx={"auto"} sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <VideoProps header={"Video properties"} />
          <ReviewsProps header={"Reviews properties"} />
          <PhotoProps header={"Photo properties"} />
        </Grid>
      </Box>
      <Button
        style={{ display: "block", margin: "3rem auto" }}
        variant={"contained"}
      >
        Create
      </Button>
    </>
  );
}
