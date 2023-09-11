import Box from "@mui/material/Box";
import Header from "./components/Header";
import DefaultLayout from "./Layout/DefaultLayout";
import Overview from "./Pages/Overview";
import "./App.css";

function App() {
  return (
    <Box>
      <Header />
      <DefaultLayout component={<Overview />} />
    </Box>
  );
}

export default App;
