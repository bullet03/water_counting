import * as React from "react";

import { DialogContent, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialogContent = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const StyledBox = styled(Box)({
  display: "flex",
  gap: "15px",
  alignItems: "center",
});

export const StyledTextField = styled(TextField)({
  width: "50%",
});
