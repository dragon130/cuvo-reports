import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { useParams } from "react-router-dom";

import Tags from "./Tags";

import useAxios from "axios-hooks";

const Preferences = () => {
  const { id } = useParams();
  const [{ data: movie, loading, error }] = useAxios(
    `https://cc0gqkfnp6.execute-api.us-east-1.amazonaws.com/development/api/movie-stats/${id}`
  );

  const [movieTags, setMovieTags] = useState([]);

  useEffect(() => {
    if (movie && Object.keys(movie).length > 0) {
      const { tags } = movie;
      const keys = Object.keys(tags);

      const tempMovieTas = keys.map((key) => {
        let values = [];
        if (tags[key].values) {
          const subTags = tags[key].values;
          const valueKeys = Object.keys(tags[key].values);

          values = valueKeys.map((key) => {
            const tempValueKeys = {
              name: key,
              value: subTags[key].personalized,
            };

            return tempValueKeys;
          });
        }

        const tempTag = {
          name: key,
          personalized: tags[key].personalized,
          nonPersonalized: tags[key].nonPersonalized,
          values: values,
        };

        return tempTag;
      });

      setMovieTags(tempMovieTas);
    }
  }, [movie]);

  if (loading) {
    return (
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={30} />
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          borderBottom: "1px solid #E9E9E9",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            padding: "10px 20px",
            color: "#3D4043",
          }}
        >
          {movie && movie.name}
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          padding: "30px",
        }}
        gap="15px"
      >
        {movieTags.map((tag) => {
          return <Tags tag={tag} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Preferences;
