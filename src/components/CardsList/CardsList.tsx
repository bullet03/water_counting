import React from "react";

import Grid from "@mui/material/Grid";

import drinkDataModel from "../../models/drinkDataModel";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

interface IDefaultProps {
  deleteDrinkItem: () => void;
  editDrinkItem: () => void;
  drinksData: drinkDataModel[];
}

export const CardsList: React.FC<IDefaultProps> = ({
  deleteDrinkItem,
  editDrinkItem,
  drinksData,
}) => {
  return (
    <Grid container spacing={2}>
      {drinksData.map((drinksItem) => (
        <StyledGridItem item xs={12}>
          <Card
            cardTitle={drinksItem.title}
            deleteDrinkItem={deleteDrinkItem}
            editDrinkItem={editDrinkItem}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
