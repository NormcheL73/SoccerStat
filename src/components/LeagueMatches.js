import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

function LeagueMatches({ name }) {
  if (name === "") return null
  return (
    <Link to="/SoccerStat">
      <Typography variant="h4">{name}</Typography>
    </Link>
  )
}

export default LeagueMatches
