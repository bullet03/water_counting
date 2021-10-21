import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  backgroundColor: "aliceblue",
  width: "55%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledCardMedia = styled(CardMedia)({
  height: "44px",
  width: "54px",
  boxSizing: "border-box",
  paddingLeft: "10px",
});
