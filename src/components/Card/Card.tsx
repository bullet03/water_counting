import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

import DrinkItemModel from "../../models/drinkItemModel";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledIconButton,
} from "./styles";

interface IDefaultProps {
  drinksItem: DrinkItemModel;
  deleteDrinkItem: (id: string) => void;
  editDrinkItem: () => void;
}

export const Card: React.FC<IDefaultProps> = ({
  drinksItem,
  deleteDrinkItem,
  editDrinkItem,
}) => {
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const { title, imageSrc } = drinksItem.drink;

  const editDrink = () => {
    setIsInputDisabled(!isInputDisabled);
    editDrinkItem();
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
        <StyledIconButton onClick={() => deleteDrinkItem(drinksItem.id)}>
          <DeleteIcon />
        </StyledIconButton>
      </CardActions>
    </StyledCard>
  );
};
