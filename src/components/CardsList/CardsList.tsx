import React from "react";

import Grid from "@mui/material/Grid";

import drinkDataModel from "../../models/drinkDataModel";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

interface IDefaultProps {
  deleteDrinkItem: (id: number) => void;
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
      {drinksData.map((drinksItem, index) => (
        <StyledGridItem item xs={12} key={drinksItem.id}>
          <Card
            cardTitle={drinksItem.title}
            deleteDrinkItem={deleteDrinkItem}
            editDrinkItem={editDrinkItem}
            index={index}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
