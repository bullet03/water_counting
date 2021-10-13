import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const ProgressBar = () => {
  return (
    <Box>
      <LinearProgress variant="buffer" value={50} valueBuffer={50} />
    </Box>
  );
};
