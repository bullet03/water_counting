import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  backgroundColor: "aliceblue",
  width: "55%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
  height: "60px",
  width: "120px",
  boxSizing: "border-box",
  paddingLeft: "40px",
});

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const StyledIconButton = styled(IconButton)({
  width: "30px",
  height: "30px",
  border: "2px solid #808080",
  borderRadius: "5px",
});
