import "./App.css"
import { useEffect, useState } from "react"
import { Box, Container } from "@mui/system"
import Navbar from "./components/Navbar"
import SearchField from "./components/SearchField"
import Routing from "./components/Routing"
import { getLeagues } from "./api/fetch"

function App() {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const json = await getLeagues()

      if (!json) return
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchData ~ json", json)
      setLeagues(json.competitions)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Box display="flex" flexDirection="column" padding="1rem">
        <Container>
          <SearchField />
          <Routing leagues={leagues} />
        </Container>
      </Box>
    </div>
  )
}

export default App
