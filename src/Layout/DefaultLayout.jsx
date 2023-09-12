import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";

import Router from "../routes/index";

import DashboardIcon from "../assets/images/dashboard-icon.svg"
import MinimizedIcon from "../assets/images/minimize-icon.svg"

const nav = [{ label: "Dashboard", value: "", icon: DashboardIcon, path: "/" }]


const DefaultLayout = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Grid container>
      <Grid item xs={2} sx={{
        borderRight: "solid 1px #e9e9e9",
        height: "99vh"
      }}>
        <Grid item xs={12} sx={{
          borderBottom: "1px solid #E9E9E9",
          padding: "11px 20px",
        }}>
          <img src={MinimizedIcon} alt="icon" />
        </Grid>

        <Box style={{
          padding: "20px 0px 20px 80px"
        }}>
          {nav.map(link => {
            return (
              <Box display="flex" gap="19px" mb="23px" alignItems="center" sx={{
                background: "#eaeefb",
                padding: "10px 10px 10px 15px",
                borderRadius: "25px 0 0 25px",
                cursor: "pointer",
              }}
                onClick={() => handleNavigation(link.path)}
              >
                <Box sx={{
                  display: "inline-flex",
                }}>
                  <img src={link.icon} alt="icon" />
                </Box>
                <Box>
                  <Typography sx={{
                    color: "#2858D3",
                    fontWeight: 600,

                  }}>{link.label}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Router />
      </Grid>
    </Grid>
  )
}

export default DefaultLayout;