import React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import water from "../../assets/images/water.png";

import { StyledCard } from "./styles";

interface IDefaultProps {
  cardTitle: string;
}

export const Card: React.FC<IDefaultProps> = ({ cardTitle }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={water}
        alt="water splash"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Water to choose from
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
