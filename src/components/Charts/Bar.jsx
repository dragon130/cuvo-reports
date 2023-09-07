import { useMemo } from "react";

import Box from "@mui/material/Box";
import { Chart } from "react-charts";

import { convertDataToChart } from "../../utils/helpers";

export default function Bar({ preferences = {} }) {
  const chartData = useMemo(() => {
    const res = convertDataToChart(preferences);
    if (Array.isArray(res)) {
      return res;
    }
    return [];
  }, [preferences]);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
      },
    ],
    []
  );

  return (
    <>
      <Box
        sx={{
          background: "#343434",
          borderRadius: "4px",
          marginTop: "15px",
        }}
      >
        {chartData.length > 0 && (
          <Chart
            options={{
              data: chartData,
              primaryAxis,
              secondaryAxes,
            }}
          />
        )}
      </Box>
    </>
  );
}
