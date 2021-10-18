import React from "react";

import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/UI/Button";

import { StyledContainer } from "./styles";

export const Homepage = () => {
  return (
    <StyledContainer maxWidth="sm" sx={{ backgroundColor: "#99C48E" }}>
      <Data />
      {/* <ProgressBar /> */}
      <CardsList />
      <Button />
    </StyledContainer>
  );
};
