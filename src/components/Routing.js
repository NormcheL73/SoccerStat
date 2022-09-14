import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Error404 from "./Error404"
import LeaguesPaginated from "../pages/LeaguesPaginated"
import TeamMatches from "./TeamMatches"
import { getLeagues, getTeams } from "../api/fetch"
import Loading from "./Loading"
import LeagueMatches from "./LeagueMatches"
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

  const routesTeamMatches = teams.map((team) => (
    <Route
      path={`/teams/${team.id}/matches`}
      element={<TeamMatches name={team.name} />}
      key={team.id}
    />
  ))

  const routesLeagueMatches = leagues.map((league) => (
    <Route
      path={`/leagues/${league.id}/matches`}
      element={<LeagueMatches name={league.name} />}
      key={league.id}
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
