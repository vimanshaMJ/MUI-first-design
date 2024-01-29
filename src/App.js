import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Stack direction="row" spacing={5} justifyContent="space-evenly">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
