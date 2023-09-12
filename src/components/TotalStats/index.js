import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ListIcon from "../../assets/images/list.svg";

import useAxios from "axios-hooks";

const statLables = {
  totalMoviePersonalization: "Total Movie Personalisation",
  totalUsedPersonalization: "Total used Personalization",
  totalUsers: "Total Users",
};

const TotalStats = () => {
  const [{ data: stats, loading, error }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/watchcount-stats/"
  );

  const [stat, setStats] = useState([]);

  useEffect(() => {
    if (stats && Object.keys(stats).length > 0) {
      const keys = Object.keys(stats);
      let tempStats = [];

      for (let key of keys) {
        const tempStat = { label: statLables[key], value: stats[key] };
        tempStats = [...tempStats, tempStat];
      }

      setStats(tempStats);
    }
  }, [stats]);

  return (
    <Grid container item xs={12} gap="14px">
      {stat.map((data) => {
        const { isAlt } = data;
        return (
          <Box
            key={data.label}
            sx={{
              border: "1px solid #DBDCE0",
              padding: "15px",
              flexBasis: "12%",
              borderRadius: "8px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: isAlt ? "#2858D3" : "transparent",
              color: isAlt ? "#FFF" : "000",
            }}
          >
            <Box
              display="flex"
              justifyContent="end"
              sx={{
                minHeight: "38px",
              }}
            >
              <img src={ListIcon} alt="icon" />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                {data.label}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                {data.value}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};

export default TotalStats;
