import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/system/Box";

export const Loading: React.FC = () => (
  <Box sx={{ width: "100%" }}>
    <LinearProgress />
  </Box>
);
