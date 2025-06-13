// src/scenes/dashboard/index.jsx
import React from "react";
import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header"; // We'll create this next
import StatBox from "../../components/StatBox"; // We'll create this next
import LineChart from "../../components/LineChart"; // We'll create this next
import BarChart from "../../components/BarChart"; // We'll create this next
//import PieChart from "../../components/PieChart"; // We'll create this next
import GeographyChart from "../../components/GeographyChart"; // We'll create this next
import ProgressCircle from "../../components/ProgressCircle"; // We'll create this next
import { mockTransactions } from "../../data/mockData"; // Import mock data
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
                Monthly Analytics
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.secondary.main}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.secondary.main }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
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
                ${transaction.cost}
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
              $48,352 revenue generated
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