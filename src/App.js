import "./App.css"
import { Box } from "@mui/system"
import Navbar from "./components/Navbar"
import Routing from "./components/Routing"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box padding="1rem">
        <Routing />
      </Box>
    </div>
  )
}

export default App
