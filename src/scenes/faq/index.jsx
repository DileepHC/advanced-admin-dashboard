// src/scenes/faq/index.jsx
import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary.main} variant="h5">
            What is the source of your milk?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our milk is sourced directly from local dairy farms within a 50-kilometer radius, ensuring freshness and supporting community farmers. We maintain strict quality control from farm to processing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary.main} variant="h5">
            How do you ensure the quality and safety of your dairy products?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We adhere to rigorous quality and safety standards, including daily testing of raw milk, pasteurization, and regular inspections of our processing facilities. All products comply with national food safety regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary.main} variant="h5">
            What types of dairy products do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a wide range of dairy products including fresh milk (full cream, toned, double toned), curd (yogurt), butter, ghee (clarified butter), paneer (Indian cheese), and various flavored milk options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary.main} variant="h5">
            Can I place bulk orders for events or businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer bulk ordering for businesses, caterers, and events. Please contact our sales team directly through the 'Contact Us' page or call our dedicated bulk order line for customized pricing and delivery options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary.main} variant="h5">
            What is your delivery schedule and area?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our delivery schedule varies by location. Please enter your pincode on the product page or during checkout to see the available delivery slots and whether we serve your area. We strive for fresh, timely deliveries daily.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;