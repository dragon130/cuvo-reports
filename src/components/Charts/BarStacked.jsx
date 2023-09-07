import { useMemo } from 'react';
import Box from "@mui/material/Box";
import useDemoConfig from "../../utils/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { convertDataToChart } from "../../utils/helpers";


export default function BarStacked({ preferences = {} }) {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
    dataType: "ordinal",
    datums: 3,
  });

  const chartData = useMemo(() => {
    const res = convertDataToChart(preferences);
    if (Array.isArray(res)) {
      return res;
    }
    return [];
  }, [preferences]);

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
        stacked: true,
      },
    ],
    []
  );

  console.log("data >", data);
  console.log("chartData >", chartData);


  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
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
