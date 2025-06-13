// src/components/StatBox.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle"; // We'll create this next

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.neutral.light }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {progress && <ProgressCircle progress={progress} />} {/* Optional progress circle */}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.secondary.main }}>
          {subtitle}
        </Typography>
        {increase && (
          <Typography variant="h5" fontStyle="italic" sx={{ color: colors.secondary.main }}>
            {increase}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StatBox;