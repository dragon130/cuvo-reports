import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useAxios from "axios-hooks";

const randomColor = {
  1: "#DF7B57",
  2: "#F8E76A",
  3: "#5E97F0",
  4: "#7A6FE9",
  5: "#DB658D",
  6: "#86D488",
};

const TopCategories = () => {
  const [{ data: categories, loading, error }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/mostPopularCategories/"
  );

  const [topCategories, setTopCategories] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    if (categories && Object.keys(categories).length > 0) {
      const keys = Object.keys(categories);
      const topCategories = keys.map((key) => {
        const tempCategory = {
          label: key,
          value: categories[key],
          color: randomColor[randomIntFromInterval(1, 6)],
        };
        return tempCategory;
      });

      setTopCategories(topCategories);
    }
  }, [categories]);

  return (
    <Grid item md={3} xs={12}>
      <Box
        sx={{
          border: "1px solid #DBDCE0",
          borderRadius: "8px",
          height: "100%",
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
            most popular Category
          </Typography>
        </Box>

        <Box
          sx={{
            height: "294px",
            maxHeight: "294px",
            overflowX: "auto",
            padding: "20px",
          }}
        >
          {topCategories.map((category) => {
            return (
              <Box display="flex" justifyContent="space-between" mb="18px">
                <Box>
                  <Box display="flex" alignItems="center" gap="10px">
                    <Box
                      sx={{
                        border: `3px solid ${category.color}`,
                        borderRadius: "50%",
                        width: "8px",
                        height: "8px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                    >
                      {category.label}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      background: "#2858D3",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {category.value}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
};

export default TopCategories;
