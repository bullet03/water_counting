import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import coffee from "../../assets/images/coffee.png";

import { StyledCard, StyledCardMedia, StyledCardContent } from "./styles";

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
          {cardTitle}
        </Typography>
        <Typography variant="body2">{ml} ml</Typography>
      </StyledCardContent>
      <CardActions>
        <IconButton
          onClick={editDrinkItem}
          sx={{
            width: "30px",
            height: "30px",
            border: "2px solid #808080",
            borderRadius: "5px",
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => deleteDrinkItem(index)}
          sx={{
            width: "30px",
            height: "30px",
            border: "2px solid #808080",
            borderRadius: "5px",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};
