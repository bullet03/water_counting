import React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import water from "../../assets/images/water.png";

import { StyledGrid } from "./styles";

interface IDefaultProps {
  cardTitle: string;
}

export const Card: React.FC<IDefaultProps> = ({ cardTitle }) => {
  return (
    <StyledGrid item xs={12}>
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
    </StyledGrid>
  );
};
