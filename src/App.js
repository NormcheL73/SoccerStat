import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/system"
import Navbar from "./components/Navbar/Navbar"
import Leagues from "./pages/Leagues/Leagues"
import Teams from "./pages/Teams/Teams"
import Search from "./components/Search/Search"
import Error404 from "./components/Error404/Error404"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box display="flex" flexDirection="column" padding="1rem">
        <Search />
        <Routes>
          <Route path="/SoccerStat" element={<Leagues />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
    </div>
  )
}

export default App
