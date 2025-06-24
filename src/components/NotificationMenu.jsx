// src/components/NotificationMenu.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Button,
  // Removed Avatar import as it's not used here
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useTheme } from "@mui/material";
import { tokens } from "../theme"; // Ensure this path is correct

const NotificationMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // This line gets the colors from your theme

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dummyNotifications = [
    {
      id: 1,
      type: "alert",
      message: "Milk collection missed for Farmer ID #12345.",
    },
    {
      id: 2,
      type: "warning",
      message: "Quality deviation detected in Batch #9876.",
    },
    {
      id: 3,
      type: "success",
      message: "Payment processed for Farmer ID #67890.",
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case "alert":
        return <WarningOutlinedIcon sx={{ color: colors.red[500] }} />; // Accessing colors.red[500]
      case "warning":
        return <WarningOutlinedIcon sx={{ color: colors.amber[500] }} />; // Accessing colors.amber[500]
      case "success":
        return <CheckCircleOutlineOutlinedIcon sx={{ color: colors.green[500] }} />; // Accessing colors.green[500]
      default:
        return null;
    }
  };

  return (
    <Box>
      <IconButton
        id="notification-button"
        aria-controls={open ? "notification-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.red[500], // Accessing colors.red[500]
                display: dummyNotifications.length > 0 ? 'block' : 'none',
            }
        }}
      >
        <NotificationsOutlinedIcon />
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "notification-button",
        }}
        PaperProps={{
          sx: {
            backgroundColor: colors.primary.main,
            borderRadius: "12px",
            boxShadow: `0 8px 30px ${colors.shadows.medium}`,
            minWidth: "300px",
            border: `1px solid ${colors.grey[700]}`,
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            padding: "10px 15px",
            color: colors.neutral.light,
            borderBottom: `1px solid ${colors.grey[700]}`,
          }}
        >
          Recent Alerts & Notifications
        </Typography>
        {dummyNotifications.length === 0 ? (
          <MenuItem onClick={handleClose} sx={{ color: colors.neutral.dark }}>
            No new notifications.
          </MenuItem>
        ) : (
          dummyNotifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={handleClose}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 15px",
                borderBottom: `1px solid ${colors.primary.light}`,
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
            >
              {getNotificationIcon(notification.type)}
              <Typography color={colors.neutral.main} fontSize="0.9rem">
                {notification.message}
              </Typography>
            </MenuItem>
          ))
        )}
        <Divider sx={{ borderColor: colors.grey[700] }} />
        <Box sx={{ p: "10px 15px", display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.secondary.main,
              color: colors.primary.dark,
              "&:hover": {
                backgroundColor: colors.secondary.light,
              },
            }}
            onClick={handleClose}
          >
            View All
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default NotificationMenu;