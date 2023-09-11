import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Logo from '../../assets/images/comp-logo.svg';

const Header = () => {
  return (
    <Grid container sx={{
      padding: "10px 32px",
      background: "#2858D3",
    }}>
      <Box>
        <img src={Logo} alt="logo" style={{ width: "100px" }} />
      </Box>
    </Grid>
  )
}

export default Header;