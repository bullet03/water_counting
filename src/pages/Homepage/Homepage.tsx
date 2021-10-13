import React from "react";

import Container from "@mui/material/Container";

import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/UI/Button";

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   }
// })

export const Homepage = () => {
  return (
    <Container maxWidth="sm">
      <Data />
      {/* <ProgressBar /> */}
      <CardsList />
      <Button />
    </Container>
  );
};
