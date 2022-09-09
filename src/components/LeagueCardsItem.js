import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"
import { Link } from "react-router-dom"
import footballImage from "../images/футбольчик.jpg"

function LeagueCardsItem() {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/teams">
          <CardMedia
            component="img"
            height="140"
            image={footballImage}
            alt="green iguana"
            to="/teams"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default LeagueCardsItem
