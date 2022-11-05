import { Typography, Switch, Grid, FormControlLabel } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";

import { VidContext } from "../VidState";

export default function TopSection() {
  const vidState = useContext(VidContext);
  return (
    <Stack style={{ margin: "4rem auto 2rem", width: "86%" }}>
      <Typography variant="caption" gutterBottom>
        Video for:{" "}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {vidState.companyName}
      </Typography>

      <Grid justifyContent={"center"} container justify={"center"}>
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
    </Stack>
  );
}
