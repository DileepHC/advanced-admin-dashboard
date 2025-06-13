// src/components/GeographyChart.jsx
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures"; // Mock GeoJSON data
import { mockGeographyData as data } from "../data/mockData"; // Mock geography data

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
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
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.neutral.dark,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.neutral.light,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default GeographyChart;