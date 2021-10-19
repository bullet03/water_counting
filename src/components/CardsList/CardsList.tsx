import React from "react";

import Grid from "@mui/material/Grid";

import { cardsData } from "../../data/cardsData";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

interface IDefaultProps {
  setDrinksData: () => void;
}

export const CardsList: React.FC<IDefaultProps> = ({ setDrinksData }) => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((cardTitle) => (
        <StyledGridItem item xs={12}>
          <Card cardTitle={cardTitle} setDrinksData={setDrinksData} />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
