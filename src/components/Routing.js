import { Routes, Route } from "react-router-dom"
import Leagues from "../pages/Leagues"
import Teams from "../pages/Teams"
import Error404 from "./Error404"

function Routing({ leagues }) {
  return (
    <Routes>
      <Route path="/SoccerStat" element={<Leagues leagues={leagues} />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing
