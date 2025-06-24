// src/components/BarChart.jsx
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData"; // Ensure this import is correct

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.neutral.dark,
            },
          },
          legend: {
            text: {
              fill: colors.neutral.dark,
            },
          },
          ticks: {
            line: {
              stroke: colors.neutral.dark,
              strokeWidth: 1,
            },
            text: {
              fill: colors.neutral.dark,
            },
          },
        },
        legends: {
          text: {
            fill: colors.neutral.dark,
          },
        },
        tooltip: {
          container: {
            color: colors.primary.dark,
          },
        },
      }}
      // --- CHANGES START HERE ---
      // Update keys to reflect the new categories in mockBarData
      keys={["Hot Snacks", "Cold Beverages", "Indian Meals", "Desserts", "Breakfast Items", "Quick Bites"]}
      // Update indexBy to use 'country' (state abbreviation)
      indexBy="country"
      // --- CHANGES END HERE ---
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }} // You can keep 'nivo' or choose another scheme
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2", // Consider changing to match your theme more closely if desired
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312", // Consider changing to match your theme more closely if desired
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            // Updated match IDs to reflect new keys if patterns are still desired
            id: "Breakfast Items",
          },
          id: "dots",
        },
        {
          match: {
            id: "Indian Meals",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // Update legend for the x-axis to be more descriptive for states
        legend: isDashboard ? undefined : "Indian States",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // Update legend for the y-axis to be more descriptive for sales quantity
        legend: isDashboard ? undefined : "Sales Quantity",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Sales quantity by Indian states" // Updated ariaLabel
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in state: " + e.indexValue
      }
    />
  );
};

export default BarChart;