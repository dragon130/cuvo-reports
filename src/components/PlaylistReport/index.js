import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import BarChart from "../Charts/Bar";
import BarChartStacked from "../Charts/BarStacked";

import useAxios from "axios-hooks";

const dummyRes = {
  preferences: {
    intro: { short: 25, long: 30 },
    animals: { rabbit: 27, dog: 28, bird: 100 },
    flowers: { yes: 50, no: 25 },
  },
};

const PlaylistReport = ({ playlist = {} }) => {
  const [{ data: playlists, loading, error }] = useAxios(
    "https://player.infusevideo.com/ibc/playlist.json"
  );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid item xs={12} mt="30px">
        <Box display="flex" alignItems="center" gap="15px">
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {playlist.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt="15px">
        <BarChart preferences={dummyRes.preferences} />
      </Grid>

      {/* <Grid item xs={12} mt="50px">
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Statistics
          </Typography>
        </Box>
        <Grid
          container
          item
          xs={12}
          mt="5px"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {dummyStatistics.map((stat) => {
            return (
              <Box
                display="flex"
                flexWrap="wrap"
                flexDirection="column"
                flexBasis="22%"
                sx={{
                  background: "#343434",
                  borderRadius: "4px",
                  padding: "15px",
                  color: "#fff",
                }}
              >
                <Box display="flex">
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>

                <Box display="flex" mt="15px" rowGap="15px" flexWrap="wrap">
                  {stat.data.map((x) => {
                    return (
                      <Box flexBasis="50%">
                        <Typography
                          sx={{
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          {x.value}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#b2b2b2",
                            fontSize: "11px",
                          }}
                        >
                          {x.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default PlaylistReport;
