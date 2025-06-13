// src/scenes/blockedCases/index.jsx
import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const BlockedCases = () => {
  return (
    <Box m="20px">
      <Header title="Blocked Cases" subtitle="List of blocked cases" />
      {/* Add data grid for blocked cases */}
    </Box>
  );
};

export default BlockedCases;