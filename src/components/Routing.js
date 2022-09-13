import { Routes, Route } from "react-router-dom"
import Teams from "../pages/Teams"
import Error404 from "./Error404"
import LeaguesPaginated from "../pages/LeaguesPaginated"

function Routing({ leagues, teams }) {
  return (
    <Routes>
      <Route
        path="/SoccerStat"
        element={<LeaguesPaginated leagues={leagues} />}
      />
      <Route path="/teams" element={<Teams teams={teams} />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing
