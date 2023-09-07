import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import useDemoConfig from "../../utils/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <Box display='flex' alignItems="center" gap="15px">
        <Typography sx={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: 500,
        }}>User Activity</Typography>
        <Button variant="contained" onClick={randomizeData}>Randomize Data</Button>
      </Box>
      <Box sx={{
        background: "#343434",
        borderRadius: "4px",
        marginTop: "15px",
      }}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </Box>
    </>
  );
}
