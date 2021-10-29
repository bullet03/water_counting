import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)({
  width: "100%",
  "& > :not(style)": { m: 1 },
  display: "flex",
  justifyContent: "flex-end",
});
