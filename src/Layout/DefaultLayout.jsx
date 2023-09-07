import Grid from '@mui/material/Grid';


const DefaultLayout = ({ component }) => {
  return (
    <Grid container sx={{
      background: "#1e1e1e",
      padding: "20px",
    }}>
      {component}
    </Grid>
  )
}

export default DefaultLayout;