import "./App.css"
import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import Navbar from "./components/Navbar"
import SearchField from "./components/SearchField"
import Routing from "./components/Routing"
import { getLeagues, getTeams } from "./api/fetch"
import PaginationControlled from "./components/PaginationControlled"

function App() {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchDataLeagues = async () => {
      const jsonLeagues = await getLeagues()
      if (!jsonLeagues) return
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchData ~ json", jsonLeagues)
      setLeagues(jsonLeagues.competitions)
    }
    fetchDataLeagues()
  }, [])

  useEffect(() => {
    const fetchDataTeams = async () => {
      const jsonTeams = await getTeams()
      if (!jsonTeams) return
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchData ~ json", jsonTeams)
      setTeams(jsonTeams.teams)
    }
    fetchDataTeams()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <PaginationControlled />
      <Box padding="1rem">
        <SearchField />
        <Routing leagues={leagues} teams={teams} />
      </Box>
    </div>
  )
}

export default App
