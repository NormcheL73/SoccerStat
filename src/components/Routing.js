import { Routes, Route } from "react-router-dom"
import Leagues from "../pages/Leagues"
import Teams from "../pages/Teams"
import Error404 from "./Error404"

function Routing() {
  return (
    <Routes>
      <Route path="/SoccerStat" element={<Leagues />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing
