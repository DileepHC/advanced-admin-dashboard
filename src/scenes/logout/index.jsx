// src/scenes/logout/index.jsx
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process (e.g., clearing tokens, redirecting)
    // In a real application, you'd clear user session, local storage, etc.
    const logoutTimer = setTimeout(() => {
      console.log("User logged out.");
      // Redirect to login page or home after a delay
      navigate("/login"); // Assuming you have a login route
    }, 1500); // Redirect after 1.5 seconds

    return () => clearTimeout(logoutTimer); // Cleanup the timer
  }, [navigate]);

  return (
    <Box m="20px">
      <Header title="Logging Out" subtitle="You are being logged out..." />
      <Typography variant="h6" mt="20px">
        Thank you for using the dashboard. Redirecting to login...
      </Typography>
    </Box>
  );
};

export default Logout;