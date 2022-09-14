import { Grid } from "@mui/material"
import TeamCardsItem from "./TeamCardsItem"

function TeamsList({ paginatedTeams }) {
  if (!paginatedTeams.length) return null

  return (
    <Grid container spacing={4} justifyContent="center">
      {paginatedTeams.map((team) => (
        <TeamCardsItem
          key={team.id}
          teamId={team.id}
          name={team.name}
          teamFlag={team.crestUrl}
        />
      ))}
    </Grid>
  )
}

export default TeamsList
