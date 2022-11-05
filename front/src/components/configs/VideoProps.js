import React from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import {
  Slider,
  Grid,
  Stack,
  Typography,
  Box,
  FormControlLabel,
} from "@mui/material";
import SliderLabeled from "../inputs/SliderLabeled";
import Video from "@mui/icons-material/SwitchVideo";
import BasicSelect from "../inputs/BasicSelect";
import ConfigItem from "../inputs/ConfigItem";

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
      <Stack spacing={1}>
        <ConfigItem>
          <SliderLabeled data={configData.length} />
        </ConfigItem>
        <ConfigItem>
          <BasicSelect data={configData.vidStyle} />
        </ConfigItem>
      </Stack>
    </ConfigGridTemplate>
  );
}
