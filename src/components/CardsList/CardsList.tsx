import React from "react";

import Grid from "@mui/material/Grid";

import { cardsData } from "../../data/cardsData";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

interface IDefaultProps {
  deleteDrinkItem: () => void;
  editDrinkItem: () => void;
  drinksData
}

export const CardsList: React.FC<IDefaultProps> = ({
  deleteDrinkItem,
  editDrinkItem,
  drinksData,
}) => {
  return (
    <Grid container spacing={2}>
      {drinksData.map((cardTitle) => (
        <StyledGridItem item xs={12}>
          <Card
            cardTitle={cardTitle}
            deleteDrinkItem={deleteDrinkItem}
            editDrinkItem={editDrinkItem}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
