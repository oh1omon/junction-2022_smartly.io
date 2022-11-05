import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Download from "@mui/icons-material/Download";
import YouTube from "@mui/icons-material/YouTube";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export default function Output() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Grid item justifyContent="center">
        <video style={{ height: "100vh" }} controls>
          <source src="/SampleVid.mp4" type="video/mp4" />
        </video>
      </Grid>
      <Grid marginLeft={2} marginBottom={4} item xs={2}>
        <Stack spacing={2}>
          <Typography variant="h5" gutterBottom>
            Share the video!
          </Typography>
          <Button startIcon={<Download />} variant="contained">
            Download
          </Button>
          <Button startIcon={<YouTube />} variant="contained">
            YouTube
          </Button>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            href={"/place"}
            variant="contained"
          >
            And another one!
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
