import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { StyledBox } from "./styles";

export const AddDrinkItemButton = () => {
  return (
    <StyledBox>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </StyledBox>
  );
};
