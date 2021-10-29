import React from "react";

import { AddDrinkItemButton } from "../../components/AddDrinkItemButton";
import { AddDrinkItemModal } from "../../components/AddDrinkItemModal";
import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";

import { StyledContainer } from "./styles";

export const Homepage = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Data />
      <ProgressBar />
      <CardsList />
      <AddDrinkItemButton />
      <AddDrinkItemModal />
    </StyledContainer>
  );
};
