// src/scenes/contacts/index.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  MenuItem, // Potentially needed if adding select fields later
  Select,   // Potentially needed if adding select fields later
  FormControl, // Potentially needed if adding select fields later
  InputLabel, // Potentially needed if adding select fields later
  IconButton,
} from "@mui/material";

import { common, blueGrey } from "@mui/material/colors"; // Import common for white color
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
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

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


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [contactsData, setContactsData] = useState(mockDataContacts);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    registrarId: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [editingContactId, setEditingContactId] = useState(null);
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
      case "age":
        const ageNum = parseInt(value, 10);
        if (isNaN(ageNum) || !isFinite(value) || ageNum <= 0 || ageNum > 120) {
          error = "Please enter a valid age (1-120).";
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
      case "registrarId":
        if (!value.trim()) {
            error = "Registrar ID is required.";
        }
        break;
      case "address":
        if (!value.trim()) {
            error = "Address is required.";
        }
        break;
      case "city":
        if (!value.trim()) {
            error = "City is required.";
        }
        break;
      case "zipCode":
        if (!/^\d{6}$/.test(value)) { // Assuming 6-digit Indian Pincode/Zip Code
            error = "Zip Code must be a 6-digit number.";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error === "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
    validateField(name, value);
  };

  const handleEditClick = (id) => {
    const contactToEdit = contactsData.find((contact) => contact.id === id);
    if (contactToEdit) {
      setNewContact({ ...contactToEdit });
      setEditingContactId(id);
      setShowForm(true);
      setErrors({}); // Clear errors when starting edit
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(`Are you sure you want to delete contact with ID: ${id}?`)) {
      setContactsData(contactsData.filter((contact) => contact.id !== id));
      if (editingContactId === id) { // If deleting the contact currently being edited
        setNewContact({ name: "", registrarId: "", age: "", phone: "", email: "", address: "", city: "", zipCode: "" });
        setEditingContactId(null);
        setShowForm(false);
        setErrors({});
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const isNameValid = validateField("name", newContact.name);
    const isRegistrarIdValid = validateField("registrarId", newContact.registrarId);
    const isAgeValid = validateField("age", newContact.age);
    const isPhoneValid = validateField("phone", newContact.phone);
    const isEmailValid = validateField("email", newContact.email);
    const isAddressValid = validateField("address", newContact.address);
    const isCityValid = validateField("city", newContact.city);
    const isZipCodeValid = validateField("zipCode", newContact.zipCode);

    if (
      isNameValid &&
      isRegistrarIdValid &&
      isAgeValid &&
      isPhoneValid &&
      isEmailValid &&
      isAddressValid &&
      isCityValid &&
      isZipCodeValid
    ) {
      if (editingContactId) {
        setContactsData(
          contactsData.map((contact) =>
            contact.id === editingContactId
              ? { ...newContact, age: parseInt(newContact.age, 10) }
              : contact
          )
        );
        setEditingContactId(null);
      } else {
        const newId = contactsData.length > 0 ? Math.max(...contactsData.map((contact) => contact.id)) + 1 : 1;
        const addedContact = { ...newContact, id: newId, age: parseInt(newContact.age, 10) };
        setContactsData([...contactsData, addedContact]);
      }

      // Reset form
      setNewContact({
        name: "",
        registrarId: "",
        age: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
      });
      setErrors({}); // Clear all errors
      setShowForm(false); // Hide form after submission
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "registrarId", headerName: "Registrar ID", width: 120 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 90,
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
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
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
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
              setNewContact({ name: "", registrarId: "", age: "", phone: "", email: "", address: "", city: "", zipCode: "" });
              setEditingContactId(null);
              setErrors({});
            }
          }}
        >
          {editingContactId ? "Editing Contact" : (showForm ? "Hide Form" : "Add New Contact")}
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
            value={newContact.name}
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
            label="Registrar ID"
            type="text"
            name="registrarId"
            value={newContact.registrarId}
            onChange={handleInputChange}
            required
            error={!!errors.registrarId}
            helperText={errors.registrarId}
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
            label="Age"
            type="number"
            name="age"
            value={newContact.age}
            onChange={handleInputChange}
            required
            error={!!errors.age}
            helperText={errors.age}
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
            value={newContact.phone}
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
            value={newContact.email}
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
            label="Address"
            type="text"
            name="address"
            value={newContact.address}
            onChange={handleInputChange}
            required
            error={!!errors.address}
            helperText={errors.address}
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
            label="City"
            type="text"
            name="city"
            value={newContact.city}
            onChange={handleInputChange}
            required
            error={!!errors.city}
            helperText={errors.city}
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
            label="Zip Code"
            type="text" // Keep as text for custom validation, convert to number if needed for storage
            name="zipCode"
            value={newContact.zipCode}
            onChange={handleInputChange}
            required
            error={!!errors.zipCode}
            helperText={errors.zipCode}
            sx={{ gridColumn: "span 1" }}
            InputLabelProps={{
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
              backgroundColor: editingContactId ? colors.blueAccent[600] : colors.greenAccent[600],
              color: theme.palette.secondary.contrastText,
              gridColumn: "span 2 / auto",
              maxWidth: "200px",
              justifySelf: "center",
              "&:hover": {
                backgroundColor: editingContactId ? colors.blueAccent[700] : colors.greenAccent[700],
              },
            }}
          >
            {editingContactId ? "Update Contact" : "Add Contact"}
          </Button>
          {editingContactId && (
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
                setNewContact({ name: "", registrarId: "", age: "", phone: "", email: "", address: "", city: "", zipCode: "" });
                setEditingContactId(null);
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
        m="0" // Changed from "40px 0 0 0" to "0" as the outer Box now handles margin below header
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
          rows={contactsData} // Use contactsData state
          columns={columns}
          components={{ Toolbar: CustomGridToolbar }} // Use custom toolbar
        />
      </Box>
    </Box>
  );
};

export default Contacts;