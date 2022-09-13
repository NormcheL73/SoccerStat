import { Grid } from "@mui/material"
import LeagueCardsItem from "./LeagueCardsItem"

function LeaguesList({ paginatedLeagues }) {
  if (!paginatedLeagues.length) return null

  return (
    <Grid container spacing={4} justifyContent="center">
      {paginatedLeagues.map((league) => (
        <LeagueCardsItem
          key={league.id}
          name={league.name}
          country={league.area.name}
          areaFlag={league.area.ensignUrl}
        />
      ))}
    </Grid>
  )
}

export default LeaguesList
