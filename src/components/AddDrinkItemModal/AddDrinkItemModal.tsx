import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { nanoid } from "@reduxjs/toolkit";

import coffee from "../../assets/images/coffee.png";
import { cardsData } from "../../data/cardsData";
import DrinkItemModal from "../../models/drinkItemModel";

import { StyledDialogContent, StyledBox, StyledTextField } from "./styles";

interface IProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const AddDrinkItemModal: React.FC<IProps> = ({
  isModalOpen,
  toggleModal,
}) => {
  const [drinksData, setDrinksData] = useState(cardsData);
  const [drink, setDrink] = useState();

  const editDrinkItem = () => {
    console.log("g");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e.target.value);
  };

  return (
    <Dialog open={isModalOpen}>
      <DialogTitle>Subscribe</DialogTitle>
      <StyledDialogContent>
        <DialogContentText>Add drinking</DialogContentText>
        <FormControl>
          <InputLabel></InputLabel>
          <Select>
            <MenuItem>coffee</MenuItem>
            <MenuItem>tea</MenuItem>
            <MenuItem>water</MenuItem>
          </Select>
        </FormControl>
        <StyledBox>
          <StyledTextField value={drink} onChange={(e) => handleChange(e)} />
          <InputLabel>ml</InputLabel>
        </StyledBox>
      </StyledDialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={toggleModal}>
          Decline
        </Button>
        <Button variant="outlined" onClick={editDrinkItem}>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};
