import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

import DrinkItemModel from "../../models/drinkItemModel";
import { deleteDrinkItem } from "../../redux/reducers/drinkItemsData";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledIconButton,
} from "./styles";

interface IDefaultProps {
  drinksItem: DrinkItemModel;
}

export const Card: React.FC<IDefaultProps> = ({ drinksItem }) => {
  const dispatch = useDispatch();
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const { title, imageSrc } = drinksItem.drink;

  const editDrink = () => {
    setIsInputDisabled(!isInputDisabled);
    console.log("ggg");
  };

  return (
    <StyledCard>
      <StyledCardMedia image={imageSrc} />
      <StyledCardContent>
        <TextField
          label={title}
          id="cardTitle"
          variant="standard"
          disabled={isInputDisabled}
        />
        <TextField
          label={`${drinksItem.ml} ml`}
          id="drink-ml"
          variant="standard"
          disabled={isInputDisabled}
        />
      </StyledCardContent>
      <CardActions>
        <StyledIconButton onClick={editDrink}>
          <EditIcon />
        </StyledIconButton>
        <StyledIconButton
          onClick={() => dispatch(deleteDrinkItem(drinksItem.id))}
        >
          <DeleteIcon />
        </StyledIconButton>
      </CardActions>
    </StyledCard>
  );
};
