import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import coffee from "../../assets/images/coffee.png";

import { StyledCard } from "./styles";

interface IDefaultProps {
  cardTitle: string;
}

export const Card: React.FC<IDefaultProps> = ({ cardTitle }) => {
  const [mls, setMls] = useState(300);
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={coffee}
        alt="coffee"
        sx={{
          height: "54px",
          width: "84px",
          boxSizing: "border-box",
          paddingLeft: "10px",
        }}
      />
      <CardContent sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography variant="body2" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2">{mls} ml</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          sx={{ border: "2px solid #808080", borderRadius: "5px" }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ border: "2px solid #808080", borderRadius: "5px" }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};
