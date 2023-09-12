import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useAxios from "axios-hooks";
import { useNavigate } from "react-router-dom";

const topMovies = [
  { id: 1, label: "The Dark Knight", value: 12 },
  { id: 2, label: "Spider-Man: Across the Spider-Verse", value: 28 },
  { id: 3, label: "Toy Story 3", value: 52 },
  { id: 4, label: "The Ice Age Adventures of Buck Wild", value: 80 },
  { id: 5, label: "The Sea Beast", value: 41 },
];

const TopMovies = () => {
  const navigate = useNavigate();

  const [{ data: movies, loading, error }] = useAxios(
    "https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/topPersonalizedMovies/"
  );

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    if (movies && Object.keys(movies).length > 0) {
      const keys = Object.keys(movies);
      const topMovies = keys.map((key) => {
        const tempMovie = {
          id: movies[key].playlistId,
          label: key,
          value: movies[key].personalized,
        };
        return tempMovie;
      });

      setTopMovies(topMovies);
    }
  }, [movies]);

  const handleSelectMovies = (id) => {
    navigate(`/preferences/${id}`);
  };

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
            TOP personalized Movies
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "20px",
          }}
        >
          {topMovies.map((movie) => {
            return (
              <Box
                display="flex"
                justifyContent="space-between"
                mb="18px"
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => handleSelectMovies(movie.id)}
              >
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        maxWidth: "200px",
                      }}
                    >
                      {movie.label}
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
                      {movie.value}
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

export default TopMovies;
