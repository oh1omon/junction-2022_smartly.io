import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Typography
          variant="body2"
          sx={{ flexGrow: 1 }}
          padding={"5px 0"}
          textAlign={"center"}
        >
          We have automatically created an appropriate config for you.{" "}
          <Link
            variant="body2"
            color="#ffffff"
            component={"button"}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Click here or below to enable advanced options
          </Link>
        </Typography>
      </AppBar>
    </Box>
  );
}
