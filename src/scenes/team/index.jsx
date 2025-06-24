// src/scenes/team/index.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Modal, // Import Modal
  Backdrop, // Import Backdrop for smooth transition
  Fade,     // Import Fade for smooth transition
} from "@mui/material";

import { common, blueGrey } from "@mui/material/colors";
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
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// Custom Toolbar Component (unchanged)
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

// Modal style for centering
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
  maxHeight: '90vh', // Limit height
  overflowY: 'auto', // Scroll if content is too long
  bgcolor: 'background.paper', // Uses theme's paper background
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  outline: 'none', // Remove outline on focus
};


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [teamData, setTeamData] = useState(mockDataTeam);
  const [openModal, setOpenModal] = useState(false); // State for modal open/close
  const [newMember, setNewMember] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    access: "user",
  });
  const [editingMemberId, setEditingMemberId] = useState(null);

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
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error === "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
    validateField(name, value);
  };

  const handleEditClick = (id) => {
    const memberToEdit = teamData.find((member) => member.id === id);
    if (memberToEdit) {
      setNewMember({ ...memberToEdit });
      setEditingMemberId(id);
      setOpenModal(true); // Open modal for editing
      setErrors({});
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(`Are you sure you want to delete member with ID: ${id}?`)) {
      setTeamData(teamData.filter((member) => member.id !== id));
      if (editingMemberId === id) {
        setNewMember({ name: "", age: "", phone: "", email: "", access: "user" });
        setEditingMemberId(null);
        setOpenModal(false); // Close modal if current editing member is deleted
        setErrors({});
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateField("name", newMember.name);
    const isAgeValid = validateField("age", newMember.age);
    const isPhoneValid = validateField("phone", newMember.phone);
    const isEmailValid = validateField("email", newMember.email);

    if (isNameValid && isAgeValid && isPhoneValid && isEmailValid) {
      if (editingMemberId) {
        setTeamData(
          teamData.map((member) =>
            member.id === editingMemberId
              ? { ...newMember, age: parseInt(newMember.age, 10) }
              : member
          )
        );
        setEditingMemberId(null);
      } else {
        const newId = teamData.length > 0 ? Math.max(...teamData.map((member) => member.id)) + 1 : 1;
        const addedMember = { ...newMember, id: newId, age: parseInt(newMember.age, 10) };
        setTeamData([...teamData, addedMember]);
      }

      setNewMember({
        name: "",
        age: "",
        phone: "",
        email: "",
        access: "user",
      });
      setErrors({});
      setOpenModal(false); // Close modal on successful submission
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  // Function to handle data export to .xlsx
  const handleExportData = () => {
    const exportData = teamData.map(member => ({
        ID: member.id,
        Name: member.name,
        Age: member.age,
        'Phone Number': member.phone,
        Email: member.email,
        'Access Level': member.access,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Team Data");
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, "team_data.xlsx");
  };

  const handleOpenAddModal = () => {
    setNewMember({ name: "", age: "", phone: "", email: "", access: "user" }); // Reset form
    setEditingMemberId(null); // Ensure not in editing mode
    setErrors({}); // Clear errors
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewMember({ name: "", age: "", phone: "", email: "", access: "user" }); // Reset form on close
    setEditingMemberId(null); // Clear editing ID on close
    setErrors({}); // Clear errors on close
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.secondary.main
                : access === "manager"
                ? colors.blueAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={common.white} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
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
                backgroundColor: colors.action.editIconButtonBg,
                color: common.white,
                borderRadius: '50%',
                padding: '5px',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: colors.action.editIconButtonBgHover,
                }
              }}
              aria-label="edit"
            >
              <EditIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteClick(params.row.id)}
              sx={{
                backgroundColor: colors.action.deleteIconButtonBg,
                color: common.white,
                borderRadius: '50%',
                padding: '5px',
                width: '30px',
                height: '30px',
                ml: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: colors.action.deleteIconButtonBgHover,
                }
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {/* Box to contain Header and Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="20px"
      >
        <Header title="TEAM" subtitle="Managing the Team Members" />

        {/* Box to group the two buttons on the right */}
        <Box display="flex" gap="10px" alignItems="center">
          {/* Download Icon Button */}
          <IconButton
            onClick={handleExportData}
            sx={{
                backgroundColor: colors.greenAccent[600],
                color: common.white,
                borderRadius: '50%',
                padding: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                    backgroundColor: colors.greenAccent[700],
                },
                boxShadow: `0 2px 5px ${colors.shadows.light}`,
            }}
            aria-label="download data"
            title="Download Team Data"
          >
            <DownloadOutlinedIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>

          {/* Add New Team Member Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": {
                backgroundColor: colors.secondary.dark,
              },
            }}
            onClick={handleOpenAddModal} // Open the modal
          >
            Add New Team Member
          </Button>
        </Box>
      </Box>

      {/* Form Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            <Typography variant="h3" id="transition-modal-title" component="h2" mb={2} color={theme.palette.text.primary}>
              {editingMemberId ? "Edit Team Member" : "Add New Team Member"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                // Removed direct background and shadow here as it's handled by modalStyle
              }}
            >
              <TextField
                fullWidth
                variant="outlined" // Changed to outlined for more control over styling
                label="Name"
                type="text"
                name="name"
                value={newMember.name}
                onChange={handleInputChange}
                required
                error={!!errors.name}
                helperText={errors.name}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  style: { color: theme.palette.text.secondary }, // Adjust label color
                }}
                inputProps={{
                  style: { color: theme.palette.text.primary }
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Age"
                type="number"
                name="age"
                value={newMember.age}
                onChange={handleInputChange}
                required
                error={!!errors.age}
                helperText={errors.age}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  style: { color: theme.palette.text.secondary },
                }}
                inputProps={{
                  style: { color: theme.palette.text.primary }
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                type="tel"
                name="phone"
                value={newMember.phone}
                onChange={handleInputChange}
                required
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  style: { color: theme.palette.text.secondary },
                }}
                inputProps={{
                  style: { color: theme.palette.text.primary }
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={newMember.email}
                onChange={handleInputChange}
                required
                error={!!errors.email}
                helperText={errors.email}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  style: { color: theme.palette.text.secondary },
                }}
                inputProps={{
                  style: { color: theme.palette.text.primary }
                }}
              />
              <FormControl fullWidth variant="outlined" sx={{ gridColumn: "span 1" }}>
                <InputLabel style={{ color: theme.palette.text.secondary }}>Access Level</InputLabel>
                <Select
                  name="access"
                  value={newMember.access}
                  onChange={handleInputChange}
                  label="Access Level"
                  required
                  sx={{ color: theme.palette.text.primary }}
                  inputProps={{
                    style: { color: theme.palette.text.primary }
                  }}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
              <Box display="flex" gap="10px" mt={2} sx={{ gridColumn: "1 / -1", justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: editingMemberId ? colors.blueAccent[600] : colors.greenAccent[600],
                    color: theme.palette.secondary.contrastText,
                    "&:hover": {
                      backgroundColor: editingMemberId ? colors.blueAccent[700] : colors.greenAccent[700],
                    },
                  }}
                >
                  {editingMemberId ? "Update Member" : "Add Member"}
                </Button>
                {(editingMemberId || !editingMemberId) && ( // Show Cancel button always in modal context
                  <Button
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      borderColor: theme.palette.divider,
                      "&:hover": {
                        borderColor: theme.palette.neutral.main,
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                    onClick={handleCloseModal} // Close modal
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Box
        m="0"
        height="75vh"
        sx={{
          backgroundColor: colors.primary.main,
          borderRadius: "12px",
          overflow: "hidden",

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
            color: theme.palette.neutral.dark,
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
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: colors.primary.dark,
          },
          "& .MuiButtonBase-root": {
            color: `${theme.palette.neutral.main} !important`,
          },
          "& .MuiDataGrid-panelFooter button": {
            color: `${theme.palette.neutral.main} !important`,
          },
          "& .MuiDataGrid-menuList": {
            backgroundColor: colors.primary.main,
            border: `1px solid ${colors.divider}`,
          },
          "& .MuiMenuItem-root": {
            color: colors.text.primary,
            "&:hover": {
              backgroundColor: colors.action.hover,
            },
          },
          "& .MuiSwitch-track": {
            backgroundColor: `${colors.neutral.dark} !important`,
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: `${colors.secondary.main} !important`,
          },
          // This specific override for MuiInputBase-root inside the table context
          // might conflict with global input styling. Let's keep it here for now
          // but be aware during farmer.css integration.
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.mode === 'light' ? common.white : blueGrey[800],
          }
        }}
      >
        <DataGrid rows={teamData} columns={columns} components={{ Toolbar: CustomGridToolbar }} />
      </Box>
    </Box>
  );
};

export default Team;