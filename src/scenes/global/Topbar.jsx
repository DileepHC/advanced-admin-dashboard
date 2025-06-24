// src/scenes/global/Topbar.jsx
import React, { useContext } from "react";
import { Box, IconButton, useTheme, InputBase, Typography, Avatar } from "@mui/material"; // Added Typography and Avatar
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

// Import your custom components
import AiChatIcon from "../../components/AiChatIcon";
import NotificationMenu from "../../components/NotificationMenu"; // Make sure this path is correct

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary.main}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center"> {/* Added alignItems="center" for vertical alignment */}
        {/* AI Assistant Icon */}
        <AiChatIcon />

        {/* Theme Toggle Icon */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notification Menu (replaces NotificationsOutlinedIcon) */}
        <NotificationMenu />

        {/* Profile Section (replaces SettingsOutlinedIcon and PersonOutlinedIcon) */}
        <Box display="flex" alignItems="center" ml="15px" mr="5px"> {/* Added margin for spacing */}
          <Avatar
            alt="Dileep"
            src="https://i.pravatar.cc/150?img=68" // Dummy profile image URL
            sx={{ width: 32, height: 32, mr: 1, border: `1px solid ${colors.secondary.main}` }}
          />
          <Typography variant="body1" fontWeight="bold" color={colors.neutral.light}>
            Dileep
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;