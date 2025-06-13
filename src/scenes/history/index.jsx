// src/scenes/history/index.jsx
import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const History = () => {
  return (
    <Box m="20px">
      <Header title="History" subtitle="View your activity history" />
      {/* Add history content here, e.g., a data grid */}
    </Box>
  );
};

export default History;