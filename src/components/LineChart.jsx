// src/components/LineChart.jsx
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false, timeframe = 'monthly' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Filter data based on the selected timeframe
  const filteredData = mockLineData.map(series => {
    let newData = [];
    if (timeframe === 'daily') {
      newData = series.data.filter(d => d.x.includes('/Jan')); // Assuming daily data is within a specific month, adjust as needed
    } else if (timeframe === 'weekly') {
      newData = series.data.filter(d => d.x.includes('Week'));
    } else { // 'monthly'
      newData = series.data.filter(d => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].includes(d.x));
    }
    return { ...series, data: newData };
  });

  return (
    <ResponsiveLine
      data={filteredData} // Use filteredData here
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
      colors={isCustomLineColors ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false, // Set to false to show individual line trends
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Timeframe", // Updated legend
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count", // Updated legend
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;