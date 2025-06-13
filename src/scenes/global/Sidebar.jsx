// src/scenes/global/Sidebar.jsx
import React, { useState } from "react";
// Import the new components and styles from react-pro-sidebar v1
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme, Divider } from "@mui/material"; // Import Divider
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

// Import Material Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


// Component for a single menu item
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={<Link to={to} />} // Use component prop for Link
      active={selected === title}
      style={{
        // Base color for menu item text and icon
        color: selected === title ? colors.secondary.main : colors.neutral.light,
        // Active item background (from theme.js primary.light)
        backgroundColor: selected === title ? `${colors.primary.light} !important` : "transparent",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {/* Reduced font size for menu items */}
      <Typography sx={{ fontSize: '0.85rem' }}>{title}</Typography>
    </MenuItem>
  );
};

// Main Sidebar Component
const AppSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard"); // Default selected item

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Make sidebar take full height
        // --- Sidebar Root Styling ---
        "& .ps-sidebar-root": {
          border: "none !important", // Remove default border
        },
        // --- Sidebar Container Background & Scrollbar ---
        "& .ps-sidebar-container": {
          backgroundColor: `${colors.primary.dark} !important`, // Dark mode sidebar background
          // Override for light mode if primary.dark is too dark:
          ...(theme.palette.mode === 'light' && {
            backgroundColor: `${colors.primary.main} !important`, // Light mode sidebar background
          }),
          overflowY: 'auto', // Enable scrolling if content overflows
          // Custom Scrollbar for Webkit (Chrome, Safari)
          '&::-webkit-scrollbar': {
            width: '6px', // Thin scrollbar width
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', // Invisible-like thumb
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent', // Invisible track
          },
          // Custom Scrollbar for Firefox
          scrollbarWidth: 'thin', // 'auto' or 'thin'
          scrollbarColor: `${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'} transparent`, // thumb track
        },
        // --- Menu Button (Individual Item) Styling ---
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
          // Text/Icon color for non-active items
          color: colors.neutral.light, // Default text color for items
          padding: "12px 20px !important", // Ensure full visibility and good spacing
          borderRadius: "8px", // Subtle rounded corners for items
          margin: "4px 10px", // Margin between items for visual separation

          "&:hover": {
            color: `${colors.secondary.main} !important`, // Accent color on hover
            backgroundColor: `${colors.primary.light} !important`, // Lighter hover background (from theme.js)
          },
        },
        // --- Active Menu Item Styling ---
        "& .ps-menu-button.ps-active": {
          // Color is already set in the Item component based on `selected` prop,
          // but ensure background here for consistency
          backgroundColor: `${colors.primary.light} !important`, // Lighter active background
          color: `${colors.secondary.main} !important`, // Active text color
        },
        // --- Material UI Icon Styling within Menu Buttons ---
        "& .ps-menu-button .MuiSvgIcon-root": {
          color: 'inherit', // Icons inherit color from parent MenuItem for hover/active state
        },
      }}
    >
      <Sidebar collapsed={collapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => collapseSidebar(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 30px 0",
              color: colors.neutral.light, // Icon color for the collapse button
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                sx={{
                  // Container for logo and collapse icon
                }}
              >
                {/* Company Logo with Shadowing Effect */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // This box gives the 'background image' feel with shadow
                    borderRadius: '8px', // Match menu item border radius
                    p: 1, // Padding around the image to give shadow space
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 4px 12px rgba(0, 0, 0, 0.1)' // Soft shadow for light mode
                      : '0 4px 12px rgba(0, 0, 0, 0.7)', // Stronger shadow for dark mode
                    // Adding a slight background to the logo box for more depth
                    backgroundColor: theme.palette.mode === 'light' ? colors.background.paper : colors.primary.main,
                  }}
                >
                  <img
                    alt="company-logo"
                    src={"/assets/Company logo.jpg"} // Make sure this path is correct
                    style={{
                      width: "140px", // Increased width
                      height: "60px", // Increased height
                      objectFit: "contain", // Ensures the image fits without cropping
                    }}
                  />
                </Box>

                {/* Collapse Button (visible when sidebar is expanded) */}
                <IconButton onClick={() => collapseSidebar(!collapsed)}
                  sx={{ color: colors.neutral.light }} // Set color for the collapse icon
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* NO USER PROFILE SECTION */}

          {/* Menu Items */}
          <Box> {/* Removed paddingLeft here as individual menu items now have margin */}
            <Item
              title="Dashboard"
              to="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Separator for 'Data' section */}
            <Divider sx={{ my: 1, borderColor: colors.divider, opacity: 0.5 }} />

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="History"
              to="/history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Separator for 'Pages' section */}
            <Divider sx={{ my: 1, borderColor: colors.divider, opacity: 0.5 }} />

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Blocked Cases"
              to="/blocked-cases"
              icon={<LockOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Help Centre"
              to="/help-centre"
              icon={<InfoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Separator for 'Charts' section */}
            <Divider sx={{ my: 1, borderColor: colors.divider, opacity: 0.5 }} />

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Log out"
              to="/logout"
              icon={<LogoutOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AppSidebar;