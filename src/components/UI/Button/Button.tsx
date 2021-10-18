import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { StyledBox } from "./styles";

export const Button = () => {
  return (
    <StyledBox sx={{ "& > :not(style)": { m: 1 }, float: "right" }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </StyledBox>
  );
};
