// src/theme.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import {
  grey,
  blueGrey,
  deepPurple,
  teal,
  common,
  lightBlue,
  amber,
  red,
  green
} from "@mui/material/colors";

// Context for toggling color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Function to generate color tokens based on the current mode
export const tokens = (mode) => ({
  grey: grey,
  red: {
    100: red[100], 200: red[200], 300: red[300], 400: red[400], 500: red[500],
    600: red[600], 700: red[700], 800: red[800], 900: red[900],
  },
  amber: {
    100: amber[100], 200: amber[200], 300: amber[300], 400: amber[400], 500: amber[500],
    600: amber[600], 700: amber[700], 800: amber[800], 900: amber[900],
  },
  green: {
    100: green[100], 200: green[200], 300: green[300], 400: green[400], 500: green[500],
    600: green[600], 700: green[700], 800: green[800], 900: green[900],
  },

  blueAccent: {
    100: lightBlue[100], 200: lightBlue[200], 300: lightBlue[300], 400: lightBlue[400],
    500: lightBlue[500], 600: lightBlue[600], 700: lightBlue[700], 800: lightBlue[800],
    900: lightBlue[900],
  },
  greenAccent: {
    100: teal[100], 200: teal[200], 300: teal[300], 400: teal[400], 500: teal[500],
    600: teal[600], 700: teal[700], 800: teal[800], 900: teal[900],
  },

  ...(mode === "dark"
    ? {
        // DARK MODE PALETTE
        primary: {
          main: blueGrey[900], light: blueGrey[800], dark: "#1A202C", contrastText: common.white,
        },
        secondary: {
          main: deepPurple[200], light: deepPurple[100], dark: deepPurple[300], contrastText: blueGrey[900],
        },
        neutral: {
          dark: grey[600], main: grey[400], light: grey[200], contrastText: blueGrey[900],
        },
        background: {
          default: "#121212", paper: blueGrey[900],
        },
        text: {
          primary: common.white, secondary: grey[400],
        },
        divider: grey[800],
        action: {
          edit: amber[500], editHover: amber[600],
          delete: red[500], deleteHover: red[600],
          success: green[500], successHover: green[600],
          purple: deepPurple[400], purpleHover: deepPurple[500],
          hover: 'rgba(255, 255, 255, 0.08)',
          editIconButtonBg: lightBlue[800],
          editIconButtonBgHover: lightBlue[900],
          deleteIconButtonBg: red[800],
          deleteIconButtonBgHover: red[900],
        },
        shadows: {
            light: "rgba(0, 0, 0, 0.1)", medium: "rgba(0, 0, 0, 0.3)", strong: "rgba(0, 0, 0, 0.5)",
        },
      }
    : {
        // LIGHT MODE PALETTE
        primary: {
          main: common.white, light: "#F9F9F9", dark: "#F0F0F0", contrastText: grey[900],
        },
        secondary: {
          main: "#3498DB", light: lightBlue[400], dark: "#2980B9", contrastText: common.white,
        },
        neutral: {
          dark: grey[900], main: grey[700], light: grey[500], lighter: "#E6E9ED", contrastText: grey[900],
        },
        background: {
          default: "#F3F7F9", paper: common.white,
        },
        text: {
          primary: grey[900], secondary: grey[700],
        },
        divider: "#E6E9ED",
        action: {
          edit: amber[500], editHover: amber[600],
          delete: red[500], deleteHover: red[600],
          success: green[500], successHover: green[600],
          purple: "#8E44AD", purpleHover: "#7A3C9D",
          hover: 'rgba(0, 0, 0, 0.04)',
          editIconButtonBg: lightBlue[600],
          editIconButtonBgHover: lightBlue[700],
          deleteIconButtonBg: red[600],
          deleteIconButtonBgHover: red[700],
        },
        shadows: {
            light: "rgba(0, 0, 0, 0.05)", medium: "rgba(0, 0, 0, 0.1)", strong: "rgba(0, 0, 0, 0.2)",
        },
      }),
});

// Hook for managing theme mode and returning theme object
export const useMode = () => {
  const [mode, setMode] = useState("dark");

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
      mode,
      ...tokens(mode),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 48,
        color: mode === "light" ? grey[900] : tokens(mode).text.primary,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 35.2,
        color: mode === "light" ? grey[900] : tokens(mode).text.primary,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 28,
        color: mode === "light" ? grey[900] : tokens(mode).text.primary,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 22.4,
        color: mode === "light" ? grey[800] : tokens(mode).text.secondary,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 18,
        color: mode === "light" ? grey[700] : tokens(mode).text.primary,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
        color: mode === "light" ? grey[600] : tokens(mode).text.primary,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.palette.mode === 'light' ? '0 2px 4px rgba(0, 0, 0, 0.04)' : 'none',
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "12px",
            boxShadow: theme.palette.mode === 'light'
              ? `0 8px 20px ${tokens('light').shadows.medium}`
              : `0 4px 10px ${tokens('dark').shadows.medium}`,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            border: theme.palette.mode === 'light' ? `1px solid ${theme.palette.neutral.lighter}` : 'none',
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "8px",
            // The default button background and text are already defined,
            // but we might refine them based on farmer.css
            // backgroundColor: theme.palette.secondary.main, // Moved to specific variants
            // color: theme.palette.secondary.contrastText,
            // '&:hover': {
            //   backgroundColor: theme.palette.secondary.dark,
            // },
            boxShadow: `0 2px 5px ${tokens(mode).shadows.light}`,
            textTransform: 'none', // Common for modern UIs
          }),
          contained: ({ theme }) => ({ // Style for all contained buttons
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
              boxShadow: `0 4px 8px ${tokens(mode).shadows.medium}`, // Deeper shadow on hover
            },
          }),
          outlined: ({ theme }) => ({
            borderColor: theme.palette.divider,
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.neutral.main,
            },
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.neutral.main,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              color: theme.palette.secondary.main,
            },
          }),
        },
      },
      MuiInputBase: { // Applies to TextField's internal input
        styleOverrides: {
          root: ({ theme }) => ({
            // This is the main input field styling
            backgroundColor: theme.palette.background.default, // Use background.default for inputs
            borderRadius: '8px',
            border: `1px solid ${theme.palette.divider}`, // Default border for inputs
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.secondary.main, // Border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.secondary.main, // Border color when focused
              boxShadow: `0 0 0 0.15rem ${theme.palette.secondary.main}40`, // Focus shadow
            },
            // For filled variant, you might want to adjust its background too
            '&.MuiInputBase-filled': {
              backgroundColor: theme.palette.mode === 'light' ? grey[100] : blueGrey[800], // Filled specific background
              borderRadius: '8px',
            },
            color: theme.palette.text.primary, // Text color inside inputs
          }),
        },
      },
      MuiOutlinedInput: { // Specifically for outlined variant
        styleOverrides: {
          notchedOutline: ({ theme }) => ({
            borderColor: theme.palette.divider, // Default border color
          }),
        },
      },
      MuiInputLabel: { // Styles for input labels
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary, // Default label color
            '&.Mui-focused': {
              color: theme.palette.secondary.main, // Label color when focused
            },
            '&.Mui-error': {
              color: theme.palette.error.main, // Label color on error
            },
          }),
        },
      },
      MuiSelect: { // Styles for Select component
        styleOverrides: {
          select: ({ theme }) => ({
            backgroundColor: theme.palette.background.default, // Match input background
            borderRadius: '8px',
            '&:focus': { // Ensure focus style matches TextField
              borderRadius: '8px',
              backgroundColor: theme.palette.background.default,
            },
          }),
        },
      },
      MuiMenuItem: { // Styles for menu items in Select
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected,
              color: theme.palette.secondary.main,
            },
          }),
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '12px',
            backgroundColor: theme.palette.primary.main,
          }),
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light,
            '& .MuiTableCell-head': {
              color: theme.palette.neutral.dark,
              borderBottom: `2px solid ${theme.palette.divider}`,
            },
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            borderBottom: `1px solid ${theme.palette.divider}`,
            padding: '15px 20px',
          }),
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.mode === 'light' ? '#fcfcfc' : blueGrey[850],
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary,
          }),
        },
      },
      // Override for Modal component to give it a distinct background and shadow
      MuiModal: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiBackdrop-root': {
              backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)',
            },
          }),
        },
      },
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};