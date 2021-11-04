import React, { useState } from "react";

import { AddDrinkItemButton } from "../../components/AddDrinkItemButton";
import { AddDrinkItemModal } from "../../components/AddDrinkItemModal";
import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";

import { StyledContainer } from "./styles";

export const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <StyledContainer maxWidth="sm">
      <Data />
      <ProgressBar />
      <CardsList />
      <AddDrinkItemButton />
      {isModalOpen && <AddDrinkItemModal />}
    </StyledContainer>
  );
};
