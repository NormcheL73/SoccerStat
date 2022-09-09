import { Grid } from "@mui/material"
import LeagueCardsItem from "../components/LeagueCardsItem"

function Leagues() {
  return (
    <Grid container spacing={2}>
      <LeagueCardsItem />
      <LeagueCardsItem />
      <LeagueCardsItem />
      <LeagueCardsItem />
      <LeagueCardsItem />
      <LeagueCardsItem />
    </Grid>
  )
}

export default Leagues
