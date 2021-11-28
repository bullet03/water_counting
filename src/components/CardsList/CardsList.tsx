import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

import { cardsData } from "../../data/cardsData";
import { RootState } from "../../redux/store";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

export const CardsList = () => {
  const dispatch = useDispatch();
  const drinksDataR = useSelector(
    (state: RootState) => state.drinkItems.drinkItems
  );
  const [drinksData, setDrinksData] = useState(cardsData);

  const editDrinkItem = () => {
    console.log("heeey");
  };

  return (
    <Grid container spacing={2}>
      {drinksDataR.map((drinksItem) => (
        <StyledGridItem item xs={12} key={drinksItem.id}>
          <Card drinksItem={drinksItem} editDrinkItem={editDrinkItem} />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
