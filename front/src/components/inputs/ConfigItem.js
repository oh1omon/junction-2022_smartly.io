import { Box, styled } from "@mui/material";

const ConfigItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.grayed.inputsBackground,
  borderRadius: 10,
}));

export default ConfigItem;
