import { Grid } from "@mui/material"
import TeamCardsItem from "../components/TeamCardsItem"

function Teams({ teams }) {
  if (!teams) return null

  return (
    <Grid container spacing={4} justifyContent="center">
      {teams.map((team) => (
        <TeamCardsItem
          key={team.id}
          name={team.name}
          teamFlag={team.crestUrl}
        />
      ))}
    </Grid>
  )
}

export default Teams
