import { useMemo } from 'react';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BarChart from "../../components/Charts/Bar";
import BarChartStacked from "../../components/Charts/BarStacked";
import LineChart from "../../components/Charts/Line";

import PlaylistReport from "../../components/PlaylistReport";

import useAxios from 'axios-hooks'


const dummyStatistics = [
  {
    label: "Users",
    data: [
      { label: "Unique users", value: 432 },
      { label: "Liked the movie", value: 678 },
      { label: "Users used preference", value: 123 },
    ],
  },
  {
    label: "Video",
    data: [
      { label: "Watched with Bird", value: 232 },
      { label: "Watched with predation", value: 432 },
      { label: "Watched with Bunny", value: 232 },
    ],
  },
  {
    label: "Preferences",
    data: [
      { label: "Short Intro", value: 455 },
      { label: "Alternate ending", value: 555 },
      { label: "Original ending", value: 323 },
      { label: "Long intro", value: 122 },
    ],
  },
  {
    label: "Feedback",
    data: [
      { label: "Neutral", value: 431 },
      { label: "Like", value: 143 },
      { label: "Dislike", value: 321 },
    ],
  },
];

const Overview = () => {
  const [{ data: playlists, loading, error }] = useAxios(
    'https://player.infusevideo.com/ibc/playlist.json'
  )


  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: 500,
          }}
        >
          Dashboard
        </Typography>
        <Typography
          sx={{
            color: "#787878",
          }}
        >
          Welcome back
        </Typography>
      </Grid>
      {Array.isArray(playlists) && playlists.map(playlist => {
        return (
          <PlaylistReport playlist={playlist} />
        )
      })}

      <Grid item xs={12} mt="50px">
        {/* <BarChart /> */}
      </Grid>

      <Grid item xs={12} mt="50px">
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
        <Grid container item xs={12} mt="5px" justifyContent="space-between" flexWrap="wrap">
          {dummyStatistics.map(stat => {
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
                  {stat.data.map(x => {
                    return (
                      <Box flexBasis="50%">
                        <Typography sx={{
                          fontWeight: 600,
                        }}> {x.value}</Typography>
                        <Typography sx={{
                          color: "#b2b2b2",
                          fontSize: "11px",
                        }}>{x.label}</Typography>
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
        </Grid>
      </Grid>

      <Grid item xs={12} mt="50px">
        <LineChart />
      </Grid>

      <Grid item xs={12} mt="50px">
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Clips
          </Typography>
        </Box>
        <Grid container item xs={12} mt="5px" justifyContent="space-between" flexWrap="wrap">
          {dummyStatistics.map(stat => {
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
                  {stat.data.map(x => {
                    return (
                      <Box flexBasis="50%">
                        <Typography sx={{
                          fontWeight: 600,
                        }}>{x.value}</Typography>
                        <Typography sx={{
                          color: "#b2b2b2",
                          fontSize: "11px",
                        }}> {x.label}</Typography>
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;
