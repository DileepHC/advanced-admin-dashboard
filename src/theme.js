// src/theme.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
// Import specific Material UI colors for easier selection,
// but we'll also use direct hex values for precise matches to your CSS.
import {
  grey,
  blueGrey,
  deepPurple,
  teal,
  common,
  lightBlue, // Potentially for dark mode accents
  amber,     // Potentially for warnings
  red,       // Potentially for errors/danger
  green      // Potentially for success
} from "@mui/material/colors";

// Context for toggling color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Function to generate color tokens based on the current mode
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // DARK MODE PALETTE
        // Aim: Deep, professional, and eye-friendly dark tones with vibrant accents.
        // Good for: Night-time use, reduced eye strain.

        // Primary: Used for background of main elements like cards, panels, topbar.
        // It provides the base darkness.
        primary: {
          main: blueGrey[900], // Dark charcoal/blue-grey for main sections like Topbar, Cards
          light: blueGrey[800], // Slightly lighter shade for hover/active states or subtle distinction
          dark: "#1A202C",     // Very dark background for the Sidebar to give depth
          contrastText: common.white, // Text color on primary background
        },
        // Secondary: Used for accents, interactive elements, highlights.
        secondary: {
          main: deepPurple[200], // A soft, vibrant purple for accents (links, selected items)
          light: deepPurple[100],
          dark: deepPurple[300],
          contrastText: blueGrey[900], // Dark text on light purple accents
        },
        // Neutral: Used for various shades of text, icons, borders.
        neutral: {
          dark: grey[600], // Darker grey for subtle text or disabled states
          main: grey[400], // Standard text color on dark backgrounds
          light: grey[200], // Lighter grey for headings, primary text on dark backgrounds
          contrastText: blueGrey[900],
        },
        // Background: Overall application background.
        background: {
          default: "#121212", // The deepest, almost black background for the body/root container
          paper: blueGrey[900], // Matches primary.main for components like Paper, Modals, Cards
        },
        // Text colors specific for contrast.
        text: {
          primary: common.white, // Main text color
          secondary: grey[400], // Secondary, less prominent text
        },
        // Divider color for separating sections.
        divider: grey[800], // Subtle grey for borders and dividers

        // Custom action colors (using direct hex values for consistency)
        action: {
          edit: amber[500], // Warning/Edit color
          editHover: amber[600],
          delete: red[500], // Danger/Delete color
          deleteHover: red[600],
          success: green[500], // Positive/Success color
          successHover: green[600],
          purple: deepPurple[400], // Specific purple for communication tools
          purpleHover: deepPurple[500],
        },
      }
    : {
        // LIGHT MODE PALETTE
        // Aim: Clean, professional, and airy tones, aligning with your provided CSS.
        // Good for: Day-time use, crisp readability.

        // Primary: Used for background of main elements like cards, panels, topbar.
        primary: {
          main: common.white, // Main content background, cards, header
          light: "#F9F9F9", // Slightly off-white for table headers, subtle backgrounds
          dark: "#F0F0F0", // Button backgrounds, slight distinction for sidebar/nav
          contrastText: grey[900], // Text color on primary background
        },
        // Secondary: Used for accents, interactive elements, highlights.
        secondary: {
          main: "#3498DB", // Your primary action blue (e.g., nav buttons, primary actions)
          light: lightBlue[400], // Lighter blue if needed for variations
          dark: "#2980B9", // Darker blue for hover states, active elements
          contrastText: common.white, // White text on blue accents
        },
        // Neutral: Used for various shades of text, icons, borders.
        neutral: {
          dark: "#34495E", // Strong headings, main titles
          main: "#555E6C", // Primary body text color (professional, readable)
          light: "#7F8C8D", // Secondary text, subtle text, icons
          lighter: "#E6E9ED", // Lightest grey for borders, dividers, subtle separators
          contrastText: grey[900],
        },
        // Background: Overall application background.
        background: {
          default: "#F3F7F9", // Body background color (light, fresh)
          paper: common.white, // Matches primary.main for components like Paper, Modals, Cards
        },
        // Text colors specific for contrast.
        text: {
          primary: "#555E6C", // Main text color
          secondary: "#7F8C8D", // Secondary, less prominent text
        },
        // Divider color for separating sections.
        divider: "#E6E9ED", // Light, clean divider for tables, sections

        // Custom action colors (using direct hex values from your CSS)
        action: {
          edit: "#F39C12", // Warning/Edit color
          editHover: "#E67E22",
          delete: "#E74C3C", // Danger/Delete color
          deleteHover: "#C0392B",
          success: "#2ECC71", // Positive green for add button
          successHover: "#27AE60",
          purple: "#8E44AD", // Purple for communication tools
          purpleHover: "#7A3C9D",
        },
      }),
});

// Hook for managing theme mode and returning theme object
export const useMode = () => {
  const [mode, setMode] = useState("dark"); // Default to dark mode for initial load

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Helper function to get design tokens for theme creation
  const getDesignTokens = (mode) => ({
    palette: {
      mode, // 'dark' or 'light'
      ...tokens(mode), // Spread the color tokens into the palette
    },
    typography: {
      // Ensure 'Poppins' is imported in your index.css or public/index.html
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14, // Base font size
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 48, // 3em from your CSS (assuming base 16px)
        color: mode === "light" ? tokens(mode).neutral.dark : tokens(mode).text.primary,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 35.2, // 2.2em from your CSS
        color: mode === "light" ? tokens(mode).neutral.dark : tokens(mode).text.primary,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 28, // Adjusted to be visually distinct from h2 and h4
        color: mode === "light" ? tokens(mode).neutral.dark : tokens(mode).text.primary,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 22.4, // 1.4em from your CSS
        color: mode === "light" ? tokens(mode).neutral.light : tokens(mode).text.secondary,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 18, // Adjusted
        color: mode === "light" ? tokens(mode).neutral.main : tokens(mode).text.primary,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16, // Adjusted
        color: mode === "light" ? tokens(mode).neutral.main : tokens(mode).text.primary,
      },
    },
    components: {
      // Global component overrides to apply theme colors and styles consistently
      MuiAppBar: { // Assuming you're using AppBar for your Topbar
        styleOverrides: {
          root: ({ theme }) => ({
            // Apply Topbar background color
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.palette.mode === 'light' ? '0 2px 4px rgba(0, 0, 0, 0.04)' : 'none',
          }),
        },
      },
      MuiPaper: { // Used for Cards, Modals, etc.
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "12px", // Matching your CSS for .content, .modal-content
            boxShadow: theme.palette.mode === 'light'
              ? '0 8px 20px rgba(0, 0, 0, 0.06)' // Light mode shadow
              : '0 4px 10px rgba(0, 0, 0, 0.3)', // Dark mode shadow (more subtle but present)
            backgroundColor: theme.palette.primary.main, // Card/Panel background
            color: theme.palette.text.primary, // Default text color within paper
            border: theme.palette.mode === 'light' ? `1px solid ${theme.palette.neutral.lighter}` : 'none', // Light mode border
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "8px",
            // Default button styles, can be overridden by specific variants
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            },
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }),
          // Examples for specific button variants if you use them:
          containedPrimary: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            },
          }),
          // You can create specific button types here for 'edit', 'delete', 'success' etc.
          // Or use custom props or direct styling in components.
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.neutral.main, // Default icon button color
            '&:hover': {
              color: theme.palette.secondary.main, // Accent color on hover
            },
          }),
        },
      },
      MuiInputBase: { // For TextField, Select, etc. input elements
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.mode === 'light' ? common.white : blueGrey[800], // Input background
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider, // Border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.secondary.main, // Hover border
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.secondary.main, // Focus border
              boxShadow: `0 0 0 0.15rem ${theme.palette.secondary.main}40`, // Subtle focus shadow
            },
            color: theme.palette.text.primary, // Input text color
          }),
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '12px',
            backgroundColor: theme.palette.primary.main, // Table background
          }),
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light, // Table header background
            '& .MuiTableCell-head': {
              color: theme.palette.neutral.dark, // Table header text color
              borderBottom: `2px solid ${theme.palette.divider}`,
            },
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary, // Table cell text color
            borderBottom: `1px solid ${theme.palette.divider}`,
            padding: '15px 20px',
          }),
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.mode === 'light' ? '#fcfcfc' : blueGrey[850], // Zebra striping
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // Default hover state
            },
          }),
        },
      },
      MuiSvgIcon: { // For icons
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary, // Default icon color
          }),
        },
      },
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};