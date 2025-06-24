// src/scenes/dashboard/index.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  IconButton,
  Select, // Import Select
  MenuItem, // Import MenuItem
  FormControl, // Import FormControl for better form control (optional but good practice)
  InputLabel // Import InputLabel for the select (optional but good practice)
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
//import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [lineChartTimeframe, setLineChartTimeframe] = useState('monthly'); // State for timeframe

  // Function to handle changes in the dropdown
  const handleTimeframeChange = (event) => {
    setLineChartTimeframe(event.target.value);
  };

  // Example cost based on timeframe (you might have a more dynamic way to calculate this)
  const getCostForTimeframe = () => {
    switch (lineChartTimeframe) {
      case 'daily':
        return '₹2,000.00';
      case 'weekly':
        return '₹12,500.00';
      case 'monthly':
      default:
        return '₹59,342.32';
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Welcome Back, Dileep" subtitle="Here is the information about all Documents" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.primary.main,
              color: colors.neutral.light,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary.main}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="550"
            subtitle="Total Verifications"
            icon={
              <EmailIcon
                sx={{ color: colors.secondary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary.main}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="420"
            subtitle="Total Approved"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.secondary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary.main}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="97"
            subtitle="Pending Cases"
            icon={
              <PersonAddIcon
                sx={{ color: colors.secondary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary.main}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="33"
            subtitle="Rejected Cases"
            icon={
              <TrafficIcon
                sx={{ color: colors.secondary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary.main}
          borderRadius="8px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.neutral.light}
              >
                Analytics Over Time
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.secondary.main}
              >
                {getCostForTimeframe()}
              </Typography>
            </Box>
            <Box display="flex" gap="10px" alignItems="center">
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel
                  id="timeframe-select-label"
                  sx={{ color: colors.neutral.light }}
                >
                  Timeframe
                </InputLabel>
                <Select
                  labelId="timeframe-select-label"
                  value={lineChartTimeframe}
                  onChange={handleTimeframeChange}
                  label="Timeframe"
                  sx={{
                    color: colors.neutral.light,
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.secondary.main,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.secondary.main,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.secondary.main,
                    },
                    '.MuiSvgIcon-root': {
                      color: colors.neutral.light,
                    },
                  }}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </FormControl>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.secondary.main }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} timeframe={lineChartTimeframe} /> {/* Pass timeframe prop */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary.main}
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary.light}`}
            colors={colors.neutral.light}
            p="15px"
          >
            <Typography
              color={colors.neutral.light}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary.light}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.secondary.main}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.neutral.light}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.neutral.dark}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.secondary.main}
                p="5px 10px"
                borderRadius="4px"
              >
                ₹{transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary.main}
          p="30px"
          borderRadius="8px"
        >
          <Typography variant="h5" fontWeight="600" color={colors.neutral.light}>
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.secondary.main}
              sx={{ mt: "15px" }}
            >
              ₹48,352 revenue generated
            </Typography>
            <Typography color={colors.neutral.dark}>
              Includes extra expenditures and
              misc expenses
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary.main}
          borderRadius="8px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
            color={colors.neutral.light}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary.main}
          padding="30px"
          borderRadius="8px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ mb: "15px" }}
            color={colors.neutral.light}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;