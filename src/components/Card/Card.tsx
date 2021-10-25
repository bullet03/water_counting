import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

import DrinkItemDataModel from "../../models/drinkItemDataModel";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledIconButton,
} from "./styles";

interface IDefaultProps {
  drinksItem: DrinkItemDataModel;
  deleteDrinkItem: (id: string) => void;
  editDrinkItem: () => void;
}

export const Card: React.FC<IDefaultProps> = ({
  drinksItem,
  deleteDrinkItem,
  editDrinkItem,
}) => {
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const editDrink = () => {
    setIsInputDisabled(!isInputDisabled);
    editDrinkItem();
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={drinksItem.imageHref}
        alt="coffee"
        sx={{
          height: "44px",
          width: "54px",
          boxSizing: "border-box",
          paddingLeft: "10px",
        }}
      />
      <StyledCardContent>
        <TextField
          label={drinksItem.title}
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
