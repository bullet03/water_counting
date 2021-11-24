import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import { DrinkTypes } from "../../consts/drinkTypes";
import { cardsData } from "../../data/cardsData";
import { getDrinkNameFromType } from "../../helpers/drinkHelpers";
import { add } from "../../redux/reducers/drinkItemsData";
import { RootState } from "../../redux/store";

import { StyledDialogContent, StyledBox, StyledTextField } from "./styles";

interface IProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const AddDrinkItemModal: React.FC<IProps> = ({
  isModalOpen,
  toggleModal,
}) => {
  const drinksDataR = useSelector(
    (state: RootState) => state.drinkItems.drinkItems
  );
  const dispatch = useDispatch();
  const [drinksData, setDrinksData] = useState(cardsData);
  const [drinkItem, setDrinkItem] = useState({
    ml: 0,
    id: nanoid(),
    drink: { title: "coffee", id: nanoid(), imageSrc: "" },
  });

  const addDrinkItem = () => {
    setDrinksData([...drinksData, drinkItem]);
  };

  const addDrinkItemR = () => {
    dispatch(add(drinkItem));
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
            {Object.values(DrinkTypes).map((drink) => {
              return (
                <MenuItem key={drink} value={drink}>
                  {getDrinkNameFromType(drink)}
                </MenuItem>
              );
            })}
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
        <Button variant="outlined" onClick={addDrinkItemR}>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};
