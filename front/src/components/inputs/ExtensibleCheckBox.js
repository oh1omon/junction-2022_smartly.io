import { Grid, Stack, Rating, Typography, Button } from "@mui/material";
import React from "react";
import CheckBox from "./CheckBox";
import { styled } from "@mui/material/styles";

export default function ExtensibleCheckBox({
  label = "",
  value,
  setValue,
  comments = [],
}) {
  const Opinion = styled(Stack)(({ theme }) => ({
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.grayed.inputsBackground,
    borderRadius: 10,
    padding: theme.spacing(1),
    fontSize: 10,
  }));

  return (
    <Stack>
      <CheckBox label={label} value={value} setValue={setValue} />
      <Grid container spacing={1}>
        {/* Whole review with stars */}
        {comments !== [] &&
          comments.map((comment) => (
            <Grid item xs={12}>
              <Opinion>
                <Stack>
                  <Rating
                    size={"small"}
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                  <Typography variant={"body2"}>{comment.text}</Typography>
                </Stack>
              </Opinion>
            </Grid>
          ))}
        <Button
          variant="contained"
          size="small"
          style={{ display: "block", margin: "8px auto" }}
        >
          Show More
        </Button>
      </Grid>
    </Stack>
  );
}
