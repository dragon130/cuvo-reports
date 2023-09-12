import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import BarChart from "../Charts/Bar";

import useAxios from "axios-hooks";

const dummyRes = {
  preferences: {
    intro: { short: 25, long: 30 },
    animals: { rabbit: 27, dog: 28, bird: 100 },
    flowers: { yes: 50, no: 25 },
  },
};

const PlaylistReport = ({ playlist = {} }) => {
  const [{ data: preference, loading, error }] = useAxios(
    `http://localhost:3003/api/preference-stats/${playlist.playlistId}`
  );

  return (
    <Box
      sx={{
        flexBasis: "49%",
      }}
    >
      <Grid item xs={12} mt="15px">
        <Box display="flex" alignItems="center" gap="15px">
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {playlist.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt="15px">
        <Box
          sx={{
            border: "1px solid #DBDCE0",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              borderRadius: "8px 8px 0 0",
              background: "#DBDCE0",
              padding: "10px 20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Top Picked Category
            </Typography>
          </Box>
          <BarChart preferences={dummyRes.preferences} />
        </Box>
      </Grid>
    </Box>
  );
};

export default PlaylistReport;
