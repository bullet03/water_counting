import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

export const CardsList = () => {
  const drinksData = useSelector(
    (state: RootState) => state.drinkItems.drinkItems
  );

  return (
    <Grid container spacing={2}>
      {drinksData.map((drinksItem) => (
        <StyledGridItem item xs={12} key={drinksItem.id}>
          <Card drinksItem={drinksItem} />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
