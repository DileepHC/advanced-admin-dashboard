// src/scenes/invoices/index.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarContainer,
} from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { common, blueGrey } from "@mui/material/colors"; // Import common for white color

// Custom Toolbar Component for DataGrid
const CustomGridToolbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <GridToolbarContainer
      sx={{
        justifyContent: 'flex-end',
        backgroundColor: colors.primary.dark,
        borderBottom: `1px solid ${colors.divider}`,
        padding: '8px 16px',
        "& .MuiButton-root": {
          color: theme.palette.neutral.main,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          }
        },
        "& .MuiDataGrid-panelFooter button": {
          color: theme.palette.neutral.main,
        }
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};


const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [invoicesData, setInvoicesData] = useState(mockDataInvoices);
  const [showForm, setShowForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    name: "",
    phone: "",
    email: "",
    cost: "",
    date: "",
  });
  const [editingInvoiceId, setEditingInvoiceId] = useState(null);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!/^[A-Za-z\s\-']+$/.test(value)) {
          error = "Name can only contain letters, spaces, hyphens, and apostrophes.";
        } else if (value.length > 25) {
          error = "Name should not exceed 25 characters.";
        }
        break;
      case "phone":
        if (!/^[6-9]{1}[0-9]{9}$/.test(value)) {
          error = "Phone number must be a 10-digit number starting with 6-9.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "cost":
        const costNum = parseFloat(value);
        if (isNaN(costNum) || costNum <= 0) {
          error = "Cost must be a positive number.";
        }
        break;
      case "date":
        if (!value.trim()) {
            error = "Date is required.";
        }
        // You could add more sophisticated date validation here if needed (e.g., regex for YYYY-MM-DD)
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error === "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({ ...newInvoice, [name]: value });
    validateField(name, value);
  };

  const handleEditClick = (id) => {
    const invoiceToEdit = invoicesData.find((invoice) => invoice.id === id);
    if (invoiceToEdit) {
      setNewInvoice({ ...invoiceToEdit });
      setEditingInvoiceId(id);
      setShowForm(true);
      setErrors({}); // Clear errors when starting edit
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(`Are you sure you want to delete invoice with ID: ${id}?`)) {
      setInvoicesData(invoicesData.filter((invoice) => invoice.id !== id));
      if (editingInvoiceId === id) { // If deleting the invoice currently being edited
        setNewInvoice({ name: "", phone: "", email: "", cost: "", date: "" });
        setEditingInvoiceId(null);
        setShowForm(false);
        setErrors({});
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const isNameValid = validateField("name", newInvoice.name);
    const isPhoneValid = validateField("phone", newInvoice.phone);
    const isEmailValid = validateField("email", newInvoice.email);
    const isCostValid = validateField("cost", newInvoice.cost);
    const isDateValid = validateField("date", newInvoice.date);

    if (
      isNameValid &&
      isPhoneValid &&
      isEmailValid &&
      isCostValid &&
      isDateValid
    ) {
      if (editingInvoiceId) {
        setInvoicesData(
          invoicesData.map((invoice) =>
            invoice.id === editingInvoiceId
              ? { ...newInvoice, cost: parseFloat(newInvoice.cost) }
              : invoice
          )
        );
        setEditingInvoiceId(null);
      } else {
        const newId = invoicesData.length > 0 ? Math.max(...invoicesData.map((invoice) => invoice.id)) + 1 : 1;
        const addedInvoice = { ...newInvoice, id: newId, cost: parseFloat(newInvoice.cost) };
        setInvoicesData([...invoicesData, addedInvoice]);
      }

      // Reset form
      setNewInvoice({
        name: "",
        phone: "",
        email: "",
        cost: "",
        date: "",
      });
      setErrors({}); // Clear all errors
      setShowForm(false); // Hide form after submission
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.secondary.main}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="center">
            <IconButton
              onClick={() => handleEditClick(params.row.id)}
              sx={{
                backgroundColor: colors.action.editIconButtonBg, // Use blue background color
                color: common.white, // Ensure icon color is white
                borderRadius: '50%', // Make it circular
                padding: '5px', // Smaller padding for a smaller background
                width: '30px', // Set fixed width to make it small
                height: '30px', // Set fixed height to make it small
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: colors.action.editIconButtonBgHover, // Hover state for background
                }
              }}
              aria-label="edit"
            >
              <EditIcon sx={{ fontSize: '1.2rem' }} /> {/* Adjust icon size to fit smaller button */}
            </IconButton>
            <IconButton
              onClick={() => handleDeleteClick(params.row.id)}
              sx={{
                backgroundColor: colors.action.deleteIconButtonBg, // Use red background color
                color: common.white, // Ensure icon color is white
                borderRadius: '50%', // Make it circular
                padding: '5px', // Smaller padding for a smaller background
                width: '30px', // Set fixed width to make it small
                height: '30px', // Set fixed height to make it small
                ml: '8px', // Add some margin between buttons
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: colors.action.deleteIconButtonBgHover, // Hover state for background
                }
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ fontSize: '1.2rem' }} /> {/* Adjust icon size to fit smaller button */}
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {/* New Box to contain Header and Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="20px" // Add bottom margin for spacing below this header row
      >
        <Header
          title="INVOICES"
          subtitle="List of Invoice Balances"
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.secondary.main,
            color: theme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: colors.secondary.dark,
            },
          }}
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) { // If hiding the form, reset it
              setNewInvoice({ name: "", phone: "", email: "", cost: "", date: "" });
              setEditingInvoiceId(null);
              setErrors({});
            }
          }}
        >
          {editingInvoiceId ? "Editing Invoice" : (showForm ? "Hide Form" : "Add New Invoice")}
        </Button>
      </Box>

      {showForm && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            backgroundColor: colors.primary.main,
            p: "20px",
            borderRadius: "8px",
            mb: "20px",
            boxShadow: `0 4px 10px ${colors.shadows.medium || 'rgba(0,0,0,0.2)'}`,
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            type="text"
            name="name"
            value={newInvoice.name}
            onChange={handleInputChange}
            required
            error={!!errors.name}
            helperText={errors.name}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            inputProps={{
              style: { color: theme.palette.text.primary }
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Phone Number"
            type="tel"
            name="phone"
            value={newInvoice.phone}
            onChange={handleInputChange}
            required
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            inputProps={{
              style: { color: theme.palette.text.primary }
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            type="email"
            name="email"
            value={newInvoice.email}
            onChange={handleInputChange}
            required
            error={!!errors.email}
            helperText={errors.email}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            inputProps={{
              style: { color: theme.palette.text.primary }
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Cost"
            type="number"
            name="cost"
            value={newInvoice.cost}
            onChange={handleInputChange}
            required
            error={!!errors.cost}
            helperText={errors.cost}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            inputProps={{
              style: { color: theme.palette.text.primary }
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Date"
            type="date" // Use type="date" for a date picker
            name="date"
            value={newInvoice.date}
            onChange={handleInputChange}
            required
            error={!!errors.date}
            helperText={errors.date}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
              shrink: true, // Shrink label for date input
              style: { color: theme.palette.text.primary },
            }}
            inputProps={{
              style: { color: theme.palette.text.primary }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: editingInvoiceId ? colors.blueAccent[600] : colors.greenAccent[600],
              color: theme.palette.secondary.contrastText,
              gridColumn: "span 2 / auto",
              maxWidth: "200px",
              justifySelf: "center",
              "&:hover": {
                backgroundColor: editingInvoiceId ? colors.blueAccent[700] : colors.greenAccent[700],
              },
            }}
          >
            {editingInvoiceId ? "Update Invoice" : "Add Invoice"}
          </Button>
          {editingInvoiceId && (
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
                borderColor: theme.palette.divider,
                gridColumn: "span 2 / auto",
                maxWidth: "200px",
                justifySelf: "center",
                "&:hover": {
                  borderColor: theme.palette.neutral.main,
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              onClick={() => {
                setNewInvoice({ name: "", phone: "", email: "", cost: "", date: "" });
                setEditingInvoiceId(null);
                setShowForm(false);
                setErrors({});
              }}
            >
              Cancel Edit
            </Button>
          )}
        </Box>
      )}

      <Box
        m="0" // Adjusted margin as the parent Box now handles spacing
        height="75vh"
        sx={{
          backgroundColor: colors.primary.main,
          borderRadius: "12px",
          overflow: "hidden", // Ensures content within rounded corners is clipped

          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.secondary.main,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary.dark,
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            color: theme.palette.neutral.dark, // Ensures header text color is correct
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary.main,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary.dark,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.secondary.main} !important`,
          },
          "& .MuiDataGrid-toolbarContainer": { // Apply styles directly to the toolbar container
            backgroundColor: colors.primary.dark,
            borderBottom: `1px solid ${colors.divider}`,
            padding: '8px 16px',
          },
          "& .MuiButtonBase-root": { // Affects buttons inside toolbar
            color: `${theme.palette.neutral.main} !important`,
          },
          "& .MuiDataGrid-panelFooter button": { // Affects buttons in the filter panel footer
            color: `${theme.palette.neutral.main} !important`,
          },
          "& .MuiDataGrid-menuList": { // Styles for the column menu list
            backgroundColor: colors.primary.main,
            border: `1px solid ${colors.divider}`,
          },
          "& .MuiMenuItem-root": { // Styles for menu items within the column menu
            color: colors.text.primary,
            "&:hover": {
              backgroundColor: colors.action.hover,
            },
          },
          "& .MuiSwitch-track": { // Styles for density selector switch track
            backgroundColor: `${colors.neutral.dark} !important`,
          },
          "& .MuiSwitch-thumb": { // Styles for density selector switch thumb
            backgroundColor: `${colors.secondary.main} !important`,
          },
          "& .MuiInputBase-root": { // Styles for input fields within the filter toolbar
            backgroundColor: theme.palette.mode === 'light' ? common.white : blueGrey[800],
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={invoicesData} // Use invoicesData state
          columns={columns}
          components={{ Toolbar: CustomGridToolbar }} // Use custom toolbar
        />
      </Box>
    </Box>
  );
};

export default Invoices;