import React from "react";
import { Box, Grid } from "@mui/material";
import bgImage from '../assets/images/landingmain.jpg'
import { useState } from "react";
import { useEffect } from "react";

export const ImageItem = ({ imageSrc, id, isAddButton = false, onClick, selectedImage }) => {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(id === selectedImage)
  })

  const handleImageClick = () => {
    if (isAddButton) {
      // adding logic
      return
    }
    if (onClick) {
      // pass the value into the state
    }
  }
  return (
    <Grid item xs={6}>
      <Box onClick={handleImageClick} height={100} sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'contain' }} borderRadius={2} />
    </Grid>
  );
};

