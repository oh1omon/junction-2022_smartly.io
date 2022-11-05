import { Typography, Switch, Grid, FormControlLabel } from "@mui/material";
import React, { useContext } from "react";

import { VidContext } from "../VidState";

export default function TopSection() {
  const vidState = useContext(VidContext);
  return (
    <Grid
      justifyContent={"center"}
      style={{ margin: "4rem 0 2rem" }}
      container
      justify={"center"}
    >
      <FormControlLabel
        control={
          <Switch
            checked={vidState.advancedEditing}
            onChange={(e) => vidState.setAdvancedEditing(e.target.checked)}
          />
        }
        label="Advanced Editing"
      />
    </Grid>
  );
}
