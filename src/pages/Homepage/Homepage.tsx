import React from "react";

import { AddDrinkItemModal } from "../../components/AddDrinkItemModal";
import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/UI/Button";

import { StyledContainer } from "./styles";

export const Homepage = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Data />
      <ProgressBar />
      <CardsList />
      <Button />
      <AddDrinkItemModal />
    </StyledContainer>
  );
};
