import React, { useRef, useContext } from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import CheckBox from "../inputs/CheckBox";
import { Box, Grid } from "@mui/material";
import { ImageItem } from "../ImageItem";
import { useState } from "react";
import { VidContext } from "../../VidState";

export default function PhotoProps({ header }) {
  const [selectedImage, setSelectedImage] = useState("");
  const vidState = useContext(VidContext);
  return (
    <ConfigGridTemplate header={header}>
      <Box display={"flex"} flexDirection={"column"}>
        <CheckBox
          value={vidState.googlePhotosSource}
          setValue={vidState.setGooglePhotosSource}
          label={"Google Reviews Photos"}
        />
        <CheckBox
          value={vidState.tripAdvisorSource}
          setValue={vidState.setTripAdvisorSource}
          label={"Trip Advisor Photos"}
        />
        <CheckBox
          value={vidState.ownPhotosSource}
          setValue={vidState.setOwnPhotosSource}
          label={"Upload from the device"}
        />
      </Box>
      {vidState.ownPhotosSource && (
        <Grid container spacing={2}>
          <ImageItem isAddButton={true} />
          {Array(3) // slice the fetched array of images in future to (0, 4)
            .fill("")
            .map((elem) => (
              <ImageItem
                onClick={setSelectedImage}
                selectedImage={selectedImage}
              />
            ))}
        </Grid>
      )}
    </ConfigGridTemplate>
  );
}
