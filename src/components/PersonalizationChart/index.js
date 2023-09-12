import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LineChart from "../ApexCharts/Line";

import useAxios from "axios-hooks";

const PersonalizationChart = () => {
  const [{ data: tags }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/personalizedStats/"
  );

  const [personalized, setPersonalized] = useState({
    categories: [],
    series: [],
  });

  useEffect(() => {
    if (tags && Object.keys(tags).length > 0) {
      const keys = Object.keys(tags);
      const categories = keys.map((key) => key);
      let seriesData = {};
      let series = [];

      for (let key of keys) {
        const subKeys = Object.keys(tags[key]);
        // eslint-disable-next-line no-loop-func
        subKeys.forEach((x) => {
          if (Array.isArray(seriesData[x]) && seriesData[x].length > 0) {
            seriesData = {
              ...seriesData,
              [x]: [...seriesData[x], tags[key][x]],
            };
          } else {
            seriesData = {
              ...seriesData,
              [x]: [tags[key][x]],
            };
          }
        });

        // eslint-disable-next-line no-loop-func
        series = subKeys.map((key) => {
          const tempData = { name: key, data: seriesData[key] };
          return tempData;
        });
      }

      setPersonalized({ categories, series });
    }
  }, [tags]);

  return (
    <Grid item md={5.8} xs={12}>
      <Box
        sx={{
          border: "1px solid #DBDCE0",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px 8px 0 0",
            background: "#f4f5f6",
            padding: "10px 20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            personalization watch vs non personalized
          </Typography>
        </Box>
        <LineChart
          width="600"
          categories={personalized.categories}
          series={personalized.series}
        />
      </Box>
    </Grid>
  );
};

export default PersonalizationChart;
