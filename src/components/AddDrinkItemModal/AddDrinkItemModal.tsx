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
  const [drinkItem, setDrinkItem] = useState({
    id: 100,
    ml: 0,
    drink: { title: "coffee", id: 1001, imageSrc: "" },
  });

  const editDrinkItem = () => {
    console.log("g");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDrinkItem({ ...drinkItem, ml: Number(e.target.value) });
  };

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setDrinkItem({
      ...drinkItem,
      drink: { ...drinkItem.drink, title: e.target.value },
    });
  };

  return (
    <Dialog open={isModalOpen}>
      <DialogTitle>Subscribe</DialogTitle>
      <StyledDialogContent>
        <DialogContentText>Add drinking</DialogContentText>
        <FormControl>
          <InputLabel id="drink choice"></InputLabel>
          <Select
            value={drinkItem.drink.title}
            onChange={handleSelect}
            labelId="drink choice"
          >
            <MenuItem value="coffee">coffee</MenuItem>
            <MenuItem value="tea">tea</MenuItem>
            <MenuItem value="water">water</MenuItem>
          </Select>
        </FormControl>
        <StyledBox>
          <StyledTextField value={drinkItem.ml} onChange={handleChange} />
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
