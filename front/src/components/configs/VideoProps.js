import React from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import {
  Slider,
  Grid,
  Button,
  Typography,
  Box,
  FormControlLabel,
} from "@mui/material";
import SliderLabeled from "../inputs/SliderLabeled";
import Video from "@mui/icons-material/SwitchVideo";
import BasicSelect from "../inputs/BasicSelect";

export default function VideoProps({ header }) {
  const configData = {
    length: {
      text: "Video length",
      icon: <Video />,
      value: 30,
      min: 0,
      max: 100,
    },
    vidStyle: {
      text: "Video style",
    },
  };
  return (
    <ConfigGridTemplate header={header}>
      <SliderLabeled data={configData.length} />
      <BasicSelect data={configData.vidStyle} />
    </ConfigGridTemplate>
  );
}
