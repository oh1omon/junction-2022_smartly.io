import React, { useContext } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { VidContext } from "../VidState";

export default function ConfigGridTemplate({ header, children }) {
  const StyledGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(4),
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.grayed.main,
    borderRadius: 10,
    minHeight: "60vh",
    maxHeight: "60vh",
    overflow: "scroll",
  }));

  const vidState = useContext(VidContext);
  return (
    <Grid position={"relative"} item xs={4}>
      <StyledGrid>
        <Typography variant="h5">{header}</Typography>
        {children}
      </StyledGrid>
      <div className={vidState.advancedEditing ? "" : "advancedBlocking"}></div>
    </Grid>
  );
}
