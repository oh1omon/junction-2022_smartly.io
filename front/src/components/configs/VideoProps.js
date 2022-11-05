import React, { useContext } from "react";
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
import { VidContext } from "../../VidState";
export default function VideoProps({ header }) {
  const configData = {
    length: {
      text: "Video length",
      icon: <Video />,
      value: 30,
      min: 0,
      max: 60,
    },
    vidStyle: {
      text: "Video style",
    },
  };
  const vidState = useContext(VidContext);

  return (
    <ConfigGridTemplate header={header}>
      <Stack spacing={1}>
        <ConfigItem>
          <SliderLabeled
            value={vidState.vidLength}
            setValue={vidState.setVidLength}
            info={configData.length}
          />
        </ConfigItem>
        <ConfigItem>
          <BasicSelect
            value={vidState.vidStyle}
            setValue={vidState.setVidStyle}
            info={configData.vidStyle}
          />
        </ConfigItem>
      </Stack>
    </ConfigGridTemplate>
  );
}
