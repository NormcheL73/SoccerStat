import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Error404 from "./Error404"
import LeaguesPaginated from "../pages/LeaguesPaginated"
import TeamMatches from "../pages/TeamMatches"
import { getLeagues, getTeams } from "../api/fetch"
import Loading from "./Loading"
import LeagueMatches from "../pages/LeagueMatches"
import TeamsPaginated from "../pages/TeamsPaginated"

function Routing() {
  const [teams, setTeams] = useState([])
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchDataTeams = async () => {
      const jsonTeams = await getTeams()
      if (!jsonTeams) return
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchData ~ json", jsonTeams)
      setTeams(jsonTeams.teams)
    }
    fetchDataTeams()
  }, [])

  useEffect(() => {
    const fetchDataLeagues = async () => {
      const jsonLeagues = await getLeagues()
      if (!jsonLeagues) return
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchData ~ json", jsonLeagues)
      setLeagues(jsonLeagues.competitions)
    }
    fetchDataLeagues()
  }, [])

  const routesLeagueMatches = leagues.map((league) => (
    <Route
      path={`/leagues/${league.id}/matches`}
      element={<LeagueMatches league={league} />}
      key={league.id}
    />
  ))

  const routesTeamMatches = teams.map((team) => (
    <Route
      path={`/teams/${team.id}/matches`}
      element={<TeamMatches team={team} />}
      key={team.id}
    />
  ))

  if (!teams.length) return <Loading />
  if (!leagues.length) return <Loading />

  return (
    <Routes>
      <Route
        path="/SoccerStat"
        element={<LeaguesPaginated leagues={leagues} />}
      />
      <Route path="/teams" element={<TeamsPaginated teams={teams} />} />
      {routesLeagueMatches}
      {routesTeamMatches}
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing
