import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { StyledBox } from "./styles";

interface IProps {
  toggleModal: () => void;
}

export const AddDrinkItemButton: React.FC<IProps> = ({ toggleModal }) => {
  return (
    <StyledBox>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={toggleModal} />
      </Fab>
    </StyledBox>
  );
};
