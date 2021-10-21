import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import coffee from "../../assets/images/coffee.png";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledIconButton,
} from "./styles";

interface IDefaultProps {
  cardTitle: string;
  deleteDrinkItem: (id: number) => void;
  editDrinkItem: () => void;
  index: number;
}

export const Card: React.FC<IDefaultProps> = ({
  cardTitle,
  deleteDrinkItem,
  editDrinkItem,
  index,
}) => {
  const [ml, setMl] = useState(300);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const editDrink = () => {
    setIsInputDisabled(!isInputDisabled);
    editDrinkItem();
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={coffee}
        alt="coffee"
        sx={{
          height: "44px",
          width: "54px",
          boxSizing: "border-box",
          paddingLeft: "10px",
        }}
      />
      <StyledCardContent>
        <Typography variant="body2" component="div">
          <TextField
            label={cardTitle}
            id="cardTitle"
            variant="standard"
            disabled={isInputDisabled}
          />
        </Typography>
        <Typography variant="body2">
          <TextField
            label={`${ml} ml`}
            id="drink-ml"
            variant="standard"
            disabled={isInputDisabled}
          />
        </Typography>
      </StyledCardContent>
      <CardActions>
        <StyledIconButton onClick={editDrink}>
          <EditIcon />
        </StyledIconButton>
        <StyledIconButton onClick={() => deleteDrinkItem(index)}>
          <DeleteIcon />
        </StyledIconButton>
      </CardActions>
    </StyledCard>
  );
};
