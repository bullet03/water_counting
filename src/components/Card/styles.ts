import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
