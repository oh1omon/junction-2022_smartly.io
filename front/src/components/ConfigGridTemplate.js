import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ConfigGridTemplate({ header, children }) {
  const StyledGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(4),
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.grayed.main,
    borderRadius: 10,
  }));
  return (
    <Grid item xs={4}>
      <StyledGrid>
        <Typography variant="h5">{header}</Typography>
        {children}
      </StyledGrid>
    </Grid>
  );
}
