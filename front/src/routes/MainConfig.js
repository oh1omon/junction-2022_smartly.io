import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import VideoProps from "../components/configs/VideoProps";
export default function MainConfig() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.grayed.main,
    borderRadius: 10,
  }));
  return (
    <Box width={"86%"} mx={"auto"} sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <VideoProps header={"Video properties"} />
        <VideoProps header={"Video properties"} />
        <VideoProps header={"Video properties"} />
      </Grid>
    </Box>
  );
}
