import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

import { cardsData } from "../../data/cardsData";
import { update } from "../../redux/reducers/drinkItemsData";
import { RootState } from "../../redux/store";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

export const CardsList = () => {
  const drinksDataR = useSelector(
    (state: RootState) => state.drinkItems.drinkItems
  );
  const [drinksData, setDrinksData] = useState(cardsData);

  const deleteDrinkItem = (id: string) => {
    const filtered = drinksData.filter((drinkItem) => drinkItem.id !== id);
    setDrinksData(filtered);
  };

  const editDrinkItem = () => {
    console.log("heeey");
  };

  useEffect(() => {
    update();
  }, [drinksData]);

  return (
    <Grid container spacing={2}>
      {drinksDataR.map((drinksItem) => (
        <StyledGridItem item xs={12} key={drinksItem.id}>
          <Card
            drinksItem={drinksItem}
            deleteDrinkItem={deleteDrinkItem}
            editDrinkItem={editDrinkItem}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
