import React from "react";

import Grid from "@mui/material/Grid";

import { cardsData } from "../../data/cardsData";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

export const CardsList = () => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((cardTitle) => (
        <StyledGridItem item xs={12}>
          <Card cardTitle={cardTitle} />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
