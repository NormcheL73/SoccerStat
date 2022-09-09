import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import footballImage from "../../images/футбольчик.jpg"

function LeagueCardsItem() {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={footballImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Link to="/teams" />
    </Grid>
  )
}

export default LeagueCardsItem
