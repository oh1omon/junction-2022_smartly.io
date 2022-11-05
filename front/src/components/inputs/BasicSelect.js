import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ info }) {
  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{info.text}</InputLabel>
      <Select value={val} label={info.text} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
