import React from "react";

import Grid from "@mui/material/Grid";

import { cardsData } from "../../data/cardsData";
import { Card } from "../Card";

export const CardsList = () => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((cardTitle) => (
        <Card cardTitle={cardTitle} />
      ))}
    </Grid>
  );
};
