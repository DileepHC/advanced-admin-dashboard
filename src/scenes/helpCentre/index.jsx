// src/scenes/helpCentre/index.jsx
import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const HelpCentre = () => {
  return (
    <Box m="20px">
      <Header title="Help Centre" subtitle="Find answers and support" />
      {/* Add FAQs, contact info, documentation links */}
    </Box>
  );
};

export default HelpCentre;