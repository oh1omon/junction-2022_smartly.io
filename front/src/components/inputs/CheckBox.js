import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBox = ({ label, value, setValue }) => {
  console.log(value);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
