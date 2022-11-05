import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({ info, value, setValue }) {
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 60) {
      setValue(60);
    }
  };

  return (
    <>
      <Typography
        padding={0}
        variant={"caption"}
        id="input-slider"
        gutterBottom
      >
        {info.text}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{info.icon}</Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={info.max}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: info.min,
              max: info.max,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
