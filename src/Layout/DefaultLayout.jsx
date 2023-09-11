import Grid from '@mui/material/Grid';


const DefaultLayout = ({ component }) => {
  return (
    <Grid container sx={{
      padding: "20px",
    }}>
      {component}
    </Grid>
  )
}

export default DefaultLayout;