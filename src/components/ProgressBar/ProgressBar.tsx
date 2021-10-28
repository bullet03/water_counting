import React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const ProgressBar = () => {
  return (
    <Box>
      <LinearProgress variant="determinate" value={50} />
    </Box>
  );
};
