import Box from "@mui/material/Box";
import DefaultLayout from "./Layout/DefaultLayout";
import Overview from "./Pages/Overview";
import "./App.css";

function App() {
  return <DefaultLayout component={<Overview />} />;
}

export default App;
