import React from "react";

import { StyledBox, StyledLinearProgress } from "./styles";

export const ProgressBar = () => {
  return (
    <StyledBox>
      <StyledLinearProgress variant="determinate" value={50} />
    </StyledBox>
  );
};
