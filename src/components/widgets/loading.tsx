import React from "react";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Loading: React.FC = () => (
  <Box sx={{ width: "100%" }}>
    <LinearProgress />
  </Box>
);
