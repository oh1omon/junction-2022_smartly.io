import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ info, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{info.text}</InputLabel>
      <Select value={value} label={info.text} onChange={handleChange}>
        <MenuItem value={"light"}>light</MenuItem>
        <MenuItem value={"dark"}>dark</MenuItem>
      </Select>
    </FormControl>
  );
}
