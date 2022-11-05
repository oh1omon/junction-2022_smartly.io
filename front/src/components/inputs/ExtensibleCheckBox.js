import { Grid, Stack } from "@mui/material";
import React from "react";
import CheckBox from "./CheckBox";

export default function ExtensibleCheckBox() {
  return (
    <Stack>
      <CheckBox />
      <Grid container>
        <Grid item xs={6}>
          Content
        </Grid>
        <Grid item xs={6}>
          Content
        </Grid>
      </Grid>
    </Stack>
  );
}
