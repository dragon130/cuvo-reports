import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BarChart from "../ApexCharts/Bar";
import DonutChart from "../ApexCharts/Donut";

import useAxios from "axios-hooks";

const TotalPickedTags = () => {
  const [{ data: tags }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/toppickedcategories/"
  );

  const [{ data: area }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/areawise-stats/"
  );

  const [barChartState, setBarChartState] = useState({
    categories: [],
    series: [],
  });

  const [donutChartState, setDonutChartState] = useState({
    categories: [],
    series: [],
  });

  useEffect(() => {
    if (tags && Object.keys(tags).length > 0) {
      console.log("tags >", tags);

      const keys = Object.keys(tags);
      const categories = keys.map((key) => key);
      let seriesData = {};
      let series = [];

      for (let key of keys) {
        const subKeys = Object.keys(tags[key]);

        // eslint-disable-next-line no-loop-func
        subKeys.forEach((x) => {
          if (Array.isArray(seriesData[x]) && seriesData[x].length === 0) {
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
        // series = subKeys.map((key) => {
        //   const tempData = { name: key, data: seriesData[key] };
        //   return tempData;
        // });
      }

      if (seriesData && Object.keys(seriesData).length > 0) {
        const keys = Object.keys(seriesData);
        series = keys.map((key, index) => {
          const tempData = { name: key, data: seriesData[key] };
          return tempData;
        });
      }

      setBarChartState({ categories, series });
    }
  }, [tags]);

  useEffect(() => {
    if (area && Object.keys(area).length > 0) {
      const keys = Object.keys(area);
      const labels = keys.map((key) => key);
      const series = keys.map((key) => area[key]);

      setDonutChartState({ labels, series });
    }
  }, [area]);

  return (
    <Grid container item xs={12} mt="20px" mb="20px" gap="10px">
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          flexBasis: "49%!important",
        }}
      >
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
              Top Picked Tags
            </Typography>
          </Box>
          <BarChart
            width="600"
            categories={barChartState.categories}
            series={barChartState.series}
          />
        </Box>
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
        sx={{
          flexBasis: "49%!important",
        }}
      >
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
              Personalization by region
            </Typography>
          </Box>
          <DonutChart
            width="520"
            labels={donutChartState.labels}
            series={donutChartState.series}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TotalPickedTags;
