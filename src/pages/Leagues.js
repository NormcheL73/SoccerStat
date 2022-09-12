import { Grid } from "@mui/material"
import LeagueCardsItem from "../components/LeagueCardsItem"

function Leagues({ leagues }) {
  if (!leagues) return null

  return (
    <Grid container spacing={4} justifyContent="center">
      {leagues.map((league) => (
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

export default Leagues
