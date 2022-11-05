import React, { useRef } from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import CheckBox from "../inputs/CheckBox";
import { Box, Grid } from "@mui/material";
import { ImageItem } from "../ImageItem";
import { useState } from "react";

export default function PhotoProps({ header }) {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <ConfigGridTemplate header={header}>
      <Box display={"flex"} flexDirection={"column"}>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </Box>
      <Grid container spacing={2}>
        <ImageItem isAddButton={true} />
        {Array(3) // slice the fetched array of images in future to (0, 4)
          .fill("")
          .map((elem) => (
            <ImageItem onClick={setSelectedImage} selectedImage={selectedImage}/>
          ))}
      </Grid>
    </ConfigGridTemplate>
  );
}
