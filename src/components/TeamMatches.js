import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

function TeamMatches({ name }) {
  if (name === "") return null
  return (
    <Link to="/teams">
      <Typography variant="h4">{name}</Typography>
    </Link>
  )
}

export default TeamMatches
